---
sidebar_position: 59
title: A.59. Python Generator & Yield
sidebar_label: A.59. Generator & Yield
---

Pada chapter ini kita akan belajar tentang konsep generator serta pengaplikasiannya menggunakan keyword `yield` dan *generator expression*.

## A.59.1. Generator object

Generator object adalah object iterator yang dibuat via fungsi generator (menggunakan keyword `yield`) atau via *generator expression*.

> Mengenai apa itu iterator, pembahasannya ada di chapter sebelumnya, yaitu [Iterable & Iterator](/basic/iterable-iterator)

## A.59.2. Generator function

Generator function adalah salah satu cara pembuatan generator object. Ciri khasnya di dalam fungsi ada statement berisi keyword `yield`.

Mari praktekan. Di bawah ini, fungsi `random_messages()` didesain untuk mengembalikan generator object.

```python
def random_messages():
    yield "hello python"
    yield "how are you"
    yield "nice to meet you"

messages = random_messages()
print(messages)
# <generator object random_messages at 0x00000...>
```

Variabel `messages` menampung nilai balik pemanggilan fungsi `random_messages()` (data generator object), ketika di-print nilainya yang muncul adalah *generator object*.

Selayaknya iterator, generator (yang juga merupakan iterator) pengaksesan itemnya dilakukan via perulangan `for in`, atau menggunakan fungsi `next()`.

Pada contoh berikutnya ini, generator `random_messages()` digunakan pada perulangan. Hasilnya, di setiap iterasi `for in`, data yang dikembalikan via keyword `yield` di-print.

```python
def random_messages():
    yield "hello python"
    yield "how are you"
    yield "nice to meet you"

for message in random_messages():
    print(message)
# output ↓
#
# hello python
# how are you
# nice to meet you
```

Karena ada 3 statement `yield` disitu, maka generator ketika digunakan di perulangan hasilnya iterasi sebanyak 3x.

- Iterasi ke-1, variabel `message` berisi statement yield ke-1, yaitu `hello python`
- Iterasi ke-2, variabel `message` berisi statement yield ke-2, yaitu `how are you`
- Iterasi ke-3, variabel `message` berisi statement yield ke-3, yaitu `nice to meet you`

Contoh implementasi penerapan generator via fungsi `next()`:

```python
gen = random_messages()

message = next(gen)
print(f"message 1: {message}")
# output ➜ message 1: hello python

message = next(gen)
print(f"message 2: {message}")
# output ➜ message 2: how are you

message = next(gen)
print(f"message 3: {message}")
# output ➜ message 3: nice to meet you
```

Berikut adalah 2 contoh tambahan penerapan fungsi generator dan keyword `yield`.

### ◉ Infinite counter

Keyword `yield` bisa dikombinasikan dengan perulangan `while` untuk membuat logic *infinite counter*.

```python
def infinite_counter():
    i = 0
    while True:
        yield i
        i = i + 1

c = infinite_counter()
print(next(c))
# output ➜ 0

print(next(c))
# output ➜ 1

print(next(c))
# output ➜ 2

# ...
```

### ◉ Operasi baca file

Contoh operasi baca file yang setiap baris konten file dikembalikan sebagai data iterasi via keyword `yield`.

```python
def file_reader(file_name):
    for row in open(file_name, "r"):
        yield row

for row in open('content.txt'):
    print(row.strip())
```

## A.59.3. Generator expression

Generator comprehension (atau yang umumnya dikenal sebagai generator expression) adalah ekspresi statement yang ditulis dalam format tertentu yang otomatis terdeteksi sebagai *generator object*.

Penulisan ekspresi generator mirip seperti penulisan *list comprehension*, perbedaannya ada pada karakter yang digunakan untuk membungkus ekspresi. Pada list comprehension menggunakan tanda `[ ]`, pada generator comprehension/expression menggunakan tanda `( )`.

Contoh penerapan:

```python
exp1 = [num**2 for num in range(5)]
print(exp1)
# output ➜ [0, 1, 4, 9, 16]

exp2 = (num**2 for num in range(5))
print(exp2)
# output ➜ <generator object <genexpr> at 0x00000...>

for d in exp2:
    print(d)
# output ↓
#
# 0
# 1
# 4
# 9
# 16
```

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/generator-yield">
        github.com/novalagung/dasarpemrogramanpython-example/../generator-yield
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [List Comprehension](/basic/list-comprehension)
- [Iterable & Iterator](/basic/iterable-iterator)

### ◉ Referensi

- https://docs.python.org/3/reference/expressions.html#generator-expressions
- https://docs.python.org/3/reference/expressions.html#yield-expressions

</div>
