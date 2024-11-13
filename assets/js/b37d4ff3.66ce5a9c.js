"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[3352],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(r),f=i,b=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(b,s(s({ref:t},l),{},{components:r})):n.createElement(b,s({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const a={title:"Triples",sidebar_position:1,slug:"/136450d3-7d06-80db-b0e4-ce33963cdeb5"},s="Triples",o={unversionedId:"Core-Concepts/Primitive-Fundamentals/Triples",id:"Core-Concepts/Primitive-Fundamentals/Triples",title:"Triples",description:"13b450d37d0680fca4d8d41efdf8cabc}",source:"@site/docs/Core-Concepts/Primitive-Fundamentals/Triples.md",sourceDirName:"Core-Concepts/Primitive-Fundamentals",slug:"/136450d3-7d06-80db-b0e4-ce33963cdeb5",permalink:"/136450d3-7d06-80db-b0e4-ce33963cdeb5",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Triples",sidebar_position:1,slug:"/136450d3-7d06-80db-b0e4-ce33963cdeb5"},sidebar:"tutorialSidebar",previous:{title:"Atoms",permalink:"/136450d3-7d06-80f6-8f6c-d7fccdf5d877"},next:{title:"Signal",permalink:"/136450d3-7d06-80e2-b4ff-fe8d6417e5d2"}},c={},d=[{value:"Fractal Data Representations",id:"13b450d37d0680a4beedf00125f33469",level:2},{value:"Triple Ownership and Token Curated Registries",id:"13b450d37d06808f897cce9b7176aae5",level:2}],l={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"13b450d37d0680fca4d8d41efdf8cabc"},"Triples"),(0,i.kt)("p",null,"With discrete units of data established through Atoms, defining relationships between these units to form higher-order structures is essential. Intuition achieves this by employing Semantic Triples, ensuring a uniform and discrete structure that can be prescribed a decentralized identifier and have some associated agent-centric state. This structure is essential for achieving consensus on arbitrarily sophisticated and expressive forms of data."),(0,i.kt)("p",null,"Triples consist of three elements: Subject, Predicate, and Object, with each element represented as an Atom. This Subject-Predicate Object format allows users to clearly and explicitly define relationships between Atoms. These connections can be visualized as a graph where each node and edge is an Atom."),(0,i.kt)("p",null,"For example, a Triple may have the structure:\n\u2022 Subject: \u201cBob\u201d\n\u2022 Predicate: \u201cage\u201d\n\u2022 Object: \u201c34\u201d"),(0,i.kt)("p",null,"In this example, each component\u2014Subject, Predicate, and Object is an Atom, and the Triple expresses a specific relationship between these Atoms."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(5991).Z,width:"1779",height:"468"})),(0,i.kt)("h2",{id:"13b450d37d0680a4beedf00125f33469"},"Fractal Data Representations"),(0,i.kt)("p",null,"Triples offer a flexible yet structured method for representing data relationships. By allowing Triples to act as Atoms within other Triples, Intuition facilitates the expression, storage, and usage of arbitrarily complex data models that can scale and evolve over time. This flexibility is crucial for capturing intricate relationships and dynamics within data, enabling users to construct sophisticated applications and services on the Intuition framework. This approach maintains discrete, referenceable units for data at every layer of the structure, ensuring scalability and precision in data representation."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(3782).Z,width:"1720",height:"588"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(4505).Z,width:"2098",height:"826"})),(0,i.kt)("h2",{id:"13b450d37d06808f897cce9b7176aae5"},"Triple Ownership and Token Curated Registries"),(0,i.kt)("p",null,"Akin to the process outlined for Atoms, the structure of Triples allows users to gain fractional ownership of Triples through interaction. Each interaction generates interaction fees, which are distributed to the owners of each respective Triple, creating an incentivized Token Curated Registry (TCR) for data structures. The TCR encourages system participants to adopt common ways of structuring data by offering economic rewards. This approach promotes an organic, incentive-driven structuring of data, contrasting with more rigid and traditional methods such as standards committees, which often struggle to achieve effective standardization."))}p.isMDXComponent=!0},4505:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/136450d3-7d06-80db-b0e4-ce33963cdeb5.13d450d3-7d06-8015-bfce-f1d0aa216739-ca0694420a27a333dc1a4401e9ce56e2.png"},5991:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/136450d3-7d06-80db-b0e4-ce33963cdeb5.13d450d3-7d06-80a7-88c8-e3b5068d3f4e-370547f6d71d8b502b9f2417f02fb361.png"},3782:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/136450d3-7d06-80db-b0e4-ce33963cdeb5.13d450d3-7d06-80d0-abbb-de1e90056c8a-272ad118728866a6355642a6b1bf7a8f.png"}}]);