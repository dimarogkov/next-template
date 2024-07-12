import { LabelHTMLAttributes, forwardRef } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
    className?: string;
}

const Label: React.FC<Props> = forwardRef<HTMLLabelElement, Props>(({ className = '', ...props }, ref) => (
    <label ref={ref} {...props} className={`relative block w-full text-base text-black ${className}`} />
));

Label.displayName = 'Label';
export default Label;
