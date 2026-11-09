'use client';
import { forwardRef, ReactNode, RefAttributes, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import cn from 'classnames';

interface Props extends Omit<ImageProps, 'alt' | 'fill'>, RefAttributes<HTMLImageElement> {
    alt: string;
    type?: 'circle' | 'square';
    fallback?: ReactNode;
    className?: string;
}

export const AvatarImg = forwardRef<HTMLImageElement, Props>(
    ({ type = 'circle', fallback, className = '', onLoad, onError, ...props }, ref) => {
        const [isLoaded, setIsLoaded] = useState(false);
        const [hasError, setHasError] = useState(false);

        const isTypeCircle = type === 'circle';

        return hasError && fallback ? (
            <div
                role="img"
                aria-label={props.alt}
                className={cn(
                    'bg-border text-title absolute inset-0 flex items-center justify-center text-base font-medium',
                    className,
                    {
                        'rounded-full': isTypeCircle,
                        'rounded-md': !isTypeCircle
                    }
                )}
            >
                {fallback}
            </div>
        ) : (
            <>
                {!isLoaded && !hasError && (
                    <div
                        aria-hidden="true"
                        className={cn('bg-border absolute inset-0 animate-pulse', className, {
                            'rounded-full': isTypeCircle,
                            'rounded-md': !isTypeCircle
                        })}
                    />
                )}

                <Image
                    ref={ref}
                    {...props}
                    alt={props.alt}
                    sizes="128px"
                    fill
                    onLoad={(e) => {
                        setIsLoaded(true);
                        onLoad?.(e);
                    }}
                    onError={(e) => {
                        setHasError(true);
                        onError?.(e);
                    }}
                    className={cn(
                        'object-cover object-center transition-transform duration-300 will-change-transform group-hover:scale-105',
                        className,
                        {
                            'rounded-full': isTypeCircle,
                            'rounded-md': !isTypeCircle
                        }
                    )}
                />
            </>
        );
    }
);

AvatarImg.displayName = 'AvatarImg';
