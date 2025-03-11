"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[4874],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>g});var i=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=i.createContext({}),c=function(n){var e=i.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=c(n.components);return i.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),u=c(t),g=r,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return t?i.createElement(m,o(o({ref:e},p),{},{components:t})):i.createElement(m,o({ref:e},p))}));function g(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:r,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4466:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(7462),r=(t(7294),t(3905));const a={title:"Utilities",sidebar_position:7,slug:"/graphql-utilities"},o=void 0,s={unversionedId:"GraphQL-API/Reads/graphql-utilities",id:"GraphQL-API/Reads/graphql-utilities",title:"Utilities",description:"\u201cUtility\u201d Queries",source:"@site/docs/dev/GraphQL-API/Reads/graphql-utilities.md",sourceDirName:"GraphQL-API/Reads",slug:"/graphql-utilities",permalink:"/dev/graphql-utilities",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Utilities",sidebar_position:7,slug:"/graphql-utilities"},sidebar:"contractsSidebar",previous:{title:"GetVaults",permalink:"/dev/get-vaults"},next:{title:"GraphQL Mutations",permalink:"/dev/mutations"}},l={},c=[{value:"\u201cUtility\u201d Queries",id:"1b3450d37d068011a2a9d686ab32ecdf",level:2},{value:"GetEvents",id:"1b3450d37d0680159443ec9e6c0ef8a7",level:3}],p={toc:c};function d(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1b3450d37d068011a2a9d686ab32ecdf"},"\u201cUtility\u201d Queries"),(0,r.kt)("p",null,"Our \u201cutility\u201d queries don\u2019t necessarily fall into the other categories but are examples of how you can query for specific purpose data. "),(0,r.kt)("p",null,"We have several more queries in our GraphQL package."),(0,r.kt)("h3",{id:"1b3450d37d0680159443ec9e6c0ef8a7"},"GetEvents"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query GetEvents($where: events_bool_exp, $addresses: [String!]) {\n  total: events_aggregate(where: $where) {\n    aggregate {\n      count\n    }\n  }\n  events(where: $where) {\n    id\n    block_number\n    block_timestamp\n    type\n    transaction_hash\n    atom_id\n    triple_id\n    deposit_id\n    redemption_id\n    atom {\n      id\n      data\n      image\n      label\n      emoji\n      type\n      wallet_id\n      creator {\n        id\n        label\n        image\n      }\n      value {\n        person {\n          name\n          image\n          description\n          url\n        }\n        thing {\n          name\n          image\n          description\n          url\n        }\n        organization {\n          name\n          image\n          description\n          url\n        }\n      }\n      vault {\n        total_shares\n        position_count\n        positions(where: { account: { id: { _in: $addresses } } }) {\n          account_id\n          shares\n          account {\n            id\n            label\n            image\n          }\n        }\n      }\n    }\n    triple {\n      id\n      creator {\n        label\n        image\n        id\n        atom_id\n        type\n      }\n      subject {\n        data\n        id\n        image\n        label\n        emoji\n        type\n        value {\n          person {\n            name\n            image\n            description\n            url\n          }\n          thing {\n            name\n            image\n            description\n            url\n          }\n          organization {\n            name\n            image\n            description\n            url\n          }\n        }\n        creator {\n          label\n          image\n          id\n          atom_id\n          type\n        }\n      }\n      predicate {\n        data\n        id\n        image\n        label\n        emoji\n        type\n        value {\n          person {\n            name\n            image\n            description\n            url\n          }\n          thing {\n            name\n            image\n            description\n            url\n          }\n          organization {\n            name\n            image\n            description\n            url\n          }\n        }\n        creator {\n          label\n          image\n          id\n          atom_id\n          type\n        }\n      }\n      object {\n        data\n        id\n        image\n        label\n        emoji\n        type\n        value {\n          person {\n            name\n            image\n            description\n            url\n          }\n          thing {\n            name\n            image\n            description\n            url\n          }\n          organization {\n            name\n            image\n            description\n            url\n          }\n        }\n        creator {\n          label\n          image\n          id\n          atom_id\n          type\n        }\n      }\n      vault {\n        total_shares\n        position_count\n        positions(where: { account: { id: { _in: $addresses } } }) {\n          account_id\n          shares\n          account {\n            id\n            label\n            image\n          }\n        }\n      }\n      counter_vault {\n        total_shares\n        position_count\n        positions(where: { account: { id: { _in: $addresses } } }) {\n          account_id\n          shares\n          account {\n            id\n            label\n            image\n          }\n        }\n      }\n    }\n    deposit {\n      sender_id\n      sender {\n        id\n      }\n      shares_for_receiver\n      sender_assets_after_total_fees\n      vault {\n        total_shares\n        position_count\n        positions(where: { account: { id: { _in: $addresses } } }) {\n          account_id\n          shares\n          account {\n            id\n            label\n            image\n          }\n        }\n      }\n    }\n    redemption {\n      sender_id\n      sender {\n        id\n      }\n    }\n  }\n}\n\n\n# Variables\n\n{\n  "addresses": ["0x..."]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fdev.base.intuition-api.com%2Fv1%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoCiAbsigM4AUAJAO4AW%2BC6RCNqdAfQBGECABsBCAB4AHADREmAQzBg8COnQ3cA2gGUUeAJZIA5gEIAugEoiwADpIiRFBBRKx3XrUFLTp9VMlFAQGdk5uVg51WwcnZyI-AIQgkLtHBISoCBhUDISAX3yi%2BO9%2BMOiuRXCY9PjnIzB85yExaABrASR4IXxmolaOgRQjRDp3OBl%2BlAIZBGm8JSQ6JSgRiCQBNiU6Nn7giDgBRoWjGTEEY6b6ojAEGQg6IxQr-vU7yfXNk5uDuDrMg1roDbsElP0GnA-PMbs4xEpemIITw4BAAFZGZEzObIlgeC4vH4gqDqA54AEgohEynwxHIyHQ5ElEFUDy4CkguZ4OgbDmUpBKRD0hKjRmwwF3Ogks5fYXOGB4JHi5zMykoNgmUx8kECoXKkVQ0wwykJSXSmSy-XyxXC1UgiB4IJIIwAL2CRl5cRNzl1xu9oqNctuGnNlu9RAVSpNdsKyNZMDEKG1CVc7gkuyU6jowoeTy%2BAmyuRQOcezw9ywqETsiSghdQ3GAVLADaIxyQkRUag0WjoRAKfb7sSDqzrhOB3ozWeHtZyqGTIOp4dpCCj4aphr90dtTP6McMZwuycXWVJrnJXppCJXwoDm8Bx8yf1e%2Buxd5VyLoMCEaIQa3noPcG9xwXDdhWXVcQQQVEMWFV9hVZMR2QvE0uR5JxkO9X0gwZQMrVNENjAtctsIjG08JjEF1U1f9MiwvCcLfSkzUIsM10jIMKMBB0nVdd1PRIui13XMUhOYmViPo0iIMpTj331EkEDJGiiHAoNbzU4DKSfB9ATg-VOM4mR3iMKBggQf8wDBICb1A-VVP1KD0UxF9ZkY5wEKQoNUP4yTBLXdTJLEoiNhI9jyKDKizGUn1BTc%2B9bNEgjxJCySwvDWSEm4pZeK%2BaKiD88MAsSqUWIkoS0u9DKMoUpSMJBezCoS-1NJBbSWt01zt3FTiIG-X8kzq00rP1HSGLAq9pMyRyYJcnF9Q88zBsybz0IE2KSKKtcgtY8MKq3PDIq1JbAQK-0mvDbayrYsj0qDLLnTdXLjto9bJM2i6kuCpBQpuyqupNGqz2UhqzpE5rh1cI5RpTTr9J3cV40Tf9Uw8ARJw0Es83LAtZ2LfVczLDZGBqKpGxHXGW0aFs2w7VQsx7Ad%2BwKIc8PJotn3DdHs1Zmcizy6HMhBxqwf20XAU40d8AERGBtgtxUa5zHCc2Ucla%2BYnKhbNn62rKnqxpxRO3pjRGcHZTtbHINFZ50d%2Bfa%2BqJo286ZP%2B8Xd36O4Cdl8UtCQO48A5wFff9-8dM4rmBAAMwdAR1CgBAjBoPAP2Qf2BB2LR6HTyOQgDlGJEjhAMYRpQE29k187R7Yp3x0t81V2usaJyt1C13mdcbPXGwN5Q6e7E2mbN56a1HQOTWt8MLbtkihdB3Dbrh7r3Zud4oK%2B5Ng6lnTN-Payl5uVUShKEA5BAVljARC46AwEAL3sEAjf77MMCIHR74ABikAA6H-78sRwCggAKEAA"},"Interact with this query in Apollo Sandbox")))}d.isMDXComponent=!0}}]);