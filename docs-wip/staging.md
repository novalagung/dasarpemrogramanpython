---
sidebar_position: 6
title: A.6. Tipe Data
sidebar_label: A.6. Tipe Data
# description: Macam tipe data di python
keywords: [tipe data python]
---

Python mengenal cukup banyak tipe data, mulai dari yang *built-in* maupun custom type. Pada chapter ini kita akan belajar *high-level overview* mengenai tipe-tipe tersebut.

## A.6.1. Tipe data numerik

Ada setidaknya 3 tipe data numerik di Python, yaitu:

- `int`, untuk menampung bilangan bulat atau *integer*
- `float`, untuk menampung bilangan desimal atau *floating point*
- `complex`, untuk menampung nilai berisi kombinasi bilangan real dan imajiner

Contoh penerapan:

```python
# int
number_1 = 10000024
print("number_1 is %s with value: %s " % (type(number_1), number_1))

# float
number_2 = 3.14
print("number_2 is %s with value: %s " % (type(number_2), number_2))

# complex
number_3 = 120+3j
print("number_3 is %s with value: %s " % (type(number_3), number_3))
```

![tipe data int di python](img/tipe-data-1.png)

> O iya, pada Python versi 3, tipe `int` merupakan hasil merger dari tipe `int` dan `long` milik Python versi 2.

### A.6.1.1 Fungsi `type`

Fungsi `type()` digunakan untuk melihat informasi tipe data suatu variabel atau nilai.

Salah satu contoh penerapannya bisa dilihat pada kode di atas, variabel `number_1` digunakan pada argument pemanggilan fungsi `type()`, nilai baliknya adalah `<class 'int'>`.

Dari output tersebut bisa disimpulkan bahwa tipe data `number_1` adalah `int`.

> Python mengadopsi konsep *dynamic typing* yang artinya variabel bisa berubah tipe datanya, menyesuaikan nilai.
>
> Kadang kala penting untuk mengecek tipe data terlebih dahulu, dan pada kasus sejenis ini fungsi `type()` cukup berguna.

## A.6.1. Tipe data `str`

Tipe string direpresentasikan oleh `str`, pembuatannya bisa menggunakan literal string yang ditandai dengan tanda awalan dan akhiran tanda `"` atau `'`.

```python
# string using "
string_1 = "hello python"
print("string_1 is %s with value: %s " % (type(string_1), string_1))

# string using '
string_2 = 'for the horde!'
print("string_2 is %s with value: %s " % (type(string_2), string_2))
```

Untuk membuat multi baris string dalam 1 statement, bisa dengan cara menuliskan tanda `"` atau `'` 3 kali. Contohnya bisa dilihat berikut:

```python
# multi-line string
string_3 = """Selamat
Belajar
Python"""
print("string_3 is %s with value: %s " % (type(string_3), string_3))

# multi-line string
string_4 = '''
Sesuk
Preiiii
'''
print("string_4 is %s with value: %s " % (type(string_4), string_4))
```

Output:

![tipe data string di python](img/tipe-data-2.png)

## A.6.1. Tipe data `bool`

Literal untuk tipe data boolean

```python
bool_1 = True
print("bool_1 is %s with value: %s " % (type(bool_1), bool_1))

bool_2 = False
print("bool_2 is %s with value: %s " % (type(bool_2), bool_2))
```

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/hello-python">
        github.com/novalagung/dasarpemrogramanpython-example/../hello-python
    </a>
</pre>

### ◉ Referensi

- https://note.nkmk.me/en/python-int-max-value/

</div>
