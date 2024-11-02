import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function SandboxContent() {
  const [status, setStatus] = React.useState('Loading...');

  React.useEffect(() => {
    console.log('SandboxContent mounted');

    const script = document.createElement('script');
    script.src =
      'https://embeddable-sandbox.cdn.apollographql.com/_latest/embeddable-sandbox.umd.production.min.js';
    script.async = true;

    script.onload = () => {
      console.log('Script loaded');
      setStatus('Script loaded, initializing sandbox...');

      try {
        if (window.EmbeddedSandbox) {
          console.log('EmbeddedSandbox found');
          new window.EmbeddedSandbox({
            target: '#embedded-sandbox',
            initialEndpoint: 'https://api.i7n.app/v1/graphql',
            initialState: {
              document: `query GetAtoms {
                atoms {
                  id
                  label
                }
              }`,
              variables: {},
              headers: {},
              includeCookies: false,
            },
          });
          setStatus('Sandbox initialized');
        } else {
          setStatus('Error: EmbeddedSandbox not found');
        }
      } catch (error) {
        console.error('Sandbox initialization error:', error);
        setStatus(`Error: ${error.message}`);
      }
      if (window.EmbeddedSandbox) {
        new window.EmbeddedSandbox({
          target: '#embedded-sandbox',
          initialEndpoint: 'https://api.i7n.app/v1/graphql',
          initialState: {
            document: `query GetAtoms($limit: Int, $offset: Int, $orderBy: [atoms_order_by!], $where: atoms_bool_exp) {
              atoms(limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
                data
                id
                image
                label
                emoji
                type
                blockNumber
                blockTimestamp
                transactionHash
                creatorId
                vaultId
                walletId
                vault {
                  positionCount
                  totalShares
                  currentSharePrice
                }
                creator {
                  id
                  label
                  image
                }
              }
            }`,
            variables: {},
            headers: {},
            includeCookies: false,
          },
        });
      }
    };

    // Add script to document
    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      id="embedded-sandbox"
      style={{
        height: '600px',
        width: '100%',
        margin: '20px 0',
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: '8px',
      }}
    />
  );
}

export function ApolloSandbox() {
  return (
    <BrowserOnly>
      {() => {
        return <SandboxContent />;
      }}
    </BrowserOnly>
  );
}
