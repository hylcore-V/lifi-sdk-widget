import React, { useState } from 'react';
import { ChainId, getQuote } from '@lifi/sdk';

const QuoteFetcher = () => {
  const [quote, setQuote] = useState<any>(null);

  const fetchQuote = async () => {
    const fetchedQuote = await getQuote({
      fromAddress: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
      fromChain: ChainId.ARB,
      toChain: ChainId.OPT,
      fromToken: '0x0000000000000000000000000000000000000000',
      toToken: '0x0000000000000000000000000000000000000000',
      fromAmount: '1000000000000000000',
    });
    setQuote(fetchedQuote);
  };

  return (
    <div>
      <button onClick={fetchQuote}>Get Quote</button>
      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  );
};

export default QuoteFetcher;
