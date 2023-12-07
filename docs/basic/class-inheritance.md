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
    
    def __init__(self):
        self.name = "common vehicle"
        self.number_of_wheels = 4
    
    def drive_sound(self):
        return "vroom vroooommmm"

class ElectricCar(Vehicle):
    def info(self):
        print(self.name, "has", self.number_of_wheels, "wheels. engine sound:", self.drive_sound())
```

Pada deklarasi class `ElectricCar` penulisannya ada yang unik. Nama class ditulis dengan notasi `ElectricCar(Vehicle)` yang artinya, class `ElectricCar` dideklarasikan dengan super class adalah class `Vehicle`.

:::info

Notasi umum penulisan inheritance kurang lebih seperti ini:

```python
class SuperClass:
    pass

class SubClass(SuperClass):
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

## A.39.2. Class `object` inheritance

Python memiliki class bawaan bernama `object` yang pada praktiknya otomatis menjadi super class dari semua class bawaan Python maupun custom class yang kita buat sendiri.

Contohnya class `Vehicle` dan `ElectricCar` yang telah dibuat, kedua class tersebut otomatis juga menjadi sub class dari class `object` ini.

Untuk membuktikan, silakan test saja menggunakan kombinasi seleksi kondisi dan fungsi `isinstance()`.

```python
class Vehicle:
    note = "class to represent a car"
    
    def __init__(self):
        self.name = "common vehicle"
        self.number_of_wheels = 4
    
    def drive_sound(self):
        return "vroom vroooommmm"

class ElectricCar(Vehicle):
    def info(self):
        print(self.name, "has", self.number_of_wheels, "wheels. engine sound:", self.drive_sound())

v1 = Vehicle()
if isinstance(v1, Vehicle):
    print("v1 class inherit from class Vehicle")
if isinstance(v1, object):
    print("v1 class inherit from class object")

v2 = ElectricCar()
if isinstance(v2, ElectricCar):
    print("v2 class inherit from class ElectricCar")
if isinstance(v2, Vehicle):
    print("v2 class inherit from class Vehicle")
if isinstance(v2, object):
    print("v2 class inherit from class object")

# output ↓
# 
# v1 class inherit from class Vehicle
# v1 class inherit from class object
# 
# v2 class inherit from class ElectricCar
# v2 class inherit from class Vehicle
# v2 class inherit from class object
```

## A.39.3. Constructor overriding

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
        print(self.name, "has", self.number_of_wheels, "wheels. engine sound:", self.drive_sound())

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

# ... vs ...

class ElectricCar(Vehicle):
    def __init__(self):
        self.name = "electric car"
```

Constructor baru milik class `ElectricCar` menimpa constructor milik super class-nya. Dan pada constructor baru ini property `number_of_wheels` tidak dieklarasikan. Efeknya, property tersebut menjadi tidak ada, menyebabkan pengaksesannya menyebabkan error berikut:

```
AttributeError: 'ElectricCar' object has no attribute 'number_of_wheels'
```

Solusi permasalahan di atas ada pada penjelasan berikut:

## A.39.4. Fungsi `super()`

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
        print(self.name, "has", self.number_of_wheels, "wheels. engine sound:", self.drive_sound())

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

## A.39.5. Alternatif cara mengakses super class constructor

Selain menggunakan `super().__init__()` ada cara lain untuk memanggil konstruktor super class, yaitu dengan mengakses method `__init__()` via class secara langsung. Contoh:

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
        Vehicle.__init__(self)
        self.name = "electric car"

    def info(self):
        print(self.name, "has", self.number_of_wheels, "wheels. engine sound:", self.drive_sound())
```

Pada kode di atas, statement `Vehicle.__init__(self)` adalah ekuivalen dengan kode `super().__init__()` pada program sebelumnya.

Teknik pemanggilan constructor via class ini lebih sering digunakan pada class yang memiliki parent class lebih dari satu. Lebih jelasnya akan kita bahas di bawah.

## A.39.6. Method overriding

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
        print(self.name, "has", self.number_of_wheels, "wheels. engine sound:", self.drive_sound())

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

## A.39.7. Aturan overriding

Setiap bahasa pemrograman yang mengadopsi OOP, aturan penerapan method overriding berbeda satu sama lain. Di Python sendiri, method dianggap meng-override suatu method atau constructor super class jika namanya adalah dideklarasikan sama persis. Perihal apakah skema parameter-nya diubah, atau return type-nya diubah, itu tidak menjadi syarat wajib overriding.

Agar lebih jelas silakan lihat dan pelajari kode berikut:

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
        print(self.name, "has", self.number_of_wheels, "wheels. engine sound:", self.drive_sound())

    def drive_sound(self, sound = "zzzzzzz"):
        return ("friendly sound", sound)

v1 = Vehicle()
print(v1.name, "has", v1.number_of_wheels, "wheels. engine sound:", v1.drive_sound())
# output ➜ common vehicle has 4 wheels. engine sound: vroom vroooommmm

v2 = ElectricCar()
v2.info()
# output ➜ electric car has 4 wheels. engine sound: ('friendly sound', 'zzzzzzz')
```

Method `drive_sound()` di-override dengan diubah skema parameternya, dari yang tidak memiliki parameter sekarang menjadi memiliki parameter `sound`. Selain itu tipe datanya juga diubah, dari yang sebelumnya string menjadi tuple.

## A.39.8. Nested inheritance

Penerapan inheritanya tidak hanya terbatas pada dua buah class saja, melainkan bisa lebih dari 2. Class bisa diturunkan, kemudian turunannya diturunkan lagi, dan seterusnya.

Contoh pengaplikasiannya bisa dilihat pada kode berikut dimana ada class `Vehicle`, `Car`, dan `ElectricCar`; yang ketiganya menjalin hubungan inheritance dengan hirarki seperti ini:

![Class inheritance](img/class-inheritance-3.png)

Source code implementasi:

```python
class Vehicle:
    note = "class to represent a car"

    def __init__(self, name = "common vehicle", number_of_wheels = 4):
        self.name = name
        self.number_of_wheels = number_of_wheels

    def drive_sound(self):
        return "vroom vroooommmm"

class Car(Vehicle):
    pass

class ElectricCar(Car):
    def __init__(self):
        super().__init__(name="electric car")

    def info(self):
        print(self.name, "has", self.number_of_wheels, "wheels. engine sound:", self.drive_sound())

    def drive_sound(self, sound = "zzzzzzz"):
        return ("friendly sound", sound)
        
v1 = Vehicle()
print(v1.name, "has", v1.number_of_wheels, "wheels. engine sound:", v1.drive_sound())
# output ➜ common vehicle has 4 wheels. engine sound: vroom vroooommmm

v2 = Car()
v2.name = "common car"
print(v2.name, "has", v2.number_of_wheels, "wheels. engine sound:", v2.drive_sound())
# output ➜ common car has 4 wheels. engine sound: vroom vroooommmm

v3 = ElectricCar()
v3.info()
# output ➜ electric car has 4 wheels. engine sound: ('friendly sound', 'zzzzzzz')
```

## A.39.9. Special name ➜ class attribute `__mro__`

Setiap class memiliki class attribute `__mro__` yang berisi informasi hirarki class itu sendiri. Attribute tersebut bertipe data tuple. Gunakan perulangan untuk mengiterasi seluruh elemennya.

```python
print("hirarki class ElectricCar:")
for cls in ElectricCar.__mro__:
    print(f"➜ {cls.__name__}")

print("hirarki class Car:")
for cls in Car.__mro__:
    print(f"➜ {cls.__name__}")

print("hirarki class Vehicle:")
for cls in Vehicle.__mro__:
    print(f"➜ {cls.__name__}")

# output ↓
# 
# hirarki class ElectricCar:
# ➜ ElectricCar
# ➜ Car
# ➜ Vehicle
# ➜ object
# 
# hirarki class Car:
# ➜ Car
# ➜ Vehicle
# ➜ object
# 
# hirarki class Vehicle:
# ➜ Vehicle
# ➜ object
```

Hirarki paling atas semua class selalu class `object`.

> MRO sendiri merupakan kependekan dari istilah **Method Resolution Order**

## A.39.10. Multiple inheritance

Suatu class tidak dibatasi hanya bisa menjadi sub class dari 1 buah class saja. Bisa jadi adalah lebih dari 1 class yang diturunkan dengan level hirarki yang sama.

Sebagai contoh kita buat penerapan inheritance dengan hirarki seperti diagram berikut:

![Class inheritance](img/class-inheritance-4.png)

Source code:

```python
class Vehicle:
    note = "class to represent a car"
    
    def __init__(self, name = "common vehicle", number_of_wheels = 4):
        self.name = name
        self.number_of_wheels = number_of_wheels

from typing import Final

ENGINE_ELECTRIC: Final = "electric engine"
ENGINE_PETROL: Final = "petrol engine"
ENGINE_DIESEL: Final = "diesel engine"

class Engine:
    note = "class to represent engine"
    
    def __init__(self, engine_name):
        self.engine_name = engine_name
    
    def drive_sound(self):
        if self.engine_name == ENGINE_ELECTRIC:
            return "zzzzzzz"
        elif self.engine_name == ENGINE_PETROL:
            return "vroom vroooommmm"
        elif self.engine_name == ENGINE_DIESEL:
            return "VROOM VROOM VROOOOMMM"


class ElectricCar(Vehicle, Engine):
    
    def __init__(self):
        Vehicle.__init__(self, "electric car", 4)
        Engine.__init__(self, ENGINE_ELECTRIC)

    def info(self):
        print(self.name, "has", self.number_of_wheels, "wheels. engine sound:", self.drive_sound())

v1 = ElectricCar()
v1.info()
# output ➜ electric car has 4 wheels. engine sound: zzzzzzz
```

Khusus untuk penerapan inheritance dengan lebih dari 1 super class, dianjurkan untuk tidak menggunakan fungsi `super()` untuk mengakses `self` milik parent class, karena `self` disitu merupakan milik class pertama yang di inherit (yang pada contoh adalah class `Vehicle`). Dianjurkan memanggil constructor super class via `ClassName.__init__()` satu-per-satu sesuai kebutuhan.

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/class-inheritance">
        github.com/novalagung/dasarpemrogramanpython-example/../class-inheritance
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [OOP ➜ Class & Object](/basic/class-object)
- [OOP ➜ Instance Method](/basic/instance-method)
- [OOP ➜ Constructor](/basic/class-constructor)
- [OOP ➜ Property Visibility](/basic/property-visibility)
- [OOP ➜ Instance Attribute & Class Attribute](/basic/instance-attribute-class-attribute)
- [OOP ➜ Class Method](/basic/class-method)
- [OOP ➜ Static Method](/basic/static-method)
- [Function ➜ Decorator](/basic/decorator)

### ◉ Referensi

- https://docs.python.org/3/tutorial/classes.html#inheritance
- https://docs.python.org/3/library/stdtypes.html#class.__mro__

</div>
