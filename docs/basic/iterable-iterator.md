---
sidebar_position: 58
title: A.58. Python Iterable & Iterator
sidebar_label: A.58. Iterable & Iterator
---

Pada chapter ini kita akan belajar tentang konsep sekaligus penerapan iterable dan iterator di Python.

## A.58.1. Apa itu iterable?

**Iteration** atau iterasi adalah proses pengaksesan item-item suatu data kolektif sesuai urutannya satu-per-satu (menggunakan metode perulangan). Penerapan keyword `for in` pada data string, list, atau data kolektif lainnya adalah contoh dari iterasi.

```python
condition = "weteng luwe"
for c in condition:
    print(c)

numbers = [10, 12, 32, 44]
for n in numbers:
    print(n)
```

Di atas, variabel `condition` di-iterasi menggunakan keyword `for in`, variabel `c` disetiap perulangan terisi dengan huruf string satu-per-satu, bergantian, mulai huruf pertama hingga terakhir.

Begitu juga dengan variabel `numbers`, nilai numerik dalam list di-iterasi dengan setiap nilai ditampung variabel `n` untuk kemudian di-print.

**Iterable** adalah object yang bisa di-iterasi, contohnya seperti tuple, list, string, dan tipe data kolektif lainnya. Sederhananya, setiap object yang bisa digunakan pada keyword `for in` adalah pasti iterable.

## A.58.2. Apa itu iterator?

Iterator berbeda dibanding iterable. Iterator adalah object iterable yang bisa mengingat *state* perulangannya. Jadi object tersebut tau informasi seperti perulangan sedang berada di indeks ke berapa, elemen berikutnya apa, dan info mengenai kapan perulangan berhenti.

Object iterable bisa dikonversi menjadi iterator, caranya dengan membungkusnya menggunakan fungsi `iter()`. Contoh:

```python
condition = "weteng luwe"
for c in iter(condition):
    print(c)

numbers = [10, 12, 32, 44]
for n in iter(numbers):
    print(n)
```

Ok, lalu apa benefitnya? apa bedanya dengan iterable biasa? Jika mengacu ke contoh di atas, tidak akan terlihat perbedaannya dimana, karena object iterable dan iterator keduanya pasti bisa digunakan pada perulangan menggunakan keyword `for in`.

Agar lebih jelas, kita berkenalan dulu dengan fungsi baru bernama `next()`. Fungsi ini berguna untuk mengembalikan data iterasi berikutnya. Contoh penerapannya silakan lihat kode berikut ini:

```python
numbers = [10, 12, 32, 44]
numbers_iter = iter(numbers)

n = next(numbers_iter)
print(n) # output ➜ 10

n = next(numbers_iter)
print(n) # output ➜ 12

n = next(numbers_iter)
print(n) # output ➜ 32

n = next(numbers_iter)
print(n) # output ➜ 44
```

Data list `numbers` dikonversi ke bentuk iterator menggunakan fungsi `iter()`, kemudian digunakan sebagai argument pemanggilan fungsi `next()` 4 kali, hasilnya:

- Pemanggilan ke-1 mengembalikan item index ke-1, yaitu angka `10`
- Pemanggilan ke-2 mengembalikan item index ke-2, yaitu angka `12`
- Pemanggilan ke-3 mengembalikan item index ke-3, yaitu angka `32`
- Pemanggilan ke-4 mengembalikan item index ke-4, yaitu angka `44`

Dari sini terlihat bahwa object iterator benar-benar mengingat informasi state-nya. Setelah pemanggilan fungsi `next()` pertama, object `numbers_iter` tau bahwa item indeks ke-1 sudah diakses, dan pengaksesan berikutnya adalah indeks ke-2, dan seterusnya.

> Penggunaan fungsi `next()` terhadap object iterator yang sudah terakses semua itemnya menghasilkan error. Manfaatkan keyword `try except` jika diperlukan.

## A.58.3. Custom iterator

Selain menggunakan fungsi `iter()` pembuatan iterator juga bisa dilakukan via custom class. Caranya dengan mendesain custom class agar memiliki 2 hal berikut:

1. Custom class harus *inherit* class `Iterator` milik module `collections.abc`.
2. Di dalam class harus ada fungsi `__next__(self)` yang otomatis dipanggil setiap kali object digunakan pada fungsi `next()`.

Pada contoh berikut, disiapkan class bernama `LoopReverse` dengan tugas adalah menghasilkan object iterator yang mengembalikan item data kolektif berurutan dari belakang (terbalik).

```python
from collections.abc import Iterator

class LoopReverse(Iterator):

    def __init__(self, data):
        self.data = data
        self.i = 0

    def __next__(self):
        if (self.i+1) > len(self.data):
            raise StopIteration
        else:
            r = self.data[len(self.data)-self.i-1]
            self.i = self.i + 1
            return r

numbers = [23, 2, 1, 54]
for n in LoopReverse(numbers):
    print(n)

# output ↓
#
# 54
# 1
# 2
# 23
```

Penjelasan:
- Sewaktu class dinisialisasi, instance attribute `i` disiapkan dengan nilai `0` dan attribute `data` berisi data yang disisipkan via argument (pada konteks ini yang dimaksud adalah data `[23, 2, 1, 54]`).
- Di setiap perulangan, fungsi `__next__(self)` dipanggil, ketika nilai `i` masih di bawah jumlah item `data`, maka item nomor `i` dari belakang dikembalikan. Selebihnya, exception `StopIteration` di-rause untuk menandai bahwa iterasi sudah dihentikan.

Coba test juga pengaksesan item iterator via fungsi `next()`. Contoh:

```python
numbers = [23, 2, 1, 54]
numbers_iter = LoopReverse(numbers)

n = next(numbers_iter)
print(n) # output ➜ 23

n = next(numbers_iter)
print(n) # output ➜ 2

n = next(numbers_iter)
print(n) # output ➜ 1

n = next(numbers_iter)
print(n) # output ➜ 54
```

Selain menggunakan class `Iterator` sebagai superclass, iterator custom class juga bisa dibuat dengan cukup menambahkan fungsi `__iter__(self)` yang mengembalikan data `self` tanpa perlu meng-inherit class `Iterator`. Contoh:

```python
class LoopReverse:

    def __init__(self, data):
        self.data = data
        self.i = 0

    def __iter__(self):
        return self
    
    def __next__(self):
        if (self.i+1) > len(self.data):
            raise StopIteration
        else:
            r = self.data[len(self.data)-self.i-1]
            self.i = self.i + 1
            return r

numbers = [23, 2, 1, 54]
for n in LoopReverse(numbers):
    print(n)

# output ↓
#
# 54
# 1
# 2
# 23
```

Method `__iter__(self)` harus mengembalikan object iterator yang dimana harus memiliki method `__next__(self)`. Di contoh di atas, method `__next__(self)` kebetulan memang posisinya satu level dengan method `__iter__(self)`, oleh karena itu object `self` dijadikan nilai balik.

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/iterable-iterator">
        github.com/novalagung/dasarpemrogramanpython-example/../iterable-iterator
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [Perulangan ➜ for & range](/basic/for-range)

### ◉ Referensi

- https://docs.python.org/3/glossary.html#term-iterator
- https://docs.python.org/3/library/functions.html#iter
- https://docs.python.org/3/library/functions.html#next

</div>
