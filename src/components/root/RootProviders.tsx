'use client';
import StoreProvider from '@/src/storeRedux/StoreProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type Props = {
    children?: React.ReactNode;
};

const queryClient = new QueryClient();

const RootProviders: React.FC<Props> = ({ children }) => {
    return (
        <StoreProvider>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </StoreProvider>
    );
};

export default RootProviders;
