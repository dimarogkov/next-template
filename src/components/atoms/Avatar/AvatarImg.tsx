'use client';
import { forwardRef, ReactNode, RefAttributes, useState } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends Omit<HTMLMotionProps<'img'>, 'alt'>, RefAttributes<HTMLImageElement> {
    alt: string;
    type?: 'circle' | 'square';
    fallback?: ReactNode;
    hasHover?: boolean;
    className?: string;
}

export const AvatarImg = forwardRef<HTMLImageElement, Props>(
    ({ type = 'circle', fallback, hasHover = false, className = '', onError, ...props }, ref) => {
        const [hasError, setHasError] = useState(false);

        const isTypeCircle = type === 'circle';
        const isTypeSquare = type === 'square';

        const animation: HTMLMotionProps<'img'> = {
            whileHover: { scale: 1.1, transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } }
        };

        return hasError && fallback ? (
            <div
                role="img"
                aria-label={props.alt}
                className={cn(
                    'bg-border text-title absolute inset-0 flex items-center justify-center text-sm font-medium',
                    className,
                    {
                        'rounded-full': isTypeCircle,
                        'rounded-md': isTypeSquare
                    }
                )}
            >
                {fallback}
            </div>
        ) : (
            <motion.img
                ref={ref}
                {...props}
                {...(hasHover && animation)}
                onError={(e) => {
                    setHasError(true);
                    onError?.(e);
                }}
                className={cn('absolute top-0 left-0 object-cover object-center', className, {
                    'will-change-transform': hasHover,
                    'rounded-full': isTypeCircle,
                    'rounded-md': isTypeSquare
                })}
            />
        );
    }
);

AvatarImg.displayName = 'AvatarImg';
