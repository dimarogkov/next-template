'use client';
import { FC, InputHTMLAttributes, RefAttributes, forwardRef, MouseEvent, useRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Input from './Input';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    className?: string;
    classNameInput?: string;
}

const InputPassword: FC<Props> = forwardRef<HTMLInputElement, Props>(
    ({ className = '', classNameInput = '', ...props }, ref) => {
        const [isPasswordVisible, setIsPasswordVisible] = useState(false);
        const inputRef = useRef<HTMLInputElement | null>(null);

        const handleClick = () => setIsPasswordVisible((prevState) => !prevState);

        const handleMouseDown = (e: MouseEvent) => {
            e.preventDefault();
            inputRef.current?.focus();
        };

        const handleBlur = () => !isPasswordVisible && setIsPasswordVisible(false);

        return (
            <div ref={ref} className={`relative flex items-center w-full h-10 ${className}`}>
                <Input
                    ref={inputRef}
                    {...props}
                    onBlur={handleBlur}
                    type={isPasswordVisible ? 'text' : 'password'}
                    className={`pr-10 ${classNameInput}`}
                />

                <button
                    type='button'
                    onClick={handleClick}
                    onMouseDown={handleMouseDown}
                    className='absolute right-0 flex items-center justify-center w-10 h-full'
                >
                    {!isPasswordVisible ? (
                        <EyeOff className='size-5 stroke-1' />
                    ) : (
                        <Eye className='size-5 stroke-1' />
                    )}
                </button>
            </div>
        );
    }
);

InputPassword.displayName = 'InputPassword';
export default InputPassword;
