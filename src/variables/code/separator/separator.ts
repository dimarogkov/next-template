export const SEPARATOR_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
	className?: string;
}

export const Separator: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
	return <div ref={ref} {...props} className={\`relative w-full border-t border-border \${className}\`} />;
});`;
