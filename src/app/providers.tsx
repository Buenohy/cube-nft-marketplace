'use client';

import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { WagmiProvider, cookieToInitialState } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { store } from '@/lib/store';
import { config } from '@/lib/wagmi;

const queryClient = new QueryClient();

export function Providers({
  children,
  cookie,
}: {
  children: React.ReactNode;
  cookie?: string;
}) {
  const initialState = cookieToInitialState(config, cookie);

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <ReduxProvider store={store}>{children}</ReduxProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
