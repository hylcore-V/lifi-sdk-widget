import { createConfig, ChainId } from '@lifi/sdk';
import { EVM, Solana } from '@lifi/sdk';
// import { KeypairWalletAdapter } from '@solana/wallet-adapter-base';
import type { SignerWalletAdapter } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect } from 'react';

// Initialize the wallet adapter for Solana using a private key (For backend or testing purposes)
// Ensure you securely manage the private key and replace 'YOUR_PRIVATE_KEY_ARRAY' with your actual Solana private key.
const solanaPrivateKey = Uint8Array.from([/* YOUR_PRIVATE_KEY_ARRAY */]);

createConfig({
  integrator: 'Your dApp/company name',  // Replace with your actual dApp/company name
  
  apiUrl: 'https://li.quest/v1',  // Optional: Custom API URL, use if you have a specific endpoint
  rpcUrls: {                             // Optional: Custom RPC URLs for different chains
    [ChainId.SOL]: ['https://api.mainnet-beta.solana.com'], // Specify the Solana Mainnet RPC URL
  },
  userId: 'user_unique_identifier',      // Optional: Unique identifier for the user of your application
  routeOptions: {                        // Optional: Custom options for routing
  },
  providers: [
    EVM(), // EVM Provider for Ethereum and compatible chains
    Solana({
      // getWalletAdapter: async () => new KeypairWalletAdapter(solanaPrivateKey)
    }),
  ],
  preloadChains: true,
  disableVersionCheck: false,
});

// export const SDKProviders = () => {
//   const { wallet } = useWallet();

//   useEffect(() => {
//     // Dynamically configure SDK Providers based on the React wallet adapter
//     config.setProviders([
//       Solana({
//         async getWalletAdapter() {
//           // Use the wallet adapter from @solana/wallet-adapter-react
//           return wallet?.adapter as SignerWalletAdapter;
//         },
//       }),
//     ]);
//   }, [wallet?.adapter]);

//   return null;
// };
