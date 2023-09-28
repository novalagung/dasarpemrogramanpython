---
sidebar_position: 17
title: A.17. Python String
sidebar_label: A.17. String (WIP)
---

String (atau `str`) merupakan tipe data tekstual, digunakan untuk menampung text. String masih termasuk kategori tipe data sequence, karena isinya merupakan sequence data unicode code point. Dari sini berarti operasi standar tipe data sequence juga bisa diterapkan di string.

## A.17.1. Penerapan string

String bisa dibuat menggunakan literal `" "` atau `' '` untuk string sebaris, dan `""" """` untuk string banyak baris. 

```python
str = "hello python"
print(str)
# output → hello python

str = 'hello python'
print(str)
# output → hello python

str = """a multiline string
in python"""
print(str)
# output ↓
# a multiline string
# in python
```

Python mengenal standar *escape character* umum yang ada di banyak bahasa pemrograman, contohnya seperti `\"` digunakan untuk menuliskan karakter `"` pada string yang dibuat menggunakan literal `" "`. Ini penting karena jika tidak di-escape menggunakan `\` maka karakter `"` terdeteksi sebagai penanda string.

Sebagai contoh, dua statement berikut adalah ekuivalen:

```python
str = 'this is a "string" in python'
print(str)
# output → this is a "string" in python

str = "this is a \"string\" in python"
print(str)
# output → this is a "string" in python
```

## A.17.2. String formatting

String formatting adalah teknik untuk mem-format string agar menghasilkan data tekstual sesuai format yang diinginkan.

Cara termudah melakukan string formatting adalah dengan menggunakan **f-strings** (atau [formatted string literals](https://docs.python.org/3/reference/lexical_analysis.html#f-strings)). Tulis string seperti biasa tapi diawali dengan huruf `f` atau `F` sebelum penulisan `" "`.

Pada contoh berikut, sebuah string dibuat dimana ada dua bagian string didalamnya yang bersumber dari data string.

```python
name = "Aiden Pearce"
occupation = "IT support"

str = f"hello, my name is {name}, I'm an {occupation}"
print(str)
# output → hello, my name is Aiden Pearce, I'm an IT support
```

Penjelasan:

- String dibuat dengan metode f-strings, dimana struktur text adalah `hello, my name is {name}, I'm an {occupation}`.
- Text `{name}` di dalam string di-replace oleh nilai variable `name`, yang pada konteks ini nilainya `Aiden Pearce`.
- Text `{occupation}` di dalam string di-replace oleh nilai variable `occupation`, yang pada konteks ini nilainya `IT support`.
- f-strings di atas menghasilkan text `hello, my name is Aiden Pearce, I'm an IT support`.

Selain menggunakan metode di atas, ada beberapa alternatif cara lain yang bisa digunakan, diantaranya:

```python
str = "hello, my name is {name}, I'm an {occupation}".format(name = name, occupation = occupation)
print(str)
# output → hello, my name is Aiden Pearce, I'm an IT support

str = "hello, my name is {0}, I'm an {1}".format(name, occupation)
print(str)
# output → hello, my name is Aiden Pearce, I'm an IT support

str = "hello, my name is {}, I'm an {}".format(name, occupation)
print(str)
# output → hello, my name is Aiden Pearce, I'm an IT support
```

Semua metode string formatting di atas menghasilkan nilai balik yang sama, yaitu `hello, my name is Aiden Pearce, I'm an IT support`. Silakan pilih gunakan cara sesuai selera.

# output → this is also a string in python