"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[1928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=d(n),p=i,m=f["".concat(c,".").concat(p)]||f[p]||u[p]||r;return n?a.createElement(m,s(s({ref:t},l),{},{components:n})):a.createElement(m,s({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={title:"Atoms",sidebar_position:0,slug:"/136450d3-7d06-80f6-8f6c-d7fccdf5d877"},s="Atoms",o={unversionedId:"Core-Concepts/Primitive-Fundamentals/Atoms",id:"Core-Concepts/Primitive-Fundamentals/Atoms",title:"Atoms",description:"13b450d37d06804c9752e53e81251a6a}",source:"@site/docs/Core-Concepts/Primitive-Fundamentals/Atoms.md",sourceDirName:"Core-Concepts/Primitive-Fundamentals",slug:"/136450d3-7d06-80f6-8f6c-d7fccdf5d877",permalink:"/fr/136450d3-7d06-80f6-8f6c-d7fccdf5d877",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Atoms",sidebar_position:0,slug:"/136450d3-7d06-80f6-8f6c-d7fccdf5d877"},sidebar:"tutorialSidebar",previous:{title:"Primitives",permalink:"/fr/primitives"},next:{title:"Triples",permalink:"/fr/136450d3-7d06-80db-b0e4-ce33963cdeb5"}},c={},d=[{value:"Atom Ownership and Token Curated Registries",id:"13b450d37d06803185d5c0a843cdf814",level:3}],l={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"13b450d37d06804c9752e53e81251a6a"},"Atoms"),(0,i.kt)("p",null,"A system facilitating the arrival at social consensus around globally persistent canonical identifiers for all things demands that these identifiers possess a few key attributes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Firstly,")," these identifiers should be decentralized identifiers, providing unique, secure, and verifiable identification without any reliance on a central authority."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Secondly,")," these identifiers should have a sufficient amount of associated data to ensure precise referencing of specific entities, concepts, or pieces of information. Without this contextual data, it would be unclear what each identifier is meant to represent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Thirdly"),", these identifiers must have some agent-centric state that is capable of tracking the usage of the identifier across contexts. This enables the community to discern which identifiers are being most frequently used to represent different concepts in different settings.")),(0,i.kt)("p",null,"To solve for these requirements, the concepts of Atoms emerge as the foundation of the Intuition framework, representing the most fundamental units of data. These units can range from a single word to a complex concept, serving as discrete, manageable, and referenceable pieces of information that facilitate seamless data integration and manipulation across the web. By taking arbitrary data of any size and prescribing it a decentralized identifier, we can:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Start to reference data universally across the web."),(0,i.kt)("li",{parentName:"ol"},"Grant users equity in data as they signal its relevancy through usage."),(0,i.kt)("li",{parentName:"ol"},"Reward users for signaling the relevancy of data, thereby encouraging active participation and accurate data representation.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1164).Z,width:"2920",height:"1170"})),(0,i.kt)("p",null,"Each Atom is made universally referenceable through a decentralized identifier. This approach ensures that every Atom is uniquely identifiable and can be consistently referenced across the web, maintaining data integrity and meaning regardless of the system or context."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// An example DID\n\ndid:ethr:mainnet:0x3b0bc51ab9de1e5b7b6e34e5b960285805c41736\n\n// An example DID Document\n\n{\n\n    "id": "did:ethr:mainnet:0x3b0bc51ab9de1e5b7b6e34e5b960285805c41736",\n\n    "verificationMethod": [\n\n        {\n\n            "id": "did:ethr:mainnet:0x3b0bc51ab9de1e5b7b6e34e5b960285805c41736#controller",\n        \n            "type": "EcdsaSecp256k1RecoveryMethod2020",\n        \n            "controller": "did:ethr:mainnet:0x3b0bc51ab9de1e5b7b6e34e5b960285805c41736",\n        \n            "blockchainAccountId": "eip155:1:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736"\n\n        }\n\n    ],\n\n    "authentication": [\n    \n        "did:ethr:mainnet:0x3b0bc51ab9de1e5b7b6e34e5b960285805c41736#controller"\n    \n    ],\n    \n    "assertionMethod": [\n    \n        "did:ethr:mainnet:0x3b0bc51ab9de1e5b7b6e34e5b960285805c41736#controller"\n    \n    ],\n\n    "@context": [\n\n        "https://www.w3.org/ns/did/v1",\n\n        "https://w3id.org/security/suites/secp256k1recovery-2020/v2",\n\n        "https://w3id.org/security/v3-unstable"\n\n    ]\n\n}\n')),(0,i.kt)("p",null,"To provide guarantees around the entity/concept/data attempting to be referenced by the Atom, each Atom must have at least some de minimis corresponding data. This data can be anything, live anywhere, and take any format, though storing data in a Verifiable Data Registry and utilizing supported data structures and schemas is recommended, as it improves the usability of the data through strong guarantees around immutability, availability, liveness, and persistence. Atom uniqueness is enforced through a hash of this underlying Atom Data, ensuring that no piece of data can have two corresponding Atoms. To maintain the integrity of mutable data, it\u2019s crucial that any such data be timestamped. This ensures that any future references to the data clearly understand what the data was referencing at the specific point in time when the attestation was made."),(0,i.kt)("p",null,"Through this, Atoms enable the breakdown of data into discrete, manageable units, which can be easily combined and reused across various contexts and applications. This structuring supports flexible and adaptable digital systems, ensuring that data is interoperable across platforms. The composability of Atoms enhances the functionality and versatility of the system, allowing data to be efficiently utilized in different settings."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(234).Z,width:"922",height:"886"})),(0,i.kt)("h3",{id:"13b450d37d06803185d5c0a843cdf814"},"Atom Ownership and Token Curated Registries"),(0,i.kt)("p",null,"Given the permissionless nature of the system, multiple Atoms may be representative of the same concept. To foster consensus on high-quality Atoms and establish canonical identifiers for all things, Intuition employs the concept of a Token Curated Registry (TCR). In this model, users gain fractional ownership over the Atoms they interact with and receive a portion of the interaction fees each respective Atom generates, incentivizing engagement with popular Atoms. As users increasingly interact with these Atoms, a TCR emerges, ranking Atoms based on their relevance using metrics such as an Atom\u2019s Total Value Locked (TVL). This mechanism facilitates ecosystem convergence on and easy discoverability of the most valuable and widely accepted Atoms/identifiers representing each concept."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3058).Z,width:"960",height:"796"})))}u.isMDXComponent=!0},234:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/136450d3-7d06-80f6-8f6c-d7fccdf5d877.13b450d3-7d06-807c-bcf3-f616c01954b9-93043d4ca5432fd5d5b8fba788f1ebdc.png"},3058:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/136450d3-7d06-80f6-8f6c-d7fccdf5d877.13b450d3-7d06-8094-9cf2-e6237b88622e-b9402c34b235d47fc71859c7addedd66.png"},1164:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/136450d3-7d06-80f6-8f6c-d7fccdf5d877.13d450d3-7d06-80d0-b6fc-fb24948eebf2-671fece8a62a67da10ee0eb97e9eca73.png"}}]);