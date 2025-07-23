import { FC, ReactNode } from 'react';
import { Title } from '@/src/components/ui';

type Props = {
    children?: ReactNode;
};

const ComponentsPreview: FC<Props> = ({ children }) => {
    return (
        <div className='relative w-full py-4 md:py-5'>
            <Title size='h4' className='mb-3 md:mb-5 last:mb-0'>
                Preview
            </Title>

            <div className='relative w-full rounded-md border border-border p-3 md:p-4'>{children}</div>
        </div>
    );
};

export default ComponentsPreview;
