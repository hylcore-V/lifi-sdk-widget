// src/components/WalletHeader.tsx
import React from "react";
import { Box, Button, Typography } from '@mui/material';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export function WalletHeader() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connectors, connectAsync } = useConnect();

  return (
    <Box
      p={2}
      mb={2}
      mt={6}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      // borderBottom="1px solid #EEE"
    >
 
        <Typography px={2}>{address}</Typography>
        {!isConnected ? (
          <Button
            variant="contained"
            disableElevation
            onClick={() => connectAsync({ connector: connectors[0] })}
          >
            Connect
          </Button>
        ) : (
          <Button
            variant="contained"
            disableElevation
            onClick={() => disconnect()}
          >
            Disconnect
          </Button>
        )}
    </Box>
  );
}
