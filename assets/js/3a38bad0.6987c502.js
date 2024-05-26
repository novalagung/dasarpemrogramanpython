"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[174],{3905:(a,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>u});var l=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,l)}return n}function t(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,l,i=function(a,e){if(null==a)return{};var n,l,i={},r=Object.keys(a);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var s=l.createContext({}),d=function(a){var e=l.useContext(s),n=e;return a&&(n="function"==typeof a?a(e):t(t({},e),a)),n},p=function(a){var e=d(a.components);return l.createElement(s.Provider,{value:e},a.children)},k="mdxType",m={inlineCode:"code",wrapper:function(a){var e=a.children;return l.createElement(l.Fragment,{},e)}},b=l.forwardRef((function(a,e){var n=a.components,i=a.mdxType,r=a.originalType,s=a.parentName,p=o(a,["components","mdxType","originalType","parentName"]),k=d(n),b=i,u=k["".concat(s,".").concat(b)]||k[b]||m[b]||r;return n?l.createElement(u,t(t({ref:e},p),{},{components:n})):l.createElement(u,t({ref:e},p))}));function u(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=n.length,t=new Array(r);t[0]=b;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=a,o[k]="string"==typeof a?a:i,t[1]=o;for(var d=2;d<r;d++)t[d]=n[d];return l.createElement.apply(null,t)}return l.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9746:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var l=n(7462),i=(n(7294),n(3905));const r={sidebar_position:29,title:"A.29. Python Variables Scope (Local vs. Global)",sidebar_label:"A.29. Variables Scope (Local vs. Global)"},t=void 0,o={unversionedId:"basic/local-global-var",id:"basic/local-global-var",title:"A.29. Python Variables Scope (Local vs. Global)",description:"Pada chapter ini kita akan membahas tentang variable scope, yaitu kapan suatu variabel valid dan bisa digunakan di dalam block serta beberapa fungsi yang masih relevan dengan topik variabel scope.",source:"@site/docs/basic/local-global-var.md",sourceDirName:"basic",slug:"/basic/local-global-var",permalink:"/basic/local-global-var",draft:!1,tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_position:29,title:"A.29. Python Variables Scope (Local vs. Global)",sidebar_label:"A.29. Variables Scope (Local vs. Global)"},sidebar:"tutorialSidebar",previous:{title:"A.28. Packages",permalink:"/basic/packages"},next:{title:"A.30. Special Names",permalink:"/basic/special-names"}},s={},d=[{value:"A.29.1. Local vs. global variable",id:"a291-local-vs-global-variable",level:2},{value:"A.29.2. Local dan global variable dengan nama sama",id:"a292-local-dan-global-variable-dengan-nama-sama",level:2},{value:"A.29.3. Keyword <code>global</code>",id:"a293-keyword-global",level:2},{value:"A.29.4. Fungsi <code>globals()</code>",id:"a294-fungsi-globals",level:2},{value:"A.29.5. Fungsi <code>locals()</code>",id:"a295-fungsi-locals",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 TBA",id:"-tba",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],p={toc:d},k="wrapper";function m(a){let{components:e,...r}=a;return(0,i.kt)(k,(0,l.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pada chapter ini kita akan membahas tentang variable scope, yaitu kapan suatu variabel valid dan bisa digunakan di dalam block serta beberapa fungsi yang masih relevan dengan topik variabel scope."),(0,i.kt)("h2",{id:"a291-local-vs-global-variable"},"A.29.1. Local vs. global variable"),(0,i.kt)("p",null,"Global variable adalah variabel yang dideklarasikan di root (tidak di dalam suatu block fungsi). Sedangkan local variable adalah yang dideklarasikan di dalam suatu block dan hanya valid di block tersebut saja."),(0,i.kt)("p",null,"Contoh, sebuah file program Python bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," di isi dengan kode berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="File main.py"',title:'"File','main.py"':!0},'name = "Cleaver Bmurglbrm"\nprint("greetings", name)\n\ndef greet():\n    today = "Saturday"\n    print("happy", today, name)\n\nif name:\n    greet()\n    greet_message = "have a good day"\n    print("hello", name, greet_message)\n\n# output \u2193\n# \n# greetings Cleaver Bmurglbrm\n# happy Saturday Cleaver Bmurglbrm\n# hello Cleaver Bmurglbrm have a good day\n')),(0,i.kt)("p",null,"Variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," disitu merupakan variabel global. Variabel jenis ini bisa diakses dari block manapun. Di contoh, variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," diakses di dalam block fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"greet()")," dan di block seleksi kondisi ",(0,i.kt)("inlineCode",{parentName:"p"},"if name:"),"."),(0,i.kt)("p",null,"Berbeda dengan variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"today")," yang tempat deklarasinya ada di block fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"greet()"),", membuatnya hanya valid untuk digunakan di block itu saja. Variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"today")," dikategorikan sebagai variabel local dengan scope adalah block fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"greet()"),"."),(0,i.kt)("p",null,"Selain itu ada juga variabel lain bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"greet_message")," yang dideklarasikan di block seleksi kondisi ",(0,i.kt)("inlineCode",{parentName:"p"},"if name:"),"."),(0,i.kt)("p",null,"Sekarang coba akses variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"today")," dari luar block, hasilnya pasti error. Keterangan errornya: variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"today")," tidak dikenali."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python variable scope local vs global",src:n(1831).Z,width:"438",height:"513"})),(0,i.kt)("p",null,"Bagaimana jika variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"greet_message")," diakses dari luar block seleksi kondisi, apakah juga error? Jawabannya, tidak!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python variable scope local vs global",src:n(2778).Z,width:"364",height:"459"})),(0,i.kt)("p",null,"Di editor terlihat variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"greet_message")," digaris-bawahi merah, menandakan ada error namun hanya di level linter saja. Error tersebut tidak membuat eksekusi program menjadi gagal."),(0,i.kt)("p",null,"Sampai sini bisa ditarik kesimpulan bahwa variabel global bisa diakses dari mana saja, sedangkan variabel local bisa diakses di dalam block dimana ia dideklarasikan. Pengaksesan variabel local diluar block-nya memiliki efek samping berikut:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jika variabel local dideklarasikan di dalam block fungsi/lambda/closure, maka pengaksesannya dari luar block menghasilkan error."),(0,i.kt)("li",{parentName:"ul"},"Jika variabel local dideklarasikan di block seleksi kondisi atau lainnya, maka pengaksesaannya dari luar block diperbolehkan dan tidak membuat eksekusi program menjadi error. Namun warning atau error di level linter muncul.")),(0,i.kt)("h2",{id:"a292-local-dan-global-variable-dengan-nama-sama"},"A.29.2. Local dan global variable dengan nama sama"),(0,i.kt)("p",null,"Katakanlah ada variabel global dan variabel local yang namanya sama persis, di situasi seperti ini maka nilai variabel local pada block-nya adalah sesuai dengan saat deklarasinya dalam block. Di luar block, variabel tersebut nilainya kembali berisi nilai variabel global."),(0,i.kt)("p",null,"Agar lebih jelas coba praktekan kode berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'name = "Cleaver Bmurglbrm"\n\ndef greet():\n    name = "Keymaster Urmgrgl"\n    print("hello", name)\n\ngreet()\nprint("greetings", name)\n\n# output \u2193\n# \n# hello Keymaster Urmgrgl\n# greetings Cleaver Bmurglbrm\n')),(0,i.kt)("p",null,"Bisa dilihat dari output bahwa variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," nilainya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"Keymaster Urmgrgl"),", sesuai dengan isi variabel saat deklarasi di block fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"greet()"),". Namun di luar block fungsi, nilainya kembali menjadi ",(0,i.kt)("inlineCode",{parentName:"p"},"Cleaver Bmurglbrm"),"."),(0,i.kt)("p",null,"Dari sini bisa diambil kesimpulan bahwa di luar block, perubahan nilai variabel local tidak berefek ke variabel global, meskipun namanya sama persis."),(0,i.kt)("h2",{id:"a293-keyword-global"},"A.29.3. Keyword ",(0,i.kt)("inlineCode",{parentName:"h2"},"global")),(0,i.kt)("p",null,"Untuk mengubah nilai suatu variabel global dari block, maka perlu adanya penggunaan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"global"),". Keyword ini menandai variabel dalam block bahwa reference yang digunakan adalah variabel global. Efeknya, perubahan nilai pada variabel juga berpengaruh ke variabel global."),(0,i.kt)("p",null,"Contoh penerapan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'name = "Cleaver Bmurglbrm"\n\ndef greet():\n    global name\n    name = "Keymaster Urmgrgl"\n    print("hello", name)\n\ngreet()\nprint("greetings", name)\n\n# output \u2193\n# \n# hello Keymaster Urmgrgl\n# greetings Keymaster Urmgrgl\n')),(0,i.kt)("p",null,"Cara penggunaan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"global")," adalah dengan cukup menuliskannya di dalam block kemudian diikuti nama variabel. Dari output terlihat bahwa di luar block fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"greet()")," nilai variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," berubah."),(0,i.kt)("h2",{id:"a294-fungsi-globals"},"A.29.4. Fungsi ",(0,i.kt)("inlineCode",{parentName:"h2"},"globals()")),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"globals()")," mengembalikan informasi semua variabel yang bisa diakses dari tempat dimana fungsi dipanggil. Nilai balik berbentuk dictionary dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," adalah nama variabel dan ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," adalah nilai variabel."),(0,i.kt)("p",null,"Contoh penerapannya bisa dilihat pada kode berikut. Ada variabel bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"my_var")," yang nilainya diakses via nilai balik pemanggilan fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"globals()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"my_var = 12\n\ndef task_one():\n    all_global_vars = globals()\n    print(all_global_vars['my_var'])\n\ntask_one()\n# output \u279c 12\n")),(0,i.kt)("h2",{id:"a295-fungsi-locals"},"A.29.5. Fungsi ",(0,i.kt)("inlineCode",{parentName:"h2"},"locals()")),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"locals()")," mengembalikan informasi variabel yang dideklarasikan di block dimana fungsi tersebut dipanggil dengan nilai balik berbentuk dictionary."),(0,i.kt)("p",null,"Pada contoh berikut, variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"my_var")," dideklarasikan di luar block fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"task_two()"),", sedangkan ",(0,i.kt)("inlineCode",{parentName:"p"},"another_var")," didalamnya."),(0,i.kt)("p",null,"Di dalam  ",(0,i.kt)("inlineCode",{parentName:"p"},"task_two()"),", variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"another_var")," bisa diakses via nilai balik fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"locals()")," karena masih satu block. Tidak seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"my_var"),", pengaksesannya via nilai balik fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"locals()")," akan menghasilkan error karena variabel tersebut tidak dikenali."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"my_var = 12\n\ndef task_two():\n    another_var = \"Hello Python\"\n\n    all_locals_vars = locals()\n    print(all_locals_vars['another_var'])\n\n    try:\n        print(all_locals_vars['my_var'])\n    except Exception as err:\n        print(f'error {err}')\n\ntask_two()\n# output \u2193\n# \n# Hello Python\n# error 'my_var'\n")),(0,i.kt)("p",null,"Di contoh, ditambahkan block ",(0,i.kt)("inlineCode",{parentName:"p"},"try except")," untuk menangkap error yang muncul saat statement ",(0,i.kt)("inlineCode",{parentName:"p"},"all_locals_vars['my_var']")," dieksekusi."),(0,i.kt)("hr",null),(0,i.kt)("div",{class:"section-footnote"},(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/local-global-var"},"github.com/novalagung/dasarpemrogramanpython-example/../local-global-var")),(0,i.kt)("h3",{id:"-tba"},"\u25c9 TBA"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Variabel global pada module")),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/faq/programming.html"},"https://docs.python.org/3/faq/programming.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/functions.html#locals"},"https://docs.python.org/3/library/functions.html#locals")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/functions.html#globals"},"https://docs.python.org/3/library/functions.html#globals")))))}m.isMDXComponent=!0},1831:(a,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/local-global-var-1-2fa69a684904c64976f15bc70678208f.png"},2778:(a,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/local-global-var-2-3b07f2b3a40d6c01e0699ddbc1cbb552.png"}}]);