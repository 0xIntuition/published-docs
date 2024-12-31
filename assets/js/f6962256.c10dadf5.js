"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[8046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6104:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"Triples",sidebar_position:1,slug:"/triples"},l=void 0,o={unversionedId:"Core-Building-Blocks/triples",id:"Core-Building-Blocks/triples",title:"Triples",description:"Triples Overview",source:"@site/docs/contracts/Core-Building-Blocks/triples.md",sourceDirName:"Core-Building-Blocks",slug:"/triples",permalink:"/contracts/triples",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Triples",sidebar_position:1,slug:"/triples"},sidebar:"contractsSidebar",previous:{title:"Atoms",permalink:"/contracts/atoms"},next:{title:"Vaults",permalink:"/contracts/vaults"}},s={},p=[{value:"Triples Overview",id:"16d450d37d068006a22afab0c9e41ce2",level:2},{value:"Example: Basic Triple",id:"16d450d37d0680e08704f1b0cbe9fa2f",level:2},{value:"Example: Nested Triple",id:"16d450d37d06800297c2c6204297e453",level:2},{value:"Counter Triples",id:"16d450d37d068033ae1ed21ac6f7c518",level:2},{value:"Key Benefits of Triples",id:"16d450d37d068026b14dcacd493425f0",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"16d450d37d068006a22afab0c9e41ce2"},"Triples Overview"),(0,a.kt)("p",null,"Triples are data structures used to define relationships or assertions between three entities. They follow the format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"**Subject** - **Predicate** - **Object**\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example Term IDs:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Atom: ",(0,a.kt)("inlineCode",{parentName:"li"},"Bob")),(0,a.kt)("li",{parentName:"ul"},"Triple: ",(0,a.kt)("inlineCode",{parentName:"li"},"Bob Is Friend")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Vaults"),": Triples, like Atoms, contain multiple Vaults, each associated with specific Bonding Curves."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Components"),": Instead of a URI (used in Atoms), Triples are composed of three Term IDs.")),(0,a.kt)("h2",{id:"16d450d37d0680e08704f1b0cbe9fa2f"},"Example: Basic Triple"),(0,a.kt)("p",null,"The simplest Triple uses three Atom IDs to define a relationship. For instance:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Subject"),(0,a.kt)("th",{parentName:"tr",align:null},"Predicate"),(0,a.kt)("th",{parentName:"tr",align:null},"Object"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bob ","[32]"),(0,a.kt)("td",{parentName:"tr",align:null},"Is ","[4]"),(0,a.kt)("td",{parentName:"tr",align:null},"Friend ","[409]")))),(0,a.kt)("p",null,"This Triple could have an ID, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"1,010,321"),"."),(0,a.kt)("h2",{id:"16d450d37d06800297c2c6204297e453"},"Example: Nested Triple"),(0,a.kt)("p",null,"Triples can also express more complex relationships by nesting other Triples. For example:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Subject"),(0,a.kt)("th",{parentName:"tr",align:null},"Predicate"),(0,a.kt)("th",{parentName:"tr",align:null},"Object"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Alice ","[8,407]"),(0,a.kt)("td",{parentName:"tr",align:null},"Disproves ","[19]"),(0,a.kt)("td",{parentName:"tr",align:null},"Bob Is Friend ","[1,010,321]")))),(0,a.kt)("p",null,"This nested Triple maintains a structured record of relationships, enabling the refinement of truth over time."),(0,a.kt)("h2",{id:"16d450d37d068033ae1ed21ac6f7c518"},"Counter Triples"),(0,a.kt)("p",null,'Unlike Atoms, which represent singular entities (e.g., "Bob"), Triples can have negations. For example:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Positive Triple"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Bob Is Friend")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Counter Triple"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Not Bob Is Friend"))),(0,a.kt)("p",null,"Counter Triples help organize conflicting signals by associating negative information directly with its corresponding positive counterpart. This keeps the system consistent and improves signal clarity."),(0,a.kt)("h2",{id:"16d450d37d068026b14dcacd493425f0"},"Key Benefits of Triples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Flexibility"),": Triples allow for relationships between Atoms and nested relationships using other Triples."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Extensibility"),": The structure enables the addition of new information over time to refine data accuracy."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Organization"),": By associating positive and negative signals, Triples ensure the system remains logically coherent.")),(0,a.kt)("p",null,"This design supports the evolving needs of the Intuition platform while facilitating logical reasoning and robust data management."))}d.isMDXComponent=!0}}]);