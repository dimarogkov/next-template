export const TEXTAREA_CODE = `import { forwardRef, RefAttributes, TextareaHTMLAttributes } from 'react';
import cn from 'classnames';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>, RefAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ className = '', ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className={cn(
        'border-border text-title placeholder:text-text focus:border-text relative min-h-24 w-full rounded-md border bg-transparent px-4 py-2.5 outline-hidden transition-all duration-300',
        className
      )}
    />
  );
});

Textarea.displayName = 'Textarea';`;
