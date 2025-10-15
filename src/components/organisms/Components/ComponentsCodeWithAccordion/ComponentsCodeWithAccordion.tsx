import { forwardRef, HTMLAttributes, ReactNode, RefAttributes } from 'react';
import { ComponentsCodeDetail } from '@components/organisms';
import { Accordion } from '@components/atoms';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    codeArr: {
        label: string;
        code: string;
    }[];
    type?: 'code' | 'installation';
    children?: ReactNode;
}

const ComponentsCodeWithAccordion = forwardRef<HTMLDivElement, Props>(
    ({ codeArr, type = 'code', children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                className='relative flex flex-col gap-4 md:gap-5 w-full py-4 md:py-5 scroll-mt-36'
            >
                <div className='w-full'>{children}</div>

                <Accordion defaultActiveIndex={0}>
                    {codeArr.map(({ label, code }) => (
                        <Accordion.Item key={label}>
                            <Accordion.Title>{label}</Accordion.Title>

                            <Accordion.Content classNameBlock='!p-0'>
                                <ComponentsCodeDetail code={code} type={type} />
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        );
    }
);

ComponentsCodeWithAccordion.displayName = 'ComponentsCodeWithAccordion';
export default ComponentsCodeWithAccordion;
