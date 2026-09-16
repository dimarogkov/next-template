export const CARD_CODE = `import { CardWrapper } from './CardWrapper';
import { CardHead } from './CardHead';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

export const Card = Object.assign(CardWrapper, {
  Head: CardHead,
  Body: CardBody,
  Footer: CardFooter
});`;

export const CARD_WRAPPER_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
}

export const CardWrapper = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn('border-border bg-border relative w-full overflow-hidden rounded-md border', className)}
    />
  );
});

CardWrapper.displayName = 'CardWrapper';`;

export const CARD_HEAD_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
}

export const CardHead = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
  return <div ref={ref} {...props} className={cn('relative w-full', className)} />;
});

CardHead.displayName = 'CardHead';`;

export const CARD_BODY_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
}

export const CardBody = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
  return <div ref={ref} {...props} className={cn('relative w-full', className)} />;
});

CardBody.displayName = 'CardBody';`;

export const CARD_FOOTER_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
}

export const CardFooter = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
  return <div ref={ref} {...props} className={cn('relative w-full', className)} />;
});

CardFooter.displayName = 'CardFooter';`;
