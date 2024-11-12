"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={title:"GraphQL API",sidebar_position:0,slug:"/133450d3-7d06-8025-8e48-fdb17c025d33"},i="GraphQL API",l={unversionedId:"Technical-Documentation/Data-Reads/GraphQL-API",id:"Technical-Documentation/Data-Reads/GraphQL-API",title:"GraphQL API",description:"133450d37d068062900ac6b8775562c1}",source:"@site/docs/Technical-Documentation/Data-Reads/GraphQL-API.md",sourceDirName:"Technical-Documentation/Data-Reads",slug:"/133450d3-7d06-8025-8e48-fdb17c025d33",permalink:"/133450d3-7d06-8025-8e48-fdb17c025d33",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"GraphQL API",sidebar_position:0,slug:"/133450d3-7d06-8025-8e48-fdb17c025d33"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/13b450d3-7d06-80ed-a88f-f8fa800242ba"},next:{title:"GraphQL API Example Queries",permalink:"/131450d3-7d06-80da-8901-fb8c1870388d"}},s={},d=[{value:"Backend Architecture Overview",id:"133450d37d06804aabe3fdb0a409508d",level:2},{value:"GraphQL Playground",id:"133450d37d068020a54ff5ec2fd368d6",level:2}],p=(c="ApolloSandbox",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const u={toc:d};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"133450d37d068062900ac6b8775562c1"},"GraphQL API"),(0,a.kt)("p",null,"Our GraphQL API provides a flexible and efficient way to interact with our atomic data structure system. Through this documentation, you'll learn how to query and manipulate atomic data using our GraphQL endpoints. To help you explore and test the API interactively, we've integrated Apollo Explorer sandbox environments throughout this documentation. "),(0,a.kt)("p",null,"These interactive playgrounds allow you to experiment with queries in real-time, seeing exactly how the API responds to different inputs and parameters."),(0,a.kt)("p",null,"This documentation will be split into sections by primitive, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Atoms"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Triples"),", and so on."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We\u2019re working to release a GraphQL SDK for our API that includes these queries with additional hooks for React developers to use directly in their apps.")),(0,a.kt)("p",null,"Our SDK utilizes ",(0,a.kt)("a",{parentName:"p",href:"https://the-guild.dev/blog/unleash-the-power-of-fragments-with-graphql-codegen"},"GraphQL Codegen and Fragments"),", but for the sake of clarity and simplicity the query examples in the playgrounds won\u2019t utilize Fragments."),(0,a.kt)("h2",{id:"133450d37d06804aabe3fdb0a409508d"},"Backend Architecture Overview"),(0,a.kt)("p",null,"This architecture diagram illustrates the data flow and integration stack for the Intuition backend. We ingest data from two primary RPC sources: our EthMultiVault contract and a ChainLinkOracle contract. This blockchain data is processed in a Docker environment where ",(0,a.kt)("a",{parentName:"p",href:"https://ponder.sh/"},"Ponder")," serves as the indexer, parsing and structuring the data into a PostgreSQL database. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ponder.sh/"},"Hasura")," then provides a GraphQL API layer on top of Postgres, enabling flexible data querying powering our app layers. This architecture provides efficient blockchain data indexing, reliable storage, and scalable API access. Our upcoming GraphQL SDK will further streamline the process for app developers looking to consume our data for building and extending the Intuition protocol."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4581).Z,width:"1708",height:"594"})),(0,a.kt)("h2",{id:"133450d37d068020a54ff5ec2fd368d6"},"GraphQL Playground"),(0,a.kt)("p",null,"The interactive Apollo Sandbox below lets you explore our GraphQL API in real-time. You can write and execute queries, inspect the schema, and see live responses from our API. We've set up this environment to help you get familiar with our data structure and available operations."),(0,a.kt)("p",null,"Try starting with some basic queries like fetching atoms or exploring relationship triples. Here's a query to get you started:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetAtoms(\n  $limit: Int\n  $offset: Int\n  $orderBy: [atoms_order_by!]\n  $where: atoms_bool_exp\n) {\n  atoms(limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {\n    # AtomMetadata fields\n    data\n    id\n    image\n    label\n    emoji\n    type\n    \n    # AtomTxn fields\n    blockNumber\n    blockTimestamp\n    transactionHash\n    creatorId\n    \n    # AtomVaultDetails fields\n    vaultId\n    walletId\n    vault {\n      positionCount\n      totalShares\n      currentSharePrice\n    }\n    \n    # Creator fields\n    creator {\n      id\n      label\n      image\n    }\n  }\n}\n")),(0,a.kt)("p",null,"You can start with this initial ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAtoms")," query in the Apollo Sandbox or write your own. The schema Explorer (docs tab) on the left side of the sandbox shows all available queries, mutations, and types. As you type, you'll get real-time autocompletion and documentation hints to help you build your queries. You can then click the play button to see the response and then adjust your query as you explore our data."),(0,a.kt)("p",null,"Need inspiration? Check out the example queries in the ",(0,a.kt)("a",{parentName:"p",href:"/131450d3-7d06-80da-8901-fb8c1870388d"},"GraphQL API Example Queries")," page to get started, or jump right in and start exploring!"),(0,a.kt)(p,{mdxType:"ApolloSandbox"}))}h.isMDXComponent=!0},4581:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/133450d3-7d06-8025-8e48-fdb17c025d33.133450d3-7d06-80e0-8f33-fd85b8842580-67ebc8164b81013b596e984515701905.png"}}]);