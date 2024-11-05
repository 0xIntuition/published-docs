"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Contract Architecture",sidebar_position:0,slug:"/130450d3-7d06-80ab-9345-c6b1a86b7ef5"},i="Overview of Contracts",l={unversionedId:"Current-Deployments/Contracts/Contract-Architecture",id:"Current-Deployments/Contracts/Contract-Architecture",title:"Contract Architecture",description:"135450d37d0680309201f3af95bd073a}",source:"@site/docs/Current-Deployments/Contracts/Contract-Architecture.md",sourceDirName:"Current-Deployments/Contracts",slug:"/130450d3-7d06-80ab-9345-c6b1a86b7ef5",permalink:"/published-docs/fr/130450d3-7d06-80ab-9345-c6b1a86b7ef5",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Contract Architecture",sidebar_position:0,slug:"/130450d3-7d06-80ab-9345-c6b1a86b7ef5"},sidebar:"tutorialSidebar",previous:{title:"Data Populator",permalink:"/published-docs/fr/populator"},next:{title:"EthMultiVault.sol",permalink:"/published-docs/fr/130450d3-7d06-803e-9833-fff21c847507"}},c={},s=[],d={toc:s};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"135450d37d0680309201f3af95bd073a"},"Overview of Contracts"),(0,a.kt)("p",null,"Intuition's architecture provides a flexible and secure framework for managing and upgrading smart contracts, with a particular focus on the ability to scale and govern changes in a controlled manner."),(0,a.kt)("p",null,"The core component of this architecture is the use of multisignature (multisig) administration, which enhances security by requiring multiple parties to agree before critical actions can be executed. This is a common practice to avoid single points of failure or abuse of power in decentralized systems."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7750).Z,width:"1570",height:"862"})),(0,a.kt)("h1",{id:"135450d37d0680fbb160c9bec84e3e51"},"AtomWallet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linked to an ",(0,a.kt)("inlineCode",{parentName:"li"},"UpgradeableBeacon"),". This beacon contract holds the address of the current ",(0,a.kt)("inlineCode",{parentName:"li"},"AtomWallet")," implementation and can be upgraded by the multisig admin."),(0,a.kt)("li",{parentName:"ul"},"Proxy contracts, known as ",(0,a.kt)("inlineCode",{parentName:"li"},"BeaconProxy"),", use the beacon to reference the implementation, allowing multiple instances to be automatically updated when the beacon's implementation address changes.")),(0,a.kt)("h1",{id:"135450d37d0680faaf90fb19d6303eb7"},"EthMultiVault"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Contract uses a ",(0,a.kt)("inlineCode",{parentName:"li"},"TransparentUpgradeableProxy"),"."),(0,a.kt)("li",{parentName:"ul"},"This setup allows the ",(0,a.kt)("inlineCode",{parentName:"li"},"EthMultiVault")," to be upgraded by interacting with a ",(0,a.kt)("inlineCode",{parentName:"li"},"ProxyAdmin"),", which serves as an intermediary to facilitate upgrades. This separation of concerns allows for a more secure upgrade process, as the upgrade action is isolated from the proxy that interacts with the end users."),(0,a.kt)("li",{parentName:"ul"},"Has the capability to deploy new ",(0,a.kt)("inlineCode",{parentName:"li"},"BeaconProxy")," contracts. When deployed, these ",(0,a.kt)("inlineCode",{parentName:"li"},"BeaconProxy")," contracts follow the beacon proxy pattern by referencing the ",(0,a.kt)("inlineCode",{parentName:"li"},"AtomWallet")," implementation through the ",(0,a.kt)("inlineCode",{parentName:"li"},"UpgradeableBeacon"),". This allows for a scalable deployment of new proxy instances without the need to redeploy the ",(0,a.kt)("inlineCode",{parentName:"li"},"AtomWallet")," logic."),(0,a.kt)("li",{parentName:"ul"},"The multisig admin also controls key contract parameters (such as the admin's address and various fees that are present in the protocol, etc.) of the ",(0,a.kt)("inlineCode",{parentName:"li"},"EthMultiVault"),". These parameters can be adjusted, but changes must pass through the timelock process present in the ",(0,a.kt)("inlineCode",{parentName:"li"},"EthMultiVault")," implementation contract, which introduces a delay between when an action is proposed and when it can be executed, giving stakeholders time to react to proposed changes if they wish to do so.")),(0,a.kt)("p",null,"Overall, this architecture provides a flexible and secure framework for managing and upgrading smart contracts, with a particular focus on the ability to scale and govern changes in a controlled manner."))}p.isMDXComponent=!0},7750:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/130450d3-7d06-80ab-9345-c6b1a86b7ef5.130450d3-7d06-80de-b8f2-d4d7dc008b23-6771dc674f28b864d933ebbe06827188.png"}}]);