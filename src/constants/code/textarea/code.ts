export const TEXTAREA_CODE = `import { forwardRef, RefAttributes, TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>, RefAttributes<HTMLTextAreaElement> {
	className?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ className = '', ...props }, ref) => {
	return (
		<textarea
			ref={ref}
			{...props}
			className={\`relative w-full min-h-24 text-title rounded-md py-2.5 px-4 border border-border bg-transparent outline-none transition-all duration-300 focus:border-text placeholder:text-text \${className}\`}
		/>
	);
});

Textarea.displayName = 'Textarea';
export default Textarea;`;
