(()=>{"use strict";var e,f,d,a,t,r={},c={};function b(e){var f=c[e];if(void 0!==f)return f.exports;var d=c[e]={id:e,loaded:!1,exports:{}};return r[e].call(d.exports,d,d.exports,b),d.loaded=!0,d.exports}b.m=r,b.c=c,e=[],b.O=(f,d,a,t)=>{if(!d){var r=1/0;for(i=0;i<e.length;i++){d=e[i][0],a=e[i][1],t=e[i][2];for(var c=!0,o=0;o<d.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](d[o])))?d.splice(o--,1):(c=!1,t<r&&(r=t));if(c){e.splice(i--,1);var n=a();void 0!==n&&(f=n)}}return f}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[d,a,t]},b.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return b.d(f,{a:f}),f},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};f=f||[null,d({}),d([]),d(d)];for(var c=2&a&&e;"object"==typeof c&&!~f.indexOf(c);c=d(c))Object.getOwnPropertyNames(c).forEach((f=>r[f]=()=>e[f]));return r.default=()=>e,b.d(t,r),t},b.d=(e,f)=>{for(var d in f)b.o(f,d)&&!b.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:f[d]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((f,d)=>(b.f[d](e,f),f)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",99:"d4c0827c",111:"4d81dc7b",206:"dff500f1",305:"1de72b33",394:"e0a19902",532:"8633fa42",655:"35fcf7ba",702:"371a9059",759:"a82a9e1d",1242:"fae877d0",1473:"bfb4db3e",1928:"ccbe9dd4",2285:"d927a030",2312:"82f25f01",2334:"5b5c4ace",2675:"188f6051",2887:"495660cc",3352:"b37d4ff3",3400:"44dd1100",3573:"c01cb8d8",3615:"d7ce2b27",3759:"94045ddf",3936:"8e365f20",4144:"e2b332fd",4232:"6312792b",4361:"04d65ab9",4522:"0f5319c5",4891:"61b67ffe",5262:"bbf627b2",5575:"7d4cdc4b",6300:"45e22b53",6391:"abd7d145",6429:"46f8bf3a",6962:"fc38e1a9",7214:"4fad51ce",7553:"5f9c5b58",7657:"dd4b3477",7918:"17896441",7920:"1a4e3797",7977:"688d4b4a",8009:"8b777e6f",8264:"9cfb5737",8554:"70fdffb2",8839:"122f88ff",8880:"a930f881",9514:"1be78505",9554:"791cb365",9911:"ada8c202",9957:"9a8813fd",9975:"1e1d8dca",9984:"f21f3dd0"}[e]||e)+"."+{53:"25e39b46",99:"f5a6fecc",111:"28e68c02",206:"cb0e121a",305:"8b6a7637",394:"8c94caa0",532:"4ddc2fcf",655:"f87a6125",702:"b4eca45c",759:"49c81e6c",1068:"71f86754",1242:"5c479c89",1473:"c5583fe2",1928:"5c6b6257",2285:"a8f16b3b",2312:"89149373",2334:"58ddba55",2675:"89720e7b",2887:"55ab6403",3352:"180ca368",3400:"00ab3a38",3573:"1cdd1e31",3615:"6e82afc7",3759:"1898904f",3936:"cea85933",4144:"4049a0aa",4232:"7caaf493",4361:"011dfd0a",4522:"23937c18",4891:"82350715",4972:"93a9ad6a",5262:"36b4b311",5525:"5d0a52b3",5575:"a703e820",6300:"45013fbd",6391:"8a3650fc",6429:"3eae6d38",6962:"8799ad33",7214:"17ec5eb4",7553:"7378ed9e",7657:"14e31cd7",7918:"28867023",7920:"5fe98163",7977:"6865952c",8009:"cd97a1e6",8264:"b5dbecfb",8443:"be87db0d",8554:"2e19bcd4",8839:"5f05a766",8880:"4b480e62",9514:"a5cbe2f1",9554:"e583269c",9656:"d8a56e18",9911:"6281027d",9957:"e3146fdc",9975:"5ea95260",9984:"d697542c"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),a={},t="docu-notion-sample-site:",b.l=(e,f,d,r)=>{if(a[e])a[e].push(f);else{var c,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+d){c=u;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",t+d),c.src=e),a[e]=[f];var l=(f,d)=>{c.onerror=c.onload=null,clearTimeout(s);var t=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),t&&t.forEach((e=>e(d))),f)return f(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/fr/",b.gca=function(e){return e={17896441:"7918","935f2afb":"53",d4c0827c:"99","4d81dc7b":"111",dff500f1:"206","1de72b33":"305",e0a19902:"394","8633fa42":"532","35fcf7ba":"655","371a9059":"702",a82a9e1d:"759",fae877d0:"1242",bfb4db3e:"1473",ccbe9dd4:"1928",d927a030:"2285","82f25f01":"2312","5b5c4ace":"2334","188f6051":"2675","495660cc":"2887",b37d4ff3:"3352","44dd1100":"3400",c01cb8d8:"3573",d7ce2b27:"3615","94045ddf":"3759","8e365f20":"3936",e2b332fd:"4144","6312792b":"4232","04d65ab9":"4361","0f5319c5":"4522","61b67ffe":"4891",bbf627b2:"5262","7d4cdc4b":"5575","45e22b53":"6300",abd7d145:"6391","46f8bf3a":"6429",fc38e1a9:"6962","4fad51ce":"7214","5f9c5b58":"7553",dd4b3477:"7657","1a4e3797":"7920","688d4b4a":"7977","8b777e6f":"8009","9cfb5737":"8264","70fdffb2":"8554","122f88ff":"8839",a930f881:"8880","1be78505":"9514","791cb365":"9554",ada8c202:"9911","9a8813fd":"9957","1e1d8dca":"9975",f21f3dd0:"9984"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,3312:0};b.f.j=(f,d)=>{var a=b.o(e,f)?e[f]:void 0;if(0!==a)if(a)d.push(a[2]);else if(/^(1303|3312)$/.test(f))e[f]=0;else{var t=new Promise(((d,t)=>a=e[f]=[d,t]));d.push(a[2]=t);var r=b.p+b.u(f),c=new Error;b.l(r,(d=>{if(b.o(e,f)&&(0!==(a=e[f])&&(e[f]=void 0),a)){var t=d&&("load"===d.type?"missing":d.type),r=d&&d.target&&d.target.src;c.message="Loading chunk "+f+" failed.\n("+t+": "+r+")",c.name="ChunkLoadError",c.type=t,c.request=r,a[1](c)}}),"chunk-"+f,f)}},b.O.j=f=>0===e[f];var f=(f,d)=>{var a,t,r=d[0],c=d[1],o=d[2],n=0;if(r.some((f=>0!==e[f]))){for(a in c)b.o(c,a)&&(b.m[a]=c[a]);if(o)var i=o(b)}for(f&&f(d);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},d=self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[];d.forEach(f.bind(null,0)),d.push=f.bind(null,d.push.bind(d))})()})();