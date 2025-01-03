"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[200],{3205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var i=a(7462),n=(a(7294),a(3905)),r=a(2004);const o={title:"Remix + Vite",sidebar_position:0,slug:"/remix-template"},l=void 0,p={unversionedId:"Templates/remix-template",id:"Templates/remix-template",title:"Remix + Vite",description:"Intuition App Templates",source:"@site/docs/dev/Templates/remix-template.md",sourceDirName:"Templates",slug:"/remix-template",permalink:"/fr/dev/remix-template",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Remix + Vite",sidebar_position:0,slug:"/remix-template"},sidebar:"contractsSidebar",previous:{title:"Intuition CLI",permalink:"/fr/dev/intuition-cli"},next:{title:"Web App",permalink:"/fr/dev/ex-webapp"}},u={},m=[{value:"Intuition App Templates",id:"163450d37d0681ffa15ad9b2087eb352",level:2},{value:"Current Template",id:"163450d37d06817388a5f635f0cc90df",level:2},{value:"Remix/Vite Neurofunk Stack",id:"163450d37d06819bbd31c7a7f8e8c1db",level:3},{value:"Template Stack",id:"163450d37d0681a4a21bde535f5a6194",level:3},{value:"Prerequisites",id:"163450d37d068167b438dafdc89efdc7",level:3},{value:"Development",id:"163450d37d0681539f45d899dc2ecc15",level:3},{value:"<strong>Future Templates</strong>",id:"163450d37d068104a05eec7ef4db016d",level:2},{value:"ETHDenver 2024 Presentation",id:"163450d37d06816d8f25eb5065d5e06e",level:2}],s={toc:m};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"163450d37d0681ffa15ad9b2087eb352"},"Intuition App Templates"),(0,n.kt)("p",null,"Our opinionated templates provide out-of-the-box authentication with ",(0,n.kt)("a",{parentName:"p",href:"https://www.privy.io/"},"Privy"),", onchain interactions with ",(0,n.kt)("a",{parentName:"p",href:"https://viem.sh/"},"Viem")," and ",(0,n.kt)("a",{parentName:"p",href:"https://wagmi.sh/"},"Wagmi"),", and modern styling patterns with ",(0,n.kt)("a",{parentName:"p",href:"https://www.privy.io/"},"Tailwind"),". "),(0,n.kt)("p",null,"We dogfood our templates with our internal app development and then refine and share our learnings with the ecosystem. We\u2019ll be adding more templates that leverage our core Neurofunk stack so be sure to star our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/0xIntuition/intuition-ts"},"https://github.com/0xIntuition/intuition-ts")," monorepo."),(0,n.kt)("h2",{id:"163450d37d06817388a5f635f0cc90df"},"Current Template"),(0,n.kt)("h3",{id:"163450d37d06819bbd31c7a7f8e8c1db"},"Remix/Vite Neurofunk Stack"),(0,n.kt)("p",null,"Our flagship, opinionated template combines Remix with Vite, showcasing the stack we used to build ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/0xIntuition/intuition-ts/tree/main/apps/portal"},"Portal"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/0xIntuition/intuition-ts/tree/main/apps/data-populator"},"Data Populator"),", and other\xa0production applications at Intuition. This template was\xa0featured in our\xa0",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/VxypSHPIa44"},"ETHDenver 2024 presentation"),", where we shared our learnings and best\xa0practices that we discovered along the way. The integration of Vite with\xa0Remix enhances the development experience by offering:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rapid hot module replacement (HMR)"),(0,n.kt)("li",{parentName:"ul"},"Streamlined plugin system for easy\xa0extensibility"),(0,n.kt)("li",{parentName:"ul"},"Improved support for modern web\xa0technologies"),(0,n.kt)("li",{parentName:"ul"},"Faster feedback loops\xa0and build processes")),(0,n.kt)("p",null,"This combination significantly accelerates development cycles\xa0and simplifies the integration of tools like Tailwind CSS. While Remix currently supports Vite as an alternative compiler, Vite will become the default compiler for Remix in the future."),(0,n.kt)("p",null,"Link to the Neurofunk Remix/Vite template in our monorepo:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/0xIntuition/intuition-ts/tree/main/apps/template"},"https://github.com/0xIntuition/intuition-ts/tree/main/apps/template"))),(0,n.kt)("h3",{id:"163450d37d0681a4a21bde535f5a6194"},"Template Stack"),(0,n.kt)("p",null,"Our Neurofunk stack includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Remix (with Vite)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Remix: ",(0,n.kt)("a",{parentName:"li",href:"https://remix.run/docs/en/main/guides/vite"},"Remix with Vite Documentation")),(0,n.kt)("li",{parentName:"ul"},"Vite: ",(0,n.kt)("a",{parentName:"li",href:"https://vitejs.dev/guide/"},"Vite Documentation")),(0,n.kt)("li",{parentName:"ul"},"Remix Flat Routes: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kiliman/remix-flat-routes"},"Flat Routes Documentation")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Web3:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Privy: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.privy.io/"},"Privy Documentation")),(0,n.kt)("li",{parentName:"ul"},"Viem: ",(0,n.kt)("a",{parentName:"li",href:"https://viem.sh/"},"Viem Documentation")),(0,n.kt)("li",{parentName:"ul"},"Wagmi: ",(0,n.kt)("a",{parentName:"li",href:"https://wagmi.sh/"},"Wagmi Documentation")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Styling:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Shadcn/ui: ",(0,n.kt)("a",{parentName:"li",href:"https://tailwindcss.com/docs/installation"},"Shadcn/ui Documentation")),(0,n.kt)("li",{parentName:"ul"},"Tailwind: ",(0,n.kt)("a",{parentName:"li",href:"https://tailwindcss.com/docs/installation"},"Tailwind Documentation")),(0,n.kt)("li",{parentName:"ul"},"Radix: ",(0,n.kt)("a",{parentName:"li",href:"https://www.radix-ui.com/"},"Radix Documentation")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Forms and Data:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Zod: ",(0,n.kt)("a",{parentName:"li",href:"https://zod.dev/"},"Zod Documentation")),(0,n.kt)("li",{parentName:"ul"},"Conform: ",(0,n.kt)("a",{parentName:"li",href:"https://conform.guide/"},"Conform Documentation")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"State Management:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Jotai: ",(0,n.kt)("a",{parentName:"li",href:"https://jotai.org/docs/introduction"},"Jotai Documentation")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Data Fetching:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Tanstack Query: ",(0,n.kt)("a",{parentName:"li",href:"https://tanstack.com/query/latest"},"Tanstack Query Documentation"))))),(0,n.kt)("h3",{id:"163450d37d068167b438dafdc89efdc7"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/en"},"Node.js"),": Before anything else, ",(0,n.kt)("a",{parentName:"li",href:"https://remix.run/"},"Remix")," requires that you have either a Active or Maintenance version of Node.js installed."),(0,n.kt)("li",{parentName:"ul"},"Base and Base Sepolia: Intuition is currently deployed on both Base and Base Sepolia. You'll need Base Sepolia for any writes to the Intuition protocol. Consider using a faucet such as ",(0,n.kt)("a",{parentName:"li",href:"https://www.alchemy.com/faucets/base-sepolia"},"Alchemy Base Sepolia Faucet"),".")),(0,n.kt)("h3",{id:"163450d37d0681539f45d899dc2ecc15"},"Development"),(0,n.kt)("p",null,"If you're running a project using the template from within the monorepo, you can run the dev server directly from the monorepo root:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pnpm run template:dev"))),(0,n.kt)("p",null,"If you've cloned one of our templates into a standalone project, you can run directly from the project root:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pnpm run dev"))),(0,n.kt)("h2",{id:"163450d37d068104a05eec7ef4db016d"},(0,n.kt)("strong",{parentName:"h2"},"Future Templates")),(0,n.kt)("p",null,"We're actively working on additional templates to support different frameworks and use cases. Our goal is to provide a variety of starting points that leverage our Neurofunk stack while catering to different developer preferences and project requirements. Stay tuned for more templates, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Next.js (coming soon)"),(0,n.kt)("li",{parentName:"ul"},"Vite React (coming soon)")),(0,n.kt)("p",null,"Check our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/0xIntuition/intuition-ts"},"https://github.com/0xIntuition/intuition-ts")," monorepo for the most up-to-date templates and READMEs including detailed documentation and setup instructions."),(0,n.kt)("h2",{id:"163450d37d06816d8f25eb5065d5e06e"},"ETHDenver 2024 Presentation"),(0,n.kt)("p",null,"We shared our learnings that informed the creation of the Neurofunk Remix/Vite template at a presentation in ETHDenver 2024."),(0,n.kt)(r.Z,{controls:!0,url:"https://www.youtube.com/watch?v=VxypSHPIa44&t=251s",mdxType:"ReactPlayer"}))}d.isMDXComponent=!0}}]);