import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Breadcrumbs, Header } from '@/src/components/blocks';
import { ScrollTopBtn } from '@/src/components/elements';

type Props = {
    children?: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <Breadcrumbs />
            <ScrollTopBtn />
            {children}
            <Toaster position='bottom-right' reverseOrder={false} toastOptions={{ duration: 2000 }} />
        </>
    );
};

export default RootLayout;
