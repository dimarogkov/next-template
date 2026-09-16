import { ReactNode } from 'react';
import { Sidebar } from '@components/organisms';

type Props = {
    children: ReactNode;
};

const DocumentationLayout = ({ children }: Props) => {
    return (
        <section className="relative w-full">
            <div className="page-container">
                <div className="grid w-full grid-cols-1 pb-16 md:pb-0 xl:grid-cols-[208px_796px_208px] xl:items-start">
                    <Sidebar />
                    {children}
                </div>
            </div>
        </section>
    );
};

export default DocumentationLayout;
