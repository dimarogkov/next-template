export const TANSTACK_QUERY_PROVIDER_USAGE_CODE = `import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
	<App />
</QueryClientProvider>`;
