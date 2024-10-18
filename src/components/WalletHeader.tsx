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
      px={2}
      pt={2}
      mt={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
           
      <Typography px={2}>
      <img src="./BRIXO-LOGO.webp" className="brixo-logo" />
      </Typography>
      <Box display="flex" alignItems="center" marginLeft={24}>
        {/* <a className="navlink" href="swap">Swap</a>
        <a className="navlink" href="bridge">Bridge</a>
        <a className="navlink" href="https://scan.li.fi/">Explorer</a> */}
        {/* <Typography px={2}>{address}</Typography> */}
        {!isConnected ? (
          <Button
          className="connect-bnt"
            variant="contained"
            disableElevation
            onClick={() => connectAsync({ connector: connectors[0] })}
          >
            Connect
          </Button>
        ) : (
          <Button
            variant="contained"
            className="connect-btn"
            disableElevation
            onClick={() => disconnect()}
          >
            Disconnect
          </Button>
        )}
      </Box>
    </Box>
  );
}
