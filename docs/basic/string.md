---
sidebar_position: 17
title: A.17. Python String
sidebar_label: A.17. String (WIP)
---

Konsep string di Python sama dengan bahasa pemrograman lain pada umumnya. String (atau `str`) merupakan kumpulan data `char` atau karakter yang tersimpan secara urut.

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

### ◉ Multiline string

Untuk string *multiline* atau lebih dari satu baris, cara penulisannya bisa dengan:

- Menggunakan karakter spesial `\n`:

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

### ◉ Escape character

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

## A.17.2. String *special characters*

Di atas telah dicontohkan bagaimana cara menulis karakter *newline* atau baris baru menggunakan `\n`, dan karakter petik dua menggunakan `\"`. Dua karakter tersebut marupakan *special characters*.

Python mengenal banyak special characters yang masing-masing memiliki kegunaan yang cukup spesifik. Lebih detailnya silakan lihat tabel berikut:

| Special character | Kegunaan |
| :-: | :- |
| \\\\ | karakter backslash (\\) |
| \' | tanda petik satu (') |
| \" | tanda kutip (petik dua) (") |
| \a | bunyi *beeb* (ASCII BEL) |
| \b | backspace (ASCII BS) |
| \f | page separator / formfeed (ASCII FF) |
| \n | karakter baris baru linefeed (ASCII LF) |
| \r | karakter baris baru carriage return (ASCII CR) |
| \t | horizontal tab (ASCII TAB) |
| \v | vertical tab (ASCII VT) |
| \\{oktal} | nilai oktal, contoh: `\122`, `\004`, `\024` |
| \x{hex} | nilai heksadesimal, contoh: `\xA4`, `\x5B` |

Contoh salah satu penggunaan special character `\t` (horizontal tab):

![special char python](img/string-1.png)

## A.17.3. *Unicode character*

https://docs.python.org/3/howto/unicode.html?highlight=unicode%20howto#the-string-type

<!-- "\N{GREEK CAPITAL LETTER DELTA}"  # Using the character name
'\u0394'
"\u0394"                          # Using a 16-bit hex value
'\u0394'
"\U00000394"                      # Using a 32-bit hex value
'\u0394' -->
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

## A.17.4. String formatting

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

## A.17.5. Penggabungan string (*concatenation*)

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

## A.17.6. Operasi sequence pada string

String masih termasuk kategori tipe data sequence. Operasi standar tipe data sequence bisa diterapkan di string.

### ◉ Mengecek lebar karakter string

Fungsi `len()` ketika digunakan pada tipe data string mengembalikan informasi jumlah karakter string.

```python
str = "hello python"

print("text:", str)
# output → hello python

print("length:", len(str))
# output → 12
```

### ◉ Mengakses element string

Setiap elemen string bisa diakses menggunakan index. Penulisan notasi pengaksesannya sama seperti pada tipe data sequence lainnya, yaitu menggunakan `str[index]`.

```python
str = "hello python"
print(str[0])
# output → h

print(str[1])
# output → e

print(str[2])
# output → l
```

Selain via index, keyword perulangan `for` bisa dimanfaatkan untuk mengiterasi elemen string. Contoh:

```python
for c in str:
    print(c)
```

Contoh lain menggunakan `range()`:

```python
for i in range(0, len(str)):
    print(str[i])
```

Output:

![Iterasi data string](img/string-2.png)

:::danger

Pengaksesan elemen menggunakan index di-luar kapasitas data akan menghasilkan error.

Sebagai contoh, string `str = "hello"`, jika diakses index ke-5-nya misalnya (`str[5]`) hasilnya adalah error. 

:::

### ◉ *Slicing* string

Teknik slicing bisa diterapkan pada data string. Contoh:

```python
str = "hello python"

print(str[1:5])
# output → ello

print(str[7:])
# output → ython

print(str[:4])
# output → hell
```

> Lebih detailnya mengenai slice dibahas pada chapter [Slice](#)
