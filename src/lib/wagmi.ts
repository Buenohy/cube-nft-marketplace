import { http, createConfig, cookieStorage, createStorage } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';

import {
  rabbyWallet,
  metaMaskWallet,
  rainbowWallet,
  coinbaseWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

export const config = createConfig({
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),

  wallets: [
    {
      growpName: 'Recommended',
      wallets: [
        rabbyWallet,
        metaMaskWallet,
        rainbowWallet,
        coinbaseWallet,
        walletConnectWallet,
      ],
    },
  ],

  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [sepolia.id]: http(),
  },
});
