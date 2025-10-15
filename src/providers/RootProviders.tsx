'use client';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StoreProvider from './StoreProvider';

type Props = {
    children?: ReactNode;
};

const queryClient = new QueryClient();

export default function RootProviders({ children }: Props) {
    return (
        <StoreProvider>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </StoreProvider>
    );
}
