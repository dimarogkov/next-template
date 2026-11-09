'use client';
import { forwardRef, HTMLAttributes, RefAttributes, ClipboardEvent, useRef, useState, useEffect } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    length?: number;
    className?: string;
    onComplete?: (pin: string) => void;
}

export const PinInput = forwardRef<HTMLDivElement, Props>(
    ({ length = 4, className = '', onComplete, ...props }, ref) => {
        const [values, setValues] = useState<string[]>(Array(length).fill(''));
        const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

        useEffect(() => {
            if (values.every((v) => v !== '')) {
                onComplete?.(values.join(''));
            }
        }, [values, onComplete]);

        const setInputRef = (el: HTMLInputElement | null, index: number) => {
            inputsRef.current[index] = el;
        };

        const handleChange = (value: string, index: number) => {
            if (!/^\d?$/.test(value)) {
                return;
            }

            setValues((prevState) => {
                const state = [...prevState];
                state[index] = value;

                if (value && index < length - 1) {
                    inputsRef.current[index + 1]?.focus();
                }

                return state;
            });
        };

        const handleKeyDown = (key: string, index: number) => {
            if (key === 'Backspace' && !values[index] && index > 0) {
                inputsRef.current[index - 1]?.focus();
            }
        };

        const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
            e.preventDefault();

            const digits = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length).split('');

            if (!digits.length) {
                return;
            }

            setValues(Array.from({ length }, (_, i) => digits[i] ?? ''));
            inputsRef.current[Math.min(digits.length, length - 1)]?.focus();
        };

        return (
            <div
                ref={ref}
                {...props}
                role="group"
                aria-label="Verification code"
                className={cn('relative flex w-fit gap-2.5', className)}
            >
                {values.map((value, i) => (
                    <input
                        key={i}
                        ref={(el) => setInputRef(el, i)}
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        maxLength={1}
                        value={value}
                        aria-label={`Digit ${i + 1} of ${length}`}
                        onChange={({ target }) => handleChange(target.value, i)}
                        onKeyDown={({ key }) => handleKeyDown(key, i)}
                        onPaste={handlePaste}
                        className="border-border bg-border text-title placeholder:text-text focus:border-text size-12 rounded-md border text-center text-xl outline-hidden transition-all duration-300"
                        required
                    />
                ))}
            </div>
        );
    }
);

PinInput.displayName = 'PinInput';
