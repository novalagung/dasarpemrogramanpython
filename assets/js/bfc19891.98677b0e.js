"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[347],{3905:(a,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var t=n(7294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function s(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function p(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var l=t.createContext({}),o=function(a){var e=t.useContext(l),n=e;return a&&(n="function"==typeof a?a(e):s(s({},e),a)),n},m=function(a){var e=o(a.components);return t.createElement(l.Provider,{value:e},a.children)},u="mdxType",g={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,l=a.parentName,m=p(a,["components","mdxType","originalType","parentName"]),u=o(n),d=r,k=u["".concat(l,".").concat(d)]||u[d]||g[d]||i;return n?t.createElement(k,s(s({ref:e},m),{},{components:n})):t.createElement(k,s({ref:e},m))}));function k(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,s=new Array(i);s[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[u]="string"==typeof a?a:r,s[1]=p;for(var o=2;o<i;o++)s[o]=n[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},158:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_position:24,title:"A.24. Python Args & Kwargs",sidebar_label:"A.24. Function \u279c Args & Kwargs"},s=void 0,p={unversionedId:"basic/args-kwargs",id:"basic/args-kwargs",title:"A.24. Python Args & Kwargs",description:"Pada chapter ini kita akan belajar tentang penerapan args dan kwargs pada fungsi di Python.",source:"@site/docs/basic/args-kwargs.md",sourceDirName:"basic",slug:"/basic/args-kwargs",permalink:"/basic/args-kwargs",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24,title:"A.24. Python Args & Kwargs",sidebar_label:"A.24. Function \u279c Args & Kwargs"},sidebar:"tutorialSidebar",previous:{title:"A.23. Function \u279c Positional, Optional, Keyword Arguments",permalink:"/basic/positional-optional-keyword-argument"},next:{title:"A.25. Function \u279c Closure",permalink:"/basic/closure"}},l={},o=[{value:"A.24.1. Args",id:"a241-args",level:2},{value:"\u25c9 Args untuk argument dengan tipe data bervariasi",id:"-args-untuk-argument-dengan-tipe-data-bervariasi",level:3},{value:"\u25c9 Kombinasi positional argument dan args",id:"-kombinasi-positional-argument-dan-args",level:3},{value:"\u25c9 Kombinasi positional argument, args, dan keyword argument",id:"-kombinasi-positional-argument-args-dan-keyword-argument",level:3},{value:"A.24.2. Kwargs",id:"a242-kwargs",level:2},{value:"\u25c9 Kombinasi positional argument dan kwargs",id:"-kombinasi-positional-argument-dan-kwargs",level:3},{value:"\u25c9 Kombinasi positional argument, args dan kwargs",id:"-kombinasi-positional-argument-args-dan-kwargs",level:3},{value:"\u25c9 Kombinasi positional argument, args, keyword argument, dan kwargs",id:"-kombinasi-positional-argument-args-keyword-argument-dan-kwargs",level:3},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],m={toc:o},u="wrapper";function g(a){let{components:e,...n}=a;return(0,r.kt)(u,(0,t.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pada chapter ini kita akan belajar tentang penerapan args dan kwargs pada fungsi di Python."),(0,r.kt)("h2",{id:"a241-args"},"A.24.1. Args"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Args")," (atau yang umumnya ditulis sebagai ",(0,r.kt)("strong",{parentName:"p"},"*","args"),") merupakan notasi penulisan parameter spesial dengan kapabilitas bisa menampung banyak ",(0,r.kt)("em",{parentName:"p"},"positional argument")," untuk ditampung dalam 1 parameter saja."),(0,r.kt)("p",null,"Agar lebih jelas tentang kegunaan args, mari pelajari terlebih dahulu kode berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def sum_then_print(n1, n2, n3, n4, n5):\n    total = n1 + n2 + n3 + n4 + n5\n    print(total)\n\nsum_then_print(2, 3, 4, 5, 4)\n# output \u279c 18\n")),(0,r.kt)("p",null,"Fungsi ",(0,r.kt)("inlineCode",{parentName:"p"},"sum_then_print()")," menerima 5 buah argument numerik yang dari nilai tersebut kemudian dihitung totalnya lalu ditampilkan."),(0,r.kt)("p",null,"Fungsi tersebut memiliki limitasi yaitu hanya bisa menerima 5 buah data numerik. Untuk membuatnya bisa menampung sejumlah data, solusinya bisa dengan cukup menggunakan 1 parameter saja dengan data argument yang disisipkan harus dalam tipe data sequence seperti list, atau solusi alternatif lainyna bisa dengan menggunakan ",(0,r.kt)("strong",{parentName:"p"},"*","args")," yang di bawah ini dibahas."),(0,r.kt)("p",null,"Implementasi args cukup mudah, pada deklarasi fungsi tulis saja parameter dengan nama apapun bebas, tetapi pada penulisannya diawali karakter asterisk atau ",(0,r.kt)("strong",{parentName:"p"},"*"),", contohnya seperti parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"numbers")," berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def sum_then_print(*numbers):\n    total = 0\n    for n in numbers:\n        total = total + n\n    print(total)\n\nsum_then_print(2, 3, 4, 5, 4)\n# output \u279c 18\n")),(0,r.kt)("p",null,"Fungsi di atas parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"numbers"),"-nya ditulis menggunakan notasi ",(0,r.kt)("strong",{parentName:"p"},"*","args"),", maka parameter tersebut akan menampung semua argument yang disisipkan saat pemanggilan fungsi. Nilai argument disimpan oleh parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"numbers")," dalam bentuk ",(0,r.kt)("strong",{parentName:"p"},"tuple"),". Variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"numbers")," di-iterasi nilainya lalu dihitung totalnya."),(0,r.kt)("h3",{id:"-args-untuk-argument-dengan-tipe-data-bervariasi"},"\u25c9 Args untuk argument dengan tipe data bervariasi"),(0,r.kt)("p",null,"Metode ",(0,r.kt)("strong",{parentName:"p"},"*","args")," ini mampu menampung segala jenis argument tanpa meghiraukan tipe datanya. Contohnya bisa dilihat pada program berikut ini:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def print_data(*params):\n    print(f"type: {type(params)}, data: {params}")\n    for i in range(len(params)):\n        print(f"param {i}: {params[i]}")\n\nprint_data("hello python", 123, [5, True, ("yesn\'t")], {"iwak", "peyek"})\n# output \u2193\n#\n# type: <class \'tuple\'>, data: (\'hello python\', 123, [5, True, "yesn\'t"], {\'iwak\', \'peyek\'})\n# param 0: hello python\n# param 1: 123\n# param 2: [5, True, "yesn\'t"]\n# param 3: {\'iwak\', \'peyek\'}\n')),(0,r.kt)("h3",{id:"-kombinasi-positional-argument-dan-args"},"\u25c9 Kombinasi positional argument dan args"),(0,r.kt)("p",null,"Args sebenarnya tidak benar-benar menangkap semua argument pemanggilan fungsi, melainkan hanya argument yang ditulis sesuai posisi parameter higga posisi setelahnya. Misalnya, sebuah fungsi memiliki 2 parameter dimana parameter pertama menampung string dan parameter dua adalah ",(0,r.kt)("strong",{parentName:"p"},"*","args"),", maka pada contoh ini parameter ",(0,r.kt)("strong",{parentName:"p"},"*","args")," hanya menampung argument ke-2 dan setelahnya. Contoh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def sum_then_print(message, *numbers):\n    total = 0\n    for n in numbers:\n        total = total + n\n    print(f"{message} {total}")\n\nsum_then_print("total nilai:", 2, 3, 4, 5, 4)\n# output \u279c total nilai: 18\n')),(0,r.kt)("p",null,"Bisa dilihat, pada kode di atas parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," menampung argument ke-1 yaitu string ",(0,r.kt)("inlineCode",{parentName:"p"},"total nilai:"),", dan parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"numbers")," menampung argument ke-2 hingga seterusnya (yaitu data ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),")."),(0,r.kt)("p",null,"Perlu diketahu dalam penerapan kombinasi positional argument dan args, positional argument harus selalu ditulis sebelum parameter ",(0,r.kt)("strong",{parentName:"p"},"*","args"),"."),(0,r.kt)("h3",{id:"-kombinasi-positional-argument-args-dan-keyword-argument"},"\u25c9 Kombinasi positional argument, args, dan keyword argument"),(0,r.kt)("p",null,"Keyword argument bisa digunakan bebarengan dengan positional argument dan ",(0,r.kt)("strong",{parentName:"p"},"*","args"),", dengan syarat harus dituliskan di akhir setelah ",(0,r.kt)("strong",{parentName:"p"},"*","args"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def sum_then_print(message, *numbers, suffix_message):\n    total = 0\n    for n in numbers:\n        total = total + n\n    print(f"{message} {total} {suffix_message}")\n\nsum_then_print("total nilai:", 2, 3, 4, 5, 4, suffix_message="selesai!")\n# output \u279c total nilai: 18 selesai!\n')),(0,r.kt)("h2",{id:"a242-kwargs"},"A.24.2. Kwargs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kwargs")," (atau yang umumnya ditulis sebagai ",(0,r.kt)("strong",{parentName:"p"},"*","*","kwargs")," atau ",(0,r.kt)("strong",{parentName:"p"},"keyword arguments"),") merupakan notasi penulisan parameter spesial dengan kapabilitas bisa menampung banyak ",(0,r.kt)("em",{parentName:"p"},"keyword argument")," pemanggilan fungsi dalam 1 parameter saja."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def print_data(**data):\n    print(f\"type: {type(data)}\")\n    print(f\"data: {data}\")\n\n    for key in data:\n        print(f\"param: {key}, value: {data[key]}\")\n\nprint_data(phone=\"nokia 3310\", discontinue=False, year=2000, networks=[\"GSM\", \"TDMA\"])\n# output \u2193\n#\n# type: <class 'dict'>\n# data: {'phone': 'nokia 3310', 'discontinue': False, 'year': 2000, 'networks': ['GSM', 'TDMA']}\n# \n# param: phone, value: nokia 3310\n# param: discontinue, value: False\n# param: year, value: 2000\n# param: networks, value: ['GSM', 'TDMA']\n")),(0,r.kt)("p",null,"Argument yang ditampung oleh parameter ",(0,r.kt)("strong",{parentName:"p"},"*","*","kwargs")," datanya tersimpan dalam bentuk dictionary dengan key adalah nama parameter dan value adalah nilai argument."),(0,r.kt)("h3",{id:"-kombinasi-positional-argument-dan-kwargs"},"\u25c9 Kombinasi positional argument dan kwargs"),(0,r.kt)("p",null,"Kwargs sebenarnya hanya menampung semua argument mulai dari argument ke-",(0,r.kt)("inlineCode",{parentName:"p"},"n")," hingga seterusnya dimana ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," adalah nomor/posisi ",(0,r.kt)("strong",{parentName:"p"},"*","*","kwargs")," ditulis."),(0,r.kt)("p",null,"Contohnya pada kode berikut, parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," hanya akan menampung argument nomor ke-3 hingga seterusnya. Argument pertama ditampung oleh parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," sedangkan argument ke-2 oleh parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def print_data(message, number, **data):\n    print(f"message: {message}")\n    print(f"number: {number}")\n    print()\n    for key in data:\n        print(f"param: {key}, value: {data[key]}")\n\nprint_data("sesuk prei", 2023, phone="nokia 3315", networks=["GSM", "TDMA"])\n# output \u2193\n#\n# message: sesuk prei\n# number: 2023\n# \n# param: phone, value: nokia 3310\n# param: networks, value: [\'GSM\', \'TDMA\']\n')),(0,r.kt)("p",null,"Dalam penerapannya, positional argument harus selalu ditulis sebelum parameter ",(0,r.kt)("strong",{parentName:"p"},"*","*","kwargs"),"."),(0,r.kt)("h3",{id:"-kombinasi-positional-argument-args-dan-kwargs"},"\u25c9 Kombinasi positional argument, args dan kwargs"),(0,r.kt)("p",null,"Kombinasi antara positional argument, ",(0,r.kt)("strong",{parentName:"p"},"*","args"),", dan ",(0,r.kt)("strong",{parentName:"p"},"*","*","kwargs")," juga bisa dilakukan dengan ketentuan positional semua argument ditulis terlebih dahulu, kemudian diikuti ",(0,r.kt)("strong",{parentName:"p"},"*","args"),", lalu ",(0,r.kt)("strong",{parentName:"p"},"*","*","kwargs"),"."),(0,r.kt)("p",null,"Contoh penerapannya:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def print_all(message, *params, **others):\n    print(f"message: {message}")\n    print(f"params: {params}")\n    print(f"others: {others}")\n\nprint_all("hello world", 1, True, ("yesn\'t", "nope"), name="nokia 3310", discontinued=True, year_released=2000)\n# output \u2193\n#\n# message: hello world\n# params: (1, True, ("yesn\'t", \'nope\'))\n# others: {\'name\': \'nokia 3310\', \'discontinued\': True, \'year_released\': 2000}\n')),(0,r.kt)("p",null,"Python secara cerdas mengidentifikasi argument mana yang akan disimpan pada positional parameter, ",(0,r.kt)("strong",{parentName:"p"},"*","args"),", dan ",(0,r.kt)("strong",{parentName:"p"},"*","*","kwargs"),". Pada kode di atas, mapping antara arguments dengan parameter adalah seperti ini:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Argument ",(0,r.kt)("inlineCode",{parentName:"li"},"hello world")," ditampung parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"message"),"."),(0,r.kt)("li",{parentName:"ul"},"Argument ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),",dan  ",(0,r.kt)("inlineCode",{parentName:"li"},'("yesn\'t", "nope")')," ditampung parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"params"),"."),(0,r.kt)("li",{parentName:"ul"},"Keyword argument ",(0,r.kt)("inlineCode",{parentName:"li"},'name="nokia 3310"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},"discontinued=True"),", fan ",(0,r.kt)("inlineCode",{parentName:"li"},"year_released=2000")," ditampung parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"others"),".")),(0,r.kt)("h3",{id:"-kombinasi-positional-argument-args-keyword-argument-dan-kwargs"},"\u25c9 Kombinasi positional argument, args, keyword argument, dan kwargs"),(0,r.kt)("p",null,"Keyword argument bisa dituliskan diantara ",(0,r.kt)("strong",{parentName:"p"},"*","args"),", dan ",(0,r.kt)("strong",{parentName:"p"},"*","*","kwargs"),", diluar itu menghasilkan error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def print_all(message, *params, say_something, **others):\n    print(f"message: {message}")\n    print(f"params: {params}")\n    print(f"say_something: {say_something}")\n    print(f"others: {others}")\n\nprint_all("hello world", 1, True, ("yesn\'t", "nope"), say_something="how are you", name="nokia 3310", discontinued=True, year_released=2000)\n# output \u2193\n#\n# message: hello world\n# params: (1, True, ("yesn\'t", \'nope\'))\n# say_something: how are you\n# others: {\'name\': \'nokia 3310\', \'discontinued\': True, \'year_released\': 2000}\n')),(0,r.kt)("hr",null),(0,r.kt)("div",{class:"section-footnote"},(0,r.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,r.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,r.kt)("pre",null,(0,r.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/args-kwargs"},"github.com/novalagung/dasarpemrogramanpython-example/../args-kwargs")),(0,r.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/function"},"Function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/positional-optional-keyword-argument"},"Optional, Positional, Keyword Argument")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/closure"},"Closure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"Lambda"))),(0,r.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists"},"https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists")))))}g.isMDXComponent=!0}}]);