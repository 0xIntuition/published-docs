"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[1156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(o,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(f,r(r({ref:t},s),{},{components:n})):a.createElement(f,r({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const l={title:"EthMultiVault.sol",sidebar_position:0,slug:"/ethmultivault"},r="Overview",d={unversionedId:"Technical-References/ethmultivault",id:"Technical-References/ethmultivault",title:"EthMultiVault.sol",description:"163450d37d068190903fc88e47a3eb3e}",source:"@site/docs/contracts/Technical-References/ethmultivault.md",sourceDirName:"Technical-References",slug:"/ethmultivault",permalink:"/fr/contracts/ethmultivault",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"EthMultiVault.sol",sidebar_position:0,slug:"/ethmultivault"},sidebar:"contractsSidebar",previous:{title:"Build & Deploy Instructions",permalink:"/fr/contracts/build-deploy"},next:{title:"AtomWallet.sol",permalink:"/fr/contracts/atomwallet-contract"}},o={},u=[{value:"Contract Inheritance",id:"163450d37d068147b8effc83b91fea74",level:2},{value:"State Variables",id:"163450d37d068137b424c6bc2c8788e5",level:2},{value:"Operation Identifiers",id:"163450d37d06814b9a7ad7d82f9df56a",level:3},{value:"Configuration Variables",id:"163450d37d0681658234ca596d6a2d40",level:3},{value:"Mappings",id:"163450d37d06814db5d9fb8cfd5ac50c",level:3},{value:"Modifiers",id:"163450d37d0681fb89caebf78d23bc92",level:2},{value:"onlyAdmin",id:"163450d37d0681b7ab41dfe5846a5453",level:3},{value:"Core Functions",id:"163450d37d068104b972ec9c4ed41526",level:2},{value:"Initializer",id:"163450d37d06819bbab1ce20c1b680f0",level:3},{value:"Atom Management",id:"163450d37d06815c8ec9f405c6a8bc1d",level:3},{value:"createAtom",id:"163450d37d0681f397f7f0ba45e09d4a",level:3},{value:"deployAtomWallet",id:"163450d37d0681b09411d8d4aa3bf4c4",level:3},{value:"Triple Management",id:"163450d37d0681fe9033f1d0416c100e",level:3},{value:"createTriple",id:"163450d37d0681ee85fbf076d11a24ba",level:3},{value:"Asset Management",id:"163450d37d06815cb402ec752cfbf695",level:3},{value:"depositAtom/depositTriple",id:"163450d37d0681edae69f61f85c6bc9b",level:3},{value:"redeemAtom/redeemTriple",id:"163450d37d068183a3cbc647f2a60cec",level:3},{value:"View Functions",id:"163450d37d06815da2c5fda9995aef91",level:2},{value:"Fee Calculations",id:"163450d37d0681518e1ec7eaf2a49930",level:3},{value:"Asset Conversions",id:"163450d37d0681888173c251a9935e6d",level:3},{value:"Triple Operations",id:"163450d37d068139aa92ecd6a1e72d72",level:3},{value:"Admin Functions",id:"163450d37d0681e79b2ec12f3fa1ce9d",level:2},{value:"Configuration",id:"163450d37d0681208f62f34efa6c15b9",level:3},{value:"Fee Management",id:"163450d37d0681278844ebd3495e1347",level:3},{value:"Contract Control",id:"163450d37d06813a8396f03e18092eda",level:3},{value:"Internal Functions",id:"163450d37d068147a052ed353b8f8531",level:2},{value:"Asset Handling",id:"163450d37d0681da93a2e15d6cbd85ea",level:3},{value:"Share Management",id:"163450d37d068103a40cf3b29e4f7fab",level:3}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"163450d37d068190903fc88e47a3eb3e"},"Overview"),(0,i.kt)("p",null,"Core contract of the Intuition protocol that manages the creation and management of vaults associated with atoms & triples."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Author"),": 0xIntuition"),(0,i.kt)("h2",{id:"163450d37d068147b8effc83b91fea74"},"Contract Inheritance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IEthMultiVault"),(0,i.kt)("li",{parentName:"ul"},"Initializable, ReentrancyGuardUpgradeable & PausableUpgradeable (OpenZeppelin)")),(0,i.kt)("h2",{id:"163450d37d068137b424c6bc2c8788e5"},"State Variables"),(0,i.kt)("h3",{id:"163450d37d06814b9a7ad7d82f9df56a"},"Operation Identifiers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'bytes32 constant public SET_ADMIN = keccak256("setAdmin");\nbytes32 constant public SET_EXIT_FEE = keccak256("setExitFee");\n\n')),(0,i.kt)("h3",{id:"163450d37d0681658234ca596d6a2d40"},"Configuration Variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"generalConfig"),": General vault parameters (admin address, protocol vault address, etc.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"atomConfig"),": Atom-related parameters (creation cost, fees)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tripleConfig"),": Triple-related parameters (creation fee, deposit fraction)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"walletConfig"),": Wallet parameters (Permit2, EntryPoint, AtomWallet Warden)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"count"),": Tracks last vault ID created")),(0,i.kt)("h3",{id:"163450d37d06814db5d9fb8cfd5ac50c"},"Mappings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(uint256 vaultId => VaultState vaultState) public vaults;\nmapping(uint256 vaultId => VaultFees vaultFees) public vaultFees;\nmapping(uint256 atomId => bytes atomData) public atoms;\nmapping(bytes32 atomHash => uint256 atomId) public atomsByHash;\nmapping(uint256 tripleId => uint256[3] tripleAtomIds) public triples;\nmapping(bytes32 tripleHash => uint256 tripleId) public triplesByHash;\nmapping(uint256 vaultId => bool isTriple) public isTriple;\nmapping(uint256 tripleId => mapping(uint256 atomId => mapping(address account => uint256 balance))) public tripleAtomShares;\nmapping(bytes32 operationHash => Timelock timelock) public timelocks;\n\n")),(0,i.kt)("h2",{id:"163450d37d0681fb89caebf78d23bc92"},"Modifiers"),(0,i.kt)("h3",{id:"163450d37d0681b7ab41dfe5846a5453"},"onlyAdmin"),(0,i.kt)("p",null,"Restricts function access to the contract admin only."),(0,i.kt)("h2",{id:"163450d37d068104b972ec9c4ed41526"},"Core Functions"),(0,i.kt)("h3",{id:"163450d37d06819bbab1ce20c1b680f0"},"Initializer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function init(\n    GeneralConfig memory _generalConfig,\n    AtomConfig memory _atomConfig,\n    TripleConfig memory _tripleConfig,\n    WalletConfig memory _walletConfig,\n    VaultFees memory _defaultVaultFees\n) external initializer\n\n")),(0,i.kt)("h3",{id:"163450d37d06815c8ec9f405c6a8bc1d"},"Atom Management"),(0,i.kt)("h3",{id:"163450d37d0681f397f7f0ba45e09d4a"},"createAtom"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function createAtom(\n    bytes calldata atomUri\n) external payable nonReentrant whenNotPaused returns (uint256)\n\n")),(0,i.kt)("p",null,"Creates new atom and returns vault ID."),(0,i.kt)("h3",{id:"163450d37d0681b09411d8d4aa3bf4c4"},"deployAtomWallet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function deployAtomWallet(\n    uint256 atomId\n) external whenNotPaused returns (address)\n\n")),(0,i.kt)("p",null,"Deploys wallet for given atom."),(0,i.kt)("h3",{id:"163450d37d0681fe9033f1d0416c100e"},"Triple Management"),(0,i.kt)("h3",{id:"163450d37d0681ee85fbf076d11a24ba"},"createTriple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function createTriple(\n    uint256 subjectId,\n    uint256 predicateId,\n    uint256 objectId\n) external payable nonReentrant whenNotPaused returns (uint256)\n\n")),(0,i.kt)("p",null,"Creates new triple from three atoms."),(0,i.kt)("h3",{id:"163450d37d06815cb402ec752cfbf695"},"Asset Management"),(0,i.kt)("h3",{id:"163450d37d0681edae69f61f85c6bc9b"},"depositAtom/depositTriple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function depositAtom(\n    address receiver,\n    uint256 id\n) external payable nonReentrant whenNotPaused returns (uint256)\n\nfunction depositTriple(\n    address receiver,\n    uint256 id\n) external payable nonReentrant whenNotPaused returns (uint256)\n\n")),(0,i.kt)("p",null,"Deposit ETH into atom/triple vaults."),(0,i.kt)("h3",{id:"163450d37d068183a3cbc647f2a60cec"},"redeemAtom/redeemTriple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function redeemAtom(\n    uint256 shares,\n    address receiver,\n    uint256 id\n) external nonReentrant returns (uint256)\n\nfunction redeemTriple(\n    uint256 shares,\n    address receiver,\n    uint256 id\n) external nonReentrant returns (uint256)\n\n")),(0,i.kt)("p",null,"Redeem shares from atom/triple vaults."),(0,i.kt)("h2",{id:"163450d37d06815da2c5fda9995aef91"},"View Functions"),(0,i.kt)("h3",{id:"163450d37d0681518e1ec7eaf2a49930"},"Fee Calculations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getAtomCost()"),": Cost to create atom"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getTripleCost()"),": Cost to create triple"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getDepositFees(uint256 assets, uint256 id)"),": Calculate deposit fees"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getRedeemAssetsAndFees(uint256 shares, uint256 id)"),": Calculate redemption amounts")),(0,i.kt)("h3",{id:"163450d37d0681888173c251a9935e6d"},"Asset Conversions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"convertToShares(uint256 assets, uint256 id)"),": Convert assets to shares"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"convertToAssets(uint256 shares, uint256 id)"),": Convert shares to assets"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"previewDeposit(uint256 assets, uint256 id)"),": Simulate deposit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"previewRedeem(uint256 shares, uint256 id)"),": Simulate redemption")),(0,i.kt)("h3",{id:"163450d37d068139aa92ecd6a1e72d72"},"Triple Operations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tripleHash(uint256 id)"),": Get triple hash"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isTripleId(uint256 id)"),": Check if ID is triple"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getTripleAtoms(uint256 id)"),": Get atoms in triple"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getCounterIdFromTriple(uint256 id)"),": Get counter ID")),(0,i.kt)("h2",{id:"163450d37d0681e79b2ec12f3fa1ce9d"},"Admin Functions"),(0,i.kt)("h3",{id:"163450d37d0681208f62f34efa6c15b9"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setAdmin(address admin)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setProtocolVault(address protocolVault)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setMinDeposit(uint256 minDeposit)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setMinShare(uint256 minShare)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setAtomUriMaxLength(uint256 atomUriMaxLength)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setAtomWalletInitialDepositAmount(uint256 amount)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setAtomCreationProtocolFee(uint256 fee)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setTripleCreationProtocolFee(uint256 fee)"))),(0,i.kt)("h3",{id:"163450d37d0681278844ebd3495e1347"},"Fee Management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setEntryFee(uint256 id, uint256 entryFee)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setExitFee(uint256 id, uint256 exitFee)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setProtocolFee(uint256 id, uint256 protocolFee)"))),(0,i.kt)("h3",{id:"163450d37d06813a8396f03e18092eda"},"Contract Control"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pause()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unpause()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scheduleOperation(bytes32 operationId, bytes calldata data)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cancelOperation(bytes32 operationId, bytes calldata data)"))),(0,i.kt)("h2",{id:"163450d37d068147a052ed353b8f8531"},"Internal Functions"),(0,i.kt)("h3",{id:"163450d37d0681da93a2e15d6cbd85ea"},"Asset Handling"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_transferFeesToProtocolVault(uint256 value)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_depositAtomFraction(uint256 id, address receiver, uint256 amount)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_depositOnVaultCreation(uint256 id, address receiver, uint256 assets)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_deposit(address receiver, uint256 id, uint256 value)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_redeem(uint256 id, address owner, uint256 shares)"))),(0,i.kt)("h3",{id:"163450d37d068103a40cf3b29e4f7fab"},"Share Management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_mint(address to, uint256 id, uint256 amount)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_burn(address from, uint256 id, uint256 amount)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_setVaultTotals(uint256 id, uint256 totalAssets, uint256 totalShares)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_createVault()"))))}p.isMDXComponent=!0}}]);