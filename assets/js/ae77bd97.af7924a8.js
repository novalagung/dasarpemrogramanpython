"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[3781],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>A});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=t.createContext({}),o=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=o(e.components);return t.createElement(u.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},k=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=o(n),k=i,A=m["".concat(u,".").concat(k)]||m[k]||c[k]||r;return n?t.createElement(A,l(l({ref:a},d),{},{components:n})):t.createElement(A,l({ref:a},d))}));function A(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var p={};for(var u in a)hasOwnProperty.call(a,u)&&(p[u]=a[u]);p.originalType=e,p[m]="string"==typeof e?e:i,l[1]=p;for(var o=2;o<r;o++)l[o]=n[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},316:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var t=n(7462),i=(n(7294),n(3905));const r={sidebar_position:11,title:"A.11. Perulangan Python \u279c break, continue",sidebar_label:"A.11. Perulangan \u279c break, continue"},l=void 0,p={unversionedId:"basic/break-continue",id:"basic/break-continue",title:"A.11. Perulangan Python \u279c break, continue",description:"Keyword break dan continue sering dipergunakan dalam perulangan untuk alterasi flow secara paksa, seperti memberhentikan perulangan atau memaksa perulangan untuk lanjut ke iterasi berikutnya.",source:"@site/docs/basic/break-continue.md",sourceDirName:"basic",slug:"/basic/break-continue",permalink:"/basic/break-continue",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"A.11. Perulangan Python \u279c break, continue",sidebar_label:"A.11. Perulangan \u279c break, continue"},sidebar:"tutorialSidebar",previous:{title:"A.10. Perulangan \u279c while",permalink:"/basic/while"},next:{title:"A.12. List",permalink:"/basic/list"}},u={},o=[{value:"A.11.1. Keyword <code>break</code>",id:"a111-keyword-break",level:2},{value:"A.11.2. Keyword <code>continue</code>",id:"a112-keyword-continue",level:2},{value:"A.11.3. Label perulangan",id:"a113-label-perulangan",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],d={toc:o},m="wrapper";function c(e){let{components:a,...r}=e;return(0,i.kt)(m,(0,t.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"break")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"continue")," sering dipergunakan dalam perulangan untuk alterasi flow secara paksa, seperti memberhentikan perulangan atau memaksa perulangan untuk lanjut ke iterasi berikutnya."),(0,i.kt)("p",null,"Pada chapter ini kita akan mempelajarinya."),(0,i.kt)("h2",{id:"a111-keyword-break"},"A.11.1. Keyword ",(0,i.kt)("inlineCode",{parentName:"h2"},"break")),(0,i.kt)("p",null,"Pengaplikasian ",(0,i.kt)("inlineCode",{parentName:"p"},"break")," biasanya dikombinasikan dengan seleksi kondisi. Sebagai contoh program sederhana berikut, yaitu program dengan spesifikasi:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Berisi perulangan yang sifatnya berjalan terus-menerus tanpa henti (karena menggunakan nilai ",(0,i.kt)("inlineCode",{parentName:"li"},"True")," sebagai kontrol)."),(0,i.kt)("li",{parentName:"ul"},"Perulangan hanya berhenti jika nilai ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," (yang didapat dari inputan user) adalah tidak bisa dibagi dengan angka ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'while True:\n    n = int(input("enter a number divisible by 3: "))\n    if n % 3 != 0:\n        break\n\n    print("%d is divisible by 3" % (n))\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"perulangan break continue",src:n(2626).Z,width:"270",height:"158"})),(0,i.kt)("h2",{id:"a112-keyword-continue"},"A.11.2. Keyword ",(0,i.kt)("inlineCode",{parentName:"h2"},"continue")),(0,i.kt)("p",null,"Keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"continue")," digunakan untuk memaksa perulangan lanjut ke iterasi berikutnya (seperti proses skip)."),(0,i.kt)("p",null,"Contoh penerapannya bisa dilihat pada program berikut, yang spesifikasinya:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Program berisi perulangan dengan kontrol adalah data ",(0,i.kt)("em",{parentName:"li"},"range")," sebanyak 10 (dimana isinya adalah angka numerik ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," hingga ",(0,i.kt)("inlineCode",{parentName:"li"},"9"),")."),(0,i.kt)("li",{parentName:"ul"},"Ketika nilai variabel counter ",(0,i.kt)("inlineCode",{parentName:"li"},"i")," adalah dibawah ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," atau di atas ",(0,i.kt)("inlineCode",{parentName:"li"},"7")," maka iterasi di-skip.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"for i in range(10):\n    if i < 3 or i > 7:\n        continue\n    print(i)\n")),(0,i.kt)("p",null,"Efek dari ",(0,i.kt)("inlineCode",{parentName:"p"},"continue")," adalah semua statement setelahnya akan di-skip. Pada program di atas, statement ",(0,i.kt)("inlineCode",{parentName:"p"},"print(i)")," tidak dieksekusi ada ",(0,i.kt)("inlineCode",{parentName:"p"},"continue"),"."),(0,i.kt)("p",null,"Hasilnya bisa dilihat pada gambar berikut, nilai yang di-print adalah angka ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," hingga ",(0,i.kt)("inlineCode",{parentName:"p"},"7")," saja."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"perulangan break continue",src:n(2304).Z,width:"249",height:"155"})),(0,i.kt)("h2",{id:"a113-label-perulangan"},"A.11.3. Label perulangan"),(0,i.kt)("p",null,"Python tidak mengenal konsep perulangan yang memiliki label."),(0,i.kt)("p",null,"Teknik menamai perulangan dengan label umumnya digunakan untuk mengontrol flow pada perulangan bercabang / ",(0,i.kt)("em",{parentName:"p"},"nested"),", misalnya untuk menghentikan perulangan terluar secara paksa ketika suatu kondisi terpenuhi."),(0,i.kt)("p",null,"Di Python, algoritma seperti ini bisa diterapkan namun menggunakan tambahan kode. Contoh penerapannya bisa dilihat pada kode berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'max = int(input("jumlah bintang: "))\n\nouterLoop = True\nfor i in range(max):\n    if not outerLoop: \n        break\n\n    for j in range(i + 1):\n        print("*", end=" ")\n        if j >= 7:\n            outerLoop = False\n            break\n    print()\n')),(0,i.kt)("p",null,"Penjelasan:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Program yang memiliki perulanga ",(0,i.kt)("em",{parentName:"li"},"nested")," dengan jumlah perulangan ada 2."),(0,i.kt)("li",{parentName:"ul"},"Disiapkan sebuah variabel ",(0,i.kt)("inlineCode",{parentName:"li"},"bool")," bernama ",(0,i.kt)("inlineCode",{parentName:"li"},"outerLoop")," untuk kontrol perulangan terluar."),(0,i.kt)("li",{parentName:"ul"},"Ketika nilai ",(0,i.kt)("inlineCode",{parentName:"li"},"j")," (yang merupakan variabel counter perulangan terdalam) adalah lebih dari atau sama dengan ",(0,i.kt)("inlineCode",{parentName:"li"},"7"),", maka variabel ",(0,i.kt)("inlineCode",{parentName:"li"},"outerLoop")," di set nilainya menjadi ",(0,i.kt)("inlineCode",{parentName:"li"},"False"),", dan perulangan terdalam di-",(0,i.kt)("inlineCode",{parentName:"li"},"break")," secara paksa."),(0,i.kt)("li",{parentName:"ul"},"Dengan ini maka perulangan terluar akan terhenti.")),(0,i.kt)("hr",null),(0,i.kt)("div",{class:"section-footnote"},(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/break-continue"},"github.com/novalagung/dasarpemrogramanpython-example/../break-continue")),(0,i.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/for-range"},"Perulangan \u279c for & range")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/while"},"Perulangan \u279c while"))),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/tutorial/controlflow.html"},"https://docs.python.org/3/tutorial/controlflow.html")))))}c.isMDXComponent=!0},2626:(e,a,n)=>{n.d(a,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACeCAIAAABMwnMFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHGGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNS0yM1QxNTo0OTo0NSswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMjE6Mjc6MzErMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMjE6Mjc6MzErMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMDlmMzQ5LWYxZDQtMTI0Ny1iYjc2LWFmM2E5NzhhMDgyYSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2ZGU5ZmNlYi1hNmM4LTA2NDktOTRlNC1lOTdlZjNjNDI3OGEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZGU5ZmNlYi1hNmM4LTA2NDktOTRlNC1lOTdlZjNjNDI3OGEiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT54bXAuZGlkOjZkZTlmY2ViLWE2YzgtMDY0OS05NGU0LWU5N2VmM2M0Mjc4YTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZkZTlmY2ViLWE2YzgtMDY0OS05NGU0LWU5N2VmM2M0Mjc4YSIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0yM1QxNTo0OTo0NSswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmM2M3YTFmNy04OGQzLTczNDYtYmQ3OS1mYWEzZThjYTJhMGYiIHN0RXZ0OndoZW49IjIwMjMtMTAtMDFUMjE6MDQ6MTcrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC43IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjAwOWYzNDktZjFkNC0xMjQ3LWJiNzYtYWYzYTk3OGEwODJhIiBzdEV2dDp3aGVuPSIyMDIzLTEwLTI3VDIxOjI3OjMxKzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjUuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8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"},2304:(e,a,n)=>{n.d(a,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAACbCAIAAAAvEaqWAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHGGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNS0yM1QxNTo1MToyNCswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMjE6Mjc6MDgrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMjE6Mjc6MDgrMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBmZjhhNjBmLTRhOGYtZWE0ZC1hMzI5LTljNTBmZGMzMWNjOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpiMWMxNDVjZC1iYzk5LWU1NGYtOTc3OC0yZThmZjJjNjEwN2MiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMWMxNDVjZC1iYzk5LWU1NGYtOTc3OC0yZThmZjJjNjEwN2MiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT54bXAuZGlkOmIxYzE0NWNkLWJjOTktZTU0Zi05Nzc4LTJlOGZmMmM2MTA3YzwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmIxYzE0NWNkLWJjOTktZTU0Zi05Nzc4LTJlOGZmMmM2MTA3YyIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0yM1QxNTo1MToyNCswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphNTgwODNlMC0wMDhiLWJiNDYtYTU4OS1iNDMxOTYyMjkwYmYiIHN0RXZ0OndoZW49IjIwMjMtMTAtMDFUMjE6MDU6MjUrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC43IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGZmOGE2MGYtNGE4Zi1lYTRkLWEzMjktOWM1MGZkYzMxY2M5IiBzdEV2dDp3aGVuPSIyMDIzLTEwLTI3VDIxOjI3OjA4KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjUuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8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"}}]);