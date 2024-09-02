import { forwardRef, OptionHTMLAttributes, RefAttributes } from 'react';

interface Props extends OptionHTMLAttributes<HTMLOptionElement>, RefAttributes<HTMLOptionElement> {}

const Option: React.FC<Props> = forwardRef<HTMLOptionElement, Props>(({ ...props }, ref) => (
    <option ref={ref} {...props} />
));

Option.displayName = 'Option';
export default Option;
