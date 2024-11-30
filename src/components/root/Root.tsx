import { FC, ReactNode } from 'react';
import { Header } from '../elements';

type Props = {
    children?: ReactNode;
};

const Root: FC<Props> = ({ children }) => {
    return (
        <html lang='en' suppressHydrationWarning>
            <body>
                <Header />
                <main className='relative w-full max-w-screen-2xl p-5 m-auto'>{children}</main>
            </body>
        </html>
    );
};

export default Root;
