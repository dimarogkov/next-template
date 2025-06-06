'use client';
import { FC, forwardRef, ImgHTMLAttributes, RefAttributes } from 'react';
import Image from 'next/image';
import { EnumAvatar } from '@/src/types/enums';
import cn from 'classnames';

interface Props extends ImgHTMLAttributes<HTMLImageElement>, RefAttributes<HTMLImageElement> {
    src: string;
    type?: EnumAvatar;
    hasHover?: boolean;
    className?: string;
}

export const AvatarImg: FC<Props> = forwardRef<HTMLImageElement, Props>(
    ({ src, type = EnumAvatar.circle, hasHover = false, className = '', ...props }, ref) => {
        const isTypeCircle = type === EnumAvatar.circle;
        const isTypeSquare = type === EnumAvatar.square;

        return (
            <Image
                ref={ref}
                src={src}
                alt={props.alt || ''}
                sizes='100%'
                fill
                className={cn(`absolute top-0 left-0 object-cover object-center ${className}`, {
                    'transition-all duration-500 will-change-transform hover:scale-110': hasHover,
                    'rounded-full': isTypeCircle,
                    'rounded-md': isTypeSquare,
                })}
            />
        );
    }
);

AvatarImg.displayName = 'AvatarImg';
export default AvatarImg;
