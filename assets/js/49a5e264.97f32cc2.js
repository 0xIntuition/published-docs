"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[2193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Calculating Rewards",sidebar_position:3,slug:"/fees"},o="**Staking**",s={unversionedId:"Core-Concepts/Using-the-Primitives/fees",id:"Core-Concepts/Using-the-Primitives/fees",title:"Calculating Rewards",description:"11c450d37d068006af1cc1befcc43a55}",source:"@site/docs/concepts/Core-Concepts/Using-the-Primitives/fees.md",sourceDirName:"Core-Concepts/Using-the-Primitives",slug:"/fees",permalink:"/fees",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Calculating Rewards",sidebar_position:3,slug:"/fees"},sidebar:"contractsSidebar",previous:{title:"Capturing Signal",permalink:"/capturing-signal"},next:{title:"Use Cases",permalink:"/use-cases"}},l={},c=[{value:"Share Purchase",id:"135450d37d0680e785f0e4cc37d6c373",level:3},{value:"Fee Payment",id:"170450d37d0680eaa84cf0b467f9704b",level:3},{value:"Share Purchase",id:"135450d37d0680e7bf86c897f605bf29",level:3},{value:"Fee Payment",id:"135450d37d0680bd919fc6189bdd929f",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"11c450d37d068006af1cc1befcc43a55"},(0,a.kt)("strong",{parentName:"h1"},"Staking")),(0,a.kt)("p",null,"Staking on Atoms or Triples is how users signal their conviction in identities and claims and rewards are designed to incentivize early interaction with true and useful data. "),(0,a.kt)("p",null,"Users deposit ETH into  by depositing ETH in the vaults associated with Identities/Atoms and Claims/Triples. When users stake or unstake on an Atom or Triple, they pay a fee to all current shareholders of the vaults invested in."),(0,a.kt)("h1",{id:"135450d37d068022bba1d1ef37163195"},"Atoms"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The use of funds for deposits on Atoms is summarized below.")),(0,a.kt)("h3",{id:"135450d37d0680e785f0e4cc37d6c373"},"Share Purchase"),(0,a.kt)("p",null,"When staking on an Atom, shares are purchased in the Atom. "),(0,a.kt)("h3",{id:"170450d37d0680eaa84cf0b467f9704b"},"Fee Payment"),(0,a.kt)("p",null,"When staking on a Atom fees are paid to all existing shareholders of the Atom. "),(0,a.kt)("h1",{id:"135450d37d068042b72de574911ea39b"},"Triples"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The use of funds for deposits on Triples is summarized below.")),(0,a.kt)("h3",{id:"135450d37d0680e7bf86c897f605bf29"},"Share Purchase"),(0,a.kt)("p",null,"When staking on a Triple, shares are purchased in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Triple"),(0,a.kt)("li",{parentName:"ul"},"The Subject\u2019s Atom"),(0,a.kt)("li",{parentName:"ul"},"The Predicate\u2019s Atom"),(0,a.kt)("li",{parentName:"ul"},"The Object\u2019s Atom")),(0,a.kt)("h3",{id:"135450d37d0680bd919fc6189bdd929f"},"Fee Payment"),(0,a.kt)("p",null,"When staking on a Triple fees are paid to the shareholders of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Triple"),(0,a.kt)("li",{parentName:"ul"},"The Subject\u2019s Atom"),(0,a.kt)("li",{parentName:"ul"},"The Predicate\u2019s Atom"),(0,a.kt)("li",{parentName:"ul"},"The Object\u2019s Atom"),(0,a.kt)("li",{parentName:"ul"},"The Protocol")),(0,a.kt)("p",null,"It is important to note that Positive and Negative Triple Vaults are entirely independent\u2014they don't share shareholders or fees, even though they might be related in the future. Atoms only have one Vault, which generally represents support for that Atom."),(0,a.kt)("p",null,"To support the bootstrapping of the knowledge graph, the incentive structure is based on most heavily rewarding users adding to the knowledge graph in the form of creating and depositing on Atoms, the foundational primitive in the Intuition system."))}d.isMDXComponent=!0}}]);