import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Breadcrumbs, Header } from '../blocks';

type Props = {
    children?: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <Breadcrumbs />
            <main className='relative w-full p-5'>{children}</main>
            <Toaster position='bottom-right' reverseOrder={false} toastOptions={{ duration: 2000 }} />
        </>
    );
};

export default RootLayout;
