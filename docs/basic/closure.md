---
sidebar_position: 25
title: A.25. Python Closure
sidebar_label: A.25. Function ➜ Closure
---

Closure adalah istilah umum dalam programming untuk deklarasi fungsi yang berada di dalam fungsi (*nested function*). Pada chapter ini kita akan mempelajari cara implementasinya.

## A.25.1. Penerapan closure / *nested function*

Di Python, fungsi bisa dideklarasikan di-dalam suatu fungsi. Penerapannya cukup berguna pada kasus dimana ada blok kode yang perlu di-eksekusi lebih dari satu kali tetapi eksekusinya hanya dalam fungsi tertentu, atau eksekusinya setelah pemanggilan fungsi tertentu.

Misalnya, fungsi `inner()` dideklarasikan di dalam fungsi `outer()`. Maka:

- Fungsi `inner()` bisa diakses dari dalam fungsi `outer()`
- Fungsi `inner()` juga bisa diakses dari luar fungsi `outer()` asalkan fungsi `inner()` tersebut dijadikan sebagai nilai balik fungsi `outer()` (untuk kemudian ditampung variabel lalu dieksekusi)

Program berikut berisi contoh penerapan closure, silakan pelajari dan praktekan.

```python
def outer_func(numbers = []):
    print(f"numbers: {numbers}")

    def inner_func():
        print(f"max: {max(numbers)}")
        print(f"min: {min(numbers)}")

    print("call inner_func() within outer_func()")
    inner_func()

    return inner_func

print("call outer_func()")
f = outer_func([1, 2, 3, 4])

print("call inner_func() outside of outer_func()")
f()
```

Output program:

![Python closure function](img/closure-1.png)

Program di atas jika di-breakdown sesuai urutan eksekusi statement-nya kurang lebih seperti ini:

- Tahap 1: eksekusi statement `print("call outer_func()")`
- Tahap 2: eksekusi statement `print(f"numbers: {numbers}")`
- Tahap 3: eksekusi statement `print("call inner_func() within outer_func()")`
- Tahap 4: eksekusi statement `inner_func()`
  - Tahap 4.A. eksekusi statement `print(f"max: {max(numbers)}")`
  - Tahap 4.B. eksekusi statement `print(f"min: {min(numbers)}")`
- Tahap 5: eksekusi statement `print("call inner_func() outside of outer_func()")`
- Tahap 6: eksekusi statement `inner_func()` via `f()` dari luar fungsi `outer_func()`

Sedangkan jika di-*flatten* semua statement-nya maka programnya menjadi seperti ini:

```python
print("call outer_func()")
numbers = [1, 2, 3, 4]
print(f"numbers: {numbers}")

print("call inner_func() within outer_func()")
print(f"max: {max(numbers)}")
print(f"min: {min(numbers)}")

print("call inner_func() outside of outer_func()")
print(f"max: {max(numbers)}")
print(f"min: {min(numbers)}")
```

### ◉ Fungsi `min()` & `max()`

Kedua fungsi ini digunakan untuk menghitung agregasi data numerik.

- Fungsi `min()` untuk pencarian nilai minimum dari data list yang berisi elemen data numerik.<br />Contoh `min([3, 4, 1, 2, 3, 4])` menghasilkan data `1`.

- Fungsi `max()` untuk pencarian nilai maksimum dari data list yang berisi elemen data numerik.<br />Contoh `max([3, 4, 1, 2, 3, 4])` menghasilkan data `4`.

## A.25.2. Menampung fungsi/closure ke variabel

Pada contoh sebelumnya, fungsi `inner_func()` ditampung ke variabel bernama `f` via nilai balik pemanggilan fungsi `outer_func()`. Dari sini terlihat bahwa closure bisa disimpan ke variabel. Tidak hanya closure, fungsi biasa-pun juga bisa disimpan dalam variabel, contohnya ada pada fungsi `print_all()` berikut yang disimpan pada variabel `display` untuk kemudian di-eksekusi.

```python
def print_all(message, *numbers, **others):
    print(f"message: {message}")
    print(f"numbers: {numbers}")
    print(f"others: {others}")

display = print_all
display("hello world", 1, 2, 3, 4, name="nokia 3310", discontinued=True, year_released=2000)
# output ↓
#
# message: hello world
# numbers: (1, 2, 3, 4)
# others: {'name': 'nokia 3310', 'discontinued': True, 'year_released': 2000}
```

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/args-kwargs">
        github.com/novalagung/dasarpemrogramanpython-example/../args-kwargs
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [Function](/basic/function)
- [Args & Kwargs](/basic/args-kwargs)
- [Optional, Positional, Keyword Argument](/basic/positional-optional-keyword-argument)
- [Lambda](#)

### ◉ Referensi

- https://docs.python.org/3/library/stdtypes.html#functions

</div>
