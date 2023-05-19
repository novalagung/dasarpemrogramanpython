---
sidebar_position: 3
title: A.3. Komentar
sidebar_label: A.3. Komentar
description: Tutorial belajar penerapan komentar di Python
keywords: [komentar python, multi line komentar python]
faqs:
  - question: Apa itu komentar di Python?
    answer: Komentar adalah sebuah statement yang tidak akan dijalankan oleh interpreter. Biasanya digunakan untuk menambahkan keterangan atau men-disable statements agar tidak dieksekusi saat run program.
  - question: Komentar di Python
    answer: Di Python, komentar menggunakan karakter \# untuk jenis komentar 1 baris, dan karakter """ untuk jenis komentar multi baris.
---

Komentar adalah sebuah statement yang tidak akan dijalankan oleh interpreter. Biasanya digunakan untuk menambahkan keterangan atau men-disable statements agar tidak dieksekusi saat run program.

Python mengenal dua jenis komentar, yaitu komentar satu baris dan multi-baris.

## A.3.1. Komentar satu baris

Karakter `#` digunakan untuk menuliskan komentar, contoh:

```python
# ini adalah komentar
print("halo,")
print("selamat pagi!") # ini juga komentar

# println("statement ini tidak akan dipanggil")
```

Jika di-run, outputnya:

![komentar di python](img/komentar-1.png)

## A.3.2. Komentar multi-baris

Komentar multi-baris bisa diterapkan melalui dua cara:

### ◉ Komentar menggunakan `#`

```python
# ini adalah komentar
# ini juga komentar
# komentar baris ke-3
```

### ◉ Komentar menggunakan `"""`

Tulis komentar multi baris kemudian apit menggunakan karakter `"""`. Contoh:

```python
"""
ini adalah komentar
ini juga komentar
komentar baris ke-3
"""
```

Untuk penerapan `"""` pada komentar satu baris bisa dengan cara:

```python
"""ini adalah komentar"""
```

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/komentar">
        github.com/novalagung/dasarpemrogramanpython-example/../komentar
    </a>
</pre>

### ◉ Referensi

- https://docs.python-guide.org/writing/documentation/

</div>
