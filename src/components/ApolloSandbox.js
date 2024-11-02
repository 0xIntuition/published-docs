import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function ApolloSandboxContent() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://embeddable-sandbox.cdn.apollographql.com/_latest/embeddable-sandbox.umd.production.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      new window.EmbeddedSandbox({
        target: '#embedded-sandbox',
        initialEndpoint: 'https://api.i7n.app/v1/graphql',
        initialState: {
          document: `query GetAtoms(
  $limit: Int
  $offset: Int
  $orderBy: [atoms_order_by!]
  $where: atoms_bool_exp
) {
  atoms(limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
    # AtomMetadata fields
    data
    id
    image
    label
    emoji
    type
    
    # AtomTxn fields
    blockNumber
    blockTimestamp
    transactionHash
    creatorId
    
    # AtomVaultDetails fields
    vaultId
    walletId
    vault {
      positionCount
      totalShares
      currentSharePrice
    }
    
    # Creator fields
    creator {
      id
      label
      image
    }
  }
}`,
        },
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="embedded-sandbox" style={{ height: '600px', width: '100%' }} />
  );
}

export default ApolloSandboxContent;
