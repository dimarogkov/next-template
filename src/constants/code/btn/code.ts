export const BTN_CODE = `'use client';
import { ButtonHTMLAttributes, forwardRef, HTMLAttributeAnchorTarget, Ref, RefAttributes } from 'react';
import Link from 'next/link';
import cn from 'classnames';

interface Props
  extends
    ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    RefAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
}

export const Btn = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ variant = 'default', href, target, disabled, type, onClick, className = '', ...props }, ref) => {
    const classes = cn(
      'flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-md border px-4 outline-hidden transition-all duration-300 will-change-transform active:scale-95 sm:w-fit',
      className,
      {
        'pointer-events-none opacity-60 select-none': disabled,
        'border-border bg-border text-text': disabled || variant === 'default',
        'hover:opacity-80': !disabled && variant === 'default',
        'border-title bg-title text-bg hover:opacity-80': !disabled && variant === 'secondary',
        'border-border text-title hover:opacity-80': !disabled && variant === 'outline',
        'text-text hover:bg-border border-transparent': !disabled && variant === 'ghost'
      }
    );

    return href ? (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        {...props}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }

          onClick?.(e);
        }}
        className={classes}
      />
    ) : (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        {...props}
        type={type || 'button'}
        disabled={disabled}
        onClick={onClick}
        className={classes}
      />
    );
  }
);

Btn.displayName = 'Btn';`;
