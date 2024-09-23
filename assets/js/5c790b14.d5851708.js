"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[7751],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5185:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={sidebar_position:48,title:"A.48. Python DocString",sidebar_label:"A.48. DocString"},o=void 0,l={unversionedId:"basic/docstring",id:"basic/docstring",title:"A.48. Python DocString",description:"Pada chapter ini kita akan membahas tentang docstring beserta cara penerapan dan manfaatnya.",source:"@site/docs/basic/docstring.md",sourceDirName:"basic",slug:"/basic/docstring",permalink:"/basic/docstring",draft:!1,tags:[],version:"current",sidebarPosition:48,frontMatter:{sidebar_position:48,title:"A.48. Python DocString",sidebar_label:"A.48. DocString"},sidebar:"tutorialSidebar",previous:{title:"A.47. Exception Handling \u279c try, except, else, finally",permalink:"/basic/exception-handling-try-except-else-finally"},next:{title:"A.49. File I/O",permalink:"/basic/file"}},s={},p=[{value:"A.48.1. Pengenalan docstring",id:"a481-pengenalan-docstring",level:2},{value:"A.48.2. Praktek penerapan docstring",id:"a482-praktek-penerapan-docstring",level:2},{value:"\u25c9 DocString pada class dan fungsi/method",id:"-docstring-pada-class-dan-fungsimethod",level:3},{value:"\u25c9 DocString pada attribute dan variable",id:"-docstring-pada-attribute-dan-variable",level:3},{value:"A.48.3. Special name \u279c class attribute <code>__note__</code>",id:"a483-special-name--class-attribute-__note__",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],u={toc:p},d="wrapper";function c(e){let{components:n,...r}=e;return(0,i.kt)(d,(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pada chapter ini kita akan membahas tentang docstring beserta cara penerapan dan manfaatnya."),(0,i.kt)("h2",{id:"a481-pengenalan-docstring"},"A.48.1. Pengenalan docstring"),(0,i.kt)("p",null,"Di pembelajaran awal yaitu pada chapter ",(0,i.kt)("a",{parentName:"p",href:"/basic/komentar"},"Komentar"),", telah disinggung bahwa salah satu cara menulis komentar adalah menggunakan karakter ",(0,i.kt)("inlineCode",{parentName:"p"},'"""')," dengan penulisan di awal dan akhir komentar. Contoh: ",(0,i.kt)("inlineCode",{parentName:"p"},"### ini komentar ###"),"."),(0,i.kt)("p",null,"Komentar yang ada di dalam karakter tersebut disebut docstring. DocString memiliki keistimewaan dibanding komentar biasa yang ditulis menggunakan karakter ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),"."),(0,i.kt)("p",null,"Komentar docstring otomatis menempel pada unit dimana komentar ditulis. Misalnya ditulis tepat dibawah deklarasi fungsi bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"print_random_quote()"),", maka komentarnya menembel ke fungsi tersebut. Benefitnya, informasi komentar bisa muncul setidaknya di 2 tempat:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Komentar bisa diakses menggunakan attribute ",(0,i.kt)("inlineCode",{parentName:"li"},"__doc__")," yang menempel ke fungsi ",(0,i.kt)("inlineCode",{parentName:"li"},"print_random_quote()"),"."),(0,i.kt)("li",{parentName:"ul"},"Komentar dimunculkan sewaktu fungsi tersebut di-hover (dengan catatan extension Python/Pylance ter-install di editor).")),(0,i.kt)("p",null,"Perihal unit yang bisa ditempeli docstring bisa berupa fungsi, class, method, atau lainnya."),(0,i.kt)("h2",{id:"a482-praktek-penerapan-docstring"},"A.48.2. Praktek penerapan docstring"),(0,i.kt)("p",null,"Mari kita praktekan agar lebih jelas. Siapkan project sederhana dengan struktur seperti ini. Isinya hanya dua file saja:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"File ",(0,i.kt)("inlineCode",{parentName:"li"},"quote.py")," berisi class ",(0,i.kt)("inlineCode",{parentName:"li"},"Quote")),(0,i.kt)("li",{parentName:"ul"},"File ",(0,i.kt)("inlineCode",{parentName:"li"},"main.py")," berisi kode penggunaan class ",(0,i.kt)("inlineCode",{parentName:"li"},"Quote"))),(0,i.kt)("div",{style:{width:"250px"}},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Project structure"',title:'"Project','structure"':!0},"praktek-docstring/\n\u2502\u2500\u2500\u2500 quote.py\n\u2514\u2500\u2500\u2500 main.py\n"))),(0,i.kt)("p",null,"Tulis kode berikut di file ",(0,i.kt)("inlineCode",{parentName:"p"},"quote.py"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="File quote.py"',title:'"File','quote.py"':!0},'quotes = [\n    "never let anyone live in your head rent free",\n    "if others can do it, then why should I?",\n    "\\n".join([\n        "I\'m sick of following my dreams, man.",\n        "I\'m just going to ask where they\'re going and hook up with \'em later."\n    ]),\n]\n\nfrom random import randint\n\n# function `print_random_quote()`:\n#     print one random quote,\n#     so nothing special\ndef print_random_quote():\n\n    i = randint(0, len(quotes)-1)\n    print(quotes[i])\n\n# class `Quote`:\n#     A class Quote represent a quote.\n#     It has the following two attributes:\n#         - class attribute `note`\n#         - instance method `print_quote()`\nclass Quote:\n    note = "A class to represent quote"\n\n    # instance method `print_quote()`:\n    #     Responsible to print specific quote by index\n    @classmethod\n    def print_quote(cls, i):\n        print(quotes[i])\n')),(0,i.kt)("p",null,"Kemudian di file ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py"),", import unit-unit dari module ",(0,i.kt)("inlineCode",{parentName:"p"},"quote.py")," lalu gunakan."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="File main.py"',title:'"File','main.py"':!0},"from quote import Quote, print_random_quote\n\nif __name__ == '__main__':\n    print_random_quote()\n    # output \u279c <random quote appears here>\n\n    Quote.print_quote(2)\n    # output \u279c I'm just going to ask where they're going and hook up with 'em later.\n")),(0,i.kt)("p",null,"Sampai sini penulis rasa cukup jelas."),(0,i.kt)("p",null,"Selanjutnya coba hover fungsi atau class yang di-import dari module ",(0,i.kt)("inlineCode",{parentName:"p"},"Quote.py")," yang dipergunakan di ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py"),". Popup muncul tapi isinya hanya informasi deklarasi fungsi itu sendiri. Komentar yang telah ditulis tidak muncul di popup."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python docstring",src:t(1818).Z,width:"417",height:"128"})),(0,i.kt)("p",null,"Ok, sekarang kita akan modifikasi komentar pada kode yang sudah ditulis dengan mengubahnya menjadi komentar docstring. Komentar hanya dianggap docstring ketika ditulis dengan diapit karakter ",(0,i.kt)("inlineCode",{parentName:"p"},"###")," ",(0,i.kt)("inlineCode",{parentName:"p"},"###")," dan penulisannya berada tepat dibawah unit yang ingin dikomentari."),(0,i.kt)("h3",{id:"-docstring-pada-class-dan-fungsimethod"},"\u25c9 DocString pada class dan fungsi/method"),(0,i.kt)("p",null,"Ubah isi ",(0,i.kt)("inlineCode",{parentName:"p"},"quote.py")," menjadi seperti ini:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="File quote.py"',title:'"File','quote.py"':!0},'quotes = [\n    "never let anyone live in your head rent free",\n    "if others can do it, then why should I?",\n    "\\n".join([\n        "I\'m sick of following my dreams, man.",\n        "I\'m just going to ask where they\'re going and hook up with \'em later."\n    ]),\n]\n\nfrom random import randint\n\ndef print_random_quote():\n    """\n    function `print_random_quote()`:\n        print one random quote,\n        so nothing special\n    """\n\n    i = randint(0, len(quotes)-1)\n    print(quotes[i])\n\nclass Quote:\n    """\n    class `Quote`:\n        A class Quote represent a quote.\n        It has the following two attributes:\n            - class attribute `note`\n            - instance method `print_quote()`\n    """\n\n    note = "A class to represent quote"\n\n    @classmethod\n    def print_quote(cls, i):\n        """\n        instance method `print_quote()`:\n            Responsible to print specific quote by index\n        """\n\n        print(quotes[i])\n')),(0,i.kt)("p",null,"Sekarang coba hover lagi, lihat isi popup-nya."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Hover fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"print_random_quote()")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"Python docstring",src:t(1253).Z,width:"418",height:"160"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Hover class ",(0,i.kt)("inlineCode",{parentName:"p"},"Quote")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"Python docstring",src:t(9197).Z,width:"748",height:"164"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Hover class method ",(0,i.kt)("inlineCode",{parentName:"p"},"Quote.print_quote()")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"Python docstring",src:t(1183).Z,width:"471",height:"141"})))),(0,i.kt)("p",null,"Mantab bukan? DocString ini menjadi salah satu hal yang sangat membantu dalam pengembangan."),(0,i.kt)("h3",{id:"-docstring-pada-attribute-dan-variable"},"\u25c9 DocString pada attribute dan variable"),(0,i.kt)("p",null,"Untuk penerapan docstring pada attribute, caranya juga sama, yaitu dengan menuliskan komentar tepat dibawah attribute atau variabel dengan karakter ",(0,i.kt)("inlineCode",{parentName:"p"},"###")," ",(0,i.kt)("inlineCode",{parentName:"p"},"###"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="File quote.py"',title:'"File','quote.py"':!0},'# ...\n\nclass Quote:\n    """\n    class `Quote`:\n        A class Quote represent a quote.\n        It has the following two attributes:\n            - class attribute `note`\n            - instance method `print_quote()`\n    """\n\n    note = "A class to represent quote"\n    """\n        instance method `print_quote()`:\n            Responsible to print specific quote by index\n    """ \n\n    @classmethod\n    def print_quote(cls, i):\n        """\n        instance method `print_quote()`:\n            Responsible to print specific quote by index\n        """\n        print(quotes[i])\n')),(0,i.kt)("p",null,"Coba sekarang\nOutput ketika di-hover:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python docstring",src:t(3297).Z,width:"463",height:"146"})),(0,i.kt)("h2",{id:"a483-special-name--class-attribute-__note__"},"A.48.3. Special name \u279c class attribute ",(0,i.kt)("inlineCode",{parentName:"h2"},"__note__")),(0,i.kt)("p",null,"Informasi docstring milik fungsi, method, dan class bisa diakses secara excplit menggunakan class attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"__note__"),". Jika mengacu ke kode yang sudah ditulis, maka pengaksesannya seperti ini:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from quote import Quote, print_random_quote\n\nif __name__ == '__main__':\n\n    # menampilkan docstring fungsi `print_random_quote()`\n    print(print_random_quote.__doc__)\n\n    # menampilkan docstring class `Quote`\n    print(Quote.__doc__)\n\n    # menampilkan docstring class method `Quote.print_quote()`\n    print(Quote.print_quote.__doc__)\n")),(0,i.kt)("p",null,"Output program:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python docstring",src:t(3448).Z,width:"410",height:"328"})),(0,i.kt)("hr",null),(0,i.kt)("div",{class:"section-footnote"},(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/docstring"},"github.com/novalagung/dasarpemrogramanpython-example/../docstring")),(0,i.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/komentar"},"Komentar"))),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://peps.python.org/pep-0257/"},"https://peps.python.org/pep-0257/")))))}c.isMDXComponent=!0},1818:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/docstring-1-61825f973766545e4532873eb90d30f8.png"},1253:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/docstring-2-07c3e50f3de5d73960bff99787195f38.png"},9197:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/docstring-3-693eb5edb20fa73eb70bdc3fcd96e8dc.png"},1183:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/docstring-4-7b6cc76052b9896bef3ce6d09d9fcbd0.png"},3297:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/docstring-5-bcea520969aac8c016ac630eb0d3764f.png"},3448:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/docstring-6-504052c0252fe7c7753284e1df772016.png"}}]);