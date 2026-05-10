---
sidebar_position: 28
title: A.28. Python PIP & Dependency Management
sidebar_label: A.28. PIP & Dependency
---

Chapter ini membahas cara menginstall dan menggunakan package milik orang lain (third-party) menggunakan **pip**. Pembahasan ini relevan dengan chapter [Modules](/basic/modules) dan [Packages](/basic/packages), karena package third-party yang diinstall via pip nantinya juga digunakan lewat mekanisme import.

## A.28.1. Apa itu pip?

**pip** adalah package manager resmi untuk Python, digunakan untuk menginstall, mengupdate, dan menghapus package dari [Python Package Index (PyPI)](https://pypi.org/). PyPI adalah repository tempat ribuan package Python open-source tersedia.

Untuk mengecek apakah pip sudah terinstall, jalankan perintah berikut di terminal:

```bash
pip --version
```

Jika belum terinstall, bisa diinstall via:

```bash
python -m ensurepip --upgrade
```

## A.28.2. Menginstall package dengan `pip install`

Cara paling dasar menginstall package adalah menggunakan perintah `pip install` diikuti nama package.

```bash
pip install requests
```

Perintah di atas menginstall package `requests` beserta dependensinya.

Beberapa opsi yang sering digunakan:

```bash
# install versi spesifik
pip install requests==2.31.0

# install dengan versi minimal
pip install "requests>=2.28.0"

# install multiple package
pip install requests pandas numpy

# install dari file requirements.txt
pip install -r requirements.txt
```

### ◉ Menggunakan `pip` via Python module

Alternatif lain adalah memanggil pip melalui module Python, cara ini lebih direkomendasikan karena menghindari konflik environment:

```bash
python -m pip install requests
```

## A.28.3. Mencari package yang terinstall

```bash
# menampilkan semua package yang terinstall
pip list

# mencari package spesifik
pip show requests
```

Output `pip show` menampilkan informasi detail seperti versi, dependensi, dan lokasi install.

## A.28.4. Mengupdate & menghapus package

```bash
# update package ke versi terbaru
pip install --upgrade requests

# menghapus package
pip uninstall requests
```

## A.28.5. File `requirements.txt`

File `requirements.txt` digunakan untuk mendokumentasikan daftar package yang dibutuhkan oleh suatu project. Format penulisannya adalah satu baris per package, dengan versi (opsional).

Contoh `requirements.txt`:

```text
requests==2.31.0
pandas>=2.0.0
numpy
flask==3.0.0
```

Cara install semua package dari file tersebut:

```bash
pip install -r requirements.txt
```

Cara membuat file `requirements.txt` dari environment saat ini:

```bash
pip freeze > requirements.txt
```

Perintah `pip freeze` akan menghasilkan daftar seluruh package yang terinstall beserta versinya. Output ini bisa langsung disimpan ke `requirements.txt` untuk digunakan di environment lain.

## A.28.6. Virtual Environment (`venv`)

Virtual environment berguna untuk mengisolasi dependensi antar project agar tidak saling bertabrakan.

Membuat virtual environment:

```bash
python -m venv venv
```

Mengaktifkan virtual environment:

```bash
# macOS / Linux
source venv/bin/activate

# Windows (Command Prompt)
venv\Scripts\activate

# Windows (PowerShell)
venv\Scripts\Activate.ps1
```

Setelah aktif, gunakan `pip install` seperti biasa — package akan terinstall di dalam virtual environment, bukan global.

Untuk menonaktifkan:

```bash
deactivate
```

### ◉ Best practice

1. Buat virtual environment untuk setiap project
2. Simpan daftar dependensi di `requirements.txt`
3. Jangan commit folder `venv/` ke git — tambahkan ke `.gitignore`
4. Gunakan `python -m pip` daripada `pip` langsung untuk menghindari masalah PATH

## A.28.7. Ringkasan perintah pip

| Perintah | Kegunaan |
|:-|:-|
| `pip install <package>` | Install package |
| `pip install <package>==x.x` | Install versi spesifik |
| `pip install -r requirements.txt` | Install dari file requirements |
| `pip list` | Lihat semua package terinstall |
| `pip show <package>` | Detail package |
| `pip install --upgrade <package>` | Update package |
| `pip uninstall <package>` | Hapus package |
| `pip freeze` | Output semua package + versi |
| `python -m venv <nama>` | Buat virtual environment |

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

Tidak ada source code khusus untuk chapter ini karena semua operasi dilakukan via terminal.

### ◉ Chapter relevan lainnya

- [Modules](/basic/modules)
- [Packages](/basic/packages)

### ◉ Referensi

- https://pip.pypa.io/en/stable/
- https://pypi.org/
- https://docs.python.org/3/tutorial/venv.html

</div>
