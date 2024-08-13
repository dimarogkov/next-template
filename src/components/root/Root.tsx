import { ThemeProvider } from 'next-themes';
import { Header } from '../elements/Header';

type Props = {
    children?: React.ReactNode;
};

const Root: React.FC<Props> = ({ children }) => {
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
