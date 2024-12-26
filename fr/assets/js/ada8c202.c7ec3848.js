"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[9911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Create Triple",sidebar_position:2,slug:"/13d450d3-7d06-8093-83f1-d3e6c04ed153"},l=void 0,o={unversionedId:"Dev-Tools/Contract-Interactions/Create-Triple",id:"Dev-Tools/Contract-Interactions/Create-Triple",title:"Create Triple",description:"Triples\xa0are higher-order\xa0structures in the Intuition system, used to define relationships between Atoms. Each Triple consists of three components\xa0- Subject, Predicate, and Object - all\xa0represented as Atoms, enabling\xa0precise, machine-readable representations of data relationships.",source:"@site/docs/Dev-Tools/Contract-Interactions/Create-Triple.md",sourceDirName:"Dev-Tools/Contract-Interactions",slug:"/13d450d3-7d06-8093-83f1-d3e6c04ed153",permalink:"/fr/landing/13d450d3-7d06-8093-83f1-d3e6c04ed153",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Create Triple",sidebar_position:2,slug:"/13d450d3-7d06-8093-83f1-d3e6c04ed153"},sidebar:"tutorialSidebar",previous:{title:"Create Atom",permalink:"/fr/landing/13d450d3-7d06-808a-b789-d45f3bc4de6e"},next:{title:"Attest Atom",permalink:"/fr/landing/13d450d3-7d06-8073-99f6-cd3de716ace9"}},s={},c=[{value:"<strong>Context</strong>",id:"13d450d37d0680ea9b44d4b0fd63537f",level:2},{value:"createTriple",id:"13d450d37d06801eadaff7a4495c38f3",level:2},{value:"Parameters",id:"13d450d37d0680d2aa2ce474e53adb11",level:3},{value:"Implementation",id:"13d450d37d0680e090a0e2d1dd17c379",level:3},{value:"createBatchTriple",id:"13d450d37d068096aa59ff888b4dccff",level:2},{value:"Parameters",id:"13d450d37d06800d8e8de85ffd167777",level:3},{value:"Implementation",id:"13d450d37d068092b711c2f80c9d63ae",level:3},{value:"Cost Considerations",id:"13d450d37d0680e6803cf06cc67d7316",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/primitives"},"Triples"),"\xa0are higher-order\xa0structures in the Intuition system, used to define relationships between Atoms. Each Triple consists of three components\xa0- Subject, Predicate, and Object - all\xa0represented as Atoms, enabling\xa0precise, machine-readable representations of data relationships."),(0,r.kt)("h2",{id:"13d450d37d0680ea9b44d4b0fd63537f"},(0,r.kt)("strong",{parentName:"h2"},"Context")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"createTriple"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"batchCreateTriple"),"\xa0functions are part of the ",(0,r.kt)("a",{parentName:"p",href:"/130450d3-7d06-803e-9833-fff21c847507"},"EthMultiVault")," contract, which manages the creation and relationships between Atoms through Semantic Triples. When creating\xa0Triples, each component must reference\xa0existing Atom vault IDs.   The\xa0Triple structure enables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Many-to-one attestations"),(0,r.kt)("li",{parentName:"ul"},"Positive and negative signaling through triple vaults"),(0,r.kt)("li",{parentName:"ul"},"Flat data structures for optimal\xa0scalability")),(0,r.kt)("p",null,"For\xa0example, a Triple might represent:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Subject:\xa0"Bob" (Atom ID: "1")'),(0,r.kt)("li",{parentName:"ul"},'Predicate: "is" (Atom ID: "2")'),(0,r.kt)("li",{parentName:"ul"},'Object:\xa0"Trustworthy" (Atom ID: "3")')),(0,r.kt)("h2",{id:"13d450d37d06801eadaff7a4495c38f3"},"createTriple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function createTriple(\n    uint256 subjectId,\n    uint256 predicateId,\n    uint256 objectId\n) external payable nonReentrant whenNotPaused returns (uint256)\n")),(0,r.kt)("h3",{id:"13d450d37d0680d2aa2ce474e53adb11"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subjectId"),": vault ID of the Atom representing the subject"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"predicateId"),": vault ID of the Atom representing the predicate/relationship"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"objectId"),": vault ID of the\xa0Atom representing the object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," : Initial deposit into the Triple\u2019s positive multivault.  Must be \u2265 to the triple creation cost."),(0,r.kt)("li",{parentName:"ul"},"Returns: ",(0,r.kt)("inlineCode",{parentName:"li"},"uint256"),"  - Created triple vault ID")),(0,r.kt)("h3",{id:"13d450d37d0680e090a0e2d1dd17c379"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// useCreateTriple Hook\nimport { type GetContractReturnType } from 'viem'\nimport { base } from 'viem/chains'\nimport { useContractWriteAndWait } from './useContractWriteAndWait'\nimport { useMultivaultContract } from './useMultivaultContract'\n\nexport const useCreateTriple = () => {\n  const multivault = useMultivaultContract(\n    base.id\n  ) as GetContractReturnType\n\n  return useContractWriteAndWait({\n    ...multivault,\n    functionName: 'createTriple',\n  })\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Usage Example\nconst {\n  writeAsync: writeCreateTriple,\n  awaitingWalletConfirmation,\n  awaitingOnChainConfirmation,\n} = useCreateTriple()\n\nasync function handleCreateTriple(subjectId: string, predicateId: string, objectId: string) {\n  if (!awaitingOnChainConfirmation && !awaitingWalletConfirmation && writeCreateTriple) {\n    try {\n      const tx = await writeCreateTriple({\n        address: MULTIVAULT_CONTRACT_ADDRESS,\n        abi: multivaultAbi,\n        functionName: 'createTriple',\n        args: [BigInt(subjectId), BigInt(predicateId), BigInt(objectId)],\n        value: tripleCost, // Must be >= minimum creation cost\n      })\n      \n      if (tx?.hash) {\n        const receipt = await publicClient.waitForTransactionReceipt({\n          hash: tx.hash,\n        })\n        // Handle success\n      }\n    } catch (error) {\n      // Handle error\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"13d450d37d068096aa59ff888b4dccff"},"createBatchTriple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function createTripleBatch(\n    uint256[] calldata subjectIds,\n    uint256[] calldata predicateIds,\n    uint256[] calldata objectIds\n) external payable nonReentrant whenNotPaused returns (uint256[] memory)\n")),(0,r.kt)("h3",{id:"13d450d37d06800d8e8de85ffd167777"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subjectIds"),": vault ID(s) of the Atom representing the subjects"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"predicateIds"),": vault ID(s) of the Atom representing the predicate/relationships"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"objectIds"),": vault ID(s) of the\xa0Atom representing the objects"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," : Initial deposit into the triples\u2019 multivaults.  Must be \u2265 to the atom creation cost * length of triples.  This will get distributed evenly across all created triples."),(0,r.kt)("li",{parentName:"ul"},"Returns ",(0,r.kt)("inlineCode",{parentName:"li"},"uint256[]")," - Created triples\u2019 vault ID(s)")),(0,r.kt)("h3",{id:"13d450d37d068092b711c2f80c9d63ae"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// useBatchCreateTriple Hook\nimport { type GetContractReturnType } from 'viem'\nimport { base } from 'viem/chains'\nimport { useContractWriteAndWait } from './useContractWriteAndWait'\nimport { useMultivaultContract } from './useMultivaultContract'\n\nexport const useBatchCreateTriple = () => {\n  const multivault = useMultivaultContract(\n    base.id\n  ) as GetContractReturnType\n\n  return useContractWriteAndWait({\n    ...multivault,\n    functionName: 'createTripleBatch',\n  })\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Usage Example\nconst {\n  writeAsync: writeBatchCreateTriple,\n  awaitingWalletConfirmation,\n  awaitingOnChainConfirmation,\n} = useBatchCreateTriple()\n\nasync function handleBatchCreateTriple(\n  subjectIds: string[], \n  predicateIds: string[], \n  objectIds: string[]\n) {\n  const value = BigInt(tripleValue) * BigInt(subjectIds.length)\n  if (!awaitingOnChainConfirmation && !awaitingWalletConfirmation && writeBatchCreateTriple) {\n    try {\n      const tx = await writeBatchCreateTriple({\n        address: MULTIVAULT_CONTRACT_ADDRESS,\n        abi: multivaultAbi,\n        functionName: 'createTripleBatch',\n        args: [\n          subjectIds.map(BigInt),\n              predicateIds.map(BigInt),\n              objectIds.map(BigInt),\n        ],\n        value: tripleCost * subjectIds.length, // Must be >= minimum creation cost * number of triples\n      })\n      \n      if (tx?.hash) {\n        const receipt = await publicClient.waitForTransactionReceipt({\n          hash: tx.hash,\n        })\n        // Handle success\n      }\n    } catch (error) {\n      // Handle error\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"13d450d37d0680e6803cf06cc67d7316"},"Cost Considerations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Creation Cost"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum ETH required to create a Triple"),(0,r.kt)("li",{parentName:"ul"},"Retrieved via ",(0,r.kt)("inlineCode",{parentName:"li"},"getTripleCost()")),(0,r.kt)("li",{parentName:"ul"},"Includes protocol fee sent to treasury"),(0,r.kt)("li",{parentName:"ul"},"Must be included in transaction's ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," parameter"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Initial Deposit"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Any ETH sent above the creation cost"),(0,r.kt)("li",{parentName:"ul"},"Deposited into the positive vault"),(0,r.kt)("li",{parentName:"ul"},"Subject to entry fees")))),(0,r.kt)("p",null,"See also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/primitives"},"Primitives")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/130450d3-7d06-803e-9833-fff21c847507"},"EthMultiVault.sol"))))}p.isMDXComponent=!0}}]);