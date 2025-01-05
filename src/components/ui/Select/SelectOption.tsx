import { FC, forwardRef, OptionHTMLAttributes, RefAttributes } from 'react';

interface Props extends OptionHTMLAttributes<HTMLOptionElement>, RefAttributes<HTMLOptionElement> {}

const SelectOption: FC<Props> = forwardRef<HTMLOptionElement, Props>(({ ...props }, ref) => {
    return <option ref={ref} {...props} />;
});

SelectOption.displayName = 'SelectOption';
export default SelectOption;
