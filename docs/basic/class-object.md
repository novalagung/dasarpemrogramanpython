---
sidebar_position: 30
title: A.30. Python Class & Object
sidebar_label: A.30. Class & Object
---

Python mendukung paradigma pemrograman berbasis object (OOP) via implementasi Class dan Object API. Pada chapter ini kita akan mempalajari konsep dasar beserta penerapannya.

## A.30.1. Penerapan Class

Class adalah blueprint untuk mencetak variabel object. Python memfasilitasi pembuatan class dengan keyword `class`.

Cara termudah memahami hubungan antara class dan object adalah dengan analogi. Dimisalkan ada class bernama `Car` dibuat. Class tersebut kemudian digunakan untuk mendeklarasikan 3 buah variabel bernama `bmw_m3_gtr`, `mazda_rx8`, dan `audi_le_mans`. Ketiga object tersebut tipe datanya adalah class `Car`.

![Python Class & object](img/class-object-1.png)

Cara deklarasi class yaitu dengan menggunakan keyword `class` diikuti dengan nama class yang diinginkan. Lalu didalamnya perlu dideklarasikan sebuah fungsi dengan skema `__init__(self)` dengan isi adalah deklarasi attribute. Contoh:

```python
class Car:
    def __init__(self):
        self.name = ""
        self.manufacturer = ""
        self.year = 0
```

Pada kode di atas, class `Car` dibuat memiki 3 buah attribute, yaitu `name`, `manufacturer`, dan `year`. Nantinya, variabel object yang dibuat dari class tersebut memiliki 3 attribute sesuai dengan yang dideklarasikan.

> Fungsi `__init__(self)` disebut dengan method konstruktor. Kita akan kupas lebih detail mengenai konstruktor di chapter [Property ➜ Method](/basic/class-method)

### ◉ Deklarasi class tanpa attribute

Dengan memanfaatkan keyword `pass` suatu class bisa dideklarasikan tanpa memiliki attribute. Penerapannya seperti ini:

```python
class Car:
    def __init__(self):
        pass
```

Atau bisa juga seperti ini:

```python
class Car:
    pass
```

> Lebih detailnya mengenai keyword `pass` dibahas pada chapter terpisah, yaitu [Function ➜ Keyword pass](/basic/function#a225-keyword-pass).

## A.30.2. Pembuatan Instance object

Object atau instance object merupakan variabel yang dibuat dari class. Cara pembuatannya adalah dengan memanggil nama class diikuti kurung fungsi `()` (seperti pemanggilan fungsi) kemudian menampung nilai baliknya.

> Ada banyak istilah lain penyebutan variabel object, diantaranya: *instance*, *instance variable*, *instance object*, dan lainnya. Jangan sampai bingung, kesemua istilah tersebut maksudnya sama.

Contoh deklarasi class `Person` beserta pembuatan variabel object bernama `person1`:

```python
class Person:
    def __init__(self):
        self.first_name = ""
        self.last_name = ""

person1 = Person()
print(f"instance object: {person1}")
print(f"type: {type(person1)}")
```

Penjelasan:

- Class `Person` dideklarasikan memiliki dua buah attribute, yaitu `first_name` dan `last_name`.
- Class `Person` dipanggil seperti pemanggilan fungsi (via syntax `Person()`) hasilnya adalah variabel object bertipe `Person` yang ditampung ke variabel `person1`.

Output program:

![Python Class & object](img/class-object-2.png)

Dari output program, terlihat bahwa tipe data variabel `person1` adalah class `__main__.Person`. Syntax tersebut maksudnya adalah tipe data class `Person` yang deklarasinya ada di file `__main__` atau file entrypoint eksekusi program.

Contoh lainnya pembuatan instance object dari class lainnya yang telah dibuat:

```python
class Car:
    def __init__(self):
        self.name = ""
        self.manufacturer = ""
        self.year = 0

car1 = Car()
car2 = Car()
car3 = Car()
```

## A.30.3. Property ➜ Attribute

Class memiliki property salah satunya adalah attribute. Attribute sendiri merupakan variabel yang terasosiasi dengan class, jadi pengaksesannya harus lewat class dan/atau instance object.

Sebelumnya kita telah membuat class bernama `Car` yang memiliki 3 attribute berikut:

- `name` untuk menyimpan informasi nama/seri mobil
- `manufacturer` untuk menyimpan informasi manufaktur atau pembuat mobil
- `year` untuk menyimpan informasi tahun rilis mobil

Cara deklarasi attribute mirip seperti deklarasi variabel, hanya saja dalam penulisannya diawali statement `self.` yang penulisannya harus ada di dalam body fungsi `__init__(self)`.

Untuk pengaksesan attribute sendiri bisa dilakukan lewat instane object yang dibuat dari class dengan notasi pengaksesan: `<variabel>.<attribute>`.

Contoh:

```python
class Car:
    def __init__(self):
        self.name = ""
        self.manufacturer = ""
        self.year = 0

car1 = Car()
print(f"car1 name: {car1.name}")
print(f"car1 manufacturer: {car1.manufacturer}")
print(f"car1 year: {car1.year}")
```

![Python Class & object](img/class-object-3.png)

Terlihat ketiga attribute class `Car` untuk variabel `car1` adalah sesuai dengan nilai default, yaitu string kosong `""` untuk attribute `name` & `manufacturer`, dan `0` untuk attribute `year`.

Lanjut ke praktek berikutnya, sekarang buat 3 buah variabel object dari class `Car` kemudian isi attribute-nya. Variabel yang dibuat adalah `bmw_m3_gtr`, `mazda_rx8`, dan `audi_le_mans`.

![Python Class & object](img/class-object-4.png)

Bentuk penerapannya dalam kode Python kurang lebih seperti ini:

```python
car1 = Car()
car1.name = "M3 GTR"
car1.manufacturer = "BMW"
car1.year = 2001
print(f"Car name: {car1.manufacturer} {car1.name}\nYear released: {car1.year}\n")

car2 = Car()
car2.name = "RX-8"
car2.manufacturer = "Mazda"
car2.year = 2002
print(f"Car name: {car2.manufacturer} {car2.name}\nYear released: {car2.year}\n")

car3 = Car()
car3.name = "Le Mans Quattro"
car3.manufacturer = "Audi"
car3.year = 2003
print(f"Car name: {car3.manufacturer} {car3.name}\nYear released: {car3.year}\n")
```

Run program untuk melihat outpunya:

![Python Class & object](img/class-object-5.png)

> Class jika dilihat dari struktur datanya ada kemiripan dengan dictionary. Class memiliki attribute name dan value sedangkan dictionary memiliki key dan value. 
>
> Perbedaan keduanya: dictionary key-nya bisa dikelola secara dinamis; sedangkan pada class, nama attribute-nya adalah fixed.

## A.30.4. Macam-macam attribute

Sampai sini kita telah belajar tentang attribute. Sebenarnya Python mengenal 2 jenis attribute yaitu instance attribute dan class attribute. Yang telah kita pelajari adalah instance attribute.

Perbedaan antara instance attribute vs class attribute nantinya dibahas pada chapter terpisah, yaitu [Class ➜ Attribute](/basic/class-attribute).

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/class-object">
        github.com/novalagung/dasarpemrogramanpython-example/../class-object
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [Class ➜ Method](/basic/class-method)
- [Class ➜ Attribute](/basic/class-object)

### ◉ Referensi

- https://docs.python.org/3/tutorial/classes.html

</div>
