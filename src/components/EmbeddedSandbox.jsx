import React from 'react';
import { ApolloSandbox } from '@apollo/sandbox/react';

export function EmbeddedSandbox() {
  return (
    <ApolloSandbox
      initialEndpoint="https://api.i7n.app/v1/graphql"
      initialState={{
        document: `query GetAtoms(
  $limit: Int
  $offset: Int
  $orderBy: [atoms_order_by!]
  $where: atoms_bool_exp
) {
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
      }}
    />
  );
}
