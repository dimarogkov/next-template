# Agent Guide

This file is the shared operating contract for AI coding agents working in this repository. Keep changes focused, verify them locally, and prefer the project's existing patterns over new conventions.

## Project

- **Next Template** — a Next.js 15 (App Router) component library and playground, using React 19 and TypeScript. There is no `pages/` directory, no `craco`/CRA tooling — routes live under `app/`.
- Routing is file-based via the App Router: `app/documentation` holds route groups `(components-pages)`, `(data-fetching-pages)`, `(form-validation-pages)`, `(store-pages)`, each folder a route segment with its own `page.tsx` (+ a colocated `XDemo.tsx` for the live preview). `app/layout.tsx`, `app/page.tsx`, `app/not-found.tsx`, `app/error.tsx` are the root-level special files.
- Components follow an atomic-design layout: `src/components/{atoms,molecules,organisms}`, each with a barrel `index.ts`. There is no `components/pages` folder here (unlike the sibling CRA-based `react-template` project) — page-level composition lives directly in `app/`.
- Styling is Tailwind CSS v4, configured CSS-first: theme tokens (colors, custom animations/keyframes) live in `@theme` inside `app/globals.css`. There is no `tailwind.config.ts` — it was removed when the project migrated to v4.
- State management: both Redux Toolkit (`src/store/redux-toolkit`) and Zustand (`src/store/zustand`) exist side by side as parallel demos. Match whichever the surrounding feature already uses; don't introduce a third state layer.
- Data fetching: TanStack Query (`@tanstack/react-query`) and Axios for REST calls; an RTK Query slice example lives in `src/store/redux-toolkit/todosApiSlice.ts`.
- Forms: `react-hook-form` with `zod` or `yup` resolvers via `@hookform/resolvers`. Schemas and form options live in `src/form-validation/{zod,yup}`.
- Icons: `lucide-react` only (pinned to v1 — it dropped brand/logo icons such as GitHub in that major). Use an inline SVG for brand marks instead (see `src/components/organisms/Header/Header.tsx`), don't add another icon package.
- Path aliases (`tsconfig.json`): `@components/*`, `@form-validation/*`, `@services/*`, `@store/*`, `@interfaces/*` (→ `src/types/interfaces`) support sub-paths; `@constants`, `@code` (→ `src/constants/code`), `@hooks`, `@providers` (→ `src/providers`), `@root` (→ `src/root`), `@utils` are folder-level only (no `/*`) — import from that folder's `index.ts` barrel, not a sub-path.
- `src/root` holds the top-level shell (`Root`, `RootLayout`, `RootMain`) consumed by `app/layout.tsx`; `src/providers` holds `RootProvider` (composes `StoreProvider` + TanStack Query's `QueryClientProvider` + `MainProvider`) and the `MainContext`/`MainProvider` pair backing the `useMain` hook (sidebar-open state, etc.).

## Commands

- Start dev server: `npm run dev`
- Build: `npm run build` (type-checks via `tsc` as part of the Next.js build, then produces the production bundle — the fastest signal for compile correctness)
- Start production server (after build): `npm run start`
- Lint: `npm run lint` (`next lint`, backed by `eslint-config-next`; it is deprecated in favor of the plain ESLint CLI as of Next 16 but still works here)
- Format all files: `npm run format`

There is no standalone ESLint flat config here (unlike the sibling `react-template`/CRA project) — linting goes through `next lint`. There is no test runner configured (`npm run test` does not exist) and no Storybook/E2E setup — don't add any of them as a side effect of an unrelated change.

For UI changes, run `npm run dev` and click through the affected page(s) — pay special attention to `Header`, `Sidebar`, `Footer`, and the documentation detail layout (`ComponentsFooter`/`ComponentsWrapper`), since these render on nearly every route.

## Code Style

- TypeScript is strict; avoid `any` unless there is no safe local type. Exception: this codebase's compound components (`cloneElement`-based prop injection in `Accordion`, `Dropdown`, `Select`, `Tabs`, `Avatar`, `Modal`, etc.) intentionally cast children to `ReactElement<any>` because the child can be any one of several sibling components with different prop shapes. Match that existing pattern rather than fighting it with a narrower cast.
- **Every component is declared and exported in one statement — `export const X = ...` — never a separate `export default` and never `export default function X()`.** Two shapes, depending on whether the component forwards a ref:
    - Ref-forwarding atoms: `export const X = forwardRef<HTMLElement, Props>((props, ref) => {...});` followed by `X.displayName = 'X';` on its own line right after (the `displayName` line is required since `forwardRef`'s render function is otherwise anonymous in devtools; it's a plain statement, not itself exported).
    - Everything else (organisms, molecules, hooks, providers): `export const X = (props) => {...};` — nothing follows it.
    - Exception: Next.js App Router special files (`app/**/page.tsx`, `layout.tsx`, `error.tsx`, `not-found.tsx`, `loading.tsx`, `template.tsx`) are framework entry points that Next.js discovers by `export default` specifically — those keep `const X = (...) => {...};` plus a trailing `export default X;`. Regular files colocated in a route folder (e.g. `XDemo.tsx`) are not special and follow the normal single-statement `export const` rule.
- Every component/hook file has a colocated `index.ts` barrel that re-exports it as a named export: `import { X } from './X'; export { X };` — consumed by the parent folder's barrel. Compound components (`Accordion`, `Dropdown`, `Select`, `Tabs`, `Avatar`, `Modal`, `Card`, `Btn`, `Pagination`, `Carousel`, `Breadcrumb`-adjacent atoms, etc.) assemble their sub-parts via `Object.assign` in that same `index.ts`: `export const Accordion = Object.assign(AccordionWrapper, { Item: AccordionItem, ... });`. Match this two-level barrel structure for new components; don't flatten it.
- Reuse existing atoms/molecules/organisms, hooks, schemas, store slices, and utils before adding new ones.
- Do not add console logging except `console.warn`/`console.error` when intentionally useful.
- Add comments only where genuinely needed (non-obvious logic, `TODO`/`FIXME`, workarounds) — prefer self-explanatory code over restating what it does.
- Use type-only imports where possible.
- Use the `classnames` package (imported as `cn`) for conditional or multi-part class strings — `cn('base classes', { 'conditional-class': someBool }, extraClassNameProp)`. A single static class plus an optional `className` prop can stay a plain template literal; reach for `cn` once there's any conditional logic.
- Prettier: 4-space indent, single quotes, no trailing commas, 120 print width, LF endings (`.prettierrc`). `prettier-plugin-tailwindcss` sorts Tailwind classes and also sorts arguments passed to the `cn(...)` helper (`tailwindFunctions: ["cn"]`) — don't hand-order classes inside `cn()`.

### Tailwind CSS v4

This project runs Tailwind v4. Write v4 syntax, not v3:

- Important modifier goes at the end: `bg-red-500!`, not `!bg-red-500`.
- Shifted scales — the v3 names still compile but now mean a different size, so never copy them from v3 snippets: `shadow-sm`→`shadow-xs`, `shadow`→`shadow-sm`, `blur`→`blur-sm`, `backdrop-blur`→`backdrop-blur-sm`, `rounded`→`rounded-sm`, `rounded-sm`→`rounded-xs`, `ring`→`ring-3`. Same trap for `outline-none`, which now means `outline-style: none` — use `outline-hidden` for the old behavior.
- Renamed: `bg-gradient-to-*`→`bg-linear-to-*`, `break-words`→`wrap-break-word`, `start-*`/`end-*`→`inset-s-*`/`inset-e-*`, `flex-shrink-*`/`flex-grow-*`→`shrink-*`/`grow-*`. `*-opacity-*` utilities are gone — use the `/50` slash modifier.
- Variants stack left-to-right: `dark:hover:bg-x`, not `hover:dark:bg-x`.
- Boolean data attributes have a shorthand: `data-disabled:`, `data-active:`. Keep the bracket form for values: `data-[state=open]:`.
- CSS variables in arbitrary values use parentheses: `w-(--radix-select-trigger-width)`, not `w-[--radix-...]`.
- `dark:` is now zero-specificity (`:where(.dark, …)`), so `hover:` beats `dark:` on the same property. This project doesn't currently toggle a `.dark` class or rely on `dark:` variants in real UI — don't assume a dark-mode system exists without checking.
- `hover:` only applies on devices that report `hover: hover`; never rely on it for touch interactions.
- The expanded default spacing scale includes fractional rem tokens — prefer the named token over an arbitrary pixel value when one already matches: `px-7.5` (30px) not `px-[30px]`, `size-7.5` not `size-[30px]`, `md:w-200` not `md:w-[800px]`.
- Theme tokens (colors, custom `animate-*` keyframes) live in `@theme` in `app/globals.css` — there is no `tailwind.config.js` and no `@config` directive. Add new tokens there, not in a JS config file.
- Custom reusable classes in this project are plain CSS rules in `app/globals.css`, wrapped in `@layer components` (e.g. `.page-container { @apply m-auto w-full ... }`), not the `@utility` at-rule Tailwind v4 recommends. Match that existing style for one-off helper classes; `@apply` still works fine in v4. The `@layer components` wrapper matters: an unlayered rule always beats every Tailwind utility regardless of source order (per the CSS Cascade Layers spec).
- Never name a custom class the same as a real Tailwind utility (`container`, `group`, `peer`, `sr-only`, `truncate`, etc. are all reserved words in v4's utility set). Tailwind's content scanner does naive text extraction over every scanned file — it has no idea whether a match is a JSX `className` or something unrelated like a JS object key — so _any_ literal occurrence of the word anywhere in `src`/`app` auto-generates that utility in `@layer utilities`, which then outranks a same-named `@layer components` rule and silently wins. This is exactly why the page wrapper class here is `.page-container`, not `.container`: `Sidebar.tsx`'s `useScroll({ container: sidebarListRef })` (a real `framer-motion` option, nothing to do with CSS) is enough to trigger Tailwind's built-in `container` utility, which would outrank a same-named `@layer components` rule. Assume the collision risk exists for any reserved utility name regardless of what else the word is doing in the file.
- `translate-*` / `scale-*` / `rotate-*` now emit the standalone `translate`/`scale`/`rotate` properties instead of one `transform`. Two consequences:
    - They no longer override `tailwindcss-animate`-style keyframes (which animate `transform`) — they stack. Do not combine `translate-x-[-50%]`-style centering with `slide-in-from-*` / `slide-out-to-*`; the offsets add up and the element starts far off-position.
    - An arbitrary transition list must name the real property: `transition-[rotate,width]`, not `transition-[transform,width]`, or the movement is not animated at all. `transition`, `transition-all`, and `transition-transform` already cover `transform, translate, scale, rotate`.
- v4 targets Safari 16.4+, Chrome 111+, Firefox 128+, and there is no autoprefixer — do not add vendor-prefixed properties by hand unless Lightning CSS misses one.
- Add icons only through `lucide-react`. Do not add new SVG assets or icon libraries — pick an existing lucide icon name, or fall back to a hand-written inline SVG only for brand marks lucide doesn't ship.

## React & Next.js

- This is Next.js 15 App Router, not CRA and not Pages Router — don't reach for `react-router-dom`, `pages/`, `getServerSideProps`/`getStaticProps`, or `_app`/`_document`; they don't apply here.
- Use `next/link`'s `<Link href="...">` for internal navigation (never `<a>` for in-app routes), `usePathname()`/`useRouter()` from `next/navigation` for the current path or programmatic navigation (there is no `NavLink` — compute the active state yourself, as `HeaderLink`/`SidebarLink`/`Breadcrumb` do).
- Add `'use client'` as the very first line (before imports) for any component that uses hooks, event handlers, `framer-motion`, or browser-only APIs. Route-level `page.tsx`/`layout.tsx` files stay server components by default and delegate interactivity to a client child (see `DocumentationDetailClient`, `DocumentationClient`, `ComponentsFooter`). Don't blanket-add `'use client'` to a file that doesn't need it.
- Avoid importing a component from its own ancestor barrel (e.g. a file under `organisms/Components/*` importing something re-exported by the top-level `organisms/index.ts`) when the target is actually a sibling or cousin folder — that creates a barrel import cycle. Import siblings from their own subfolder barrel (`@components/organisms/Components`) or a relative path instead.
- Components may accept `ref` as a plain prop (React 19) for genuinely new work, but this codebase still uses `forwardRef` throughout for ref-forwarding atoms — match the `forwardRef` style already used in the file/family you're editing rather than mixing conventions within one component tree.
- Keep React Query cache keys stable and include all query dependencies.
- Keep Zustand store updates predictable and narrowly scoped; keep Redux Toolkit slices/selectors colocated in `src/store/redux-toolkit`.

## UX

- Reuse the existing design language before creating new UI primitives.
- Build responsive states for tablet and desktop.
- Keep loading, empty, error, disabled, and optimistic states in mind when changing user flows.
- Preserve accessibility: semantic elements, keyboard interaction, focus states, labels, and readable contrast.
- Do not introduce visible instructional copy unless the product experience requires it.

## Tests

- There is no test runner configured in this project (no Jest/Vitest/RTL setup, no `npm run test` script). There is no E2E setup and no Storybook. Don't add any of them as a side effect of an unrelated change — only set one up if the user explicitly asks for it as its own task.
- If a check cannot be run, state why and mention the remaining risk.

## Dependencies & Toolchain

- `typescript` is pinned to `^5.9.3` — re-verify `npm run build` after bumping it, since Next's tooling and type-checking are sensitive to major TS version jumps.
- `react`/`react-dom` are on 19, matched by `@types/react`/`@types/react-dom`. Components still use `forwardRef` — don't convert an existing component's ref handling as a drive-by change even though React 19 supports `ref` as a plain prop.
- `tailwindcss`/`@tailwindcss/postcss` are on v4 — see the Tailwind section above before touching styling or `postcss.config.mjs`.
- Keep dependency changes intentional and explain why they're needed.

## Safety

- Never commit secrets, tokens, or real private data.
- Treat any `.env*` file as sensitive; do not print or copy values into code or docs.
- Do not rewrite unrelated files or undo user changes.
- Avoid destructive commands unless the user explicitly asks for them.
- Keep dependency changes intentional and explain why they are needed.

## Git

- Before editing, check the working tree and respect existing uncommitted changes.
- Keep commits focused on one logical change.
- Do not amend, rebase, reset, or force-push unless the user explicitly asks.
- When reporting work, summarize changed files and verification performed.
