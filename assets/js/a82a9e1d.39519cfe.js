"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[759],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>u});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(i),u=a,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return i?n.createElement(f,o(o({ref:t},d),{},{components:i})):n.createElement(f,o({ref:t},d))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},1398:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=i(7462),a=(i(7294),i(3905));const r={title:"State Interpretations",sidebar_position:4,slug:"/13b450d3-7d06-80d5-8ffe-f3841ac77ced"},o="State Interpretations",s={unversionedId:"Core-Concepts/Primitive-Fundamentals/State-Interpretations",id:"Core-Concepts/Primitive-Fundamentals/State-Interpretations",title:"State Interpretations",description:"13b450d37d06803f885aff44bf173f60}",source:"@site/docs/Core-Concepts/Primitive-Fundamentals/State-Interpretations.md",sourceDirName:"Core-Concepts/Primitive-Fundamentals",slug:"/13b450d3-7d06-80d5-8ffe-f3841ac77ced",permalink:"/13b450d3-7d06-80d5-8ffe-f3841ac77ced",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"State Interpretations",sidebar_position:4,slug:"/13b450d3-7d06-80d5-8ffe-f3841ac77ced"},sidebar:"tutorialSidebar",previous:{title:"Fees & Rewards",permalink:"/136450d3-7d06-8094-a107-d73d5ec35325"},next:{title:"Intuition in Practice",permalink:"/13b450d3-7d06-80de-8848-e83f63ba851c"}},l={},c=[{value:"Literal interpretations",id:"13b450d37d0680209a01edcd86dec61f",level:2},{value:"Algorithms",id:"13b450d37d0680f78a4ddbb3c124d734",level:2},{value:"Reality Tunnels",id:"13b450d37d0680e59b24e372ecc56f11",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"13b450d37d06803f885aff44bf173f60"},"State Interpretations"),(0,a.kt)("p",null,"By implementing the aforementioned mechanisms, we achieve a state that can be interpreted in an almost limitless number of ways. Intuition deliberately avoids enforcing any specific interpretation of the data, aligning with its core principle of avoiding \u201ctruth lock-in\u201d or the imposition of a singular perspective. The Intuition Protocol is designed to remain completely neutral regarding the interpretation of state and signal."),(0,a.kt)("p",null,"Nevertheless, it is crucial to discuss the topic of interpretation within the Intuition system to provide an initial understanding of the various methods and perspectives that users might explore when analyzing the system\u2019s state."),(0,a.kt)("h2",{id:"13b450d37d0680209a01edcd86dec61f"},"Literal interpretations"),(0,a.kt)("p",null,"In the Intuition ecosystem, literal interpretations are explicit, structured expressions designed to facilitate coordinated, higher-order applications of its discrete state. These interpretations provide a foundation for a cohesive and interoperable framework, enabling various stakeholders to understand and utilize the system\u2019s data explicitly. By achieving consensus on how specific concepts should be expressed and interpreted, the ecosystem can develop a composable system of expression and logic, similar to programming languages."),(0,a.kt)("p",null,"For instance, consider implementing an access control mechanism using the Intuition state. An implementor might use a specific Atom, defined as \u201chas access to,\u201d as the Predicate in a Triple structure. The literal interpretation might state: if ","[Company\u2019s Multisig]"," attests to this Triple being True, this signifies that the Subject of the Triple has access to the Object\u2014in this case, System X. This state can be used by the implementor to provision access to users of System X.\nBy publishing this literal interpretation, the implementor allows others to observe and utilize this interpretation for various purposes. "),(0,a.kt)("p",null,"For example, another system might use this information to grant User A access to System Y based on their access to System X, to adjust their loan-to-value ratio in a financial application, or to affect their reputation in a particular context."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(5090).Z,width:"936",height:"532"})),(0,a.kt)("p",null,"The Intuition system facilitates the publication process of these literal interpretations, allowing stakeholders to register and share their interpretations as Atoms and/or Triples. By doing so, the system can be used recursively to create a registry of literal interpretations that promotes transparency and coordination. This registry enables the creation of programmatic languages on top of the Intuition protocol, leveraging the principles of discrete objects and their relationships to enforce logic and code."),(0,a.kt)("h2",{id:"13b450d37d0680f78a4ddbb3c124d734"},"Algorithms"),(0,a.kt)("p",null,"In the Intuition framework, algorithms function as tools to filter and interpret data, distinct from literal interpretations which resolve to deterministic logic. Given a permissionless environment where anyone can claim anything about anything, algorithms play a crucial role, enabling signal to be effectively distilled from the noise and allowing users to focus on the voices they trust."),(0,a.kt)("p",null,"Intuition rejects the idea of \u2018truth lock-in,\u2019 acknowledging that no single algorithm can be universally optimal. In response, Intuition promotes a diverse and permissionless ecosystem of algorithms that users and developers can select based on their specific requirements. This empowers users and developers to create,\nchoose, and apply the most appropriate algorithms for their particular contexts. Such flexibility ensures that data filtering and interpretation can be customized to meet varied needs, thereby enhancing the overall utility and effectiveness of the Intuition framework."),(0,a.kt)("p",null,"This approach contrasts sharply with the current internet landscape, where platform interactions often necessitate accepting a pre-set, opaque algorithm. Intuition envisions decoupling algorithms from applications, allowing individuals to use their preferred algorithms across different platforms - a flexibility made possible through interoperable and composable data."),(0,a.kt)("p",null,"For instance, consider an algorithm that weights and filters data based on social graphs. In this model, a user who is one degree of separation away from the observer might have their signal weighted at 100%; at two degrees away, at 80%; and at three degrees away, at 60%. This allows for nuanced data interpretation based on social proximity."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(7589).Z,width:"1576",height:"668"})),(0,a.kt)("h2",{id:"13b450d37d0680e59b24e372ecc56f11"},"Reality Tunnels"),(0,a.kt)("p",null,"By decoupling each element of the data filtering process, we unlock the potential to recombine these elements in novel and innovative ways. Within the Intuition framework, these combinations are known as \u201cReality Tunnels.\u201d A Reality Tunnel typically includes a mix of literal interpretations and algorithms, but it can also incorporate other relevant components essential for data filtering, weighting, and sense-making."),(0,a.kt)("p",null,"To illustrate, consider the creation of a \u2018Trust Graph\u2019 using specific Triple structures. For instance, a Triple might be formatted as \u2018","[Subject][in trust graph]"," ","[Vitalik\u2019s Web3 Trust Graph]",".\u2019 This Trust Graph could assign different users different weights, explicitly signaled by a particular curator, to facilitate the weighting and filtering of data. When this Trust Graph is combined with an algorithm such as EigenTrust, it can be applied to a relevant context\u2014like a portion of the knowledge graph pertaining to Web3 topics. "),(0,a.kt)("p",null,"This integrated viewpoint or \u201clens\u201d is referred to as a Reality Tunnel.\nThe concept of Reality Tunnels also allows users to switch between different perspectives. Imagine engaging in a debate and having the ability to view the data from your opponent\u2019s perspective to understand their reasoning. Currently, most platforms restrict users to a single \u201creality tunnel,\u201d shaped by their social graph and a specific platform\u2019s algorithm. However, if users could toggle between different social graphs and apply various open-source algorithms, they would gain access to diverse viewpoints and a more comprehensive understanding of the data and the world around them. This flexibility would enrich user experience by providing multiple angles on the same information, fostering better-informed discussions and decisions."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(1070).Z,width:"1184",height:"1190"})))}p.isMDXComponent=!0},1070:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/13b450d3-7d06-80d5-8ffe-f3841ac77ced.13d450d3-7d06-8047-acc4-d6f1bce71187-9f151cc0a2ff39735582639365f2d29d.png"},7589:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/13b450d3-7d06-80d5-8ffe-f3841ac77ced.13d450d3-7d06-80b5-b40a-eb3d99ba7fd5-0353e2b159a271915e559f37c4f17d72.png"},5090:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/13b450d3-7d06-80d5-8ffe-f3841ac77ced.13d450d3-7d06-80d0-9820-c4f622628d2f-5a86f8568dc851d6a11d92637a4d3c2f.png"}}]);