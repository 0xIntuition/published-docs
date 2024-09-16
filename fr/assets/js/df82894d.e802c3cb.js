"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={title:"Lists",sidebar_position:5,slug:"/5308202e-d71c-4f25-9707-101720b307a3"},l=void 0,o={unversionedId:"Examples/Lists",id:"Examples/Lists",title:"Lists",description:"1. one",source:"@site/docs/Examples/Lists.md",sourceDirName:"Examples",slug:"/5308202e-d71c-4f25-9707-101720b307a3",permalink:"/published-docs/fr/5308202e-d71c-4f25-9707-101720b307a3",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Lists",sidebar_position:5,slug:"/5308202e-d71c-4f25-9707-101720b307a3"},sidebar:"defaultSidebar",previous:{title:"Embedding gif",permalink:"/published-docs/fr/eb1f7f9c-fa53-47c8-99f0-c85a09bf5072"},next:{title:"Links to Headings with slug",permalink:"/published-docs/fr/links-to-headings"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"one")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"two"),(0,i.kt)("p",{parentName:"li"},"Some text in between")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"three"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"this is three aa"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"four"))),(0,i.kt)("p",null,"This is a bulleted list:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul"},"alpha"),(0,i.kt)("li",{parentName:"ul"},"beta"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","A todo item"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Another todo item")),(0,i.kt)("p",null,"(note, with Docusaurus 2, if you follow the above list with the below toggle without material in-between, you get ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sillsdev/docu-notion/issues/77"},"https://github.com/sillsdev/docu-notion/issues/77"),")"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"toggle me"),"- inside bullet",(0,i.kt)("p",null,"inside plain text")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"This is a toggle"),(0,i.kt)("p",null,"The inside of a toggle")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"This is an empty toggle")))}u.isMDXComponent=!0}}]);