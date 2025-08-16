import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Breadcrumb, Header } from '@/src/components/blocks';

type Props = {
    children?: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <Breadcrumb />
            {children}
            <Toaster position='bottom-right' reverseOrder={false} toastOptions={{ duration: 2000 }} />
        </>
    );
};

export default RootLayout;
