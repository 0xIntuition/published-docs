"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[9398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?i.createElement(m,s(s({ref:t},p),{},{components:n})):i.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={title:"State Interpretations",sidebar_position:4,slug:"/interpretations"},s="State Interpretations",o={unversionedId:"Core-Concepts/Primitive-Fundamentals/interpretations",id:"Core-Concepts/Primitive-Fundamentals/interpretations",title:"State Interpretations",description:"170450d37d068061b750c3e1800fdf6a}",source:"@site/docs/concepts/Core-Concepts/Primitive-Fundamentals/interpretations.md",sourceDirName:"Core-Concepts/Primitive-Fundamentals",slug:"/interpretations",permalink:"/interpretations",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"State Interpretations",sidebar_position:4,slug:"/interpretations"},sidebar:"contractsSidebar",previous:{title:"Fees & Rewards",permalink:"/fees"},next:{title:"Intuition in Practice",permalink:"/in-practice"}},l={},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"170450d37d068061b750c3e1800fdf6a"},"State Interpretations"),(0,r.kt)("p",null,"The Intuition system enables a state that can be interpreted in countless ways, intentionally avoiding the imposition of any single perspective. This design aligns with Intuition\u2019s principle of avoiding \u201ctruth lock-in\u201d by ensuring the protocol remains neutral regarding state and signal interpretations. While the system does not enforce specific interpretations, understanding various methods and perspectives for analyzing the system\u2019s state is critical for leveraging its full potential."),(0,r.kt)("h1",{id:"170450d37d06806785cdecfe593168a1"},"Literal Interpretations"),(0,r.kt)("p",null,"Literal interpretations within Intuition provide structured, explicit expressions of the state. These interpretations form the foundation for higher-order applications by defining clear and consistent frameworks for data usage. By achieving consensus on how concepts should be expressed and understood, the ecosystem fosters interoperability and composability, similar to programming languages."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example, an access control mechanism might use the state in the following way:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Triple is defined using the Predicate \u201chas access to,\u201d where the Subject is a user, and the Object is a resource (e.g., System X)."),(0,r.kt)("li",{parentName:"ul"},"The literal interpretation states: If ","[Company\u2019s Multisig]"," attests to the Triple being True, the Subject of the Triple has access to the Object.")),(0,r.kt)("p",null,"This structured interpretation allows implementers to provision access programmatically. For instance, if System Y references the same data, it could use this interpretation to grant access to User A based on their access to System X. Similarly, this state could influence unrelated systems, such as adjusting loan-to-value ratios in financial applications or modifying reputational scores in specific contexts."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1796).Z,width:"936",height:"532"})),(0,r.kt)("p",null,"By registering and sharing these interpretations as Atoms or Triples, the Intuition system creates a registry of literal interpretations. This recursive system enhances transparency, coordination, and innovation, enabling the development of programmatic languages that leverage the principles of discrete objects and their relationships."),(0,r.kt)("h1",{id:"170450d37d068020ab40fddf6334a190"},"Algorithms"),(0,r.kt)("p",null,"Algorithms in the Intuition framework serve as tools for filtering and interpreting data, providing flexibility beyond deterministic logic. In a permissionless environment where anyone can make claims about anything, algorithms are essential for extracting meaningful signal from the noise. They allow users to focus on trusted voices and contexts."),(0,r.kt)("p",null,"Intuition\u2019s ecosystem rejects \u201ctruth lock-in,\u201d recognizing that no single algorithm suits all needs. Instead, it promotes a diverse marketplace of algorithms, empowering users and developers to choose or create solutions tailored to specific contexts. This decoupling of algorithms from applications allows for greater customization and interoperability, contrasting sharply with traditional platforms that enforce opaque, pre-set algorithms."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5488).Z,width:"1576",height:"668"})),(0,r.kt)("p",null,"For instance, consider an algorithm that filters data based on a user\u2019s social graph:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Signals from users one degree of separation away are weighted at 100%."),(0,r.kt)("li",{parentName:"ul"},"Signals at two degrees are weighted at 80%."),(0,r.kt)("li",{parentName:"ul"},"Signals at three degrees are weighted at 60%.")),(0,r.kt)("p",null,"This algorithm provides a nuanced interpretation of data based on proximity, allowing for trust-based filtering that aligns with user preferences."),(0,r.kt)("h1",{id:"170450d37d0680948116c12173271980"},"Reality Tunnels"),(0,r.kt)("p",null,"The modular nature of Intuition\u2019s data interpretation mechanisms enables the creation of \u201cReality Tunnels.\u201d A Reality Tunnel combines literal interpretations, algorithms, and other relevant components to provide a tailored perspective on data. This modularity allows users to recombine elements in innovative ways, crafting unique viewpoints for specific contexts."),(0,r.kt)("p",null,"For example, a Trust Graph could be created using a Triple structure like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[Subject] [in trust graph] [Vitalik\u2019s Web3 Trust Graph]"))),(0,r.kt)("p",null,"A curator might assign weights to users in this Trust Graph to facilitate filtering and weighting. When combined with an algorithm such as EigenTrust, the Trust Graph could focus on a specific knowledge domain, such as Web3 topics. This integrated perspective becomes a Reality Tunnel, offering a customized lens through which users can view and interpret data."),(0,r.kt)("p",null,"Reality Tunnels also enable users to switch between perspectives. For instance, during a debate, a user could toggle to their opponent\u2019s Reality Tunnel to better understand their reasoning. This flexibility contrasts with traditional platforms, where users are often restricted to a single perspective defined by a specific algorithm and social graph. By allowing users to explore multiple Reality Tunnels, Intuition fosters a richer, more comprehensive understanding of data and encourages well-informed decision-making."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1296).Z,width:"1184",height:"1190"})),(0,r.kt)("h1",{id:"170450d37d06806488aee6af852df7ca"},"Enhancing Perspectives and Collaboration"),(0,r.kt)("p",null,"The flexibility to create and toggle between Reality Tunnels transforms how users interact with data. By integrating literal interpretations, customizable algorithms, and composable data structures, Intuition empowers users to access diverse perspectives and foster collaboration. This approach enriches discussions, improves decision-making, and ensures the ecosystem remains adaptable and inclusive for all participants."))}d.isMDXComponent=!0},1296:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/interpretations.13d450d3-7d06-8047-acc4-d6f1bce71187-9f151cc0a2ff39735582639365f2d29d.png"},5488:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/interpretations.13d450d3-7d06-80b5-b40a-eb3d99ba7fd5-0353e2b159a271915e559f37c4f17d72.png"},1796:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/interpretations.13d450d3-7d06-80d0-9820-c4f622628d2f-5a86f8568dc851d6a11d92637a4d3c2f.png"}}]);