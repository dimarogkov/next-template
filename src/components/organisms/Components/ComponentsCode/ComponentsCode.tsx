import { forwardRef, HTMLAttributes, ReactNode, RefAttributes } from 'react';
import { ComponentsCodeDetail } from '@components/organisms';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    codeArr: string[];
    type?: 'code' | 'installation';
    children?: ReactNode;
}

export const ComponentsCode = forwardRef<HTMLDivElement, Props>(
    ({ codeArr, type = 'code', children, ...props }, ref) => {
        return (
            <div ref={ref} {...props} className="relative flex w-full scroll-mt-31 flex-col gap-4 py-4 sm:py-5 md:p-5">
                <div className="w-full">{children}</div>

                {codeArr.map((code) => (
                    <ComponentsCodeDetail key={code} code={code} type={type} className="border-bg rounded-md border" />
                ))}
            </div>
        );
    }
);

ComponentsCode.displayName = 'ComponentsCode';
