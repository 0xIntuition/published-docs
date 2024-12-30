"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[8114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={title:"GraphQL Onboarding",sidebar_position:0,slug:"/168450d3-7d06-80f4-b557-e66c7fb30c12"},i="GraphQL Package",o={unversionedId:"Dev-Tools/GraphQL-API/GraphQL-Onboarding",id:"Dev-Tools/GraphQL-API/GraphQL-Onboarding",title:"GraphQL Onboarding",description:"168450d37d0680898ba1f119e98825c0}",source:"@site/docs/concepts/Dev-Tools/GraphQL-API/GraphQL-Onboarding.md",sourceDirName:"Dev-Tools/GraphQL-API",slug:"/168450d3-7d06-80f4-b557-e66c7fb30c12",permalink:"/fr/168450d3-7d06-80f4-b557-e66c7fb30c12",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"GraphQL Onboarding",sidebar_position:0,slug:"/168450d3-7d06-80f4-b557-e66c7fb30c12"},sidebar:"contractsSidebar",previous:{title:"Retrieve Vault Details",permalink:"/fr/retrieve-vault"},next:{title:"GraphQL API Reads",permalink:"/fr/graphql-reads2"}},p={},s=[{value:"Key Features",id:"168450d37d068012b3c6c5e7d1bd6169",level:2},{value:"Quick Start",id:"168450d37d068009b7c5c16ed76d6271",level:2},{value:"Schema Management",id:"168450d37d0680de82f0d998f4ab7273",level:2},{value:"Development Workflow",id:"168450d37d0680b48a93f5cccdbe53a3",level:2},{value:"Package Structure",id:"168450d37d06804eb36df7a842b77145",level:2},{value:"Package Approach",id:"168450d37d068069891bf72a8669fe3b",level:2},{value:"Related Resources",id:"168450d37d0680f08402f0f5e609805b",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"168450d37d0680898ba1f119e98825c0"},"GraphQL Package"),(0,r.kt)("p",null,"The Intuition GraphQL package provides a type-safe interface for interacting with the Intuition API. It serves as the core data fetching layer, offering generated types and React Query hooks for seamless integration with the semantic knowledge graph."),(0,r.kt)("h2",{id:"168450d37d068012b3c6c5e7d1bd6169"},"Key Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type-safe GraphQL operations leveraging code gen"),(0,r.kt)("li",{parentName:"ul"},"React Query hooks for data fetching"),(0,r.kt)("li",{parentName:"ul"},"Reusable GraphQL fragments"),(0,r.kt)("li",{parentName:"ul"},"Local-first schema with remote fallback"),(0,r.kt)("li",{parentName:"ul"},"Portable package design")),(0,r.kt)("h2",{id:"168450d37d068009b7c5c16ed76d6271"},"Quick Start"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the package:\n",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add @0xintuition/graphql"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) Configure the client in your app\u2019s root (",(0,r.kt)("inlineCode",{parentName:"p"},"root.tsx")," or Next.js ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx"),")"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { configureClient, API_URL_DEV } from '@0xintuition/graphql`\n\n// Configure GraphQL client at module initialization using the URLs from the package. For now, we should use the local URL for development\n// This can be updated to use the same environment approach that we use in Portal in the future, or leave up to the template user to configure however makes sense for their use case\nconfigureClient({\n  apiUrl: API_URL_DEV,\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This step is entirely optional. If you omit it the GraphQL package queries and hooks will use the default API URL from the package, which is currently ",(0,r.kt)("inlineCode",{parentName:"li"},"API_URL_DEV")," ."),(0,r.kt)("li",{parentName:"ul"},"Currently, the DEV and PROD endpoints are the same, but in the future this will allow for switching which best suits the purpose of your app.")),(0,r.kt)("h2",{id:"168450d37d0680de82f0d998f4ab7273"},"Schema Management"),(0,r.kt)("p",null,"The package uses a local-first approach for schema management:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Local ",(0,r.kt)("inlineCode",{parentName:"li"},"schema.graphql")," as source of truth"),(0,r.kt)("li",{parentName:"ul"},"Remote schema fallback for resilience"),(0,r.kt)("li",{parentName:"ul"},"Automatic schema generation during builds"),(0,r.kt)("li",{parentName:"ul"},"Version controlled schema for team consistency")),(0,r.kt)("h2",{id:"168450d37d0680b48a93f5cccdbe53a3"},"Development Workflow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Code Generation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm codegen:build # Generate types")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm codegen:watch # Watch mode for development")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Building"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm build # Full build with codegen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm dev # Development mode with watch")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Testing"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm test"))))),(0,r.kt)("h2",{id:"168450d37d06804eb36df7a842b77145"},"Package Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"graphql/\n\u251c\u2500\u2500 src/\n\u2502 \u251c\u2500\u2500 client.ts # Client configuration\n\u2502 \u251c\u2500\u2500 fragments/ # Reusable fragments\n\u2502 \u251c\u2500\u2500 queries/ # GraphQL queries\n\u2502 \u251c\u2500\u2500 mutations/ # GraphQL mutations\n\u2502 \u2514\u2500\u2500 generated/ # Generated types\n\u251c\u2500\u2500 schema.graphql # Schema definition\n\u2514\u2500\u2500 codegen.ts # Codegen config\n")),(0,r.kt)("h2",{id:"168450d37d068069891bf72a8669fe3b"},"Package Approach"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Schema Updates"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Uses the local schema committed in the repository as the priority for the codegen and uses the remote URL as the fallback"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Query Organization"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Uses fragments for reusable fields"),(0,r.kt)("li",{parentName:"ul"},"Includes use-case specific queries as well as general purpose queries"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Type Safety"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Leverages generated types from our schema"),(0,r.kt)("li",{parentName:"ul"},"Generates React Query hooks as well as document queries that can be used in a server context (or used with another client such as Apollo)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Client Configuration"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Default client configuration can be overridden in each consumer app"),(0,r.kt)("li",{parentName:"ul"},"Supports environment-specific API URLs")))),(0,r.kt)("h2",{id:"168450d37d0680f08402f0f5e609805b"},"Related Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tech.docs.intuition.systems/"},"Intuition API Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://the-guild.dev/graphql/codegen"},"GraphQL Code Generator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tanstack.com/query"},"React Query Documentation"))))}u.isMDXComponent=!0}}]);