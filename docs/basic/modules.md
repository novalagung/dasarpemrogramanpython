---
sidebar_position: 27
title: A.27. Python Modules
sidebar_label: A.27. Modules
---

Pada chapter ini, kita akan menjelajahi konsep module beserta implementasinya di Python.

## A.27.1. Pengenalan Modules

Module di Python merupakan istilah untuk file yang berisi kode-kode python (seperti deklarasi variabel, fungsi, class, dan lainnya). Kode-kode tersebut diisolasi sesuai dengan tugasnya. Contoh:

- Module `numbers` berisi fungsi-fungsi untuk keperluan operasi angka
- Module `random` yang isinya kode untuk generate data random

Dengan adanya module kode menjadi lebih modular, rapi, dan mudah dikelola.

Pembuatan module di Python sangat mudah karena dilakukan dengan cukup membuat file. Nama file yang digunakan adalah menjadi nama module. Misalnya, file `calculate.py`, maka nama module adalah `calculate`.

Module dapat di-import di module lain, atau digunakan sebagai entry point eksekusi program (sebutannya main module). Misalnya di praktek-praktek pada chapter sebelumnya kita sering menggunakan command `python.exe main.py` untuk menjalankan program Python. Command tersebut menjadikan module `main` (file `main.py`) sebagai entrypoint eksekusi program.

Ok, sekarang mari kita coba praktekan penerapan module sebagai dependency (module yang di-import di module lain).

Buat program baru dengan isi kode di bawah ini. File `my_program.py` kita fungsikan sebagai entrypoint program, sedangkan module `calculate` sebagai dependency yang di-import di `my_program`.

<div style={{ width: '250px' }}>

```bash title="Project structure"
belajar-module/
│─── calculate.py
└─── my_program.py
```

</div>

Selanjutnya tulis isi kode file `calculate`:

```python title="File calculate.py"
note = "module calculate contains mathematic functions"

def calc_hypotenuse(a, b):
    return sqrt(pow(a) + pow(b))

def pow(n, p = 2):
    return n ** p

def sqrt(x):
    n = 1
    for _ in range(10):
        n = (n + x/n) * 0.5
    return n
```

Module `calculate` berisi 1 buah variabel dan 3 buah fungsi:

- Variabel `note` berisi string
- Fungsi `calc_hypotenuse()` untuk menghitung nilai hipotenusa dari `a` dan `b`
- Fungsi `pow()` untuk meperingkas operasi pangkat
- Fungsi `sqrt()` untuk mencari akar kuadrat

Kesemua unit di atas di-import ke `my_program` untuk kemudian digunakan dalam perhitungan pencarian nilai hipotenusa.

```python title="File my_program.py"
a = 10
b = 15

import calculate

print(calculate.note)

res = calculate.calc_hypotenuse(a, b)
print("hypotenuse:", res)

res = calculate.sqrt(a**2 + b**2)
print("hypotenuse:", res)

res = calculate.sqrt(calculate.pow(a) + calculate.pow(b))
print("hypotenuse:", res)
```

Coba jalankan program menggunakan command berikut agar module `my_program` menjadi entrypoint eksekusi program.

```python
python my_program.py
```

Output:

![Python module](img/modules-1.png)

Implementasi module di Python cukup mudah bukan?

Keyword `import` digunakan untuk meng-import suatu module atau class. Pada contoh di atas module `calculate` di-import ke `my_program.py` untuk kemudian digunakan fungsi-fungsi didalamnya.

Pengaksesan variabel/konstanta dari suatu module menggunakan notasi `<module>.<variable/constant>`, contohnya `calcualte.note`.

Sedangkan pengaksesan fungsi menggunakan notasi `<module>.<function>()`, contohnya seperti `calculate.calc_hypotenuse()`, `calculate.sqrt()`, dan `calculate.pow()`.

## A.27.2. Behaviour import module

Ketika suatu module di-import, semua unit di dalamnya dapat diakses dari file peng-import. Contohnya bisa dilihat pada kode yang sudah ditulis, variabel `note` dan fungsi `calc_hypotenuse()` yang berada di module `calculate`, keduanya bisa langsung digunakan.

Jika dalam module ada statement yang sifatnya bukan deklarasi variabel atau fungsi, misalnya seperti statement print, maka statement tersebut akan langsung dieksekusi saat module ter-import.

Mari coba praktekan. Tambahkan statement berikut di file `calculate.py`:

```python title="File calculate.py"
print("hello from calculate")

note = "module calculate contains mathematic functions"

def calc_hypotenuse(a, b):
    return sqrt(pow(a) + pow(b))

def pow(n, p = 2):
    return n ** p

def sqrt(x):
    n = 1
    for _ in range(10):
        n = (n + x/n) * 0.5
    return n
```

Jalankan program, lihat hasilnya:

![Python module](img/modules-2.png)

## A.27.3. *Naming convention* module

Mengacu ke dokumentasi [PEP 8 – Style Guide for Python Code](https://peps.python.org/pep-0008/), nama module dianjurkan untuk ditulis dalam huruf kecil (lowercase) dengan underscode sebagai pembatas antar kata.

## A.27.4. Keyword `from` dan `import`

Ada dua bentuk penerapan keyword `import`. Pertama, yaitu untuk meng-import module, contohya seperti pada praktek di atas (`import calculate`). Kedua, adalah mengkombinasikan keyword tersebut dengan keyword `from` untuk meng-import langsung fungsi atau item lainnya dari suatu module. Contoh:

```python title="File my_program.py"
a = 10
b = 15

from calculate import note
from calculate import calc_hypotenuse
from calculate import sqrt

print(note)

res = calc_hypotenuse(a, b)
print("hypotenuse:", res)

res = sqrt(a**2 + b**2)
print("hypotenuse:", res)

res = sqrt(pow(a, 2) + pow(b, 2))
print("hypotenuse:", res)
```

Dua versi berbeda `my_program.py` di atas adalah ekuivalen, keduanya melakukan operasi yang sama persis dan menghasilkan output yang sama pula.

Pada contoh ke-2 (program yang baru saja ditulis), variabel `note`, fungsi `calc_hypotenuse()` dan `sqrt()` di-import secara langsung via statement `from calculate import <function>`.

Untuk penulisannya bisa dituliskan satu per satu statement import-nya, atau bisa cukup sebaris saja (cara ini hanya berlaku untuk import item yang bersumber dari module yang sama).

```python
from calculate import note
from calculate import calc_hypotenuse
from calculate import sqrt

# vs

from calculate import note, calc_hypotenuse, sqrt
```

### ◉ Fungsi `pow()`

Fungsi `pow()` merupakan fungsi bawaan Python Standard Library yang bisa langsung digunakan tanpa perlu meng-import apapun.

Cara penggunaan fungsi `pow()` adalah dengan langsung menulisnya dalam skema `pow(a, b)`. Fungsi ini menghasilkan operasi matematika `a pangkat b`.

Pada kode di atas, fungsi `pow()` milik module `calculate` sengaja tidak di-import agar tidak meng-override atau menimpa fungsi `pow()` bawaan Python.

## A.27.5. Statement `from <module> import *`

Statement `from <module> import *` digunakan untuk meng-import semua unit yang ada dalam module `<module>`. Contoh penerapannya:

```python title="File my_program.py"
a = 10
b = 15

from calculate import *

print(note)

res = calc_hypotenuse(a, b)
print("hypotenuse:", res)

res = sqrt(a**2 + b**2)
print("hypotenuse:", res)

res = sqrt(pow(a, 2) + pow(b, 2))
print("hypotenuse:", res)
```

## A.27.6. Keyword `as`

Module maupun fungsi bisa di-import dengan diberi nama alias. Biasanya teknik ini digunakan pada situasi dimana module yang di-import namanya cukup panjang, maka digunakan alias agar lebih pendek. Pembuatan alias sendiri dilakukan via keyword `as`.

Penerapannya bisa dilihat pada contoh berikut:

```python title="File my_program.py"
a = 10
b = 15

import calculate as calc
from calculate import calc_hypotenuse as hptns, sqrt

print(calc.note)

res = hptns(a, b)
print("hypotenuse:", res)

res = sqrt(a**2 + b**2)
print("hypotenuse:", res)

res = sqrt(calc.pow(a) + calc.pow(b))
print("hypotenuse:", res)
```

Penjelasan:

- Statement `import calculate as calc` meng-import module `calculate` dengan alias `calc`. Nantinya fungsi-fungsi dalam module tersebut bisa diakses via `calc.<function>()`.

- Statement `from calculate import calc_hypotenuse as hptns, sqrt` meng-import:

    - Fungsi `calc_hypotenuse()` dari module `calculate` dengan alias `hptns()`.
    - Fungsi `sqrt()` dari module `calculate`.

## A.27.7. Urutan pencarian module

Ketika suatu module di-import, Python akan melakukan pencarian file module di beberapa tempat berikut secara berurutan:

1. Pertama, Python akan mencari module di folder yang sama dimana statement `import` digunakan.
2. Jika pencarian pertama tidak menemukan hasil, maka Python lanjut mencari file module ke folder dimana environment variable `PYTHONPATH` di-set.
3. Jika pencarian kedua juga tidak menemukan hasil, Python melanjutkan pencarian di folder dimana Python di-install.
4. Jika pencarian ketiga juga tidak sukses (file module tidak ditemukan), maka eksekusi program menghasilkan error.

## A.27.8. File module dalam folder

Bagaimana jika suatu file module (misalnya `calculate.py`) berada di dalam suatu sub-folder dalam folder program, apakah cara import-nya sama? Sebenarnya sama namun ada sedikit perbedaan yang harus diketahui. Selengkapnya akan kita bahas pada chapter selanjutnya, yaitu [Packages](/basic/packages).

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/modules">
        github.com/novalagung/dasarpemrogramanpython-example/../modules
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [Packages](/basic/packages)
- [Special Names](/basic/special-names)

### ◉ Referensi

- https://docs.python.org/3/tutorial/modules.html

</div>
