import { FC, forwardRef, RefAttributes, SelectHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';

interface Props extends SelectHTMLAttributes<HTMLSelectElement>, RefAttributes<HTMLSelectElement> {
    className?: string;
}

const SelectWrapper: FC<Props> = forwardRef<HTMLSelectElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <div className={`relative flex items-center w-full h-10 ${className}`}>
            <select
                ref={ref}
                {...props}
                className='w-full h-full px-4 pr-12 rounded outline-none appearance-none border border-gray bg-white transition-all duration-300 focus:border-black'
            />

            <ChevronDown className='absolute right-4 size-5' />
        </div>
    );
});

SelectWrapper.displayName = 'SelectWrapper';
export default SelectWrapper;
