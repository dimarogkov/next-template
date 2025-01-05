import { FC, HTMLAttributes, RefAttributes, forwardRef } from 'react';
import { EnumTitle } from '@/src/types/enums/Title';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
    titleType?: EnumTitle;
    className?: string;
}

const Title: FC<Props> = forwardRef<HTMLHeadingElement, Props>(
    ({ titleType = EnumTitle.h1, className = '', ...props }, ref) => {
        return (
            <>
                {titleType === EnumTitle.h1 && (
                    <h1
                        ref={ref}
                        {...props}
                        className={`w-full font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl ${className}`}
                    />
                )}

                {titleType === EnumTitle.h2 && (
                    <h2
                        ref={ref}
                        {...props}
                        className={`w-full font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl ${className}`}
                    />
                )}

                {titleType === EnumTitle.h3 && (
                    <h3
                        ref={ref}
                        {...props}
                        className={`w-full font-bold text-xl md:text-2xl lg:text-3xl ${className}`}
                    />
                )}
            </>
        );
    }
);

Title.displayName = 'Title';
export default Title;
