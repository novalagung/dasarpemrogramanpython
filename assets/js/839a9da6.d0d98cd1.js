"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[9493],{3905:(a,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var t=n(7294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function m(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var o=t.createContext({}),p=function(a){var e=t.useContext(o),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},u=function(a){var e=p(a.components);return t.createElement(o.Provider,{value:e},a.children)},g="mdxType",s={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,o=a.parentName,u=m(a,["components","mdxType","originalType","parentName"]),g=p(n),d=r,k=g["".concat(o,".").concat(d)]||g[d]||s[d]||i;return n?t.createElement(k,l(l({ref:e},u),{},{components:n})):t.createElement(k,l({ref:e},u))}));function k(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,l=new Array(i);l[0]=d;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=a,m[g]="string"==typeof a?a:r,l[1]=m;for(var p=2;p<i;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5191:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_position:23,title:"A.23. Python Function Argument (Positional, Optional, Keyword Argument)",sidebar_label:"A.23. Function \u279c Positional, Optional, Keyword Arguments"},l=void 0,m={unversionedId:"basic/positional-optional-keyword-argument",id:"basic/positional-optional-keyword-argument",title:"A.23. Python Function Argument (Positional, Optional, Keyword Argument)",description:"Pada chapter ini kita akan belajar tentang apa itu positional argument, optional argument, dan keyword arguments, serta bagaimana penerapannya di Python.",source:"@site/docs/basic/positional-optional-keyword-argument.md",sourceDirName:"basic",slug:"/basic/positional-optional-keyword-argument",permalink:"/basic/positional-optional-keyword-argument",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23,title:"A.23. Python Function Argument (Positional, Optional, Keyword Argument)",sidebar_label:"A.23. Function \u279c Positional, Optional, Keyword Arguments"},sidebar:"tutorialSidebar",previous:{title:"A.22. Function",permalink:"/basic/function"},next:{title:"A.24. Function \u279c Args & Kwargs",permalink:"/basic/args-kwargs"}},o={},p=[{value:"A.23.1. Positional argument",id:"a231-positional-argument",level:2},{value:"A.23.2. Keyword argument",id:"a232-keyword-argument",level:2},{value:"A.23.3. Optional argument",id:"a233-optional-argument",level:2},{value:"A.23.4. Kombinasi positional argument, keyword argument, dan optional argument",id:"a234-kombinasi-positional-argument-keyword-argument-dan-optional-argument",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],u={toc:p},g="wrapper";function s(a){let{components:e,...i}=a;return(0,r.kt)(g,(0,t.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pada chapter ini kita akan belajar tentang apa itu positional argument, optional argument, dan keyword arguments, serta bagaimana penerapannya di Python."),(0,r.kt)("h2",{id:"a231-positional-argument"},"A.23.1. Positional argument"),(0,r.kt)("p",null,"Positional argument adalah istilah untuk urutan parameter/argument fungsi. Pengisian argument saat pemanggilan fungsi harus urut sesuai dengan deklarasi parameternya."),(0,r.kt)("p",null,"Silakan perhatikan kode berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def create_sorcerer(name, age, race, era):\n    return {\n        \"name\": name,\n        \"age\": age,\n        \"race\": race,\n        \"era\": era,\n    }\n\nobj1 = create_sorcerer(\"Sukuna\", 1000, \"incarnation\", \"heian\")\nprint(obj1)\n# output \u279c {'name': 'Sukuna', 'age': 1000, 'race': 'incarnation', 'era': 'heian'}\n\nobj2 = create_sorcerer(\"Kenjaku\", 1000, \"human\", \"1000+ year ago\")\nprint(obj2)\n# output \u279c {'name': 'Kenjaku', 'age': 1000, 'race': 'human', 'era': '1000+ year ago'}\n\nobj3 = create_sorcerer(\"Hajime Kashimo\", 400, \"human\", \"400 year ago\")\nprint(obj3)\n# output \u279c {'name': 'Hajime Kashimo', 'age': 400, 'race': 'human', 'era': '400 year ago'}\n")),(0,r.kt)("p",null,"Coba lakukan sedikit experiment dengan mengubah urutan pengisian data contohnya seperti ini. Hasilnya: program tidak error, namun data yang dihasilkan adalah tidak sesuai harapan."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"obj4 = create_sorcerer(\"400 year ago\", 400, \"human\", \"Hajime Kashimo\")\nprint(obj3)\n# output \u279c {'name': '400 year ago', 'age': 400, 'race': 'human', 'era': 'Hajime Kashimo'}\n")),(0,r.kt)("p",null,"Saat pemanggilan fungsi dengan argument, pastikan untuk selalu menyisipkan argument sesuai dengan parameter yang dideklarasikan. Gunakan penamaan parameter yang sesuai agar lebih mudah untuk mengetahui parameter harus diisi dengan data apa."),(0,r.kt)("h2",{id:"a232-keyword-argument"},"A.23.2. Keyword argument"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Keyword argument")," atau ",(0,r.kt)("em",{parentName:"p"},"named argument")," adalah metode pengisian argument pemanggilan fungsi disertai nama parameter yang ditulis secara jelas (",(0,r.kt)("em",{parentName:"p"},"eksplisit"),")."),(0,r.kt)("p",null,"Pada kode berikut dibuat 3 buah statement pemanggilan fungsi ",(0,r.kt)("inlineCode",{parentName:"p"},"create_sorcerer()"),". Ketiganya memiliki perbedaan satu sama lain pada bagian bagaimana argument disisipkan ke fungsi."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"obj5 = create_sorcerer(\"Sukuna\", 1000, \"incarnation\", \"heian\")\nprint(obj5)\n# output \u279c {'name': 'Sukuna', 'age': 1000, 'race': 'incarnation', 'era': 'heian'}\n\nobj6 = create_sorcerer(name=\"Kenjaku\", age=1000, race=\"human\", era=\"1000+ year ago\")\nprint(obj6)\n# output \u279c {'name': 'Kenjaku', 'age': 1000, 'race': 'human', 'era': '1000+ year ago'}\n\nobj7 = create_sorcerer(\"Hajime Kashimo\", 400, race=\"human\", era=\"400 year ago\")\nprint(obj7)\n# output \u279c {'name': 'Hajime Kashimo', 'age': 400, 'race': 'human', 'era': '400 year ago'}\n")),(0,r.kt)("p",null,"Penjelasan:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pada statement ",(0,r.kt)("inlineCode",{parentName:"li"},"obj5"),", fungsi dipanggil dengan nilai argument disisipkan seperti biasa."),(0,r.kt)("li",{parentName:"ul"},"Pada statement ",(0,r.kt)("inlineCode",{parentName:"li"},"obj6"),", fungsi dipanggil dengan nilai argument disisipkan disertai nama parameter."),(0,r.kt)("li",{parentName:"ul"},"Pada statement ",(0,r.kt)("inlineCode",{parentName:"li"},"obj7"),", argument pertama dan ke-2 ditulis tanpa nama parameter, sedangkan argument ke-3 dan ke-4 ditulis disertai nama parameternya.")),(0,r.kt)("p",null,"Kombinasi penulisan argument seperti pada statement ",(0,r.kt)("inlineCode",{parentName:"p"},"obj7")," adalah diperbolehkan, dengan catatan: untuk argument yang tidak disertai nama parameter harus diletakkan di kiri sebelum penulisan argument parameter lainnya yang mengadopsi metode ",(0,r.kt)("em",{parentName:"p"},"keyword argument"),"."),(0,r.kt)("p",null,"Salah satu benefit dari penerapan ",(0,r.kt)("em",{parentName:"p"},"keyword argument"),": pada argument pemanggilan fungsi yang disertai nama parameter, urutan penulisan argument boleh di-ubah. Contohnya seperti ini:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"obj8 = create_sorcerer(era=\"1000+ year ago\", age=1000, name=\"Kenjaku\", race=\"human\")\nprint(obj8)\n# output \u279c {'name': 'Kenjaku', 'age': 1000, 'race': 'human', 'era': '1000+ year ago'}\n\nobj9 = create_sorcerer(\"Hajime Kashimo\", 400, era=\"400 year ago\", race=\"human\")\nprint(obj9)\n# output \u279c {'name': 'Hajime Kashimo', 'age': 400, 'race': 'human', 'era': '400 year ago'}\n")),(0,r.kt)("p",null,"Pada statement ",(0,r.kt)("inlineCode",{parentName:"p"},"obj8")," semua argument pemanggilan fungsi ditulis menggunakan metode ",(0,r.kt)("em",{parentName:"p"},"keyword argument")," dan urutannya diubah total. Sewaktu di-print, hasilnya tetap valid. Sedangkan pada statement ",(0,r.kt)("inlineCode",{parentName:"p"},"obj9"),", hanya argument parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"era")," dan ",(0,r.kt)("inlineCode",{parentName:"p"},"race")," yang ditulis menggunakan metode ",(0,r.kt)("em",{parentName:"p"},"keyword argument")," dengan urutan diubah. Sisalnya (yaitu ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," dan ",(0,r.kt)("inlineCode",{parentName:"p"},"age"),") ditulis menggunakan metode ",(0,r.kt)("em",{parentName:"p"},"positional argument")," secara urut."),(0,r.kt)("p",null,"Kesimpulannya:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Penulisan argument pemanggilan fungsi ",(0,r.kt)("em",{parentName:"p"},"by default")," harus urut (sesuai dengan aturan ",(0,r.kt)("em",{parentName:"p"},"positional argument"),"), dengan pengecualian jika argument ditulis menggunakan ",(0,r.kt)("em",{parentName:"p"},"keyword argument")," maka boleh diubah urutannya.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Jika suatu pemanggilan fungsi pada bagian penulisan argument-nya menerapkan kombinasi ",(0,r.kt)("em",{parentName:"p"},"positional argument")," dan ",(0,r.kt)("em",{parentName:"p"},"keyword argument")," maka untuk argument yang ditulis tanpa keyword harus berada di bagian kiri dan dituliskan secara urut."))),(0,r.kt)("h2",{id:"a233-optional-argument"},"A.23.3. Optional argument"),(0,r.kt)("p",null,"Suatu parameter bisa ditentukan nilai ",(0,r.kt)("em",{parentName:"p"},"default"),"-nya saat deklarasi fungsi. Efeknya, saat pemanggilan fungsi diperbolehkan untuk tidak mengisi nilai argument karena nilai ",(0,r.kt)("em",{parentName:"p"},"default")," sudah ditentukan."),(0,r.kt)("p",null,"Sebagai contoh, pada fungsi ",(0,r.kt)("inlineCode",{parentName:"p"},"print_matrix()")," berikut, parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"matrix")," di-set nilai ",(0,r.kt)("em",{parentName:"p"},"default"),"-nya adalah list kosong ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),". Fungsi ",(0,r.kt)("inlineCode",{parentName:"p"},"print_matrix()")," dipanggil 2x, pemanggilan pertama dengan tanpa argument, dan yang kedua dengan argument matrix ",(0,r.kt)("inlineCode",{parentName:"p"},"[[1, 2], [5, 6]]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def print_matrix(matrix=[]):\n    if len(matrix) == 0:\n        print("[]")\n\n    for el in matrix:\n        print(el)\n\nprint("test print matrix 1:")\nprint_matrix()\n\nprint("test print matrix 2:")\nprint_matrix([\n    [1, 2],\n    [5, 6],\n])\n\nprint("test print matrix 3:")\nprint_matrix(matrix=[\n    [2, 3, 4],\n    [3, 1, 6],\n])\n')),(0,r.kt)("p",null,"Silakan run program di atas, dan perhatikan outpunya. Error tidak muncul saat eksekusi statement ",(0,r.kt)("inlineCode",{parentName:"p"},"print_matrix()")," pertama yang padahal tidak ada data yang disisipkan saat pemanggilan fungsi. Hal ini karena fungsi tersebut pada parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"matrix")," sudah ada nilai ",(0,r.kt)("em",{parentName:"p"},"default"),"-nya."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Python optional argument positional argument keyword only argument",src:n(7450).Z,width:"201",height:"244"})),(0,r.kt)("h2",{id:"a234-kombinasi-positional-argument-keyword-argument-dan-optional-argument"},"A.23.4. Kombinasi positional argument, keyword argument, dan optional argument"),(0,r.kt)("p",null,"Parameter fungsi bisa berisi nilai default (seperti pada contoh sebelumnya) atau tidak, atau bisa juga kombinasi keduanya."),(0,r.kt)("p",null,"Kode program berikut adalah contoh pengaplikasiannya. Fungsi ",(0,r.kt)("inlineCode",{parentName:"p"},"matrix_multiply_scalar()")," memiliki 2 buah parameter yaitu ",(0,r.kt)("inlineCode",{parentName:"p"},"matrix")," yang tidak memiliki ",(0,r.kt)("em",{parentName:"p"},"default value")," dan ",(0,r.kt)("inlineCode",{parentName:"p"},"scalar")," yang ",(0,r.kt)("em",{parentName:"p"},"default value"),"-nya adalah ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def matrix_multiply_scalar(matrix, scalar = 1):\n    res = []\n    for row in matrix:\n        res.append([cell * scalar for cell in row])\n\n    return res\n\ndef print_matrix(matrix = []):\n    if len(matrix) == 0:\n        print("[]")\n\n    for el in matrix:\n        print(el)\n\nmatrix = [\n    [1, 2, 3, 4],\n    [5, 6, 7, 8],\n    [9, 10, 11, 12],\n]\n\nprint(f"matrix * scalar {1}:")\nres1 = matrix_multiply_scalar(matrix)\nprint_matrix(res1)\n# output \u2193\n#\n# matrix * scalar 1:\n# [1, 2, 3, 4]\n# [5, 6, 7, 8]\n# [9, 10, 11, 12]\n\nprint(f"matrix * scalar {3}:")\nres2 = matrix_multiply_scalar(matrix, 3)\nprint_matrix(res2)\n# output \u2193\n#\n# matrix * scalar 3:\n# [3, 6, 9, 12]\n# [15, 18, 21, 24]\n# [27, 30, 33, 36]\n\nprint(f"matrix * scalar {2}:")\nres3 = matrix_multiply_scalar(matrix, scalar=2)\nprint_matrix(res3)\n# output \u2193\n#\n# matrix * scalar 2:\n# [2, 4, 6, 8]\n# [10, 12, 14, 16]\n# [18, 20, 22, 24]\n\nprint(f"matrix * scalar {4}:")\nres4 = matrix_multiply_scalar(matrix=matrix, scalar=4)\nprint_matrix(res4)\n# output \u2193\n#\n# matrix * scalar 4:\n# [2, 4, 6, 8]\n# [10, 12, 14, 16]\n# [18, 20, 22, 24]\n\nprint(f"matrix * scalar {7}:")\nres5 = matrix_multiply_scalar(scalar=7, matrix=matrix)\n# output \u2193\n#\n# print_matrix(res5)\n# matrix * scalar 7:\n# [2, 4, 6, 8]\n# [10, 12, 14, 16]\n# [18, 20, 22, 24]\n')),(0,r.kt)("p",null,"Pada kode di atas fungsi ",(0,r.kt)("inlineCode",{parentName:"p"},"matrix_multiply_scalar()")," dipanggil beberapa kali:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pemanggilan ke-1: nilai parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"scalar")," tidak diisi, efeknya maka ",(0,r.kt)("em",{parentName:"li"},"default value")," digunakan."),(0,r.kt)("li",{parentName:"ul"},"Pemanggilan ke-2: nilai parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"scalar")," ditentukan adalah ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,r.kt)("li",{parentName:"ul"},"Pemanggilan ke-3: nilai parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"scalar")," ditentukan adalah ",(0,r.kt)("inlineCode",{parentName:"li"},"2")," menggunakan metode ",(0,r.kt)("em",{parentName:"li"},"keyword argument")," diterapkan."),(0,r.kt)("li",{parentName:"ul"},"Pemanggilan ke-4: nilai parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"matrix")," dan ",(0,r.kt)("inlineCode",{parentName:"li"},"scalar")," dituliskan menggunakan metode ",(0,r.kt)("em",{parentName:"li"},"keyword argument")," diterapkan."),(0,r.kt)("li",{parentName:"ul"},"Pemanggilan ke-5: nilai parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"matrix")," dan ",(0,r.kt)("inlineCode",{parentName:"li"},"scalar")," dituliskan menggunakan metode ",(0,r.kt)("em",{parentName:"li"},"keyword argument")," diterapkan dengan posisi penulisan argument diubah.")),(0,r.kt)("p",null,"Argument pemanggilan fungsi yang ditulis menggunakan metode ",(0,r.kt)("em",{parentName:"p"},"keyword argument")," harus selalu diposisikan di sebelah kanan, setelah penulisan argument yang menggunakan metode ",(0,r.kt)("em",{parentName:"p"},"positional argument"),". Jika dipaksa ditulis terbalik, maka menghasilkan error. Contohnya seperti pada gambar berikut:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Python optional argument positional argument keyword only argument",src:n(7664).Z,width:"635",height:"236"})),(0,r.kt)("hr",null),(0,r.kt)("div",{class:"section-footnote"},(0,r.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,r.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,r.kt)("pre",null,(0,r.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/positional-optional-keyword-argument"},"github.com/novalagung/dasarpemrogramanpython-example/../positional-optional-keyword-argument")),(0,r.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/function"},"Function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/args-kwargs"},"Function \u279c Args & Kwargs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/closure"},"Function \u279c Closure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/lambda"},"Function \u279c Lambda"))),(0,r.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/tutorial/controlflow.html#defining-functions"},"https://docs.python.org/3/tutorial/controlflow.html#defining-functions")))))}s.isMDXComponent=!0},7450:(a,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAD0CAIAAAC+QJUhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0wOVQxNDoxNDo1MiswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMDlUMTU6Mzk6MDErMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMDlUMTU6Mzk6MDErMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI3MWUyYTRjLTNkMjgtNjA0Ni05MjllLTIwOTFmMTliNGQxMiIgeG1wTU06RG9jdW1lbnRJRD0i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"},7664:(a,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/positional-optional-keyword-argument-2-79753c9bb876b2fee36e80c98f071acf.png"}}]);