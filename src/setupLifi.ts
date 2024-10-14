// src/setupLifi.ts
import { createConfig, ChainId } from '@lifi/sdk';

createConfig({
  integrator: 'Your dApp/company name',  // Replace with your actual dApp/company name
  apiKey: 'your_unique_api_key',         // Optional: Your API key if you have one for higher rate limits
  apiUrl: 'https://li.quest/v1',         // Optional: Custom API URL, use if you have a specific endpoint
  rpcUrls: {                             // Optional: Custom RPC URLs for different chains
    [ChainId.SOL]: ['https://solana-example.node.com/'], 
  },
  userId: 'user_unique_identifier',      // Optional: Unique identifier for the user of your application
  routeOptions: {                        // Optional: Custom options for routing
   
  },
  chains: [                             
   
  ],
  preloadChains: true,                   
  disableVersionCheck: false,            
});
