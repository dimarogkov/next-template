'use client';
import { FC, ReactNode } from 'react';
import StoreProvider from '@/src/store/redux/StoreProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from '@/src/context';

type Props = {
    children?: ReactNode;
};

const queryClient = new QueryClient();

const RootProviders: FC<Props> = ({ children }) => {
    return (
        <StoreProvider>
            <QueryClientProvider client={queryClient}>
                <ToastProvider>{children}</ToastProvider>
            </QueryClientProvider>
        </StoreProvider>
    );
};

export default RootProviders;
