"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[655],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=d(a),c=n,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||i;return a?o.createElement(m,r(r({ref:t},p),{},{components:a})):o.createElement(m,r({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=a(7462),n=(a(7294),a(3905));const i={title:"Data Populator",sidebar_position:1,slug:"/populator"},r=void 0,s={unversionedId:"Apps/populator",id:"Apps/populator",title:"Data Populator",description:"Why did we create the Data Populator?",source:"@site/docs/Apps/populator.md",sourceDirName:"Apps",slug:"/populator",permalink:"/fr/populator",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Data Populator",sidebar_position:1,slug:"/populator"},sidebar:"tutorialSidebar",previous:{title:"The Portal",permalink:"/fr/portal"},next:{title:"Browser Extension",permalink:"/fr/136450d3-7d06-80d9-b8b6-c1d54dbb7348"}},l={},d=[{value:"Why did we create the Data Populator?",id:"13b450d37d0681879e60ce710a3cb356",level:2},{value:"Where you can access it:",id:"13b450d37d068159875af040011e61a6",level:2},{value:"Instruction Guide",id:"13b450d37d0681b0b630ef62dc8124df",level:2},{value:"In conclusion",id:"13b450d37d06813d8105d996bffe779a",level:2}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"13b450d37d0681879e60ce710a3cb356"},"Why did we create the Data Populator?"),(0,n.kt)("p",null,"Do you have a large amount of data you want to add to the Intuition System, but not enough time or patience to manually create each data point as an atom or triple in the Portal?  Look no further!  The Data Populator V1 is here!"),(0,n.kt)("h2",{id:""}),(0,n.kt)("p",null,"What it does, in brief {#13b450d37d0681559e0ffd594bbc4fe8}"),(0,n.kt)("p",null,"You can use the Data Populator to load CSV files which contain long lists of atom data.  The user interface will allow you to perform some basic proofreading of the data, and when you\u2019re ready you can submit it to the Intuition System in one fell swoop.  This works by batching all of the atom data together into very large EVM transactions, after automatically pinning and filtering the metadata onto IPFS.  This is very similar to the behavior in the Portal App, except it\u2019s designed to work with much larger volumes of data."),(0,n.kt)("h2",{id:"13b450d37d068159875af040011e61a6"},"Where you can access it:"),(0,n.kt)("p",null,"There are two deployments for the Data Populator - one for testing, which runs on Base Sepolia, and one for production which runs on Base."),(0,n.kt)("p",null,"You can visit the TESTNET Data Populator here:\n",(0,n.kt)("a",{parentName:"p",href:"https://data-populator.onrender.com/"},"https://data-populator-dev.onrender.com")," "),(0,n.kt)("p",null,"And the PRODUCTION Data Populator here:\n",(0,n.kt)("a",{parentName:"p",href:"https://data-populator.onrender.com/"},"https://data-populator.onrender.com")," "),(0,n.kt)("p",null,"It\u2019s strongly recommended, especially for first time users, to start off with the TESTNET version to verify everything looks good with your data before spending real Base Ethereum on populating it.  Please read this guide before using it."),(0,n.kt)("h2",{id:"13b450d37d0681b0b630ef62dc8124df"},"Instruction Guide"),(0,n.kt)("p",null,"The first thing you will need to do, if you haven\u2019t already, is authenticate and log into the system.  If you are not authenticated yet, you will be shown this ",(0,n.kt)("inlineCode",{parentName:"p"},"Connect")," button:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1351).Z,width:"379",height:"289"})),(0,n.kt)("p",null,"Click the ",(0,n.kt)("inlineCode",{parentName:"p"},"connect")," button and authorize using your method of choice.  Follow the prompts shown on screen to complete the log-in process."),(0,n.kt)("p",null,"Now that we\u2019ve gotten that out of the way, here is a run-down of the User Interface, which you should see after logging in:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5285).Z,width:"1049",height:"841"})),(0,n.kt)("p",null,"The top menu bar contains several buttons: A helpful ",(0,n.kt)("inlineCode",{parentName:"p"},"tooltip toggle")," button, a ",(0,n.kt)("inlineCode",{parentName:"p"},"dark/light mode")," button, a ",(0,n.kt)("inlineCode",{parentName:"p"},"history")," button, and a ",(0,n.kt)("inlineCode",{parentName:"p"},"settings")," button.  It also shows which version of the Data Populator app we are using - in this case we are using the ",(0,n.kt)("inlineCode",{parentName:"p"},"TESTNET")," version connected to Base Sepolia."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2213).Z,width:"1042",height:"97"})),(0,n.kt)("p",null,"Beneath the top menu bar, we have some more buttons: A ",(0,n.kt)("inlineCode",{parentName:"p"},"Load CSV")," button, an ",(0,n.kt)("inlineCode",{parentName:"p"},"Add New Row")," button, a ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete Selected Rows")," button, a ",(0,n.kt)("inlineCode",{parentName:"p"},"Publish Atoms")," button, and a ",(0,n.kt)("inlineCode",{parentName:"p"},"Save CSV")," button:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(231).Z,width:"1042",height:"161"})),(0,n.kt)("p",null,"The first thing you will probably want to do is load a CSV file.  It\u2019s important to understand the expected format of the CSV file, and how the Data Populator expects it to look."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(870).Z,width:"1038",height:"825"})),(0,n.kt)("p",null,"In the animation above, we are loading a CSV which contains only one atom, for the sake of simplifying this demonstration.  The Data Populator will load any CSV file which has a header row.  We are using one which conforms to the ",(0,n.kt)("a",{parentName:"p",href:"http://schema.org/thing"},"schema.org/thing")," format - with the most basic properties.  In this case, we have a CSV which is encoded like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},'@context,@type,name,url,description,image\nhttps://schema.org,Thing,Alien,https://www.imdb.com/title/tt0078748/,"After investigating a mysterious transmission of unknown origin, the crew of a commercial spacecraft encounters a deadly lifeform.",https://m.media-amazon.com/images/M/MV5BN2NhMDk2MmEtZDQzOC00MmY5LThhYzAtMDdjZGFjOGZjMjdjXkEyXkFqcGc@._V1_.jpg\n')),(0,n.kt)("p",null,"Note that any \u201ccells\u201d which contain commas must be enclosed in \u201cquotation marks\u201d.  If you exported your CSV file from an application like Google Sheets, Microsoft Excel or Apple Numbers, it should automatically encode the CSV file this way."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"At the present moment, our system is only designed to use the metadata format above.  Support for all kinds of schemas and different URIs is coming soon, but for now it\u2019s extremely important that you use the format above.  The columns must be defined in the order shown above, with the capitalization and spelling shown above, and with ",(0,n.kt)("a",{parentName:"p",href:"https://schema.org/"},(0,n.kt)("inlineCode",{parentName:"a"},"https://schema.org"))," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Thing")," as the first two values in every row.")),(0,n.kt)("p",null,"We have been using this tool internally for a while and have designed it based on challenges we\u2019ve run into when importing large sets of data - often edited or assembled by AI or webcrawlers.  If your CSV file has any issues with it such as weird characters or duplicate rows, the Data Populator should automatically detect this upon importing it."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1152).Z,width:"1038",height:"825"})),(0,n.kt)("p",null,"In our example, the Data Populator detected some garbled text in our CSV as well as a duplicate row - which it automatically deletes.  We can then save over our CSV with the corrections using the ",(0,n.kt)("inlineCode",{parentName:"p"},"Save CSV")," button."),(0,n.kt)("p",null,"Another thing to look out for in your CSV data is duplicate rows, or nearly duplicate rows.  While it\u2019s very simple to detect duplicate rows, the Data Populator leaves higher reasoning up to the user in the event that there are similar rows.  In the animation below, we select various columns to sort by and the user interface will automatically encase matching adjacent cells in yellow:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9797).Z,width:"1038",height:"825"})),(0,n.kt)("p",null,"We found two very similar rows with the same ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," , ",(0,n.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"image"),".  We reviewed the differences and deleted the one we didn\u2019t want, then made sure to save our progress to a CSV file on disk."),(0,n.kt)("p",null,"Once you are happy with how your CSV data looks, you can upload it to the Intuition System.  This is done by selecting all of the rows you want to upload and clicking the ",(0,n.kt)("inlineCode",{parentName:"p"},"Publish Atoms")," button:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5440).Z,width:"1038",height:"937"})),(0,n.kt)("p",null,"Don\u2019t worry if some of your atoms already exist (shown by the ",(0,n.kt)("inlineCode",{parentName:"p"},"green checkmark")," on the left of the rows).  The Data Populator will automatically sort them out and omit them from any EVM transactions which are generated for you to sign."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"As of today, the Data Populator does take some time to upload and filter the metadata - this is because it\u2019s being run through our content moderation filter.  We are working on making optimizations to this.  ")),(0,n.kt)("p",null,"After a few minutes, the Data Populator will prompt you to sign an EVM transaction to submit the processed and filtered atoms:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6819).Z,width:"1038",height:"937"})),(0,n.kt)("p",null,"Once the approved transaction is approved and confirmed, the Data Populator continues verifying the request and keeps track of everything for you.  You should see ",(0,n.kt)("inlineCode",{parentName:"p"},"green checkmarks")," appear to the left of all of the rows - which indicate that these atoms are now live in the Intuition System."),(0,n.kt)("p",null,"If you open the ",(0,n.kt)("inlineCode",{parentName:"p"},"History")," menu from the top menu bar, you can see all of the Atoms that you\u2019ve created via the Data Populator - as well as the requests associated with them.  You can even download the CSV file from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Requests")," table if you so desire - in case you are working on more than one machine, or are collaborating with team members using the application."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4221).Z,width:"1038",height:"937"})),(0,n.kt)("p",null,"If you would like to tag atoms, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Tag Menu")," below the ",(0,n.kt)("inlineCode",{parentName:"p"},"Atom Table"),".  We are working on a much more composable interface for creating many attestations about many atoms, but the current functionality works great for creating simple lists.  First we will create a tag atom for our list by filling out the desired metadata:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5846).Z,width:"1038",height:"937"})),(0,n.kt)("p",null,"Once the tag atom has been created, we can select the atoms we wish to tag and tag them, like so:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8443).Z,width:"1038",height:"937"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"It\u2019s important to note that if you want to create triples or tags, all of the selected atoms must exist in the system first - meaning they have been published and the tag has been created.  ")),(0,n.kt)("h2",{id:"13b450d37d06813d8105d996bffe779a"},"In conclusion"),(0,n.kt)("p",null,"We hope this guide has given you a clear and straightforward understanding of the Data Populator application and how to use it.  We are working tirelessly to bring you newer and more sophisticated features, to enable you to submit all kinds of interconnected data to the system."))}u.isMDXComponent=!0},6819:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/populator.13b450d3-7d06-8110-92f9-c21f7959643e-075429cebcabafcb6747be6bc01a1b86.gif"},4221:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/populator.13b450d3-7d06-8110-b144-d777d22e7a3f-20195d1b7da6ae3a71409f7c4e8b2e9f.gif"},1152:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/populator.13b450d3-7d06-8136-b0ef-fbd69b85db35-fa03acbc28e5373e9d857381d318d760.gif"},5285:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/populator.13b450d3-7d06-814b-8917-cc943ba14eee-c279f841a51cf58f315c83b89a42a53a.png"},5846:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/populator.13b450d3-7d06-815b-9bdb-ced94695ec87-9e8c5eae276d74fa40e17e50d5cdc81a.gif"},231:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/populator.13b450d3-7d06-816f-9907-f1496c4944a9-f0dc6bc9b36d3cbf4a107b816b004cdb.gif"},9797:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/populator.13b450d3-7d06-817a-aa66-d09cab028b26-797de0269e2a3d03378f391c3b041af8.gif"},870:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/populator.13b450d3-7d06-8185-b2c3-d20295454e60-28446193268efed16cfd32ee9dda3bf9.gif"},1351:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/populator.13b450d3-7d06-81a6-844a-ce8b96ac2165-fdbc6a78347c81a6a7416b1d399747da.png"},2213:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/populator.13b450d3-7d06-81b2-ac4c-cf6df29a45db-71cfb951b8900db27ff46f189fe11147.gif"},5440:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/populator.13b450d3-7d06-81b5-885b-e5c390a48a58-f63c274e390585eb0e869fd4569b10c5.gif"},8443:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/populator.13b450d3-7d06-81ca-ada5-d5567341116f-4c886282d7362e8256146c66ad57a169.gif"}}]);