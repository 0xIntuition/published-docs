"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[9957],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=i.createContext({}),m=function(t){var e=i.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=m(t.components);return i.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=m(a),c=n,k=s["".concat(u,".").concat(c)]||s[c]||d[c]||r;return a?i.createElement(k,o(o({ref:e},p),{},{components:a})):i.createElement(k,o({ref:e},p))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,o=new Array(r);o[0]=s;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var m=2;m<r;m++)o[m]=a[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6613:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var i=a(7462),n=(a(7294),a(3905));const r={title:"Audit Reports",sidebar_position:4,slug:"/130450d3-7d06-80ef-a4c6-fba84a570060"},o="Overview",l={unversionedId:"Protocol-&-Contracts/Audit-Reports",id:"Protocol-&-Contracts/Audit-Reports",title:"Audit Reports",description:"130450d37d068088a9abd6449cafe060}",source:"@site/docs/Protocol-&-Contracts/Audit-Reports.md",sourceDirName:"Protocol-&-Contracts",slug:"/130450d3-7d06-80ef-a4c6-fba84a570060",permalink:"/130450d3-7d06-80ef-a4c6-fba84a570060",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Audit Reports",sidebar_position:4,slug:"/130450d3-7d06-80ef-a4c6-fba84a570060"},sidebar:"tutorialSidebar",previous:{title:"Errors.sol",permalink:"/130450d3-7d06-80ef-9149-cb0ad061f18b"},next:{title:"Create Atom",permalink:"/13d450d3-7d06-808a-b789-d45f3bc4de6e"}},u={},m=[{value:"Audit Scope",id:"130450d37d0680ea932ee24237bafe86",level:2},{value:"Audit File",id:"130450d37d0680c8b0d1dc76b525ef39",level:2},{value:"Summary of Findings and Fixes",id:"130450d37d0680788dbeca487cc62a54",level:2},{value:"High Severity",id:"130450d37d06804183dae37248fd5fe4",level:3},{value:"Medium Severity",id:"130450d37d068064ab14f6aa2e0a1869",level:3},{value:"Low Severity",id:"130450d37d068073bb18f4adfdf90fba",level:3},{value:"Informational Issues",id:"130450d37d068024965bce63d2865eda",level:3},{value:"Status Update",id:"130450d37d0680d69ff4eab0ade82c72",level:2}],p={toc:m};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"130450d37d068088a9abd6449cafe060"},"Overview"),(0,n.kt)("p",null,"Security Assessment (Summary Report) - March 28, 2024"),(0,n.kt)("h2",{id:"130450d37d0680ea932ee24237bafe86"},"Audit Scope"),(0,n.kt)("p",null,"The smart contracts audited can be found on the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch in the repository: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/0xIntuition/intuition-tob-audit"},"intuition-tob-audit")),(0,n.kt)("h2",{id:"130450d37d0680c8b0d1dc76b525ef39"},"Audit File"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Security Assessment (Summary Report) - March 28, 2024")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/a0d93219-9222-4c83-b4ac-813b5a29b7cb/7cfbd589-39f6-45e7-adfa-507577c17357/Intuition_-_Smart_Contracts_-_Summary_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241113T200714Z&X-Amz-Expires=3600&X-Amz-Signature=2c778fa031a41d101d926d9589183d3f66d54d0bff3591fa4d1f411bd1d2df8b&X-Amz-SignedHeaders=host&x-id=GetObject"},"Intuition",(0,n.kt)("em",{parentName:"a"},"-_Smart_Contracts"),"-_Summary_Report.pdf")),(0,n.kt)("h2",{id:"130450d37d0680788dbeca487cc62a54"},"Summary of Findings and Fixes"),(0,n.kt)("h3",{id:"130450d37d06804183dae37248fd5fe4"},"High Severity"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"No high severity issues found")),(0,n.kt)("h3",{id:"130450d37d068064ab14f6aa2e0a1869"},"Medium Severity"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Protocol deposit fees unaccounted for in")," ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"createAtom")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Severity: Medium"),(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-tob-audit/commit/edc45845db0246c57b538ed5ab6e1f32becba89c"},"commit#edc4584")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Triple identifiers can contain hash collisions"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Severity: Medium"),(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/33"},"PR#33")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Atom equity should be calculated on raw asset amounts"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Severity: Medium"),(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-tob-audit/commit/028748d1a534367c5eeaa62063695e82f198e049"},"commit#028748d")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Distributing atom equity should not include protocol fees"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Severity: Medium"),(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-tob-audit/commit/028748d1a534367c5eeaa62063695e82f198e049"},"commit#028748d")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Asset accounting should not be reduced by")," ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"minShare")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Severity: Medium"),(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/36"},"PR#36"))))),(0,n.kt)("h3",{id:"130450d37d068073bb18f4adfdf90fba"},"Low Severity"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"createAtomCompressed"))," ",(0,n.kt)("strong",{parentName:"li"},"allows creating duplicate atoms with the same URI"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/commit/4d0b2ba508677be0a9a1359762c3a7011e0d044d#diff-d553522a0a887684d5c62d14d650f16c8d632640f9b1458872de2c59318901d2"},"commit#4d0b2ba")," from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/30"},"PR#30")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Upgrade could lead to mismatch in atom wallet address prediction"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/38"},"PR#38")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"createAtom"))," ",(0,n.kt)("strong",{parentName:"li"},"mints")," ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"sharesForZeroAddress"))," ",(0,n.kt)("strong",{parentName:"li"},"twice"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-tob-audit/commit/edc45845db0246c57b538ed5ab6e1f32becba89c"},"commit#edc4584")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"EthMultiVault"))," ",(0,n.kt)("strong",{parentName:"li"},"should not receive ether donations"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/24"},"PR#24")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Atom wallets can be created before the atom is created"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/29"},"PR#29")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Atom URI data is unbounded"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/32"},"PR#32"))))),(0,n.kt)("h3",{id:"130450d37d068024965bce63d2865eda"},"Informational Issues"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Salt contains superfluous address(this)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/27"},"PR#27")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Unbound storage reads in")," ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"getVaultStates")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/25"},"PR#25")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"EthMultiVault"))," ",(0,n.kt)("strong",{parentName:"li"},"is missing ERC-4626 functionality"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Status: Addressed in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-tob-audit/issues/6"},"comments")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Redundant and ineffective reinitialization check"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/28"},"PR#28")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Impossible condition"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/26"},"PR#26")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Distributing atom equity should not mint new shares to receiver"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/39"},"PR#39")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"getVaultStates"))," ",(0,n.kt)("strong",{parentName:"li"},"does not retrieve counter vaults"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/25"},"PR#25")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Excessive duplicate code"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/30"},"PR#30")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Admin can bypass fee setter limits"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/34"},"PR#34")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Minting ghost shares is unnecessary to prevent share inflation attacks"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Status: Removed from report"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Code Quality"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/40"},"PR#40")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/41"},"PR#41")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"[Weak Maturity]"," Decentralization"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed in: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/42"},"PR#42")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-beta-contracts/pull/45"},"PR#45")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"[Weak Maturity]"," Arithmetic"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Status: Addressed in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-tob-audit/issues/44"},"comments"))))),(0,n.kt)("h2",{id:"130450d37d0680d69ff4eab0ade82c72"},"Status Update"),(0,n.kt)("p",null,"Last updated: April 3, 2024"))}d.isMDXComponent=!0}}]);