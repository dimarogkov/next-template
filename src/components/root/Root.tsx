import { FC, ReactNode } from 'react';
import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ['latin'] });

type Props = {
    children?: ReactNode;
};

const Root: FC<Props> = ({ children }) => {
    return (
        <html lang='en' suppressHydrationWarning>
            <head>
                <link
                    rel='stylesheet'
                    type='text/css'
                    href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
                />
            </head>

            <body className={geist.className}>{children}</body>
        </html>
    );
};

export default Root;
