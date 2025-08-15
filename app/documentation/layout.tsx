import { FC, ReactNode } from 'react';
import { Sidebar } from '@/src/components/blocks';

type Props = {
    children: ReactNode;
};

const DocumentationLayout: FC<Props> = ({ children }) => {
    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='grid grid-cols-1 xl:grid-cols-[208px,896px,208px] xl:items-start w-full'>
                    <Sidebar />
                    {children}
                </div>
            </div>
        </section>
    );
};

export default DocumentationLayout;
