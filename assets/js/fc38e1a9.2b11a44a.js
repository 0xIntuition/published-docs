"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[6962],{3691:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905)),s=a(2004);const o={title:"The Portal",sidebar_position:0,slug:"/portal"},r="What is The Portal?",l={unversionedId:"Apps/portal",id:"Apps/portal",title:"The Portal",description:"115450d37d0680a788a3e831e705b7a8}",source:"@site/docs/Apps/portal.md",sourceDirName:"Apps",slug:"/portal",permalink:"/portal",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"The Portal",sidebar_position:0,slug:"/portal"},sidebar:"tutorialSidebar",previous:{title:"Remix + Vite",permalink:"/138450d3-7d06-80e9-a5a0-c3d29cfa648e"},next:{title:"Data Populator",permalink:"/populator"}},d={},p=[],m={toc:p};function u(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"115450d37d0680a788a3e831e705b7a8"},"What is The Portal?"),(0,i.kt)("p",null,"The Portal is Intuition\u2019s flagship application, offering seamless access to the social and knowledge graph. Positioned at the application layer, the Portal provides an intuitive interface for users to create, manage, and interact with Identities (Atoms) and Claims (Triples). It serves as the primary gateway for establishing decentralized identities, making claims, and managing your stake, transforming the exploration of the knowledge graph into an accessible and user-friendly experience."),(0,i.kt)("h1",{id:"115450d37d0680899922e8e7569d40e2"},"Covered in this Guide"),(0,i.kt)("p",null,"This guide provides step by step instructions for Intuition\u2019s core features, including: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Creating Identities"),(0,i.kt)("li",{parentName:"ol"},"Creating Claims"),(0,i.kt)("li",{parentName:"ol"},"Staking on Identities and Claims"),(0,i.kt)("li",{parentName:"ol"},"Using Tags"),(0,i.kt)("li",{parentName:"ol"},"Organizing Lists"),(0,i.kt)("li",{parentName:"ol"},"Following Users")),(0,i.kt)("h1",{id:"115450d37d06807795f2ef641536979b"},"1. Creating and Managing Identities (Atoms)"),(0,i.kt)("p",null,"Identities, also known as Atoms, are the fundamental building blocks in the Intuition system. Each Atom represents a concept, such as a person, organization, or product, and comes with a unique decentralized identifier, structured data, and an associated Vault for signaling its relevancy."),(0,i.kt)(s.Z,{controls:!0,url:"https://prod-files-secure.s3.us-west-2.amazonaws.com/a0d93219-9222-4c83-b4ac-813b5a29b7cb/e5b54e8d-c18c-4252-b33e-ff6b25baf512/Untitled_video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241115T110319Z&X-Amz-Expires=3600&X-Amz-Signature=541ff0802e0611357f35613bb6c92cc2c05866c44c58a760f0d6fcee5371056f&X-Amz-SignedHeaders=host&x-id=GetObject",mdxType:"ReactPlayer"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to Create an Identity")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click the \u201cCreate\u201d action button in the bottom left section of the menu panel."),(0,i.kt)("li",{parentName:"ol"},"Select \u201cCreate Identity.\u201d"),(0,i.kt)("li",{parentName:"ol"},"Input data to describe the Identity you are creating."),(0,i.kt)("li",{parentName:"ol"},"Optionally, deposit ETH to stake on your newly created Identity.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What Happens After Creation?"),"\nWhen you create an Identity, the data is uploaded to IPFS, generating an IPFS CID that is used to create an Atom in the Intuition contracts. This Atom can now be referenced universally across the web."),(0,i.kt)("h1",{id:"115450d37d06809b951fd059388dde49"},"2. Making Claims (Triples)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What are Claims?"),"\nClaims, or Triples, allow you to assert statements about anything using a ","[Subject][Predicate]"," ","[Object]"," structure. For example, ","[Alice][is]"," ","[trustworthy]",". Creating a Claim does not automatically express agreement with the claim; you must stake on the Claim to do so."),(0,i.kt)(s.Z,{controls:!0,url:"https://prod-files-secure.s3.us-west-2.amazonaws.com/a0d93219-9222-4c83-b4ac-813b5a29b7cb/054d8acf-9d87-484c-95b3-17137e849e03/claims_tags.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241115T110319Z&X-Amz-Expires=3600&X-Amz-Signature=a9867dabab8aa78d15f643ec8e86a775f820416b05be8c3e5fd9ceeae7b7cddf&X-Amz-SignedHeaders=host&x-id=GetObject",mdxType:"ReactPlayer"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to Create a Claim:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click the \u201cCreate\u201d action button in the bottom left section of the menu panel."),(0,i.kt)("li",{parentName:"ol"},"Select \u201cCreate Claim.\u201d"),(0,i.kt)("li",{parentName:"ol"},"Choose three Atoms/Identities to form your Claim.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"If a claim already exists (as it does in the video),")," simply stake on the existing claim to express your agreement with it.")),(0,i.kt)("h1",{id:"115450d37d06805bb7a6f622dadea8bf"},"3. Staking (Signal Conviction)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What is Staking?"),"\nStaking in Intuition allows you to signal what is important or what you believe to be true by staking ETH on Identities (Atoms) or Claims (Triples). This process contributes to a Token Curated Registry (TCR), where the most relevant information rises to the top."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Staking on an Identity:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Signals the relevancy of the Identity"),(0,i.kt)("li",{parentName:"ul"},"Grants you shares in the Identity, earning fees from future stakes.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Staking on a Claim:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Claims have a Positive Vault (for supporting the Claim) and a Negative Vault (for opposing the Claim)."),(0,i.kt)("li",{parentName:"ul"},"Staking on a Claim also stakes on the Claim\u2019s underlying Identities.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Unstaking:")," "),(0,i.kt)("p",null,"You can unstake your ETH at any time to retrieve your deposit (minus fees)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Staking Economics:")," "),(0,i.kt)("p",null,"Staking grants you shares that provide a proportionate amount of fee revenue accumulated by the Identity or Claim, incentivizing you to stake on high-traction items."),(0,i.kt)("h1",{id:"115450d37d0680df93b3e10a38d4b84d"},"4. Organizing with Lists"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What are Lists?"),"\nLists allow you to group related items or data in a way that makes sense to you, helping others discover, save, and provide feedback. Lists are constructed through deterministic queries, making it easy to organize and navigate complex data."),(0,i.kt)(s.Z,{controls:!0,url:"https://prod-files-secure.s3.us-west-2.amazonaws.com/a0d93219-9222-4c83-b4ac-813b5a29b7cb/1e9fb765-f752-4100-a890-204b11594455/Untitled_video_%281%29.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241115T110319Z&X-Amz-Expires=3600&X-Amz-Signature=1b08a47d014ed91c028a4a828cf11e5db13d536b18db0eb4bd4ef5547a7f9f4c&X-Amz-SignedHeaders=host&x-id=GetObject",mdxType:"ReactPlayer"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Creating a List:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lists are formed by Claims with the ","[has tag]"," Predicate."),(0,i.kt)("li",{parentName:"ul"},"Tag an Identity to include it in a specific List.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Adding to and Managing Lists:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the \u201cAdd to list\u201d and \u201cSave list\u201d buttons to manage your Lists."),(0,i.kt)("li",{parentName:"ul"},"Lists are Token Curated Registries (TCR), where you can stake ETH to order entries within a List.")),(0,i.kt)("h1",{id:"13f450d37d0680e7903beddd7c7011f0"},"5. Using Tags"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What are Tags?"),"\nTags are shortcuts to organizing and finding relevant information. They function as Claims with the ","[has tag]"," Predicate and are essential for creating and managing Lists."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4745).Z,width:"2669",height:"888"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Creating and Using Tags:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To create a new Tag, you must create a new Identity for that tag if it doesn't already exist."),(0,i.kt)("li",{parentName:"ul"},"Tag something by searching through \u201cExisting Tags\u201d or creating a new one."),(0,i.kt)("li",{parentName:"ul"},"Tagging enhances discoverability and adds items to relevant Lists.")),(0,i.kt)("h1",{id:"115450d37d0680fd9a54d365956f2629"},"Following Users"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What is Following?"),"\nFollowing in Intuition is a contextual statement made by staking on the Claim ","[I][am following]"," ","[User]",". This staking process reflects the strength of your connection and is part of the open data available for developers to use in building a social graph."),(0,i.kt)(s.Z,{controls:!0,url:"https://prod-files-secure.s3.us-west-2.amazonaws.com/a0d93219-9222-4c83-b4ac-813b5a29b7cb/80492f98-bdd7-4e51-81d3-c832ee038dae/Following.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241115T110319Z&X-Amz-Expires=3600&X-Amz-Signature=f3bb55ad74d93998aa4461c0fd0f748c54179deae839b5a411663dc8baa3aae1&X-Amz-SignedHeaders=host&x-id=GetObject",mdxType:"ReactPlayer"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to Follow/Unfollow:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To follow, click on a user\u2019s profile and select \u201cFollow,\u201d then optionally stake ETH."),(0,i.kt)("li",{parentName:"ul"},"To unfollow, click \u201cFollowing\u201d on the user\u2019s profile and select \u201cUnfollow.\u201d Unfollowing also redeems your staked ETH.")))}u.isMDXComponent=!0},4745:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/portal.13f450d3-7d06-807f-9a89-ec0ae995ddf9-5191f096d692a41cb2347675b279d744.png"}}]);