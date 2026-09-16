export const INPUT_CODE = `import { InputHTMLAttributes, RefAttributes, forwardRef } from 'react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(({ className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        'border-border text-title placeholder:text-text focus:border-text h-10 w-full rounded-md border bg-transparent px-4 outline-hidden transition-all duration-300',
        className
      )}
    />
  );
});

Input.displayName = 'Input';`;

export const INPUT_PASSWORD_CODE = `'use client';
import { InputHTMLAttributes, RefAttributes, forwardRef, MouseEvent, useRef, useState } from 'react';
import { Input } from '@components/atoms';
import { Eye, EyeOff } from 'lucide-react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
  className?: string;
  classNameInput?: string;
}

export const InputPassword = forwardRef<HTMLInputElement, Props>(
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
      <div ref={ref} className={cn('relative flex h-10 w-full items-center', className)}>
        <Input
          ref={inputRef}
          {...props}
          onBlur={handleBlur}
          type={isPasswordVisible ? 'text' : 'password'}
          className={cn('pr-10', classNameInput)}
        />

        <button
          type="button"
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          className="absolute right-0 flex h-full w-10 cursor-pointer items-center justify-center outline-hidden"
        >
          {!isPasswordVisible ? <EyeOff className="size-5 stroke-1" /> : <Eye className="size-5 stroke-1" />}
        </button>
      </div>
    );
  }
);

InputPassword.displayName = 'InputPassword';`;
