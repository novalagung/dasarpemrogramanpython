"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[3867],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>k});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=t.createContext({}),m=function(e){var a=t.useContext(r),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},d=function(e){var a=m(e.components);return t.createElement(r.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=m(n),u=i,k=p["".concat(r,".").concat(u)]||p[u]||c[u]||l;return n?t.createElement(k,s(s({ref:a},d),{},{components:n})):t.createElement(k,s({ref:a},d))}));function k(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,s=new Array(l);s[0]=u;var o={};for(var r in a)hasOwnProperty.call(a,r)&&(o[r]=a[r]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var m=2;m<l;m++)s[m]=n[m];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3493:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var t=n(7462),i=(n(7294),n(3905));const l={sidebar_position:38,title:"A.38. Python OOP \u279c Static Method",sidebar_label:"A.38. OOP \u279c Static Method"},s=void 0,o={unversionedId:"basic/static-method",id:"basic/static-method",title:"A.38. Python OOP \u279c Static Method",description:"Chapter ini membahas tentang static method beserta penggunaan dan perbedaannya dibanding jenis method lainnya.",source:"@site/docs/basic/static-method.md",sourceDirName:"basic",slug:"/basic/static-method",permalink:"/basic/static-method",draft:!1,tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,title:"A.38. Python OOP \u279c Static Method",sidebar_label:"A.38. OOP \u279c Static Method"},sidebar:"tutorialSidebar",previous:{title:"A.37. OOP \u279c Class Method",permalink:"/basic/class-method"},next:{title:"A.39. Function \u279c Decorator",permalink:"/basic/decorator"}},r={},m=[{value:"A.38.1. Pengenalan static method",id:"a381-pengenalan-static-method",level:2},{value:"A.38.2. Fungsi <code>staticmethod()</code>",id:"a382-fungsi-staticmethod",level:2},{value:"A.38.3. Summary",id:"a383-summary",level:2},{value:"\u25c9 Constructor",id:"-constructor",level:3},{value:"\u25c9 Instance method",id:"-instance-method",level:3},{value:"\u25c9 Class method",id:"-class-method",level:3},{value:"\u25c9 Static method",id:"-static-method",level:3},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],d={toc:m},p="wrapper";function c(e){let{components:a,...n}=e;return(0,i.kt)(p,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Chapter ini membahas tentang static method beserta penggunaan dan perbedaannya dibanding jenis method lainnya."),(0,i.kt)("h2",{id:"a381-pengenalan-static-method"},"A.38.1. Pengenalan static method"),(0,i.kt)("p",null,"Telah kita pelajari bahwa suatu fungsi agar dikenali sebagai method harus dideklarasikan di dalam block ",(0,i.kt)("inlineCode",{parentName:"p"},"class")," dan memiliki parameter implicit ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," (untuk instance method) dan ",(0,i.kt)("inlineCode",{parentName:"p"},"cls")," (untuk class method)."),(0,i.kt)("p",null,"Selain dua method tersebut, ada lagi jenis method lain bernama static method atau method statis, yang ciri khasnya adalah memiliki decorator ",(0,i.kt)("inlineCode",{parentName:"p"},"@staticmethod")," dan tidak memiliki parameter ",(0,i.kt)("em",{parentName:"p"},"implicit")," ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," maupun ",(0,i.kt)("inlineCode",{parentName:"p"},"cls"),"."),(0,i.kt)("p",null,"Static method bisa diakses via instance object maupun via class. Contoh penerapannya bisa dilihat pada kode berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Person:\n\n    def __init__(self, name = ""):\n        self.name = name\n\n    def info(self):\n        print(f"{self.name}")\n\n    @classmethod\n    def create(cls, name = ""):\n        obj = cls()\n        obj.name = name\n        return obj\n    \n    @staticmethod\n    def say_hello():\n        print("hello")\n    \n    @staticmethod\n    def say_something(message, name = None):\n        if name != None:\n            print(f"{name} said: {message}")\n        else:\n            print(message)\n\np1 = Person.create("Kassandra")\np1.say_hello()\n# output \u279c hello\n\nPerson.say_hello()\n# output \u279c hello\n\np2 = Person("Edward Kenway")\np2.say_something("hello folks! #1")\n# output \u279c hello folks! #1\n\np2.say_something("hello folks! #2", p2.name)\n# output \u279c Edward Kenway said: hello folks! #2\n\nPerson.say_something("hello folks! #3")\n# output \u279c hello folks! #3\n')),(0,i.kt)("p",null,"Di contoh di atas, ada dua buah static method dideklarasikan:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Method ",(0,i.kt)("inlineCode",{parentName:"li"},"say_hello()")," dideklarasikan tanpa parameter"),(0,i.kt)("li",{parentName:"ul"},"Method ",(0,i.kt)("inlineCode",{parentName:"li"},"say_something()")," dideklarasikan dengan 2 buah parameter")),(0,i.kt)("p",null,"Kedua method tersebut diakses untuk memunculkan 5 buah output berbeda via instance object maupun via class ",(0,i.kt)("inlineCode",{parentName:"p"},"Person"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Method ",(0,i.kt)("inlineCode",{parentName:"li"},"say_hello()")," dipanggil 2x via instance object ",(0,i.kt)("inlineCode",{parentName:"li"},"edward")," dan via class ",(0,i.kt)("inlineCode",{parentName:"li"},"Person")),(0,i.kt)("li",{parentName:"ul"},"Method ",(0,i.kt)("inlineCode",{parentName:"li"},"say_something()")," juga sama, diakses via instance object 2x dan diakses via class 1x")),(0,i.kt)("h2",{id:"a382-fungsi-staticmethod"},"A.38.2. Fungsi ",(0,i.kt)("inlineCode",{parentName:"h2"},"staticmethod()")),(0,i.kt)("p",null,"Python menyediakan fungsi bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"staticmethod()")," yang kegunaannya adalah untuk mengkonversi fungsi biasa (yang dideklarasikan di luar class) menjadi static method milik suatu class."),(0,i.kt)("p",null,"Sebagai contoh, kode praktek yang telah ditulis kita ",(0,i.kt)("em",{parentName:"p"},"refator")," menjadi seperti ini. Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"say_hello()")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"say_something()")," dideklarasikan sebagai fungsi biasa. Kemudian dijadikan sebagai class method milik class ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," via peneparan ",(0,i.kt)("inlineCode",{parentName:"p"},"staticmethod()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def say_hello():\n    print("hello")\n\ndef say_something(message, name = None):\n    if name != None:\n        print(f"{name} said: {message}")\n    else:\n        print(message)\n\nclass Person:\n\n    def __init__(self, name = ""):\n        self.name = name\n\n    say_hello = staticmethod(say_hello)\n    say_something = staticmethod(say_something)\n\np3 = Person("Arno Victor Dorian")\np3.say_hello()\n# output \u279c hello\n\nPerson.say_hello()\n# output \u279c hello\n\np4 = Person("Ad\xe9wal\xe9")\np4.say_something("hello folks! #1")\n# output \u279c hello folks! #1\n\np4.say_something("hello folks! #2", p4.name)\n# output \u279c Ad\xe9wal\xe9 said: hello folks! #2\n\nPerson.say_something("hello folks! #3")\n# output \u279c hello folks! #3\n')),(0,i.kt)("p",null,"Cara penerapan fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"staticmethod()")," adalah dengan cukup memanggilnya untuk membungkus fungsi biasa, lalu nilai baliknya ditampung sebagai attribute class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Person:\n\n    def __init__(self, name = ""):\n        self.name = name\n\n    say_hello = staticmethod(say_hello)\n    say_something = staticmethod(say_something)\n')),(0,i.kt)("p",null,"Attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"say_hello")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"say_something")," keduanya menjadi static method."),(0,i.kt)("p",null,"Nama class attribute penampung pemanggilan fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"staticmethod()")," bisa nama apapun, tidak harus sama dengan nama fungsi aslinya. Contohnya bisa dilihat pada kode berikut, fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"say_something()")," dijadikan sebagai class method bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"greet()")," milik class ",(0,i.kt)("inlineCode",{parentName:"p"},"Person"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def say_something(message, name = None):\n    if name != None:\n        print(f"{name} said: {message}")\n    else:\n        print(message)\n\nclass Person:\n\n    def __init__(self, name = ""):\n        self.name = name\n\n    greet = staticmethod(say_something)\n\np5 = Person("Ezio Auditore da Firenze")\np5.greet("hello", p5.name)\n# output \u279c Ezio Auditore da Firenze said: hello\n\nPerson.greet("hello")\n# output \u279c hello\n\nsay_something("nice to meet you")\n# output \u279c nice to meet you\n')),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"say_something()")," sendiri tetap bisa digunakan secara normal meskipun telah dijadikan sebagai class method milik class ",(0,i.kt)("inlineCode",{parentName:"p"},"Person"),"."),(0,i.kt)("h2",{id:"a383-summary"},"A.38.3. Summary"),(0,i.kt)("p",null,"Perbedaan antara constructor, instance method, class method, dan instance method bisa dilihat di bawah ini:"),(0,i.kt)("h3",{id:"-constructor"},"\u25c9 Constructor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fungsi dideklarasikan di dalam block ",(0,i.kt)("inlineCode",{parentName:"li"},"class")),(0,i.kt)("li",{parentName:"ul"},"Deklarasinya menggunakan nama fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"__init__()")),(0,i.kt)("li",{parentName:"ul"},"Parameter pertama harus ",(0,i.kt)("inlineCode",{parentName:"li"},"self"),", berisi instance object"),(0,i.kt)("li",{parentName:"ul"},"Pemanggilan constructor mengembalikan instance object"),(0,i.kt)("li",{parentName:"ul"},"Pengaksesannya via pemanggilan nama class, contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"Person()"))),(0,i.kt)("h3",{id:"-instance-method"},"\u25c9 Instance method"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fungsi dideklarasikan di dalam block ",(0,i.kt)("inlineCode",{parentName:"li"},"class")),(0,i.kt)("li",{parentName:"ul"},"Parameter pertama harus ",(0,i.kt)("inlineCode",{parentName:"li"},"self"),", berisi instance object"),(0,i.kt)("li",{parentName:"ul"},"Pengaksesan instance method:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Via instance object, contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"p2.info()")),(0,i.kt)("li",{parentName:"ul"},"Via class dengan menyisipkan instance object sebagai argument pemanggilan. contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"Person.info(p2)"))))),(0,i.kt)("h3",{id:"-class-method"},"\u25c9 Class method"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fungsi dideklarasikan di dalam block ",(0,i.kt)("inlineCode",{parentName:"li"},"class")),(0,i.kt)("li",{parentName:"ul"},"Fungsi memiliki decorator ",(0,i.kt)("inlineCode",{parentName:"li"},"@classmethod")),(0,i.kt)("li",{parentName:"ul"},"Parameter pertama harus ",(0,i.kt)("inlineCode",{parentName:"li"},"cls"),", berisi tipe data class"),(0,i.kt)("li",{parentName:"ul"},"Pengaksesan class method:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Via class, contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"Person.create()")),(0,i.kt)("li",{parentName:"ul"},"Via instance object, contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"p2.create()"))))),(0,i.kt)("h3",{id:"-static-method"},"\u25c9 Static method"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fungsi dideklarasikan di dalam block ",(0,i.kt)("inlineCode",{parentName:"li"},"class")),(0,i.kt)("li",{parentName:"ul"},"Fungsi memiliki decorator ",(0,i.kt)("inlineCode",{parentName:"li"},"@staticmethod")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tidak")," memiliki implicit parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"self")," maupun ",(0,i.kt)("inlineCode",{parentName:"li"},"cls")),(0,i.kt)("li",{parentName:"ul"},"Pengaksesan class method:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Via class, contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"Person.say_hello()")),(0,i.kt)("li",{parentName:"ul"},"Via instance object, contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"p1.say_hello()"))))),(0,i.kt)("hr",null),(0,i.kt)("div",{class:"section-footnote"},(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/static-method"},"github.com/novalagung/dasarpemrogramanpython-example/../static-method")),(0,i.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/class-object"},"OOP \u279c Class & Object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/instance-method"},"OOP \u279c Instance Method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/class-constructor"},"OOP \u279c Constructor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/class-method"},"OOP \u279c Class Method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/decorator"},"Function \u279c Decorator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/abstract-method"},"OOP \u279c Abstract Method"))),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/tutorial/classes.html"},"https://docs.python.org/3/tutorial/classes.html")))))}c.isMDXComponent=!0}}]);