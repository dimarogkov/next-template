'use client';
import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    forwardRef,
    HTMLAttributeAnchorTarget,
    MouseEventHandler,
    Ref,
    RefAttributes
} from 'react';
import Link from 'next/link';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    variant?: 'default' | 'secondary' | 'outline' | 'ghost';
    href?: string;
    target?: HTMLAttributeAnchorTarget;
    className?: string;
}

export const Btn = forwardRef<HTMLButtonElement, Props>(
    ({ variant = 'default', href, target, className = '', ...props }, ref) => {
        const classes = cn(
            'flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-md border px-4 outline-hidden transition-all duration-300 will-change-transform active:scale-95 sm:w-fit',
            className,
            {
                'pointer-events-none opacity-60 select-none': props.disabled,
                'border-border bg-border text-text': props.disabled || variant === 'default',
                'hover:opacity-80': !props.disabled && variant === 'default',
                'border-title bg-title text-bg hover:opacity-80': !props.disabled && variant === 'secondary',
                'border-border text-title hover:opacity-80': !props.disabled && variant === 'outline',
                'text-text hover:bg-border border-transparent': !props.disabled && variant === 'ghost'
            }
        );

        return href ? (
            <Link
                ref={ref as Ref<HTMLAnchorElement>}
                {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
                href={href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                aria-disabled={props.disabled || undefined}
                tabIndex={props.disabled ? -1 : undefined}
                onClick={(e) => {
                    if (props.disabled) {
                        e.preventDefault();
                        return;
                    }

                    (props.onClick as MouseEventHandler<HTMLAnchorElement> | undefined)?.(e);
                }}
                className={classes}
            />
        ) : (
            <button ref={ref} {...props} type={props.type || 'button'} className={classes} />
        );
    }
);

Btn.displayName = 'Btn';
