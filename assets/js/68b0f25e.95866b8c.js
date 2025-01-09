"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[4896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"Fees & Rewards",sidebar_position:3,slug:"/fees"},s="Fees & Rewards",o={unversionedId:"Core-Concepts/Primitive-Fundamentals/fees",id:"Core-Concepts/Primitive-Fundamentals/fees",title:"Fees & Rewards",description:"13b450d37d068046a520d59ec017c6b2}",source:"@site/docs/concepts/Core-Concepts/Primitive-Fundamentals/fees.md",sourceDirName:"Core-Concepts/Primitive-Fundamentals",slug:"/fees",permalink:"/fees",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Fees & Rewards",sidebar_position:3,slug:"/fees"},sidebar:"contractsSidebar",previous:{title:"Signal",permalink:"/primitives-signal"},next:{title:"State Interpretations",permalink:"/interpretations"}},l={},c=[{value:"Purpose of Fees in Intuition",id:"170450d37d06804d8aa3ffe3eb6681ee",level:2},{value:"Preventing Abuse and Attacks",id:"170450d37d068045a896e6fc233f3646",level:3},{value:"Encouraging Active Participation",id:"170450d37d068013a62eec46d9e0c69f",level:3},{value:"Promoting High-Quality Data",id:"170450d37d0680968701f82a83d1488a",level:3},{value:"Establishing Standards Through Incentives",id:"170450d37d06809cac86e38a2f690d2c",level:3},{value:"Fee Allocation in Intuition",id:"170450d37d068025b35cf050c589e0db",level:2},{value:"Incentivizing Fractal Data Structures",id:"170450d37d0680ccba1bd4dc809ad1ec",level:3},{value:"Aligning Incentives with Data Structures",id:"170450d37d0680be9840da35d10bedc7",level:3},{value:"Promoting a Self-Regulating Ecosystem",id:"170450d37d0680dbb043e66698c69f9a",level:3}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"13b450d37d068046a520d59ec017c6b2"},"Fees & Rewards"),(0,i.kt)("p",null,"In the Intuition system, interactions incur a fee similar to the gas costs in blockchain transactions. These fees serve critical roles in maintaining the system's integrity, incentivizing meaningful contributions, and fostering the creation of high-quality, structured data."),(0,i.kt)("h2",{id:"170450d37d06804d8aa3ffe3eb6681ee"},"Purpose of Fees in Intuition"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"170450d37d068045a896e6fc233f3646"},"Preventing Abuse and Attacks"),(0,i.kt)("p",null,"Decentralized and permissionless systems face risks such as Sybil and denial-of-service (DoS) attacks. Intuition mitigates these risks through an economic model that introduces fees for data creation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Disincentive Against Abuse"),": Fees deter malicious activity by imposing a cost on system misuse."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Network Resilience"),": Any attacks inadvertently benefit the system, as fees are still paid, much like Ethereum benefits from transaction fees, even in non-productive use cases."),(0,i.kt)("p",null,"This mechanism ensures the ecosystem remains robust and sustainable, even in the face of potential misuse."),(0,i.kt)("h3",{id:"170450d37d068013a62eec46d9e0c69f"},"Encouraging Active Participation"),(0,i.kt)("p",null,"Merely providing infrastructure for generating verifiable data is insufficient to motivate meaningful contributions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Historical Challenges"),": Platforms like Amazon, Yelp, and Wikipedia in Web2 face similar participation issues, where most users refrain from contributing reviews or endorsements."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Economic Incentives"),": Intuition mirrors the blockchain model of block rewards, providing tangible incentives to encourage users to create coherent and valuable data."),(0,i.kt)("h3",{id:"170450d37d0680968701f82a83d1488a"},"Promoting High-Quality Data"),(0,i.kt)("p",null,"The global proliferation of data has led to an overwhelming amount of low-quality, redundant, or irrelevant information."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Quality Over Quantity"),": Intuition shifts the focus from producing more data to generating reliable, actionable insights."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Economic Mechanisms"),": Fees discourage the creation of irrelevant data while rewarding high-quality contributions."),(0,i.kt)("p",null,'By implementing this model, contributors are incentivized to create data that meets standards of relevance and accuracy, reducing the prevalence of "junk data."'),(0,i.kt)("h3",{id:"170450d37d06809cac86e38a2f690d2c"},"Establishing Standards Through Incentives"),(0,i.kt)("p",null,'Creating standards in data structures and schemas has traditionally been challenging, often described as "standards hell."'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Expanding Blockchain Principles"),": Intuition applies the concept of financial rewards for distributed consensus\u2014proven in blockchain ecosystems\u2014to social consensus and global coordination."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use Cases"),": These principles extend to data structures, schemas, formats, and canonical identifiers."),(0,i.kt)("h2",{id:"170450d37d068025b35cf050c589e0db"},"Fee Allocation in Intuition"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Intuition allocates fees in two key ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Granting Ownership in Data")),(0,i.kt)("p",{parentName:"li"},"A portion of the fee grants users ownership of the data they interact with, promoting responsibility and meaningful engagement.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Rewarding Data Owners")),(0,i.kt)("p",{parentName:"li"},"Another portion is distributed to existing data owners, incentivizing the creation and maintenance of valuable data."))),(0,i.kt)("h3",{id:"170450d37d0680ccba1bd4dc809ad1ec"},"Incentivizing Fractal Data Structures"),(0,i.kt)("p",null,"Intuition's data model\u2014built on Atoms, Triples, and Signal\u2014allows for programmatic value distribution throughout the system. Consider a user who wishes to create a new data entry stating that they like a YouTube video. The user must pay a fee to create this data which rewards previous owners of related data. If the user wishes to obtain ownership in the statement, they must make an initial deposit. "),(0,i.kt)("p",null,"Other users who agree with this statement can also deposit to signal their agreement, which pays existing depositors on the Triple and underlying Atoms and increases the share price of the Triple. In other words, future depositors reinforce the validity and increase the value of the underlying data. This process helps to ensure that only high-quality, relevant data remains prominent, as users are financially incentivized to support accurate and meaningful information."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2441).Z,width:"4930",height:"2382"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creating Data"),": A user pays a fee to state they like a YouTube video.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Triple creation fee rewards prior owners of related data."),(0,i.kt)("li",{parentName:"ul"},"The initial deposit grants ownership of the statement."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reinforcing Data"),": Other users can also stake on the Triple to explicitly agree with the statement, reinforcing its validity and increasing its value.")),(0,i.kt)("p",null,"This model ensures high-quality, relevant data remains prominent while incentivizing accuracy and meaningful contributions."),(0,i.kt)("h3",{id:"170450d37d0680be9840da35d10bedc7"},"Aligning Incentives with Data Structures"),(0,i.kt)("p",null,"Intuition's economic model motivates users to interact with data they believe will gain engagement. The explicit structure of data encourages users to converge on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Entities and Concepts"),": Consensus on key data points."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Effective References"),": Agreement on the best ways to describe and structure data.")),(0,i.kt)("p",null,"This drives fractal consensus, ensuring scalability from individual Atoms to complex nested Triples."),(0,i.kt)("h3",{id:"170450d37d0680dbb043e66698c69f9a"},"Promoting a Self-Regulating Ecosystem"),(0,i.kt)("p",null,"By integrating economic incentives, Intuition creates a self-regulating system that achieves:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"System Security"),": Fees deter attacks and ensure robustness."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Meaningful Contributions"),": Rewards motivate high-quality data creation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Structured Consensus"),": Users are incentivized to align on effective data representations.")),(0,i.kt)("p",null,"By integrating these economic principles, Intuition not only secures the system against malicious attacks but also promotes a healthy, self-regulating ecosystem where users are rewarded for their contributions to the integrity and value of the data."))}u.isMDXComponent=!0},2441:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fees.13d450d3-7d06-8052-b5a5-e79a03411745-9f26ad8b524c1855f22a479e891d9856.png"}}]);