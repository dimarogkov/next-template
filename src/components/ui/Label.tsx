import { FC, LabelHTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement>, RefAttributes<HTMLLabelElement> {
    className?: string;
}

const Label: FC<Props> = forwardRef<HTMLLabelElement, Props>(({ className = '', ...props }, ref) => {
    return <label ref={ref} {...props} className={`relative block w-full text-base ${className}`} />;
});

Label.displayName = 'Label';
export default Label;
