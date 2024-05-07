"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[312],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>d});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),s=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(o.Provider,{value:a},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||k[m]||i;return n?t.createElement(d,l(l({ref:a},c),{},{components:n})):t.createElement(d,l({ref:a},c))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3065:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_position:31,title:"A.31. Python None",sidebar_label:"A.31. None"},l=void 0,p={unversionedId:"basic/none",id:"basic/none",title:"A.31. Python None",description:"Pada chapter ini kita akan belajar tentang object special bernama None.",source:"@site/docs/basic/none.md",sourceDirName:"basic",slug:"/basic/none",permalink:"/basic/none",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31,title:"A.31. Python None",sidebar_label:"A.31. None"},sidebar:"tutorialSidebar",previous:{title:"A.30. Special Names",permalink:"/basic/special-names"},next:{title:"A.32. Pack Unpack \u279c Tuple, List, Set, Dict",permalink:"/basic/pack-unpack-elements"}},o={},s=[{value:"A.31.1. Pengenalan <code>None</code>",id:"a311-pengenalan-none",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],c={toc:s},u="wrapper";function k(e){let{components:a,...n}=e;return(0,r.kt)(u,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pada chapter ini kita akan belajar tentang object special bernama ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,r.kt)("h2",{id:"a311-pengenalan-none"},"A.31.1. Pengenalan ",(0,r.kt)("inlineCode",{parentName:"h2"},"None")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"None")," merupakan object bawaan Python yang umumnya digunakan untuk merepresentasikan nilai kosong atau ",(0,r.kt)("em",{parentName:"p"},"null"),"."),(0,r.kt)("p",null,"Ketika suatu variabel berisi data yang nilainya bisa kosong, umumnya sebelum variabel tersebut digunakan, dilakukan pengecekan terlebih dahulu menggunakan seleksi kondisi untuk memastikan apakah nilainya benar-benar kosong atau tidak."),(0,r.kt)("p",null,"Sebagai contoh, pada kode berikut, dipersiapkan sebuah fungsi bernama ",(0,r.kt)("inlineCode",{parentName:"p"},"inspect_data()"),", tugasnya mengecek apakah variabel memiliki nilai atau tidak."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def inspec_data(data):\n    if data == None:\n        print("data is empty. like very empty")\n    else:\n        print(f"data: {data}, type: {type(data).__name__}")\n\ndata = 0\ninspec_data(data)\n# output \u279c data: 0, type: int\n\ndata = ""\ninspec_data(data)\n# output \u279c data: , type: str\n\ndata = None\ninspec_data(data)\n# output \u279c data is empty. like very empty\n\nclass Car:\n    def __init__(self):\n        self.name = ""\n\ndata = Car()\ninspec_data(data)\n# output \u279c data: <__main__.Car object at 0x000001E6B38F60F0>, type: Car\n')),(0,r.kt)("p",null,"Bisa dilihat pada program di atas output tiap statement adalah berbeda-beda sesuai tipe datanya."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ketika variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," berisi ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," maka variabel tersebut tidak benar-benar kosong, melainkan berisi angka ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Karakteristik yang sama juga berlaku ketika variabel berisi string kosong ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),", meskipun ketika di-print tidak muncul apa-apa, variabel tersebut sebenarnya berisi tipe data string namun tanpa isi. Maka variabel tersebut sebenarnya tidak benar-benar kosong, melainkan berisi angka ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Barulah ketika variabel isinya data ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," maka dianggap benar-benar kosong."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Kode di atas berisi penerapan salah satu special name, yaitu attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"__name__")," milik class ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"."),(0,r.kt)("p",{parentName:"blockquote"},"Pembahasan detail mengenai special name ada di chapter ",(0,r.kt)("a",{parentName:"p",href:"/basic/special-names#a294-attribute-__name__-milik-class-type"},"Special Names \u279c Attribute ",(0,r.kt)("strong",{parentName:"a"},"name")," milik class type"))),(0,r.kt)("hr",null),(0,r.kt)("div",{class:"section-footnote"},(0,r.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,r.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,r.kt)("pre",null,(0,r.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/none"},"github.com/novalagung/dasarpemrogramanpython-example/../none")),(0,r.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/tipe-data"},"Tipe Data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/special-names"},"Special Names"))),(0,r.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/c-api/none.html"},"https://docs.python.org/3/c-api/none.html")))))}k.isMDXComponent=!0}}]);