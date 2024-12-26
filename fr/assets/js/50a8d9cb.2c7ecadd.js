"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[1584],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>p});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=c(a),p=r,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return a?n.createElement(f,o(o({ref:e},m),{},{components:a})):n.createElement(f,o({ref:e},m))}));function p(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9928:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={title:"Create Atom",sidebar_position:1,slug:"/atom-create2"},o=void 0,l={unversionedId:"Dev-Tools/Contract-Interactions/atom-create2",id:"Dev-Tools/Contract-Interactions/atom-create2",title:"Create Atom",description:"Atoms are the fundamental building blocks in the\xa0Intuition system, representing discrete units of data that\xa0can be anything from a single concept to a complex entity.  Each Atom is assigned a unique decentralized identifier (DID) and includes associated metadata, a wallet, and a vault.",source:"@site/docs/Dev-Tools/Contract-Interactions/atom-create2.md",sourceDirName:"Dev-Tools/Contract-Interactions",slug:"/atom-create2",permalink:"/fr/atom-create2",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create Atom",sidebar_position:1,slug:"/atom-create2"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/fr/started-dev"},next:{title:"Create Triple",permalink:"/fr/triple-create2"}},s={},c=[{value:"Context",id:"13d450d37d0680cb8606cee57de0e77f",level:2},{value:"createAtom",id:"13d450d37d06806885a0ff8faf6be7fb",level:2},{value:"Parameters",id:"13d450d37d0680b6b9ded0103ae17922",level:3},{value:"Implementation",id:"13d450d37d06804f8f3af8c8f2438b58",level:3},{value:"createBatchAtom",id:"13d450d37d0680c39975e9ea69f009bf",level:2},{value:"Parameters",id:"13d450d37d068073b3a9e36d8a5930bf",level:3},{value:"Implementation",id:"13d450d37d06806b8ce3f4cd92117ee4",level:3},{value:"Cost Considerations",id:"13d450d37d0680ec944ef4688cb62235",level:2}],m={toc:c};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/primitives"},"Atoms")," are the fundamental building blocks in the\xa0Intuition system, representing discrete units of data that\xa0can be anything from a single concept to a complex entity.  Each Atom is assigned a unique decentralized identifier (DID) and includes associated metadata, a wallet, and a vault. "),(0,r.kt)("h2",{id:"13d450d37d0680cb8606cee57de0e77f"},"Context"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"createAtom")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"batchCreateAtom")," functions are part of the EthMultiVault contract, which manages the creation and management of Atoms and their associated vaults. When creating Atoms, the metadata is stored off-chain with only a URI reference stored on-chain. This design allows for maximum flexibility - developers can use any URI scheme and storage solution that best fits their needs."),(0,r.kt)("p",null,"For convenience, we provide a set of GraphQL mutations that help structure and publish Atom metadata following common schemas and best practices. These mutations will be continuously updated to support more schemas and improve interoperability. See our ",(0,r.kt)("a",{parentName:"p",href:"/mutations2"},"Off-Chain Metadata Guide")," for details on using these recommended patterns."),(0,r.kt)("p",null,"The following guide will focus solely on the on-chain aspects of creating an Atom using a URI."),(0,r.kt)("h2",{id:"13d450d37d06806885a0ff8faf6be7fb"},"createAtom"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function createAtom(bytes calldata atomUri) external payable returns (uint256)\n")),(0,r.kt)("h3",{id:"13d450d37d0680b6b9ded0103ae17922"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"atomUri")," : The URI point to the Atom\u2019s metadata (typically stored off-chain)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," : Initial deposit into the Atom\u2019s multivault.  Must be \u2265 to the atom creation cost."),(0,r.kt)("li",{parentName:"ul"},"Returns: ",(0,r.kt)("inlineCode",{parentName:"li"},"uint256"),"  - Created atom vault ID")),(0,r.kt)("h3",{id:"13d450d37d06804f8f3af8c8f2438b58"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// useCreateAtom Hook\nimport { type GetContractReturnType } from 'viem'\nimport { base } from 'viem/chains'\nimport { useContractWriteAndWait } from './useContractWriteAndWait'\nimport { useMultivaultContract } from './useMultivaultContract'\n\nexport const useCreateAtom = () => {\n  const multivault = useMultivaultContract(\n    baseSepolia.id\n  ) as GetContractReturnType\n\n  return useContractWriteAndWait({\n    ...multivault,\n    functionName: 'createAtom',\n  })\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Usage Example\nconst {\n  writeAsync: writeCreateAtom,\n  awaitingWalletConfirmation,\n  awaitingOnChainConfirmation,\n} = useCreateAtom()\n\nasync function handleCreateAtom(atomData: string) {\n  if (!awaitingOnChainConfirmation && !awaitingWalletConfirmation && writeCreateAtom) {\n    try {\n      const tx = await writeCreateAtom({\n        address: MULTIVAULT_CONTRACT_ADDRESS,\n        abi: multivaultAbi,\n        functionName: 'createAtom',\n        args: [toHex(atomData)],\n        value: atomCost, // Must be >= minimum creation cost\n      })\n      \n      if (tx?.hash) {\n        const receipt = await publicClient.waitForTransactionReceipt({\n          hash: tx.hash,\n        })\n        // Handle success\n      }\n    } catch (error) {\n      // Handle error\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"13d450d37d0680c39975e9ea69f009bf"},"createBatchAtom"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function createAtomBatch(bytes[] calldata atomUris) external payable nonReentrant whenNotPaused returns (uint256[] memory)\n")),(0,r.kt)("h3",{id:"13d450d37d068073b3a9e36d8a5930bf"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"atomUris")," : The URIs point to the Atoms\u2019 metadata (typically stored off-chain)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," : Initial deposit into the Atom\u2019s multivault.  Must be \u2265 to the atom creation cost * length of atomUris.  This will get distributed evenly across all created atoms."),(0,r.kt)("li",{parentName:"ul"},"Returns ",(0,r.kt)("inlineCode",{parentName:"li"},"uint256[]")," - Created atoms\u2019 vault ID(s)")),(0,r.kt)("h3",{id:"13d450d37d06806b8ce3f4cd92117ee4"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// useBatchCreateAtom Hook\nimport { type GetContractReturnType } from 'viem'\nimport { base } from 'viem/chains'\nimport { useContractWriteAndWait } from './useContractWriteAndWait'\nimport { useMultivaultContract } from './useMultivaultContract'\n\nexport const useBatchCreateAtom = () => {\n  const multivault = useMultivaultContract(\n    base.id\n  ) as GetContractReturnType\n\n  return useContractWriteAndWait({\n    ...multivault,\n    functionName: 'createAtomBatch',\n  })\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Usage Example\nconst {\n  writeAsync: writeBatchCreateAtom,\n  awaitingWalletConfirmation,\n  awaitingOnChainConfirmation,\n} = useBatchCreateAtom()\n\nasync function handleBatchCreateAtom(atomUris: string[]) {\n    const value = BigInt(atomCost) * BigInt(atomUris.length)\n\n  if (!awaitingOnChainConfirmation && !awaitingWalletConfirmation && writeBatchCreateAtom) {\n    try {\n      const tx = await writeBatchCreateAtom({\n        address: MULTIVAULT_CONTRACT_ADDRESS,\n        abi: multivaultAbi,\n        functionName: 'createAtomBatch',\n        args: [atomUris.map(data => toHex(data))],\n        value: value, // Must be >= minimum creation cost * number of atoms\n      })\n      \n      if (tx?.hash) {\n        const receipt = await publicClient.waitForTransactionReceipt({\n          hash: tx.hash,\n        })\n        // Handle success\n      }\n    } catch (error) {\n      // Handle error\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"13d450d37d0680ec944ef4688cb62235"},"Cost Considerations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Creation Cost"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum ETH required to create an Atom"),(0,r.kt)("li",{parentName:"ul"},"Retrieved via ",(0,r.kt)("inlineCode",{parentName:"li"},"getAtomCost()")),(0,r.kt)("li",{parentName:"ul"},"Includes protocol fee sent to treasury"),(0,r.kt)("li",{parentName:"ul"},"Must be included in transaction's ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," parameter"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Initial Deposit"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Any ETH sent above the creation cost"),(0,r.kt)("li",{parentName:"ul"},"Becomes initial stake in the Atom's vault"),(0,r.kt)("li",{parentName:"ul"},"Subject to entry fees"),(0,r.kt)("li",{parentName:"ul"},"Grants fractional ownership in the vault")))),(0,r.kt)("p",null,"See also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/primitives"},"Primitives")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ethmulti-2"},"EthMultiVault.sol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mutations2"},"Graphql Mutations"))))}u.isMDXComponent=!0}}]);