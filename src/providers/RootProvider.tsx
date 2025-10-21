'use client';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StoreProvider from './StoreProvider';
import MainProvider from './MainProvider';

type Props = {
    children?: ReactNode;
};

const queryClient = new QueryClient();

export default function RootProvider({ children }: Props) {
    return (
        <StoreProvider>
            <QueryClientProvider client={queryClient}>
                <MainProvider>{children}</MainProvider>
            </QueryClientProvider>
        </StoreProvider>
    );
}
