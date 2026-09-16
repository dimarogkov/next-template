export const BADGE_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
  type?: 'default' | 'secondary' | 'outline';
  className?: string;
}

export const Badge = forwardRef<HTMLSpanElement, Props>(({ type = 'default', className = '', ...props }, ref) => {
  const badgeType = {
    default: 'border-border bg-border',
    secondary: 'border-white bg-white text-bg',
    outline: 'border-border bg-transparent'
  };

  return (
    <span
      ref={ref}
      {...props}
      className={cn(
        'flex w-fit items-center gap-1.5 rounded-md border px-3 py-1.5 text-base',
        badgeType[type],
        className
      )}
    />
  );
});

Badge.displayName = 'Badge';`;
