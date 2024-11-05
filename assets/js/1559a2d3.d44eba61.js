"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[85],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),A=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=A(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=A(t),u=r,g=c["".concat(d,".").concat(u)]||c[u]||s[u]||i;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var A=2;A<i;A++)l[A]=t[A];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>A});var a=t(7462),r=(t(7294),t(3905));const i={title:"GraphQL API Example Queries",sidebar_position:1,slug:"/131450d3-7d06-80da-8901-fb8c1870388d"},l="GraphQL API Example Queries",o={unversionedId:"Current-Deployments/API/GraphQL-API-Example-Queries",id:"Current-Deployments/API/GraphQL-API-Example-Queries",title:"GraphQL API Example Queries",description:"131450d37d0680de838be0afe8525d65}",source:"@site/docs/Current-Deployments/API/GraphQL-API-Example-Queries.md",sourceDirName:"Current-Deployments/API",slug:"/131450d3-7d06-80da-8901-fb8c1870388d",permalink:"/published-docs/131450d3-7d06-80da-8901-fb8c1870388d",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"GraphQL API Example Queries",sidebar_position:1,slug:"/131450d3-7d06-80da-8901-fb8c1870388d"},sidebar:"tutorialSidebar",previous:{title:"GraphQL API",permalink:"/published-docs/133450d3-7d06-8025-8e48-fdb17c025d33"}},d={},A=[{value:"Atom Queries",id:"131450d37d0680bf847dd2c81abf03b0",level:2},{value:"GetAtoms",id:"131450d37d06808296a8e7435b6801b9",level:3},{value:"GetAtom",id:"131450d37d0680e78415e6328c9c3b82",level:3},{value:"Account Queries",id:"131450d37d0680f985c5fd3f7f9d8f6c",level:2},{value:"GetAccounts",id:"131450d37d068078a82af53da40112d9",level:3},{value:"GetAccount",id:"131450d37d0680a1889fefa6fcbb09f8",level:3},{value:"Triple Queries",id:"131450d37d0680eeb2a6da2841c51f51",level:2},{value:"GetTriples",id:"131450d37d06803492e4e232713568c8",level:3},{value:"GetTriple",id:"131450d37d06803a9edcec28edd52204",level:3},{value:"Positions",id:"131450d37d0680fb8794f84f731c13ed",level:2},{value:"GetPositions",id:"131450d37d0680b8a990ff417d678766",level:3},{value:"GetPosition",id:"131450d37d0680abb074da321b5f0ddd",level:3},{value:"Vaults",id:"131450d37d06802483d7c2dc75c5ce86",level:2},{value:"GetVaults",id:"131450d37d0680fd8298d771fa3004de",level:3},{value:"GetVault",id:"131450d37d0680efb2dcc8c29c493702",level:3},{value:"\u201cUtility\u201d Queries",id:"131450d37d06808d8afeebe09521412e",level:2},{value:"GetEvents",id:"131450d37d0680379ff6ef4f91d25816",level:3}],p={toc:A};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"131450d37d0680de838be0afe8525d65"},"GraphQL API Example Queries"),(0,r.kt)("p",null,"This page contains some example queries that you can run directly into the embedded playground on the ",(0,r.kt)("a",{parentName:"p",href:"/133450d3-7d06-8025-8e48-fdb17c025d33"},"previous page"),"."),(0,r.kt)("h2",{id:"131450d37d0680bf847dd2c81abf03b0"},"Atom Queries"),(0,r.kt)("p",null,"There are two primary queries available for retrieving ",(0,r.kt)("inlineCode",{parentName:"p"},"Atom")," data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetAtoms"),": Retrieves a collection of atoms based on specified filters and parameters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetAtom"),": Fetches a single atom by its unique identifier (",(0,r.kt)("inlineCode",{parentName:"li"},"id"),")")),(0,r.kt)("p",null,"These ",(0,r.kt)("inlineCode",{parentName:"p"},"Atom")," queries are foundational and are used in more complex queries to retrieve data from the Intuition protocol."),(0,r.kt)("h3",{id:"131450d37d06808296a8e7435b6801b9"},"GetAtoms"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetAtoms(\n  $limit: Int\n  $offset: Int\n  $orderBy: [atoms_order_by!]\n  $where: atoms_bool_exp\n) {\n  atoms(limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {\n    # AtomMetadata fields\n    data\n    id\n    image\n    label\n    emoji\n    type\n    \n    # AtomTxn fields\n    blockNumber\n    blockTimestamp\n    transactionHash\n    creatorId\n    \n    # AtomVaultDetails fields\n    vaultId\n    walletId\n    vault {\n      positionCount\n      totalShares\n      currentSharePrice\n    }\n    \n    # Creator fields\n    creator {\n      id\n      address\n      username\n      created_at\n      updated_at\n    }\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fapi.i7n.app%2Fv1%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoCCKEcAzgBQA6SRRAJADYCWcXK6RAJKpmrNhABmE2uQHCUo9hDxh8AIQICA2gENqdAPrLVeAwCMCAQgC6itgHcAFvgQC9NWuYgQOBhAA8AB2YASiJgRXc6em5efnZYvgAaIklpWSUpGRQU43xzTSUVdQIUpxcBB2c8BDCIllYiAGIiKhoAWXIdMD0dIgkuBA4wWkVWHpQdMaIuMGmeHQBzBGmOHTMh6YQ4CAArLmmUAkCVhtZplra4ABV-FgGhkemzDmgAawA5eA28Z9eoN7XHgIWiTODBM5EFB4HRIWg6KAoLgQJAACR0tEc0ygNXceEEc0hF1a%2BgAajoYBwUAARLpcDi0fqDYajSEANwpVIJ03sOg4HHI3PZnJQ4WmrECEFofGRSAAwhAYCJIaxqJMOABlRw6GqsxqNWB4GqoLU6hAABTwXCgp31AF9psS5bjqHgmY89QaXcoxSqZoT9axumBdZ79TAZHgkDpEOKiDiEHoEGADHo4zBAhNk6mFJCHQ183aQEkQByresBbQMCAQHagA"},"Interact with this query in Apollo Sandbox")),(0,r.kt)("h3",{id:"131450d37d0680e78415e6328c9c3b82"},"GetAtom"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query GetAtom(\n  $atomId: numeric!\n) {\n  atom(id: $atomId) {\n    # AtomMetadata fields\n    id\n    image\n    label\n    emoji\n    type\n    \n    # AtomTxn fields\n    blockNumber\n    blockTimestamp\n    transactionHash\n    creatorId\n    \n    # AtomVaultDetails fields\n    vaultId\n    walletId\n    vault {\n      positionCount\n      totalShares\n      currentSharePrice\n    }\n    \n    # Creator fields\n    creator {\n      id\n      label\n      image\n    }\n  }\n}\n\n# Variables\n{\n  "atomId": "2"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fapi.i7n.app%2Fv1%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoCCKEcAFADpJFEAkAhtXAJJjpFLx8ASygBCRgEoiwRsw41aQ3q3ncwUmU2ZEAxESo0AsuTZgObIgDMhCADZgAzrO1LnzIXDYBzBG6K22ACM7PwQ4CAArIT8UAgAHXy1mPz0DOAAVAA8maztHP0DbaABrADl4YLwCoqhi9I8EBxQ2ODiYvDYkBzYoFCEIJAAJNgcACz8oPAR5PB4-FP1OADU2GFsUABETIVsHKxt7JySiADdV9bnjgHc2W1tyS%2B1T85RpP2Y4iAchPoGAYQgMFQ7yI1GatgAyqM2FMjk9mLA8FNUFCYQgAAp4ESJJ4AX3mxz0fymM32eTh2km02oeDex3cYBBAWCthBHm8OO0%2BK03NxIAANCAzligvcHBgQJpkiBVHMMER6CAAEyKxh83FAA"},"Interact with this query in Apollo Sandbox")),(0,r.kt)("h2",{id:"131450d37d0680f985c5fd3f7f9d8f6c"},"Account Queries"),(0,r.kt)("p",null,"There are two primary queries available for retrieving ",(0,r.kt)("inlineCode",{parentName:"p"},"Account")," data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetAccounts"),": Retrieves a collection of atoms based on specified filters and parameters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetAccount"),": Fetches a single atom by its unique identifier (",(0,r.kt)("inlineCode",{parentName:"li"},"address"),")")),(0,r.kt)("h3",{id:"131450d37d068078a82af53da40112d9"},"GetAccounts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetAccounts {\n  accounts {\n    # AccountMetadata fields\n    label\n    image\n    id\n    atomId\n    type\n    \n    # AccountClaims fields\n    claims(order_by: { shares: desc }) {\n      triple {\n        id\n        label\n      }\n      shares\n      counterShares\n    }\n    \n    # AccountPositions fields\n    positions_aggregate(order_by: { shares: desc }) {\n      nodes {\n        id\n        shares\n        vault {\n          id\n          totalShares\n          currentSharePrice\n          atom {\n            id\n            label\n          }\n          triple {\n            id\n            label\n          }\n        }\n      }\n    }\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fapi.i7n.app%2Fv1%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoCCUUEMqAzkcADpJFECG1tDTr77AMREqNOigCy5DmA4oORAGYBLBABsw9fgLUcARuu3tlcDgHMERosrBW5EOAElbbASgIAHS6-ZXhonhQAYV0TRhV1TSsoULh6AAoIPDB8AH09AnQmInoACw48BHoslPooIgBfAEo%2BHzc8ZQ81BFqBNusXdp19Qzr2Cqt2PIKiwaIxVHwAZXzCrTqBur8RbnEABQh6ZRRlCCRw1Q15to9N7d391PMzQrM5BETktIys4BzZopKi8urW9qQIKU-l0bGMhh9jl0iAA3DgwNQoYFQ0F9dooCDyNQzEaQqHjGB4QqobGFNYNKDePHsexwJF4lFU7oGNRggSLRkoBpNFosVEgzqMoi6Zms-qs9ntCVi1yLCogAA0IFhDX0zXoGBAIAqQA"},"Interact with this query in Apollo Sandbox")),(0,r.kt)("h3",{id:"131450d37d0680a1889fefa6fcbb09f8"},"GetAccount"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query GetAccount($address: String!) {\n  account(id: $address) {\n    # AccountMetadata fields\n    label\n    image\n    id\n    atomId\n    type\n    \n    # AccountClaims fields\n    claims(order_by: { shares: desc }) {\n      triple {\n        id\n        label\n      }\n      shares\n      counterShares\n    }\n    \n    # AccountPositions fields\n    positions_aggregate(order_by: { shares: desc }) {\n      nodes {\n        id\n        shares\n        vault {\n          id\n          totalShares\n          currentSharePrice\n          atom {\n            id\n            label\n          }\n          triple {\n            id\n            label\n          }\n        }\n      }\n    }\n  }\n  chainLinkPrices(limit: 1, order_by: { id: desc }) {\n    usd\n  }\n}\n\n# Variables\n{\n  "address": "0x01ba1635602706ce2794f2cd5d7eba0bdcf4972b"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fapi.i7n.app%2Fv1%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoCCUUEMqAFACQCGYYeCAzp%2BkQMoo8ASyQBzAIQBKIsAA6SIkWbVaDIWF4s2HbtLkLFRAMREqNOigCy5VsxTMiAMyEIANmE7zDRV8wBGbl6GQnDMoghBiuqRSigQcACSYDEoBAAOEQaKMSZmqigAwr4hnE4u7p5ZRFDFcJz0EHhg%2BAD6fgS8wEScABbMOrzNnFBEAL56MYqCQmmuCDKTwclV3r4Brouji739XIvmqPh8fToxW1U5pioWAAoQnEIoQhBIpc5uHjFp94-Pry1hUQcUR2BANJqtdqdbonLiDLgjcYLFZEJAQIbI7zeaIoxQ7U64ogAN2YMFcKExWOxyyp3ji9lcx12lVphlgeA4qCZHBuwigmVZijs8UpgqIOLFijWgUJinOYums3m%2Bkl4ppkulG1lY0Wcs2ZyC8uqfREABkRABrXlCfn1VwhR68ACMABoiI1mng2h0ZGr4cMxhMqjBOOrzqMQC6QCThP45pwMCAVURZCBWOwuJ4MCmQAAGAAeuadfmYToAbABmACsZdzACYAOy5sv8xsATgALI461AwFWwA2ECXc34wFBHB22w2635U-II6MgA"},"Interact with this query in Apollo Sandbox")),(0,r.kt)("h2",{id:"131450d37d0680eeb2a6da2841c51f51"},"Triple Queries"),(0,r.kt)("p",null,"There are two primary queries available for retrieving ",(0,r.kt)("inlineCode",{parentName:"p"},"Triple")," data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetTriples"),": Retrieves a collection of triples based on specified filters and parameters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetTriple"),": Fetches a single triple by its unique identifier (",(0,r.kt)("inlineCode",{parentName:"li"},"id"),")")),(0,r.kt)("h3",{id:"131450d37d06803492e4e232713568c8"},"GetTriples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetTriples(\n  $limit: Int\n  $offset: Int\n  $orderBy: [triples_order_by!]\n  $where: triples_bool_exp\n) {\n  triples(limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {\n    # TripleMetadata fields\n    id\n    label\n    subject {\n      data\n      id\n      image\n      label\n      emoji\n      type\n      creator {\n        label\n        image\n        id\n        atomId\n        type\n      }\n    }\n    predicate {\n      data\n      id\n      image\n      label\n      emoji\n      type\n      creator {\n        label\n        image\n        id\n        atomId\n        type\n      }\n    }\n    object {\n      data\n      id\n      image\n      label\n      emoji\n      type\n      creator {\n        label\n        image\n        id\n        atomId\n        type\n      }\n    }\n    \n    # TripleTxn fields\n    blockNumber\n    blockTimestamp\n    transactionHash\n    creatorId\n    \n    # TripleVaultDetails fields\n    vaultId\n    counterVaultId\n    vault {\n      id\n      totalShares\n      currentSharePrice\n      positionCount\n      atom {\n        id\n        label\n      }\n    }\n    counterVault {\n      id\n      totalShares\n      currentSharePrice\n      positionCount\n      atom {\n        id\n        label\n      }\n    }\n    \n    # Creator fields\n    creator {\n      label\n      image\n      id\n      atomId\n      type\n    }\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fapi.i7n.app%2Fv1%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoAqeAlgA4A2CAzgBQA6SRRAJPdXNRToiASVQcu3CADNpTcsLEoJPCHjD4AQgWEBtFDQbMA%2Bmo15jAIwIBCALoruAdwAW%2BBMIN1GTKxAj0xggAHrQcAJREwCpeRqx8AkI8CYIANEQycgqqsvIo6Wb4Vjqq6loE6a7uws5ueAiR0ZxcRADERFTeCACy5ACGYH0ofUTS1Aj0YEwqXNRgM0T0fZYTC0wwlgBWCFAoUQtcg8MHRHMn-H0A5ggnSyv0JwhwEJvUJygEtDfNLURQ9UM1Psfr9FstViDfhdridZvNIS1AXARPDQS0Pl8TgBfBY4kG0epgahQIYIYFoo59c6o0HQ75ou4QtFPF5vBEY%2Bmg-4IQF4closH3WGnOBXTlos4IrhIlHCjnY3ELCBbHZ7JoUoZUhGSiWimEIxkPBEs17vT7ilrc3n8hngo0CkVi4U6gUymlo%2BUIvG-b0tBbtTpGCjBThjCZTBaWejQADWADl4Cs8JHo1AYxR%2BMxhnAwiCDH0kEw%2BrtqBAkAAJPpMFwLK0oNSykH%2BjqGRgANT6MHoKAAIv1qPQmKNxpNpiCAG6d7uN35QCAwVD4DtdlAzlqTlc2lou3714b0ADKLj69THaNgeHqqCPJ4QAAUaFALVxaBAmIJS0gAMLz8QIpFblC7qgoaCogr6XBzguKBLlOarUu8ED7jep4nBeV4oCh96Ps%2BRCvu%2BKCfj%2B0EnAB6oCjuIF2mBPoLM2X4AvWfJhqOtaMUC5G-KB2p6rhlHSvWyLAVwnq0c0eJYiAqQgJONDLD4GAgCAWJAA"},"Interact with this query in the Apollo Sandbox")),(0,r.kt)("h3",{id:"131450d37d06803a9edcec28edd52204"},"GetTriple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query GetTriple($tripleId: numeric!) {\n  triple(id: $tripleId) {\n    # TripleMetadata fields\n    id\n    label\n    subject {\n      data\n      id\n      image\n      label\n      emoji\n      type\n      creator {\n        label\n        image\n        id\n        atomId\n        type\n      }\n    }\n    predicate {\n      data\n      id\n      image\n      label\n      emoji\n      type\n      creator {\n        label\n        image\n        id\n        atomId\n        type\n      }\n    }\n    object {\n      data\n      id\n      image\n      label\n      emoji\n      type\n      creator {\n        label\n        image\n        id\n        atomId\n        type\n      }\n    }\n    \n    # TripleTxn fields\n    blockNumber\n    blockTimestamp\n    transactionHash\n    creatorId\n    \n    # TripleVaultDetails fields\n    vaultId\n    counterVaultId\n    vault {\n      id\n      totalShares\n      currentSharePrice\n      positionCount\n      atom {\n        id\n        label\n      }\n    }\n    counterVault {\n      id\n      totalShares\n      currentSharePrice\n      positionCount\n      atom {\n        id\n        label\n      }\n    }\n    \n    # Creator fields\n    creator {\n      label\n      image\n      id\n      atomId\n      type\n    }\n  }\n}\n\n# Variables\n{\n  "tripleId": "15"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fapi.i7n.app%2Fv1%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoAqeAlgA4A2CAFACQo0MICSY6RS8fNSgBCAJRFgAHSREi7OoybVeRNh0Y8J02XKIBiIlUUIAsuQCGYCygtEAZtQT0wAZxl6iKj3voWARs4%2Bcq4w-gBWCFAoksF61rZxct66ntRwFgDmCElEfoH0uQhwEOHUuSgEtDmpelB4CDYQeLG1nvlBbXrpWTWeaWC5ck1wPEPyVX39AL5xs7W0DWDCNgit-UQJFrkpGz3ZuR2FXcWl5V2V1bn1jSjN6xt5AZ2PXhkHXcmDn0QjYz%2BXKaeebAuIQCJRGI6DZbHbfPbvIG%2BZ7HDanMoVSbXBpNFrQx5Hcb7JEDcZ-eGPQG5EF6GlyOKGYycCgAD1kjmcbji-no0AA1gA5eCBPDc3lQPkUdIIVy2OC0OLsCxIVwWaLUCBIAASFlcAAs4jdcf9PAyjBoEAA1CwwegoAAilmo9FcDicLnctQAbja7Sa6hAYKh8NbbSh-XIfWGHqSLhBbPQAMp6iwNT0bWB4BqoZOphAABRoUBJRFoEFc1BQGqQAGFA6hciMY-1dgSUdS5ob6ygQ76oXCKvGLEmU2nrjAs8gULmGoXhCWyxWq5q60GUI27nBm7HXoSunSiAezTWcXcWhyPYbT-d8e1211iQOuuTMVdajT5tMQAAaEA%2BmgBIwrgYCA%2BJSCACicGMGBEOBACMACs4EyF%2B0xAA"},"Interact with this query in Apollo Sandbox")),(0,r.kt)("h2",{id:"131450d37d0680fb8794f84f731c13ed"},"Positions"),(0,r.kt)("h3",{id:"131450d37d0680b8a990ff417d678766"},"GetPositions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetPositions(\n  $limit: Int\n  $offset: Int\n  $orderBy: [positions_order_by!]\n  $where: positions_bool_exp\n) {\n  positions_aggregate(limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {\n    nodes {\n      id\n      account {\n        id\n        label\n      }\n      vault {\n        id\n        atom {\n          id\n          label\n        }\n        triple {\n          id\n          subject {\n            id\n            label\n          }\n          predicate {\n            id\n            label\n          }\n          object {\n            id\n            label\n          }\n        }\n      }\n      shares\n  }\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fapi.i7n.app%2Fv1%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoAKEAzgJYq0RLUAUAOkkUQCQA2tceuiIBJVBy7cIAM2nVywsSgk8IeMPgBCBYQG0ADjXqNmAfTUa8pgEYEAhAF0V3AO4ALfAmGG6DJtRsICF5TBAAPfQ4ASiJgFR9jf1MAQwBzVLwEVOSUBBZ%2BQRRhPgF6ABoiGTkFVVl5FAqLfBsdVXUtAgr3T2LuzJi4zi4iJAgNaliVYaJaMCnh5KgoCBhUSaHprln56d5k6wReHaIAX2OAN2SYXhR1zeHtjc2ciDg7%2B4e5p-u9g6Pv4ZnAFcFB4Wj6XgId4fGZfGFcagwawAKwQUFug3hn2OP32hxxgIJXH0mTAtCgOShmKxsKJw1%2B%2BOBhKZXAgKLRGLpWzhNIZ-yxQJhgs2wum1DcyUy1BUwqBJxAZRAlzB%2B0h1AwIBAJyAA"},"Interact with this query in Apollo Sandbox")),(0,r.kt)("h3",{id:"131450d37d0680abb074da321b5f0ddd"},"GetPosition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query GetPosition($positionId: String!) {\n  position(id: $positionId) {\n    id\n    account {\n      id\n      label\n    }\n    vault {\n      id\n      atom {\n        id\n        label\n      }\n      triple {\n        id\n        subject {\n          id\n          label\n        }\n        predicate {\n          id\n          label\n        }\n        object {\n          id\n          label\n        }\n      }\n    }\n    shares\n  }\n}\n\n  \n  # Variables\n  {\n      "positionId": "13-0x000ddc0e1bbfd22d2f0909d4638fec62aafea106"\n    }\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fapi.i7n.app%2Fv1%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoAKEAzgJYq0RIAUAOkkUQCQAON9jJAEkw6IgGUUeWkgDmAQnYBKIsHac%2BdBk2a1R3TQKYiVajpwt71FzgEMoUCDFSrrNzlfPuiAG1sAjBB83CwBfEM4AN1sYHxRXL3dPbzsUCDgElMswCPc-QODEm3CiiylaHh8ETKyiZNrqGH8AKwQoeLNa7NzvfKCesIGNPAQwWihbFGrOrrqc0t6A-oXBlc4IFraOoe61iz7CrpKs4-dTm2oAC1sR6mtT0JAAGhBo6QCq6gwQGdYQQ20whyGCIfwAjABmAC0AAYAB4wxFgMBQGEIMH%2BfwAMzAACZcXisTCAJwksAAFgAbBCABxYtqU3G2Wz02xgmGUv7sR6hIA"},"Interact with this query in Apollo Sandbox")),(0,r.kt)("h2",{id:"131450d37d06802483d7c2dc75c5ce86"},"Vaults"),(0,r.kt)("h3",{id:"131450d37d0680fd8298d771fa3004de"},"GetVaults"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetVaults(\n  $limit: Int\n  $offset: Int\n  $orderBy: [vaults_order_by!]\n  $where: vaults_bool_exp\n) {\n  vaults_aggregate(\n    limit: $limit\n    offset: $offset\n    order_by: $orderBy\n    where: $where\n  ) {\n    nodes {\n      id\n      atom {\n        id\n        label\n      }\n      triple {\n        id\n        subject {\n          id\n          label\n        }\n        predicate {\n          id\n          label\n        }\n        object {\n          id\n          label\n        }\n      }\n      positions_aggregate {\n        nodes {\n          account {\n            id\n            label\n          }\n          shares\n        }\n      }\n      currentSharePrice\n      totalShares\n    }\n  }\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fapi.i7n.app%2Fv1%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoBqAhjADYoDOAFADpJFEAktAlnDynREAkqjYdOEAGZSG5IaJTiuEPGHwAhAkIDaANxr0GAfVXq8xgEYEAhAF1lnAO4ALfAiEG6jKxAi1jBAAPAAc2AEoiYGUvI2MqAHMEvAQEqhQEIiZefkEuHIEAGiJpWXkVGTkUYrN8K20VNU0CYtd3IWc3FMjo9g4iJAh1BijlfqIeMDH%2B9Ig4Ub7xjknp8doqSwRaVaIAXx2UPB4Q2kzepf6VxaWGGEsAKwQoFAWL8au3-vXN7evx-b%2B-RCKTAPCg6TOO3eU0Baw2Wyhe0REAeTxe50%2BExhmKI3wRsKRgIBFxCEAYAh4ECQJkSyVSENeb0Gw0ZnyoUCgEBgqFZmI%2BONx8N%2BOOJmIYLioKQYiI4iNF-x2sDwKVQAGUJSkAApHKAIA4QFBUWjqyUIaXXUUA3YgQogAxHDanBgYEAgXZAA"},"Interact with this query in Apollo Sandbox")),(0,r.kt)("h3",{id:"131450d37d0680efb2dcc8c29c493702"},"GetVault"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query GetVault(\n  $vaultId: numeric!\n) {\n  vault(id: $vaultId) {\n      id\n      atom {\n        id\n        label\n      }\n      triple {\n        id\n        subject {\n          id\n          label\n        }\n        predicate {\n          id\n          label\n        }\n        object {\n          id\n          label\n        }\n      }\n      positions_aggregate {\n        nodes {\n          account {\n            id\n            label\n          }\n          shares\n          \n        }\n      }\n      currentSharePrice\n      totalShares\n    }\n  }\n}\n\n# Variables\n{\n  "vaultId": "1"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fapi.i7n.app%2Fv1%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoBqAhjADYoAUAOkkUQCQBuN9AkmOiJJ4%2BAJZQAhCwCURYCzbc6jUQI5K%2BYWfNZs9qhXrZUUEOHMNG2B3VaK0qAIwS1LegL5u2KPKIAOtAgWtlY2dmwAzjCOAFYIUCjB4fpgXlYOzq4hRp7Zen54CGDiJkE6ydapeUYZLmlsuckQsfGJ5RVhFbVZyY1WfUZ%2BEBGiKKIQSBEA%2BlQA5rOFs6VJ4UgQYAgRK8lUUFAQMKjbHVUVet31HpeRABZUhRHXRJcDV3mweIWoAMp3hQAKvigCDSphQVFov3umzcfVy7hAABoQNxfE5AhEMCB2kwUTwUPxcYJcQBGXEsBHuIA"},"Interact with this query in Apollo Sandbox")),(0,r.kt)("h2",{id:"131450d37d06808d8afeebe09521412e"},"\u201cUtility\u201d Queries"),(0,r.kt)("p",null,"These \u201cutility\u201d queries don\u2019t necessarily fall into the other categories but are examples of how you can query for specific purpose data. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetStats")," query returns stats such as the total number of Atoms created."),(0,r.kt)("h3",{id:"131450d37d0680379ff6ef4f91d25816"},"GetEvents"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetEvents(\n  $limit: Int\n  $offset: Int\n  $orderBy: [events_order_by!]\n  $where: events_bool_exp\n) {\n  events_aggregate(\n    limit: $limit\n    offset: $offset\n    order_by: $orderBy\n    where: $where\n  ) {\n    nodes {\n      blockNumber\n      blockTimestamp\n      type\n      transactionHash\n      atomId\n      tripleId\n      depositId\n      feeTransferId\n      redemptionId\n    }\n  }\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fapi.i7n.app%2Fv1%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoCiAbsigM4AUAOkkUQCQA2AlnNyuiIBJVCzbsIAM0l1ygkSjEcIeMPgBCBQQG0ENVHQD6KtXkMAjAgEIAukvYB3ABb4EgvbSPmIEToYQAHgAOLACURMBKHgaGAIYA5vF4CPGxKAjMrGxEPHwCHLn8SmxSMnLK0rKKWSWq%2BBZaynV4msVEzq6Cji7JSuGRNURIEGp0EW1s5pzQANYAcvDm%2BBNEU7MAKrwIdCixcCGDbCgEQQgrKHixSHSxUCjcEEgAErF0TitpEHBCYOd43EFOAgfis1EEIHR%2BCDDkRJAgEOtLtc4Xhodlssk1Pt7o80dkAL5KQlIYkgAA0ICosX%2BsSm2wwIBA%2BKAA"},"Interact with this query in Apollo Sandbox")))}s.isMDXComponent=!0}}]);