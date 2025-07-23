'use client';
import { FC, forwardRef, RefAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'img'>, RefAttributes<HTMLImageElement> {
    type?: 'circle' | 'square';
    hasHover?: boolean;
    className?: string;
}

export const AvatarImg: FC<Props> = forwardRef<HTMLImageElement, Props>(
    ({ type = 'circle', hasHover = false, className = '', ...props }, ref) => {
        const isTypeCircle = type === 'circle';
        const isTypeSquare = type === 'square';

        const animation: HTMLMotionProps<'img'> = {
            whileHover: { scale: 1.1, transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } },
        };

        return (
            <motion.img
                ref={ref}
                {...props}
                {...(hasHover && animation)}
                alt={props.alt}
                className={cn(`absolute top-0 left-0 object-cover object-center ${className}`, {
                    'will-change-transform': hasHover,
                    'rounded-full': isTypeCircle,
                    'rounded-md': isTypeSquare,
                })}
            />
        );
    }
);

AvatarImg.displayName = 'AvatarImg';
export default AvatarImg;
