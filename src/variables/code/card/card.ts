export const CARD_CODE = `import CardWrapper from './CardWrapper';
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const Card = Object.assign(CardWrapper, {
    Head: CardHead,
    Body: CardBody,
    Footer: CardFooter,
});

export default Card;`;

export const CARD_WRAPPER_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const CardWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className={\`relative w-full rounded-md border border-border bg-border overflow-hidden \${className}\`}
        />
    );
});

CardWrapper.displayName = 'CardWrapper';
export default CardWrapper;`;

export const CARD_HEAD_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const CardHead: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={\`relative w-full \${className}\`} />;
});

CardHead.displayName = 'CardHead';
export default CardHead;`;

export const CARD_BODY_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const CardBody: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={\`relative w-full \${className}\`} />;
});

CardBody.displayName = 'CardBody';
export default CardBody;`;

export const CARD_FOOTER_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const CardFooter: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={\`relative w-full \${className}\`} />;
});

CardFooter.displayName = 'CardFooter';
export default CardFooter;`;
