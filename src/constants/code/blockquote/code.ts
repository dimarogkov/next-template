export const BLOCKQUOTE_CODE = `import { BlockquoteWrapper } from './BlockquoteWrapper';
import { BlockquoteAuthor } from './BlockquoteAuthor';
import { BlockquoteContent } from './BlockquoteContent';

export const Blockquote = Object.assign(BlockquoteWrapper, {
  Author: BlockquoteAuthor,
  Content: BlockquoteContent
});`;

export const BLOCKQUOTE_WRAPPER_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
}

export const BlockquoteWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn('border-border relative flex w-full flex-col gap-1.5 border-l-4 pl-3 md:pl-4', className)}
    />
  );
});

BlockquoteWrapper.displayName = 'BlockquoteWrapper';`;

export const BLOCKQUOTE_AUTHOR_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
}

export const BlockquoteAuthor = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
  return <div ref={ref} {...props} className={cn('relative w-full', className)} />;
});

BlockquoteAuthor.displayName = 'BlockquoteAuthor';`;

export const BLOCKQUOTE_CONTENT_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
}

export const BlockquoteContent = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
  return <div ref={ref} {...props} className={cn('relative w-full', className)} />;
});

BlockquoteContent.displayName = 'BlockquoteContent';`;
