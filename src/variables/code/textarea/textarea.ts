export const TEXTAREA_CODE = `import { FC, forwardRef, RefAttributes, TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>, RefAttributes<HTMLTextAreaElement> {
	className?: string;
}

export const Textarea: FC<Props> = forwardRef<HTMLTextAreaElement, Props>(({ className = '', ...props }, ref) => {
	return (
		<textarea
			ref={ref}
			{...props}
			className={\`relative w-full min-h-24 text-title rounded-md py-2.5 px-4 border border-border bg-transparent outline-none transition-all duration-300 focus:border-text placeholder:text-text \${className}\`}
		/>
	);
});`;
