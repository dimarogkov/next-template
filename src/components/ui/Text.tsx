import { FC, HTMLAttributes, RefAttributes, forwardRef } from 'react';
import { EnumText } from '@/src/types/enums';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    textType?: EnumText;
    className?: string;
}

const Text: FC<Props> = forwardRef<HTMLParagraphElement, Props>(
    ({ textType = EnumText.default, className = '', ...props }, ref) => {
        return (
            <p
                ref={ref}
                {...props}
                className={cn(`w-full text-base ${className}`, { 'md:text-lg': textType === EnumText.large })}
            />
        );
    }
);

Text.displayName = 'Text';
export default Text;
