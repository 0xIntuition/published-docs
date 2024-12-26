"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[9975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,f=u["".concat(s,".").concat(p)]||u[p]||c[p]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"Attest Atom",sidebar_position:3,slug:"/13d450d3-7d06-8073-99f6-cd3de716ace9"},o=void 0,l={unversionedId:"Dev-Tools/Contract-Interactions/Attest-Atom",id:"Dev-Tools/Contract-Interactions/Attest-Atom",title:"Attest Atom",description:"Attestations allow users to signal support for Atoms by depositing ETH into their associated vaults. Each deposit represents a stake in the Atom's relevance and validity, with the ability to redeem these stakes later.",source:"@site/docs/Dev-Tools/Contract-Interactions/Attest-Atom.md",sourceDirName:"Dev-Tools/Contract-Interactions",slug:"/13d450d3-7d06-8073-99f6-cd3de716ace9",permalink:"/landing/fr/landing/13d450d3-7d06-8073-99f6-cd3de716ace9",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Attest Atom",sidebar_position:3,slug:"/13d450d3-7d06-8073-99f6-cd3de716ace9"},sidebar:"tutorialSidebar",previous:{title:"Create Triple",permalink:"/landing/fr/landing/13d450d3-7d06-8093-83f1-d3e6c04ed153"},next:{title:"Attest Triple",permalink:"/landing/fr/landing/13d450d3-7d06-8093-a0ac-cadbfc67ba65"}},s={},d=[{value:"Context",id:"13d450d37d06805499d6ffb84e626e85",level:2},{value:"depositAtom",id:"13d450d37d0680e9b5b1c959eb59ed04",level:2},{value:"Parameters",id:"13d450d37d0680cea9b1e194b46bdbe7",level:3},{value:"Implementation",id:"13d450d37d068087b005c12da094f035",level:3},{value:"redeemAtom",id:"13d450d37d06809cb2c3ef9aeb248f88",level:2},{value:"Parameters",id:"13d450d37d0680eea30ee394775887fa",level:3},{value:"Implementation",id:"13d450d37d0680b18e38e6d4d821ada7",level:3},{value:"Cost Considerations",id:"13d450d37d0680828a1ae1a2cd5c193e",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Attestations allow users to signal support for Atoms by depositing ETH into their associated vaults. Each deposit represents a stake in the Atom's relevance and validity, with the ability to redeem these stakes later."),(0,r.kt)("h2",{id:"13d450d37d06805499d6ffb84e626e85"},"Context"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"depositAtom")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"redeemAtom")," functions are part of the EthMultiVault contract, which manages the staking and signaling mechanisms for Atoms. When attesting to an Atom, users deposit ETH into the Atom's vault, receiving shares proportional to their deposit. These shares can later be redeemed to withdraw the original deposit plus any accrued rewards or minus any fees."),(0,r.kt)("h2",{id:"13d450d37d0680e9b5b1c959eb59ed04"},"depositAtom"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function depositAtom(\n    address receiver,\n    uint256 id\n) external payable nonReentrant whenNotPaused returns (uint256)\n")),(0,r.kt)("h3",{id:"13d450d37d0680cea9b1e194b46bdbe7"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"receiver"),": Address to receive the vault shares"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": Vault ID of the Atom"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": Amount of ETH to deposit"),(0,r.kt)("li",{parentName:"ul"},"Returns: ",(0,r.kt)("inlineCode",{parentName:"li"},"uint256")," - Amount of shares received")),(0,r.kt)("h3",{id:"13d450d37d068087b005c12da094f035"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// useDepositAtom Hook\nimport { type GetContractReturnType } from 'viem'\nimport { base } from 'viem/chains'\n\nimport { useContractWriteAndWait } from './useContractWriteAndWait'\nimport { useMultivaultContract } from './useMultivaultContract'\n\nexport const useDepositAtom = () => {\n  const multivault = useMultivaultContract(\n    base.id,\n  ) as GetContractReturnType\n\n  return useContractWriteAndWait({\n    ...multivault,\n    functionName: 'depositAtom',\n  })\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Usage Example\nconst {\n  writeAsync: writeDepositAtom,\n  awaitingWalletConfirmation,\n  awaitingOnChainConfirmation,\n} = useDepositAtom()\n\nasync function handleDepositAtom(atomId: string, amount: bigint) {\n  if (\n    !awaitingOnChainConfirmation &&\n    !awaitingWalletConfirmation &&\n    writeDepositAtom\n  ) {\n    try {\n      const tx = await writeDepositAtom({\n        address: MULTIVAULT_CONTRACT_ADDRESS,\n        abi: multivaultAbi,\n        functionName: 'depositAtom',\n        args: [address, BigInt(atomId)],\n        value: amount,\n      })\n\n      if (tx?.hash) {\n        const receipt = await publicClient.waitForTransactionReceipt({\n          hash: tx.hash,\n        })\n        // Handle success\n      }\n    } catch (error) {\n      // Handle error\n    }\n  }\n}\n\n")),(0,r.kt)("h2",{id:"13d450d37d06809cb2c3ef9aeb248f88"},"redeemAtom"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function redeemAtom(\n    uint256 shares,\n    address receiver,\n    uint256 id\n) external nonReentrant returns (uint256)\n\n")),(0,r.kt)("h3",{id:"13d450d37d0680eea30ee394775887fa"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shares"),": Number of vault shares to redeem"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"receiver"),": Address to receive the redeemed ETH"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": Vault ID of the Atom"),(0,r.kt)("li",{parentName:"ul"},"Returns: ",(0,r.kt)("inlineCode",{parentName:"li"},"uint256")," - Amount of ETH received")),(0,r.kt)("h3",{id:"13d450d37d0680b18e38e6d4d821ada7"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// useRedeemAtom Hook\nimport { type GetContractReturnType } from 'viem'\nimport { base } from 'viem/chains'\n\nimport { useContractWriteAndWait } from './useContractWriteAndWait'\nimport { useMultivaultContract } from './useMultivaultContract'\n\nexport const useRedeemAtom = () => {\n  const multivault = useMultivaultContract(\n    base.id,\n  ) as GetContractReturnType\n\n  return useContractWriteAndWait({\n    ...multivault,\n    functionName: 'redeemAtom',\n  })\n}\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Usage Example\nconst {\n  writeAsync: writeRedeemAtom,\n  awaitingWalletConfirmation,\n  awaitingOnChainConfirmation,\n} = useRedeemAtom()\n\nasync function handleRedeemAtom(atomId: string, shares: bigint) {\n  if (\n    !awaitingOnChainConfirmation &&\n    !awaitingWalletConfirmation &&\n    writeRedeemAtom\n  ) {\n    try {\n      const tx = await writeRedeemAtom({\n        address: MULTIVAULT_CONTRACT_ADDRESS,\n        abi: multivaultAbi,\n        functionName: 'redeemAtom',\n        args: [shares, address, BigInt(atomId)],\n      })\n\n      if (tx?.hash) {\n        const receipt = await publicClient.waitForTransactionReceipt({\n          hash: tx.hash,\n        })\n        // Handle success\n      }\n    } catch (error) {\n      // Handle error\n    }\n  }\n}\n\n")),(0,r.kt)("h2",{id:"13d450d37d0680828a1ae1a2cd5c193e"},"Cost Considerations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Deposit Fees"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Entry fee: Percentage taken from deposit"),(0,r.kt)("li",{parentName:"ul"},"Protocol fee: Portion sent to protocol treasury"),(0,r.kt)("li",{parentName:"ul"},"Gas fees: Network transaction costs"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Redemption Fees"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Exit fee: Percentage taken from withdrawal"),(0,r.kt)("li",{parentName:"ul"},"Protocol fee: Portion sent to protocol treasury")))),(0,r.kt)("p",null,"See also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/primitives-signal"},"Signal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/primitives"},"Primitives")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/130450d3-7d06-803e-9833-fff21c847507"},"EthMultiVault.sol"))))}c.isMDXComponent=!0}}]);