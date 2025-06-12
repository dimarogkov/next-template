import { FC, ReactNode } from 'react';
import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ['latin'] });

type Props = {
    children?: ReactNode;
};

const Root: FC<Props> = ({ children }) => {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={geist.className}>{children}</body>
        </html>
    );
};

export default Root;
