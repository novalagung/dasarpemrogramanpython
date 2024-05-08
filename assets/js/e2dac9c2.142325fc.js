"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[9578],{3905:(a,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>k});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function l(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},l=Object.keys(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var o=n.createContext({}),u=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},p=function(a){var e=u(a.components);return n.createElement(o.Provider,{value:e},a.children)},m="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,l=a.originalType,o=a.parentName,p=i(a,["components","mdxType","originalType","parentName"]),m=u(t),d=s,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return t?n.createElement(k,r(r({ref:e},p),{},{components:t})):n.createElement(k,r({ref:e},p))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var l=t.length,r=new Array(l);r[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=a,i[m]="string"==typeof a?a:s,r[1]=i;for(var u=2;u<l;u++)r[u]=t[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2356:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=t(7462),s=(t(7294),t(3905));const l={sidebar_position:43,title:"A.43. Python OOP \u279c DataClass",sidebar_label:"A.43. OOP \u279c DataClass"},r=void 0,i={unversionedId:"basic/dataclass",id:"basic/dataclass",title:"A.43. Python OOP \u279c DataClass",description:"Data class adalah class yang didesain khusus untuk tujuan penyimpanan data.",source:"@site/docs/basic/dataclass.md",sourceDirName:"basic",slug:"/basic/dataclass",permalink:"/basic/dataclass",draft:!1,tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43,title:"A.43. Python OOP \u279c DataClass",sidebar_label:"A.43. OOP \u279c DataClass"},sidebar:"tutorialSidebar",previous:{title:"A.42. OOP \u279c Abstract Method",permalink:"/basic/abstract-method"},next:{title:"A.44. Duck Typing vs. Structural Typing",permalink:"/basic/duck-typing-vs-structural-typing"}},o={},u=[{value:"A.43.1. Pengenalan Data Class",id:"a431-pengenalan-data-class",level:2},{value:"A.43.2. Attribute mutability",id:"a432-attribute-mutability",level:2},{value:"A.43.3. Instance method",id:"a433-instance-method",level:2},{value:"A.43.4. Attribut default value",id:"a434-attribut-default-value",level:2},{value:"A.43.5. Frozen attribute",id:"a435-frozen-attribute",level:2},{value:"A.43.6. Inheritance",id:"a436-inheritance",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],p={toc:u},m="wrapper";function c(a){let{components:e,...l}=a;return(0,s.kt)(m,(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Data class adalah class yang didesain khusus untuk tujuan penyimpanan data."),(0,s.kt)("p",null,"Python menyediakan module bernama ",(0,s.kt)("inlineCode",{parentName:"p"},"dataclasses")," dengan isi beberapa API untuk mempermudah pembuatan data class. Pada chapter ini kita akan mempelajarinya."),(0,s.kt)("h2",{id:"a431-pengenalan-data-class"},"A.43.1. Pengenalan Data Class"),(0,s.kt)("p",null,"Di bawah ini dicontohkan class bernama ",(0,s.kt)("inlineCode",{parentName:"p"},"Planet")," disiapkan untuk pembuatan data berisi informasi planet. Class ini memiliki 3 buah instance attribute, yaitu ",(0,s.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"diameter"),", dan ",(0,s.kt)("inlineCode",{parentName:"p"},"natural_sattelites"),". Deklarasi attribute ditulis dalam fungsi ",(0,s.kt)("inlineCode",{parentName:"p"},"__init__()"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'class Planet:\n    def __init__(self, name, diameter, natural_sattelites):\n        self.name = name\n        self.diameter = diameter\n        self.natural_sattelites = natural_sattelites\n\nplanets = [\n    Planet("Mercury", 4879, []),\n    Planet(name="Venus", diameter=12104, natural_sattelites=[]),\n    Planet(diameter=12742, name="Earth", natural_sattelites=["Moon"]),\n]\n\nfor p in planets:\n    print(f"{p.name} | {p.diameter} km | {len(p.natural_sattelites)} moons")\n\n# output \u2193\n#\n# Mercury | 4879 km | 0 moons\n# Venus | 12104 km | 0 moons\n# Earth | 12742 km | 1 moons\n')),(0,s.kt)("p",null,"Contoh di atas menurut penulis cukup jelas dan mudah dipahami karena jika pembaca mengikuti pembahasan secara urut, maka sudah familiar dengan class, attributes, dan object. "),(0,s.kt)("p",null,"Tidak semua class dibuat untuk keperluan operasi terhadap data, ada yang didesain sebagai utilitas, wrapper, atau lainnya. Khusus untuk class yang memang disiapkan untuk pengelolahan data, penulisannya akan lebih praktis menggunakan decorator ",(0,s.kt)("inlineCode",{parentName:"p"},"@dataclass")," milik module ",(0,s.kt)("inlineCode",{parentName:"p"},"dataclasses"),"."),(0,s.kt)("p",null,"Class ",(0,s.kt)("inlineCode",{parentName:"p"},"Planet")," yang telah dibuat di atas, deklarasinya diubah menggunakan dataclass, hasilnya kurang lebih seperti ini:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from dataclasses import dataclass\n\n@dataclass\nclass Planet:\n    name: str\n    diameter: float\n    natural_sattelites: list[str]\n\nplanets = [\n    Planet("Mercury", 4879, []),\n    Planet("Venus", 12104, []),\n    Planet("Earth", 12742, ["Moon"]),\n]\n\nfor p in planets:\n    print(f"{p.name} | {p.diameter} km | {len(p.natural_sattelites)} moons")\n\n# output \u2193\n#\n# Mercury | 4879 km | 0 moons\n# Venus | 12104 km | 0 moons\n# Earth | 12742 km | 1 moons\n')),(0,s.kt)("p",null,"Cukup tambahkan decorator ",(0,s.kt)("inlineCode",{parentName:"p"},"@dataclass")," saat deklarasi class, lalu tulis attribute seperti penulisan class attribute, tak lupa tentukan tipe data tiap-tiap attribute. Dengan itu maka class otomatis menjadi data class, attribute-nya menjadi instance attribute dan bisa langsung diisi nilainya (via argument constructor) saat pembuatan object."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Penulisan data class"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from dataclasses import dataclass\n\n@dataclass\nclass Planet:\n    name: str\n    diameter: float\n    natural_sattelites: list[str]\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Penulisan class biasa"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class Planet:\n    def __init__(self, name, diameter, natural_sattelites):\n        self.name = name\n        self.diameter = diameter\n        self.natural_sattelites = natural_sattelites\n")))),(0,s.kt)("h2",{id:"a432-attribute-mutability"},"A.43.2. Attribute mutability"),(0,s.kt)("p",null,"Selayaknya seperti class biasa, instance attribute dataclass adalah ",(0,s.kt)("em",{parentName:"p"},"mutable")," atau bisa diubah nilainya. Contoh penerapan:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'mars = Planet("Mars", 4, ["Phobos", "Deimos"])\nmars.name = "Red Planet"\nmars.diameter = 6779\n\nprint(f"{mars.name} | {mars.diameter} km | {len(mars.natural_sattelites)} moons")\n# output \u279c Red Planet | 6779 km | 2 moons\n')),(0,s.kt)("h2",{id:"a433-instance-method"},"A.43.3. Instance method"),(0,s.kt)("p",null,"Data class bisa memiliki instance method dengan penulisan deklarasi sama persis seperti deklarasi method pada umumnya. Contohnya bisa dilihat di bawah ini, dimana ada data class bernama ",(0,s.kt)("inlineCode",{parentName:"p"},"Country")," berisi 3 buah instance attribute dan satu buah instance method bernama ",(0,s.kt)("inlineCode",{parentName:"p"},"info()"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'@dataclass\nclass Country:\n    name: str\n    seasons: list\n    number_of_populations: float\n    \n    def info(self) -> str:\n        return f"{self.name} | {len(self.seasons)} seasons | {self.number_of_populations} million population"\n\ncountries = [\n    Country("Indonesia", ["Rainy", "Dry"], 275.5),\n    Country("Palestine", ["Winter", "Summer", "Autumn", "Spring"], 5.044),\n    Country("Mongolia", ["Winter", "Summer", "Autumn", "Spring"], 3.398),\n]\n\nfor c in countries:\n    print(c.info())\n\n# output \u2193\n#\n# Indonesia | 2 seasons | 275.5 million population\n# Palestine | 4 seasons | 5.044 million population\n# Mongolia | 4 seasons | 3.398 million population\n')),(0,s.kt)("h2",{id:"a434-attribut-default-value"},"A.43.4. Attribut default value"),(0,s.kt)("p",null,"Attribute data class bisa ditentukan nilai defaultnya menggunakan operator assignment ",(0,s.kt)("inlineCode",{parentName:"p"},"=")," (penulisannya seperti deklarasi variabel). Dengan memberikan nilai default pada attribute, menjadikan parameter konstruktor menjadi opsional. Contoh:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'@dataclass\nclass Country:\n    name = "Indonesia"\n    seasons = ["Rainy", "Dry"]\n    number_of_populations = 275.5\n    \n    def info(self) -> str:\n        return f"{self.name} | {len(self.seasons)} seasons | {self.number_of_populations} million population"\n\nc = Country()\nprint(c.info())\n# output \u279c Indonesia | 2 seasons | 275.5 million population\n')),(0,s.kt)("h2",{id:"a435-frozen-attribute"},"A.43.5. Frozen attribute"),(0,s.kt)("p",null,"Frozen data class adalah data class yang ",(0,s.kt)("em",{parentName:"p"},"immutable"),", artinya setelah dideklarasikan maka tidak bisa diubah nilai attribute-nya. Cara meng-enable frozen attribute adalah dengan menambahkan ",(0,s.kt)("inlineCode",{parentName:"p"},"frozen=True")," pada decorator ",(0,s.kt)("inlineCode",{parentName:"p"},"@dataclass"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass Fruit:\n    name: str\n    flavor: tuple\n\napple = Fruit("Apple", ("sweet", "tart"))\napple.name = "Orange"\n')),(0,s.kt)("p",null,"Kode di atas menghasilkan error karena semua attribute class ",(0,s.kt)("inlineCode",{parentName:"p"},"Fruit"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Data class Python",src:t(7981).Z,width:"449",height:"385"})),(0,s.kt)("h2",{id:"a436-inheritance"},"A.43.6. Inheritance"),(0,s.kt)("p",null,"Data class bisa diturunkan seperti umumnya class dengan cara penulisan masih sama. Contoh:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from dataclasses import dataclass\n\n@dataclass\nclass Animal:\n    name: str\n\n@dataclass\nclass Bird(Animal):\n    can_fly: bool\n\ncow = Animal(name="Cow")\nprint(cow.name)\n# output \u279c Cow\n\nchicken = Bird(name="Chicken", can_fly=False)\nprint(chicken.name, chicken.can_fly)\n# output \u279c Chicken False\n')),(0,s.kt)("hr",null),(0,s.kt)("div",{class:"section-footnote"},(0,s.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,s.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,s.kt)("pre",null,(0,s.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/dataclass"},"github.com/novalagung/dasarpemrogramanpython-example/../dataclass")),(0,s.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/basic/class-object"},"OOP \u279c Class & Object")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/basic/instance-method"},"OOP \u279c Instance Method")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/basic/class-constructor"},"OOP \u279c Constructor")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/basic/instance-attribute-class-attribute"},"OOP \u279c Instance Attribute & Class Attribute")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/basic/class-inheritance"},"OOP \u279c Class Inheritance")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/basic/decorator"},"Function \u279c Decorator"))),(0,s.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/dataclasses.html"},"https://docs.python.org/3/library/dataclasses.html")))))}c.isMDXComponent=!0},7981:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/dataclass-1-01fffb649e98eec17bf6a6682ee88bb4.png"}}]);