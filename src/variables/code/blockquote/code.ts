export const BLOCKQUOTE_CODE = `import BlockquoteWrapper from './BlockquoteWrapper';
import BlockquoteAuthor from './BlockquoteAuthor';
import BlockquoteContent from './BlockquoteContent';

const Blockquote = Object.assign(BlockquoteWrapper, {
    Author: BlockquoteAuthor,
    Content: BlockquoteContent,
});

export default Blockquote;`;

export const BLOCKQUOTE_WRAPPER_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const BlockquoteWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className={\`relative flex flex-col gap-1.5 w-full pl-3 md:pl-4 border-l-4 border-border \${className}\`}
        />
    );
});

BlockquoteWrapper.displayName = 'BlockquoteWrapper';
export default BlockquoteWrapper;`;

export const BLOCKQUOTE_AUTHOR_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const BlockquoteAuthor: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={\`relative w-full \${className}\`} />;
});

BlockquoteAuthor.displayName = 'BlockquoteAuthor';
export default BlockquoteAuthor;`;

export const BLOCKQUOTE_CONTENT_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const BlockquoteContent: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={\`relative w-full \${className}\`} />;
});

BlockquoteContent.displayName = 'BlockquoteContent';
export default BlockquoteContent;`;
