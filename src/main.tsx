import { App } from '@components/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { SubaseClientProvider } from '@contexts/supabase-client-context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SubaseClientProvider>
        <App />
      </SubaseClientProvider>
    </QueryClientProvider>
  </StrictMode>
);
