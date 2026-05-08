---
sidebar_position: 2
title: A.2. Run Python di VSCode
sidebar_label: A.2. Run Python di VSCode
description: Tutorial cara menjalankan program Python
keywords: [python interpreter, python compiler, run program di python, run python]
---

Chapter ini membahas tentang pilihan opsi cara run program Python di Visual Studio Code.

## A.2.1. Cara run program Python di VSCode

### ◉ Menggunakan command `python`

Command ini sudah kita terapkan pada chapter [Program Pertama ➜ Hello Python](/basic/hello-python), cara penggunaannya cukup mudah, tinggal jalankan saja command di terminal.

```bash
# python <nama_file_program>
python main.py
```

### ◉ Menggunakan tombol run `▶`

Cara run program ini lebih praktis karena tinggal klik-klik saja. Di toolbar VSCode sebelah kanan atas ada tombol `▶`, gunakan tombol tersebut untuk menjalankan program.

![hello world python](img/hello-python-3.png)

### ◉ Menggunakan jupyter `code cells`

Untuk menerapkan cara ini, tambahkan kode `#%%` atau `# %%` pada baris di atas statement `print("hello python")` agar blok kode di bawahnya dianggap sebagai satu `code cell`.

![hello world python](img/hello-python-4.png)

Setelah itu, muncul tombol `Run Cell`, klik untuk run program.

![hello world python](img/hello-python-5.png)

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Chapter relevan lainnya

- [Program Pertama ➜ Hello Python](/basic/hello-python)

### ◉ Referensi

- https://code.visualstudio.com/docs/python/python-tutorial
- https://code.visualstudio.com/docs/datascience/jupyter-notebooks
- https://docs.python.org/3/using/cmdline.html

</div>
