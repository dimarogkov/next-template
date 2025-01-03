'use client';
import { FC, InputHTMLAttributes, RefAttributes, forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    className?: string;
}

const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(({ className = '', ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handlePasswordType = () => setIsPasswordVisible((prevState) => !prevState);
    const handleBlur = () => props.type === 'password' && setIsPasswordVisible(false);

    return (
        <div className={`relative flex items-center w-full h-10 ${className}`}>
            <input
                ref={ref}
                {...props}
                type={isPasswordVisible ? 'text' : props.type}
                onBlur={handleBlur}
                className={cn(
                    `w-full h-full px-4 rounded border border-gray bg-transparent outline-none transition-all duration-300 focus:border-black`,
                    {
                        'pr-10': props.type === 'password',
                    }
                )}
            />

            {props.type === 'password' && (
                <button
                    type='button'
                    onClick={handlePasswordType}
                    className='absolute right-0 flex items-center justify-center w-10 h-full'
                >
                    {!isPasswordVisible ? (
                        <EyeOff className='w-5 h-5 stroke-1' />
                    ) : (
                        <Eye className='w-5 h-5 stroke-1' />
                    )}
                </button>
            )}
        </div>
    );
});

Input.displayName = 'Input';
export default Input;
