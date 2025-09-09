import BlockquoteWrapper from './BlockquoteWrapper';
import BlockquoteAuthor from './BlockquoteAuthor';
import BlockquoteContent from './BlockquoteContent';

const Blockquote = Object.assign(BlockquoteWrapper, {
    Author: BlockquoteAuthor,
    Content: BlockquoteContent,
});

export default Blockquote;
