"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[7692],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,o(o({ref:e},u),{},{components:n})):a.createElement(f,o({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},203:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Retrieve Vault Details",sidebar_position:5,slug:"/retrieve-vault"},o=void 0,l={unversionedId:"Dev-Tools/Contract-Interactions/retrieve-vault",id:"Dev-Tools/Contract-Interactions/retrieve-vault",title:"Retrieve Vault Details",description:"The Intuition protocol's EthMultiVault contract manages complex state involving Atoms, Triples, and their associated vaults. When interacting with these primitives we recommend retrieving the state data directly from the EthMultiVault contract.",source:"@site/docs/Dev-Tools/Contract-Interactions/retrieve-vault.md",sourceDirName:"Dev-Tools/Contract-Interactions",slug:"/retrieve-vault",permalink:"/fr/retrieve-vault",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Retrieve Vault Details",sidebar_position:5,slug:"/retrieve-vault"},sidebar:"tutorialSidebar",previous:{title:"Attest Triple",permalink:"/fr/attest-triple2"},next:{title:"GraphQL Onboarding",permalink:"/fr/168450d3-7d06-80f4-b557-e66c7fb30c12"}},s={},c=[{value:"Implementation",id:"13d450d37d068048bad6ebb30071d4b5",level:2},{value:"Key Functions",id:"13d450d37d06808c97f5e22aff6cb9d7",level:3},{value:"Usage Example",id:"13d450d37d06807c89e3deacb0c1983c",level:2}],u={toc:c};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Intuition protocol's ",(0,r.kt)("a",{parentName:"p",href:"/ethmulti-2"},"EthMultiVault")," contract manages complex state involving ",(0,r.kt)("a",{parentName:"p",href:"/primitives-atoms"},"Atoms"),", ",(0,r.kt)("a",{parentName:"p",href:"/pimitives-triple"},"Triples"),", and their associated vaults. When interacting with these primitives we recommend retrieving the state data directly from the EthMultiVault contract."),(0,r.kt)("p",null,"We utilize multicall operations that batch multiple read-only contract calls into a single request. This approach significantly reduces RPC calls and provides data you\u2019ll need for contract interactions, such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"atomCost")," that is referenced in the ",(0,r.kt)("a",{parentName:"p",href:"/atom-create2"},"Create Atom")," guide."),(0,r.kt)("h2",{id:"13d450d37d068048bad6ebb30071d4b5"},"Implementation"),(0,r.kt)("p",null,"This implementation guide assumes that you\u2019ve completed the steps in the ",(0,r.kt)("a",{parentName:"p",href:"/started-dev"},"Contract Interactions: Getting Started")," guide. Steps for creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"createMultivaultContract")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"publicClient")," referenced in this implementation example can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/started-dev"},"Contract Interactions: Getting Started")," guide."),(0,r.kt)("p",null,"We recommend creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"multivault.ts")," that includes the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"\n// createMultiVaultcontract\nconst multiVaultContract = createMultiVaultContract(contract)\n\n\n// Core multicall configuration\nconst coreContractConfigs = [\n  {\n    ...multiVaultContract,\n    functionName: 'vaults',\n    args: [vid],\n  },\n  {\n    ...multiVaultContract, \n    functionName: 'currentSharePrice',\n    args: [vid],\n  },\n  // ... additional calls\n]\n\n// Execute multicall\nconst resp: MulticallResponse[] = await publicClient.multicall({\n  contracts: coreContractConfigs,\n})\n")),(0,r.kt)("p",null,"Here is a full example of the multicall pattern used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"getMultivaultConfig")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function getMultiVaultConfig(contract: string) {\n  const multiVaultContract = createMultiVaultContract(contract)\n\n  const coreContractConfigs = [\n    {\n      ...multiVaultContract,\n      functionName: 'generalConfig',\n      args: [],\n    },\n    {\n      ...multiVaultContract,\n      functionName: 'vaultFees',\n      args: [0],\n    },\n    {\n      ...multiVaultContract,\n      functionName: 'atomConfig',\n      args: [],\n    },\n  ]\n\n  const resp: MulticallResponse[] = await publicClient.multicall({\n    contracts: coreContractConfigs,\n  })\n\n  const admin = resp[0].result[0] as `0x${string}`\n  const protocol_vault = resp[0].result[1] as `0x${string}`\n  const fee_denominator = resp[0].result[2] as bigint\n  const formatted_fee_denominator = formatUnits(fee_denominator, 18)\n  const min_deposit = resp[0].result[3] as bigint\n  const formatted_min_deposit = formatUnits(min_deposit, 18)\n  const min_share = resp[0].result[4] as bigint\n  const formatted_min_share = formatUnits(min_share, 18)\n  const entry_fee = resp[1].result[0] as bigint\n  const formatted_entry_fee = formatUnits(entry_fee, 18)\n  const exit_fee = resp[1].result[1] as bigint\n  const formatted_exit_fee = formatUnits(exit_fee, 18)\n  const protocol_fee = resp[1].result[2] as bigint\n  const formatted_protocol_fee = formatUnits(protocol_fee, 18)\n  const atom_cost = resp[2].result[0] as bigint\n  const formatted_atom_cost = formatUnits(atom_cost, 18)\n  const atom_creation_fee = resp[2].result[1] as bigint\n  const formatted_atom_creation_fee = formatUnits(atom_creation_fee, 18)\n\n  return {\n    admin,\n    protocol_vault,\n    fee_denominator: fee_denominator.toString(),\n    formatted_fee_denominator,\n    min_deposit: min_deposit.toString(),\n    formatted_min_deposit,\n    min_share: min_share.toString(),\n    formatted_min_share,\n    entry_fee: entry_fee.toString(),\n    formatted_entry_fee,\n    exit_fee: exit_fee.toString(),\n    formatted_exit_fee,\n    protocol_fee: protocol_fee.toString(),\n    formatted_protocol_fee,\n    atom_cost: atom_cost.toString(),\n    formatted_atom_cost,\n    atom_creation_fee: atom_creation_fee.toString(),\n    formatted_atom_creation_fee,\n  } as MultivaultConfig\n}\n")),(0,r.kt)("p",null,"For a full example of how we implement all of our EthMultiVault multicalls you can look at a reference implementation in our monorepo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- [https://github.com/0xIntuition/intuition-ts/blob/main/apps/portal/app/.server/multivault.ts](https://github.com/0xIntuition/intuition-ts/blob/main/apps/portal/app/.server/multivault.ts)\n")),(0,r.kt)("h3",{id:"13d450d37d06808c97f5e22aff6cb9d7"},"Key Functions"),(0,r.kt)("p",null,"We use this multicall pattern to retrieve configuration that we\u2019re able to use throughout the app:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getVaultDetails"),": Retrieves comprehensive\xa0vault information including:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Total assets and conviction"),(0,r.kt)("li",{parentName:"ul"},"Current share price"),(0,r.kt)("li",{parentName:"ul"},"Fee configurations"),(0,r.kt)("li",{parentName:"ul"},"User-specific positions (when wallet\xa0address provided)"),(0,r.kt)("li",{parentName:"ul"},"Counter-vault details (for\xa0Triples)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getMultiVaultConfig"),": Retrieves global protocol configuration including:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fee structures"),(0,r.kt)("li",{parentName:"ul"},"Minimum\xa0deposits"),(0,r.kt)("li",{parentName:"ul"},"Protocol admin addresses")))),(0,r.kt)("h2",{id:"13d450d37d06807c89e3deacb0c1983c"},"Usage Example"),(0,r.kt)("p",null,"The full ",(0,r.kt)("inlineCode",{parentName:"p"},"getVaultDetails")," function follows the same pattern used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"getMultiVaultConfig")," example but is too large to include in the docs. We recommend looking at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xIntuition/intuition-ts/blob/main/apps/portal/app/.server/multivault.ts"},"https://github.com/0xIntuition/intuition-ts/blob/main/apps/portal/app/.server/multivault.ts")," for a full reference implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Fetch vault and countervault details with user positions:\nconst vaultDetails = await getVaultDetails(\n  MULTIVAULT_CONTRACT_ADDRESS,\n  vaultId,\n  userWallet,\n  counterVaultId\n)\n\n// Access formatted values such as atom_cost and triple_cost\nconsole.log({\n  atomCost: vaultDetails.atom_cost,\n  tripleCost: vaultDetails.triple_cost,\n})\n")),(0,r.kt)("p",null,"See also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/started-dev"},"Contract Interactions: Getting Started")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ethmulti-2"},"EthMultivault.sol"))))}p.isMDXComponent=!0}}]);