"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[8839],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>p});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=d(i),p=a,u=h["".concat(l,".").concat(p)]||h[p]||f[p]||s;return i?n.createElement(u,r(r({ref:t},c),{},{components:i})):n.createElement(u,r({ref:t},c))}));function p(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,r=new Array(s);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var d=2;d<s;d++)r[d]=i[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},1375:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=i(7462),a=(i(7294),i(3905));const s={title:"Signal",sidebar_position:2,slug:"/136450d3-7d06-80e2-b4ff-fe8d6417e5d2"},r="Signal",o={unversionedId:"Core-Concepts/Primitive-Fundamentals/Signal",id:"Core-Concepts/Primitive-Fundamentals/Signal",title:"Signal",description:"13b450d37d06808488dff7924179bdef}",source:"@site/docs/Core-Concepts/Primitive-Fundamentals/Signal.md",sourceDirName:"Core-Concepts/Primitive-Fundamentals",slug:"/136450d3-7d06-80e2-b4ff-fe8d6417e5d2",permalink:"/136450d3-7d06-80e2-b4ff-fe8d6417e5d2",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Signal",sidebar_position:2,slug:"/136450d3-7d06-80e2-b4ff-fe8d6417e5d2"},sidebar:"tutorialSidebar",previous:{title:"Triples",permalink:"/136450d3-7d06-80db-b0e4-ce33963cdeb5"},next:{title:"Fees & Rewards",permalink:"/136450d3-7d06-8094-a107-d73d5ec35325"}},l={},d=[{value:"Explicit Signal",id:"13d450d37d068037a8effa4cfc607ffd",level:2},{value:"Implicit Signal",id:"13d450d37d06808db6a2fd98b72e59c5",level:2},{value:"Transitive Signal",id:"13d450d37d0680cdbf47d8fe8b011900",level:2},{value:"Atom Signal",id:"13d450d37d06802e8386f0e6d15fdf84",level:2},{value:"Triple Signal",id:"13d450d37d0680989567d269a4565b5b",level:2}],c={toc:d};function f(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"13b450d37d06808488dff7924179bdef"},"Signal"),(0,a.kt)("p",null,"Signal, in the context of Intuition, refers to any action or indication that expresses intent, belief, or support. Signals can be classified into three broad categories: explicit signal,  implicit signal, and transitive signal. These signals play a crucial role in interpreting user behavior, beliefs, and preferences within the system."),(0,a.kt)("h2",{id:"13d450d37d068037a8effa4cfc607ffd"},"Explicit Signal"),(0,a.kt)("p",null,"An explicit signal is a clear, intentional action taken by a user to express support, belief, or intent. These actions are directly observable and often involve a formal mechanism within the system. Examples of explicit signals include voting mechanisms, where casting a vote represents a user\u2019s preference. Verifiable claims and attestations are also forms of explicit signals; they are signed messages that convey specific information."),(0,a.kt)("p",null,"For instance, a proof of humanity attestation from a trust anchor like Worldcoin is an explicit signal from Worldcoin that Worldcoin believes the entity to be human (a valuable data point for sybil resistance efforts)."),(0,a.kt)("h2",{id:"13d450d37d06808db6a2fd98b72e59c5"},"Implicit Signal"),(0,a.kt)("p",null,"Implicit signal involves indirect or inferred indications of support, belief, or intent. This signal is not always directly observable and are often deduced from user behavior or patterns. For example, the frequency and context of user interactions with certain data points can imply their support or belief. Implicit signal requires sophisticated analysis to interpret accurately, as it is embedded within the user\u2019s activity data."),(0,a.kt)("h2",{id:"13d450d37d0680cdbf47d8fe8b011900"},"Transitive Signal"),(0,a.kt)("p",null,"Transitive signal refers to the trust or belief that is passed along through a network of relationships. This type of signal leverages the idea that trust can be extended through connections. For example, if User A attests to something about User B, and User C trusts User A, then User C is likely to extend some level of trust to User B, even without a direct interaction. This transitive nature of trust is vital in decentralized systems like Intuition, where direct trust relationships are not always possible. By harnessing transitive signals, the system can create a more interconnected and trust-rich environment, where the credibility of one entity can influence the perception and trustworthiness of others within the network."),(0,a.kt)("h1",{id:"13d450d37d0680bea5d8e1625eebbd51"},"Signal in Intuition"),(0,a.kt)("p",null,"Though all systems naturally generate implicit signal, explicit signal in Intuition is expressed in a novel format that enables and incentivizes the creation of many-to-one, non-deterministic attestations. In Intuition, these semantic statements do not have a single \u2018issuer\u2019 - instead, anyone/anything can signal support or rejection of any existing statement/attestation at any point in time. This decoupling of information from \u2018who is presently expressing/supporting that information\u2019 introduces the ability to accommodate many-to-one attestations, making the data significantly more usable - especially for more complex use cases that involve the concept of transitive signal, such as reputation."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(3659).Z,width:"2623",height:"741"})),(0,a.kt)("p",null,"To accomplish this, the Intuition system enables users to maintain positions on Atoms and Triples, interpreting these positions as explicit signal from the user. This mechanism can be implemented using tokens or other accounting systems that have the ability to track user balances over time across an arbitrarily large number of entities."),(0,a.kt)("h2",{id:"13d450d37d06802e8386f0e6d15fdf84"},"Atom Signal"),(0,a.kt)("p",null,"Within the Intuition framework, users signal their belief in the relevance of an Atom by adjusting their balance on that Atom. This balance can be increased or decreased arbitrarily."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(4443).Z,width:"660",height:"802"})),(0,a.kt)("p",null,"A balance of zero implies no signal, while any positive balance indicates a degree of belief in the Atom\u2019s relevance. This mechanism is economically driven: users earn fees proportional to their ownership stake in an Atom as other users interact with it. Thus, if a user deems an Atom relevant, they are incentivized to signal its relevance to receive these rewards. "),(0,a.kt)("p",null,"Negative integers may be used if the Intuition system\u2019s implementation aims to allow users to explicitly signal the irrelevance of an Atom. In systems without negative balances, the absence of a positive signal can serve as an indication of the Atom\u2019s irrelevance."),(0,a.kt)("h2",{id:"13d450d37d0680989567d269a4565b5b"},"Triple Signal"),(0,a.kt)("p",null,"In the Intuition framework, users signal their belief in both the relevance and truthfulness of a Triple by modifying their balance on that Triple. Triple balances can be any integer, allowing for a nuanced expression of belief."),(0,a.kt)("p",null,"A balance of zero indicates no signal. A negative balance signals a rejection of the Triple, explicitly indicating that the Triple is considered false, and that this falsehood is relevant. "),(0,a.kt)("p",null,"Conversely, a positive balance affirms the Triple, explicitly indicating that the Triple is considered true, and that this truthfulness is relevant."),(0,a.kt)("p",null,"For example, with a Triple asserting \u201c","[Vitalik][is]"," ","[trustworthy]",",\u201d users would express their belief in its truthfulness, and the relevancy of this truthfulness, by increasing their balance on the affirmative side of the Triple, or signal disbelief by decreasing their balance into the negative. This mechanism allows for nuanced expressions of trust and belief within the decentralized ecosystem."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(6841).Z,width:"1266",height:"803"})),(0,a.kt)("p",null,"This system enables each \u201cstatement\u201d to exist in different states based on who is affirming or rejecting it. To illustrate the power of this approach, consider the example of building a decentralized list of followers. In a traditional one-to-one model, where each claim or attestation has a single issuer, if a user had 1,000 followers, there would be 1,000 separate \u201cfollowing\u201d claims. Most of this data would be redundant, as the \u201cfollowing Y\u201d part would remain constant across all claims. Additionally, this data would only be easily reconcilable assuming consistent standards and schemas across all claims."),(0,a.kt)("p",null,"In contrast, the Intuition model simplifies this by having a single Triple representing a statement such as \u201cI am following Y.\u201d Users would then adjust their balances on this statement to express their stance. To see all followers of Y, one would simply examine the \u201cI am following Y\u201d Triple and identify who has positive balances on the affirmative side. This approach consolidates data, reducing redundancy and making it easier to verify and aggregate information."),(0,a.kt)("p",null,"Furthermore, the ability to adjust balances allows for a more nuanced expression of preferences. In the context of a \u2018follow\u2019 functionality, instead of a flat follow list where all followers are treated equally, users could explicitly signal varying levels of interest or endorsement. By increasing their balance on the followers they value more, users can effectively rank their follow list. This means that someone could show a stronger preference for certain individuals or entities by staking more tokens on their affirmations, creating a dynamic and tiered system of trust and preference. This not only enhances the granularity of data but also provides richer insights into user preferences and social dynamics within the network."))}f.isMDXComponent=!0},4443:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/136450d3-7d06-80e2-b4ff-fe8d6417e5d2.13d450d3-7d06-8075-9265-d67c7e5cd567-377fb9f2092dff0058e2fd8bc1511905.png"},6841:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/136450d3-7d06-80e2-b4ff-fe8d6417e5d2.13d450d3-7d06-80a3-b933-dfd23cf9c1bd-7da7af9695ed51ad79db91b7a9b838ee.png"},3659:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/136450d3-7d06-80e2-b4ff-fe8d6417e5d2.13d450d3-7d06-80b1-aab3-eb74c6933977-704a82d2b544357dd5ced4c314ad19b4.png"}}]);