---
sidebar_position: 17
title: A.17. Python String
sidebar_label: A.17. String (WIP)
---

Konsep string di Python sama dengan bahasa pemrograman lain pada umumnya. String merupakan kumpulan data `char` atau karakter yang tersimpan secara urut.

Pada chapter ini kita akan mempelajari tentang penerapannya.

## A.17.1. Penerapan string

Python mendesain tipe data string dalam bentuk yang sangat sederhana dan mudah digunakan. Untuk membuat data string, cukup tulis saja text yang diinginkan dengan diapit tanda petik satu atau petik dua. Contoh:

```python
str = "hello python"
print(str)
# output → hello python

str = 'hello python'
print(str)
# output → hello python
```

Jika karakter string memiliki tanda kutip, maka penulisan tanda kutip di dalam string perlu diawali dengan karakter `\`. Contoh:

```python
str = 'this is a "string" in python'
print(str)
# output → this is a "string" in python

str = "this is a \"string\" in python"
print(str)
# output → this is a "string" in python
```

Untuk string *multiline* atau lebih dari satu baris, cara penulisannya bisa dengan:

- Menggunakan karakter `\n`. Contoh:

    ```python
    str = "a multiline string\nin python"

    print(str)
    # output ↓ 
    # a multiline string
    # in python
    ```

- Atau menggunakan tanda `"""` untuk mengapit karakter string. Contoh:

    ```python
    str = """a multiline string
    in python"""

    print(str)
    # output ↓ 
    # a multiline string
    # in python
    ```

> Selain cara di atas, pembuatan string juga bisa dengan cara lainnya, menggunakan `f"`. Kita akan membahasnya sebentar lagi.

### ◉ Mengecek lebar karakter string

Fungsi `len()` ketika digunakan pada tipe data string, nilai baliknya adalah jumlah karakter string.

```python
str = "hello python"

print("text:", str)
# output → hello python

print("length:", len(str))
# output → 12
```

## A.17.2. String *special characters*

Di atas telah dicontohkan bagaimana cara menulis karakter *newline* atau baris baru menggunakan `\n`, dan karakter petik dua menggunakan `\"`. Dua karakter tersebut marupakan *special characters*.

Python mengenal banyak special characters yang masing-masing memiliki kegunaan yang cukup spesifik. Lebih detailnya silakan lihat tabel berikut:

Escape Sequence

Meaning

Notes

\<newline>

Backslash and newline ignored

(1)

\\

Backslash (\)

\'

Single quote (')

\"

Double quote (")

\a

ASCII Bell (BEL)

\b

ASCII Backspace (BS)

\f

ASCII Formfeed (FF)

\n

ASCII Linefeed (LF)

\r

ASCII Carriage Return (CR)

\t

ASCII Horizontal Tab (TAB)

\v

ASCII Vertical Tab (VT)

\ooo

Character with octal value ooo

(2,4)

\xhh

Character with hex value hh

(3,4)

Escape sequences only recognized in string literals are:

Escape Sequence

Meaning

Notes

\N{name}

Character named name in the Unicode database

(5)

\uxxxx

Character with 16-bit hex value xxxx

(6)

\Uxxxxxxxx

Character with 32-bit hex value xxxxxxxx

(7)

## A.17.3. Penggabungan string (*concatenation*)

Ada beberapa metode yang bisa digunakan untuk *string concatenation* atau operasi penggabungan string.

- Menggunakan teknik penulisan string literal sebaris.

    Caranya dengan langsung tulis saja semua string-nya menggunakan separator karakter spasi.

    ```python
    str = "hello " "python"
    print(str)
    # output → hello python
    ```

- Menggunakan operator `+`.

    Operator `+` jika diterapkan pada string menghasilkan penggabungan string.

    ```python
    str_one = "hello"
    str_two = "python"
    str = str_one + " " + str_two

    print(str)
    # output → hello python
    ```

- Menggunakan method `join()` milik string.

    Pada penerapannya, karakter pembatas atau *separator* ditulis terlebih dahulu, kemudian di-*chain* dengan method join dengan isi argument adalah list yang ingin digabung.

    ````python
    str = " ".join(["hello", "python"])
    print(str)
    # output → hello python
    ```

## A.17.4. String formatting


https://docs.python.org/3/reference/lexical_analysis.html