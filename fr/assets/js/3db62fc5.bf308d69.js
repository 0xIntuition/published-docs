"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[5992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={title:"Triple Structuring",sidebar_position:1,slug:"/triple-structuring"},o="Triple Structuring",s={unversionedId:"Core-Concepts/Using-the-Primitives/triple-structuring",id:"Core-Concepts/Using-the-Primitives/triple-structuring",title:"Triple Structuring",description:"13b450d37d068015a41de64ba6d1a17b}",source:"@site/docs/concepts/Core-Concepts/Using-the-Primitives/triple-structuring.md",sourceDirName:"Core-Concepts/Using-the-Primitives",slug:"/triple-structuring",permalink:"/fr/triple-structuring",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Triple Structuring",sidebar_position:1,slug:"/triple-structuring"},sidebar:"contractsSidebar",previous:{title:"Atom Structuring",permalink:"/fr/atom-structuring"},next:{title:"Capturing Signal",permalink:"/fr/capturing-signal"}},l={},c=[{value:"Atom and Triple Structuring Recommendations",id:"13b450d37d0680b5ad0df7708aeb56ac",level:2},{value:"Promoting Flatness for Scalability: Understanding the Power Set Problem",id:"13b450d37d068096a43cdf6c0e149e15",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"13b450d37d068015a41de64ba6d1a17b"},"Triple Structuring"),(0,r.kt)("p",null,"Proper structuring of Triples is fundamental to the efficacy of the Intuition system. Well-constructed Triples enable data to be easily indexed, queried, and discovered, enhancing the overall utility and accessibility of the system. Triple structuring primarily involves the standardized ordering of elements and the selection of appropriate Predicates."),(0,r.kt)("p",null,"Consider the scenario in which a user wishes to add a Book to a Book List. While there are numerous ways to express this relationship, let us examine two semantically correct approaches:"),(0,r.kt)("p",null,"[Book][inList]"," ","[Book List]"),(0,r.kt)("p",null,"[Book List][hasEntry]"," ","[Book]"),(0,r.kt)("p",null,"In this example, the community may eventually converge on one standard expression over the other. Initial fragmentation within the Intuition system is anticipated as users experiment with various methods of expression. However, over time, consensus on preferred structures is likely to emerge."),(0,r.kt)("p",null,"The economic incentives embedded within the system play a crucial role in fostering this consensus. Users are rewarded for adopting Triple structures they believe will gain widespread acceptance, thereby aligning individual actions with the collective interest of the community. This incentivization mechanism ensures that the most effective and coherent Triple structures rise to prominence, facilitating a more organized and efficient data ecosystem."),(0,r.kt)("h2",{id:""}),(0,r.kt)("p",null,"A Token Curated Registry of Triples {#13b450d37d0680f191cce828a8457807}"),(0,r.kt)("p",null,"With these mechanics in place, Intuition creates a global, permissionless, decentralized TCR of structured data, capable of expressing any arbitrary concept. In stark juxtaposition to the data structuring paradigm of the present, which oftentimes involves significant \u2018human\u2019 friction, the Intuition system provides guardrails for organic convergence on consensus data structures. With this, a self-sustaining system for the continual optimization of data structures is established, as users continually compete to structure semantic data in increasingly complex and expressive ways."),(0,r.kt)("h2",{id:"13b450d37d0680b5ad0df7708aeb56ac"},"Atom and Triple Structuring Recommendations"),(0,r.kt)("p",null,"The semantic integrity of the Intuition system relies heavily on the community\u2019s adherence to proper structuring practices. To encourage this adherence, Intuition incorporates incentive mechanisms designed to promote best practices. However, these incentives alone are insufficient without the community\u2019s understanding of what constitutes \u2018best practices.\u2019 In the nascent stages of Intuition, there is a heightened risk of the ecosystem generating suboptimal data due to a lack of structured guidance. Therefore, it is crucial to disseminate knowledge about proper structuring practices to ensure the creation of high-quality, semantically robust data, thereby safeguarding the system\u2019s overall efficacy and integrity."),(0,r.kt)("h2",{id:"13b450d37d068096a43cdf6c0e149e15"},"Promoting Flatness for Scalability: Understanding the Power Set Problem"),(0,r.kt)("p",null,"Although any concept, including arbitrarily higher-order and composite concepts, can be represented by an Atom, the Intuition system favors a \u201cflat\u201d data structure. This means that higher-order data structures should be composed through Triples wherever possible, rather than deeply nested Atoms. This approach minimizes the risk of data fragmentation and promotes a more coherent and easily navigable data structure."),(0,r.kt)("p",null,"To understand the reasoning behind this and its importance, we can examine the Power Set Problem and its applicability to data.\nThe power set of a set S is the set of all subsets of S, including the empty set and S itself. If S has n elements, the power set of S will have 2 n elements. Extrapolating this out to data, any expression can have this number of permeatations, when viewing each discrete piece of data as an element of S. This exponential growth illustrates the complexity that arises when dealing with numerous combinations in data structures."),(0,r.kt)("p",null,"The equation for the power set is often written as:"),(0,r.kt)("p",null,"$$\nP(S) = ","{"," A \\mid A \\subseteq S ","}"),(0,r.kt)("p",null,"$$"),(0,r.kt)("p",null,"Here, P(S) denotes the power set of S, and A represents all possible subsets of S."),(0,r.kt)("p",null,"For example, if S = {1, 2, 3}:"),(0,r.kt)("p",null,"\u2022 The subsets are: {}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}\n\u2022 The power set P(S) is {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}"),(0,r.kt)("p",null,"Consider a verifiable credential with a schema \u2018Profile\u2019 containing 25 fields, such as \u2018Name\u2019 and \u2018Age\u2019. The number of possible field combinations is , resulting in 33,554,432 potential schemas. If we further take into account the permutations of each of those fields such as \u2018firstName\u2019 and \u2018lastName\u2019 versus \u2018FullName\u2019\u2014the complexity grows exponentially. This exponential growth is a fundamental reason why the world\u2019s data is often irreconcilable, leading to significant annual expenditure of time, energy, and resources on data reconciliation efforts."),(0,r.kt)("h2",{id:"-1"}),(0,r.kt)("p",null,"Implementing Flatness in Data Structuring {#13b450d37d068084a2b1df6f6ccfdc3c}"),(0,r.kt)("p",null,"Intuition addresses these challenges by incentivizing \u2018flatness\u2019 in data structuring. Users are encouraged to create the most minimal and efficient schemas possible. This incentive is driven by the understanding that the profitability of data expressions in Intuition is directly proportional to the level of interaction they generate. Therefore, it becomes economically optimal to develop and utilize small, discrete, and reusable pieces of data, which can then be semantically composed in a manner that maximizes their reusability."),(0,r.kt)("p",null,"For instance, consider the process of attaching fields to an object and then associating that object with a subject. Suppose we have a subject \u201cAuthor\u201d and we want to attach information about a \u201cBook\u201d written by this author. Instead of creating a complex, nested schema, we would break down the information into\nminimal, flat structures:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an object for the \u201cBook\u201d with discrete fields:\nBook ","[title][Book Title]","\nBook ","[publishedDate][Publication Date]"),(0,r.kt)("li",{parentName:"ol"},"Attach the \u201cBook\u201d object to the \u201cAuthor\u201d subject:\nAuthor ","[hasWritten][Book]")),(0,r.kt)("p",null,"By structuring data in this flat, modular manner, where each field of a schema is represented as a Semantic Triple, the Power Set Problem is solved for through a reduction of the number of possible permutations to a linear rather than exponential equation. This reduction significantly simplifies the data structure and enhances its manageability and scalability."))}d.isMDXComponent=!0}}]);