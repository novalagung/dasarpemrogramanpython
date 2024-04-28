"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[2710],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),l=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},p=function(t){var e=l(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),k=l(a),u=r,f=k["".concat(o,".").concat(u)]||k[u]||s[u]||i;return a?n.createElement(f,m(m({ref:e},p),{},{components:a})):n.createElement(f,m({ref:e},p))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,m=new Array(i);m[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[k]="string"==typeof t?t:r,m[1]=d;for(var l=2;l<i;l++)m[l]=a[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5311:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>m,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:53,title:"A.53. Python DateTime Parsing & Formatting",sidebar_label:"A.53. DateTime \u279c Parsing & Formatting"},m=void 0,d={unversionedId:"basic/datetime-parsing-formatting",id:"basic/datetime-parsing-formatting",title:"A.53. Python DateTime Parsing & Formatting",description:"Chapter ini merupakan lanjutan dari chapter sebelumnmya. Di sini kita akan belajar tentang teknik parsing dan formatting pada tipe data datetime.",source:"@site/docs/basic/datetime-parsing-formatting.md",sourceDirName:"basic",slug:"/basic/datetime-parsing-formatting",permalink:"/basic/datetime-parsing-formatting",draft:!1,tags:[],version:"current",sidebarPosition:53,frontMatter:{sidebar_position:53,title:"A.53. Python DateTime Parsing & Formatting",sidebar_label:"A.53. DateTime \u279c Parsing & Formatting"},sidebar:"tutorialSidebar",previous:{title:"A.52. Date, Time, DateTime, Timezone",permalink:"/basic/datetime-timezone"},next:{title:"A.54. Delete Object",permalink:"/basic/del"}},o={},l=[{value:"A.53.1. Parsing <code>datetime</code>",id:"a531-parsing-datetime",level:2},{value:"\u25c9 Via <code>datetime.strptime()</code> dan kode format",id:"-via-datetimestrptime-dan-kode-format",level:3},{value:"\u25c9 Via <code>datetime.fromisoformat()</code> terhadap data ISO Date Time (ISO 8601)",id:"-via-datetimefromisoformat-terhadap-data-iso-date-time-iso-8601",level:3},{value:"\u25c9 Via <code>datetime.fromtimestamp()</code> terhadap data UNIX timestamp",id:"-via-datetimefromtimestamp-terhadap-data-unix-timestamp",level:3},{value:"\u25c9 Via <code>dateutil.parser.parse()</code>",id:"-via-dateutilparserparse",level:3},{value:"A.53.2. Formatting <code>datetime</code>",id:"a532-formatting-datetime",level:2},{value:"\u25c9 Method <code>datetime.strftime()</code> dan kode format",id:"-method-datetimestrftime-dan-kode-format",level:3},{value:"\u25c9 Method <code>datetime.isoformat()</code> \u279c ISO Date Time (ISO 8601)",id:"-method-datetimeisoformat--iso-date-time-iso-8601",level:3},{value:"\u25c9 Method <code>datetime.timestamp()</code> \u279c UNIX timestamp",id:"-method-datetimetimestamp--unix-timestamp",level:3},{value:"A.53.3. Tabel kode format",id:"a533-tabel-kode-format",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 TBA",id:"-tba",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],p={toc:l},k="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Chapter ini merupakan lanjutan dari chapter sebelumnmya. Di sini kita akan belajar tentang teknik parsing dan formatting pada tipe data ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime"),"."),(0,r.kt)("h2",{id:"a531-parsing-datetime"},"A.53.1. Parsing ",(0,r.kt)("inlineCode",{parentName:"h2"},"datetime")),(0,r.kt)("p",null,"Parsing adalah teknik konversi data date time berbentuk string ke tipe data ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime"),". Ada beberapa method yang tersedia untuk kebutuhan operasi ini:"),(0,r.kt)("h3",{id:"-via-datetimestrptime-dan-kode-format"},"\u25c9 Via ",(0,r.kt)("inlineCode",{parentName:"h3"},"datetime.strptime()")," dan kode format"),(0,r.kt)("p",null,"Class method ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime.strptime()")," digunakan untuk parsing string ke ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime")," dalam kombinasi kode format tertentu. Kode format sendiri merepresentasikan setiap unit waktu, misalnya:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kode format tahun adalah ",(0,r.kt)("inlineCode",{parentName:"li"},"%Y")),(0,r.kt)("li",{parentName:"ul"},"Kode format jam adalah ",(0,r.kt)("inlineCode",{parentName:"li"},"%H")),(0,r.kt)("li",{parentName:"ul"},"Kode format menit adalah ",(0,r.kt)("inlineCode",{parentName:"li"},"%M")),(0,r.kt)("li",{parentName:"ul"},"dan lainnya.")),(0,r.kt)("p",null,"Contoh implementasinya seperti ini:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contoh ke-1, parsing data ",(0,r.kt)("inlineCode",{parentName:"p"},"1985-04-12 23:20:50"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import datetime\n\ndate_string = '1985-04-12 23:20:50'\nformat_string = '%Y-%m-%d %H:%M:%S'\n\ndata_datetime = datetime.strptime(date_string, format_string)\nprint(\"datetime:\", data_datetime)\n# output \u279c datetime: 1985-04-12 23:20:50\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contoh ke-2, parsing data ",(0,r.kt)("inlineCode",{parentName:"p"},"1985-04-12T23:20:50.52+0700"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import datetime\n\ndate_string = '1985-04-12T23:20:50.52+0700'\nformat_string = '%Y-%m-%dT%H:%M:%S.%f%z'\n\ndata_datetime = datetime.strptime(date_string, format_string)\nprint(\"datetime:\", data_datetime)\n# output \u279c datetime: 1985-04-12 23:20:50.520000+07:00\n")))),(0,r.kt)("p",null,"Selengkapnya silakan cek di bagian ",(0,r.kt)("a",{parentName:"p",href:"/basic/datetime-parsing-formatting#a523-tabel-kode-format"},"A.53.3. Tabel kode format"),"."),(0,r.kt)("h3",{id:"-via-datetimefromisoformat-terhadap-data-iso-date-time-iso-8601"},"\u25c9 Via ",(0,r.kt)("inlineCode",{parentName:"h3"},"datetime.fromisoformat()")," terhadap data ISO Date Time (ISO 8601)"),(0,r.kt)("p",null,"Untuk data waktu berbentuk string sesuai spesifikasi ISO Date Time atau ISO 8601, konversi ke bentuk ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime")," bisa dilakukan secara praktis menggunakan ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime.fromisoformat()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data_datetime = datetime.fromisoformat('1985-04-12T23:20:50.52')\nprint(\"datetime:\", data_datetime)\n# output \u279c datetime: 1985-04-12 23:20:50.520000\n\ndata_datetime = datetime.fromisoformat('1985-04-12T23:20:50.52+0700')\nprint(\"datetime:\", data_datetime)\n# output \u279c datetime: 1985-04-12 23:20:50.520000+07:00\n")),(0,r.kt)("h3",{id:"-via-datetimefromtimestamp-terhadap-data-unix-timestamp"},"\u25c9 Via ",(0,r.kt)("inlineCode",{parentName:"h3"},"datetime.fromtimestamp()")," terhadap data UNIX timestamp"),(0,r.kt)("p",null,"Data dengan format UNIX timestamp 10 digit bisa dikonversi ke bentuk ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime")," menggunakan method ",(0,r.kt)("inlineCode",{parentName:"p"},"fromtimestamp()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'data_datetime = datetime.fromtimestamp(1702980333)\nprint("datetime:", data_datetime)\n# output \u279c datetime: 2023-12-19 17:05:33\n')),(0,r.kt)("p",null,"Untuk timestamp dengan digit lebih dari 10, informasi milisecond-nya bisa ditulis sebagai nilai floating point, misalnya:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'data_datetime = datetime.fromtimestamp(1702980333.244)\nprint("datetime:", data_datetime)\n# output \u279c datetime: 2023-12-19 17:05:33.244000\n')),(0,r.kt)("p",null,"Informasi timezone juga bisa ditentukan pada saat parsing. Caranya gunakan parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"tz")," method di atas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from dateutil import tz\n\ndata_datetime = datetime.fromtimestamp(1702980333.244, tz=tz.gettz("America/New_York"))\nprint("datetime:", data_datetime)\n# output \u279c datetime: 2023-12-19 05:05:33.244000-05:00\n')),(0,r.kt)("h3",{id:"-via-dateutilparserparse"},"\u25c9 Via ",(0,r.kt)("inlineCode",{parentName:"h3"},"dateutil.parser.parse()")),(0,r.kt)("p",null,"Method ",(0,r.kt)("inlineCode",{parentName:"p"},"parse()")," milik ",(0,r.kt)("inlineCode",{parentName:"p"},"dateutil.parser")," cukup cerdas untuk mengenali banyak jenis format (selama format tersebut umum digunakan). Contoh penerapannya:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from dateutil import parser\n\ndata_datetime = parser.parse("May 12, 2021 8:00 AM")\nprint("datetime:", data_datetime)\n# output \u279c datetime: 2021-05-12 08:00:00\n')),(0,r.kt)("p",null,"Selengkapnya mengenai format yang didukung oleh parser ini bisa di cek di halaman dokumentasi Python ",(0,r.kt)("a",{parentName:"p",href:"https://dateutil.readthedocs.io/en/stable/parser.html"},"https://dateutil.readthedocs.io/en/stable/parser.html")),(0,r.kt)("h2",{id:"a532-formatting-datetime"},"A.53.2. Formatting ",(0,r.kt)("inlineCode",{parentName:"h2"},"datetime")),(0,r.kt)("p",null,"Formatting adalah teknik untuk memformat data ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime")," menjadi bentuk string dengan susunan/format sesuai keinginan. Beberapa method untuk operasi formatting datetime bisa dilihat di bawah ini:"),(0,r.kt)("h3",{id:"-method-datetimestrftime-dan-kode-format"},"\u25c9 Method ",(0,r.kt)("inlineCode",{parentName:"h3"},"datetime.strftime()")," dan kode format"),(0,r.kt)("p",null,"Method formatting ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime.strftime()")," tersedia pada tipe data datetime, pemanggilannya disertai dengan kode format yang diinginkan untuk output. Perihal kode format sendiri adalah sama dengan yang digunakan pada teknik parsing via ",(0,r.kt)("inlineCode",{parentName:"p"},"strptime()"),"."),(0,r.kt)("p",null,"Contoh penerapannya:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import datetime\n\ndata_datetime = datetime.fromtimestamp(1702980333, tz=None)\nprint(data_datetime.strftime('%Y-%m-%dT%H:%M:%S.%f%z'))\n# output \u279c 2023-12-19T17:05:33.000000\n\ndata_datetime = datetime.fromisoformat('1985-04-12T23:20:50.52+0700')\nprint(data_datetime.strftime('%m/%d/%Y %H:%M:%S %z'))\n# output \u279c 04/12/1985 23:20:50 +0700\n")),(0,r.kt)("p",null,"Selengkapnya silakan cek di bagian ",(0,r.kt)("a",{parentName:"p",href:"/basic/datetime-parsing-formatting#a523-tabel-kode-format"},"A.53.3. Tabel kode format"),"."),(0,r.kt)("h3",{id:"-method-datetimeisoformat--iso-date-time-iso-8601"},"\u25c9 Method ",(0,r.kt)("inlineCode",{parentName:"h3"},"datetime.isoformat()")," \u279c ISO Date Time (ISO 8601)"),(0,r.kt)("p",null,"Method ini menghasilkan output berbentuk string sesuai format ISO Date Time (ISO 8601). Contoh penggunaan:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data_datetime = datetime.now()\nprint(data_datetime.isoformat())\n# output \u279c 2023-12-23T14:01:03.088274\n")),(0,r.kt)("h3",{id:"-method-datetimetimestamp--unix-timestamp"},"\u25c9 Method ",(0,r.kt)("inlineCode",{parentName:"h3"},"datetime.timestamp()")," \u279c UNIX timestamp"),(0,r.kt)("p",null,"Method ini menghasilkan output berbentuk UNIX timestamp bertipe float. Angka dibelakang koma merepresentasikan miliseconds. Contoh penggunaan:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data_datetime = datetime.now()\nprint(data_datetime.timestamp())\n# output \u279c 1703314863.975431\n")),(0,r.kt)("h2",{id:"a533-tabel-kode-format"},"A.53.3. Tabel kode format"),(0,r.kt)("p",null,"Tabel kode format sesuai 1989 C standard:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Kode","\xa0","format"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Penjelasan"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Contoh"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%a")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Weekday as locale\u2019s abbreviated name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sun, Mon, \u2026, Sat (en_US); So, Mo, \u2026, Sa (de_DE)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%A")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Weekday as locale\u2019s full name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sunday, Monday, \u2026, Saturday (en_US); Sonntag, Montag, \u2026, Samstag (de_DE)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%w")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Weekday as a decimal number, where 0 is Sunday and 6 is Saturday"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0, 1, \u2026, 6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%d")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Day of the month as a zero-padded decimal number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"01, 02, \u2026, 31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%b")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Month as locale\u2019s abbreviated name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Jan, Feb, \u2026, Dec (en_US)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%B")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Month as locale\u2019s full name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"January, February, \u2026, December (en_US)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%m")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Month as a zero-padded decimal number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"01, 02, \u2026, 12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%y")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Year without century as a zero-padded decimal number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"00, 01, \u2026, 99")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%Y")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Year with century as a decimal number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0001, 0002, \u2026, 2013, 2014, \u2026, 9998, 9999")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%H")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hour (24-hour clock) as a zero-padded decimal number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"00, 01, \u2026, 23")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%I")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hour (12-hour clock) as a zero-padded decimal number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"01, 02, \u2026, 12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%p")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Locale\u2019s equivalent of either AM or PM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AM, PM (en_US)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%M")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Minute as a zero-padded decimal number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"00, 01, \u2026, 59")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%S")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Second as a zero-padded decimal number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"00, 01, \u2026, 59")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%f")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Microsecond as a decimal number, zero-padded to 6 digits"),(0,r.kt)("td",{parentName:"tr",align:"left"},"000000, 000001, \u2026, 999999")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%z")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UTC offset in the form \xb1HHMM[SS","[.ffffff]","] (empty string if the object is naive)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(empty), +0000, -0400, +1030, +063415, -030712.345216")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%Z")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Time zone name (empty string if the object is naive)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(empty), UTC, GMT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%j")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Day of the year as a zero-padded decimal number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"001, 002, \u2026, 366")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%U")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Week number of the year (Sunday as the first day of the week) as a zero-padded decimal number. All days in a new year preceding the first Sunday are considered to be in week 0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"00, 01, \u2026, 53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%W")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Week number of the year (Monday as the first day of the week) as a zero-padded decimal number. All days in a new year preceding the first Monday are considered to be in week 0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"00, 01, \u2026, 53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%c")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Locale\u2019s appropriate date and time representation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tue Aug 16 21:30:00 1988 (en_US)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%x")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Locale\u2019s appropriate date representation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"08/16/88 (None); 08/16/1988 (en_US); 16.08.1988 (de_DE)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%X")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Locale\u2019s appropriate time representation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"21:30:00 (en_US); 21:30:00 (de_DE)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%%")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A literal '%' character"),(0,r.kt)("td",{parentName:"tr",align:"left"},"%")))),(0,r.kt)("p",null,"Tabel kode format sesuai C89 standard:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Kode","\xa0","format"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Penjelasan"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Contoh"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%G")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ISO 8601 year with century representing the year that contains the greater part of the ISO week (%V)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0001, 0002, \u2026, 2013, 2014, \u2026, 9998, 9999")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%u")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ISO 8601 weekday as a decimal number where 1 is Monday"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1, 2, \u2026, 7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%V")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ISO 8601 week as a decimal number with Monday as the first day of the week. Week 01 is the week containing Jan 4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"01, 02, \u2026, 53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"%:z")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UTC offset in the form \xb1HH:MM[:SS","[.ffffff]","] (empty string if the object is naive)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(empty), +00:00, -04:00, +10:30, +06:34:15, -03:07:12.345216")))),(0,r.kt)("hr",null),(0,r.kt)("div",{class:"section-footnote"},(0,r.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,r.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,r.kt)("pre",null,(0,r.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/datetime-parsing-formatting"},"github.com/novalagung/dasarpemrogramanpython-example/../datetime-parsing-formatting")),(0,r.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/datetime-timezone"},"Date, Time, DateTime, Timezone"))),(0,r.kt)("h3",{id:"-tba"},"\u25c9 TBA"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Locale")),(0,r.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/datetime.html"},"https://docs.python.org/3/library/datetime.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dateutil.readthedocs.io/en/stable/parser.html"},"https://dateutil.readthedocs.io/en/stable/parser.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/3305413/how-to-preserve-timezone-when-parsing-date-time-strings-with-strptime"},"https://stackoverflow.com/questions/3305413/how-to-preserve-timezone-when-parsing-date-time-strings-with-strptime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/13182075/how-to-convert-a-timezone-aware-string-to-datetime-in-python-without-dateutil"},"https://stackoverflow.com/questions/13182075/how-to-convert-a-timezone-aware-string-to-datetime-in-python-without-dateutil")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/1941927/convert-an-rfc-3339-time-to-a-standard-python-timestamp"},"https://stackoverflow.com/questions/1941927/convert-an-rfc-3339-time-to-a-standard-python-timestamp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://realpython.com/python-datetime/"},"https://realpython.com/python-datetime/")))))}s.isMDXComponent=!0}}]);