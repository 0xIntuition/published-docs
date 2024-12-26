"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[1242],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=i,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},578:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={title:"Architecture",sidebar_position:1,slug:"/architecture"},r="The Intuition System",s={unversionedId:"Overview/architecture",id:"Overview/architecture",title:"Architecture",description:"104450d37d068048bf43e9a0bd5589e0}",source:"@site/docs/Overview/architecture.md",sourceDirName:"Overview",slug:"/architecture",permalink:"/landing/fr/landing/architecture",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Architecture",sidebar_position:1,slug:"/architecture"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/landing/fr/landing/getting-started"},next:{title:"Key Terms",permalink:"/landing/fr/landing/glossary"}},l={},d=[{value:"State of the Graph",id:"13d450d37d0680229734da296f77c919",level:3},{value:"The Trust Protocol",id:"13d450d37d068067a772f8b88e892f99",level:3},{value:"Indexing",id:"13d450d37d06802ba9b8c9d98e586901",level:3},{value:"Data Access",id:"13d450d37d0680648644eca7df23e640",level:3},{value:"App Development",id:"13d450d37d0680b089f3c24c28570616",level:3},{value:"SDK",id:"13d450d37d0680d88ecee99dd360c873",level:3}],c={toc:d};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"104450d37d068048bf43e9a0bd5589e0"},"The Intuition System"),(0,i.kt)("p",null,"Intuition is an ecosystem of technologies composing a universal and permissionless knowledge graph, capable of handling both objective facts and subjective opinions. Intuition\u2019s vertically integrated knowledge stack offers a comprehensive suite of developer tooling to streamline the development of the next generation of technologies powered by humanity\u2019s collective intuition."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9681).Z,width:"1955",height:"840"})),(0,i.kt)("p",null,"Intuition\u2019s open social knowledge graph is built to harness collective wisdom in a ",(0,i.kt)("strong",{parentName:"p"},"structured, permissionless, and fully decentralized")," manner. The system\u2019s resulting state is open and accessible to everyone, enabling limitless use cases and expanding the information available about the countless entities we engage with daily\u2014whether it\u2019s a pseudonym, a smart contract, an organization, or a piece of content. This approach empowers users with a richer understanding of the ecosystem and facilitates more informed interactions."),(0,i.kt)("h3",{id:"13d450d37d0680229734da296f77c919"},"State of the Graph"),(0,i.kt)("p",null,"The Intuition system leverages a combination of on and off chain interactions to create, store, and manage data within the Intuition knowledge graph in the following ways:  "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"On-Chain"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Atom")," creation and the instantiation of their associated Smart Contract Wallets. Atoms may link to any arbitrary data via their ",(0,i.kt)("inlineCode",{parentName:"li"},"atomURI"),", allowing any data across the web to be captured in the Intuition System."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Triple"),' creation and the instantiation of the associated Vaults for Attestations "For" and Attestations "Against", allowing for the creation of semantic relationships between Atoms to express arbitrarily-complex statements.'),(0,i.kt)("li",{parentName:"ul"},"Signal creation, allowing users to express themselves using Atoms and Triples."),(0,i.kt)("li",{parentName:"ul"},"The unified system state - which can be likened to the nodes, edges, and weights of the knowledge graph.")),(0,i.kt)("p",null,"\u02cd"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Off-Chain"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All rich/heavy metadata pertaining to Atoms and Triples is stored off-chain, such as pictures, long-form descriptions, and references."),(0,i.kt)("li",{parentName:"ul"},"All system data is aggregated off-chain via our infrastructure and services, to enable easy querying")),(0,i.kt)("p",null,"A similar data storage method is often used for NFTs, combining on-chain and off-chain elements. This approach leverages on-chain ownership and immutability while maintaining the flexibility and richness of off-chain metadata. The contract mints an ERC-721 token, recorded on-chain for ownership and transfer tracking, while the comprehensive metadata is stored off-chain."),(0,i.kt)("h1",{id:"104450d37d06807baf29e2481f698971"},"Foundation"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"13d450d37d068067a772f8b88e892f99"},"The Trust Protocol"),(0,i.kt)("p",null,"The Intuition protocol provides the infrastructure for a new information economy, using cryptoeconomic incentives to promote the expression of high-quality, semantic data. Specifically, the protocol is designed to promote: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the creation of useful data"),(0,i.kt)("li",{parentName:"ol"},"convergence on universal canonical identifiers for all things"),(0,i.kt)("li",{parentName:"ol"},"convergence on data standards, schemas, and formats")),(0,i.kt)("p",null,"By rewarding users for contributing useful data and fostering consensus on canonical identifiers and shared data standards, the Intuition protocol creates a unified framework where data can be transparently sourced, verified, and enriched."),(0,i.kt)("p",null,"Intuition\u2019s infrastructure also facilitates the ",(0,i.kt)("strong",{parentName:"p"},"creation of decentralized identity and reputation data via peer-to-peer attestations about any subject and its decentralized identifier (DID)"),". If someone endorses you as trustworthy, that metadata will no longer be associated with just the LinkedIn you, or the Twitter you. Instead of being stuck within a given platform, the knowledge tied to DIDs can be leveraged and contributed to by any application."),(0,i.kt)("p",null,"The Intuition Protocol is designed to be completely unopinionated, allowing anyone to make attestations about anything. This approach encourages the creation of valuable data and makes navigating the resulting information straightforward. Users can search for a specific person or smart contract to view associated claims or use a set of tags to identify entities matching particular criteria. Rather than making judgments about the validity of claims, Intuition enables the principle of \u2018anyone can say anything about anything,\u2019 and provides robust tools to explore, analyze, and filter what has been said."),(0,i.kt)("h1",{id:"104450d37d068024a805f8a88dc5f510"},"Services"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"13d450d37d06802ba9b8c9d98e586901"},"Indexing"),(0,i.kt)("p",null,"The Indexing layer of Intuition seamlessly integrates both on-chain and off-chain data into a unified, semantic knowledge graph. This structured framework provides developers with access to a rich, context-aware dataset that transcends traditional data silos, allowing for a web-wide view that enhances the depth and precision of applications built on the protocol. By indexing data from smart contracts, decentralized storage solutions, and even traditional web data sources, Intuition creates a comprehensive ecosystem where relationships between entities are clearly defined and easily navigable. "),(0,i.kt)("p",null,"With powerful indexing capability, applications gain enhanced reliability and flexibility, supporting use cases such as advanced DeFi analytics, verifiable reputation systems, and cross-platform identity solutions. This comprehensive approach not only simplifies data retrieval but also empowers developers to build more innovative applications that make full use of the Web3 ecosystem."),(0,i.kt)("h3",{id:"13d450d37d0680648644eca7df23e640"},"Data Access"),(0,i.kt)("p",null,"Intuition\u2019s Trust Graph is designed for maximum accessibility and usability by applications. The Data Access layer allows developers to stream real-time data from the knowledge graph to the database best suited for their use case. The knowledge graph can also be queried directly, empowering developers to build responsive, data-driven applications and ensures that queries can be executed with high efficiency, enabling applications to surface insights that would otherwise remain hidden. Developers can benefit from features like real-time data updates and semantic tagging, which facilitate deeper analysis and improved decision-making. "),(0,i.kt)("h1",{id:"104450d37d068016b66fef945a893dc1"},"Modules"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"13d450d37d0680b089f3c24c28570616"},"App Development"),(0,i.kt)("p",null,"Modules are any application integrated with Intuition. While our vision involves every app across the web being integrated, we are focusing on building a few applications ourselves to bootstrap the ecosystem by seeding utility of the knowledge graph. "),(0,i.kt)("p",null,"Intuition\u2019s initial flagship application, The Portal, allows users to create, navigate, aggregate, and curate attestations regarding people and things within the web3 ecosystem, a space where qualitative reputation and identity data is acutely lacking. Leveraging users\u2019 social graphs (i.e., the people and organizations they \u201cfollow\u201d) and distributed trust algorithms (e.g., EigenTrust), the application will be able to prioritize the display of relevant activity and tailor attestation weighting."),(0,i.kt)("p",null,"Other in-house applications include a Browser Extension, MetaMask Snap, Mobile App, and Data Populator - each serving its own unique function in demonstrating the power of the Intuition System."),(0,i.kt)("p",null,"Intuition\u2019s ",(0,i.kt)("strong",{parentName:"p"},"initial application allows users to create and navigate attestations regarding people and things within the web3 ecosystem"),", a space where qualitative reputation and identity data is acutely lacking. Leveraging users\u2019 social graphs (i.e., the people and organizations they \u201cfollow\u201d) and distributed trust algorithms (e.g., EigenTrust), the application will be able to prioritize the display of relevant activity and tailor attestation weighting. In-house applications are built with composability and re-usability in mind and aim to make it as easy as possible for others to also build on top of Intuition through the open-sourcing of our front-end libraries."),(0,i.kt)("h3",{id:"13d450d37d0680d88ecee99dd360c873"},"SDK"),(0,i.kt)("p",null,"Intuition offers templates, component libraries, and pre-built integrations to significantly reduce development complexity. Removing much of the integration work allows developers to focus on innovating, achieve faster deployments, and ensure a high-quality user experience."),(0,i.kt)("p",null,"Intuition\u2019s SDK empowers developers to seamlessly integrate attestations into their existing features, enhancing the visibility, utility, and incentives of the data they already generate. For example, a \u201cthumbs up\u201d for a Web3 app on a product hunt site or a \u201clike\u201d on social platform content can exist on Intuition\u2019s open graph instead of being locked within app-specific silos. This data can then be easily queried and displayed across applications, enriching the user experience."),(0,i.kt)("p",null,"Development efforts in the future will focus on building out and enhancing the SDK to support evolving developer needs and new use cases."))}p.isMDXComponent=!0},9681:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/architecture.104450d3-7d06-8051-a525-dab6ec9705b7-553c8ec6196a5b46f7eac30a1dc97bd8.png"}}]);