export const TEXT_CODE = `import { ElementType, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLElement>, RefAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'div';
  size?: 'default' | 'large' | 'small';
  className?: string;
}

export const Text = forwardRef<HTMLElement, Props>(({ as = 'p', size = 'default', className = '', ...props }, ref) => {
  const Component = as as ElementType;

  return (
    <Component
      ref={ref}
      {...props}
      className={cn(
        'w-full',
        {
          'text-base': size === 'default' || size === 'large',
          'md:text-lg': size === 'large',
          'text-sm': size === 'small'
        },
        className
      )}
    />
  );
});

Text.displayName = 'Text';`;
