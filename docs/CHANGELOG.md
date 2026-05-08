---
sidebar_position: 2
title: Version Changelogs & Updates
sidebar_label: Version Changelogs & Updates
---

## 📝 Release v1.3.20260608 (2026-06-08)

#### ◉ Chapter baru

- [PIP & Dependency Management](/basic/pip)

#### ◉ Chapter update

- Perbaikan bug kode (critical)
    - [Operator](/basic/operator) — koreksi: hapus `!` yang bukan operator Python
    - [Function ➜ Lambda](/basic/lambda) — koreksi: variabel global `matrix` diganti `m`
    - [Python Pattern Matching ➜ match](/basic/pattern-matching) — koreksi: tambah `self.` pada method
    - [Exception Handling](/basic/exception-handling-try-except-else-finally) — koreksi: `err == ValueError` jadi `isinstance()`
    - [File/Data Format ➜ JSON](/basic/json) — koreksi: reference link CSV ke JSON
- Perbaikan konten
    - [Tipe Data](/basic/tipe-data) — koreksi cross-reference & output comment
    - [Slice](/basic/slice) — penambahan negative index slicing
    - [Function ➜ Positional, Optional, Keyword Arguments](/basic/positional-optional-keyword-argument) — koreksi output contoh kode
    - [File/Data Format ➜ CSV](/basic/csv) — koreksi duplikasi nomor section
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
- Perbaikan kode contoh (examples/)
    - [examples/lambda/main_5.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/lambda)
    - [examples/pattern-matching/main_4.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/pattern-matching)
    - [examples/exception-handling/main_2.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/exception-handling-try-except-else-finally)
    - [examples/eval-exec/main_4.py](https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/eval-exec) — penambahan contoh `ast.literal_eval()`

#### ◉ General update

- Penambahan chapter PIP & Dependency Management
- Renumbering chapter A.29 s.d. A.59 menjadi A.30 s.d. A.60
- Update link instalasi Python ke versi 3.12.0
- Penambahan security warning pada chapter Eval & Exec
- Penambahan section `pathlib` pada chapter File I/O
- Update contoh kode untuk selaras dengan perbaikan di docs
- Pembuatan backlog system untuk tracking review konten

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
