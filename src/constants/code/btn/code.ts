export const BTN_CODE = `import { BtnWrapper } from './BtnWrapper';
import { BtnLink } from './BtnLink';

export const Btn = Object.assign(BtnWrapper, {
  Link: BtnLink
});`;

export const BTN_WRAPPER_CODE = `import { ButtonHTMLAttributes, forwardRef, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  isLink?: boolean;
  className?: string;
}

export const BtnWrapper = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'default', isLink = false, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        type={props.type || 'button'}
        className={cn(
          'flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-md outline-hidden transition-all duration-300 will-change-transform active:scale-95 sm:w-fit',
          className,
          {
            'bg-border text-text pointer-events-none select-none': props.disabled,
            'bg-title text-bg hover:opacity-80': !props.disabled && variant === 'default',
            'bg-yellow text-bg hover:opacity-80': !props.disabled && variant === 'secondary',
            'border-border text-title border hover:opacity-80': !props.disabled && variant === 'outline',
            'text-text hover:bg-border': !props.disabled && variant === 'ghost',
            'px-4': !isLink
          }
        )}
      />
    );
  }
);

BtnWrapper.displayName = 'BtnWrapper';`;

export const BTN_LINK_CODE = `import { ReactNode, RefAttributes, forwardRef } from 'react';
import Link from 'next/link';
import cn from 'classnames';

interface Props extends RefAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
  href: string;
  target?: string;
  children: ReactNode;
  className?: string;
}

export const BtnLink = forwardRef<HTMLAnchorElement, Props>(
  ({ href, target, children, className = '', ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        target={target}
        {...props}
        className={cn('flex h-full w-full items-center justify-center gap-1.5 px-4', className)}
      >
        {children}
      </Link>
    );
  }
);

BtnLink.displayName = 'BtnLink';`;
