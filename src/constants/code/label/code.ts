export const LABEL_CODE = `import { LabelHTMLAttributes, RefAttributes, forwardRef } from 'react';
import cn from 'classnames';

interface Props extends LabelHTMLAttributes<HTMLLabelElement>, RefAttributes<HTMLLabelElement> {
  className?: string;
}

export const Label = forwardRef<HTMLLabelElement, Props>(({ className = '', ...props }, ref) => {
  return <label ref={ref} {...props} className={cn('relative block w-full text-base', className)} />;
});

Label.displayName = 'Label';`;
