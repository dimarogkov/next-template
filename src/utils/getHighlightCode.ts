import { codeToHtml } from 'shiki';

const ELLIPSIS_PLACEHOLDER = '___ELLIPSIS___';
const ELLIPSIS_PLACEHOLDER_REGEX = new RegExp(ELLIPSIS_PLACEHOLDER, 'g');

export const getHighlightCode = async (code: string) => {
    const preparedCode = code.replace(/>\.\.\.</g, `>${ELLIPSIS_PLACEHOLDER}<`);

    const highlighter = await codeToHtml(preparedCode, {
        theme: 'github-dark',
        lang: 'tsx'
    });

    return highlighter.replace(ELLIPSIS_PLACEHOLDER_REGEX, '<span class="code-ellipsis">...</span>');
};
