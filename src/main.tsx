// main.tsx

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WalletHeader } from './components/WalletHeader';
import { WalletProvider } from './providers/WalletProvider';
import { SolanaWalletProvider } from './providers/SolanaWalletProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <SolanaWalletProvider>
          <WalletHeader />
          <App />
        </SolanaWalletProvider>
      </WalletProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
