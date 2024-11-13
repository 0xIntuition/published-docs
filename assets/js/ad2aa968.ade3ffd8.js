"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[7026],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(f,l(l({ref:e},s),{},{components:n})):a.createElement(f,l({ref:e},s))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8957:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={title:"Getting Started",sidebar_position:62,slug:"/13d450d3-7d06-805f-8fe7-e4f404436077"},l=void 0,o={unversionedId:"Getting-Started",id:"Getting-Started",title:"Getting Started",description:"This guide walks through the steps needed to get started interacting with the Intuition contracts in a TypeScript/React setting. The guides following this page will assume that you\u2019ve completed this scaffolding and configuration.",source:"@site/docs/Getting-Started.md",sourceDirName:".",slug:"/13d450d3-7d06-805f-8fe7-e4f404436077",permalink:"/13d450d3-7d06-805f-8fe7-e4f404436077",draft:!1,tags:[],version:"current",sidebarPosition:62,frontMatter:{title:"Getting Started",sidebar_position:62,slug:"/13d450d3-7d06-805f-8fe7-e4f404436077"},sidebar:"tutorialSidebar",previous:{title:"Changelog",permalink:"/138450d3-7d06-8080-891e-fee908826cfe"}},d={},u=[{value:"Contract Addresses",id:"13d450d37d068040bea3f47413e8e3f0",level:2},{value:"Multivault ABI",id:"13d450d37d0680c5aaaed9a1141859b6",level:2},{value:"Scaffolding Contract Interactions",id:"13d450d37d06803aa5d0d186784fa4b8",level:2},{value:"useMultivaultContract Hook",id:"13d450d37d06808298b4d437037a6e26",level:3},{value:"Viem Scaffolding",id:"13d450d37d0680f7b536fbd0eae2cddd",level:2},{value:"Environment Variables",id:"13d450d37d0680a6877edc0bbcb9af83",level:3},{value:"Implementation",id:"13d450d37d0680a29ab1f4d1f5cd0ec9",level:3},{value:"Next Steps",id:"13d450d37d06800d8b08cdef2824bd8b",level:2}],s={toc:u};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide walks through the steps needed to get started interacting with the Intuition contracts in a TypeScript/React setting. The guides following this page will assume that you\u2019ve completed this scaffolding and configuration."),(0,i.kt)("h2",{id:"13d450d37d068040bea3f47413e8e3f0"},"Contract Addresses"),(0,i.kt)("p",null,"Intuition is currently deployed on Base Mainnet and Base Sepolia Testnet. You can find the chain information and contract addresses here:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Chain")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Chain ID")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Contract Address")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Type")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Explorer")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Base"),(0,i.kt)("td",{parentName:"tr",align:null},"8453"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x430BbF52503Bd4801E51182f4cB9f8F534225DE5")),(0,i.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://basescan.org/"},"https://basescan.org/"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Base Sepolia"),(0,i.kt)("td",{parentName:"tr",align:null},"84532"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x1A6950807E33d5bC9975067e6D6b5Ea4cD661665")),(0,i.kt)("td",{parentName:"tr",align:null},"Testnet"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://sepolia.basescan.org/"},"https://sepolia.basescan.org/"))))),(0,i.kt)("h2",{id:"13d450d37d0680c5aaaed9a1141859b6"},"Multivault ABI"),(0,i.kt)("p",null,"In addition to the contract address you\u2019ll need the EthMultivault ABI. The code block is too large to include in these docs, but we recommend the following approach:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"multivault.ts")," file in a path such as ",(0,i.kt)("inlineCode",{parentName:"li"},"app/lib/abis")),(0,i.kt)("li",{parentName:"ul"},"Export the ABI as a ",(0,i.kt)("inlineCode",{parentName:"li"},"const")," array:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const multivaultAbi = [\n    {...},\n    {...},\n]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Note:")," The actual ABI values are included inside the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"{...}"),"\xa0in the above example.")),(0,i.kt)("p",null,"You\u2019ll need to export with this structure to work with ",(0,i.kt)("inlineCode",{parentName:"p"},"viem")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"wagmi")," and to have type inference and ABI support. "),(0,i.kt)("p",null,"For a full example you can look at a reference implementation in our monorepo:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-ts/blob/main/apps/portal/app/lib/abis/multivault.ts"},"https://github.com/0xIntuition/intuition-ts/blob/main/apps/portal/app/lib/abis/multivault.ts"))),(0,i.kt)("h2",{id:"13d450d37d06803aa5d0d186784fa4b8"},"Scaffolding Contract Interactions"),(0,i.kt)("p",null,"Once you have the contract address and the ABI exported from a ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," file you\u2019re ready to scaffold the contract interactions."),(0,i.kt)("p",null,"The following guide focuses on what you need to start interacting with the ",(0,i.kt)("a",{parentName:"p",href:"/130450d3-7d06-803e-9833-fff21c847507"},"EthMultivault")," contract in a TypeScript context."),(0,i.kt)("h3",{id:"13d450d37d06808298b4d437037a6e26"},"useMultivaultContract Hook"),(0,i.kt)("p",null,"If you\u2019re working in a React app we have a hook that you can use to scaffold your contract interactions. This hook leverages ",(0,i.kt)("inlineCode",{parentName:"p"},"getContract")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"viem")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"usePublicClient")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"wagmi")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { multivaultAbi } from '@lib/abis/multivault'\nimport { getContract } from 'viem'\nimport { usePublicClient } from 'wagmi'\n\nexport const getMultivaultContractConfig = (contract?: string) => ({\n  address:\n    (contract as `0x${string}`) ||\n    (`0x1A6950807E33d5bC9975067e6D6b5Ea4cD661665` as `0x${string}`),\n  abi: multivaultAbi,\n})\n\nexport function useMultivaultContract(contract?: string, chainId?: number) {\n  const publicClient = usePublicClient({ chainId })\n\n  if (!publicClient) {\n    console.error('No publicClient found.')\n    return null\n  }\n\n  return getContract({\n    ...getMultivaultContractConfig(\n      contract ||\n        (`0x1A6950807E33d5bC9975067e6D6b5Ea4cD661665` as `0x${string}`),\n    ),\n    client: {\n      public: publicClient,\n    },\n  })\n}\n\n")),(0,i.kt)("p",null,"Once you\u2019ve created this hook you\u2019re then able to use it in both contract reads and writes.  Here\u2019s a snippet showing how you can use the hook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useMultivaultContract } from './useMultivaultContract'\n\nexport const useCreateAtom = () => {\n  const multivault = useMultivaultContract(\n    baseSepolia.id\n  ) as GetContractReturnType\n\n  return useContractWriteAndWait({\n    ...multivault,\n    functionName: 'createAtom',\n  })\n}\n")),(0,i.kt)("p",null,"The specific contract interactions are covered in more detail in each page, such as ",(0,i.kt)("a",{parentName:"p",href:"/13d450d3-7d06-808a-b789-d45f3bc4de6e"},"Create Atom"),"."),(0,i.kt)("h2",{id:"13d450d37d0680f7b536fbd0eae2cddd"},"Viem Scaffolding"),(0,i.kt)("p",null,"We recommend additional ",(0,i.kt)("inlineCode",{parentName:"p"},"viem")," configuration in addition to the EthMultiVault contract scaffolding. "),(0,i.kt)("h3",{id:"13d450d37d0680a6877edc0bbcb9af83"},"Environment Variables"),(0,i.kt)("p",null,"This guide and reference implementation include references to environment variables that you\u2019ll need to set in your app\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),". You can rename these to whatever name you prefer, but you\u2019ll need to ensure that the name matches."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# .env\n\nALCHEMY_BASE_SEPOLIA_RPC_URL=\nALCHEMY_BASE_RPC_URL=\n")),(0,i.kt)("p",null,"You can set the contract address into a constant as well, such as:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MULTIVAULT_CONTRACT_ADDRESS")),(0,i.kt)("p",null,"We recommend taking this approach for reusability across your app. This example also includes a ",(0,i.kt)("inlineCode",{parentName:"p"},"CURRENT_ENV")," variable that is set to your deployment environment (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"'development'"),") to set the proper RPC URL in the Public Client configuration."),(0,i.kt)("h3",{id:"13d450d37d0680a29ab1f4d1f5cd0ec9"},"Implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { multivaultAbi } from '@lib/abis/multivault'\nimport {\n  CURRENT_ENV,\n  MULTIVAULT_CONTRACT_ADDRESS,\n} from 'app/consts'\nimport {\n  createPublicClient,\n  getContract,\n  http,\n  PublicClient,\n  type Abi,\n} from 'viem'\nimport { base, baseSepolia } from 'viem/chains'\n\nexport const publicClient: PublicClient = createPublicClient({\n  batch: {\n    multicall: true,\n  },\n  chain: CURRENT_ENV === 'development' ? baseSepolia : base,\n  transport: http(\n    CURRENT_ENV === 'development'\n      ? process.env.ALCHEMY_BASE_SEPOLIA_RPC_URL\n      : process.env.ALCHEMY_BASE_RPC_URL,\n    },\n  ),\n}) as PublicClient\n\nexport const getMultivaultContract = getContract({\n  address: MULTIVAULT_CONTRACT_ADDRESS as `0x${string}`,\n  abi: multivaultAbi as Abi,\n  client: {\n    public: publicClient,\n  },\n})\n\nexport const createMultiVaultContract = (contractAddress: string) =>\n  ({\n    address: contractAddress as `0x${string}`,\n    abi: multivaultAbi as Abi,\n  }) as const\n\nexport const multiVaultContract = {\n  address: MULTIVAULT_CONTRACT_ADDRESS as `0x${string}`,\n  abi: multivaultAbi as Abi,\n} as const\n")),(0,i.kt)("p",null,"For a full example you can look at a reference implementation in our monorepo:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-ts/blob/main/apps/portal/app/.server/viem.ts"},"https://github.com/0xIntuition/intuition-ts/blob/main/apps/portal/app/.server/viem.ts"))),(0,i.kt)("h2",{id:"13d450d37d06800d8b08cdef2824bd8b"},"Next Steps"),(0,i.kt)("p",null,"Once you\u2019ve added this scaffolding and configuration to your application you\u2019ll have what you need to start interacting onchain Intuition primitives. Each contract interaction page guide assumes that you\u2019ll have already completed this scaffolding and have the ",(0,i.kt)("inlineCode",{parentName:"p"},"useMultivaultContract")," hook set up."),(0,i.kt)("p",null,"See also:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/13d450d3-7d06-808a-b789-d45f3bc4de6e"},"Create Atom")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/13d450d3-7d06-8093-83f1-d3e6c04ed153"},"Create Triple")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/13d450d3-7d06-8073-99f6-cd3de716ace9"},"Attest Atom")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/13d450d3-7d06-8093-a0ac-cadbfc67ba65"},"Attest Triple"))))}p.isMDXComponent=!0}}]);