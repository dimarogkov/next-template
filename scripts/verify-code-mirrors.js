#!/usr/bin/env node

/**
 * Verifies that `src/constants/code/**\/{code,demo}.ts` constants are a byte-for-byte
 * mirror of the real component/demo file they document, re-indented from this repo's
 * 4-space source to the 2-space convention used in the doc-site code viewer.
 *
 * Every file in every component's subfolder is scanned except `index.ts` (no
 * template-literal content to check) and the whole `npm/` folder (install-command
 * snippets, not component mirrors). `usage.ts` is scanned and counted too, but it is
 * never byte-diffed or auto-fixed: it is a hand-written illustrative snippet (often
 * just one prop shown with a type-union string as its example value), not a copy of
 * a single real file — there's nothing to mirror it against. It always lands in the
 * "unmapped" bucket below; that's expected, not a bug. A prop rename, a value-shape
 * change (e.g. a prop going from a single value to an array), or anything else that
 * makes a `usage.ts` example stale still needs a human to catch it and update the
 * example by hand — ideally in the same change that makes the rename.
 *
 * Usage:
 *   node scripts/verify-code-mirrors.js        # report mismatches, exit 1 if any
 *   node scripts/verify-code-mirrors.js --fix  # rewrite mismatched constants in place
 */

const fs = require('fs');
const path = require('path');

const FIX = process.argv.includes('--fix');
const REPO = path.resolve(__dirname, '..');

const COMPONENT_ROOTS = [
    'src/components',
    'src/hooks',
    'src/providers',
    'src/root',
    'src/store',
    'src/form-validation',
    'src/utils',
    'src/services',
    'src/types',
    'app'
];

// Real files whose exported identifier collides with another file's (e.g. both
// `src/form-validation/yup/formOptions.ts` and `.../zod/formOptions.ts` export
// `formOptions`) — the auto-detected mapping below is first-match-wins, so these
// need to be pinned explicitly or the wrong file's content gets mirrored silently.
const OVERRIDES = {
    YUP_CODE: 'src/form-validation/yup/index.ts',
    YUP_OPTIONS_CODE: 'src/form-validation/yup/formOptions.ts',
    YUP_SCHEMA_CODE: 'src/form-validation/yup/schema.ts',
    ZOD_CODE: 'src/form-validation/zod/index.ts',
    ZOD_OPTIONS_CODE: 'src/form-validation/zod/formOptions.ts',
    ZOD_SCHEMA_CODE: 'src/form-validation/zod/schema.ts',
    ZUSTAND_CODE: 'src/store/zustand/index.ts',
    TANSTACK_QUERY_DEMO_CODE: 'app/documentation/(data-fetching-pages)/tanStack-query/TanStackQueryDemo.tsx'
};

// Deliberately not 1:1 with a single real file — see AGENTS.md.
const SKIP_NAMES = new Set(['AVATAR_STYLE_CODE', 'REDUX_TOOLKIT_CODE', 'RTK_QUERY_CODE']);

// Matches `export const NAME = \`...\`;`, treating any backslash-escaped character
// (including an escaped backtick) as part of the body rather than its terminator —
// a naive `[\s\S]*?` lazy match stops at the first `` `; `` it sees, which truncates
// early when the mirrored source itself contains a template literal ending in `` `; ``.
const BLOCK_RE = /export const (\w+) = `((?:\\.|[^`\\])*)`;/g;

function walk(dir, out = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full, out);
        else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) out.push(full);
    }
    return out;
}

function buildIdentifierIndex() {
    const idToFile = new Map();

    for (const root of COMPONENT_ROOTS) {
        const rootPath = path.join(REPO, root);
        if (!fs.existsSync(rootPath)) continue;

        const files = walk(rootPath);

        for (const file of files) {
            if (path.basename(file) === 'index.ts') continue;

            const content = fs.readFileSync(file, 'utf8');
            const match =
                content.match(/^export const (\w+) =/m) ||
                content.match(/^const (\w+) =/m) ||
                content.match(/^export interface (\w+) /m);

            if (match && !idToFile.has(match[1])) {
                idToFile.set(match[1], file);
            }
        }

        for (const file of files.filter((f) => path.basename(f) === 'index.ts')) {
            const content = fs.readFileSync(file, 'utf8');
            const match = content.match(/^export const (\w+) = Object\.assign/m);
            if (match) idToFile.set(`${match[1]}__INDEX__`, file);
        }
    }

    return idToFile;
}

// Only meaningful for `code.ts`/`demo.ts` blocks, which ARE a byte-for-byte copy of
// the real file — matching `export const X` anywhere in the block body is then
// equivalent to matching the real file's own top-level export. `usage.ts` blocks can
// contain an illustrative inline declaration (e.g. their own `export const Demo = () =>`)
// that would otherwise spuriously resolve to an unrelated real file, so `usage.ts` is
// never run through this at all — see `collectTargetFiles`.
function resolveSourceFile(constName, blockBody, idToFile) {
    if (OVERRIDES[constName]) {
        return path.join(REPO, OVERRIDES[constName]);
    }

    const idMatch =
        blockBody.match(/^export const (\w+) = forwardRef/m) ||
        blockBody.match(/^export const (\w+) = \(/m) ||
        blockBody.match(/^export const (\w+) =/m) ||
        blockBody.match(/^export interface (\w+) /m) ||
        blockBody.match(/^const (\w+) = forwardRef/m) ||
        blockBody.match(/^const (\w+) = \(/m) ||
        blockBody.match(/^const (\w+) =/m);

    if (!idMatch) return null;

    const declaredName = idMatch[1];

    if (/Object\.assign\(/.test(blockBody) && idToFile.has(`${declaredName}__INDEX__`)) {
        return idToFile.get(`${declaredName}__INDEX__`);
    }

    return idToFile.get(declaredName) ?? null;
}

function reindent4to2(body) {
    return body
        .split('\n')
        .map((line) => {
            const match = line.match(/^( +)(.*)$/);
            if (!match) return line;

            const [, spaces, rest] = match;
            return ' '.repeat(Math.round(spaces.length / 2)) + rest;
        })
        .join('\n');
}

function escapeForTemplateLiteral(raw) {
    return raw.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function collectTargetFiles() {
    const codeDir = path.join(REPO, 'src/constants/code');
    const targets = [];

    for (const sub of fs.readdirSync(codeDir)) {
        if (sub === 'npm') continue;

        const subPath = path.join(codeDir, sub);
        if (!fs.statSync(subPath).isDirectory()) continue;

        for (const fname of fs.readdirSync(subPath)) {
            if (fname === 'index.ts') continue;
            if (!fname.endsWith('.ts')) continue;

            targets.push(path.join(subPath, fname));
        }
    }

    return targets;
}

function main() {
    const idToFile = buildIdentifierIndex();
    const targetFiles = collectTargetFiles();

    const report = { mismatched: [], ok: [], skipped: [], unmapped: [] };

    for (const file of targetFiles) {
        // `usage.ts` has no single real file it mirrors byte-for-byte — never attempt
        // to resolve or fix it, only count it as scanned (see file header comment).
        const isUsageFile = path.basename(file) === 'usage.ts';

        let content = fs.readFileSync(file, 'utf8');
        const replacements = [];
        let match;

        while ((match = BLOCK_RE.exec(content))) {
            const [fullMatch, constName, blockBody] = match;
            const label = `${path.relative(REPO, file)} :: ${constName}`;

            if (SKIP_NAMES.has(constName)) {
                report.skipped.push(label);
                continue;
            }

            if (isUsageFile) {
                report.unmapped.push(label);
                continue;
            }

            const sourceFile = resolveSourceFile(constName, blockBody, idToFile);

            if (!sourceFile || !fs.existsSync(sourceFile)) {
                report.unmapped.push(label);
                continue;
            }

            const rawSource = fs.readFileSync(sourceFile, 'utf8').replace(/\n$/, '');
            const expectedBody = escapeForTemplateLiteral(reindent4to2(rawSource));

            if (expectedBody === blockBody) {
                report.ok.push(label);
                continue;
            }

            report.mismatched.push(label);
            replacements.push({ fullMatch, newBlock: `export const ${constName} = \`${expectedBody}\`;` });
        }

        if (FIX && replacements.length) {
            for (const { fullMatch, newBlock } of replacements) {
                content = content.replace(fullMatch, newBlock);
            }
            fs.writeFileSync(file, content, 'utf8');
        }
    }

    console.log(`Checked ${targetFiles.length} files, ${report.ok.length + report.mismatched.length} constants.`);

    if (report.skipped.length) {
        console.log(`\nSkipped (intentionally illustrative, not 1:1): ${report.skipped.length}`);
        report.skipped.forEach((l) => console.log('  SKIP:', l));
    }

    if (report.unmapped.length) {
        console.log(`\nUnmapped (usage.ts, or no matching real source file found): ${report.unmapped.length}`);
        report.unmapped.forEach((l) => console.log('  ???:', l));
    }

    if (report.mismatched.length) {
        console.log(`\n${FIX ? 'Fixed' : 'Mismatched'}: ${report.mismatched.length}`);
        report.mismatched.forEach((l) => console.log(FIX ? '  FIXED:' : '  DRIFT:', l));

        if (!FIX) {
            console.log('\nRun `node scripts/verify-code-mirrors.js --fix` to update them.');
            process.exit(1);
        }
    } else {
        console.log('\nAll mirrored constants are up to date.');
    }
}

main();
