---
sidebar_position: 99
title: A.99. Python Metaclass
sidebar_label: A.99. Metaclass (WIP)
---

Chapter ini membahas tentang tipe data `type`  pembahasan lebih mendetail mengenai tipe data yang 
Pada chapter ini kita akan belajar tentang object special bernama `None`.

## A.99.1. Pengenalan `Type`

`None` merupakan object bawaan Python yang digunakan untuk merepresentasikan nilai kosong atau *null*.

Penggunaannya cukup sederhana, ketika suatu data nilainya bisa kosong, umumnya sebelum data tersebut diproses dilakukan pengecekan terlebih dahulu menggunakan seleksi kondisi.

Sebagai contoh, pada kode berikut, dipersiapkan sebuah fungsi bernama `inspect_data()`, tugasnya mengecek apakah variabel memiliki nilai atau tidak.

```python
def inspec_data(data):
    if data == None:
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

- Karakteristik yang sama juga berlaku ketika variabel berisi string kosong `""`, meskipun ketika di-print tidak muncul apa-apa, variabel tersebut sebenarnya berisi tipe data string namun tanpa isi. maka variabel tersebut tidak benar-benar kosong, melainkan berisi angka `""`.

- Ketika variabel isinya data `None` maka variabel tersebut dianggap benar-benar kosong.

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
