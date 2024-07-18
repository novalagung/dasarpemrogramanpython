---
sidebar_position: 31
title: A.31. Python None
sidebar_label: A.31. None
---

Pada chapter ini kita akan belajar tentang object special bernama `None`.

## A.31.1. Pengenalan `None`

`None` merupakan object bawaan Python yang umumnya digunakan untuk merepresentasikan nilai kosong atau *null*.

Ketika suatu variabel berisi data yang nilainya bisa kosong, umumnya sebelum variabel tersebut digunakan, dilakukan pengecekan terlebih dahulu menggunakan seleksi kondisi untuk memastikan apakah nilainya benar-benar kosong atau tidak.

Sebagai contoh, pada kode berikut, dipersiapkan sebuah fungsi bernama `inspec_data`, tugasnya mengecek apakah variabel memiliki nilai atau tidak.

```python
def inspec_data(data):
    if data is None:
        print("data is empty. like very empty")
    else:
        print(f"data: {data}, type: {type(data).__name__}")

data = 0
inspec_data(data)
# output ➜ data: 0, type: int

data = ""
inspec_data(data)
# output ➜ data: , type: str

data = None
inspec_data(data)
# output ➜ data is empty. like very empty

class Car:
    def __init__(self):
        self.name = ""

data = Car()
inspec_data(data)
# output ➜ data: <__main__.Car object at 0x000001E6B38F60F0>, type: Car
```

Bisa dilihat pada program di atas output tiap statement adalah berbeda-beda sesuai tipe datanya.

- Ketika variabel `data` berisi `0` maka variabel tersebut tidak benar-benar kosong, melainkan berisi angka `0`.

- Karakteristik yang sama juga berlaku ketika variabel berisi string kosong `""`, meskipun ketika di-print tidak muncul apa-apa, variabel tersebut sebenarnya berisi tipe data string namun tanpa isi (string dengan panjang nol). Maka variabel tersebut sebenarnya tidak benar-benar kosong.

- Barulah ketika variabel isinya data `None` maka dianggap benar-benar kosong.

> Kode di atas berisi penerapan salah satu special name, yaitu attribute `__name__` milik class `type`.
>
> Pembahasan detail mengenai special name ada di chapter [Special Names ➜ Attribute __name__ milik class type](/basic/special-names#a294-attribute-__name__-milik-class-type)

## A.31.2. Penggunaan `is`

Ketika memeriksa apakah sebuah objek bernilai `None` atau tidak, disarankan untuk menggunakan `is` daripada `==`.
Ini dikarenakan sifat dari operator `==` yang memanggil fungsi `__eq__` dari objek yang diperiksa.
Hal ini dapat menyebabkan kesalahan dalam pemeriksaan objek terhadap `None`.

Sebagai contoh, pada kode berikut, objek `f` memiliki tipe `Foo`, yang artinya objek tersebut tidak kosong. Namun karena fungsi `__eq__` dari kelas `Foo` telah di-overload untuk selalu mengembalikan `True`, maka pemeriksaan `f == None` akan mengembalikan `True`.
```python
class Foo:
    def __eq__(self, other):
            return True

f = Foo()
f == None
# output ➜ True
f is None
# output ➜ False
```
> Contoh diambil dari https://stackoverflow.com/a/26611/23542056

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/none">
        github.com/novalagung/dasarpemrogramanpython-example/../none
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [Tipe Data](/basic/tipe-data)
- [Special Names](/basic/special-names)

### ◉ Referensi

- https://docs.python.org/3/c-api/none.html

</div>
