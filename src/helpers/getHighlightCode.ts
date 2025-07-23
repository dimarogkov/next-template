import { codeToHtml } from 'shiki';

export const getHighlightCode = async (code: string) => {
    const highlighter = await codeToHtml(code, {
        theme: 'github-dark',
        lang: 'tsx',
    });

    return highlighter;
};
