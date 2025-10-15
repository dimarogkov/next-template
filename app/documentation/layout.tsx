import { ReactNode } from 'react';
import { Sidebar } from '@components/organisms';

type Props = {
    children: ReactNode;
};

export default function DocumentationLayout({ children }: Props) {
    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='grid grid-cols-1 xl:grid-cols-[208px,796px,208px] xl:items-start w-full pb-16 md:pb-0'>
                    <Sidebar />
                    {children}
                </div>
            </div>
        </section>
    );
}
