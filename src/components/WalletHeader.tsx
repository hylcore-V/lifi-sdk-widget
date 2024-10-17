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
           <img src="./BRIXO-LOGO.webp" className="brixo-logo" />
      {/* <Typography px={2} fontWeight={600} fontSize={24}>
        Example
      </Typography> */}
      {/* <Box display="flex" alignItems="center"> */}
        {/* <a className="navlink" href="swap">Swap</a>
        <a className="navlink" href="bridge">Bridge</a>
        <a className="navlink" href="https://scan.li.fi/">Explorer</a> */}
        {/* <Typography px={2}>{address}</Typography>
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
        )} */}
      {/* </Box> */}
    </Box>
  );
}
