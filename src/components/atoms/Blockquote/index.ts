import BlockquoteWrapper from './BlockquoteWrapper';
import BlockquoteAuthor from './BlockquoteAuthor';
import BlockquoteContent from './BlockquoteContent';

export const Blockquote = Object.assign(BlockquoteWrapper, {
    Author: BlockquoteAuthor,
    Content: BlockquoteContent,
});
