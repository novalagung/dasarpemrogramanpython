"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[16],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>c});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(t),k=i,c=s["".concat(o,".").concat(k)]||s[k]||m[k]||r;return t?n.createElement(c,l(l({ref:a},u),{},{components:t})):n.createElement(c,l({ref:a},u))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=k;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[s]="string"==typeof e?e:i,l[1]=p;for(var d=2;d<r;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1130:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=t(7462),i=(t(7294),t(3905));const r={sidebar_position:6,title:"A.6. Tipe Data",sidebar_label:"A.6. Tipe Data",keywords:["tipe data python"]},l=void 0,p={unversionedId:"basic/tipe-data",id:"basic/tipe-data",title:"A.6. Tipe Data",description:"Python mengenal cukup banyak tipe data, mulai dari yang built-in maupun custom type. Pada chapter ini kita akan belajar high-level overview mengenai tipe-tipe tersebut.",source:"@site/docs/basic/tipe-data.md",sourceDirName:"basic",slug:"/basic/tipe-data",permalink:"/basic/tipe-data",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"A.6. Tipe Data",sidebar_label:"A.6. Tipe Data",keywords:["tipe data python"]},sidebar:"tutorialSidebar",previous:{title:"A.5. Konstanta",permalink:"/basic/konstanta"},next:{title:"A.7. Operator",permalink:"/basic/operator"}},o={},d=[{value:"A.6.1. Tipe data numerik",id:"a61-tipe-data-numerik",level:2},{value:"A.6.2. Tipe data <code>str</code>",id:"a62-tipe-data-str",level:2},{value:"A.6.3. Tipe data <code>bool</code>",id:"a63-tipe-data-bool",level:2},{value:"A.6.4. Tipe data list",id:"a64-tipe-data-list",level:2},{value:"A.6.5. Tipe data tuple",id:"a65-tipe-data-tuple",level:2},{value:"A.6.6. Tipe data dictionary",id:"a66-tipe-data-dictionary",level:2},{value:"A.6.7. Tipe data sets",id:"a67-tipe-data-sets",level:2},{value:"A.6.8. Tipe data lainnya",id:"a68-tipe-data-lainnya",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],u={toc:d},s="wrapper";function m(e){let{components:a,...t}=e;return(0,i.kt)(s,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Python mengenal cukup banyak tipe data, mulai dari yang ",(0,i.kt)("em",{parentName:"p"},"built-in")," maupun custom type. Pada chapter ini kita akan belajar ",(0,i.kt)("em",{parentName:"p"},"high-level overview")," mengenai tipe-tipe tersebut."),(0,i.kt)("h2",{id:"a61-tipe-data-numerik"},"A.6.1. Tipe data numerik"),(0,i.kt)("p",null,"Ada setidaknya 3 tipe data numerik di Python, yaitu:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Tipe data"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Keterangan"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Contoh"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"menampung bilangan bulat atau ",(0,i.kt)("em",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number_1 = 10000024"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"float")),(0,i.kt)("td",{parentName:"tr",align:"left"},"menampung bilangan desimal atau ",(0,i.kt)("em",{parentName:"td"},"floating point")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number_2 = 3.14"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"complex")),(0,i.kt)("td",{parentName:"tr",align:"left"},"menampung nilai berisi kombinasi bilangan real dan imajiner"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number_3 = 120+3j"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai tipe data numerik dibahas pada chapter ",(0,i.kt)("a",{parentName:"p",href:"#"},"Tipe Data Numerik"))),(0,i.kt)("h2",{id:"a62-tipe-data-str"},"A.6.2. Tipe data ",(0,i.kt)("inlineCode",{parentName:"h2"},"str")),(0,i.kt)("p",null,"Tipe string direpresentasikan oleh ",(0,i.kt)("inlineCode",{parentName:"p"},"str"),", pembuatannya bisa menggunakan literal string yang ditandai dengan tanda awalan dan akhiran tanda ",(0,i.kt)("inlineCode",{parentName:"p"},'"')," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"'"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Menggunakan tanda petik dua (",(0,i.kt)("inlineCode",{parentName:"p"},'"'),")"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# string sebaris\nstring_1 = "hello python"\n\n# string multi-baris\nstring_2 = """Selamat\nBelajar\nPython"""\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Menggunakan tanda petik satu (",(0,i.kt)("inlineCode",{parentName:"p"},"'"),")"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# string sebaris\nstring_3 = 'for the horde!'\n\n# string multi-baris\nstring_4 = '''\nSesuk\nPreiiii\n'''\n")))),(0,i.kt)("h2",{id:"a63-tipe-data-bool"},"A.6.3. Tipe data ",(0,i.kt)("inlineCode",{parentName:"h2"},"bool")),(0,i.kt)("p",null,"Literal untuk tipe data boolean di Python adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"True")," untuk nilai benar, dan ",(0,i.kt)("inlineCode",{parentName:"p"},"False")," untuk nilai salah."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"bool_1 = True\nbool_2 = False\n")),(0,i.kt)("h2",{id:"a64-tipe-data-list"},"A.6.4. Tipe data list"),(0,i.kt)("p",null,"List adalah tipe data di Python untuk menampung nilai kolektif yang disimpan secara urut. Tipe ini biasa disebut sebagai ",(0,i.kt)("strong",{parentName:"p"},"array"),". Cara penerapan list adalah dengan menuliskan nilai kolektif dengan pembatas ",(0,i.kt)("inlineCode",{parentName:"p"},",")," dan diapit tanda ",(0,i.kt)("inlineCode",{parentName:"p"},"[")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"]"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# list with int as element\'s data type\nlist_1 = [2, 4, 8, 16]\n\n# list with str as element\'s data type\nlist_2 = ["grayson", "jason", "tim", "damian"]\n\n# list with various data type in the element\nlist_3 = [24, False, "Hello Python"]\n')),(0,i.kt)("p",null,"Pengaksesan element list menggunakan notasi ",(0,i.kt)("inlineCode",{parentName:"p"},"list[index_number]"),". Contoh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"list_1 = [2, 4, 8, 16]\nprint(list_1[2])\n# output: 8\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai list dibahas pada chapter ",(0,i.kt)("a",{parentName:"p",href:"#"},"Tipe Data List"))),(0,i.kt)("h2",{id:"a65-tipe-data-tuple"},"A.6.5. Tipe data tuple"),(0,i.kt)("p",null,"Tuple adalah tipe data kolektif yang mirip dengan list, dengan pembeda adalah:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nilai pada data list adalah bisa diubah (",(0,i.kt)("em",{parentName:"li"},"mutable"),"), sedangkan nilai data ",(0,i.kt)("inlineCode",{parentName:"li"},"tuple")," tidak bisa diubah (",(0,i.kt)("em",{parentName:"li"},"immutable"),")."),(0,i.kt)("li",{parentName:"ul"},"List menggunakan tanda ",(0,i.kt)("inlineCode",{parentName:"li"},"[")," dan ",(0,i.kt)("inlineCode",{parentName:"li"},"]")," untuk penulisan literal, sedangkan pada tuple yang digunakan adalah tanda ",(0,i.kt)("inlineCode",{parentName:"li"},"(")," dan ",(0,i.kt)("inlineCode",{parentName:"li"},")"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# tuple with int as element\'s data type\ntuple_1 = (2, 3, 4)\n\n# tuple with str as element\'s data type\ntuple_2 = ("numenor", "valinor")\n\n# tuple with various data type in the element\ntuple_3 = (24, False, "Hello Python")\n')),(0,i.kt)("p",null,"Pengaksesan element tuple menggunakan notasi ",(0,i.kt)("inlineCode",{parentName:"p"},"tuple[index_number]"),". Contoh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"tuple_1 = (2, 3, 4)\nprint(tuple_1[2])\n# output: 4\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai tuple dibahas pada chapter ",(0,i.kt)("a",{parentName:"p",href:"#"},"Tipe Data Tuple"))),(0,i.kt)("h2",{id:"a66-tipe-data-dictionary"},"A.6.6. Tipe data dictionary"),(0,i.kt)("p",null,"Tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"dict")," atau dictionary berguna untuk menyimpan data kolektif terstruktur berbentuk ",(0,i.kt)("em",{parentName:"p"},"key value"),". Contoh penerapan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'profile_1 = {\n  "name": "Noval",\n  "is_male": False,\n  "age": 16,\n  "hobbies": ["gaming", "learning"]\n}\n')),(0,i.kt)("p",null,"Pengaksesan property dictionary menggunakan notasi ",(0,i.kt)("inlineCode",{parentName:"p"},"dict[property_name]"),". Contoh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'print("name: %s" % (profile_1["name"]))\nprint("hobbies: %s" % (profile_1["hobbies"]))\n')),(0,i.kt)("p",null,"Penulisan data dictionary diperbolehkan secara horizontal, contohnya seperti berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'profile_1 = { "name": "Noval", "hobbies": ["gaming", "learning"] }\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai dictionary dibahas pada chapter ",(0,i.kt)("a",{parentName:"p",href:"#"},"Tipe Data Dictionary & Sets"))),(0,i.kt)("h2",{id:"a67-tipe-data-sets"},"A.6.7. Tipe data sets"),(0,i.kt)("p",null,"Tipe data sets adalah cara lain untuk menyimpan data kolektif. Tipe data ini memiliki beberapa kelemahan:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tidak bisa menyimpan informasi urutan data"),(0,i.kt)("li",{parentName:"ul"},"Elemen data yang sudah didefinisikan tidak bisa diubah nilainya (tapi bisa dihapus)"),(0,i.kt)("li",{parentName:"ul"},"Tidak bisa diakses menggunakan index (tetapi bisa menggunakan perulangan)")),(0,i.kt)("p",null,"Contoh penerapan sets:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'set_1 = {"pineapple", "spaghetti"}\nprint(set_1)\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai sets dibahas pada chapter ",(0,i.kt)("a",{parentName:"p",href:"#"},"Tipe Data Dictionary & Sets"))),(0,i.kt)("h2",{id:"a68-tipe-data-lainnya"},"A.6.8. Tipe data lainnya"),(0,i.kt)("p",null,"Selain tipe-tipe di atas ada juga beberapa tipe data lainnya, seperti frozenset, bytes, memoryview, range; dan kesemuanya akan dibahas satu per satu di chapter terpisah."),(0,i.kt)("hr",null),(0,i.kt)("div",{class:"section-footnote"},(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/tipe-data"},"github.com/novalagung/dasarpemrogramanpython-example/../tipe-data")),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/python-data-types"},"https://www.digitalocean.com/community/tutorials/python-data-types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://note.nkmk.me/en/python-int-max-value/"},"https://note.nkmk.me/en/python-int-max-value/")))))}m.isMDXComponent=!0}}]);