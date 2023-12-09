---
sidebar_position: 26
title: A.26. Python Lambda
sidebar_label: A.26. Function ➜ Lambda
---

Pada chapter ini kita akan belajar tentang *anonymous function* atau fungsi tanpa nama yang biasa disebut dengan **lambda**. 

## A.26.1. Pengenalan Lambda

Lambda adalah fungsi yang tidak memiliki nama. Lambda umumnya disimpan ke suatu variabel atau dieksekusi langsung. Lambda bisa memiliki parameter dan mengembalikan nilai balik, seperti fungsi pada umumnya.

Perbedaan signifikan antara lambda dengan fungsi/closure adalah pada lambda isinya hanya boleh 1 baris satement. Jika ada lebih dari 1 baris silakan gunakan fungsi saja.

Untuk mempermudah pemahaman kita tentang lambda, silakan pelajari kode berikut. Ada dua blok fungsi dibuat, satu berbentuk fungsi biasa dan satunya lagi adalah lambda. Keduanya memiliki tugas sama persis yaitu menampilkan pesan `hello python`.

```python
def say_hello1():
    print("hello python")

say_hello1()
# output ➜ hello python

say_hello2 = lambda : print("hello python")

say_hello2()
# output ➜ hello python
```

Bisa dilihat bagaimana perbedaan penulisan syntax fungsi menggunakan lambda dibandingkan dengan fungsi biasa. Lambda ditulis menggunakan keyword `lambda`, diikuti tanda titik 2 `:` lalu statement satu baris. Lambda perlu ditampung ke sebuah variabel (misalnya `say_hello2()`), setelahnya variabel tersebut digunakan untuk mengeksekusi lambda dengan cara memanggilnya seperti fungsi.

## A.26.2. lambda return value

Lambda selalu mengembalikan nilai balik atau *return value*. Jika isi lambda adalah suatu data atau operasi yang menghasilkan data, maka data tersebut otomatis jadi nilai balik. Contoh:

```python
def get_hello_message1():
    return "hello python"

res = get_hello_message1()
print(res)
# output ➜ hello python

get_hello_message2 = lambda : "hello python"

res = get_hello_message2()
print(res)
# output ➜ hello python
```

Pada kode di atas lambda `get_hello_message2()` mengembalikan nilai balik bertipe string.

Lalu bagaimana dengan lambda `say_hello2()` yang telah dipraktekan di atas, apakah juga mengembalikan nilai balik? Iya, lambda tersebut juga ada return value-nya. Namun, karena isi lambda `say_hello2()` adalah pemanggilan fungsi `print()` maka nilai balik lambda adalah data `None`.

> Pembahasan detail mengenai tipe data `None` ada di chapter [None](/basic/none)

## A.26.3. Lambda argument/parameter

Sama seperti fungsi, lambda bisa memiliki parameter baik itu jenisnya parameter positional, optional, ataupun keyword argument.

Sebagai contoh, lihat perbandingan fungsi `get_full_name1()` dengan lambda `get_full_name2()` pada kode berikut. Parameter di lambda dituliskan diantara keyword `lambda` dan tanda titik 2 `:`. Jika ada lebih dari 1 parameter, gunakan tanda koma `,` sebagai separator.

```python
def get_full_name1(first_name, last_name):
    return f"{first_name} {last_name}"

get_full_name2 = lambda first_name, last_name : f"{first_name} {last_name}"

res = get_full_name1("Darion", "Mograine")
print(res)
# output ➜ Darion Mograine

res = get_full_name2("Sally", "Whitemane")
print(res)
# output ➜ Sally Whitemane
```

Untuk penerapan optional argument dan keyword argument, contohnya bisa dilihat pada kode berikut:

```python
get_full_name3 = lambda first_name, last_name = "" : f"{first_name} {last_name}".strip()

res = get_full_name3("Thrall")
print(res)
# output ➜ Thrall

res = get_full_name3(first_name="Arthas", last_name="Menethil")
print(res)
# output ➜ Arthas Menethil
```

## A.26.4. Lambda dengan parameter **\*args** & **\*\*kwargs**

Penerapan **\*args** dan **\*\*kwargs** pada parameter lambda tidak berbeda dengan penerapannya di fungsi biasa. Sebagai perbandingan Silakan pelajari 2 contoh berikut yang masing-masing berisi contoh penulisan lambda vs versi fungsi biasa.

- Contoh lambda dengan parameter **\*args**:

    ```python
    # %% A.26.4. Lambda *args dan **kwargs

    def debug1(separator, *params):
        res = []
        for i in range(len(params)):
            res.append(f"param {i}: {params[i]}")
        return separator.join(res)

    debug2 = lambda separator, *params : separator.join([f"param {i}: {params[i]}" for i in range(len(params))])

    res = debug1(", ", "Darion Mograine", ["Highlord", "Horseman of the Ebon Blade", "Ashbringer"], True)
    print(res)
    # output ➜ param 0: Darion Mograine, param 1: ['Highlord', 'Horseman of the Ebon Blade', 'Ashbringer'], param 2: True

    res = debug2(", ", "Darion Mograine", ["Highlord", "Horseman of the Ebon Blade", "Ashbringer"], True)
    print(res)
    # output ➜ param 0: Darion Mograine, param 1: ['Highlord', 'Horseman of the Ebon Blade', 'Ashbringer'], param 2: True
    ```

- Contoh lambda dengan parameter **\*\*kwargs**:

    ```python
    def debug3(separator, **params):
        res = []
        for key in params:
            res.append(f"{key}: {params[key]}")
        return separator.join(res)

    debug4 = lambda separator, **params : separator.join([f"{key}: {params[key]}" for key in params])

    res = debug3(
        ", ",
        name="Darion Mograine",
        occupations=["Highlord", "Horseman of the Ebon Blade", "Ashbringer"],
        active=True
    )
    print(res)
    # output ➜ name: Darion Mograine, occupations: ['Highlord', 'Horseman of the Ebon Blade', 'Ashbringer'], active: True

    res = debug4(
        ", ",
        name="Darion Mograine",
        occupations=["Highlord", "Horseman of the Ebon Blade", "Ashbringer"],
        active=True
    )
    print(res)
    # output ➜ name: Darion Mograine, occupations: ['Highlord', 'Horseman of the Ebon Blade', 'Ashbringer'], active: True
    ```

## A.26.5. Isi lambda: statement 1 baris

Lambda secara penulisan bisa dibilang lebih praktis dibanding fungsi, namun limitasinya yang hanya bisa berisi statement 1 baris saja terkadang menjadi masalah, terutama untuk mengakomodir operasi komplex yang umumnya membutuhkan lebih dari 1 baris kode.

Namun Python dari segi bahasa adalah cukup flexibel, banyak API yang memungkinkan kita selaku programmer untuk bisa menuliskan kode yang cukup kompleks tapi dalam 1 baris saja. Pada contoh berikut, operasi transpose matrix bisa dilakukan hanya dalam 1 baris dengan menerapkan list comprehension.

```python
def transpose_matrix1(m):
    tm = []
    for i in range(len(m[0])):
        tr = []
        for row in m:
            tr.append(row[i])
        tm.append(tr)
    return tm

transpose_matrix2 = lambda m : [[row[i] for row in matrix] for i in range(len(m[0]))]

matrix = [[1, 2], [3, 4], [5, 6]]

res = transpose_matrix1(matrix)
print(res)
# output ➜ [[1, 3, 5], [2, 4, 6]]

res = transpose_matrix2(matrix)
print(res)
# output ➜ [[1, 3, 5], [2, 4, 6]]
```

> Pembahasan detail mengenai list comprehensian ada di chapter [List Comprehension](/basic/list-comprehension)

## A.26.6. Lambda dengan parameter fungsi/lambda

Lambda, closure, fungsi, ketiganya bisa digunakan sebagai argument suatu pemanggilan fungsi dengan cara implementasi juga sama, yaitu cukup tulis saja lambda sebagai argument baik secara langsung maupun lewat variabel terlebih dahulu.

Contoh penerapannya bisa dilihat pada kode berikut. Lambda `aggregate()` dibuat dengan desain parameter ke-3 yaitu `f` bisa menampung nilai berupa fungsi/closure/lambda.

```python
aggregate = lambda message, numbers, f: print(f"{message} is {f(numbers)}")

numbers = [24, 67, 22, 98, 3, 50]

def average1(numbers):
    return sum(numbers) / len(numbers)

aggregate("average", numbers, average1)
# output ➜ average is 44.0

average2 = lambda numbers : sum(numbers) / len(numbers)
aggregate("average", numbers, average2)
# output ➜ average is 44.0

aggregate("average", numbers, lambda numbers : sum(numbers) / len(numbers))
# output ➜ average is 44.0
```

Lambda `aggregate()` dipanggil 3x yang pada pemanggilan ke-2 dan ke-3-nya, argument parameter ke-3 diisi dengan lambda.

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/lambda">
        github.com/novalagung/dasarpemrogramanpython-example/../lambda
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [Function](/basic/function)
- [Function ➜ Positional, Optional, Keyword Arguments](/basic/positional-optional-keyword-argument)
- [Function ➜ Args & Kwargs](/basic/args-kwargs)
- [Function ➜ Closure](/basic/closure)

### ◉ Referensi

- https://docs.python.org/3/reference/expressions.html#lambda

</div>
