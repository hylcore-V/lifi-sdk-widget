import { useSyncWagmiConfig } from '@lifi/wallet-management';
import { useAvailableChains } from '@lifi/widget';
import { injected } from '@wagmi/connectors';
import { useRef, type FC, type PropsWithChildren } from 'react';
import { createClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import type { Config } from 'wagmi';
import { createConfig, WagmiProvider } from 'wagmi';

const connectors = [injected()];

export const WalletProvider: FC<PropsWithChildren> = ({ children }) => {
  const { chains } = useAvailableChains();

  console.log("chains:", chains);
  
  const wagmi = useRef<Config>();

  if (!wagmi.current) {
    wagmi.current = createConfig({
      chains: [mainnet],
      client({ chain }) {
        return createClient({ chain, transport: http() });
      },
      ssr: true,
    });
  }

  useSyncWagmiConfig(wagmi.current, connectors, chains);

  return (
    <WagmiProvider config={wagmi.current} reconnectOnMount={false}>
      {children}
    </WagmiProvider>
  );
};