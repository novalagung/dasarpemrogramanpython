---
sidebar_position: 33
title: A.33. Python OOP ➜ Property Visibility
sidebar_label: A.33. OOP ➜ Property Visibility (WIP)
---

Visibility atau privacy dalam konteks OOP adalah penentuan apakah property (entah itu attribute atau method) bisa diakses secara public atau hanya bisa diakses dari dalam class.

Pada chapter ini kita akan membahas penerapannya di Python.

## A.33.1. Penerapan visibility/privacy

Python dari sisi API kode yang tersedia, sebenarnya tidak memiliki dukungan terhadap penerapan visibility property instance class. Semua attribute dan method adalah public di Python.

> Property public maksudnya adalah property tersebut bisa diakses via instance object atau dari luar block `class`.

Meski demikian, ada beberapa praktik yang umum diterapkan untuk menandai bahwa suatu method atau attribute adalah private, yaitu menggunakan teknik *name mangling* dimana nama attribute atau method ditulis diawali dengan 2 karakter underscore, misalnya `__name`, `__list_items`, dan sejenisnya.

Penamaan tersebut tidak benar-benar membuat visibility property menjadi private, melainkan hanya sebagai penanda saja. Property sendiri tetap bisa diakses secara publik.

Mari kita coba praktekan. Pertama siapkan project baru dengan struktur seperti ini:

<div style={{ width: '250px' }}>

```bash title="Project structure"
property-visibility/
│─── models/
|    │─── __init__.py
|    │─── company.py
|    └─── product.py
└─── main.py
```

</div>
