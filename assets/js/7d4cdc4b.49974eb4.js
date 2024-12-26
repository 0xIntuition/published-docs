"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[5575],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5206:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={title:"Create Atom",sidebar_position:1,slug:"/13d450d3-7d06-808a-b789-d45f3bc4de6e"},o=void 0,l={unversionedId:"Dev-Tools/Contract-Interactions/Create-Atom",id:"Dev-Tools/Contract-Interactions/Create-Atom",title:"Create Atom",description:"Atoms are the fundamental building blocks in the\xa0Intuition system, representing discrete units of data that\xa0can be anything from a single concept to a complex entity.  Each Atom is assigned a unique decentralized identifier (DID) and includes associated metadata, a wallet, and a vault.",source:"@site/docs/Dev-Tools/Contract-Interactions/Create-Atom.md",sourceDirName:"Dev-Tools/Contract-Interactions",slug:"/13d450d3-7d06-808a-b789-d45f3bc4de6e",permalink:"/landing/13d450d3-7d06-808a-b789-d45f3bc4de6e",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create Atom",sidebar_position:1,slug:"/13d450d3-7d06-808a-b789-d45f3bc4de6e"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/landing/13d450d3-7d06-805f-8fe7-e4f404436077"},next:{title:"Create Triple",permalink:"/landing/13d450d3-7d06-8093-83f1-d3e6c04ed153"}},s={},c=[{value:"Context",id:"13d450d37d0680cb8606cee57de0e77f",level:2},{value:"createAtom",id:"13d450d37d06806885a0ff8faf6be7fb",level:2},{value:"Parameters",id:"13d450d37d0680b6b9ded0103ae17922",level:3},{value:"Implementation",id:"13d450d37d06804f8f3af8c8f2438b58",level:3},{value:"createBatchAtom",id:"13d450d37d0680c39975e9ea69f009bf",level:2},{value:"Parameters",id:"13d450d37d068073b3a9e36d8a5930bf",level:3},{value:"Implementation",id:"13d450d37d06806b8ce3f4cd92117ee4",level:3},{value:"Cost Considerations",id:"13d450d37d0680ec944ef4688cb62235",level:2}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/primitives"},"Atoms")," are the fundamental building blocks in the\xa0Intuition system, representing discrete units of data that\xa0can be anything from a single concept to a complex entity.  Each Atom is assigned a unique decentralized identifier (DID) and includes associated metadata, a wallet, and a vault. "),(0,r.kt)("h2",{id:"13d450d37d0680cb8606cee57de0e77f"},"Context"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"createAtom")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"batchCreateAtom")," functions are part of the EthMultiVault contract, which manages the creation and management of Atoms and their associated vaults. When creating Atoms, the metadata is stored off-chain with only a URI reference stored on-chain. This design allows for maximum flexibility - developers can use any URI scheme and storage solution that best fits their needs."),(0,r.kt)("p",null,"For convenience, we provide a set of GraphQL mutations that help structure and publish Atom metadata following common schemas and best practices. These mutations will be continuously updated to support more schemas and improve interoperability. See our ",(0,r.kt)("a",{parentName:"p",href:"/13b450d3-7d06-8024-8632-dce27db91d15"},"Off-Chain Metadata Guide")," for details on using these recommended patterns."),(0,r.kt)("p",null,"The following guide will focus solely on the on-chain aspects of creating an Atom using a URI."),(0,r.kt)("h2",{id:"13d450d37d06806885a0ff8faf6be7fb"},"createAtom"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function createAtom(bytes calldata atomUri) external payable returns (uint256)\n")),(0,r.kt)("h3",{id:"13d450d37d0680b6b9ded0103ae17922"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"atomUri")," : The URI point to the Atom\u2019s metadata (typically stored off-chain)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," : Initial deposit into the Atom\u2019s multivault.  Must be \u2265 to the atom creation cost."),(0,r.kt)("li",{parentName:"ul"},"Returns: ",(0,r.kt)("inlineCode",{parentName:"li"},"uint256"),"  - Created atom vault ID")),(0,r.kt)("h3",{id:"13d450d37d06804f8f3af8c8f2438b58"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// useCreateAtom Hook\nimport { type GetContractReturnType } from 'viem'\nimport { base } from 'viem/chains'\nimport { useContractWriteAndWait } from './useContractWriteAndWait'\nimport { useMultivaultContract } from './useMultivaultContract'\n\nexport const useCreateAtom = () => {\n  const multivault = useMultivaultContract(\n    baseSepolia.id\n  ) as GetContractReturnType\n\n  return useContractWriteAndWait({\n    ...multivault,\n    functionName: 'createAtom',\n  })\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Usage Example\nconst {\n  writeAsync: writeCreateAtom,\n  awaitingWalletConfirmation,\n  awaitingOnChainConfirmation,\n} = useCreateAtom()\n\nasync function handleCreateAtom(atomData: string) {\n  if (!awaitingOnChainConfirmation && !awaitingWalletConfirmation && writeCreateAtom) {\n    try {\n      const tx = await writeCreateAtom({\n        address: MULTIVAULT_CONTRACT_ADDRESS,\n        abi: multivaultAbi,\n        functionName: 'createAtom',\n        args: [toHex(atomData)],\n        value: atomCost, // Must be >= minimum creation cost\n      })\n      \n      if (tx?.hash) {\n        const receipt = await publicClient.waitForTransactionReceipt({\n          hash: tx.hash,\n        })\n        // Handle success\n      }\n    } catch (error) {\n      // Handle error\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"13d450d37d0680c39975e9ea69f009bf"},"createBatchAtom"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function createAtomBatch(bytes[] calldata atomUris) external payable nonReentrant whenNotPaused returns (uint256[] memory)\n")),(0,r.kt)("h3",{id:"13d450d37d068073b3a9e36d8a5930bf"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"atomUris")," : The URIs point to the Atoms\u2019 metadata (typically stored off-chain)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," : Initial deposit into the Atom\u2019s multivault.  Must be \u2265 to the atom creation cost * length of atomUris.  This will get distributed evenly across all created atoms."),(0,r.kt)("li",{parentName:"ul"},"Returns ",(0,r.kt)("inlineCode",{parentName:"li"},"uint256[]")," - Created atoms\u2019 vault ID(s)")),(0,r.kt)("h3",{id:"13d450d37d06806b8ce3f4cd92117ee4"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// useBatchCreateAtom Hook\nimport { type GetContractReturnType } from 'viem'\nimport { base } from 'viem/chains'\nimport { useContractWriteAndWait } from './useContractWriteAndWait'\nimport { useMultivaultContract } from './useMultivaultContract'\n\nexport const useBatchCreateAtom = () => {\n  const multivault = useMultivaultContract(\n    base.id\n  ) as GetContractReturnType\n\n  return useContractWriteAndWait({\n    ...multivault,\n    functionName: 'createAtomBatch',\n  })\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Usage Example\nconst {\n  writeAsync: writeBatchCreateAtom,\n  awaitingWalletConfirmation,\n  awaitingOnChainConfirmation,\n} = useBatchCreateAtom()\n\nasync function handleBatchCreateAtom(atomUris: string[]) {\n    const value = BigInt(atomCost) * BigInt(atomUris.length)\n\n  if (!awaitingOnChainConfirmation && !awaitingWalletConfirmation && writeBatchCreateAtom) {\n    try {\n      const tx = await writeBatchCreateAtom({\n        address: MULTIVAULT_CONTRACT_ADDRESS,\n        abi: multivaultAbi,\n        functionName: 'createAtomBatch',\n        args: [atomUris.map(data => toHex(data))],\n        value: value, // Must be >= minimum creation cost * number of atoms\n      })\n      \n      if (tx?.hash) {\n        const receipt = await publicClient.waitForTransactionReceipt({\n          hash: tx.hash,\n        })\n        // Handle success\n      }\n    } catch (error) {\n      // Handle error\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"13d450d37d0680ec944ef4688cb62235"},"Cost Considerations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Creation Cost"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum ETH required to create an Atom"),(0,r.kt)("li",{parentName:"ul"},"Retrieved via ",(0,r.kt)("inlineCode",{parentName:"li"},"getAtomCost()")),(0,r.kt)("li",{parentName:"ul"},"Includes protocol fee sent to treasury"),(0,r.kt)("li",{parentName:"ul"},"Must be included in transaction's ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," parameter"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Initial Deposit"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Any ETH sent above the creation cost"),(0,r.kt)("li",{parentName:"ul"},"Becomes initial stake in the Atom's vault"),(0,r.kt)("li",{parentName:"ul"},"Subject to entry fees"),(0,r.kt)("li",{parentName:"ul"},"Grants fractional ownership in the vault")))),(0,r.kt)("p",null,"See also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/primitives"},"Primitives")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/130450d3-7d06-803e-9833-fff21c847507"},"EthMultiVault.sol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/13b450d3-7d06-8024-8632-dce27db91d15"},"Graphql Mutations"))))}m.isMDXComponent=!0}}]);