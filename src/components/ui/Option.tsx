import { forwardRef, OptionHTMLAttributes } from 'react';

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

const Option: React.FC<OptionProps> = forwardRef<HTMLOptionElement, OptionProps>(({ ...props }, ref) => (
    <option ref={ref} {...props} />
));

Option.displayName = 'Option';
export default Option;
