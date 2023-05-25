---
sidebar_position: 4
title: A.4. Variabel
sidebar_label: A.4. Variabel
description: Tutorial belajar penerapan variabel di Python
keywords: [variabel python]
faqs:
  - question: Apa itu variabel di Python?
    answer: Dalam konsep programming, variabel adalah suatu nama yang dikenali komputer sebagai penampung suatu nilai/data yang disimpan di memory. Sebagai contoh nilai 3.14 disimpan di variabel bernama PI
  - question: Cara deklarasi variabel di Python
    answer: Deklarasi variabel di Python cukup sederhana, caranya tinggal tulis saja nama variabel kemudian diikuti operator *assignment* beserta nilai yang ingin dimasukan ke variabel tersebut. Contoh → nama = "noval"
  - question: Naming convention atau aturan penamaan variabel di Python
    answer: Mengacu ke dokumentasi https://peps.python.org/pep-0008/, nama variabel dianjurkan untuk menggunakan snake_case. Contoh → pesan = 'halo, selamat pagi'
---

Dalam konsep programming, variabel adalah suatu nama yang dikenali komputer sebagai penampung nilai/data yang disimpan di memory. Sebagai contoh nilai `3.14` disimpan di variabel bernama `PI`.

Pada chapter ini kita akan belajar tentang penerapan variabel di Python.

## A.4.1. Deklarasi variabel

Agar dikenali oleh komputer, variabel harus dideklarasikan. Deklarasi variabel di Python cukup sederhana, caranya tinggal tulis saja nama variabel kemudian diikuti operator *assignment* beserta nilai awal yang ingin dimasukan ke variabel tersebut. Contoh:

```python
nama = "noval"
hobi = 'makan'
umur = 18
laki = True
```

> Nilai string (`str`) bisa dituliskan dengan menggunakan literal `"` ataupun `'`

Selanjutnya, coba kita munculkan nilai ke-empat variabel di atas ke layar menggunakan statement `print`. Caranya:

```python
print("==== biodata ====")
print("nama: %s" % (nama))
print("hobi: %s, umur: %d, laki: %r" % (hobi, umur, laki))
```

![variabel python](img/variables-1.png)

### ◉ *Output formatting* `print`

Statement berikut adalah contoh cara memunculkan string ke layar output (`stdout`):

```python
print("==== biodata ====")
```

Sedangkan contoh berikut adalah penerapan teknik *output formatting* untuk mem-format string ke layar output:

```python
print("nama: %s" % (nama))
# output => "nama: noval"
```

Karakter `%s` disitu akan di-replace dengan nilai variabel `nama` sebelum dimunculkan. Dan `%s` disini menandakan bahwa data yang akan me-replace-nya bertipe data `string`.

Selain `%s` ada juga `%d` untuk data bertipe numerik integer, dan `%r` untuk data bertipe `bool`.

```python
print("hobi: %s, umur: %d, laki: %r" % (hobi, umur, laki))
# output => "hobi: makan, umur: 18, laki: True"
```

> Lebih detailnya mengenai output formatting dibahas terpisah pada chapter [Output formatting](#)

## A.4.2. *Naming convention* variabel

Mengacu ke dokumentasi [PEP 8 – Style Guide for Python Code](https://peps.python.org/pep-0008/), nama variabel dianjurkan untuk menggunakan [`snake_case`](https://en.wikipedia.org/wiki/Snake_case).

```python
pesan = 'halo, selamat pagi'
nilai_ujian = 99.2
```

## A.4.3. Operasi *assignment*

Penulisan statement operasi *assignment* sama seperti statement deklarasi variabel.

```python
nama = "noval"
umur = 18
nama = "noval agung"
umur = 21
```

## A.4.4. Deklarasi variabel beserta tipe data

Tipe data variabel bisa ditentukan secara eksplisit, penulisannya bisa dilihat pada kode berikut:

```python
nama: str = "noval"
hobi: str = 'makan'
umur: int = 18
laki: bool = True
nilai_ujian: float = 99.2
```

> Lebih detailnya mengenai tipe data dibahas terpisah pada chapter [Tipe Data](/basic/tipe-data)

## A.4.5. Deklarasi banyak variabel sebaris

Contoh penulisan deklarasi banyak variabel dalam satu baris bisa dilihat pada kode berikut:

```python
nilai1, nilai2, nilai3, nilai4 = 24, 25, 26, 21
nilai_rata_rata = (nilai1 + nilai2 + nilai3 + nilai4) / 4

print("rata-rata nilai: %f" % (nilai_rata_rata))
```

> Karakter `%f` digunakan untuk mem-format nilai `float`

Output program di atas:

![variabel python](img/variables-2.png)

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/variables">
        github.com/novalagung/dasarpemrogramanpython-example/../variables
    </a>
</pre>

### ◉ Referensi

- https://www.w3schools.com/python/python_datatypes.asp
- https://peps.python.org/pep-0008/
- https://en.wikipedia.org/wiki/Snake_case
- https://www.learnpython.org/en/String_Formatting

</div>
