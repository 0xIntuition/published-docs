"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[7202],{3905:(t,e,a)=>{a.d(e,{Zo:()=>h,kt:()=>m});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=i.createContext({}),p=function(t){var e=i.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},h=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),u=p(a),m=n,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return a?i.createElement(g,o(o({ref:e},h),{},{components:a})):i.createElement(g,o({ref:e},h))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3407:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const r={title:"Capturing Signal",sidebar_position:2,slug:"/capturing-signal"},o=void 0,s={unversionedId:"Core-Concepts/Using-the-Primitives/capturing-signal",id:"Core-Concepts/Using-the-Primitives/capturing-signal",title:"Capturing Signal",description:"What Are Attestations?",source:"@site/docs/Core-Concepts/Using-the-Primitives/capturing-signal.md",sourceDirName:"Core-Concepts/Using-the-Primitives",slug:"/capturing-signal",permalink:"/capturing-signal",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Capturing Signal",sidebar_position:2,slug:"/capturing-signal"},sidebar:"tutorialSidebar",previous:{title:"Triple Structuring",permalink:"/triple-structuring"},next:{title:"Use Cases",permalink:"/use-cases"}},l={},p=[],h={toc:p};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What Are Attestations?")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Attestations")," are cryptographically signed statements about a thing. When paired with Atoms and Triples, Attestations becomes a powerful primitive for expressing how users feel about particular entities and relationships."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Attestations In Intuition")),(0,n.kt)("p",null,"In the Intuition ecosystem users can attest to Atoms and Triples. The implication is slightly different for each. At the core of the interaction is the ability for users to state what they believe, and to place ETH behind this statement."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Attesting to Triples")),(0,n.kt)("p",null,"When a user attests to a Triple, they're either ",(0,n.kt)("em",{parentName:"p"},"endorsing")," or ",(0,n.kt)("em",{parentName:"p"},"refuting")," the respective claim. This involves a process of setting a user's ",(0,n.kt)("em",{parentName:"p"},"state respective to the Triple")," to either a positive integer (endorsing/affirming/agreeing), or a negative integer (refuting, disagreeing). If a user takes no action (doesn't attest to the Triple), the user's state respective to the Triple is ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),". This allows for the statement that is being made (the Claim) to be abstracted away from the state of those who are attesting to agree or disagree with the Claim."),(0,n.kt)("p",null,"A user may not simultaneously be signaling affirmation and refutation of a Triple. Only one attestation position - in the positive or negative direction - may be active at a single time for a given Triple."),(0,n.kt)("p",null,"Let's look at a sample Triple:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Bob")," ","[Subject]"," - ",(0,n.kt)("strong",{parentName:"li"},"is")," ","[Predicate]"," - ",(0,n.kt)("strong",{parentName:"li"},"Trustworthy")," ","[Object]")),(0,n.kt)("p",null,"This Triple describes a trait about Bob -- that he is Trustworthy."),(0,n.kt)("p",null,"Once this Triple has been created and becomes part of the Intuition ecosystem users are able to attest to it, either positively or negatively. Each of these actions has a different meaning."),(0,n.kt)("p",null,"Let's look at two different situations interacting with the same example Triple."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Situation 1"),": Alice has worked with Bob and wants to attest positively (an affirmation) to the Claim ",(0,n.kt)("em",{parentName:"li"},"Bob is Trustworthy")," and stakes 1 ETH on her attestation.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Alice effectively agrees with the Claim  ",(0,n.kt)("em",{parentName:"li"},"Bob is Trustworthy")," and believes so with the ",(0,n.kt)("em",{parentName:"li"},"conviction")," of 1 ETH. In this example, Alice has created a ",(0,n.kt)("em",{parentName:"li"},"positive attestation")," that demonstrates her agreement with the initial Claim. The amount of ETH (in this case, 1 ETH) is the level to which Alice agrees with the Claim, and this amount is her ",(0,n.kt)("strong",{parentName:"li"},"Conviction")," behind her Attestation."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Situation 2:")," Sarah has had a bad experience with Bob and wants to attest negatively (a refutation) to the Claim ",(0,n.kt)("em",{parentName:"li"},"Bob is Trustworthy")," and stakes .5 ETH on the negative vault of the attestation.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Sarah effectively disagrees with the Claim ",(0,n.kt)("em",{parentName:"li"},"Bob is Trustworthy")," with the ",(0,n.kt)("em",{parentName:"li"},"conviction")," of .5 ETH. In this example, Sarah has created a ",(0,n.kt)("em",{parentName:"li"},"negative attestation")," that demonstrates her disagreement with the initial Claim. Her ",(0,n.kt)("strong",{parentName:"li"},"Conviction")," for this particular attestation is .5 ETH.")))),(0,n.kt)("p",null,"Other users can interact with the Triple in similar ways. Through viewing the direction and conviction of the attestations we can then draw our own conclusions about the included Claim.  Since the statement (the Claim) and the state (user attestations) are abstracted from each other, this allows for ",(0,n.kt)("strong",{parentName:"p"},"many-to-one attestations"),". Instead of creating a new Claim for every individual attestation, there is a single Claim statement which any number of users can attest to, showing their agreement or disagreement about the statement."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Attesting to Atoms")),(0,n.kt)("p",null,"Attesting to Atoms is more straightforward given that users can ",(0,n.kt)("em",{parentName:"p"},"only positively attest")," to Atoms. Multiple users can still attest to a single Identity, but the expression has a slightly different meaning than attesting to a Triple. Let's look at an example of a potential lifecycle for a created Identity."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Alice creates an Identity for AliceCo.")),(0,n.kt)("p",null,'This Identity "AliceCo" now exists in the Intuition ecosystem, and includes the metadata that Alice initially includes, such as the name, description, and image.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Alice invites one of her coworkers from AliceCo to Intuition.")),(0,n.kt)("p",null,"Alice is excited about using Intuition and wants her coworkers to explore the platform. They notice that there is an Identity for AliceCo."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sarah, one of Alice's coworkers, ",(0,n.kt)("strong",{parentName:"li"},"agrees")," that the AliceCo Atom is good and relevant, and attests positively. She is in deep agreement with the initial Atom, so she stakes 1 ETH on it.")),(0,n.kt)("p",null,"Sarah has added a ",(0,n.kt)("em",{parentName:"p"},"positive attestation")," to the Atom with a Conviction of 1 ETH. This can be viewed as the weight that Sarah places on her initial agreement with the Atom."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sharing Your Intuition")),(0,n.kt)("p",null,"Other users that are exploring the Intuition ecosystem can see how many attestations that Identities and Claims have associated with them. This allows for users to make informed decisions about the world around them, and also allows for users to ",(0,n.kt)("em",{parentName:"p"},"share their Intuition")," about Identities and Claims."))}c.isMDXComponent=!0}}]);