import { FC, forwardRef, OptionHTMLAttributes, RefAttributes, SelectHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';

interface PropsWrapper extends SelectHTMLAttributes<HTMLSelectElement>, RefAttributes<HTMLSelectElement> {
    className?: string;
}

interface PropsOption extends OptionHTMLAttributes<HTMLOptionElement>, RefAttributes<HTMLOptionElement> {}

const SelectWrapper: FC<PropsWrapper> = forwardRef<HTMLSelectElement, PropsWrapper>(
    ({ className = '', ...props }, ref) => (
        <div className={`relative flex items-center w-full h-10 ${className}`}>
            <select
                ref={ref}
                {...props}
                className='w-full h-full px-4 pr-12 rounded outline-none appearance-none border border-gray bg-transparent transition-all duration-300 focus:border-black'
            />

            <ChevronDown className='absolute right-4 w-5 h-5 text-black' />
        </div>
    )
);

const SelectOption: FC<PropsOption> = forwardRef<HTMLOptionElement, PropsOption>(({ ...props }, ref) => (
    <option ref={ref} {...props} />
));

SelectWrapper.displayName = 'SelectWrapper';
SelectOption.displayName = 'SelectOption';

const Select = Object.assign(SelectWrapper, {
    Option: SelectOption,
});

export default Select;
