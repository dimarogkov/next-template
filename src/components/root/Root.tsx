type Props = {
    children?: React.ReactNode;
};

const Root: React.FC<Props> = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <main className='relative w-full max-w-screen-2xl p-5 m-auto'>{children}</main>
            </body>
        </html>
    );
};

export default Root;
