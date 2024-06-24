---
sidebar_position: 35
title: A.35. Python OOP ➜ Constructor
sidebar_label: A.35. OOP ➜ Constructor
---

Constructor/konstruktor adalah salah satu topik penting dalam pemrograman berbasis object (OOP). Konstruktor sendiri adalah fungsi khusus yang dipanggil saat pembuatan object dilakukan dari suatu class.

Pada chapter ini kita akan belajar tentang konstruktor dan apa saja yang bisa dilakukan didalamnya.

## A.35.1. Pengenalan constructor

Di bahasa yang mengadopsi konsep OOP, setiap class memiliki *default constructor*. Sebagai contoh pada statement pembuatan object bertipe class `Car`, syntax `Car()` digunakan dan syntax tersebut merupakan contoh penerapan pengaksesan konstruktor.

> Sederhananya, konstruktor adalah kelas yang dipanggil seperti fungsi dengan notasi `<Class>()`.

Agar makin jelas, silakan praktekan kode sederhana berikut:

```python
class Mountain:
    pass

mount_everest = Mountain()
print(mount_everest)
# output ➜ <__main__.Mountain object at 0x0000019118A13390>

mount_kilimanjaro = Mountain()
print(mount_kilimanjaro)
# output ➜ <__main__.Mountain object at 0x0000019118A11390>
```

Class `Mountain` dideklarasikan tanpa berisi apapun (oleh karena itu keyword `pass` digunakan). Kelas tersebut bisa digunakan untuk membuat variabel object `mount_everest` dan `mount_kilimanjaro` dengan cara memanggil konstruktornya, yaitu `Mountain()`.

Dalam deklarasi class yang memiliki attribute, constructor wajib di-*replace* (atau istilah OOP-nya adalah di-*override*) dengan custom constructor yang didalamnya berisi deklarasi instance attribute.

Sebagai contoh, class `Mountain` yang telah dibuat dimodifikasi dengan ditambahkan tiga buah instance attribute didalamnya yaitu `name`, `region`, dan `elevation`.

```python
class Mountain:
    def __init__(self):
        self.name = ""
        self.region = ""
        self.elevation = 0
    
    def info(self):
        print(f"name: {self.name}")
        print(f"region: {self.region}")
        print(f"elevation: {self.elevation}m")

mount_everest = Mountain()
mount_everest.name = "Everest"
mount_everest.region = "Asia"
mount_everest.elevation = 8848
mount_everest.info()
# output ↓
#
# name: Everest
# region: Asia
# elevation: 8848m

mount_kilimanjaro = Mountain()
mount_kilimanjaro.name = "Kilimanjaro"
mount_kilimanjaro.region = "Africa"
mount_kilimanjaro.elevation = 5895
mount_kilimanjaro.info()
# output ↓
#
# name: Kilimanjaro
# region: Africa
# elevation: 5895m
```

Pada contoh di atas, konstruktor `__init__(self)` meng-override default constructor milik class `Mountain` dan digunakan untuk deklarasi instance attribute.

## A.35.2. Constructor dengan custom param

Konstruktor dapat didesain untuk memiliki parameter, dan metode ini sangat umum diterapkan.

Sebagai contoh, pada kode berikut class `Mountain` konstruktornya dimodifikasi agar bisa menampung data argument untuk parameter `name`, `region`, dan `elevation`.

```python
class Mountain:
    def __init__(self, name, region, elevation):
        self.name = name
        self.region = region
        self.elevation = elevation
    
    def info(self):
        print(f"name: {self.name}")
        print(f"region: {self.region}")
        print(f"elevation: {self.elevation}m")

mount_everest = Mountain("Everest", "Asia", 8848)
mount_everest.info()
# output ↓
#
# name: Everest
# region: Asia
# elevation: 8848m

mount_kilimanjaro = Mountain("Kilimanjaro", "Africa", 5895)
mount_kilimanjaro.info()
# output ↓
#
# name: Kilimanjaro
# region: Africa
# elevation: 5895m
```

Seperti halnya method, parameter pertama konstruktor harus `self`. Dari sini bisa disimpulkan berarti penambahan parameter harus dituliskan setelah `self`. Bisa dilihat di deklarasi konstruktor class `Mountain`, disitu ada tiga buah parameter dideklarasikan setelah `self`.

## A.35.3. Constructor overloading

Overloading merupakan istilah OOP untuk pembuatan banyak konstruktor dengan jumlah dan tipe parameter berbeda.

Python tidak menyediakan API untuk penerapan constructor overloading, namun pada praktiknya bisa dicapai dengan *hack*, misalnya menggunakan opsional/keyword parameter, atau menggunakan \*args/\*\*kwargs.

> - Pembahasan detail mengenai opsional / keyword parameter ada di chapter [Function ➜ Positional, Optional, Keyword Arguments](/basic/positional-optional-keyword-argument)
> - Pembahasan detail mengenai args dan kwargs ada di chapter [Function ➜ Args & Kwargs](/basic/args-kwargs)

Contoh constructor overloading menggunakan opsional parameter:

```python
class Mountain:
    def __init__(self, name = "", region = "", elevation = 0):
        self.name = name
        self.region = region
        self.elevation = elevation
    
    def info(self):
        print(f"name: {self.name}")
        print(f"region: {self.region}")
        print(f"elevation: {self.elevation}m")

mount_everest = Mountain("Everest", "Asia", 8848)
mount_everest.info()

mount_kilimanjaro = Mountain("Kilimanjaro", "Africa")
mount_kilimanjaro.elevation = 5895
mount_kilimanjaro.info()

mount_aconcagua = Mountain(name="Aconcagua", elevation=6961)
mount_aconcagua.region = "South America"
mount_aconcagua.info()

mount_kosciuszko = Mountain()
mount_kosciuszko.name = "Kosciuszko"
mount_kosciuszko.region = "Australia"
mount_kosciuszko.elevation = 2228
mount_kosciuszko.info()
```

Penjelasan:

- Konstruktor class `Mountain` didesain memiliki 3 buah parameter yang kesemuanya memiliki nilai default.
- Variabel object `mount_everest` dibuat dengan dengan mengisi kesemua parameter konstruktornya.
- Variabel object `mount_kilimanjaro` dibuat dengan dengan hanya mengisi dua parameter pertama konstruktor.
- Variabel object `mount_aconcagua` dibuat dengan dengan mengisi parameter `name` dan `elevation` saja pada pemanggilan konstruktor.
- Variabel object `mount_kosciuszko` dibuat dengan tanpa diikuti dengan argument parameter. 

Silakan coba explore dengan mempraktekan penggunaan \*args / \*\*kwargs pada konstruktor.

## A.35.4. Constructor dengan return type `None`

Constructor dipanggil saat inisialisasi object, maka bisa dibilang bahwa constructor tersebut selalu mengembalikan tipe data bertipe class dimana constructor tersebut dideklarasikan.

Dalam pembuatan konstruktor, tidak perlu menuliskan return type maupun return statement.

Meski demikian, sebenarnya ada 1 lagi bentuk penulisan konstruktor, yaitu dengan ditambahkan tipe data `None` dibelakangnya, dan ini diperbolehkan. Contohnya:

```python
class Mountain:
    def __init__(self, name = "", region = "", elevation = 0) -> None:
        self.name = name
        self.region = region
        self.elevation = elevation
```

Kode di atas adalah ekuivalen dengan kode berikut:

```python
class Mountain:
    def __init__(self, name = "", region = "", elevation = 0):
        self.name = name
        self.region = region
        self.elevation = elevation
```

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/class-constructor">
        github.com/novalagung/dasarpemrogramanpython-example/../class-constructor
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [OOP ➜ Class & Object](/basic/class-object)
- [OOP ➜ Instance Method](/basic/instance-method)
- [OOP ➜ Class Method](/basic/class-method)
- [OOP ➜ Static Method](/basic/static-method)
- [OOP ➜ Abstract Method](/basic/abstract-method)
- [OOP ➜ Data Class](/basic/dataclass)

### ◉ Referensi

- https://docs.python.org/3/tutorial/classes.html

</div>
