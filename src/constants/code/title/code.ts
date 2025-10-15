export const TITLE_CODE = `import { HTMLAttributes, ReactNode, RefAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
    children?: ReactNode;
    size?: 'h1' | 'h2' | 'h3' | 'h4';
    className?: string;
}

const Title = forwardRef<HTMLHeadingElement, Props>(({ children, size = 'h1', className = '', ...props }, ref) => {
    const titleSize = {
        h1: '!leading-tight text-4xl md:text-5xl',
        h2: '!leading-tight text-3xl md:text-4xl',
        h3: '!leading-tight text-2xl md:text-3xl',
        h4: '!leading-tight text-xl md:text-2xl',
    };

    return (
        <>
            {size === 'h1' && (
                <h1 ref={ref} {...props} className={\`relative font-bold text-title \${titleSize[size]} \${className}\`}>
                    {children}
                </h1>
            )}

            {size === 'h2' && (
                <h2 ref={ref} {...props} className={\`relative font-bold text-title \${titleSize[size]} \${className}\`}>
                    {children}
                </h2>
            )}

            {size === 'h3' && (
                <h3 ref={ref} {...props} className={\`relative font-bold text-title \${titleSize[size]} \${className}\`}>
                    {children}
                </h3>
            )}

            {size === 'h4' && (
                <h4 ref={ref} {...props} className={\`relative font-bold text-title \${titleSize[size]} \${className}\`}>
                    {children}
                </h4>
            )}
        </>
    );
});

Title.displayName = 'Title';
export default Title;`;
