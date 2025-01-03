import { FC, ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Header } from '../elements';

const inter = Inter({ subsets: ['latin'] });

type Props = {
    children?: ReactNode;
};

const Root: FC<Props> = ({ children }) => {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={inter.className}>
                <Header />
                <main className='relative w-full max-w-screen-2xl p-5 m-auto'>{children}</main>
            </body>
        </html>
    );
};

export default Root;
