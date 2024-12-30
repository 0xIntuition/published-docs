"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[7597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Create Triple",sidebar_position:2,slug:"/create-triple"},l=void 0,o={unversionedId:"Contract-Interactions/create-triple",id:"Contract-Interactions/create-triple",title:"Create Triple",description:"[Problem Internal Link]\xa0are higher-order\xa0structures in the Intuition system, used to define relationships between Atoms. Each Triple consists of three components\xa0- Subject, Predicate, and Object - all\xa0represented as Atoms, enabling\xa0precise, machine-readable representations of data relationships.",source:"@site/docs/dev/Contract-Interactions/create-triple.md",sourceDirName:"Contract-Interactions",slug:"/create-triple",permalink:"/fr/dev/create-triple",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Create Triple",sidebar_position:2,slug:"/create-triple"},sidebar:"contractsSidebar",previous:{title:"Create Atom",permalink:"/fr/dev/create-atom"},next:{title:"Attest Atom",permalink:"/fr/dev/attest-atom"}},s={},c=[{value:"<strong>Context</strong>",id:"163450d37d0681c693ddfed4e05b43ed",level:2},{value:"createTriple",id:"163450d37d0681eb95c7f31702a7e4d4",level:2},{value:"Parameters",id:"163450d37d0681818594c5350851e45b",level:3},{value:"Implementation",id:"163450d37d06818d935acf06f6887b54",level:3},{value:"createBatchTriple",id:"163450d37d0681d0b3e4e04552c30a81",level:2},{value:"Parameters",id:"163450d37d06817caa17cc7944b9d021",level:3},{value:"Implementation",id:"163450d37d06814cb2aec611659ccabf",level:3},{value:"Cost Considerations",id:"163450d37d068152b30eedb5e73abff0",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[Problem Internal Link]"),"\xa0are higher-order\xa0structures in the Intuition system, used to define relationships between Atoms. Each Triple consists of three components\xa0- Subject, Predicate, and Object - all\xa0represented as Atoms, enabling\xa0precise, machine-readable representations of data relationships."),(0,r.kt)("h2",{id:"163450d37d0681c693ddfed4e05b43ed"},(0,r.kt)("strong",{parentName:"h2"},"Context")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"createTriple"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"batchCreateTriple"),"\xa0functions are part of the ",(0,r.kt)("strong",{parentName:"p"},"[Problem Internal Link]")," contract, which manages the creation and relationships between Atoms through Semantic Triples. When creating\xa0Triples, each component must reference\xa0existing Atom vault IDs.   The\xa0Triple structure enables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Many-to-one attestations"),(0,r.kt)("li",{parentName:"ul"},"Positive and negative signaling through triple vaults"),(0,r.kt)("li",{parentName:"ul"},"Flat data structures for optimal\xa0scalability")),(0,r.kt)("p",null,"For\xa0example, a Triple might represent:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Subject:\xa0"Bob" (Atom ID: "1")'),(0,r.kt)("li",{parentName:"ul"},'Predicate: "is" (Atom ID: "2")'),(0,r.kt)("li",{parentName:"ul"},'Object:\xa0"Trustworthy" (Atom ID: "3")')),(0,r.kt)("h2",{id:"163450d37d0681eb95c7f31702a7e4d4"},"createTriple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function createTriple(\n    uint256 subjectId,\n    uint256 predicateId,\n    uint256 objectId\n) external payable nonReentrant whenNotPaused returns (uint256)\n")),(0,r.kt)("h3",{id:"163450d37d0681818594c5350851e45b"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subjectId"),": vault ID of the Atom representing the subject"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"predicateId"),": vault ID of the Atom representing the predicate/relationship"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"objectId"),": vault ID of the\xa0Atom representing the object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," : Initial deposit into the Triple\u2019s positive multivault.  Must be \u2265 to the triple creation cost."),(0,r.kt)("li",{parentName:"ul"},"Returns: ",(0,r.kt)("inlineCode",{parentName:"li"},"uint256"),"  - Created triple vault ID")),(0,r.kt)("h3",{id:"163450d37d06818d935acf06f6887b54"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// useCreateTriple Hook\nimport { type GetContractReturnType } from 'viem'\nimport { base } from 'viem/chains'\nimport { useContractWriteAndWait } from './useContractWriteAndWait'\nimport { useMultivaultContract } from './useMultivaultContract'\n\nexport const useCreateTriple = () => {\n  const multivault = useMultivaultContract(\n    base.id\n  ) as GetContractReturnType\n\n  return useContractWriteAndWait({\n    ...multivault,\n    functionName: 'createTriple',\n  })\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Usage Example\nconst {\n  writeAsync: writeCreateTriple,\n  awaitingWalletConfirmation,\n  awaitingOnChainConfirmation,\n} = useCreateTriple()\n\nasync function handleCreateTriple(subjectId: string, predicateId: string, objectId: string) {\n  if (!awaitingOnChainConfirmation && !awaitingWalletConfirmation && writeCreateTriple) {\n    try {\n      const tx = await writeCreateTriple({\n        address: MULTIVAULT_CONTRACT_ADDRESS,\n        abi: multivaultAbi,\n        functionName: 'createTriple',\n        args: [BigInt(subjectId), BigInt(predicateId), BigInt(objectId)],\n        value: tripleCost, // Must be >= minimum creation cost\n      })\n      \n      if (tx?.hash) {\n        const receipt = await publicClient.waitForTransactionReceipt({\n          hash: tx.hash,\n        })\n        // Handle success\n      }\n    } catch (error) {\n      // Handle error\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"163450d37d0681d0b3e4e04552c30a81"},"createBatchTriple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function createTripleBatch(\n    uint256[] calldata subjectIds,\n    uint256[] calldata predicateIds,\n    uint256[] calldata objectIds\n) external payable nonReentrant whenNotPaused returns (uint256[] memory)\n")),(0,r.kt)("h3",{id:"163450d37d06817caa17cc7944b9d021"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subjectIds"),": vault ID(s) of the Atom representing the subjects"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"predicateIds"),": vault ID(s) of the Atom representing the predicate/relationships"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"objectIds"),": vault ID(s) of the\xa0Atom representing the objects"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," : Initial deposit into the triples\u2019 multivaults.  Must be \u2265 to the atom creation cost * length of triples.  This will get distributed evenly across all created triples."),(0,r.kt)("li",{parentName:"ul"},"Returns ",(0,r.kt)("inlineCode",{parentName:"li"},"uint256[]")," - Created triples\u2019 vault ID(s)")),(0,r.kt)("h3",{id:"163450d37d06814cb2aec611659ccabf"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// useBatchCreateTriple Hook\nimport { type GetContractReturnType } from 'viem'\nimport { base } from 'viem/chains'\nimport { useContractWriteAndWait } from './useContractWriteAndWait'\nimport { useMultivaultContract } from './useMultivaultContract'\n\nexport const useBatchCreateTriple = () => {\n  const multivault = useMultivaultContract(\n    base.id\n  ) as GetContractReturnType\n\n  return useContractWriteAndWait({\n    ...multivault,\n    functionName: 'createTripleBatch',\n  })\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Usage Example\nconst {\n  writeAsync: writeBatchCreateTriple,\n  awaitingWalletConfirmation,\n  awaitingOnChainConfirmation,\n} = useBatchCreateTriple()\n\nasync function handleBatchCreateTriple(\n  subjectIds: string[], \n  predicateIds: string[], \n  objectIds: string[]\n) {\n  const value = BigInt(tripleValue) * BigInt(subjectIds.length)\n  if (!awaitingOnChainConfirmation && !awaitingWalletConfirmation && writeBatchCreateTriple) {\n    try {\n      const tx = await writeBatchCreateTriple({\n        address: MULTIVAULT_CONTRACT_ADDRESS,\n        abi: multivaultAbi,\n        functionName: 'createTripleBatch',\n        args: [\n          subjectIds.map(BigInt),\n              predicateIds.map(BigInt),\n              objectIds.map(BigInt),\n        ],\n        value: tripleCost * subjectIds.length, // Must be >= minimum creation cost * number of triples\n      })\n      \n      if (tx?.hash) {\n        const receipt = await publicClient.waitForTransactionReceipt({\n          hash: tx.hash,\n        })\n        // Handle success\n      }\n    } catch (error) {\n      // Handle error\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"163450d37d068152b30eedb5e73abff0"},"Cost Considerations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Creation Cost"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum ETH required to create a Triple"),(0,r.kt)("li",{parentName:"ul"},"Retrieved via ",(0,r.kt)("inlineCode",{parentName:"li"},"getTripleCost()")),(0,r.kt)("li",{parentName:"ul"},"Includes protocol fee sent to treasury"),(0,r.kt)("li",{parentName:"ul"},"Must be included in transaction's ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," parameter"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Initial Deposit"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Any ETH sent above the creation cost"),(0,r.kt)("li",{parentName:"ul"},"Deposited into the positive vault"),(0,r.kt)("li",{parentName:"ul"},"Subject to entry fees")))),(0,r.kt)("p",null,"See also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Problem Internal Link]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Problem Internal Link]"))))}u.isMDXComponent=!0}}]);