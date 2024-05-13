---
sidebar_position: 13
title: A.13. Python List Comprehension
sidebar_label: A.13. List Comprehension
description: List comprehension adalah metode ringkas pembuatan list selain menggunakan literal `[]`. Cara ini lebih banyak diterapkan untuk operasi list yang menghasilkan struktur baru.
keywords: [list comprehension, python list comprehension, shortcut list]
faqs:
  - question: Apa itu list comprehension di Python?
    answer: List comprehension adalah metode ringkas pembuatan list selain menggunakan literal `[]`. Cara ini lebih banyak diterapkan untuk operasi list yang menghasilkan struktur baru
---

*List comprehension* adalah metode ringkas pembuatan list (selain menggunakan literal `[]` atau menggunakan fungsi `list()`). Cara ini lebih banyak diterapkan untuk operasi list yang menghasilkan struktur baru.

Pada chapter ini kita akan mempelajarinya.

## A.13.1. Pengenalan list comprehension

Metode penulisan list comprehension membuat kode menjadi sangat ringkas, dengan konsekuensi agak sedikit membingungkan untuk yang belum terbiasa. Jadi penulis sarankan gunakan sesuai kebutuhan.

Silakan pelajari contoh berikut agar lebih mudah memahami seperti apa itu *list comprehension*.

### ◉ Contoh #1

Perulangan berikut:

```python
seq = []
for i in range(5):
    seq.append(i * 2)

print(seq)
# output ➜ [0, 2, 4, 6, 8]
```

... bisa dituliskan lebih ringkas menggunakan *list comprehension*, menjadi seperti berikut:

```python
seq = [i * 2 for i in range(5)]

print(seq)
# output ➜ [0, 2, 4, 6, 8]
```

### ◉ Contoh #2

Perulangan berikut:

```python
seq = []
for i in range(10):
    if i % 2 == 1:
        seq.append(i)

print(seq)
# output ➜ [1, 3, 5, 7, 9]
```

... bisa dituliskan lebih ringkas menjadi seperti berikut:

```python
seq = [i for i in range(10) if i % 2 == 1]

print(seq)
# output ➜ [1, 3, 5, 7, 9]
```

### ◉ Contoh #3

Perulangan berikut:

```python
seq = []
for i in range(1, 10):
    if i % 2 == 0:
        seq.append(i * 2)
    else:
        seq.append(i * 3)

print(seq)
# output ➜ [3, 4, 9, 8, 15, 12, 21, 16, 27]
```

... bisa dituliskan lebih ringkas menjadi dengan bantuan *ternary* menjadi seperti ini:

```python
seq = []
for i in range(1, 10):
    seq.append(i * (2 if i % 2 == 0 else 3))

print(seq)
# output ➜ [3, 4, 9, 8, 15, 12, 21, 16, 27]
```

... dan bisa dijadikan lebih ringkas lagi menggunakan *list comprehension*:

```python
seq = [(i * (2 if i % 2 == 0 else 3)) for i in range(1, 10)]

print(seq)
# output ➜ [3, 4, 9, 8, 15, 12, 21, 16, 27]
```

### ◉ Contoh #4

Perulangan berikut:

```python
list_x = ['a', 'b', 'c']
list_y = ['1', '2', '3']

seq = []
for x in list_x:
    for y in list_y:
        seq.append(x + y)

print(seq)
# output ➜ ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']
```

... bisa dituliskan lebih ringkas menjadi seperti berikut:

```python
seq = [x + y for x in list_x for y in list_y]

print(seq)
# output ➜ ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']
```

### ◉ Contoh #5

Perulangan berikut:

```python
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]

transposed = []
for i in range(4):
    tr = []
    for row in matrix:
        tr.append(row[i])
    transposed.append(tr)

print(transposed)
# output ➜ [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
```

... bisa dituliskan lebih ringkas menjadi seperti ini:

```python
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]

transposed = []
for i in range(4):
    transposed.append([row[i] for row in matrix])

print(transposed)
# output ➜ [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
```

... dan bisa dijadikan lebih ringkas lagi menggunakan *list comprehension*:

```python
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]

transposed = [[row[i] for row in matrix] for i in range(4)]

print(transposed)
# output ➜ [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
```

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/list-comprehension">
        github.com/novalagung/dasarpemrogramanpython-example/../list-comprehension
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [Perulangan ➜ for & range](/basic/for-range)
- [List](/basic/list)
- [Generator & Yield](/basic/generator-yield)

### ◉ TBA

- Stack vs Queue

### ◉ Referensi

- https://docs.python.org/3/tutorial/datastructures.html
- https://docs.python.org/3/library/stdtypes.html#typesseq

</div>
