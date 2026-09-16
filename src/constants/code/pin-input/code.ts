export const PIN_INPUT_CODE = `'use client';
import { forwardRef, HTMLAttributes, RefAttributes, KeyboardEvent, useRef, useState, useEffect } from 'react';
import cn from 'classnames';

const PIN_LENGTH = 4;

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
  onComplete?: (pin: string) => void;
}

export const PinInput = forwardRef<HTMLDivElement, Props>(
  ({ className = '', onComplete = () => {}, ...props }, ref) => {
    const [values, setValues] = useState<string[]>(Array(PIN_LENGTH).fill(''));
    const inputsRef = useRef<HTMLInputElement[]>([]);

    useEffect(() => {
      if (values.every((v) => v !== '')) {
        onComplete(values.join(''));
      }
    }, [values, onComplete]);

    const setInputRef = (el: HTMLInputElement | null, index: number) => {
      if (el) {
        inputsRef.current[index] = el;
      }
    };

    const handleChange = (value: string, index: number) => {
      if (!/^\\d?$/.test(value)) {
        return;
      }

      setValues((prevState) => {
        const state = [...prevState];
        state[index] = value;

        if (value && index < PIN_LENGTH - 1) {
          inputsRef.current[index + 1]?.focus();
        }

        return state;
      });
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === 'Backspace' && !values[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    };

    return (
      <div ref={ref} {...props} className={cn('relative flex w-fit gap-2.5', className)}>
        {values.map((value, i) => (
          <input
            key={i}
            ref={(el) => setInputRef(el, i)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value}
            onChange={({ target }) => handleChange(target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className="border-border bg-border text-title placeholder:text-text focus:border-text size-12 rounded-md border text-center text-xl outline-hidden transition-all duration-300"
            required
          />
        ))}
      </div>
    );
  }
);

PinInput.displayName = 'PinInput';`;
