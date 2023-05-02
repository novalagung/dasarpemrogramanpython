---
sidebar_position: 5
title: A.5. Konstanta
sidebar_label: A.5. Konstanta
---

## A.5.1. Konstanta di Python

Deklarasi konstanta (atau sebuah nilai konstan yang tidak bisa diubah setelah didefinisikan) di Python bisa dilakukan menggunakan bantuan tipe *class* bernama `typing.Final`.

Untuk menggunakannya, `typing.Final` perlu di-import terlebih dahulu menggunakan statement `from` dan `import`.

```python
from typing import Final

PI: Final = 3.14
print("pi: %f" % (PI))
```

![konstanta python](img/konstanta-1.png)

Keyword `import` digunakan untuk meng-import sesuatu, sedangkan keyword `from` digunakan untuk menentukan dari module mana sesuatu tersebut akan di-import.

> Lebih detailnya mengenai `import` dan `from` dibahas terpisah pada chapter [Module Import](#)

Statement `from typing import Final` artinya adalah meng-import tipe `Final` dari module `typing` yang dimana module ini merupakan bagian dari Python standard library (stdlib).

> Lebih detailnya mengenai Python standard library (stdlib) dibahas terpisah pada chapter [Python standard library (stdlib)](#)

## A.5.2. Tipe *class* `typing.Final`

Tipe `Final` digunakan untuk menandai suatu variabel adalah tidak bisa diubah nilainya (konstanta). Cara penerapan `Final` bisa dengan dituliskan tipe data konstanta-nya secara eksplisit, atau tidak ditentukan.

```python
# tipe konstanta PI tidak ditentukan secara explisit,
# melainkan didapat dari tipe data nilai
PI: Final = 3.14

# tipe konstanta TOTAL_MONTH ditentukan secara explisit yaitu `int`
TOTAL_MONTH: Final[int] = 12
```

## A.5.3. *Naming convention* konstanta

Mengacu ke dokumentasi [PEP 8 – Style Guide for Python Code](https://peps.python.org/pep-0008/), nama konstanta harus dituliskan dalam huruf besar (UPPER_CASE).

---

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/konstanta">
        github.com/novalagung/dasarpemrogramanpython-example/../konstanta
    </a>
</pre>

### ◉ Referensi

- https://docs.python.org/3/library/typing.html#typing.Final
- https://peps.python.org/pep-0008/
