---
sidebar_position: 28
title: A.28. Python Packages
sidebar_label: A.28. Packages
---

Pada chapter ini, kita akan membahas cara Python mengelola module melalui packages. Dengan package, module bisa diakses menggunakan notasi pengaksesan module, contohnya seperti `calculate.calc_hypotenuse()`.

## A.28.1. Pengenalan Packages

Mari kita mulai dengan sedikit mengulang pembahasan yang ada di chapter sebelumnya. Di Python, module direpresentasikan oleh file, dan agar bisa mengakses item yang ada dalam module tersebut kita perlu meng-import-nya terlebih dahulu.

Package adalah cara mengelola module dengan menempatkannya dalam suatu folder. Sederhananya: **module adalah file, dan package adalah folder**.

Untuk mendemonstrasikan konsep ini, mari kita praktekan. Buat project baru dengan struktur seperti berikut:

<div style={{ width: '250px' }}>

```bash title="Project structure"
belajar-package/
│─── libs/
|    │─── calculate.py
|    └─── common/
|         │─── message.py
|         └─── number.py
└─── my_program.py
```

</div>

Program yang dibuat masih sama seperti yang ada di praktek sebelumnya. Perbedaannya, kali ini fungsi `sqrt()` dan `pow()` ditempatkan dalam path `libs/common/number.py`, dan ada juga satu fungsi baru dibuat di `libs/common/message.py`.

```python title="File: libs/common/number.py"
note = "module libs.common.number contains numerical functions"

def pow(n, p = 2):
    return n ** p

def sqrt(x):
    n = 1
    for _ in range(10):
        n = (n + x/n) * 0.5
    return n
```

```python title="File: libs/common/message.py"
note = "module libs.common.message contains messaging/printing functions"

def print_hypotenuse(v):
    print("hypotenuse:", v)
```

Selanjutnya, isi file `calculate.py` dengan deklarasi variabel `note` dan fungsi `calc_hypotenuse()`.

```python title="File: libs/calculate.py"
import libs.common.number

note = "module libs.calculate contains mathematic functions"

def calc_hypotenuse(a, b):
    return libs.common.number.sqrt(libs.common.number.pow(a) + libs.common.number.pow(b))
```

Terakhir, di file `my_program.py` (file entrypoint eksekusi program), import module `libs/common/number.py`, `libs/common/message.py`, dan `libs/calculate.py` lalu panggil fungsi yang ada di masing-masing module. Contoh:

```python title="File: my_program.py"
a = 10
b = 15

import libs.calculate
import libs.common.number
import libs.common.message

print(libs.calculate.note)
print(libs.common.number.note)
print(libs.common.message.note)

res = libs.calculate.calc_hypotenuse(a, b)
libs.common.message.print_hypotenuse(res)

res = libs.common.number.sqrt(a**2 + b**2)
libs.common.message.print_hypotenuse(res)

res = libs.common.number.sqrt(libs.common.number.pow(a) + libs.common.number.pow(b))
libs.common.message.print_hypotenuse(res)
```

Bisa dilihat bagaimana peran package dalam operasi import module dan pengaksesan unit dalam module. 

- Module yang berada dalam package di import menggunakan notasi `<package>.<module>`. Contoh:
    - `import libs.calculate` di file `my_program.py`

- Jika ada package di dalam package, maka ditulis semua subfoldernya, seperti: `<package>.<package>.<module>`. Contoh:
    - `import libs.common.number` di file `libs/calculate.py`
    - `import libs.common.number` di file `my_program.py`
    - `import libs.common.message` di file `my_program.py`

- Pengaksesan unit dalam module diwajibkan dengan ditulis *namespace* nya secara utuh, jadi nama package juga ditulis. Contohnya bisa dilihat pada beberapa statement seperti:
    - `libs.common.number.sqrt()` di file `libs/calculate.py`
    - `libs.common.number.pow()` di file `libs/calculate.py`
    - `libs.calculate.calc_hypotenuse()` di file `my_program.py`
    - `libs.common.message.print_hypotenuse()` di file `my_program.py`

Ok, selanjutnya coba jalankan program dan lihat hasilnya:

![Python packages](img/packages-1.png)

## A.28.2. *Naming convention* package

Berdasarkan dokumentasi [PEP 8 – Style Guide for Python Code](https://peps.python.org/pep-0008/), disarankan untuk menulis nama package dengan huruf kecil (lowercase) dan dianjurkan untuk menghindari penggunaan underscore.

## A.28.3. Metode import module package

Seperti halnya module biasa, module dalam package bisa di-import dengan beberapa cara:

### ◉ Alias module via keyword `as`

Alias cukup berguna untuk mempersingkat penulisan module saat memanggil item didalamnya. Keyword `as` digunakan untuk pemberian nama alias module.

```python title="File: libs/calculate.py"
import libs.common.number as num

note = "module libs.calculate contains mathematic functions"

def calc_hypotenuse(a, b):
    return num.sqrt(num.pow(a) + num.pow(b))
```

```python title="File: my_program.py"
a = 10
b = 15

import libs.calculate as calc
import libs.common.number as num
import libs.common.message as msg

print(calc.note)
print(num.note)
print(msg.note)

res = calc.calc_hypotenuse(a, b)
msg.print_hypotenuse(res)

res = num.sqrt(a**2 + b**2)
msg.print_hypotenuse(res)

res = num.sqrt(num.pow(a) + num.pow(b))
msg.print_hypotenuse(res)
```

Dengan menggunakan alias, namespace tidak perlu lagi dituliskan secara penuh, contohnya `libs.common.number.note` cukup ditulis dengan `num.note`.

```python
import libs.common.number
print(libs.common.number.note)

# vs

import libs.common.number as num
print(num.note)
```

### ◉ Import package via `from` & `import`

Kombinasi keyword `from` dan `import` dapat digunakan dengan ketentuan: setelah keyword `from` yang ditulis adalah namespace package, lalu diikuti oleh keyword `import` dan nama module. Contoh:

```python title="File: libs/calculate.py"
from libs.common import number

note = "module libs.calculate contains mathematic functions"

def calc_hypotenuse(a, b):
    return number.sqrt(number.pow(a) + number.pow(b))
```

```python title="File: my_program.py"
a = 10
b = 15

from libs import calculate as calc
from libs.common import number, message

print(calc.note)
print(number.note)
print(message.note)

res = calc.calc_hypotenuse(a, b)
message.print_hypotenuse(res)

res = number.sqrt(a**2 + b**2)
message.print_hypotenuse(res)

res = number.sqrt(number.pow(a) + number.pow(b))
message.print_hypotenuse(res)
```

### ◉ Penggunaan `import *`

Ada beberapa hal yang perlu diketahui dalam penggunaan `import *`, namun sebelum membahasnya, silakan coba terlebih dahulu kode berikut. Silakan buka `my_program.py` lalu ubah statement import menjadi seperti ini:

```python
from libs import calculate as calc
from libs.common import *
```

Hasilnya adalah error:

![Python packages](img/packages-2.png)

## A.28.4. File `__init__.py`

Melanjutkan pembahasan sebelumnya dimana `import *` menghasilkan error, hal tersebut terjadi karena Python tidak bisa mendeteksi module apa saja yang bisa direpresentasikan dengan `*` saat meng-import suatu package.

Untuk mengatasi error, tambahkan file bernama `___init___.py` di setiap package/folder. Dengan ini maka struktur file program menjadi seperti ini:

<div style={{ width: '250px' }}>

```bash title="Project structure"
belajar-package/
│─── libs/
|    │─── __init__.py
|    │─── calculate.py
|    └─── common/
|         │─── __init__.py
|         │─── message.py
|         └─── number.py
└─── my_program.py
```

</div>

Isi file `__init__.py` dengan sebuah statement deklarasi variabel bernama `__all__`, dengan nilai adalah list nama module yang ada di dalam folder tersebut.

```python title="File: libs/common/__init__.py"
__all__ = ["message", "number"]
```

```python title="File: libs/__init__.py"
__all__ = ["calculate"]
```

Setelah penambahan di atas dilakukan, maka module yang berada dalam package bisa di-import menggunakan `import *`.

Coba sekarang test dengan mengaplikasikannya di program:

```python title="File: my_program.py"
a = 10
b = 15

from libs import *
from libs.common import *

print(calculate.note)
print(number.note)
print(message.note)

res = calculate.calc_hypotenuse(a, b)
message.print_hypotenuse(res)

res = number.sqrt(a**2 + b**2)
message.print_hypotenuse(res)

res = number.sqrt(number.pow(a) + number.pow(b))
message.print_hypotenuse(res)
```

### ◉ Best practice file `__init__.py`

Sesuai penjelasan di [dokumentasi Package](https://docs.python.org/3/tutorial/modules.html#standard-modules), dianjurkan untuk selalu membuat file `__init__.py` di setiap package/folder untuk menghindari masalah saat pencarian module.

Meskipun module dalam package tidak digunakan via statement `import *`, dianjurkan untuk tetap membuat file tersebut. Isinya biarkan kosong saja tidak apa-apa.

### ◉ Special name `__all__`

Variabel yang diawali dan diakhir dengan karakter double underscore seperti `__all__` disebut sebagai variabel **special name**. Pembahasan lebih lanjut tentang special names ada di chapter [Special Names](/basic/special-names).

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/packages">
        github.com/novalagung/dasarpemrogramanpython-example/../packages
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [Modules](/basic/modules)
- [Special names](/basic/special-names)

### ◉ Referensi

- https://docs.python.org/3/tutorial/modules.html#packages

</div>
