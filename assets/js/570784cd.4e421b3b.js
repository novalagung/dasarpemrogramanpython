"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[1466],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>g});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),d=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return a?t.createElement(g,i(i({ref:n},s),{},{components:a})):t.createElement(g,i({ref:n},s))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3071:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=a(7462),r=(a(7294),a(3905));const l={sidebar_position:54,title:"A.54. Python Delete Object",sidebar_label:"A.54. Delete Object"},i=void 0,o={unversionedId:"basic/del",id:"basic/del",title:"A.54. Python Delete Object",description:"Pada sekian chapter yang lalu kita telah belajar tentang object None, fungsinya untuk menandai variabel agar bernilai kosong.",source:"@site/docs/basic/del.md",sourceDirName:"basic",slug:"/basic/del",permalink:"/basic/del",draft:!1,tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54,title:"A.54. Python Delete Object",sidebar_label:"A.54. Delete Object"},sidebar:"tutorialSidebar",previous:{title:"A.53. DateTime \u279c Parsing & Formatting",permalink:"/basic/datetime-parsing-formatting"},next:{title:"A.55. Enumeration",permalink:"/basic/enum"}},p={},d=[{value:"A.54.1. Keyword <code>del</code>",id:"a541-keyword-del",level:2},{value:"\u25c9 Delete list item",id:"-delete-list-item",level:3},{value:"\u25c9 Delete dictionary item",id:"-delete-dictionary-item",level:3},{value:"\u25c9 Delete class/object property",id:"-delete-classobject-property",level:3},{value:"\u25c9 Delete function",id:"-delete-function",level:3},{value:"\u25c9 Delete class",id:"-delete-class",level:3},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],s={toc:d},u="wrapper";function c(e){let{components:n,...l}=e;return(0,r.kt)(u,(0,t.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pada sekian chapter yang lalu kita telah belajar tentang object ",(0,r.kt)("a",{parentName:"p",href:"/basic/none"},"None"),", fungsinya untuk menandai variabel agar bernilai kosong."),(0,r.kt)("p",null,"Kali ini yang kita pelajari adalah keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"del")," untuk operasi delete object. Hasil penggunaan keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"del")," benar-benar menghapus variabel beserta isinya, jadi tidak hanya mengosongkan nilainya."),(0,r.kt)("h2",{id:"a541-keyword-del"},"A.54.1. Keyword ",(0,r.kt)("inlineCode",{parentName:"h2"},"del")),(0,r.kt)("p",null,"Penggunaan ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," sebagai nilai suatu variabel menjadikan variabel tersebut tetap ada tapi nilainya berubah menjadi ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),". Jadi penggunaan ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," disini berguna untuk mengosongkan variabel tanpa menghapus variabel itu sendiri."),(0,r.kt)("p",null,"Bagaimana jika kita ingin benar-benar menghapus suatu variabel? Caranya menggunakan keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"del"),". Contoh penggunaannya bisa dilihat di bawah ini:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'name = "Noval Agung"\nprint(name)\n\ndel name\nprint(name)\n')),(0,r.kt)("p",null,"Operasi print pertama memunculkan nilai variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," tanpa kendala. Namun di statement print ke-2, variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," tidak dikenal dan menghasilkan error karena variabel tersebut telah dihapus menggunakan keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"del"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"python delete object",src:a(3903).Z,width:"866",height:"216"})),(0,r.kt)("p",null,"Jadi keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"del")," ini benar-benar menghapus variabel ya."),(0,r.kt)("p",null,"Tak hanya ke variabel saja, keyword ini bisa digunakan untuk menghapus attribute, item list, class, fungsi, dan banyak lainnya!"),(0,r.kt)("h3",{id:"-delete-list-item"},"\u25c9 Delete list item"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"obj = [\"Noval\", \"Malang\", \"Chad\"]\nprint(obj)\n# output \u279c name: ['Noval', 'Malang', 'Chad']\n\ndel obj[1]\nprint(obj)\n# output \u279c name: ['Noval', 'Chad']\n")),(0,r.kt)("h3",{id:"-delete-dictionary-item"},"\u25c9 Delete dictionary item"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"obj = {\n    \"name\": \"Noval\",\n    \"city\": \"Malang\",\n    \"gender\": \"Chad\"\n}\nprint(obj)\n# output \u279c name: {'name': 'Noval', 'city': 'Malang', 'gender': 'Chad'}\n\ndel obj[\"city\"]\nprint(obj)\n# output \u279c name: {'name': 'Noval', 'gender': 'Chad'}\n\ndel obj[\"gender\"]\nprint(obj)\n# output \u279c name: {'gender': 'Chad'}\n")),(0,r.kt)("h3",{id:"-delete-classobject-property"},"\u25c9 Delete class/object property"),(0,r.kt)("p",null,"Keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"del")," dalam penggunaannya terhadap property class/object membuat property tersebut menjadi tidak ada."),(0,r.kt)("p",null,"Pada contoh berikut statement delete dibungkus block ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," untuk menangkap error yang muncul karena mencoba mengakses property yang tidak terdaftar."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class Person:\n    def __init__(self, name, city, gender):\n        self.name = name\n        self.city = city\n        self.gender = gender\n\np = Person("Noval", "Malang", "Chad")\nprint(p.name, p.city, p.gender)\n# output \u279c Noval Malang Chad\n\ntry:\n    del p.city\n    print(p.name, p.city, p.gender)\n    # raise exception \u2b07\ufe0f\n\nexcept Exception as err:\n    print(err)\n    # output \u279c \'Person\' object has no attribute \'city\'\n')),(0,r.kt)("h3",{id:"-delete-function"},"\u25c9 Delete function"),(0,r.kt)("p",null,"Tak hanya object, fungsi juga bisa dihapus."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def say_hello():\n    print(\"hello world\")\n\nsay_hello()\n# output \u279c hello world\n\ntry:\n    del say_hello\n    say_hello()\n    # output \u279c name 'say_hello' is not defined\n\nexcept Exception as err:\n    print(err)\n")),(0,r.kt)("h3",{id:"-delete-class"},"\u25c9 Delete class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class Person:\n    def __init__(self, name, city, gender):\n        self.name = name\n        self.city = city\n        self.gender = gender\n\np = Person("Noval", "Malang", "Chad")\nprint(p.name, p.city, p.gender)\n# output \u279c Noval Malang Chad\n\ntry:\n    del Person\n    p = Person("Noval", "Malang", "Chad")\n    # output \u279c name \'Person\' is not defined\n\nexcept Exception as err:\n    print(err)\n')),(0,r.kt)("hr",null),(0,r.kt)("div",{class:"section-footnote"},(0,r.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,r.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,r.kt)("pre",null,(0,r.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/del"},"github.com/novalagung/dasarpemrogramanpython-example/../del")),(0,r.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/none"},"None"))),(0,r.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/tutorial/datastructures.html#the-del-statement"},"https://docs.python.org/3/tutorial/datastructures.html#the-del-statement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/reference/simple_stmts.html#del"},"https://docs.python.org/3/reference/simple_stmts.html#del")))))}c.isMDXComponent=!0},3903:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/del-1-425a022ff7aa1cd721ea4eb3f7cdcfd3.png"}}]);