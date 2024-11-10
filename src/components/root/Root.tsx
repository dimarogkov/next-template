import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Header } from '../elements';

type Props = {
    children?: ReactNode;
};

const Root: FC<Props> = ({ children }) => {
    return (
        <html lang='en' suppressHydrationWarning>
            <body>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                    <Header />
                    <main className='relative w-full max-w-screen-2xl p-5 m-auto'>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Root;
