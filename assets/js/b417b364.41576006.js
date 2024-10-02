"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[154],{3905:(t,e,a)=>{a.d(e,{Zo:()=>h,kt:()=>u});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=i.createContext({}),p=function(t){var e=i.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},h=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),c=p(a),u=n,d=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return a?i.createElement(d,o(o({ref:e},h),{},{components:a})):i.createElement(d,o({ref:e},h))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8943:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const r={title:"Capturing Signal",sidebar_position:3,slug:"/signal"},o=void 0,s={unversionedId:"Core-Concepts/signal",id:"Core-Concepts/signal",title:"Capturing Signal",description:"What Are Attestations?",source:"@site/docs/Core-Concepts/signal.md",sourceDirName:"Core-Concepts",slug:"/signal",permalink:"/published-docs/signal",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Capturing Signal",sidebar_position:3,slug:"/signal"},sidebar:"defaultSidebar",previous:{title:"Triple Interactions",permalink:"/published-docs/triples"},next:{title:"Calculating Fees",permalink:"/published-docs/fees"}},l={},p=[],h={toc:p};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What Are Attestations?")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Attestations")," are cryptographically signed statements about a thing. When paired with Identities and Claims, Attestations become a powerful primitive for expressing how users feel about particular entities and relationships."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Attestations In Intuition")),(0,n.kt)("p",null,"In the Intuition ecosystem users can attest to Identities and Claims. The implication is slightly different for each. At the core of the interaction is the ability for users to state what they believe, and to place ETH behind this statement."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Attesting to Claims")),(0,n.kt)("p",null,"When a user attests to a Claim, they're either ",(0,n.kt)("em",{parentName:"p"},"endorsing")," or ",(0,n.kt)("em",{parentName:"p"},"refuting")," the Claim. This involves a process of setting a user's ",(0,n.kt)("em",{parentName:"p"},"state respective to the Claim")," to either ",(0,n.kt)("inlineCode",{parentName:"p"},"1")," (endorsing/affirming/agreeing) or ",(0,n.kt)("inlineCode",{parentName:"p"},"-1")," (refuting, disagreeing). If a user takes no action (doesn't attest to the Claim), the user's state respective to the Claim is ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),". This allows for the statement that is being made (the Claim) to be abstracted away from the state of those who are attesting to agree or disagree with the Claim."),(0,n.kt)("p",null,"A user may not simultaneously be signaling affirmation and refutation of a Claim. Only one attestation position - in the positive or negative direction - may be active at a single time for a given Claim."),(0,n.kt)("p",null,"Let's look at a sample Claim:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Bob")," ","[Subject]"," - ",(0,n.kt)("strong",{parentName:"p"},"is")," ","[Predicate]"," - ",(0,n.kt)("strong",{parentName:"p"},"Trustworthy")," ","[Object]"),(0,n.kt)("p",null,"This Claim describes a trait about Bob -- that he is Trustworthy."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This Claim describes a trait about Bob -- that he is Trustworthy."))),(0,n.kt)("p",null,"Once this Claim has been created and becomes part of the Intuition ecosystem users are able to attest to it, either positively or negatively. Each of these actions has a different meaning."),(0,n.kt)("p",null,"Once the Claim about Bob has been created, Alice and Sarah are able to attest to it. Let's look at two different situations interacting with the same example Claim."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Situation 1"),": Alice has worked with Bob and wants to attest positively (an affirmation) to the Claim ",(0,n.kt)("em",{parentName:"p"},"Bob is Trustworthy")," and stakes 1 ETH on her attestation."),(0,n.kt)("p",null,"Alice effectively agrees with the Claim  ",(0,n.kt)("em",{parentName:"p"},"Bob is Trustworthy")," and believes so with the ",(0,n.kt)("em",{parentName:"p"},"conviction")," of 1 ETH. In this example, Alice has created a ",(0,n.kt)("em",{parentName:"p"},"positive attestation")," that demonstrates her agreement with the initial Claim. The amount of ETH (in this case, 1 ETH) is the level to which Alice agrees with the Claim, and this amount is her ",(0,n.kt)("strong",{parentName:"p"},"Conviction")," behind her Attestation."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Alice effectively agrees with the Claim  ",(0,n.kt)("em",{parentName:"p"},"Bob is Trustworthy")," and believes so with the ",(0,n.kt)("em",{parentName:"p"},"conviction")," of 1 ETH. In this example, Alice has created a ",(0,n.kt)("em",{parentName:"p"},"positive attestation")," that demonstrates her agreement with the initial Claim. The amount of ETH (in this case, 1 ETH) is the level to which Alice agrees with the Claim, and this amount is her ",(0,n.kt)("strong",{parentName:"p"},"Conviction")," behind her Attestation."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Situation 2:")," Sarah has had a bad experience with Bob and wants to attest negatively (a refutation) to the Claim ",(0,n.kt)("em",{parentName:"p"},"Bob is Trustworthy")," and stakes .5 ETH on her attestation."),(0,n.kt)("p",null,"Sarah effectively disagrees with the Claim ",(0,n.kt)("em",{parentName:"p"},"Bob is Trustworthy")," with the ",(0,n.kt)("em",{parentName:"p"},"conviction")," of .5 ETH. In this example, Sarah has created a ",(0,n.kt)("em",{parentName:"p"},"negative attestation")," that demonstrates her disagreement with the initial Claim. Her ",(0,n.kt)("strong",{parentName:"p"},"Conviction")," for this particular attestation is .5 ETH."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Sarah effectively disagrees with the Claim ",(0,n.kt)("em",{parentName:"p"},"Bob is Trustworthy")," with the ",(0,n.kt)("em",{parentName:"p"},"conviction")," of .5 ETH. In this example, Sarah has created a ",(0,n.kt)("em",{parentName:"p"},"negative attestation")," that demonstrates her disagreement with the initial Claim. Her ",(0,n.kt)("strong",{parentName:"p"},"Conviction")," for this particular attestation is .5 ETH."))),(0,n.kt)("p",null,"Other users can interact with the Claim in similar ways. Through viewing the direction and conviction of the attestations we can then draw our own conclusions about the Claim.  Since the statement (the Claim) and the state (user attestations) are abstracted from each other, this allows for ",(0,n.kt)("strong",{parentName:"p"},"many-to-one attestations"),". Instead of creating a new Claim for every individual attestation, there is a single Claim statement which any number of users can attest to, showing their agreement or disagreement about the statement."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Attesting to Identities")),(0,n.kt)("p",null,"Attesting to Identities is more straightforward given that users can ",(0,n.kt)("em",{parentName:"p"},"only positively attest")," to Identities. Multiple users can still attest to a single Identity, but the expression has a slightly different meaning than attesting to a Claim. Let's look at an example of a potential lifecycle for a created Identity."),(0,n.kt)("p",null,"Alice creates an Identity for AliceCo."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Alice creates an Identity for AliceCo."))),(0,n.kt)("p",null,'This Identity "AliceCo" now exists in the Intuition ecosystem, and includes the metadata that Alice initially includes, such as the name, description, and image.'),(0,n.kt)("p",null,"Alice invites one of her coworkers from AliceCo to Intuition."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Alice invites one of her coworkers from AliceCo to Intuition."))),(0,n.kt)("p",null,"Alice is excited about using Intuition and wants her coworkers to explore the platform. They notice that there is an Identity for AliceCo."),(0,n.kt)("p",null,"Sarah, one of Alice's coworkers, ",(0,n.kt)("strong",{parentName:"p"},"agrees")," with the AliceCo Identity and attests positively. She is in deep agreement with the initial Identity, so she stakes 1 ETH on it."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Sarah, one of Alice's coworkers, ",(0,n.kt)("strong",{parentName:"p"},"agrees")," with the AliceCo Identity and attests positively. She is in deep agreement with the initial Identity, so she stakes 1 ETH on it."))),(0,n.kt)("p",null,"Sarah has added a ",(0,n.kt)("em",{parentName:"p"},"positive attestation")," to the Identity with a Conviction of 1 ETH. This can be viewed as the weight that Sarah places on her initial agreement with the Identity."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sharing Your Intuition")),(0,n.kt)("p",null,"Other users that are exploring the Intuition ecosystem can see how many attestations that Identities and Claims have associated with them. This allows for users to make informed decisions about the world around them, and also allows for users to ",(0,n.kt)("em",{parentName:"p"},"share their Intuition")," about Identities and Claims."))}m.isMDXComponent=!0}}]);