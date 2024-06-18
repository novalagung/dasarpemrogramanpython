---
sidebar_position: 24
title: A.24. Python Args & Kwargs
sidebar_label: A.24. Function ➜ Args & Kwargs
---

Pada chapter ini kita akan belajar tentang penerapan args dan kwargs pada fungsi di Python.

## A.24.1. Pengenalan Args

**Args** (atau yang umumnya ditulis sebagai **\*args**) merupakan notasi penulisan parameter spesial dengan kapabilitas bisa menampung banyak *positional argument* untuk ditampung dalam 1 parameter saja.

Agar lebih jelas tentang kegunaan args, mari pelajari terlebih dahulu kode berikut:

```python
def sum_then_print(n1, n2, n3, n4, n5):
    total = n1 + n2 + n3 + n4 + n5
    print(total)

sum_then_print(2, 3, 4, 5, 4)
# output ➜ 18
```

Fungsi `sum_then_print()` menerima 5 buah argument numerik yang dari nilai tersebut kemudian dihitung totalnya lalu ditampilkan.

Fungsi tersebut memiliki limitasi yaitu hanya bisa menerima 5 buah data numerik. Untuk membuatnya bisa menampung sejumlah data, solusinya bisa dengan cukup menggunakan 1 parameter saja dengan data argument yang disisipkan harus dalam tipe data sequence seperti list, atau solusi alternatif lainnya bisa dengan menggunakan **\*args** yang di bawah ini dibahas.

Implementasi args cukup mudah, pada deklarasi fungsi tulis saja parameter dengan nama apapun bebas, tetapi pada penulisannya diawali karakter asterisk atau **\***, contohnya seperti parameter `numbers` berikut:

```python
def sum_then_print(*numbers):
    total = 0
    for n in numbers:
        total = total + n
    print(total)

sum_then_print(2, 3, 4, 5, 4)
# output ➜ 18
```

Fungsi di atas parameter `numbers`-nya ditulis menggunakan notasi **\*args**, maka parameter tersebut akan menampung semua argument yang disisipkan saat pemanggilan fungsi. Nilai argument disimpan oleh parameter `numbers` dalam bentuk **tuple**. Variabel `numbers` di-iterasi nilainya lalu dihitung totalnya.

### ◉ Args untuk argument dengan tipe data bervariasi

Metode **\*args** ini mampu menampung segala jenis argument tanpa meghiraukan tipe datanya. Contohnya bisa dilihat pada program berikut ini:

```python
def print_data(*params):
    print(f"type: {type(params)}, data: {params}")
    for i in range(len(params)):
        print(f"param {i}: {params[i]}")

print_data("hello python", 123, [5, True, ("yesn't")], {"iwak", "peyek"})
# output ↓
#
# type: <class 'tuple'>, data: ('hello python', 123, [5, True, "yesn't"], {'iwak', 'peyek'})
# param 0: hello python
# param 1: 123
# param 2: [5, True, "yesn't"]
# param 3: {'iwak', 'peyek'}
```

### ◉ Kombinasi positional argument dan args

Args sebenarnya tidak benar-benar menangkap semua argument pemanggilan fungsi, melainkan hanya argument yang ditulis sesuai posisi parameter hingga posisi setelahnya. Misalnya, sebuah fungsi memiliki 2 parameter dimana parameter pertama menampung string dan parameter kedua adalah **\*args**, maka pada contoh ini parameter **\*args** hanya menampung argument ke-2 dan setelahnya. Contoh:

```python
def sum_then_print(message, *numbers):
    total = 0
    for n in numbers:
        total = total + n
    print(f"{message} {total}")

sum_then_print("total nilai:", 2, 3, 4, 5, 4)
# output ➜ total nilai: 18
```

Bisa dilihat, pada kode di atas parameter `message` menampung argument ke-1 yaitu string `total nilai:`, dan parameter `numbers` menampung argument ke-2 hingga seterusnya (yaitu data `2`, `3`, `4`, `5`, `4`).

Perlu diketahui dalam penerapan kombinasi positional argument dan args, positional argument harus selalu ditulis sebelum parameter **\*args**.

### ◉ Kombinasi positional argument, args, dan keyword argument

Keyword argument bisa digunakan bebarengan dengan positional argument dan **\*args**, dengan syarat harus dituliskan di akhir setelah **\*args**.

```python
def sum_then_print(message, *numbers, suffix_message):
    total = 0
    for n in numbers:
        total = total + n
    print(f"{message} {total} {suffix_message}")

sum_then_print("total nilai:", 2, 3, 4, 5, 4, suffix_message="selesai!")
# output ➜ total nilai: 18 selesai!
```

## A.24.2. Pengenalan Kwargs

**Kwargs** (atau yang umumnya ditulis sebagai **\*\*kwargs** atau **keyword arguments**) merupakan notasi penulisan parameter spesial dengan kapabilitas bisa menampung banyak *keyword argument* pemanggilan fungsi dalam 1 parameter saja.

```python
def print_data(**data):
    print(f"type: {type(data)}")
    print(f"data: {data}")

    for key in data:
        print(f"param: {key}, value: {data[key]}")

print_data(phone="nokia 3310", discontinue=False, year=2000, networks=["GSM", "TDMA"])
# output ↓
#
# type: <class 'dict'>
# data: {'phone': 'nokia 3310', 'discontinue': False, 'year': 2000, 'networks': ['GSM', 'TDMA']}
# 
# param: phone, value: nokia 3310
# param: discontinue, value: False
# param: year, value: 2000
# param: networks, value: ['GSM', 'TDMA']
```

Argument yang ditampung oleh parameter **\*\*kwargs** datanya tersimpan dalam bentuk dictionary dengan key adalah nama parameter dan value adalah nilai argument.

### ◉ Kombinasi positional argument dan kwargs

Kwargs sebenarnya hanya menampung semua argument mulai dari argument ke-`n` hingga seterusnya dimana `n` adalah nomor/posisi **\*\*kwargs** ditulis.

Contohnya pada kode berikut, parameter `data` hanya akan menampung argument nomor ke-3 hingga seterusnya. Argument pertama ditampung oleh parameter `message` sedangkan argument ke-2 oleh parameter `number`.

```python
def print_data(message, number, **data):
    print(f"message: {message}")
    print(f"number: {number}")
    print()
    for key in data:
        print(f"param: {key}, value: {data[key]}")

print_data("sesuk prei", 2023, phone="nokia 3315", networks=["GSM", "TDMA"])
# output ↓
#
# message: sesuk prei
# number: 2023
# 
# param: phone, value: nokia 3310
# param: networks, value: ['GSM', 'TDMA']
```

Dalam penerapannya, positional argument harus selalu ditulis sebelum parameter **\*\*kwargs**.

### ◉ Kombinasi positional argument, args dan kwargs

Kombinasi antara positional argument, **\*args**, dan **\*\*kwargs** juga bisa dilakukan dengan ketentuan semua positional argument ditulis terlebih dahulu, kemudian diikuti **\*args**, lalu **\*\*kwargs**.

Contoh penerapannya:

```python
def print_all(message, *params, **others):
    print(f"message: {message}")
    print(f"params: {params}")
    print(f"others: {others}")

print_all("hello world", 1, True, ("yesn't", "nope"), name="nokia 3310", discontinued=True, year_released=2000)
# output ↓
#
# message: hello world
# params: (1, True, ("yesn't", 'nope'))
# others: {'name': 'nokia 3310', 'discontinued': True, 'year_released': 2000}
```

Python secara cerdas mengidentifikasi argument mana yang akan disimpan pada positional parameter, **\*args**, dan **\*\*kwargs**. Pada kode di atas, mapping antara arguments dengan parameter adalah seperti ini:

- Argument `hello world` ditampung parameter `message`.
- Argument `1`, `True`,dan  `("yesn't", "nope")` ditampung parameter `params`.
- Keyword argument `name="nokia 3310"`, `discontinued=True`, dan `year_released=2000` ditampung parameter `others`.

### ◉ Kombinasi positional argument, args, keyword argument, dan kwargs 

Keyword argument bisa dituliskan diantara **\*args**, dan **\*\*kwargs**, diluar itu menghasilkan error.

```python
def print_all(message, *params, say_something, **others):
    print(f"message: {message}")
    print(f"params: {params}")
    print(f"say_something: {say_something}")
    print(f"others: {others}")

print_all("hello world", 1, True, ("yesn't", "nope"), say_something="how are you", name="nokia 3310", discontinued=True, year_released=2000)
# output ↓
#
# message: hello world
# params: (1, True, ("yesn't", 'nope'))
# say_something: how are you
# others: {'name': 'nokia 3310', 'discontinued': True, 'year_released': 2000}
```

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/args-kwargs">
        github.com/novalagung/dasarpemrogramanpython-example/../args-kwargs
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [Function](/basic/function)
- [Function ➜ Positional, Optional, Keyword Arguments](/basic/positional-optional-keyword-argument)
- [Function ➜ Closure](/basic/closure)
- [Function ➜ Lambda](/basic/lambda)

### ◉ Referensi

- https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists

</div>
