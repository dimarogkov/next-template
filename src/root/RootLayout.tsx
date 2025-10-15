import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { BreadcrumbWrapper, Header } from '@components/organisms';

type Props = {
    children?: ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <>
            <Header />
            <BreadcrumbWrapper />
            {children}
            <Toaster position='bottom-right' reverseOrder={false} toastOptions={{ duration: 2000 }} />
        </>
    );
}
