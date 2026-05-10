---
sidebar_position: 2
title: Version Changelogs & Updates
sidebar_label: Version Changelogs & Updates
---

## 📝 Release v1.3.20260510 (2026-06-08)

#### ◉ Chapter baru

- [PIP & Dependency Management](/basic/pip)

#### ◉ Chapter update

- Perbaikan bug kode (critical)
    - [Operator](/basic/operator) — koreksi: hapus `!` yang bukan operator Python
    - [Function ➜ Lambda](/basic/lambda) — koreksi: variabel global `matrix` diganti `m`
    - [Python Pattern Matching ➜ match](/basic/pattern-matching) — koreksi: tambah `self.` pada method
    - [Exception Handling](/basic/exception-handling-try-except-else-finally) — koreksi: `err == ValueError` jadi `isinstance()`
    - [File/Data Format ➜ JSON](/basic/json) — koreksi: reference link CSV ke JSON
    - [Object ID & Reference](/basic/object-id-reference) — koreksi: f-string template mismatch & wrong variable name di `print()`
- Perbaikan konten
    - [Tipe Data](/basic/tipe-data) — koreksi cross-reference & output comment
    - [Slice](/basic/slice) — penambahan negative index slicing
    - [Function ➜ Positional, Optional, Keyword Arguments](/basic/positional-optional-keyword-argument) — koreksi output contoh kode
    - [File/Data Format ➜ CSV](/basic/csv) — koreksi duplikasi nomor section
    - [Dictionary](/basic/dictionary) — koreksi: `set` sebagai key diganti `identifier` (shadowing built-in)
    - [OOP ➜ Property Visibility](/basic/property-visibility) — koreksi: mutable default arg `products=[]` diganti `None` + guard
    - [Konstanta](/basic/konstanta) — penambahan catatan `Final` hanya type-checker hint
    - [None](/basic/none) — penambahan contoh `is not None`
- Perbaikan typo dan/atau kesalahan kode
    - [Run Python di VSCode](/basic/run-program-python)
    - [Perulangan ➜ break, continue](/basic/break-continue)
    - [Tuple](/basic/tuple)
    - [String](/basic/string)
    - [Function ➜ Args & Kwargs](/basic/args-kwargs)
    - [Function ➜ Closure](/basic/closure)
    - [Modules](/basic/modules)
    - [PIP & Dependency Management](/basic/pip)
    - [Packages](/basic/packages)
    - [Variables Scope (Local vs. Global)](/basic/local-global-var)
    - [OOP ➜ Static Method](/basic/static-method)
    - [OOP ➜ Abstract Method](/basic/abstract-method)
    - [OOP ➜ Class Inheritance](/basic/class-inheritance)
    - [OOP ➜ DataClass](/basic/dataclass)
    - [DateTime ➜ Parsing & Formatting](/basic/datetime-parsing-formatting)
    - [Eval & Exec](/basic/eval-exec)
    - [List](/basic/list)
    - [Set](/basic/set)
    - [DocString](/basic/docstring)
    - [Enumeration](/basic/enum)
- Perbaikan dead link
    - [OOP ➜ Class & Object](/basic/class-object) — link Constructor & Class Attribute
    - [Dictionary](/basic/dictionary) — link JSON
    - [Error & Exception](/basic/error-exception) — link Exception Handling
    - [Perulangan ➜ for & range](/basic/for-range) — link Iterator
    - [List](/basic/list) — link Error & Exception
- Penghapusan placeholder TBA (tersimpan di docs-wip.md)
- Perbaikan kode contoh (examples/)
    - [examples/lambda/main_5.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/lambda)
    - [examples/pattern-matching/main_4.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/pattern-matching)
    - [examples/exception-handling/main_2.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/exception-handling-try-except-else-finally)
    - [examples/eval-exec/main_4.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/eval-exec) — penambahan contoh `ast.literal_eval()`
    - [examples/object-id-reference/main_4.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/object-id-reference)
    - [examples/property-visibility/models/company.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/property-visibility)
    - [examples/dict/main_2.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/dictionary)
    - [examples/set/main_3.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/set)
    - [examples/none/main_2.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/none) — penambahan contoh `is not None`

#### ◉ General update

- Penambahan chapter PIP & Dependency Management
- Renumbering chapter A.29 s.d. A.59 menjadi A.30 s.d. A.60
- Update link instalasi Python ke versi 3.12.0
- Penambahan security warning pada chapter Eval & Exec
- Penambahan section `pathlib` pada chapter File I/O
- Update contoh kode untuk selaras dengan perbaikan di docs
- Pembuatan backlog system untuk tracking review konten
- Pembuatan docs-wip.md untuk tracking topik yang direncanakan

#### ◉ Chapter update lanjutan

- [File I/O](/basic/file) — modernisasi contoh `open()` dengan `Path`, penjelasan path string vs `Path`, dan penyelarasan contoh awal dengan gaya modern
- [OOP ➜ Constructor](/basic/class-constructor) — koreksi definisi constructor agar tidak tertukar dengan class
- [Function ➜ Decorator](/basic/decorator) — pelurusan penjelasan chaining decorator agar tidak misleading
- [OOP ➜ Static Method](/basic/static-method) — koreksi istilah `static method` vs `class method`
- [Modules](/basic/modules) — koreksi contoh module `math`
- [OOP ➜ Instance Attribute & Class Attribute](/basic/instance-attribute-class-attribute) — koreksi output comment yang tertukar
- [Eval & Exec](/basic/eval-exec) — koreksi anchor internal pada referensi `A.58.1`
- [OOP ➜ Property Visibility](/basic/property-visibility) — koreksi label code block `Company`
- [Function ➜ Closure](/basic/closure) — penegasan definisi closure dan koreksi urutan penjelasan

#### ◉ Perbaikan kode contoh (examples/)

- [examples/file/main_1.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/file) s.d. [examples/file/main_7.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/file) — contoh awal `open()` sekarang memakai `Path("file.txt")`
- [examples/file/main_8.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/file) — contoh hapus file/folder selaras dengan `pathlib.Path`
- [examples/file/main_9.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/file) — contoh cek file/folder selaras dengan `Path.is_file()` dan `Path.is_dir()`
- [examples/file/main_10.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/file) — contoh membuat folder memakai `Path.mkdir()`
- [examples/file/main_11.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/file) — contoh listing folder diselaraskan dengan `Path.iterdir()` dan `Path.rglob()`

## 📝 Release v1.2.20240923 (2024-09-23)

#### ◉ Chapter update

- Perbaikan typo dan/atau kesalahan kode
    - [Perulangan ➜ while](/basic/while)
    - [Perulangan ➜ break, continue](/basic/break-continue)
    - [List](/basic/list)
    - [Set](/basic/while)
    - [Python Dictionary](/basic/dictionary)
    - [String](/basic/string)
    - [String ➜ Unicode](/basic/unicode)
    - [Number](/basic/number-bilangan)
    - [Object ID & Reference](/basic/object-id-reference)
    - [Function](/basic/function)
    - [Function ➜ Positional, Optional, Keyword Arguments](/basic/positional-optional-keyword-argument)
    - [Function ➜ Lambda](/basic/lambda)
    - [Modules](/basic/modules)
    - [DocString](/basic/docstring)
    - [File I/O](/basic/file)
    - [CLI Arguments & Flags](/basic/cli-arguments-flags)
    - [File/Data Format ➜ CSV](/basic/csv)
    - [File/Data Format ➜ JSON](/basic/json)
    - [Date, Time, DateTime, Timezone](/basic/datetime-timezone)
    - [DateTime ➜ Parsing & Formatting](/basic/datetime-parsing-formatting)

#### ◉ General update

- Penambahan halaman changelogs
- Update landing page untuk optimasi SEO
