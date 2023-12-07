---
sidebar_position: 39
title: A.39. Python OOP ➜ Class Inheritance
sidebar_label: A.39. OOP ➜ Class Inheritance (WIP)
---

Chapter ini membahas tentang salah satu aspek penting dalam pemrograman OOP, yaitu inheritance atau pewarisan sifat, dimana sifat yang dimaksud adalah property seperti attribute, method, dan lainnya.

## A.39.1. Pengenalan Inheritance

Untuk mewujudkan inheritance setidaknya dua buah class dibutuhkan.

- Super class / parent class, yaitu class yang property-nya ingin diwariskan atau diturunkan ke class dibawahnya.
- Sub class / derrived class, yaitu class yang mewarisi property dari parent class.

Misalkan, ada sebuah class bernama `Vehicle`. Class `Vehicle` atau kendaraan ini memiliki beberapa property diantaranya adalah:

1. Constructor
1. Class attribute `note`
1. Instance attribute `name`
1. Instance attribute `number_of_wheels`
1. Instance method `drive_sound()`

Class `Vehicle` kemudian dijadikan sebagai parent class `ElectricCar`.

Class `ElectricCar` secara desain tidak memiliki property. Namun karena dia merupakan *sub class* dari `Vehicle` maka secara *implicit* mewarisi semua property yang ada di class `Vehicle`. Efeknya, dari object class `ElectricCar`, kita bisa mengakses property class `Vehicle`.

Selain itu, class `ElectricCar` memiliki satu buah method bernama `info()` yang isinya adalah menampilkan data property yang diwarisi oleh class `Vehicle`

Ilustrasi diagram UML nya seperti ini:

![Python Inheritance](img/class-inheritance-1.png)

Dari gambar di atas, secara teori, object yang dibuat dari class `ElectricCar` bisa mengakses property class itu sendiri serta property lain yang diwarisi super class.

Sedangkan object dari class `Vehicle` hanya bisa mengakses property class itu sendiri saja.

Ok, sekarang mari kita terapkan skenario di atas di Python. Definisikan class `Vehicle` dan class `ElectricCar` beserta isi masing-masing property.

```python
class Vehicle:
    note = "class to represent a car"
    
    def __init__(self, name = "common vehicle", number_of_wheels = 4):
        self.name = name
        self.number_of_wheels = number_of_wheels
    
    def drive_sound(self):
        return "vroom vroooommmm"

class ElectricCar(Vehicle):
    def info(self):
        print(v2.name, "has", v2.number_of_wheels, "wheels. engine sound:", v2.drive_sound())
```

Pada deklarasi class `ElectricCar` penulisannya ada yang unik. Nama class ditulis dengan notasi `ElectricCar(Vehicle)` yang artinya, class `ElectricCar` dideklarasikan dengan super class adalah class `Vehicle`.

:::info

Notasi umum penulisan inheritance kurang lebih seperti ini:

```python
class Super Class:
    pass

class SubClass(Super Class):
    pass
```

:::

Dari dua class yang telah dideklarasikan, selanjutnya buat beberapa instance object lalu akses property-nya. Setelah itu coba run program dan lihat outputnya.

```python
v1 = Vehicle()
print(v1.name, "has", v1.number_of_wheels, "wheels. engine sound:", v1.drive_sound())
# output ➜ common vehicle has 4 wheels. engine sound: vroom vroooommmm

v2 = ElectricCar()
v2.name = "electric car"
print(v2.name, "has", v2.number_of_wheels, "wheels. engine sound:", v2.drive_sound())
# output ➜ electric car has 4 wheels. engine sound: vroom vroooommmm

v3 = ElectricCar()
v3.name = "electric car"
v3.info()
# output ➜ electric car has 4 wheels. engine sound: vroom vroooommmm
```

Bisa dilihat dari contoh, bahwa property milik class `Vehicle` bisa diakses via instance object yang dibuat dari class itu sendiri maupun dari object yang dibuat dari subclass `ElectricCar`.

## A.39.2. Constructor Overriding

*Overriding* adalah istilah pemrograman OOP untuk menimpa/mengganti suatu method dengan method baru yang nama dan strukturnya sama tapi isinya berbeda.

Pada section ini, teknik overriding kita akan terapkan pada constructor. Constructor `Vehicle` yang secara *implicit* diwariskan ke class `ElectricCar` pada subclass tersebut kita replace dengan constructor baru, seperti ini:

```python
class Vehicle:
    note = "class to represent a car"
    
    def __init__(self):
        self.name = "common vehicle"
        self.number_of_wheels = 4

    def drive_sound(self):
        return "vroom vroooommmm"

class ElectricCar(Vehicle):
    def __init__(self):
        self.name = "electric car"

    def info(self):
        print(v2.name, "has", v2.number_of_wheels, "wheels. engine sound:", v2.drive_sound())

v1 = Vehicle()
print(v1.name, "has", v1.number_of_wheels, "wheels. engine sound:", v1.drive_sound())

v2 = ElectricCar()
print(v2.name, "has", v2.number_of_wheels, "wheels. engine sound:", v2.drive_sound())

v3 = ElectricCar()
v3.info()
```

Secara teori, idealnya program di atas bisa jalan normal. Perbedaan kode ini dibanding sebelumnya ada di bagian konstruktor class `ElectricCar`. Disitu untuk setiap object baru yang dibuat, nilai attribute `name`-nya diisi dengan string `electric car`.

Ok sekarang coba run program, dan lihat hasilnya:

![Python Inheritance](img/class-inheritance-2.png)

Statement pengaksesan property object `v1` muncul, namun error muncul pada pengaksesan object `v2`, dengan pesan error kurang lebih isinya menginformasikan bahwa class `ElectricCar` tidak memiliki attribute `number_of_wheels`. Aneh, padahal secara teori property tersebut diwariskan oleh super class yaitu `Vehicle`, namun setelah ditambahkan kode constructor baru yang meng-override constructor parent class, programnya malah error.

Perlu diketahui bahwa penerapan operasi override mengakibatkan kode pada super class benar-benar dihapus dan diganti dengan kode baru. Pada contoh yang sudah ditulis, di konstruktor `Vehicle` ada dua buah property didekalrasikan, yaitu `name` dan `number_of_wheels`. Sedangkan pada class `ElectricCar`, hanya property `name` dideklarasikan. 

```python
class Vehicle:
    def __init__(self):
        self.name = "common vehicle"
        self.number_of_wheels = 4

class ElectricCar(Vehicle):
    def __init__(self):
        self.name = "electric car"
```

Constructor baru milik class `ElectricCar` menimpa constructor milik super class-nya. Dan pada constructor baru ini property `number_of_wheels` tidak dieklarasikan. Efeknya, property tersebut menjadi tidak ada, menyebabkan pengaksesannya menyebabkan error berikut:

```
AttributeError: 'ElectricCar' object has no attribute 'number_of_wheels'
```

Solusi permasalahan di atas ada pada penjelasan berikut:

## A.39.3. Fungsi `super()`

Fungsi `super()` adalah salah satu method bawaan python, yang ketika diakses di dalam instance method maka pemanggilannya mengarah ke variabel `self` milik super class (bukan variabel `self` milik class itu sendiri).

Misalnya statement `super()` ditulis pada constructor class `ElectricCar`, maka dari fungsi tersebut kita mendapatkan akses ke object `self` milik super class yaitu class `Vehicle`. Kemudian dari object `self`, property super class bisa diakses dengan mudah. Termasuk konstruktor super class juga bisa diakses.

Ok, sekarang mari coba tambahkan statement `super()` pada constructor `ElectricCar`, lalu dari nilai balik fungsi, chain lagi dengan mengakses constructor `__init__()` milik super class.

Terapkan perubahan tersebut lalu jalankan ulang program. Error tidak akan muncul.

```python
class Vehicle:
    note = "class to represent a car"

    def __init__(self):
        self.name = "common vehicle"
        self.number_of_wheels = 4

    def drive_sound(self):
        return "vroom vroooommmm"

class ElectricCar(Vehicle):
    def __init__(self):
        super().__init__()
        self.name = "electric car"

    def info(self):
        print(v2.name, "has", v2.number_of_wheels, "wheels. engine sound:", v2.drive_sound())

v1 = Vehicle()
print(v1.name, "has", v1.number_of_wheels, "wheels. engine sound:", v1.drive_sound())
# output ➜ common vehicle has 4 wheels. engine sound: vroom vroooommmm

v2 = ElectricCar()
print(v2.name, "has", v2.number_of_wheels, "wheels. engine sound:", v2.drive_sound())
# output ➜ electric car has 4 wheels. engine sound: vroom vroooommmm

v3 = ElectricCar()
v3.info()
# output ➜ electric car has 4 wheels. engine sound: vroom vroooommmm
```

Jika dianalogikan, bisa dibilang kode di atas adalah ekuivalen dengan kode ke-2 berikut:

- Kode setelah perubahan:

    ```python
    class Vehicle:
        def __init__(self):
            self.name = "common vehicle"
            self.number_of_wheels = 4

    class ElectricCar(Vehicle):
        def __init__(self):
            super().__init__()
            self.name = "electric car"
    ```

- Ekuivalen dengan kode berikut:

    ```python
    class Vehicle:
        def __init__(self):
            self.name = "common vehicle"
            self.number_of_wheels = 4

    class ElectricCar(Vehicle):
        def __init__(self):
            # statement berikut terpanggil dari __init__() milik super class
            self.name = "common vehicle" 
            self.number_of_wheels = 4

            # kemudian statement berikut dieksekusi setelahnya
            self.name = "electric car"
    ```

Sampai sini semoga cukup jelas.

## A.39.4. Method Overriding

Tidak hanya constructor, method superclass juga bisa di-override dengan method baru. Pada kode berikut, method `drive_sound()` di-override dengan isi mengembalikan nilai string berbeda, yang sebelumnya `vroom vroooommmm` kini menjadi `zzzzzzz`.

Coba aplikasikan perubahan berikut lalu run ulang programnya.

```python
class Vehicle:
    note = "class to represent a car"
    
    def __init__(self):
        self.name = "common vehicle"
        self.number_of_wheels = 4
    
    def drive_sound(self):
        return "vroom vroooommmm"
    
class ElectricCar(Vehicle):
    
    def __init__(self):
        super().__init__()
        self.name = "electric car"

    def info(self):
        print(v2.name, "has", v2.number_of_wheels, "wheels. engine sound:", v2.drive_sound())
    
    def drive_sound(self):
        return "zzzzzzz"
 
v1 = Vehicle()
print(v1.name, "has", v1.number_of_wheels, "wheels. engine sound:", v1.drive_sound())
# output ➜ common vehicle has 4 wheels. engine sound: vroom vroooommmm

v2 = ElectricCar()
v2.info()
# output ➜ electric car has 4 wheels. engine sound: zzzzzzz
```

Bisa dilihat pada statement ke-2, sekarang bunyi mesin berubah menjadi `zzzzzzz`.

Pada kasus override kali ini, method `super()` sengaja tidak digunakan, karena memang tidak perlu. Berbeda dengan kasus sebelumnya (constructor overriding) jika constructor super class tidak dipanggil efeknya property `number_of_wheels` menjadi tidak dikenali.
