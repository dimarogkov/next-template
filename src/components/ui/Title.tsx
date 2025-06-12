import { FC, HTMLAttributes, RefAttributes, forwardRef } from 'react';
import { EnumTitle } from '@/src/types/enums/Title';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
    titleType?: EnumTitle;
    className?: string;
}

const Title: FC<Props> = forwardRef<HTMLHeadingElement, Props>(
    ({ titleType = EnumTitle.h1, className = '', ...props }, ref) => {
        const titleSize = {
            [EnumTitle.h1 as string]:
                'text-[38px] sm:text-[44px] md:text-[56px] lg:text-[66px] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2]',
            [EnumTitle.h2 as string]:
                'text-3xl sm:text-[36px] md:text-[40px] lg:text-[56px] !leading-[1.3] md:!leading-[1.25]',
            [EnumTitle.h3 as string]: 'text-2xl md:text-3xl lg:text-4xl',
            [EnumTitle.h4 as string]: 'text-xl md:text-2xl',
            [EnumTitle.h5 as string]: 'text-xl',
        };

        return (
            <>
                {titleType === EnumTitle.h1 && (
                    <h1
                        ref={ref}
                        {...props}
                        className={`relative font-semibold ${titleSize[titleType]} ${className}`}
                    />
                )}

                {titleType === EnumTitle.h2 && (
                    <h2
                        ref={ref}
                        {...props}
                        className={`relative font-semibold ${titleSize[titleType]} ${className}`}
                    />
                )}

                {titleType === EnumTitle.h3 && (
                    <h3
                        ref={ref}
                        {...props}
                        className={`relative font-semibold ${titleSize[titleType]} ${className}`}
                    />
                )}

                {titleType === EnumTitle.h4 && (
                    <h4
                        ref={ref}
                        {...props}
                        className={`relative font-semibold ${titleSize[titleType]} ${className}`}
                    />
                )}

                {titleType === EnumTitle.h5 && (
                    <h5
                        ref={ref}
                        {...props}
                        className={`relative font-semibold ${titleSize[titleType]} ${className}`}
                    />
                )}
            </>
        );
    }
);

Title.displayName = 'Title';
export default Title;
