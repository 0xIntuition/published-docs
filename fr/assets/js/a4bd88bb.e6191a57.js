"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[2092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Atoms",sidebar_position:0,slug:"/atoms"},i=void 0,l={unversionedId:"Core-Building-Blocks/atoms",id:"Core-Building-Blocks/atoms",title:"Atoms",description:"Atoms Overview",source:"@site/docs/contracts/Core-Building-Blocks/atoms.md",sourceDirName:"Core-Building-Blocks",slug:"/atoms",permalink:"/fr/contracts/atoms",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Atoms",sidebar_position:0,slug:"/atoms"},sidebar:"contractsSidebar",previous:{title:"Contracts Overview",permalink:"/fr/contracts/protocol-overview"},next:{title:"Triples",permalink:"/fr/contracts/triples"}},s={},c=[{value:"Atoms Overview",id:"16d450d37d0680f98878f10837c152b2",level:2},{value:"Structure of Atoms",id:"16d450d37d0680cebbedce50b5e50990",level:2},{value:"Example Uses of an Atom",id:"16d450d37d0680509766fc05fbfb5ca2",level:2},{value:"Vaults and Bonding Curves",id:"16d450d37d0680728c49e49cd9bcfd90",level:2},{value:"Atoms in the Intuition System",id:"16d450d37d0680f6b80ff512c9b0432b",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"16d450d37d0680f98878f10837c152b2"},"Atoms Overview"),(0,a.kt)("p",null,'Atoms are the foundational building blocks of the Intuition System. The term "Atom" originates from the programming language Prolog, where it represents a basic constant or fundamental symbol. In the Intuition platform, Atoms maintain this concept but are extended for greater versatility.'),(0,a.kt)("h2",{id:"16d450d37d0680cebbedce50b5e50990"},"Structure of Atoms"),(0,a.kt)("p",null,"Atoms in the Intuition System are designed to be unique, identifiable, and multifunctional. Here's how:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Atom ID"),": Each Atom has a unique identifier used to index it as a distinct concept."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Universal Resource Indicator (URI)"),": Every Atom is associated with a URI, which can reference:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A URL for a webpage or media."),(0,a.kt)("li",{parentName:"ul"},"A CAIP-10 handle pointing to a smart contract or wallet on any blockchain."),(0,a.kt)("li",{parentName:"ul"},"A Content Identifier (CID) for data stored on IPFS, representing any data schematic.")))),(0,a.kt)("h2",{id:"16d450d37d0680509766fc05fbfb5ca2"},"Example Uses of an Atom"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Atom as a Concept"),': An Atom could represent "Solar Energy."'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"URI Associations"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A webpage explaining solar energy."),(0,a.kt)("li",{parentName:"ul"},"A smart contract managing solar energy credits."),(0,a.kt)("li",{parentName:"ul"},"An IPFS-hosted dataset of solar panel performance metrics.")))),(0,a.kt)("h2",{id:"16d450d37d0680728c49e49cd9bcfd90"},"Vaults and Bonding Curves"),(0,a.kt)("p",null,"Each Atom contains multiple ",(0,a.kt)("strong",{parentName:"p"},"Vaults"),", which operate on unique ",(0,a.kt)("strong",{parentName:"p"},"Bonding Curves"),". These Vaults serve a crucial role in the Intuition System:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purpose"),": Bonding Curve Vaults incentivize economic activity around Atoms, helping prioritize important concepts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Signal Creation"),': By staking resources in an Atom\u2019s Vault, users indicate its importance, generating a "signal" to distinguish meaningful data from irrelevant "noise" in the decentralized system.')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For more details on Vaults and Bonding Curves, refer to the Vaults section.")),(0,a.kt)("h2",{id:"16d450d37d0680f6b80ff512c9b0432b"},"Atoms in the Intuition System"),(0,a.kt)("p",null,"Atoms are the cornerstone of ",(0,a.kt)("strong",{parentName:"p"},"Intuition"),"\u2014an indelible and ever-growing decentralized knowledge base. By combining their unique identifiers, URIs, and economic signaling mechanisms, Atoms ensure the system remains robust, transparent, and adaptable to the dynamic needs of decentralized knowledge sharing."))}d.isMDXComponent=!0}}]);