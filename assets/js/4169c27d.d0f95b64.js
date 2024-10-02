"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[301],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=p(r),d=a,b=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(b,o(o({ref:e},u),{},{components:r})):n.createElement(b,o({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3739:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"Triple Interactions",sidebar_position:2,slug:"/triples"},o=void 0,s={unversionedId:"Core-Concepts/triples",id:"Core-Concepts/triples",title:"Triple Interactions",description:"What Are Claims?",source:"@site/docs/Core-Concepts/triples.md",sourceDirName:"Core-Concepts",slug:"/triples",permalink:"/published-docs/triples",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Triple Interactions",sidebar_position:2,slug:"/triples"},sidebar:"defaultSidebar",previous:{title:"Atom Interactions",permalink:"/published-docs/atoms"},next:{title:"Capturing Signal",permalink:"/published-docs/signal"}},l={},p=[],u={toc:p};function c(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What Are Claims?")),(0,a.kt)("p",null,"Claims are formulated as ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Semantic_triple"},"semantic triples"),", a universal format enabling the construction of complex statements from fundamental elements. ",(0,a.kt)("strong",{parentName:"p"},"Identities")," can be strung together to create ",(0,a.kt)("strong",{parentName:"p"},"Claims")," that articulate assertions about any entity and relationship imaginable."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Claim Structure")),(0,a.kt)("p",null,"At the core of each Claim are three components: a ",(0,a.kt)("strong",{parentName:"p"},"Subject"),", a ",(0,a.kt)("strong",{parentName:"p"},"Predicate"),", and an ",(0,a.kt)("strong",{parentName:"p"},"Object")," \u2014 each being an ",(0,a.kt)("strong",{parentName:"p"},"Identity")," in its own right. This structure facilitates the expression of relationships and attributes in a clear, verifiable, and structured manner."),(0,a.kt)("p",null,"Let's look at some examples of different types of Claims about a Subject ",(0,a.kt)("strong",{parentName:"p"},"Bob"),":"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bob")," ","[Subject]"," - ",(0,a.kt)("strong",{parentName:"p"},"won")," ","[Predicate]"," - ",(0,a.kt)("strong",{parentName:"p"},"ETHGlobal")," ","[Object]","This Claim asserts that Bob has won ETHGlobal."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Bob")," ","[Subject]"," - ",(0,a.kt)("strong",{parentName:"p"},"won")," ","[Predicate]"," - ",(0,a.kt)("strong",{parentName:"p"},"ETHGlobal")," ","[Object]"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"This Claim asserts that Bob has won ETHGlobal.\n\n- \n\n    This Claim asserts that Bob has won ETHGlobal.\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This Claim asserts that Bob has won ETHGlobal.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bob")," ","[Subject]"," - ",(0,a.kt)("strong",{parentName:"p"},"member of")," ","[Predicate]"," - ",(0,a.kt)("strong",{parentName:"p"},"BuidlGuidl")," ","[Object]","This Claim asserts that Bob is identified as a member of BuidlGuidl."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Bob")," ","[Subject]"," - ",(0,a.kt)("strong",{parentName:"p"},"member of")," ","[Predicate]"," - ",(0,a.kt)("strong",{parentName:"p"},"BuidlGuidl")," ","[Object]"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"This Claim asserts that Bob is identified as a member of BuidlGuidl.\n\n- \n\n    This Claim asserts that Bob is identified as a member of BuidlGuidl.\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This Claim asserts that Bob is identified as a member of BuidlGuidl.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bob")," ","[Subject]"," - ",(0,a.kt)("strong",{parentName:"p"},"is")," ","[Predicate]"," - ",(0,a.kt)("strong",{parentName:"p"},"Trustworthy")," ","[Object]","This Claim describes a trait about Bob -- that he is Trustworthy."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Bob")," ","[Subject]"," - ",(0,a.kt)("strong",{parentName:"p"},"is")," ","[Predicate]"," - ",(0,a.kt)("strong",{parentName:"p"},"Trustworthy")," ","[Object]"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"This Claim describes a trait about Bob -- that he is Trustworthy.\n\n- \n\n    This Claim describes a trait about Bob -- that he is Trustworthy.\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This Claim describes a trait about Bob -- that he is Trustworthy.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bob")," ","[Subject]"," - ",(0,a.kt)("strong",{parentName:"p"},"likes")," ","[Predicate]"," - ",(0,a.kt)("strong",{parentName:"p"},"Intuition's Thread on Reputation")," ","[Object]","This Claim states Bob's preference for Intuition's thread on reputation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Bob")," ","[Subject]"," - ",(0,a.kt)("strong",{parentName:"p"},"likes")," ","[Predicate]"," - ",(0,a.kt)("strong",{parentName:"p"},"Intuition's Thread on Reputation")," ","[Object]"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"This Claim states Bob's preference for Intuition's thread on reputation.\n\n- \n\n    This Claim states Bob's preference for Intuition's thread on reputation.\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This Claim states Bob's preference for Intuition's thread on reputation.")),(0,a.kt)("p",null,"Through these varied examples, we see how Claims can describe different aspects of Bob's interactions, attributes, and preferences. Each part of these Claims \u2014 whether it be the Subject, Predicate, or Object \u2014 is an Identity demonstrating the interconnectedness of Identities and Claims in defining relationships and attributes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Structuring Knowledge With Claims")),(0,a.kt)("p",null,'Claims transform "unstructured" knowledge, opinions, and thoughts into a structured format. Uniquely identifiable through the keccak256 hash of their components, Claims also acquire an Ethereum address upon creation.'),(0,a.kt)("p",null,"By composing together Identities and Claims, we create a rich network that reflects our understanding of the world. This structured approach enables anyone to share insights, search for information, and make statements about the world around you. It is through this framework that your Intuition becomes a shared resource, allowing for building collective learning and discovery."))}c.isMDXComponent=!0}}]);