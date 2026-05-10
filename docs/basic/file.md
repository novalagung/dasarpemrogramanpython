---
sidebar_position: 50
title: A.50. Python File I/O
sidebar_label: A.50. File I/O
---

Pada chapter ini kita akan belajar tentang pengolahan file dan folder, dan beberapa hal relevan lainnya yang masih berhubungan dengan manajemen file & folder.

## A.50.1. Membuka stream file

Di Python, hampir semua operasi file diawali dengan pemanggilan fungsi `open()`, dan diakhiri pemanggilan method `close()` (milik object yang dikembalikan oleh fungsi `open()`).

Fungsi `open()` dalam penggunannya membutuhkan pengisian beberapa parameter:

- Parameter ke-1: nama file.
- Parameter ke-2: mode I/O, ada beberapa mode operasi file, diantaranya:
    - `w` untuk mode tulis dengan posisi kursor ada di baris paling awal. Jadi operasi penulisan bisa menimpa konten yang sudah ada. Selain itu, mode ini membuat isi file otomatis menjadi kosong saat fungsi `open()` dipanggil.
    - `a` untuk mode *append*, yaitu mode tulis dengan posisi kursor sudah di baris paling akhir. Jadi penambahan konten tidak akan menimpa konten sebelumnya, tapi ditambahkan di akhir.
    - `r` untuk mode baca.
- Ada juga parameter opsional lainnya, salah satunya `encoding` yang umum diisi dengan nilai `utf-8`.

Bentuk paling sederhana penerapan operasi buka file:

```python
from pathlib import Path

file_path = Path("file.txt")
f = open(file_path, "w", encoding="utf-8")

# ...

f.close()
```

Kode di atas akan membuka stream I/O file bernama `file.txt`. Jika file tujuan belum ada, maka otomatis dibuatkan oleh Python. Karena `open()` menerima path-like object, kita juga bisa memakai `Path` agar path lebih konsisten. Dari object kembalian fungsi `open()` nantinya kita bisa lakukan banyak jenis operasi file seperti membaca isi file dan menulis konten.

> Parameter ke-1 sebenarnya juga bisa diisi dengan string path biasa misalnya `open("file.txt", "w", encoding="utf-8")`, tetapi pada chapter ini kita lebih sering memakai `Path` supaya penulisan path lebih konsisten dan mudah dibaca.
>
> Untuk pengguna Windows, jika memakai string path, tulis saja karakter dengan meng-escape `\`.<br />Contoh: `"C:\\Users\\novalagung\\Desktop\\file.txt"`

Silakan tulis kode di atas, lalu ganti path-nya dengan current path (atau bisa gunakan `.`), kemudian run programnya. Hasil eksekusi program adalah pembuatan sebuah file baru bernama `file.txt` yang isinya kosong.

![Python file](img/file-1.png)

Mode `w` digunakan disitu, artinya file dibuka dengan mode tulis. Salah satu efek dari penggunaan mode `w` adalah ketika file dibuka isinya pasti dikosongkan terlebih dahulu.

File yang dibuka, wajib untuk selalu ditutup di akhir. Karena membiarkan file tetap terbuka beresiko membuat isi file rusak ketika ada lebih dari 1 pengakses yang melakukan operasi terhadap file tersebut secara bersamaan.

Untuk mengecek apakah file sedang terbuka stream-nya, bisa dengan melihat nilai attribute `closed`.

```python
from pathlib import Path

file_path = Path("file.txt")
f = open(file_path, "w", encoding="utf-8")
print("file is closed:", f.closed)
# output ➜ file is closed: False

# ...

f.close()
print("file is closed:", f.closed)
# output ➜ file is closed: True
```

## A.50.2. Keyword `with`

Ada cara yang lebih efisien dalam operasi buka file agar file otomatis ter-close setelah digunakan, yaitu dengan menggunakan keyword `with` diikuti statement `open()` lalu syntax `as nama_variabel`. Kurang lebih seperti ini penulisannya:

```python
from pathlib import Path

file_path = Path("file.txt")

with open(file_path, "w", encoding="utf-8") as f:
    print("file is closed:", f.closed)
    # output ➜ file is closed: False
    # ...

print("file is closed:", f.closed)
# output ➜ file is closed: True
```

## A.50.3. Menulis file

Operasi penulisan konten ke file dilakukan via method `write()` milik object file. Contoh penerapannya bisa dilihat pada kode berikut, dimana ada method `write()` digunakan 3x untuk menulis karakter string.

```python
from pathlib import Path

file_path = Path("file.txt")

with open(file_path, "w", encoding="utf-8") as f:
    f.write("hello")
    f.write("python\n")
    f.write("how are you?\n")
```

Output program:

![Python file](img/file-2.png)

Program di-run 3x dan isinya tetap sama (tidak menumpuk), ini karena setiap kali statement `open()` dijalankan dengan mode `w`, file akan dikosongkan terlebih dahulu.

## A.50.4. Append konten ke file

Gunakan mode `a` untuk append konten ke file yang isinya bisa saja tidak kosong (agar isi konten tidak ditimpa).

Coba jalankan kode berikut terhadap file `file.txt` yang sebelumnya sudah dibuat. Saat program di-run kondisi file sudah terisi dan tidak dikosongkan terlebih dahulu. Dengan mengeksekusi `write()` disitu maka isi konten akan bertambah terus setiap kali program di-run.

```python
from pathlib import Path

file_path = Path("file.txt")

with open(file_path, "a", encoding="utf-8") as f:
    f.write("happy monday\n")
```

Output program:

![Python file](img/file-3.png)

Bisa dilihat, setiap kali program dieksekusi konten `happy monday\n` bertambah terus.

## A.50.5. Membaca file

Method `readline()` dan `read()` milik object file, keduanya digunakan untuk membaca isi file.

- Method `readline()` akan membaca isi file baris per baris. Pembacaan dimulai dari baris paling atas dan proses pembacaan terjadi setiap kali method `readline()` dipanggil. Ketika method ini mengembalikan string kosong, bisa jadi menandakan semua baris konten file sudah terbaca.

    Disini penulis gunakan kata *bisa jadi* karena ada kasus dimana pada beberapa baris bisa saja memang isinya sengaja kosong.

- Method `read()` akan membaca seluruh isi file. Pemanggilan method ini untuk kedua kalinya pasti mengembalikan string kosong, menandakan semua baris konten file sudah terbaca.

Mari praktekan penggunaan 2 method di atas. Pertama isi file `file.txt` secara manual dengan konten berikut:

```python
hellopython
how are you?
happy monday
```

Kemudian baca isinya per baris menggunakan kode berikut:

```python
from pathlib import Path

file_path = Path("file.txt")

with open(file_path, "a", encoding="utf-8") as f:
    print(f"line 1: {f.readline()}")
    print(f"line 2: {f.readline()}")
    print(f"line 3: {f.readline()}")
    print(f"line 4: {f.readline()}")
    print(f"line 5: {f.readline()}")
```

Output program:

![Python file](img/file-4.png)

Malah error? Kok bisa? Error ini disebabkan karena kita menggunakan mode `a` yang bersifat *append only*. Mode ini tidak dipakai untuk membaca file, jadi ketika method baca dipanggil hasilnya error. Untuk pembacaan file kita perlu mengubah mode menjadi `r`.

```python
from pathlib import Path

file_path = Path("file.txt")

with open(file_path, "r", encoding="utf-8") as f:
    print(f"line 1: {f.readline()}")
    print(f"line 2: {f.readline()}")
    print(f"line 3: {f.readline()}")
    print(f"line 4: {f.readline()}")
    print(f"line 5: {f.readline()}")
```

Output program:

![Python file](img/file-5.png)

Bisa dilihat method `readline()` mengembalikan data per baris dari atas ke bawah dengan jumlah sesuai dengan berapa kali baris method tersebut dipanggil.

Dalam penerapannya, dianjurkan untuk menggunakan method ini dalam perulangan kemudian ditambahkan pengecekan isi konten untuk menandai bahwa konten sudah terbaca semua. Contohnya seperti ini:

```python
from pathlib import Path

file_path = Path("file.txt")

with open(file_path, "r", encoding="utf-8") as f:
    i = 0
    while True:
        line = f.readline()
        if not line:
            break
        print(f"line {i}: {line}")
        i += 1
```

Kode di atas bisa disederhanakan lagi dengan cara langsung mengiterasi object file-nya. Jadi variabel `f` digunakan secara langsung pada statement perulangan. Hal ini bisa dilakukan karena tipe data kembalian fungsi `open()` adalah `TextIOWrapper` dan tipe ini termasuk tipe data yang *iterable*.

```python
from pathlib import Path

file_path = Path("file.txt")

with open(file_path, "r", encoding="utf-8") as f:
    i = 1
    for line in f:
        print(f"line {i}: {line}")
        i += 1
```

> Lebih detailnya mengenai tipe data iterable dibahas pada chapter [Iterator](/basic/iterable-iterator)

Kode yang sudah cukup ringkas di atas bisa disederhanakan lagi dengan cara membungkus tipe data `f` dalam fungsi `enumerate()`. Fungsi ini membuat suatu object yang iterable menjadi memiliki index di setiap element-nya.

```python
from pathlib import Path

file_path = Path("file.txt")

with open(file_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        print(f"line {i+1}: {line}")
```

Jika goal dari program adalah hanya membaca isi file secara menyeluruh, sebenarnya lebih praktis lagi menggunakan method `read()`.

```python
from pathlib import Path

file_path = Path("file.txt")

with open(file_path, "r", encoding="utf-8") as f:
    print(f.read())
```

## A.50.6. Membaca dan menulis dalam 1 sesi

Di awal chapter telah dijelaskan tentang kegunaan mode `w`, `a`, dan `r`. Lalu bagaimana jika ada kebutuhan untuk membaca dan menulis file dalam satu sesi? Jawabannya adalah dengan menambahkan tanda `+` pada mode (jadinya `w+`, `a+`, atau `r+`).

Sebagai contoh, pada program berikut, mode `r+` digunakan. O iya, proses pembacaan file dilakukan 2x ya, penjelasan disertakan dibawahnya.

```python
from pathlib import Path

file_path = Path("file.txt")

with open(file_path, "r+", encoding="utf-8") as f:
    print(f"read:\n{f.read()}")
    f.write("lorem ipsum dolor\n")
    print(f"read:\n{f.read()}")

with open(file_path, "r+", encoding="utf-8") as f:
    print(f"read:\n{f.read()}")
```

Output program:

![Python file](img/file-6.png)

Bisa dilihat di program, block `with` pertama yang berisi operasi baca dan juga tulis tidak menghasilkan error. Namun ada yang aneh, yaitu tepat setelah `lorem ipsum dolor\n` ditulis ke file, proses baca menghasilkan string kosong. Tapi ketika file dibaca lagi menggunakan block `with` baru, isinya sesuai harapan. Jawabannya adalah karena **pergerakan cursor**.

Flow program di atas kurang lebih seperti ini:

1. Cursor awal pembacaan file ada di baris paling awal, karena mode `r+` digunakan.
1. Setelah method `read()` dipanggil, cursor berada di posisi paling akhir.
1. Kemudian `lorem ipsum dolor\n` ditulis ke file, maka text tersebut ada di baris baru di akhir file.
1. Lalu ketika method `read()` dibaca lagi, isinya kosong, karena cursor posisinya sudah ada di baris akhir file.
1. Kemudian ketika file dibaca ulang menggunakan fungsi `open()` dengan block `with` baru, cursor kembali aktif di baris paling awal.
1. Lalu file dibaca, maka seluruh isi konten yang baru dikembalikan.

Mode `w+`, `a+`, dan `r+` kesemuanya bisa digunakan untuk baca dan tulis dalam 1 sesi, dengan perbedaan ada di posisi kursornya aktif dimana. Jika pembaca tertarik untuk mempelajarinya lebih detail, silakan baca diskusi di StackOverflow berikut:

https://stackoverflow.com/questions/1466000/difference-between-modes-a-a-w-w-and-r-in-built-in-open-function/30566011#30566011

## A.50.7. Mengosongkan isi file

Cara mengosongkan file bisa dilakukan dengan mudah menggunakan mode `w`. Buka file menggunakan mode tersebut kemudian langsung `close()` saja. Boleh menggunakan keyword `with` atau bisa langsung sebaris statement. Contoh penerapannya bisa dilihat di kode berikut. 3 block statement di situ semuanya ekuivalen, membuat isi file menjadi kosong.

```python
from pathlib import Path

file_path = Path("file.txt")

with open(file_path, "w", encoding="utf-8") as f:
    pass

with open(file_path, "w", encoding="utf-8"):
    pass

open(file_path, "w", encoding="utf-8").close()
```

Opsi lainnya adalah menggunakan method `truncate()`.

```python
from pathlib import Path

file_path = Path("file.txt")

with open(file_path, "w", encoding="utf-8") as f:
    f.truncate()
```

## A.50.8. Menghapus file atau folder

API `os.remove()` digunakan untuk menghapus file, sedangkan `os.rmdir()` untuk menghapus folder. Untuk path yang dipakai, kita bisa membangunnya secara modern dengan `pathlib.Path` agar lebih aman dan mudah dibaca. Contoh penerapan:

- Menghapus file:

    ```python
    import os
    from pathlib import Path

    file_path = Path(__file__).resolve().parent / "file.txt"
    os.remove(file_path)
    ```

- Menghapus folder:

    ```python
    import os
    from pathlib import Path

    target_dir = Path(__file__).resolve().parent / "tmp-example-dir"
    target_dir.mkdir(exist_ok=True)
    os.rmdir(target_dir)
    ```

## A.50.9. Mengecek apakah file atau folder ada

Untuk mengecek apakah suatu file ada, gunakan `Path.is_file()`.

```python
from pathlib import Path

file_path = Path(__file__).resolve().parent / "file.txt"
if file_path.is_file():
    print("file.txt is exists")
else:
    print("file.txt is not exists")
```

Untuk pengecekan terhadap folder, gunakan `Path.is_dir()`.

```python
from pathlib import Path

path_location = Path(__file__).resolve().parent / "something"
if path_location.is_dir():
    print("something is exists")
else:
    print("something is not exists")
```

## A.50.10. Membuat folder baru

API `Path.mkdir()` digunakan untuk membuat folder baru.

```python
from pathlib import Path

(Path(__file__).resolve().parent / "somefolder").mkdir(parents=True, exist_ok=True)
```

## A.50.11. Menampilkan isi folder

- Menggunakan `Path.iterdir()`:

    ```python
    from pathlib import Path

    path_location = Path(__file__).resolve().parent
    for f in path_location.iterdir():
        print(f)
    ```

- Menggunakan `os.walk()`:

    ```python
    import os
    from pathlib import Path

    path_location = Path(__file__).resolve().parent
    for (dirpath, dirnames, filenames) in os.walk(path_location):
        print(dirpath, dirnames, filenames)
    ```

    Penjelasan:

    - Variabel `dirpath` berisi path folder saat ini.
    - Variabel `dirnames` berisi folder yang berada di dalam folder saat ini.
    - Variabel `filenames` berisi file yang berada di dalam folder saat ini.


- Menggunakan `Path.rglob()`:

    API `Path.rglob()` ini didesain untuk pencarian rekursif. Jadi pada penerapannya cukup tambahkan pola `*` agar pencarian mencakup semua jenis file dan folder di bawah folder saat ini.

    ```python
    from pathlib import Path

    path_location = Path(__file__).resolve().parent
    for f in path_location.rglob("*"):
        print(f)
    ```

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/file">
        github.com/novalagung/dasarpemrogramanpython-example/../file
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [File/Data Format ➜ CSV](/basic/csv)
- [File/Data Format ➜ JSON](/basic/json)

## A.50.12. `pathlib.Path` (modern file path handling)

Selain menggunakan `os.path` dan fungsi manual string untuk manipulasi path, Python menyediakan module `pathlib` yang menawarkan pendekatan object-oriented dalam pengelolaan path file dan folder. `pathlib.Path` bisa digunakan untuk operasi yang telah dibahas sebelumnya dengan cara yang lebih intuitif.

```python
from pathlib import Path

# lokasi folder chapter ini
base_dir = Path(__file__).resolve().parent
sample_dir = base_dir / "pathlib-sample"
sample_file = sample_dir / "file.txt"

# membuat folder
sample_dir.mkdir(parents=True, exist_ok=True)

# mengecek apakah file ada
if sample_file.is_file():
    print("file.txt is exists")

# membaca isi file
content = sample_file.read_text(encoding="utf-8")
print(content)

# menulis file
sample_file.write_text("hello python", encoding="utf-8")

# menampilkan isi folder
for f in sample_dir.iterdir():
    print(f)

# menghapus file
sample_file.unlink(missing_ok=True)
sample_dir.rmdir()
```

Dengan `pathlib`, kode menjadi lebih ringkas dan mudah dibaca tanpa perlu meng-import module `os` secara terpisah.

### ◉ Referensi

- https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files
- https://stackoverflow.com/questions/1466000/difference-between-modes-a-a-w-w-and-r-in-built-in-open-function/30566011#30566011
- https://builtin.com/data-science/python-list-files-in-directory

</div>
