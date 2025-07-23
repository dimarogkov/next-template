export const TEXT_CODE = `import { FC, HTMLAttributes, RefAttributes, forwardRef } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
	size?: 'default' | 'large';
	className?: string;
}

export const Text: FC<Props> = forwardRef<HTMLParagraphElement, Props>(
	({ size = 'default', className = '', ...props }, ref) => {
		return (
			<p
				ref={ref}
				{...props}
				className={cn(\`w-full text-base \${className}\`, { 'md:text-lg': size === 'large' })}
			/>
		);
	}
);`;
