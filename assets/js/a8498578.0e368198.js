"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[290],{3905:(a,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>b});var t=n(7294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function s(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var m=t.createContext({}),p=function(a){var e=t.useContext(m),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},o=function(a){var e=p(a.components);return t.createElement(m.Provider,{value:e},a.children)},u="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,m=a.parentName,o=s(a,["components","mdxType","originalType","parentName"]),u=p(n),g=r,b=u["".concat(m,".").concat(g)]||u[g]||d[g]||i;return n?t.createElement(b,l(l({ref:e},o),{},{components:n})):t.createElement(b,l({ref:e},o))}));function b(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,l=new Array(i);l[0]=g;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=a,s[u]="string"==typeof a?a:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7353:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_position:26,title:"A.26. Python Lambda",sidebar_label:"A.26. Function \u279c Lambda"},l=void 0,s={unversionedId:"basic/lambda",id:"basic/lambda",title:"A.26. Python Lambda",description:"Pada chapter ini kita akan belajar tentang anonymous function atau fungsi tanpa nama yang biasa disebut dengan lambda.",source:"@site/docs/basic/lambda.md",sourceDirName:"basic",slug:"/basic/lambda",permalink:"/basic/lambda",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{sidebar_position:26,title:"A.26. Python Lambda",sidebar_label:"A.26. Function \u279c Lambda"},sidebar:"tutorialSidebar",previous:{title:"A.25. Function \u279c Closure",permalink:"/basic/closure"}},m={},p=[{value:"A.26.1. Penerapan lambda",id:"a261-penerapan-lambda",level:2},{value:"A.26.2. lambda return value",id:"a262-lambda-return-value",level:2},{value:"A.26.3. Lambda argument/parameter",id:"a263-lambda-argumentparameter",level:2},{value:"A.26.4. Lambda dengan parameter <strong>*args</strong> &amp; <strong>**kwargs</strong>",id:"a264-lambda-dengan-parameter-args--kwargs",level:2},{value:"A.26.5. Isi lambda: statement 1 baris",id:"a265-isi-lambda-statement-1-baris",level:2},{value:"A.26.6. Lambda dengan parameter fungsi/lambda",id:"a266-lambda-dengan-parameter-fungsilambda",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],o={toc:p},u="wrapper";function d(a){let{components:e,...n}=a;return(0,r.kt)(u,(0,t.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pada chapter ini kita akan belajar tentang ",(0,r.kt)("em",{parentName:"p"},"anonymous function")," atau fungsi tanpa nama yang biasa disebut dengan ",(0,r.kt)("strong",{parentName:"p"},"lambda"),". "),(0,r.kt)("h2",{id:"a261-penerapan-lambda"},"A.26.1. Penerapan lambda"),(0,r.kt)("p",null,"Lambda adalah fungsi yang tidak memiliki nama. Lambda umumnya disimpan ke suatu variabel atau dieksekusi langsung. Lambda bisa memiliki parameter dan mengembalikan nilai balik, seperti fungsi pada umumnya."),(0,r.kt)("p",null,"Perbedaan signifikan antara lambda dengan fungsi/closure adalah pada lambda isinya hanya boleh 1 baris satement. Jika ada lebih dari 1 baris silakan gunakan fungsi saja."),(0,r.kt)("p",null,"Untuk mempermudah pemahaman kita tentang lambda, silakan pelajari kode berikut. Ada dua blok fungsi dibuat, satu berbentuk fungsi biasa dan satunya lagi adalah lambda. Keduanya memiliki tugas sama persis yaitu menampilkan pesan ",(0,r.kt)("inlineCode",{parentName:"p"},"hello python"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def say_hello1():\n    print("hello python")\n\nsay_hello1()\n# output \u279c hello python\n\nsay_hello2 = lambda : print("hello python")\n\nsay_hello2()\n# output \u279c hello python\n')),(0,r.kt)("p",null,"Bisa dilihat bagaimana perbedaan penulisan syntax fungsi menggunakan lambda dibandingkan dengan fungsi biasa. Lambda ditulis menggunakan keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda"),", diikuti tanda titik 2 ",(0,r.kt)("inlineCode",{parentName:"p"},":")," lalu statement satu baris. Lambda perlu ditampung ke sebuah variabel (misalnya ",(0,r.kt)("inlineCode",{parentName:"p"},"say_hello2()"),"), setelahnya variabel tersebut digunakan untuk mengeksekusi lambda dengan cara memanggilnya seperti fungsi."),(0,r.kt)("h2",{id:"a262-lambda-return-value"},"A.26.2. lambda return value"),(0,r.kt)("p",null,"Lambda selalu mengembalikan nilai balik atau ",(0,r.kt)("em",{parentName:"p"},"return value"),". Jika isi lambda adalah suatu data atau operasi yang menghasilkan data, maka data tersebut otomatis jadi nilai balik. Contoh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def get_hello_message1():\n    return "hello python"\n\nres = get_hello_message1()\nprint(res)\n# output \u279c hello python\n\nget_hello_message2 = lambda : "hello python"\n\nres = get_hello_message2()\nprint(res)\n# output \u279c hello python\n')),(0,r.kt)("p",null,"Pada kode di atas lambda ",(0,r.kt)("inlineCode",{parentName:"p"},"get_hello_message2()")," mengembalikan nilai balik bertipe string."),(0,r.kt)("p",null,"Lalu bagaimana dengan lambda ",(0,r.kt)("inlineCode",{parentName:"p"},"say_hello2()")," yang telah dipraktekan di atas, apakah juga mengembalikan nilai balik? Iya, lambda tersebut juga ada return value-nya. Namun, karena isi lambda ",(0,r.kt)("inlineCode",{parentName:"p"},"say_hello2()")," adalah pemanggilan fungsi ",(0,r.kt)("inlineCode",{parentName:"p"},"print()")," maka nilai balik lambda adalah data ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai tipe data ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," dibahas pada chapter ",(0,r.kt)("a",{parentName:"p",href:"#"},"None"))),(0,r.kt)("h2",{id:"a263-lambda-argumentparameter"},"A.26.3. Lambda argument/parameter"),(0,r.kt)("p",null,"Sama seperti fungsi, lambda bisa memiliki parameter baik itu jenisnya parameter positional, optional, ataupun keyword argument."),(0,r.kt)("p",null,"Sebagai contoh, lihat perbandingan fungsi ",(0,r.kt)("inlineCode",{parentName:"p"},"get_full_name1()")," dengan lambda ",(0,r.kt)("inlineCode",{parentName:"p"},"get_full_name2()")," pada kode berikut. Parameter di lambda dituliskan diantara keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda")," dan tanda titik 2 ",(0,r.kt)("inlineCode",{parentName:"p"},":"),". Jika ada lebih dari 1 parameter, gunakan tanda koma ",(0,r.kt)("inlineCode",{parentName:"p"},",")," sebagai separator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def get_full_name1(first_name, last_name):\n    return f"{first_name} {last_name}"\n\nget_full_name2 = lambda first_name, last_name : f"{first_name} {last_name}"\n\nres = get_full_name1("Darion", "Mograine")\nprint(res)\n# output \u279c Darion Mograine\n\nres = get_full_name2("Sally", "Whitemane")\nprint(res)\n# output \u279c Sally Whitemane\n')),(0,r.kt)("p",null,"Untuk penerapan optional argument dan keyword argument, contohnya bisa dilihat pada kode berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'get_full_name3 = lambda first_name, last_name = "" : f"{first_name} {last_name}".strip()\n\nres = get_full_name3("Thrall")\nprint(res)\n# output \u279c Thrall\n\nres = get_full_name3(first_name="Arthas", last_name="Menethil")\nprint(res)\n# output \u279c Arthas Menethil\n')),(0,r.kt)("h2",{id:"a264-lambda-dengan-parameter-args--kwargs"},"A.26.4. Lambda dengan parameter ",(0,r.kt)("strong",{parentName:"h2"},"*","args")," & ",(0,r.kt)("strong",{parentName:"h2"},"*","*","kwargs")),(0,r.kt)("p",null,"Penerapan ",(0,r.kt)("strong",{parentName:"p"},"*","args")," dan ",(0,r.kt)("strong",{parentName:"p"},"*","*","kwargs")," pada parameter lambda tidak berbeda dengan penerapannya di fungsi biasa. Sebagai perbandingan Silakan pelajari 2 contoh berikut yang masing-masing berisi contoh penulisan lambda vs versi fungsi biasa."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contoh lambda dengan parameter ",(0,r.kt)("strong",{parentName:"p"},"*","args"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# %% A.26.4. Lambda *args dan **kwargs\n\ndef debug1(separator, *params):\n    res = []\n    for i in range(len(params)):\n        res.append(f"param {i}: {params[i]}")\n    return separator.join(res)\n\ndebug2 = lambda separator, *params : separator.join([f"param {i}: {params[i]}" for i in range(len(params))])\n\nres = debug1(", ", "Darion Mograine", ["Highlord", "Horseman of the Ebon Blade", "Ashbringer"], True)\nprint(res)\n# output \u279c param 0: Darion Mograine, param 1: [\'Highlord\', \'Horseman of the Ebon Blade\', \'Ashbringer\'], param 2: True\n\nres = debug2(", ", "Darion Mograine", ["Highlord", "Horseman of the Ebon Blade", "Ashbringer"], True)\nprint(res)\n# output \u279c param 0: Darion Mograine, param 1: [\'Highlord\', \'Horseman of the Ebon Blade\', \'Ashbringer\'], param 2: True\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contoh lambda dengan parameter ",(0,r.kt)("strong",{parentName:"p"},"*","*","kwargs"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def debug3(separator, **params):\n    res = []\n    for key in params:\n        res.append(f"{key}: {params[key]}")\n    return separator.join(res)\n\ndebug4 = lambda separator, **params : separator.join([f"{key}: {params[key]}" for key in params])\n\nres = debug3(\n    ", ",\n    name="Darion Mograine",\n    occupations=["Highlord", "Horseman of the Ebon Blade", "Ashbringer"],\n    active=True\n)\nprint(res)\n# output \u279c name: Darion Mograine, occupations: [\'Highlord\', \'Horseman of the Ebon Blade\', \'Ashbringer\'], active: True\n\nres = debug4(\n    ", ",\n    name="Darion Mograine",\n    occupations=["Highlord", "Horseman of the Ebon Blade", "Ashbringer"],\n    active=True\n)\nprint(res)\n# output \u279c name: Darion Mograine, occupations: [\'Highlord\', \'Horseman of the Ebon Blade\', \'Ashbringer\'], active: True\n')))),(0,r.kt)("h2",{id:"a265-isi-lambda-statement-1-baris"},"A.26.5. Isi lambda: statement 1 baris"),(0,r.kt)("p",null,"Lambda secara penulisan bisa dibilang lebih praktis dibanding fungsi, namun limitasinya yang hanya bisa berisi statement 1 baris saja terkadang menjadi masalah, terutama untuk mengakomodir operasi komplex yang umumnya membutuhkan lebih dari 1 baris kode."),(0,r.kt)("p",null,"Namun Python dari segi bahasa adalah cukup flexibel, banyak API yang memungkinkan kita selaku programmer untuk bisa menuliskan kode yang cukup kompleks tapi dalam 1 baris saja. Pada contoh berikut, operasi transpose matrix bisa dilakukan hanya dalam 1 baris dengan menerapkan list comprehension."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def transpose_matrix1(m):\n    tm = []\n    for i in range(len(m[0])):\n        tr = []\n        for row in m:\n            tr.append(row[i])\n        tm.append(tr)\n    return tm\n\ntranspose_matrix2 = lambda m : [[row[i] for row in matrix] for i in range(len(m[0]))]\n\nmatrix = [[1, 2], [3, 4], [5, 6]]\n\nres = transpose_matrix1(matrix)\nprint(res)\n# output \u279c [[1, 3, 5], [2, 4, 6]]\n\nres = transpose_matrix2(matrix)\nprint(res)\n# output \u279c [[1, 3, 5], [2, 4, 6]]\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai list comprehensian dibahas pada chapter ",(0,r.kt)("a",{parentName:"p",href:"/basic/list-comprehension"},"List Comprehension"))),(0,r.kt)("h2",{id:"a266-lambda-dengan-parameter-fungsilambda"},"A.26.6. Lambda dengan parameter fungsi/lambda"),(0,r.kt)("p",null,"Lambda, closure, fungsi, ketiganya bisa digunakan sebagai argument suatu pemanggilan fungsi dengan cara implementasi juga sama, yaitu cukup tulis saja lambda sebagai argument baik secara langsung maupun lewat variabel terlebih dahulu."),(0,r.kt)("p",null,"Contoh penerapannya bisa dilihat pada kode berikut. Lambda ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate()")," dibuat dengan desain parameter ke-3 yaitu ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," bisa menampung nilai berupa fungsi/closure/lambda."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'aggregate = lambda message, numbers, f: print(f"{message} is {f(numbers)}")\n\nnumbers = [24, 67, 22, 98, 3, 50]\n\ndef average1(numbers):\n    return sum(numbers) / len(numbers)\n\naggregate("average", numbers, average1)\n# output \u279c average is 44.0\n\naverage2 = lambda numbers : sum(numbers) / len(numbers)\naggregate("average", numbers, average2)\n# output \u279c average is 44.0\n\naggregate("average", numbers, lambda numbers : sum(numbers) / len(numbers))\n# output \u279c average is 44.0\n')),(0,r.kt)("p",null,"Lambda ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate()")," dipanggil 3x yang pada pemanggilan ke-2 dan ke-3-nya, argument parameter ke-3 diisi dengan lambda."),(0,r.kt)("hr",null),(0,r.kt)("div",{class:"section-footnote"},(0,r.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,r.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,r.kt)("pre",null,(0,r.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/lambda"},"github.com/novalagung/dasarpemrogramanpython-example/../lambda")),(0,r.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/function"},"Function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/positional-optional-keyword-argument"},"Optional, Positional, Keyword Argument")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/args-kwargs"},"Args & Kwargs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/closure"},"Closure"))),(0,r.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/reference/expressions.html#lambda"},"https://docs.python.org/3/reference/expressions.html#lambda")))))}d.isMDXComponent=!0}}]);