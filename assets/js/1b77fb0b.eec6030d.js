"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Contracts",sidebar_position:2,slug:"/contracts"},i="Implementation Overview",s={unversionedId:"Current-Deployments/contracts",id:"Current-Deployments/contracts",title:"Contracts",description:"112450d37d06805fa3d9ffabe11b3ee9}",source:"@site/docs/Current-Deployments/contracts.md",sourceDirName:"Current-Deployments",slug:"/contracts",permalink:"/published-docs/contracts",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Contracts",sidebar_position:2,slug:"/contracts"},sidebar:"tutorialSidebar",previous:{title:"The Portal",permalink:"/published-docs/portal"}},l={},c=[{value:"EthMultiVault",id:"112450d37d0680c3a97bfc0b29da2b94",level:2},{value:"AtomWallet",id:"112450d37d068028899fe4a7819786c0",level:2}],d={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"112450d37d06805fa3d9ffabe11b3ee9"},"Implementation Overview"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Intuition's smart contracts are central to its blockchain architecture, handling critical on-chain activities such as the creation of Atoms (also known as Identities) and Triples (also known as Claims), as well as the staking processes on these elements. These contracts are integral to the economic interactions involved in creating and staking, ensuring a seamless and secure execution of these operations. Future development will expand how these smart contracts are used to govern various other integral components within the Intuition system, including Atom Claiming/Recovery, management of off-chain Atom Data, and various registries such as Bonding Curve, Primitive, Schema, Algorithm, and Interpretation Registries."),(0,r.kt)("p",null,"Acting as the Verifiable Data Registry, these smart contracts store crucial information like URIs of Atoms/Triples, the intricate relationships between them, and current stakeholder positions. They essentially form the nodes and edges of the knowledge graph. In contrast, the off-chain Verifiable Data Registry maintains the properties of these nodes and edges, creating a comprehensive and interconnected data structure."),(0,r.kt)("p",null,"Key components of the on-chain state of the knowledge graph include:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Atom wallets and vaults, along with their respective shares and balances."),(0,r.kt)("li",{parentName:"ol"},"AtomData, typically represented as bytes, usually pointing to a URI for off-chain data."),(0,r.kt)("li",{parentName:"ol"},"Triples and their constituent Atoms."),(0,r.kt)("li",{parentName:"ol"},"User positions on Atoms and Triples, reflecting current stakes and indicating who is attesting to what.")),(0,r.kt)("h1",{id:"112450d37d0680668530cf6197592d4d"},"Smart Contracts"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Intuition's architecture provides a flexible and secure framework for managing and upgrading smart contracts, with a particular focus on the ability to scale and govern changes in a controlled manner. The use of multi-signature authentication is core to Intuition\u2019s smart contract architecture to avoid single points of failure or abuse of power in the decentralized system. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2897).Z,width:"768",height:"421"})),(0,r.kt)("p",null,"There are two main contracts which contain the logic that is executed when the proxy contracts delegate calls to them. These contracts can be upgraded, but changes must pass through a time lock controller. "),(0,r.kt)("h2",{id:"112450d37d0680c3a97bfc0b29da2b94"},"EthMultiVault"),(0,r.kt)("p",null,"The primary contract in this framework, referred to as the EthMultiVault contract, blends and advances the ERC-4626 and ERC-1155 standards. This contract is a pivotal element of the Intuition protocol, facilitating a wide range of functionalities and providing a robust foundation for the decentralized knowledge graph."),(0,r.kt)("p",null,"Attributes of the EthMultiVault include: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upgradable through a ProxyAdmin, which serves as an intermediary to facilitate upgrades. This separation of concerns allows for a more secure upgrade process, as the upgrade action is isolated from the proxy that interacts with the end users."),(0,r.kt)("li",{parentName:"ul"},"Has the capability to deploy new ",(0,r.kt)("inlineCode",{parentName:"li"},"BeaconProxy")," contracts. When deployed, these ",(0,r.kt)("inlineCode",{parentName:"li"},"BeaconProxy")," contracts follow the beacon proxy pattern by referencing the ",(0,r.kt)("inlineCode",{parentName:"li"},"AtomWallet")," implementation through the ",(0,r.kt)("inlineCode",{parentName:"li"},"UpgradeableBeacon"),". This allows for a scalable deployment of new proxy instances without the need to redeploy the ",(0,r.kt)("inlineCode",{parentName:"li"},"AtomWallet")," logic."),(0,r.kt)("li",{parentName:"ul"},"The multisig admin also controls key contract parameters (such as the admin's address and various fees that are present in the protocol, etc.) of the ",(0,r.kt)("inlineCode",{parentName:"li"},"EthMultiVault"),". These parameters can be adjusted, but changes must pass through the timelock process present in the ",(0,r.kt)("inlineCode",{parentName:"li"},"EthMultiVault")," implementation contract, which introduces a delay between when an action is proposed and when it can be executed, giving stakeholders time to react to proposed changes if they wish to do so.")),(0,r.kt)("h2",{id:"112450d37d068028899fe4a7819786c0"},"AtomWallet"),(0,r.kt)("p",null,"Aside from EthMultiVault, the AtomWallet contract is a foundational element of the Intuition protocol, acting as an abstract account (wallet) linked to a specific atom. It leverages account abstraction standard (ERC-4337) to enable advanced transaction execution and management capabilities for atom-associated operations within the blockchain environment."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AtomWallet"))),(0,r.kt)("p",null,"Linked to an ",(0,r.kt)("inlineCode",{parentName:"p"},"UpgradeableBeacon"),". This beacon contract holds the address of the current ",(0,r.kt)("inlineCode",{parentName:"p"},"AtomWallet")," implementation and can be upgraded by the multisig admin."),(0,r.kt)("p",null,"Proxy contracts, known as ",(0,r.kt)("inlineCode",{parentName:"p"},"BeaconProxy"),", use the beacon to reference the implementation, allowing multiple instances to be automatically updated when the beacon's implementation address cha"))}p.isMDXComponent=!0},2897:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contracts.112450d3-7d06-80b9-9570-ff73ccc85a54-57299cc6968609be5db903cc00d65a57.png"}}]);