"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[7894],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=d(a),g=i,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return a?n.createElement(m,o(o({ref:e},p),{},{components:a})):n.createElement(m,o({ref:e},p))}));function g(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5672:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={title:"The Portal",sidebar_position:0,slug:"/portal"},o="The Intuition Portal",s={unversionedId:"Apps/portal",id:"Apps/portal",title:"The Portal",description:"145450d37d06802c8cb5d1ce01a41358}",source:"@site/docs/concepts/Apps/portal.md",sourceDirName:"Apps",slug:"/portal",permalink:"/fr/portal",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"The Portal",sidebar_position:0,slug:"/portal"},sidebar:"contractsSidebar",previous:{title:"Use Cases",permalink:"/fr/use-cases"},next:{title:"Data Populator",permalink:"/fr/populator"}},l={},d=[{value:"1. Creating and Managing Identities (Atoms)",id:"115450d37d06807795f2ef641536979b",level:2},{value:"2. Making Claims (Triples)",id:"115450d37d06809b951fd059388dde49",level:2},{value:"3. Staking (Signal Conviction)",id:"115450d37d06805bb7a6f622dadea8bf",level:2},{value:"4. Using Tags",id:"153450d37d0680b38fc7f51498dc0a23",level:2},{value:"5. Organizing with Lists",id:"115450d37d0680df93b3e10a38d4b84d",level:2},{value:"6. Following Users",id:"115450d37d0680fd9a54d365956f2629",level:2}],p={toc:d};function u(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"145450d37d06802c8cb5d1ce01a41358"},"The Intuition Portal"),(0,i.kt)("p",null,"The Portal is Intuition\u2019s flagship application which provides users with easy access to the social and knowledge graph. Positioned at the application layer, the Portal offers an intuitive interface for users to create, manage, and interact with Identities (Atoms) and Claims (Triples). It serves as the gateway for creating decentralized identities, making claims, and managing your stake, transforming the exploration of the knowledge graph into an accessible and user-friendly experience."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Covered in this guide:"))),(0,i.kt)("p",null,"This guide provides step by step instructions for The Portal\u2019s core features. This includes: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating Identities"),(0,i.kt)("li",{parentName:"ul"},"Creating Claims"),(0,i.kt)("li",{parentName:"ul"},"Staking on Identities and Claims"),(0,i.kt)("li",{parentName:"ul"},"Using Tags"),(0,i.kt)("li",{parentName:"ul"},"Organizing Lists"),(0,i.kt)("li",{parentName:"ul"},"Following Users")),(0,i.kt)("h2",{id:"115450d37d06807795f2ef641536979b"},"1. Creating and Managing Identities (Atoms)"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7846).Z,width:"2626",height:"924"})),(0,i.kt)("p",null,"Identities, also known as Atoms, are the fundamental building blocks in the Intuition system. Each Atom represents a concept, such as a person, organization, or product, and comes with a unique decentralized identifier, structured data, and an associated Vault for signaling its relevancy."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to Create an Identity")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click the \u201cCreate\u201d action button in the bottom left section of the menu panel."),(0,i.kt)("li",{parentName:"ol"},"Select \u201cCreate Identity.\u201d"),(0,i.kt)("li",{parentName:"ol"},"Input data to describe the Identity you are creating."),(0,i.kt)("li",{parentName:"ol"},"Optionally, deposit ETH to stake on your newly created Identity.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What Happens After Creation?"),"\nWhen you create an Identity, the data is uploaded to IPFS, generating an IPFS CID that is used to create an Atom in the Intuition contracts. This Atom can now be referenced universally across the web."),(0,i.kt)("h2",{id:"115450d37d06809b951fd059388dde49"},"2. Making Claims (Triples)"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6159).Z,width:"2626",height:"924"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What are Claims?"),"\nClaims, or Triples, allow you to assert statements about anything using a ","[Subject][Predicate]"," ","[Object]"," structure. For example, ","[Alice][is]"," ","[trustworthy]",". Creating a Claim does not automatically express agreement with the claim; you must stake on the Claim to do so."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to Create a Claim:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click the \u201cCreate\u201d action button in the bottom left section of the menu panel."),(0,i.kt)("li",{parentName:"ol"},"Select \u201cCreate Claim.\u201d"),(0,i.kt)("li",{parentName:"ol"},"Choose three Atoms/Identities to form your Claim.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2728).Z,width:"6519",height:"1119"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Helpful Tips:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If a claim already exists",(0,i.kt)("strong",{parentName:"li"},",")," simply stake on the existing claim to express your agreement with it."),(0,i.kt)("li",{parentName:"ul"},"To create a claim, Atoms must already exist for the subject, predicate and object. If any one of the 3 required Atoms does not exist, you will first need to follow step 1 above to create the necessary identities before composing your claim.")),(0,i.kt)("h2",{id:"115450d37d06805bb7a6f622dadea8bf"},"3. Staking (Signal Conviction)"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7812).Z,width:"2626",height:"924"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What is Staking?"),"\nStaking in Intuition allows you to signal what is important or what you believe to be true by staking ETH on Identities (Atoms) or Claims (Triples). This process contributes to a Token Curated Registry (TCR), where the most relevant information rises to the top."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Staking on an Identity:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Signals the relevancy of the Identity"),(0,i.kt)("li",{parentName:"ul"},"Grants you shares in the Identity, earning fees from future stakes.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Staking on a Claim:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Claims have a Positive Vault (for supporting the Claim) and a Negative Vault (for opposing the Claim)."),(0,i.kt)("li",{parentName:"ul"},"Staking on a Claim also stakes on the Claim\u2019s underlying Identities.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Unstaking:")," "),(0,i.kt)("p",null,"You can unstake your ETH at any time to retrieve your deposit (minus fees)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Staking Economics:")," "),(0,i.kt)("p",null,"Staking grants you shares that provide a proportionate amount of fee revenue accumulated by the Identity or Claim, incentivizing you to stake on high-traction items."),(0,i.kt)("h2",{id:"153450d37d0680b38fc7f51498dc0a23"},"4. Using Tags"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What are Tags?"),"\nTags are shortcuts to organizing and finding relevant information. Tagging is achieved by creating a Claim using the ","[has tag]"," Atom as the Predicate. The ability to create tags is one of the first features to leverage \u201cspecial predicates\u201d and demonstrates how functionality can be built around specific types of claims. In this case, tags are the foundation on which users can create and manage Lists. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Creating and Using Tags:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To create a new Tag, you must create a new Identity for the tag you want to use if it doesn't already exist. Just like any other claim, Identities (Atoms) must exist for the Subject, Predicate, and Object of your ","[has tag]"," claim. When adding a new tag, we know the Subject and Predicate exist, so users only need to ensure an  Object Atom exists (which represents the tag to be added).")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(108).Z,width:"2829",height:"1329"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tag something by searching through \u201cExisting Tags\u201d or creating a new one."),(0,i.kt)("li",{parentName:"ul"},"Tagging enhances discoverability and adds items to relevant Lists.")),(0,i.kt)("h2",{id:"115450d37d0680df93b3e10a38d4b84d"},"5. Organizing with Lists"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What are Lists?"),"\nLists allow you to group related items or data in a way that makes sense to you, helping others discover, save, and provide feedback. Lists are constructed through deterministic queries, making it easy to organize and navigate complex data."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4745).Z,width:"2849",height:"2903"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Creating a List:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lists are formed by Claims with the ","[has tag]"," Predicate."),(0,i.kt)("li",{parentName:"ul"},"Tag an Identity to include it in a specific List.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Adding to and Managing Lists:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the \u201cAdd to list\u201d and \u201cSave list\u201d buttons to manage your Lists."),(0,i.kt)("li",{parentName:"ul"},"Lists are Token Curated Registries (TCR), where you can stake ETH to order entries within a List.")),(0,i.kt)("h2",{id:"115450d37d0680fd9a54d365956f2629"},"6. Following Users"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What is Following?"),"\nFollowing in Intuition is a contextual statement made by staking on the Claim ","[I][am following]"," ","[User]",". This staking process reflects the strength of your connection and is part of the open data available for developers to use in building a social graph."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to Follow/Unfollow:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To follow, click on a user\u2019s profile and select \u201cFollow,\u201d then optionally stake ETH."),(0,i.kt)("li",{parentName:"ul"},"To unfollow, click \u201cFollowing\u201d on the user\u2019s profile and select \u201cUnfollow.\u201d Unfollowing also redeems your staked ETH.")))}u.isMDXComponent=!0},4745:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/portal.13f450d3-7d06-807f-9a89-ec0ae995ddf9-f14ebfa24b47ff0b25b78500f181fd36.png"},2728:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/portal.143450d3-7d06-805f-a3e2-e7532cdba956-e36edc7e3ac6d3b04be7ba49b3520628.png"},108:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/portal.153450d3-7d06-80da-868e-fcdf1d8fd1a2-6959555c6b1571f7427990ed3d722902.png"},7846:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/portal.170450d3-7d06-802f-9023-f72cc43a6bed-e7726022762abe13caee00a1ca138807.png"},7812:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/portal.170450d3-7d06-80c9-ae1a-e31a2b2a3ffd-2e82827a0849783998a1ea39748b0246.png"},6159:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/portal.170450d3-7d06-80cc-8c35-cd019e2596f0-44e35f01290448bbebaa8246417d8f75.png"}}]);