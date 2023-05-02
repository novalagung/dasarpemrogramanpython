---
sidebar_position: 2
title: A.2. Run Python di VSCode
sidebar_label: A.2. Run Python di VSCode
---

Chapter ini membahas tentang pilihan opsi cara run program Python di Visual Studio Code.

## A.2.1. Cara run program Python di VSCode

### ◉ Menggunakan command `python`

Cara ini sudah kita terapkan pada chapter [Program Pertama → Hello Python](/basic/hello-python), dan caranya cukup mudah, tinggal jalankan saja command berikut di terminal.

```bash
# python <nama_file_program>
python main.py
```

### ◉ Menggunakan tombol run `▶`

Di toolbar sebelah kanan atas ada tombol `▶` yang bisa digunakan untuk run program.

![hello world python](img/hello-python-3.png)

### ◉ Menggunakan jupyter `code cells`

Pertama tambahkan kode `#%%` pada baris di atas statement `print("hello python")`, dengan ini maka blok kode dianggap sebagai `code cell`.

![hello world python](img/hello-python-4.png)

Setelah itu, muncul tombol `Run Cell`, klik untuk run program.

![hello world python](img/hello-python-5.png)

## Catatan chapter 📑

### ◉ Chapter relevan lainnya

- [Program Pertama → Hello Python](/basic/hello-python)

### ◉ Referensi

- https://code.visualstudio.com/docs/python/python-tutorial
- https://code.visualstudio.com/docs/datascience/jupyter-notebooks
- https://docs.python.org/3/using/cmdline.html
