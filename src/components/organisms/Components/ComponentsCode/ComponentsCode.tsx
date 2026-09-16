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
            <div ref={ref} {...props} className="relative flex w-full scroll-mt-36 flex-col gap-4 py-4 md:py-5">
                <div className="w-full">{children}</div>

                {codeArr.map((code) => (
                    <ComponentsCodeDetail
                        key={crypto.randomUUID()}
                        code={code}
                        type={type}
                        className="border-bg rounded-md border"
                    />
                ))}
            </div>
        );
    }
);

ComponentsCode.displayName = 'ComponentsCode';
