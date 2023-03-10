import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ProviderProps } from '../types';

const queryClient = new QueryClient();

const QueryProvider = ({ children }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default QueryProvider;
