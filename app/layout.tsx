import type { Metadata } from 'next';
import { Root, RootProviders } from '@/src/components/root';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'Next Template | Home Page',
        template: 'Next Template | %s',
    },
    description: 'Generated by Dmytro Rogkov',
};

type Props = {
    children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
    return (
        <RootProviders>
            <Root>{children}</Root>
        </RootProviders>
    );
};

export default RootLayout;
