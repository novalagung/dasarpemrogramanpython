---
sidebar_position: 56
title: A.56. Python Enumeration
sidebar_label: A.56. Enumeration
---

Enumeration (Enum) adalah nilai konstan, umumnya disiapkan untuk merepresentasikan sekumpulan data konstan yang konteksnya masih sama. Misalnya, **warna** yang isinya bisa merah, biru, kuning, atau warna lain.

Pembuatan enum di Python sangat mudah. Caranya dengan mendeklarasikan class baru yang meng-*inherit* class `enum.Enum`, kemudian menuliskan kumpulan data sebagai class property-nya.

## A.56.1. Enum / Enumeration

Di bawah ini, disiapkan sebuah enum bernama `City` dengan isi ada 4 buah pilihan kota.

```python
from enum import Enum
class City(Enum):
    MALANG = 1
    SURABAYA = 2
    YOGYAKARTA = 3
    JAKARTA = 4

print(list(City))
# output ➜ [<City.MALANG: 1>, <City.SURABAYA: 2>, <City.YOGYAKARTA: 3>, <City.JAKARTA: 4>
```

Nilai property enum bisa diisi dengan data apapun. Pada contoh di atas, nilai property enum `City` diisi dengan angka numerik.

> Property enum bisa diakses dalam bentuk `list` dengan cukup membungkusnya menggunakan fungsi `list()`.

Selanjutnya, buat satu variabel, isi nilainya dengan salah satu property enum (misalnya `City.YOGYAKARTA`), kemudian print.

```python
city1 = City.YOGYAKARTA

print(city1)
# output ➜ City.YOGYAKARTA

print(f"name {city1.name}")
# output ➜ name YOGYAKARTA

print(f"value {city1.value}")
# output ➜ value 3
```

Nama enum property bisa diambil menggunakan property `name` sedangkan value-nya diambil via property `value`.

## A.56.2. Naming convention enum

Sesuai penjelasan di [halaman dokumentasi Python](https://docs.python.org/3/howto/enum.html), nama class enum dianjurkan ditulis menggunakan **CamelCase**, sedangkan nama class property dituliskan **UPPERCASE**. 

## A.56.3. Notasi penulisan pengaksesan enum property

Dalam penggunaannya setidaknya ada 3 notasi pengaksesan enum property yang bisa digunakan.

- Cara pertama menggunakan notasi `Enum.PROPERTY`.

    ```python
    city1 = City.YOGYAKARTA

    print(city1)
    # output ➜ City.YOGYAKARTA
    print(f"name {city1.name}")
    # output ➜ name YOGYAKARTA
    print(f"value {city1.value}")
    # output ➜ value 3
    ```

- Cara ke-2 menggunakan notasi pengaksesan dictionary dengan key berupa string.

    ```python
    city2 = City["SURABAYA"]
    print(city2)
    # output ➜ City.SURABAYA
    print(f"name {city2.name}")
    # output ➜ name SURABAYA
    print(f"value {city2.value}")
    # output ➜ value 2
    ```

    Metode ini cukup berguna pada case ketika key enum yang perlu diambil yang sudah diketahui nilainya.

- Cara ke-3 menggunakan notasi pengaksesan `Enum(value)`.

    ```python
    city3 = City(4)
    print(city3)
    # output ➜ City.JAKARTA
    print(f"name {city3.name}")
    # output ➜ name JAKARTA
    print(f"value {city3.value}")
    # output ➜ value 4
    ```

    Metode ini pas digunakan ketika value enum sudah diketahui nilainya.

## A.56.4. Nilai property enum

Property enum nilainya bisa berisi data numerik, string, atau tipe data lainnya.

Di atas telah dicontohkan enum `City` yang property-nya berisi data numerik. Pada contoh ke-2 ini, enum `Color` property-nya berisi data string.

```python
from enum import Enum
class Color(Enum):
    RED = "red"
    BLUE = "blue"

print(list(Color))
# output ➜ [<Color.RED: 'red'>, <Color.BLUE: 'blue'>]

color1 = Color("red")
color2 = Color.RED
color3 = Color["BLUE"]
print(color1, color2, color3)
# output ➜ Color.RED Color.RED Color.BLUE
```

Selain menggunakan class `enum.Enum` saat deklarasi, bisa juga menggunakan salah satu class turunan enum lainnya, diantaranya ada:

- Class `enum.Enum` ➡️ property boleh berisi data bertipe apapun
- Class `enum.StrEnum` ➡️ property hanya boleh berisi tipe data string
- Class `enum.IntEnum` ➡️ property hanya boleh berisi tipe data string

Cara penerapan variant enum yang telah disebut di atas adalah masih sama. Cukup ganti `Enum` dengan turunan class yang diinginkan, lalu sesuaikan tipe data nilai property di dalamnya.

### ◉ `StrEnum`

Misalnya, enum `Color` kita ubah dari menggunakan `Enum` ke `StrEnum`, maka kodenya seperti ini:

```python
from enum import StrEnum
class Color(StrEnum):
    RED = "red"
    BLUE = "blue"

print(list(Color))
# output ➜ [<Color.RED: 'red'>, <Color.BLUE: 'blue'>]

color1 = Color("red")
color2 = Color.RED
color3 = Color["BLUE"]
print(color1, color2, color3)
# output ➜ Color.RED Color.RED Color.BLUE
```

### ◉ `IntEnum` dan fungsi `auto()`

Untuk enum dengan property bertipe numerik, bisa menggunakan fungsi `auto()` untuk generate nilai numerik unik secara otomatis. Contoh:

```python
from enum import IntEnum, auto
class Size(IntEnum):
    S = auto()
    M = auto()
    L = auto()
    XL = auto()

print(list(Size))
# output ➜ [<Size.S: 1>, <Size.M: 2>, <Size.L: 3>, <Size.XL: 4>]

size1 = Size.M
size2 = Size.XL
print(size1, size2)
# output ➜ Size.M Size.XL
```

## A.56.5. Pengecekan nilai enum

Operator identitas `is` dan operator perbandingan `==` dan `!=` bisa digunakan untuk pengecekan nilai enum.

```python
from enum import Enum
class City(Enum):
    MALANG = 1
    SURABAYA = 2
    YOGYAKARTA = 3
    JAKARTA = 4

def say_anything(c):
    if c is City.MALANG:
        print("Oyi sam")
    elif c == City.JAKARTA:
        print("lo gue lo gue")
    elif c == City.SURABAYA:
        print("coeg")
    elif c == City.YOGYAKARTA:
        print("monggo")

city1 = City.YOGYAKARTA
say_anything(city1)
# output ➜ monggo
```

## A.56.6. Perulangan enum

Enum merupakan tipe yang bisa langsung digunakan pada perulangan. Contoh penggunaannya:

```python
for c in City:
    print(c, c.name, c.value)
# output ↓
#
# City.MALANG MALANG 1
# City.SURABAYA SURABAYA 2
# City.YOGYAKARTA YOGYAKARTA 3
# City.JAKARTA JAKARTA 4
```

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/enum">
        github.com/novalagung/dasarpemrogramanpython-example/../enum
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [Konstanta](/basic/konstanta)

### ◉ TBA

- `IntFlag` and `Flag` https://docs.python.org/3/howto/enum.html#intflag

### ◉ Referensi

- https://docs.python.org/3/library/enum.html
- https://docs.python.org/3/howto/enum.html

</div>
