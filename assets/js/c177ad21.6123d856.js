"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[7843],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"GraphQL API Reads",sidebar_position:0,slug:"/graphql-reads"},i="GraphQL API",l={unversionedId:"GraphQL-API/Read/graphql-reads",id:"GraphQL-API/Read/graphql-reads",title:"GraphQL API Reads",description:"163450d37d06817d8cd1d373fca4d47e}",source:"@site/docs/dev/GraphQL-API/Read/graphql-reads.md",sourceDirName:"GraphQL-API/Read",slug:"/graphql-reads",permalink:"/dev/graphql-reads",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"GraphQL API Reads",sidebar_position:0,slug:"/graphql-reads"},sidebar:"contractsSidebar",previous:{title:"PR Template",permalink:"/dev/pr-template"},next:{title:"GraphQL API Example Queries",permalink:"/dev/graphql-examples"}},s={},p=[{value:"Backend Architecture Overview",id:"163450d37d06815280f1dc6d60ba5e7f",level:2},{value:"GraphQL Playground",id:"163450d37d06811db63ee20e9fb96b4c",level:2}],d=(u="ApolloSandbox",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const c={toc:p};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"163450d37d06817d8cd1d373fca4d47e"},"GraphQL API"),(0,a.kt)("p",null,"Our GraphQL API provides a flexible and efficient way to interact with our atomic data structure system. Through this documentation, you'll learn how to query and manipulate atomic data using our GraphQL endpoints. To help you explore and test the API interactively, we've integrated Apollo Explorer sandbox environments throughout this documentation. "),(0,a.kt)("p",null,"These interactive playgrounds allow you to experiment with queries in real-time, seeing exactly how the API responds to different inputs and parameters."),(0,a.kt)("p",null,"This documentation will be split into sections by primitive, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Atoms"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Triples"),", and so on."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We\u2019re working to release a GraphQL SDK for our API that includes these queries with additional hooks for React developers to use directly in their apps.")),(0,a.kt)("p",null,"Our SDK utilizes ",(0,a.kt)("a",{parentName:"p",href:"https://the-guild.dev/blog/unleash-the-power-of-fragments-with-graphql-codegen"},"GraphQL Codegen and Fragments"),", but for the sake of clarity and simplicity the query examples in the playgrounds won\u2019t utilize Fragments."),(0,a.kt)("h2",{id:"163450d37d06815280f1dc6d60ba5e7f"},"Backend Architecture Overview"),(0,a.kt)("p",null,"This architecture diagram illustrates the data flow and integration stack for the Intuition backend. We ingest data from two primary RPC sources: our EthMultiVault contract and a ChainLinkOracle contract. This blockchain data is processed in a Docker environment where ",(0,a.kt)("a",{parentName:"p",href:"https://ponder.sh/"},"Ponder")," serves as the indexer, parsing and structuring the data into a PostgreSQL database. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ponder.sh/"},"Hasura")," then provides a GraphQL API layer on top of Postgres, enabling flexible data querying powering our app layers. This architecture provides efficient blockchain data indexing, reliable storage, and scalable API access. Our upcoming GraphQL SDK will further streamline the process for app developers looking to consume our data for building and extending the Intuition protocol."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5533).Z,width:"1708",height:"594"})),(0,a.kt)("h2",{id:"163450d37d06811db63ee20e9fb96b4c"},"GraphQL Playground"),(0,a.kt)("p",null,"The interactive Apollo Sandbox below lets you explore our GraphQL API in real-time. You can write and execute queries, inspect the schema, and see live responses from our API. We've set up this environment to help you get familiar with our data structure and available operations."),(0,a.kt)("p",null,"Try starting with some basic queries like fetching atoms or exploring relationship triples. Here's a query to get you started:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetAtoms(\n  $limit: Int\n  $offset: Int\n  $orderBy: [atoms_order_by!]\n  $where: atoms_bool_exp\n) {\n  atoms_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n  atoms(limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {\n    # AtomMetadata fields\n    id\n    image\n    label\n    emoji\n    type\n    wallet_id\n    creator {\n      id\n      label\n      image\n    }\n\n    # AtomTxn fields\n    block_number\n    block_timestamp\n    transaction_hash\n    creator_id\n\n    # AtomVaultDetails fields\n    vault_id\n    wallet_id\n    vault {\n      position_count\n      total_shares\n      current_share_price\n      positions_aggregate {\n        aggregate {\n          count\n          sum {\n            shares\n          }\n        }\n      }\n      positions {\n        id\n        account {\n          label\n          id\n        }\n        shares\n      }\n    }\n  }\n}\n")),(0,a.kt)("p",null,"You can start with this initial ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAtoms")," query in the Apollo Sandbox or write your own. The schema Explorer (docs tab) on the left side of the sandbox shows all available queries, mutations, and types. As you type, you'll get real-time autocompletion and documentation hints to help you build your queries. You can then click the play button to see the response and then adjust your query as you explore our data."),(0,a.kt)("p",null,"Need inspiration? Check out the example queries in the ",(0,a.kt)("a",{parentName:"p",href:"/graphql-examples"},"GraphQL API Example Queries")," page to get started, or jump right in and start exploring!"),(0,a.kt)(d,{mdxType:"ApolloSandbox"}))}h.isMDXComponent=!0},5533:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/graphql-reads.163450d3-7d06-815d-8183-df5fe1210644-67ebc8164b81013b596e984515701905.png"}}]);