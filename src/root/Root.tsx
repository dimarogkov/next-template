/* eslint-disable @next/next/no-head-element */
import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

export const Root = ({ children }: Props) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                />
            </head>

            <body>{children}</body>
        </html>
    );
};
