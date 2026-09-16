export const CHECKBOX_CODE = `import { forwardRef, InputHTMLAttributes, RefAttributes } from 'react';
import { Text } from '@components/atoms';
import { Check } from 'lucide-react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(({ label, className = '', ...props }, ref) => {
  return (
    <div
      className={cn('flex cursor-pointer items-center gap-2 select-none', className, {
        'pointer-events-none opacity-70': props.disabled
      })}
    >
      <div className="relative size-5 min-w-5">
        <input
          ref={ref}
          {...props}
          type="checkbox"
          className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
        />

        <span
          className={cn('flex h-full w-full items-center justify-center rounded-md border', {
            'border-border bg-transparent': !props.checked,
            'border-title bg-title': props.checked
          })}
        >
          <Check
            className={cn('text-bg size-4', {
              'invisible opacity-0': !props.checked,
              'visible opacity-100': props.checked
            })}
          />
        </span>
      </div>

      {label && <Text>{label}</Text>}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';`;
