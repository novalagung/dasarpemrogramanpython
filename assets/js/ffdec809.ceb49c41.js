"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[2202],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>c});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},d=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},o=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=u(n),o=r,c=k["".concat(s,".").concat(o)]||k[o]||m[o]||i;return n?t.createElement(c,p(p({ref:a},d),{},{components:n})):t.createElement(c,p({ref:a},d))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=o;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[k]="string"==typeof e?e:r,p[1]=l;for(var u=2;u<i;u++)p[u]=n[u];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}o.displayName="MDXCreateElement"},8987:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=n(7462),r=(n(7294),n(3905));const i={sidebar_position:32,title:"A.32. Python Pack Unpack tuple, list, set, dict",sidebar_label:"A.32. Pack Unpack \u279c Tuple, List, Set, Dict"},p=void 0,l={unversionedId:"basic/pack-unpack-elements",id:"basic/pack-unpack-elements",title:"A.32. Python Pack Unpack tuple, list, set, dict",description:"Python mengenal teknik packing dan unpacking, dimana teknik ini umum diterapkan sesuai kebutuhan pada beberapa jenis tipe data kolektif tuple, list, set, dan dictionary. Pada chapter ini kita akan mempelajari cara penggunaannya, beserta peran penggunaan tanda ` dan *` pada operasi packing dan unpacking.",source:"@site/docs/basic/pack-unpack-elements.md",sourceDirName:"basic",slug:"/basic/pack-unpack-elements",permalink:"/basic/pack-unpack-elements",draft:!1,tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_position:32,title:"A.32. Python Pack Unpack tuple, list, set, dict",sidebar_label:"A.32. Pack Unpack \u279c Tuple, List, Set, Dict"},sidebar:"tutorialSidebar",previous:{title:"A.31. None",permalink:"/basic/none"},next:{title:"A.33. OOP \u279c Class & Object",permalink:"/basic/class-object"}},s={},u=[{value:"A.32.1. Unpacking element tuple, list, set",id:"a321-unpacking-element-tuple-list-set",level:2},{value:"\u25c9 Unpack 1 element = 1 variable",id:"-unpack-1-element--1-variable",level:3},{value:"\u25c9 Unpack hanya <code>N</code> elements pertama",id:"-unpack-hanya-n-elements-pertama",level:3},{value:"\u25c9 Unpack hanya <code>N</code> elements terakhir",id:"-unpack-hanya-n-elements-terakhir",level:3},{value:"\u25c9 Unpack hanya <code>N</code> elements pertama dan terakhir",id:"-unpack-hanya-n-elements-pertama-dan-terakhir",level:3},{value:"A.32.2. Packing element tuple, list, set",id:"a322-packing-element-tuple-list-set",level:2},{value:"\u25c9 Prepend element",id:"-prepend-element",level:3},{value:"\u25c9 Append element",id:"-append-element",level:3},{value:"\u25c9 Append dan prepend element bersamaan",id:"-append-dan-prepend-element-bersamaan",level:3},{value:"A.32.3. Pemanfaatan teknik unpacking pada argument parameter",id:"a323-pemanfaatan-teknik-unpacking-pada-argument-parameter",level:2},{value:"A.32.4. Packing-unpacking item dictionary",id:"a324-packing-unpacking-item-dictionary",level:2},{value:"\u25c9 Operasi unpack pada dictionary",id:"-operasi-unpack-pada-dictionary",level:3},{value:"\u25c9 Operasi append &amp; prepend pada dictionary",id:"-operasi-append--prepend-pada-dictionary",level:3},{value:"\u25c9 Pemanfaatan teknik unpacking dictionary pada argument parameter",id:"-pemanfaatan-teknik-unpacking-dictionary-pada-argument-parameter",level:3},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],d={toc:u},k="wrapper";function m(e){let{components:a,...i}=e;return(0,r.kt)(k,(0,t.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Python mengenal teknik packing dan unpacking, dimana teknik ini umum diterapkan sesuai kebutuhan pada beberapa jenis tipe data kolektif tuple, list, set, dan dictionary. Pada chapter ini kita akan mempelajari cara penggunaannya, beserta peran penggunaan tanda ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," dan ",(0,r.kt)("inlineCode",{parentName:"p"},"**")," pada operasi packing dan unpacking."),(0,r.kt)("h2",{id:"a321-unpacking-element-tuple-list-set"},"A.32.1. Unpacking element tuple, list, set"),(0,r.kt)("p",null,"Unpacking (yang dalam Bahasa Indonesia berarti bongkar muatan) adalah teknik pendistribusian elemen tipe data kolektif ke banyak variabel."),(0,r.kt)("p",null,"Distribusinya sendiri bisa ",(0,r.kt)("em",{parentName:"p"},"1 on 1")," yang berarti setiap elemen ditampung 1 variabel, atau hanya beberapa elemen saja yang didistribusikan ke variabel baru, sisanya ditampung tetap dalam bentuk data kolektif."),(0,r.kt)("h3",{id:"-unpack-1-element--1-variable"},"\u25c9 Unpack 1 element = 1 variable"),(0,r.kt)("p",null,"Pada program berikut ada sebuah tuple bernama ",(0,r.kt)("inlineCode",{parentName:"p"},"names")," yang setiap element-nya perlu untuk didistribusikan ke variabel independen. Karena ada 6 buah elemen dalam tuple tersebut, maka perlu disiapkan 6 buah variabel untuk menampung data masing-masing element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"names = (\n    'Mikasa Ackerman',\n    'Armin Arlert',\n    'Eren Yeager',\n    'Zeke Yeager',\n    'Reiner Braun',\n    'Annie Leonhart'\n)\n\nsoldier1, soldier2, soldier3, warrior1, warrior2, warrior3 = names\n\nprint(soldier1) # output \u279c Mikasa Ackerman\nprint(soldier2) # output \u279c Armin Arlert\nprint(soldier3) # output \u279c Eren Yeager\nprint(warrior1) # output \u279c Zeke Yeager\nprint(warrior2) # output \u279c Reiner Braun\nprint(warrior3) # output \u279c Annie Leonhart\n")),(0,r.kt)("p",null,"Jika jumlah variabel penampung tidak sama dengan jumlah element data kolektif, misalnya jumlah variabel lebih sedikit, maka error pasti muncul saat eksekusi program."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Python pack &amp; unpack element",src:n(3500).Z,width:"718",height:"468"})),(0,r.kt)("h3",{id:"-unpack-hanya-n-elements-pertama"},"\u25c9 Unpack hanya ",(0,r.kt)("inlineCode",{parentName:"h3"},"N")," elements pertama"),(0,r.kt)("p",null,"Ada alternatif cara lain untuk kasus lainnya dimana element yang perlu ditampung ke variabel baru hanya beberapa element pertama saja. Misalnya, dari 6 element tuple, hanya 3 yang perlu disimpan ke variabel baru. Hal seperti ini bisa dilakukan dengan konsekuensi: sisa element lainnya ditampung dalam bentuk kolektif di satu variabel lain."),(0,r.kt)("p",null,"Contoh penerapannya bisa dilihat di kode berikut. Tuple yang sama, 3 element pertamanya saja yang ditampung ke variabel baru. Untuk element sisanya, tetap harus ditampung juga tapi cukup di 1 variabel saja, tersimpan dalam tiple data ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Variabel penampung sisa element selalu dalam bentuk ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," meskipun sumber datanya bertipe data lain.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"names = (\n    'Mikasa Ackerman',\n    'Armin Arlert',\n    'Eren Yeager',\n    'Zeke Yeager',\n    'Reiner Braun',\n    'Annie Leonhart'\n)\n\nsoldier1, soldier2, deceiver1, *warriors = names\n\nprint(soldier1)  # output \u279c Mikasa Ackerman\nprint(soldier2)  # output \u279c Armin Arlert\nprint(deceiver1) # output \u279c Eren Yeager\nprint(warriors)  # output \u279c ['Zeke Yeager', 'Reiner Braun', 'Annie Leonhart']\n")),(0,r.kt)("p",null,"Bisa dilihat dari output, bahwa 3 element pertama berhasil ditampung di 3 variabel baru. Sisanya tetap disimpan ke variabel lain yang pada contoh di atas adalah variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"warriors"),"."),(0,r.kt)("p",null,"Penulisan variabel penampung sisa element diawali dengan karakter ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," dan pasti tipe datanya adalah list."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Penulisan karakter ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," di awal variabel ini wajib. Jika tidak ditulis, maka Python menganggap ada 4 buah variabel mencoba menampung element tuple."),(0,r.kt)("p",{parentName:"blockquote"},"Jika diterapkan pada kasus di atas, statement tersebut pasti menghasilkan error, karena data ",(0,r.kt)("inlineCode",{parentName:"p"},"names")," berisi 6 element.")),(0,r.kt)("p",null,"Katakanlah data element yang dibutuhkan hanya 3 pertama, sisanya bisa dibuang, maka bisa gunakan variabel ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," sebagai tempat pembuangan element yang tidak terpakai."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"soldier1, soldier2, deceiver1, *_ = names\n\nprint(soldier1)  # output \u279c Mikasa Ackerman\nprint(soldier2)  # output \u279c Armin Arlert\nprint(deceiver1) # output \u279c Eren Yeager\n")),(0,r.kt)("h3",{id:"-unpack-hanya-n-elements-terakhir"},"\u25c9 Unpack hanya ",(0,r.kt)("inlineCode",{parentName:"h3"},"N")," elements terakhir"),(0,r.kt)("p",null,"teknik ini mirip seperti sebelumnya, perbedaannya: variabel penampung element berada di sebelah kanan dan sisa element ditampung di variabel paling kiri. "),(0,r.kt)("p",null,"Jadi variabel bertanda ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," harus ditulis di paling kiri."),(0,r.kt)("p",null,"Pada contoh berikut, element yang sama disimpan namun dalam bentuk tipe data berbeda, yaitu set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"names = {\n    'Mikasa Ackerman',\n    'Armin Arlert',\n    'Eren Yeager',\n    'Zeke Yeager',\n    'Reiner Braun',\n    'Annie Leonhart'\n}\n\n*soldiers, deceiver1, deceiver2, warrior1, warrior2 = names\n\nprint(soldiers)  # output \u279c ['Mikasa Ackerman', 'Armin Arlert']\nprint(deceiver1) # output \u279c Eren Yeager\nprint(deceiver2) # output \u279c Zeke Yeager\nprint(warrior1)  # output \u279c Reiner Braun\nprint(warrior2)  # output \u279c Annie Leonhart\n")),(0,r.kt)("p",null,"Variabel penampung sisa element (yaitu ",(0,r.kt)("inlineCode",{parentName:"p"},"soldiers"),") tipe datanya ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),"."),(0,r.kt)("h3",{id:"-unpack-hanya-n-elements-pertama-dan-terakhir"},"\u25c9 Unpack hanya ",(0,r.kt)("inlineCode",{parentName:"h3"},"N")," elements pertama dan terakhir"),(0,r.kt)("p",null,"Bagaimana jika elements yang di-unpack adalah yang posisinya ada di samping? Bisa juga, caranya dengan menampung sisanya di tengah."),(0,r.kt)("p",null,"Pada contoh berikut, ada sebuah list yang 2 element pertamanya ditampung ke variabel independen, 2 terakhir juga ditampung ke variabel independen, dan sisanya (yang posisinya di tengah) ditampung ke variabel lain."),(0,r.kt)("p",null,"Tanda ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," dituliskan pada variabel yang ditengah dengan penulisan bebas di posisi mana saja, asalkan tidak di awal dan tidak di akhir. Python secara cerdas tahu element mana yang dianggap sisa dengan melihat statementnya."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"names = [\n    'Mikasa Ackerman',\n    'Armin Arlert',\n    'Eren Yeager',\n    'Zeke Yeager',\n    'Reiner Braun',\n    'Annie Leonhart'\n]\n\nsoldier1, soldier2, *deceivers, warrior1, warrior2 = names\n\nprint(soldier1)  # output \u279c Mikasa Ackerman\nprint(soldier2)  # output \u279c Armin Arlert\nprint(deceivers) # output \u279c ['Eren Yeager', 'Zeke Yeager']\nprint(warrior1)  # output \u279c Reiner Braun\nprint(warrior2)  # output \u279c Annie Leonhart\n")),(0,r.kt)("h2",{id:"a322-packing-element-tuple-list-set"},"A.32.2. Packing element tuple, list, set"),(0,r.kt)("p",null,"Packing element adalah operasi pemuatan banyak data ke sebuah data kolektif. Cara penerapannya sangat mudah, cukup tulis saja variabel yang ingin di-pack sebagai element data kolektif. Untuk tipenya bisa berupa tuple, list, maupun set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"soldier1 = 'Mikasa Ackerman'\nsoldier2 = 'Armin Arlert'\nsoldier3 = 'Eren Yeager'\nwarrior1 = 'Zeke Yeager'\nwarrior2 = 'Reiner Braun'\nwarrior3 = 'Annie Leonhart'\n\ntuple1 = (soldier1, soldier2, soldier3, warrior1, warrior2, warrior3)\nprint(tuple1)\n# output \u2193\n#\n# ('Mikasa Ackerman',\n#  'Armin Arlert',\n#  'Eren Yeager',\n#  'Zeke Yeager',\n#  'Reiner Braun',\n#  'Annie Leonhart')\n\nlist1 = [soldier1, soldier2, soldier3, warrior1, warrior2, warrior3]\nprint(list1)\n# output \u2193\n#\n# ['Mikasa Ackerman',\n#  'Armin Arlert',\n#  'Eren Yeager',\n#  'Zeke Yeager',\n#  'Reiner Braun',\n#  'Annie Leonhart']\n\nset1 = {soldier1, soldier2, soldier3, warrior1, warrior2, warrior3}\nprint(set1)\n# output \u2193\n#\n# {'Mikasa Ackerman',\n#  'Eren Yeager',\n#  'Reiner Braun',\n#  'Armin Arlert',\n#  'Annie Leonhart',\n#  'Zeke Yeager'}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Perlu diingat, bahwa tipe data set tidak menjamin elemennya tersimpan secara urut. Jadinya sewaktu diakses atau di-print bisa saja urutan elemen berubah."),(0,r.kt)("p",{parentName:"blockquote"},"Pembahasan detail mengenai set ada di chapter ",(0,r.kt)("a",{parentName:"p",href:"/basic/set"},"Set"))),(0,r.kt)("h3",{id:"-prepend-element"},"\u25c9 Prepend element"),(0,r.kt)("p",null,"Operasi prepend bisa dilakukan dengan mudah menggunakan syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"(newElement, *oldData)"),". Contohnya pada kode berikut, tuple ",(0,r.kt)("inlineCode",{parentName:"p"},"names")," ditambahi element baru dengan posisi di awal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"names = [\n    'Mikasa Ackerman',\n    'Armin Arlert',\n    'Eren Yeager',\n    'Zeke Yeager',\n    'Reiner Braun',\n    'Annie Leonhart'\n]\n\nnames = ('Jean Kirstein', *names)\nprint(names)\n# output \u2193\n# \n# ('Jean Kirstein',\n#  'Mikasa Ackerman',\n#  'Armin Arlert',\n#  'Eren Yeager',\n#  'Zeke Yeager',\n#  'Reiner Braun',\n#  'Annie Leonhart')\n")),(0,r.kt)("p",null,"Operasi ",(0,r.kt)("inlineCode",{parentName:"p"},"('Jean Kirstein', *names)")," menghasilkan data tuple karena disitu literal tuple digunakan (",(0,r.kt)("inlineCode",{parentName:"p"},"( )"),"). Selain tuple, operasi ini bisa didesain untuk ditampung ke tipe data kolektif lainnya, misalnya ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," dan ",(0,r.kt)("inlineCode",{parentName:"p"},"set"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"names = ('Jean Kirstein', *names)\nprint(f\"type: {type(names).__name__}\")\n# output \u279c type: tuple\n\nnames2 = ['Jean Kirstein', *names]\nprint(f\"type: {type(names2).__name__}\")\n# output \u279c type: list\n\nnames3 = {'Jean Kirstein', *names}\nprint(f\"type: {type(names3).__name__}\")\n# output \u279c type: set\n")),(0,r.kt)("h3",{id:"-append-element"},"\u25c9 Append element"),(0,r.kt)("p",null,"Append adalah operasi penambahan element baru di posisi akhir data. Penulisan syntax-nya mirip seperti prepend element namun dituliskan terbalik, seperti ini ",(0,r.kt)("inlineCode",{parentName:"p"},"(*oldData, newElement)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"names = [\n    'Mikasa Ackerman',\n    'Armin Arlert',\n    'Eren Yeager',\n    'Zeke Yeager',\n    'Reiner Braun',\n    'Annie Leonhart'\n]\n\nnames = ('Jean Kirstein', *names)\nprint(names)\n# output \u2193\n# \n# ('Jean Kirstein',\n#  'Mikasa Ackerman',\n#  'Armin Arlert',\n#  'Eren Yeager',\n#  'Zeke Yeager',\n#  'Reiner Braun',\n#  'Annie Leonhart')\n\nnames = (*names, 'Connie Springer')\nprint(names)\n# output \u2193\n# \n# ('Jean Kirstein',\n#  'Mikasa Ackerman',\n#  'Armin Arlert',\n#  'Eren Yeager',\n#  'Zeke Yeager',\n#  'Reiner Braun',\n#  'Annie Leonhart',\n#  'Connie Springer')\n")),(0,r.kt)("h3",{id:"-append-dan-prepend-element-bersamaan"},"\u25c9 Append dan prepend element bersamaan"),(0,r.kt)("p",null,"Operasi append dan prepend bisa dilakukan secara bersamaan. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"names = [\n    'Mikasa Ackerman',\n    'Armin Arlert',\n    'Eren Yeager',\n    'Zeke Yeager',\n    'Reiner Braun',\n    'Annie Leonhart'\n]\n\nnames = ('Jean Kirstein', *names)\nprint(names)\n# output \u2193\n# \n# ('Jean Kirstein',\n#  'Mikasa Ackerman',\n#  'Armin Arlert',\n#  'Eren Yeager',\n#  'Zeke Yeager',\n#  'Reiner Braun',\n#  'Annie Leonhart')\n\nnames = [*names, 'Connie Springer']\nprint(names)\n# output \u2193\n# \n# ['Jean Kirstein',\n#  'Mikasa Ackerman',\n#  'Armin Arlert',\n#  'Eren Yeager',\n#  'Zeke Yeager',\n#  'Reiner Braun',\n#  'Annie Leonhart',\n#  'Connie Springer']\n\nnames = {'Levi Ackerman', *names, 'Hange Zo\xeb'}\nprint(names)\n# output \u2193\n# \n# {'Armin Arlert',\n#  'Connie Springer',\n#  'Mikasa Ackerman',\n#  'Levi Ackerman',\n#  'Zeke Yeager',\n#  'Reiner Braun',\n#  'Jean Kirstein',\n#  'Eren Yeager',\n#  'Hange Zo\xeb',\n#  'Annie Leonhart'}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Perlu diingat, bahwa tipe data set tidak menjamin elemennya tersimpan secara urut. Jadinya sewaktu diakses atau di-print bisa saja urutan elemen berubah."),(0,r.kt)("p",{parentName:"blockquote"},"Pembahasan detail mengenai set ada di chapter ",(0,r.kt)("a",{parentName:"p",href:"/basic/set"},"Set"))),(0,r.kt)("h2",{id:"a323-pemanfaatan-teknik-unpacking-pada-argument-parameter"},"A.32.3. Pemanfaatan teknik unpacking pada argument parameter"),(0,r.kt)("p",null,"Tenik unpacking umum dimanfaatkan pada penyisipan data argument parameter pemanggilan fungsi/method. Contoh aplikasinya bisa dilihat pada kode berikut, dimana ada fungsi bernama ",(0,r.kt)("inlineCode",{parentName:"p"},"show_biography()")," yang akan dipanggil beberapa kali dengan cara pemanggilan berbeda satu sama lain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def show_biography(id, name, occupation, gender):\n    print(f"id: {id}")\n    print(f"name: {name}")\n    print(f"occupation: {occupation}")\n    print(f"gender: {gender}")\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pemanggilan ke-1: Argument parameter disisipkan menggunakan cara normal."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"id = 'U0001'\nname = 'Mikasa Ackerman'\noccupation = 'Paradise Survey Corps'\ngender = 'female'\nshow_biography(id, name, occupation, gender)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pemanggilan ke-2: Argument pertama diisi secara normal, sedangkan parameter kedua dan seterusnya disisipkan menggunakan metode unpacking."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"user2_id = 'U0002'\nuser2_data = ('Annie Leonhart', 'Marley Warrior', 'female')\nshow_biography(user2_id, *user2_data)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pemanggilan ke-3: metode unpacking juga digunakan tetapi untuk argument ke-1 hingga ke-3 (sesuai dengan jumlah element ",(0,r.kt)("inlineCode",{parentName:"p"},"user3_data"),")."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"user3_data = ('U0003', 'Levi Ackerman', 'Paradise Survey Corps')\nshow_biography(*user3_data, 'male')\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pemanggilan ke-4: Metode unpacking digunakan pada penyisipan argument parameter ke-2 dan ke-3 saja."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"user4_data = ('Hange Zo\xeb', 'Paradise Survey Corps')\nshow_biography('U0004', *user4_data, 'male')\n")))),(0,r.kt)("h2",{id:"a324-packing-unpacking-item-dictionary"},"A.32.4. Packing-unpacking item dictionary"),(0,r.kt)("h3",{id:"-operasi-unpack-pada-dictionary"},"\u25c9 Operasi unpack pada dictionary"),(0,r.kt)("p",null,"Operasi unpack pada tipe data dictionary mengembalikan hanya nilai key-nya saja dalam bentuk ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),". Nilai value-nya tidak ikut didistribusikan. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"user_id, *user_data = data\nprint(f\"user_id: {user_id}\")\nprint(f\"user_data: {user_data}\")\n# output \u2193\n# \n# user_id: id\n# user_data: ['name', 'occupation', 'gender']\n\n*user_data, gender = data\nprint(f\"user_data: {user_data}\")\nprint(f\"gender: {gender}\")\n# output \u2193\n# \n# user_data: ['id', 'name', 'occupation']\n# gender: gender\n\nuser_id, *user_data, gender = data\nprint(f\"user_id: {user_id}\")\nprint(f\"user_data: {user_data}\")\nprint(f\"gender: {gender}\")\n# output \u2193\n# \n# user_id: id\n# user_data: ['name', 'occupation']\n# gender: gender\n")),(0,r.kt)("h3",{id:"-operasi-append--prepend-pada-dictionary"},"\u25c9 Operasi append & prepend pada dictionary"),(0,r.kt)("p",null,"Di atas telah dicontohkan kalau tanda ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," bisa digunakan untuk menampung sisa pendistribusian keys dictionary (ingat, hanya keys-nya saja!), maka berarti tidak bisa digunakan untuk operasi append dan prepend dictionary."),(0,r.kt)("p",null,"Cara append/prepend dictionary adalah dengan memanfaatkan tanda ",(0,r.kt)("inlineCode",{parentName:"p"},"**"),". Contoh penerapannya bisa dilihat pada kode berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data = {\n    'name': 'Mikasa Ackerman',\n}\nprint(data)\n# output \u279c { 'name': 'Mikasa Ackerman' }\n\ndata = {\n    **data,\n    'occupation': 'Paradise Survey Corps',\n}\nprint(data)\n# output \u279c { 'name': 'Mikasa Ackerman', 'occupation': 'Paradise Survey Corps' }\n\ndata = {\n    'id': 'U0001',\n    **data,\n    'gender': 'female',\n}\nprint(data)\n# output \u2193\n# \n# {\n#   'id': 'U0001',\n#   'name': 'Mikasa Ackerman',\n#   'occupation': 'Paradise Survey Corps',\n#   'gender': 'female'\n# }\n")),(0,r.kt)("h3",{id:"-pemanfaatan-teknik-unpacking-dictionary-pada-argument-parameter"},"\u25c9 Pemanfaatan teknik unpacking dictionary pada argument parameter"),(0,r.kt)("p",null,"Tanda ",(0,r.kt)("inlineCode",{parentName:"p"},"**")," bisa digunakan untuk operasi unpack dictionary sebagai argument pemanggilan fungsi. Key dictionary menjadi nama parameter, dan value dictionary menjadi nilai argument parameter."),(0,r.kt)("p",null,"Teknik ini bisa dilakukan dengan ketentuan nama parameter fungsi adalah sama dengan key dictionary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def show_biography(id, name, occupation, gender):\n    print(f\"id: {id}\")\n    print(f\"name: {name}\")\n    print(f\"occupation: {occupation}\")\n    print(f\"gender: {gender}\")\n\ndata1 = {\n    'id': 'U0001',\n    'gender': 'female',\n    'name': 'Mikasa Ackerman',\n    'occupation': 'Paradise Survey Corps',\n}\nshow_biography(**data1)\n# output \u2193\n# \n# id: U0001\n# name: Mikasa Ackerman\n# occupation: Paradise Survey Corps\n# gender: female\n\ndata2 = {\n    'gender': 'female',\n    'name': 'Mikasa Ackerman',\n    'occupation': 'Paradise Survey Corps',\n}\nshow_biography('U0002', **data2)\n# output \u2193\n# \n# id: U0002\n# name: Mikasa Ackerman\n# occupation: Paradise Survey Corps\n# gender: female\n")),(0,r.kt)("hr",null),(0,r.kt)("div",{class:"section-footnote"},(0,r.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,r.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,r.kt)("pre",null,(0,r.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/pack-unpack-elements"},"github.com/novalagung/dasarpemrogramanpython-example/../pack-unpack-elements")),(0,r.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/list"},"List")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/tuple"},"Tuple")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/set"},"Set"))),(0,r.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://peps.python.org/pep-0448/"},"https://peps.python.org/pep-0448/")))))}m.isMDXComponent=!0},3500:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/pack-unpack-elements-1-7c0f41a9c5166256bdd7bc7e0aeda4b7.png"}}]);