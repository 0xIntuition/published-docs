(()=>{"use strict";var e,a,f,t,r,d={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var f=c[e]={id:e,loaded:!1,exports:{}};return d[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=d,b.c=c,e=[],b.O=(a,f,t,r)=>{if(!f){var d=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],r=e[i][2];for(var c=!0,o=0;o<f.length;o++)(!1&r||d>=r)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(c=!1,r<d&&(d=r));if(c){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[f,t,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var d={};a=a||[null,f({}),f([]),f(f)];for(var c=2&t&&e;"object"==typeof c&&!~a.indexOf(c);c=f(c))Object.getOwnPropertyNames(c).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,b.d(r,d),r},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",146:"e4791c67",305:"1de72b33",532:"8633fa42",545:"115cce92",655:"35fcf7ba",702:"371a9059",1242:"fae877d0",1473:"bfb4db3e",1809:"4335d1b3",2285:"d927a030",2312:"82f25f01",3160:"bb172fa0",3573:"c01cb8d8",3615:"d7ce2b27",3759:"94045ddf",3983:"8682744f",4011:"c485af28",4288:"ad895e75",4309:"669a8c51",4361:"04d65ab9",4365:"929b167b",4522:"0f5319c5",4891:"61b67ffe",5262:"bbf627b2",5531:"816e2483",5575:"7d4cdc4b",5830:"b35cbd6d",6200:"c3b73a7d",6300:"45e22b53",6391:"abd7d145",6428:"cb6d6896",6429:"46f8bf3a",6962:"fc38e1a9",7202:"1bbf88c0",7214:"4fad51ce",7918:"17896441",7920:"1a4e3797",7977:"688d4b4a",8009:"8b777e6f",8264:"9cfb5737",8835:"ecee466c",8880:"a930f881",9514:"1be78505",9554:"791cb365",9911:"ada8c202",9957:"9a8813fd",9975:"1e1d8dca"}[e]||e)+"."+{53:"a77483cd",146:"c62c4ec6",305:"b613d81f",532:"c0436b2c",545:"17531b97",655:"4e37cb3f",702:"dac6d164",1068:"71f86754",1242:"f072f084",1473:"ea30f0e9",1809:"562f3ae8",2285:"4839f39f",2312:"818c9bdd",3160:"510cbe67",3573:"2b8d7e93",3615:"82949687",3759:"c66ad817",3983:"10e11d27",4011:"4622eea3",4288:"72e03385",4309:"a71c7f35",4361:"83bc0e3c",4365:"37a2f7c5",4522:"50cda390",4891:"82350715",4972:"93a9ad6a",5262:"b63594f3",5525:"5d0a52b3",5531:"a48ec54f",5575:"c0ddff97",5830:"2e53177e",6200:"1d9a6b69",6300:"04494019",6391:"5cf8306e",6428:"06b87b1a",6429:"4ac4876b",6962:"7df38e40",7202:"a3f2ff91",7214:"667b2a0e",7918:"28867023",7920:"5fe98163",7977:"9548f14a",8009:"b4b61a64",8264:"1318da2f",8443:"de53e22d",8835:"d7439dc6",8880:"9c6d08c7",9514:"a5cbe2f1",9554:"e583269c",9656:"d8a56e18",9911:"c7ec3848",9957:"4944832c",9975:"920a4e72"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="docu-notion-sample-site:",b.l=(e,a,f,d)=>{if(t[e])t[e].push(a);else{var c,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+f){c=u;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",r+f),c.src=e),t[e]=[a];var l=(a,f)=>{c.onerror=c.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/fr/",b.gca=function(e){return e={17896441:"7918","935f2afb":"53",e4791c67:"146","1de72b33":"305","8633fa42":"532","115cce92":"545","35fcf7ba":"655","371a9059":"702",fae877d0:"1242",bfb4db3e:"1473","4335d1b3":"1809",d927a030:"2285","82f25f01":"2312",bb172fa0:"3160",c01cb8d8:"3573",d7ce2b27:"3615","94045ddf":"3759","8682744f":"3983",c485af28:"4011",ad895e75:"4288","669a8c51":"4309","04d65ab9":"4361","929b167b":"4365","0f5319c5":"4522","61b67ffe":"4891",bbf627b2:"5262","816e2483":"5531","7d4cdc4b":"5575",b35cbd6d:"5830",c3b73a7d:"6200","45e22b53":"6300",abd7d145:"6391",cb6d6896:"6428","46f8bf3a":"6429",fc38e1a9:"6962","1bbf88c0":"7202","4fad51ce":"7214","1a4e3797":"7920","688d4b4a":"7977","8b777e6f":"8009","9cfb5737":"8264",ecee466c:"8835",a930f881:"8880","1be78505":"9514","791cb365":"9554",ada8c202:"9911","9a8813fd":"9957","1e1d8dca":"9975"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,3312:0};b.f.j=(a,f)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1303|3312)$/.test(a))e[a]=0;else{var r=new Promise(((f,r)=>t=e[a]=[f,r]));f.push(t[2]=r);var d=b.p+b.u(a),c=new Error;b.l(d,(f=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;c.message="Loading chunk "+a+" failed.\n("+r+": "+d+")",c.name="ChunkLoadError",c.type=r,c.request=d,t[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var t,r,d=f[0],c=f[1],o=f[2],n=0;if(d.some((a=>0!==e[a]))){for(t in c)b.o(c,t)&&(b.m[t]=c[t]);if(o)var i=o(b)}for(a&&a(f);n<d.length;n++)r=d[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},f=self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();