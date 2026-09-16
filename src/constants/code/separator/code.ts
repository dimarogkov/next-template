export const SEPARATOR_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  className?: string;
}

export const Separator = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
  return <div ref={ref} {...props} className={cn('border-border relative w-full border-t', className)} />;
});

Separator.displayName = 'Separator';`;
