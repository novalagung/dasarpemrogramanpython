"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[4522],{3905:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>A});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function u(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=t.createContext({}),p=function(e){var a=t.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},s=function(e){var a=p(e.components);return t.createElement(m.Provider,{value:a},e.children)},o="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),o=p(n),d=i,A=o["".concat(m,".").concat(d)]||o[d]||g[d]||r;return n?t.createElement(A,l(l({ref:a},s),{},{components:n})):t.createElement(A,l({ref:a},s))}));function A(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var u={};for(var m in a)hasOwnProperty.call(a,m)&&(u[m]=a[m]);u.originalType=e,u[o]="string"==typeof e?e:i,l[1]=u;for(var p=2;p<r;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9996:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var t=n(7462),i=(n(7294),n(3905));const r={sidebar_position:25,title:"A.25. Python Closure",sidebar_label:"A.25. Function \u279c Closure"},l=void 0,u={unversionedId:"basic/closure",id:"basic/closure",title:"A.25. Python Closure",description:"Closure adalah istilah umum dalam programming untuk deklarasi fungsi yang berada di dalam fungsi (nested function). Pada chapter ini kita akan mempelajari cara implementasinya.",source:"@site/docs/basic/closure.md",sourceDirName:"basic",slug:"/basic/closure",permalink:"/basic/closure",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25,title:"A.25. Python Closure",sidebar_label:"A.25. Function \u279c Closure"},sidebar:"tutorialSidebar",previous:{title:"A.24. Function \u279c Args & Kwargs",permalink:"/basic/args-kwargs"},next:{title:"A.26. Function \u279c Lambda",permalink:"/basic/lambda"}},m={},p=[{value:"A.25.1. Pengenalan Closure",id:"a251-pengenalan-closure",level:2},{value:"\u25c9 Fungsi <code>min()</code> &amp; <code>max()</code>",id:"-fungsi-min--max",level:3},{value:"A.25.2. Menampung fungsi dalam variabel",id:"a252-menampung-fungsi-dalam-variabel",level:2},{value:"A.25.3. Fungsi sebagai argument parameter",id:"a253-fungsi-sebagai-argument-parameter",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],s={toc:p},o="wrapper";function g(e){let{components:a,...r}=e;return(0,i.kt)(o,(0,t.Z)({},s,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Closure adalah istilah umum dalam programming untuk deklarasi fungsi yang berada di dalam fungsi (",(0,i.kt)("em",{parentName:"p"},"nested function"),"). Pada chapter ini kita akan mempelajari cara implementasinya."),(0,i.kt)("h2",{id:"a251-pengenalan-closure"},"A.25.1. Pengenalan Closure"),(0,i.kt)("p",null,"Di Python, fungsi bisa dideklarasikan di-dalam suatu fungsi. Penerapannya cukup berguna pada kasus dimana ada blok kode yang perlu di-eksekusi lebih dari satu kali tetapi eksekusinya hanya di dalam fungsi tertentu, atau eksekusinya setelah pemanggilan fungsi tertentu."),(0,i.kt)("p",null,"Permisalan ada fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"inner()")," yang dideklarasikan di dalam fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"outer()"),", maka:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"inner()")," bisa diakses dari dalam fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"outer()")),(0,i.kt)("li",{parentName:"ul"},"Fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"inner()")," juga bisa diakses dari luar fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"outer()")," asalkan fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"inner()")," tersebut dijadikan sebagai nilai balik fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"outer()")," (untuk kemudian ditampung ke dalam variabel lalu dieksekusi)")),(0,i.kt)("p",null,"Program berikut berisi contoh praktis tentang fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"inner()")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"outer()"),". Silakan pelajari dan praktekan."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def outer_func(numbers = []):\n    print(f"numbers: {numbers}")\n\n    def inner_func():\n        print(f"max: {max(numbers)}")\n        print(f"min: {min(numbers)}")\n\n    print("call inner_func() within outer_func()")\n    inner_func()\n\n    return inner_func\n\nprint("call outer_func()")\nf = outer_func([1, 2, 3, 4])\n\nprint("call inner_func() outside of outer_func()")\nf()\n')),(0,i.kt)("p",null,"Output program:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python closure function",src:n(545).Z,width:"352",height:"241"})),(0,i.kt)("p",null,"Program di atas jika di-breakdown sesuai urutan eksekusi statement-nya kurang lebih seperti ini:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tahap 1: eksekusi statement ",(0,i.kt)("inlineCode",{parentName:"li"},'print("call outer_func()")')),(0,i.kt)("li",{parentName:"ul"},"Tahap 2: eksekusi statement ",(0,i.kt)("inlineCode",{parentName:"li"},'print(f"numbers: {numbers}")')),(0,i.kt)("li",{parentName:"ul"},"Tahap 3: eksekusi statement ",(0,i.kt)("inlineCode",{parentName:"li"},'print("call inner_func() within outer_func()")')),(0,i.kt)("li",{parentName:"ul"},"Tahap 4: eksekusi statement ",(0,i.kt)("inlineCode",{parentName:"li"},"inner_func()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tahap 4.A. eksekusi statement ",(0,i.kt)("inlineCode",{parentName:"li"},'print(f"max: {max(numbers)}")')),(0,i.kt)("li",{parentName:"ul"},"Tahap 4.B. eksekusi statement ",(0,i.kt)("inlineCode",{parentName:"li"},'print(f"min: {min(numbers)}")')))),(0,i.kt)("li",{parentName:"ul"},"Tahap 5: eksekusi statement ",(0,i.kt)("inlineCode",{parentName:"li"},'print("call inner_func() outside of outer_func()")')),(0,i.kt)("li",{parentName:"ul"},"Tahap 6: eksekusi statement ",(0,i.kt)("inlineCode",{parentName:"li"},"inner_func()")," via ",(0,i.kt)("inlineCode",{parentName:"li"},"f()")," dari luar fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"outer_func()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tahap 6.A. eksekusi statement ",(0,i.kt)("inlineCode",{parentName:"li"},'print(f"max: {max(numbers)}")')),(0,i.kt)("li",{parentName:"ul"},"Tahap 6.B. eksekusi statement ",(0,i.kt)("inlineCode",{parentName:"li"},'print(f"min: {min(numbers)}")'))))),(0,i.kt)("p",null,"Jika di-",(0,i.kt)("em",{parentName:"p"},"flatten")," semua statement-nya maka programnya menjadi seperti ini:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'print("call outer_func()")\nnumbers = [1, 2, 3, 4]\nprint(f"numbers: {numbers}")\n\nprint("call inner_func() within outer_func()")\nprint(f"max: {max(numbers)}")\nprint(f"min: {min(numbers)}")\n\nprint("call inner_func() outside of outer_func()")\nprint(f"max: {max(numbers)}")\nprint(f"min: {min(numbers)}")\n')),(0,i.kt)("h3",{id:"-fungsi-min--max"},"\u25c9 Fungsi ",(0,i.kt)("inlineCode",{parentName:"h3"},"min()")," & ",(0,i.kt)("inlineCode",{parentName:"h3"},"max()")),(0,i.kt)("p",null,"Kedua fungsi ini digunakan untuk menghitung agregasi data numerik."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"min()")," untuk pencarian nilai minimum dari data list yang berisi elemen data numerik.",(0,i.kt)("br",null),"Contoh ",(0,i.kt)("inlineCode",{parentName:"p"},"min([3, 4, 1, 2, 3, 4])")," menghasilkan data ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"max()")," untuk pencarian nilai maksimum dari data list yang berisi elemen data numerik.",(0,i.kt)("br",null),"Contoh ",(0,i.kt)("inlineCode",{parentName:"p"},"max([3, 4, 1, 2, 3, 4])")," menghasilkan data ",(0,i.kt)("inlineCode",{parentName:"p"},"4"),"."))),(0,i.kt)("h2",{id:"a252-menampung-fungsi-dalam-variabel"},"A.25.2. Menampung fungsi dalam variabel"),(0,i.kt)("p",null,"Pada contoh sebelumnya, fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"inner_func()")," ditampung ke variabel bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," via nilai balik pemanggilan fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"outer_func()"),". Dari sini terlihat bahwa closure bisa disimpan ke variabel."),(0,i.kt)("p",null,"Tidak hanya closure, fungsi biasa-pun juga bisa disimpan dalam variabel, contohnya ada pada fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"print_all()")," berikut yang disimpan pada variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"display")," untuk kemudian di-eksekusi."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def print_all(message, *numbers, **others):\n    print(f"message: {message}")\n    print(f"numbers: {numbers}")\n    print(f"others: {others}")\n\ndisplay = print_all\ndisplay("hello world", 1, 2, 3, 4, name="nokia 3310", discontinued=True, year_released=2000)\n# output \u2193\n#\n# message: hello world\n# numbers: (1, 2, 3, 4)\n# others: {\'name\': \'nokia 3310\', \'discontinued\': True, \'year_released\': 2000}\n')),(0,i.kt)("h2",{id:"a253-fungsi-sebagai-argument-parameter"},"A.25.3. Fungsi sebagai argument parameter"),(0,i.kt)("p",null,"Selain disimpan dalam variabel, fungsi/closure bisa juga dijadikan sebagai nilai argument suatu parameter fungsi. Metode seperti ini cukup sering digunakan terutama pada operasi data sequence atau agregasi data numerik."),(0,i.kt)("p",null,"Contoh penerapan fungsi/closure sebagai argument pemanggilan fungsi bisa dilihat pada kode berikut ini. Silakan coba dan pelajari, penjelasannya ada dibawah kode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def aggregate(message, numbers, f):\n    res = f(numbers)\n    print(f"{message} is {res}")\n\ndef sum(numbers):\n    total = 0\n    for n in numbers:\n        total += n\n    return total\n\ndef avg(numbers):\n    total = 0\n    for n in numbers:\n        total += n\n    return total / len(numbers)\n\naggregate("total", [24, 67, 22, 98, 3, 50], sum)\n# output \u279c total is 264\n\naggregate("average", [24, 67, 22, 98, 3, 50], avg)\n# output \u279c average is 44.0\n\naggregate("max number", [24, 67, 22, 98, 3, 50], max)\n# output \u279c max number is 98\n\naggregate("min number", [24, 67, 22, 98, 3, 50], min)\n# output \u279c min number is 3\n')),(0,i.kt)("p",null,"Fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregate()")," dideklarasikan memiliki 3 buah parameter yaitu ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"numbers"),", dan ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," dimana ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," adalah akan diisi dengan fungsi/closure. Di dalam fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregate()"),", fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," dipanggil dengan disisipkan argument yaitu ",(0,i.kt)("inlineCode",{parentName:"p"},"numbers")," dalam pemanggilannya."),(0,i.kt)("p",null,"Ada juga fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"sum()")," dideklarasikan dengan tugas untuk menghitung total dari data list numerik ",(0,i.kt)("inlineCode",{parentName:"p"},"numbers"),". Dan fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"avg()")," untuk nilai rata-rata dari data ",(0,i.kt)("inlineCode",{parentName:"p"},"numbers"),"."),(0,i.kt)("p",null,"Kemudian di bawahnya ada 4 buah statement pemanggilan fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregate()"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pemanggilan ke-1 adalah perhitungan nilai total ",(0,i.kt)("inlineCode",{parentName:"li"},"numbers"),". Fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"sum")," yang telah dideklarasikan sebelumnya dijadikan sebagai argument pemanggilan fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"aggregate()")," untuk ditampung di parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"f"),"."),(0,i.kt)("li",{parentName:"ul"},"Pemanggilan ke-2 adalah perhitungan nilai rata-rata dimana fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"avg")," yang telah dideklarasikan dijadikan sebagai argument pemanggilan fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"aggregate()"),".."),(0,i.kt)("li",{parentName:"ul"},"Pemanggilan ke-3 adalah perhitungan nilai maksimum. Fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"max")," yang merupakan fungsi bawaan Python digunakan sebagai argument pemanggilan fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"aggregate()"),"."),(0,i.kt)("li",{parentName:"ul"},"Pemanggilan ke-1 adalah perhitungan nilai minimum. Fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"min")," yang merupakan fungsi bawaan Python digunakan sebagai argument pemanggilan fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"aggregate()"),".")),(0,i.kt)("p",null,"Dari contoh terlihat bagaimana contoh penerapan closure sebagai nilai argument parameter fungsi. Fungsi atau closure bisa digunakan sebagai nilai argument, dengan catatan skema parameter-nya harus disesuaikan dengan kebutuhan."),(0,i.kt)("p",null,"Di dalam fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregate()"),", closure ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," diharapkan untuk memiliki parameter yang bisa menampung data list ",(0,i.kt)("inlineCode",{parentName:"p"},"numbers"),". Selama fungsi/closure memenuhi kriteria ini maka penggunaannya tidak menghasilkan error."),(0,i.kt)("hr",null),(0,i.kt)("div",{class:"section-footnote"},(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/args-kwargs"},"github.com/novalagung/dasarpemrogramanpython-example/../args-kwargs")),(0,i.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/function"},"Function")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/positional-optional-keyword-argument"},"Function \u279c Positional, Optional, Keyword Arguments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/args-kwargs"},"Function \u279c Args & Kwargs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/lambda"},"Function \u279c Lambda"))),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#functions"},"https://docs.python.org/3/library/stdtypes.html#functions")))))}g.isMDXComponent=!0},545:(e,a,n)=>{n.d(a,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWAAAADxCAIAAAB6TvpJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0wOVQxNTowNjoyMiswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMDlUMTU6NDA6NDMrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMDlUMTU6NDA6NDMrMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlmNmY2ODU4LWU3MzgtZTA0OS04Nzc4LWE4YWU2MGM1YTVkNiIgeG1wTU06RG9jdW1lbnRJRD0i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"}}]);