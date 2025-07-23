import { FC, forwardRef, HTMLAttributes, ReactNode, RefAttributes } from 'react';
import { Accordion } from '@/src/components/ui';
import ComponentsCodeDetail from './ComponentsCodeDetail';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    codeArr: {
        label: string;
        code: string;
    }[];
    type?: 'code' | 'installation';
    children?: ReactNode;
}

const ComponentsCodeWithAccordion: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ codeArr, type = 'code', children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                className='relative flex flex-col gap-4 md:gap-5 w-full py-4 md:py-5 scroll-mt-36'
            >
                <div className='w-full'>{children}</div>

                <Accordion>
                    {codeArr.map(({ label, code }, index) => (
                        <Accordion.Item key={label} isOpen={index === 0}>
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
