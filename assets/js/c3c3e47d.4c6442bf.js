"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[5588],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>k});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),p=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(o.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,k=m["".concat(o,".").concat(u)]||m[u]||c[u]||l;return n?t.createElement(k,s(s({ref:a},d),{},{components:n})):t.createElement(k,s({ref:a},d))}));function k(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,s=new Array(l);s[0]=u;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r[m]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<l;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},204:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var t=n(7462),i=(n(7294),n(3905));const l={sidebar_position:37,title:"A.37. Python OOP \u279c Class Method",sidebar_label:"A.37. OOP \u279c Class Method"},s=void 0,r={unversionedId:"basic/class-method",id:"basic/class-method",title:"A.37. Python OOP \u279c Class Method",description:"Pada chapter ini kita akan belajar tentang jenis method lain yang tersedia di Python, yaitu class method, serta perbedaannya dibanding instance method dan constructor.",source:"@site/docs/basic/class-method.md",sourceDirName:"basic",slug:"/basic/class-method",permalink:"/basic/class-method",draft:!1,tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37,title:"A.37. Python OOP \u279c Class Method",sidebar_label:"A.37. OOP \u279c Class Method"},sidebar:"tutorialSidebar",previous:{title:"A.36. OOP \u279c Instance & Class Attribute",permalink:"/basic/instance-attribute-class-attribute"},next:{title:"A.38. OOP \u279c Static Method",permalink:"/basic/static-method"}},o={},p=[{value:"A.37.1. Pengenalan Class method",id:"a371-pengenalan-class-method",level:2},{value:"A.37.2. Class method parameter",id:"a372-class-method-parameter",level:2},{value:"A.37.3. Pengaksesan class method via instance object",id:"a373-pengaksesan-class-method-via-instance-object",level:2},{value:"A.37.4. Pengaksesan instance method via class",id:"a374-pengaksesan-instance-method-via-class",level:2},{value:"A.37.5. Pengaksesan class attribute via <code>cls</code>",id:"a375-pengaksesan-class-attribute-via-cls",level:2},{value:"A.37.6. Summary",id:"a376-summary",level:2},{value:"\u25c9 Constructor",id:"-constructor",level:3},{value:"\u25c9 Instance method",id:"-instance-method",level:3},{value:"\u25c9 Class method",id:"-class-method",level:3},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 TBA",id:"-tba",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],d={toc:p},m="wrapper";function c(e){let{components:a,...l}=e;return(0,i.kt)(m,(0,t.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pada chapter ini kita akan belajar tentang jenis method lain yang tersedia di Python, yaitu class method, serta perbedaannya dibanding instance method dan constructor."),(0,i.kt)("h2",{id:"a371-pengenalan-class-method"},"A.37.1. Pengenalan Class method"),(0,i.kt)("p",null,"Class method adalah method yang pemiliknya adalah class dengan pengaksesan adalah via class, berbeda dibanding instance method yang diperuntukan untuk instance object. Jika instance method memiliki parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," yang isinya adalah instance object, maka class method memiliki parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"cls")," yang isinya adalah tipe data class."),(0,i.kt)("p",null,"Jika dilihat dari segi deklarasinya, class method dan instance method memiliki perbedaan berikut:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Instance method memiliki parameter pertama bernama ",(0,i.kt)("inlineCode",{parentName:"li"},"self"),", dengan isi adalah instance object."),(0,i.kt)("li",{parentName:"ul"},"Class method memiliki parameter pertama bernama ",(0,i.kt)("inlineCode",{parentName:"li"},"cls")," yang merupakan alias dari class dimana method tersebut dideklarasikan (misalnya class method dideklarasikan dalam class ",(0,i.kt)("inlineCode",{parentName:"li"},"Car"),", maka paramter ",(0,i.kt)("inlineCode",{parentName:"li"},"cls")," berisi tipe data class ",(0,i.kt)("inlineCode",{parentName:"li"},"Car"),")."),(0,i.kt)("li",{parentName:"ul"},"Selain perbedaan di atas, class method dideklariskan dengan menuliskan decorator ",(0,i.kt)("inlineCode",{parentName:"li"},"@classmethod"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pembahasan detail mengenai decorator dibahas pada chapter ",(0,i.kt)("a",{parentName:"p",href:"/basic/decorator"},"Decorator"))),(0,i.kt)("p",null,"Agar lebih jelas silakan pelajari kode berikut lalu praktekan. Disini sebuah class bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"ClanHouse")," dibuat dengan isi 3 buah fungsi:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Constructor ",(0,i.kt)("inlineCode",{parentName:"li"},"__init__()")," dengan overload parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," dan ",(0,i.kt)("inlineCode",{parentName:"li"},"house")),(0,i.kt)("li",{parentName:"ul"},"Class method ",(0,i.kt)("inlineCode",{parentName:"li"},"create()")," digunakan untuk membuat instance object ",(0,i.kt)("inlineCode",{parentName:"li"},"ClassHouse")),(0,i.kt)("li",{parentName:"ul"},"Instance method ",(0,i.kt)("inlineCode",{parentName:"li"},"info()")," digunakan untuk menampilkan data ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," dan ",(0,i.kt)("inlineCode",{parentName:"li"},"house"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class ClanHouse:\n\n    def __init__(self, name = "", house = ""):\n        self.name = name\n        self.house = house\n\n    @classmethod\n    def create(cls):\n        obj = cls()\n        return obj\n\n    def info(self):\n        print(f"{self.name} of {self.house}")\n')),(0,i.kt)("p",null,"Bisa dilihat perbedaan deklarasi instance method dan class method di contoh tersebut. Method ",(0,i.kt)("inlineCode",{parentName:"p"},"create()")," memiliki parameter pertama ",(0,i.kt)("inlineCode",{parentName:"p"},"cls")," yang merupakan alias untuk tipe data class ",(0,i.kt)("inlineCode",{parentName:"p"},"ClanHouse"),". Lewat ",(0,i.kt)("inlineCode",{parentName:"p"},"cls"),", dibuat sebuah instance object bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"obj")," kemudian dijadikan nilai balik method ",(0,i.kt)("inlineCode",{parentName:"p"},"create()"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Statement ",(0,i.kt)("inlineCode",{parentName:"p"},"obj = cls()")," dalam method ",(0,i.kt)("inlineCode",{parentName:"p"},"create()")," adalah ekuivalen dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"obj = ClanHouse()"),",",(0,i.kt)("br",null),"karena dalam method tersebut nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"cls")," adalah tipe data class dimana method dideklarasikan, yaitu ",(0,i.kt)("inlineCode",{parentName:"p"},"ClanHouse"))),(0,i.kt)("p",null,"Selanjutnya, dari class ",(0,i.kt)("inlineCode",{parentName:"p"},"ClanHouse")," akan dibuat 3 buah instance object berikut:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Object ",(0,i.kt)("inlineCode",{parentName:"li"},"p1")," dibuat menggunakan constructor"),(0,i.kt)("li",{parentName:"ul"},"Object ",(0,i.kt)("inlineCode",{parentName:"li"},"p2")," dibuat menggunakan constructor juga, dengan parameter di-overload"),(0,i.kt)("li",{parentName:"ul"},"Object ",(0,i.kt)("inlineCode",{parentName:"li"},"p3")," dibuat menggunakan class method ",(0,i.kt)("inlineCode",{parentName:"li"},"create()"),". Class method tersebut diakses dari class, bisa dilihat dari syntax-nya yaitu ",(0,i.kt)("inlineCode",{parentName:"li"},"ClanHouse.create()"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'p1 = ClanHouse()\np1.name = "Paul Atriedes"\np1.house = "House of Atriedes"\np1.info()\n# output \u279c Paul Atriedes of House of Atriedes\n\np2 = ClanHouse("Lady Jessica", "Bene Gesserit")\np2.info()\n# output \u279c Lady Jessica of Bene Gesserit\n\np3 = ClanHouse.create()\np3.name = "Baron Vladimir Harkonnen"\np3.house = "House of Harkonnen"\np3.info()\n# output \u279c Baron Vladimir Harkonnen of House of Harkonnen\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"cls")," bisa disebut dengan parameter ",(0,i.kt)("em",{parentName:"p"},"implicit")," atau implisit karena kita tidak berinteraksi secara langsung saat pengisian nilai. Nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"cls")," otomatis terisi saat class method diakses.")),(0,i.kt)("h2",{id:"a372-class-method-parameter"},"A.37.2. Class method parameter"),(0,i.kt)("p",null,"Class method juga bisa memiliki parameter seperti umumnya fungsi. Jika pada instance method dan constructor parameter adalah ditulis setelah ",(0,i.kt)("inlineCode",{parentName:"p"},"self"),", pada class method parameter ditulis setelah ",(0,i.kt)("inlineCode",{parentName:"p"},"cls"),". Contoh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class ClanHouse:\n\n    def __init__(self, name = "", house = ""):\n        self.name = name\n        self.house = house\n\n    @classmethod\n    def create(cls, name = "", house = ""):\n        obj = cls()\n        obj.name = name\n        obj.house = house\n        return obj\n\n    def info(self):\n        print(f"{self.name} of {self.house}")\n\np2 = ClanHouse("Lady Jessica", "Bene Gesserit")\np2.info()\n# output \u279c Lady Jessica of Bene Gesserit\n\np4 = ClanHouse.create("Glossu Rabban", "House of Harkonnen")\np4.info()\n# output \u279c Glossu Rabban of House of Harkonnen\n')),(0,i.kt)("p",null,"Dari kode di atas bisa dilihat bahwa parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"cls")," milik class method diperlakukan mirip seperti parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," milik constructor dan instance method."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pada saat pengaksesan instance method atau constructor, parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"self")," adalah diabaikan karena otomatis berisi instance object. "),(0,i.kt)("li",{parentName:"ul"},"Sifat yang sama juga berlaku pada parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"cls")," pada class method. Saat diakses via class (contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"ClanHouse.create()"),"), parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"cls")," diabaikan.")),(0,i.kt)("p",null,"Parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"cls")," pada method ",(0,i.kt)("inlineCode",{parentName:"p"},"create()")," berisi tipe data class ",(0,i.kt)("inlineCode",{parentName:"p"},"ClanHouse"),", dan pembuatan instance object selalu via pemanggilan nama class, maka dari sini pemanggilan ",(0,i.kt)("inlineCode",{parentName:"p"},"cls()")," dalam method ",(0,i.kt)("inlineCode",{parentName:"p"},"create()")," juga bisa diikuti dengan pengisian argument parameter."),(0,i.kt)("p",null,"Sebagai perbandingan, kedua bentuk pemanggilan constructor via ",(0,i.kt)("inlineCode",{parentName:"p"},"cls()")," berikut adalah ekuivalen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cara 1: variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"cls")," digunakan dipanggil sebagai constructor tanpa parameter"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class ClanHouse:\n\n    def __init__(self, name = "", house = ""):\n        self.name = name\n        self.house = house\n\n    @classmethod\n    def create(cls, name = "", house = ""):\n        obj = cls()\n        obj.name = name\n        obj.house = house\n        return obj\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cara 2: variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"cls")," digunakan dipanggil sebagai constructor dengan diisi argument parameter"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class ClanHouse:\n\n    def __init__(self, name = "", house = ""):\n        self.name = name\n        self.house = house\n\n    @classmethod\n    def create(cls, name = "", house = ""):\n        obj = cls(name, house)\n        return obj\n')))),(0,i.kt)("h2",{id:"a373-pengaksesan-class-method-via-instance-object"},"A.37.3. Pengaksesan class method via instance object"),(0,i.kt)("p",null,"Sampai sini penulis rasa bisa dipahami perbedaan cara pengaksesan antara instance method dan class method. Instance method diakses via instance object, dan class method diakses via class."),(0,i.kt)("p",null,"Selain cara tersebut, sebenarnya class method bisa juga diakses via instance object ",(0,i.kt)("em",{parentName:"p"},"lho"),", dan hal seperti ini diperbolehkan penerapannya. Caranya bisa dilihat pada kode berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class ClanHouse:\n\n    def __init__(self, name = "", house = ""):\n        self.name = name\n        self.house = house\n\n    def info(self):\n        print(f"{self.name} of {self.house}")\n\n    @classmethod\n    def create(cls, name = "", house = ""):\n        obj = cls()\n        obj.name = name\n        obj.house = house\n        return obj\n\np2 = ClanHouse("Lady Jessica", "Bene Gesserit")\np2.info()\n# output \u279c Lady Jessica of Bene Gesserit\n\np4 = ClanHouse.create("Glossu Rabban", "House of Harkonnen")\np4.info()\n# output \u279c Glossu Rabban of House of Harkonnen\n\np5 = p2.create("Irulan Corrino", "Corrino Empire")\np5.info()\n# output \u279c Irulan Corrino of Corrino Empire\n')),(0,i.kt)("p",null,"Dari kode di atas bisa dilihat perbedaan dari sisi pembuatan object dan pengaksesan method antara ",(0,i.kt)("inlineCode",{parentName:"p"},"p2")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"p4"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Instance object ",(0,i.kt)("inlineCode",{parentName:"li"},"p2")," dibuat via constructor ",(0,i.kt)("inlineCode",{parentName:"li"},"ClanHouse()")),(0,i.kt)("li",{parentName:"ul"},"Instance object ",(0,i.kt)("inlineCode",{parentName:"li"},"p4")," dibuat via class method ",(0,i.kt)("inlineCode",{parentName:"li"},"create()")),(0,i.kt)("li",{parentName:"ul"},"Dari kedua object, diakses method ",(0,i.kt)("inlineCode",{parentName:"li"},"info()"))),(0,i.kt)("p",null,"Yang menarik untuk dibahas adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"p5"),". Object ",(0,i.kt)("inlineCode",{parentName:"p"},"p5")," dibuat dari pemanggilan class method ",(0,i.kt)("inlineCode",{parentName:"p"},"create()")," namun pengaksesannya adalah via instance object ",(0,i.kt)("inlineCode",{parentName:"p"},"p2"),". Penulisan seperti itu diperbolehkan. Parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"cls")," pada class method ",(0,i.kt)("inlineCode",{parentName:"p"},"create()")," akan terisi dengan nilai tipe data class object ",(0,i.kt)("inlineCode",{parentName:"p"},"p4")," (yaitu ",(0,i.kt)("inlineCode",{parentName:"p"},"ClanHouse"),")."),(0,i.kt)("h2",{id:"a374-pengaksesan-instance-method-via-class"},"A.37.4. Pengaksesan instance method via class"),(0,i.kt)("p",null,"Jika class method bisa diakses via instance object, instance method juga bisa diakses via Class. Caranya cukup panggil instance method via class lalu isi parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," dengan instance object. Contoh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'p2 = ClanHouse("Lady Jessica", "Bene Gesserit")\nClanHouse.info(p2)\n# output \u279c Lady Jessica of Bene Gesserit\n\np4 = ClanHouse.create("Glossu Rabban", "House of Harkonnen")\nClanHouse.info(p4)\n# output \u279c Glossu Rabban of House of Harkonnen\n\np5 = p2.create("Irulan Corrino", "Corrino Empire")\nClanHouse.info(p5)\n# output \u279c Irulan Corrino of Corrino Empire\n')),(0,i.kt)("p",null,"Pengaksesan instance method via class mengharuskan parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," milik method untuk diisi dengan object. Hal ini berbeda dibanding pengaksesan instance method via instance object dimana parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," otomatis terisi nilai instance object."),(0,i.kt)("h2",{id:"a375-pengaksesan-class-attribute-via-cls"},"A.37.5. Pengaksesan class attribute via ",(0,i.kt)("inlineCode",{parentName:"h2"},"cls")),(0,i.kt)("p",null,"Pada chapter sebelumnya, ",(0,i.kt)("a",{parentName:"p",href:"/basic/instance-attribute-class-attribute"},"OOP \u279c Instance Attribute & Class Attribute"),", kita telah mempelajari tentang perbedaan instance attribute dibanding class attribute."),(0,i.kt)("p",null,"Class attribute bisa diakses via instance object maupun class. Dalam konteks class method dimana ",(0,i.kt)("inlineCode",{parentName:"p"},"cls")," adalah berisi tipe data class, pengaksesan class attribute memungkinkan untuk dilakukan via variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"cls"),"."),(0,i.kt)("p",null,"Contoh penerapannya bisa dilihat pada kode berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class ClanHouse:\n\n    note = "ClanHouse: a class to represent clan house in Dune universe"\n\n    def __init__(self, name = "", house = ""):\n        self.name = name\n        self.house = house\n\n    @classmethod\n    def create(cls, name = "", house = ""):\n        print("#1", cls.note)\n\n        obj = cls(name, house)\n        print("#2", obj.note)\n\n        return obj\n\np2 = ClanHouse.create("Lady Jessica", "Bene Gesserit")\nprint("#3", p2.note)\n\nprint("#4", ClanHouse.note)\n')),(0,i.kt)("p",null,"Output program:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"class method",src:n(8037).Z,width:"515",height:"127"})),(0,i.kt)("h2",{id:"a376-summary"},"A.37.6. Summary"),(0,i.kt)("p",null,"Dari banyak hal yang telah dipelajari di chapter ini, secara garis besar perbedaan antara constructor, instance method, dan class method bisa dilihat di bawah ini:"),(0,i.kt)("h3",{id:"-constructor"},"\u25c9 Constructor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fungsi dideklarasikan di dalam block ",(0,i.kt)("inlineCode",{parentName:"li"},"class")),(0,i.kt)("li",{parentName:"ul"},"Deklarasinya menggunakan nama fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"__init__()")),(0,i.kt)("li",{parentName:"ul"},"Parameter pertama harus ",(0,i.kt)("inlineCode",{parentName:"li"},"self"),", berisi instance object"),(0,i.kt)("li",{parentName:"ul"},"Pemanggilan constructor mengembalikan instance object"),(0,i.kt)("li",{parentName:"ul"},"Pengaksesannya via pemanggilan nama class, contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"ClanHouse()"))),(0,i.kt)("h3",{id:"-instance-method"},"\u25c9 Instance method"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fungsi dideklarasikan di dalam block ",(0,i.kt)("inlineCode",{parentName:"li"},"class")),(0,i.kt)("li",{parentName:"ul"},"Parameter pertama harus ",(0,i.kt)("inlineCode",{parentName:"li"},"self"),", berisi instance object"),(0,i.kt)("li",{parentName:"ul"},"Pengaksesan instance method:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Via instance object, contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"p2.info()")),(0,i.kt)("li",{parentName:"ul"},"Via class dengan menyisipkan instance object sebagai argument pemanggilan. contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"ClanHouse.info(p2)"))))),(0,i.kt)("h3",{id:"-class-method"},"\u25c9 Class method"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fungsi dideklarasikan di dalam block ",(0,i.kt)("inlineCode",{parentName:"li"},"class")),(0,i.kt)("li",{parentName:"ul"},"Fungsi memiliki decorator ",(0,i.kt)("inlineCode",{parentName:"li"},"@classmethod")),(0,i.kt)("li",{parentName:"ul"},"Parameter pertama harus ",(0,i.kt)("inlineCode",{parentName:"li"},"cls"),", berisi tipe data class"),(0,i.kt)("li",{parentName:"ul"},"Pengaksesan class method:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Via class, contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"ClanHouse.create()")),(0,i.kt)("li",{parentName:"ul"},"Via instance object, contoh: ",(0,i.kt)("inlineCode",{parentName:"li"},"p2.create()"))))),(0,i.kt)("hr",null),(0,i.kt)("div",{class:"section-footnote"},(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/class-method"},"github.com/novalagung/dasarpemrogramanpython-example/../class-method")),(0,i.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/class-object"},"OOP \u279c Class & Object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/instance-method"},"OOP \u279c Instance Method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/class-constructor"},"OOP \u279c Constructor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/static-method"},"OOP \u279c Static Method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/decorator"},"Function \u279c Decorator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/abstract-method"},"OOP \u279c Abstract Method"))),(0,i.kt)("h3",{id:"-tba"},"\u25c9 TBA"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"list-type attribute behaviour on class attribute vs instance attribute")),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/tutorial/classes.html"},"https://docs.python.org/3/tutorial/classes.html")))))}c.isMDXComponent=!0},8037:(e,a,n)=>{n.d(a,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgMAAAB/CAIAAAD9xlaTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMS0yNVQxNjoxMDo0NCswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTEtMjVUMTY6MjY6MTMrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTEtMjVUMTY6MjY6MTMrMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM0ZjdiMThlLTI1NDUtZTY0MC1iNGI2LTg5ZDliMjQ1M2U0NSIgeG1wTU06RG9jdW1lbnRJRD0i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"}}]);