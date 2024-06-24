---
sidebar_position: 39
title: A.39. Python OOP ➜ Static Method
sidebar_label: A.39. OOP ➜ Static Method
---

Chapter ini membahas tentang static method beserta penggunaan dan perbedaannya dibanding jenis method lainnya.

## A.39.1. Pengenalan static method

Telah kita pelajari bahwa suatu fungsi agar dikenali sebagai method harus dideklarasikan di dalam block `class` dan memiliki parameter implicit `self` (untuk instance method) dan `cls` (untuk class method).

Selain dua method tersebut, ada lagi jenis method lain bernama static method atau method statis, yang ciri khasnya adalah memiliki decorator `@staticmethod` dan tidak memiliki parameter *implicit* `self` maupun `cls`.

Static method bisa diakses via instance object maupun via class. Contoh penerapannya bisa dilihat pada kode berikut:

```python
class Person:

    def __init__(self, name = ""):
        self.name = name

    def info(self):
        print(f"{self.name}")

    @classmethod
    def create(cls, name = ""):
        obj = cls()
        obj.name = name
        return obj
    
    @staticmethod
    def say_hello():
        print("hello")
    
    @staticmethod
    def say_something(message, name = None):
        if name != None:
            print(f"{name} said: {message}")
        else:
            print(message)

p1 = Person.create("Kassandra")
p1.say_hello()
# output ➜ hello

Person.say_hello()
# output ➜ hello

p2 = Person("Edward Kenway")
p2.say_something("hello folks! #1")
# output ➜ hello folks! #1

p2.say_something("hello folks! #2", p2.name)
# output ➜ Edward Kenway said: hello folks! #2

Person.say_something("hello folks! #3")
# output ➜ hello folks! #3
```

Di contoh di atas, ada dua buah static method dideklarasikan:

- Method `say_hello()` dideklarasikan tanpa parameter
- Method `say_something()` dideklarasikan dengan 2 buah parameter

Kedua method tersebut diakses untuk memunculkan 5 buah output berbeda via instance object maupun via class `Person`:

- Method `say_hello()` dipanggil 2x via instance object `edward` dan via class `Person`
- Method `say_something()` juga sama, diakses via instance object 2x dan diakses via class 1x

## A.39.2. Fungsi `staticmethod()`

Python menyediakan fungsi bernama `staticmethod()` yang kegunaannya adalah untuk mengkonversi fungsi biasa (yang dideklarasikan di luar class) menjadi static method milik suatu class.

Sebagai contoh, kode praktek yang telah ditulis kita *refator* menjadi seperti ini. Fungsi `say_hello()` dan `say_something()` dideklarasikan sebagai fungsi biasa. Kemudian dijadikan sebagai class method milik class `Person` via peneparan `staticmethod()`.

```python
def say_hello():
    print("hello")

def say_something(message, name = None):
    if name != None:
        print(f"{name} said: {message}")
    else:
        print(message)

class Person:

    def __init__(self, name = ""):
        self.name = name

    say_hello = staticmethod(say_hello)
    say_something = staticmethod(say_something)

p3 = Person("Arno Victor Dorian")
p3.say_hello()
# output ➜ hello

Person.say_hello()
# output ➜ hello

p4 = Person("Adéwalé")
p4.say_something("hello folks! #1")
# output ➜ hello folks! #1

p4.say_something("hello folks! #2", p4.name)
# output ➜ Adéwalé said: hello folks! #2

Person.say_something("hello folks! #3")
# output ➜ hello folks! #3
```

Cara penerapan fungsi `staticmethod()` adalah dengan cukup memanggilnya untuk membungkus fungsi biasa, lalu nilai baliknya ditampung sebagai attribute class.

```python
class Person:

    def __init__(self, name = ""):
        self.name = name

    say_hello = staticmethod(say_hello)
    say_something = staticmethod(say_something)
```

Attribute `say_hello` dan `say_something` keduanya menjadi static method.

Nama class attribute penampung pemanggilan fungsi `staticmethod()` bisa nama apapun, tidak harus sama dengan nama fungsi aslinya. Contohnya bisa dilihat pada kode berikut, fungsi `say_something()` dijadikan sebagai class method bernama `greet()` milik class `Person`.

```python
def say_something(message, name = None):
    if name != None:
        print(f"{name} said: {message}")
    else:
        print(message)

class Person:

    def __init__(self, name = ""):
        self.name = name

    greet = staticmethod(say_something)

p5 = Person("Ezio Auditore da Firenze")
p5.greet("hello", p5.name)
# output ➜ Ezio Auditore da Firenze said: hello

Person.greet("hello")
# output ➜ hello

say_something("nice to meet you")
# output ➜ nice to meet you
```

Fungsi `say_something()` sendiri tetap bisa digunakan secara normal meskipun telah dijadikan sebagai static method milik class `Person`.

## A.39.3. Summary

Perbedaan antara constructor, instance method, class method, dan static method bisa dilihat di bawah ini:

### ◉ Constructor

- Fungsi dideklarasikan di dalam block `class`
- Deklarasinya menggunakan nama fungsi `__init__()`
- Parameter pertama harus `self`, berisi instance object
- Pemanggilan constructor mengembalikan instance object
- Pengaksesannya via pemanggilan nama class, contoh: `Person()`

### ◉ Instance method

- Fungsi dideklarasikan di dalam block `class`
- Parameter pertama harus `self`, berisi instance object
- Pengaksesan instance method:
  - Via instance object, contoh: `p2.info()`
  - Via class dengan menyisipkan instance object sebagai argument pemanggilan. contoh: `Person.info(p2)`

### ◉ Class method

- Fungsi dideklarasikan di dalam block `class`
- Fungsi memiliki decorator `@classmethod`
- Parameter pertama harus `cls`, berisi tipe data class
- Pengaksesan class method:
  - Via class, contoh: `Person.create()`
  - Via instance object, contoh: `p2.create()`

### ◉ Static method

- Fungsi dideklarasikan di dalam block `class`
- Fungsi memiliki decorator `@staticmethod`
- **Tidak** memiliki implicit parameter `self` maupun `cls`
- Pengaksesan static method:
  - Via class, contoh: `Person.say_hello()`
  - Via instance object, contoh: `p1.say_hello()`

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/static-method">
        github.com/novalagung/dasarpemrogramanpython-example/../static-method
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [OOP ➜ Class & Object](/basic/class-object)
- [OOP ➜ Instance Method](/basic/instance-method)
- [OOP ➜ Constructor](/basic/class-constructor)
- [OOP ➜ Class Method](/basic/class-method)
- [Function ➜ Decorator](/basic/decorator)
- [OOP ➜ Abstract Method](/basic/abstract-method)

### ◉ Referensi

- https://docs.python.org/3/tutorial/classes.html

</div>
