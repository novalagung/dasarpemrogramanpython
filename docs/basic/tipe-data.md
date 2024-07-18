---
sidebar_position: 6
title: A.6. Python Tipe Data
sidebar_label: A.6. Tipe Data
# description: 
keywords: [tipe data python]
faqs:
  - question: Tipe data di Python
    answer: Python mengenal cukup banyak tipe data, mulai dari yang built-in maupun custom type. Contohnya int, float, complex, str, bool, list, tuple, set, dict
---

Python mengenal cukup banyak tipe data, mulai dari yang *built-in* (atau bawaan) maupun custom type. Pada chapter ini kita akan mempelajari *high-level overview* tipe-tipe tersebut.

## A.6.1. Tipe data numerik

Ada setidaknya 3 tipe data numerik di Python, yaitu:

| Tipe data | Keterangan | Contoh |
| :-: | :- | :- |
| `int` | menampung bilangan bulat atau *integer* | ` number_1 = 10000024 ` |
| `float` | menampung bilangan desimal atau *floating point* | ` number_2 = 3.14 ` |
| `complex` | menampung nilai berisi kombinasi bilangan real dan imajiner | ` number_3 = 120+3j ` |

> Penjelasan detail mengenai string ada pada chapter [Number](/basic/number-bilangan)

## A.6.2. Tipe data string / `str`

Tipe string direpresentasikan oleh `str`, pembuatannya bisa menggunakan literal string yang ditandai dengan tanda awalan dan akhiran tanda `"` atau `'`.

- Menggunakan tanda petik dua (`"`)

    ```python
    # string sebaris
    string_1 = "hello python"

    # string multi-baris
    string_2 = """Selamat
    Belajar
    Python"""
    ```

- Menggunakan tanda petik satu (`'`)

    ```python
    # string sebaris
    string_3 = 'for the horde!'

    # string multi-baris
    string_4 = '''
    Sesuk
    Preiiii
    '''
    ```

Jika ada baris baru (atau *newline*) di bagian awal penulisan `'''` atau `"""` maka baris baru tersebut merupakan bagian dari string. Jika ingin meng-*exclude*-nya bisa menggunakan `"""\` atau `'''\`. Contoh:

```python
string_5 = '''\
Sesuk
Preiiii
'''
```

> Penjelasan detail mengenai string ada pada chapter [String](/basic/string)

## A.6.3. Tipe data `bool`

Literal untuk tipe data boolean di Python adalah `True` untuk nilai benar, dan `False` untuk nilai salah.

```python
bool_1 = True
bool_2 = False
```

## A.6.4. Tipe data `None`

Tipe data `None` merepresentasikan nilai kosong (seperti nilai `null` atau `nil` di bahasa lain). Pengecekan nilai kosong digunakan 

```python
data = "hello"
print(data)
# output ➜ hello

data = None
print(data)
# output ➜ data

data = "python"
print(data)
# output ➜ python
```

> Penjelasan lebih detail mengenai `None` ada pada chapter [None](/basic/none)

## A.6.5. Tipe data list

List adalah tipe data di Python untuk menampung nilai kolektif yang disimpan secara urut, dengan isi bisa berupa banyak varian tipe data (tidak harus sejenis). Cara penerapan list adalah dengan menuliskan nilai kolektif dengan pembatas `,` dan diapit tanda `[` dan `]`.

```python
# list with int as element's data type
list_1 = [2, 4, 8, 16]

# list with str as element's data type
list_2 = ["grayson", "jason", "tim", "damian"]

# list with various data type in the element
list_3 = [24, False, "Hello Python"]
```

Pengaksesan element list menggunakan notasi `list[index_number]`. Contoh:

```python
list_1 = [2, 4, 8, 16]
print(list_1[2])
# output ➜ 8
```

> Penjelasan detail mengenai list ada pada chapter [List](/basic/list)

## A.6.6. Tipe data tuple

Tuple adalah tipe data kolektif yang mirip dengan list, dengan pembeda adalah:

- Nilai pada data list adalah bisa diubah (*mutable*), sedangkan nilai data `tuple` tidak bisa diubah (*immutable*).
- List menggunakan tanda `[` dan `]` untuk penulisan literal, sedangkan pada tuple yang digunakan adalah tanda `(` dan `)`.

```python
# tuple with int as element's data type
tuple_1 = (2, 3, 4)

# tuple with str as element's data type
tuple_2 = ("numenor", "valinor")

# tuple with various data type in the element
tuple_3 = (24, False, "Hello Python")
```

Pengaksesan element tuple menggunakan notasi `tuple[index_number]`. Contoh:

```python
tuple_1 = (2, 3, 4)
print(tuple_1[2])
# output ➜ 4
```

> Penjelasan detail mengenai tuple ada pada chapter [Tuple](/basic/tuple)

## A.6.7. Tipe data dictionary

Tipe data `dict` atau dictionary berguna untuk menyimpan data kolektif terstruktur berbentuk *key value*. Contoh penerapan:

```python
profile_1 = {
  "name": "Noval",
  "is_male": False,
  "age": 16,
  "hobbies": ["gaming", "learning"]
}
```

Pengaksesan property dictionary menggunakan notasi `dict[property_name]`. Contoh:

```python
print("name: %s" % (profile_1["name"]))
# output ➜ name: Noval

print("hobbies: %s" % (profile_1["hobbies"]))
# output ➜ name: ["gaming", "learning"]
```

Penulisan data dictionary diperbolehkan secara horizontal, contohnya seperti berikut:

```python
profile_1 = { "name": "Noval", "hobbies": ["gaming", "learning"] }
```

> Penjelasan detail mengenai dictionary ada pada chapter [Dictionary](/basic/dictionary)

## A.6.8. Tipe data set

Tipe data set adalah cara lain untuk menyimpan data kolektif. Tipe data ini memiliki beberapa kelemahan:

- Tidak bisa menyimpan informasi urutan data
- Elemen data yang sudah dideklarasikan tidak bisa diubah nilainya (tapi bisa dihapus)
- Tidak bisa diakses menggunakan index (tetapi bisa menggunakan perulangan)

Contoh penerapan set:

```python
set_1 = {"pineapple", "spaghetti"}
print(set_1)
# output ➜ {"pineapple", "spaghetti"}
```

> Penjelasan detail mengenai set ada pada chapter [Set](/basic/set)

## A.6.9. Tipe data lainnya

Selain tipe-tipe di atas ada juga beberapa tipe data lainnya, seperti frozenset, bytes, memoryview, range; yang kesemuanya akan dibahas satu per satu di chapter terpisah.

> - Penjelasan detail mengenai frozenset ada pada chapter [Set ➜ frozenset](/basic/set#a157-frozenset)
> - Penjelasan detail mengenai range ada pada chapter [Perulangan ➜ for & range](/basic/for-range#a92-penerapan-fungsi-range)

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/tipe-data">
        github.com/novalagung/dasarpemrogramanpython-example/../tipe-data
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [String](/basic/string)
- [List](/basic/list)
- [Tuple](/basic/tuple)
- [Set](/basic/set)
- [Dictionary](/basic/dictionary)

### ◉ Referensi

- https://docs.python.org/3/tutorial/introduction.html
- https://docs.python.org/3/library/stdtypes.html#typesseq

</div>
