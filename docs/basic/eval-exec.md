---
sidebar_position: 58
title: A.58. Python Eval & Exec
sidebar_label: A.58. Eval & Exec
---

Pada chapter ini kita akan mempelajari fungsi `eval()` untuk eksekusi *expression*, fungsi `exec()` untuk eksekusi syntax Python, dan fungsi `compile()`.

## A.58.1. Fungsi `eval()`

String berisi ekspresi seperti `PI * r * r` bisa dieksekusi kemudian diambil hasilnya menggunakan fungsi `eval()`. Cara penggunaannya sangat mudah, tulis saja ekspresi sebagai argument pemanggilan fungsi. Misalnya:

```python
a = 10
b = 5
c = 8
area = eval('(a + b) / 20 + (c * c)')
print(area)
# output ➜ 64.75
```

Variabel `a`, `b`, dan `c` di ekspresi `'(a + b) / 20 + (c * c)'` nilainya terisi oleh nilai variabel `a`, `b`, dan `c` yang sudah dideklarasikan sebelumnya.

Ekspresi string berisi apapun bisa digunakan pada fungsi `eval()` ini, asalkan ekspresinya hanya 1 baris.

> ⚠️ **Peringatan**: Fungsi `eval()` dan `exec()` sangat berbahaya jika digunakan dengan input dari sumber tidak terpercaya, karena dapat mengeksekusi kode berbahaya. Hindari menggunakannya pada data dari user. Sebagai alternatif yang lebih aman, gunakan `ast.literal_eval()` untuk mengevaluasi literal Python.

Jika ekspresi tidak valid, maka eksekusi fungsi `eval()` menghasilkan error, dan ketika itu terjadi ada baiknya di-handle dengan baik. Contoh:

```python
try:
    area = eval('(a + b asd / 20 + (c * c)')
except Exception as err:
    print(f"error: {err}")

# output ➜ error: '(' was never closed (<string>, line 1)
```

By default, variabel dalam ekspresi terisi oleh nilai variabel yang sudah dideklarasikan. Selain itu, nilai variabel juga bisa ditentukan secara eksplisit via parameter ke-2 atau ke-3 fungsi `eval()`.

- Jika ekspresi berisi variabel yang kesemuanya ditentukan secara eksplisit, bisa gunakan parameter ke-2.

    ```python
    area = eval('PI * r * r', { "PI": 3.14, "r": 10 })
    print(area)
    # output ➜ 314.0
    ```

- Jika eskresi berisi variabel yang hanya sebagaian saja yang nilainya ditentukan secara eksplisit, maka gunakan `globals()` sebagai argument parameter ke-2 dan tulis variabel pada parameter ke-3.

    ```python
    PI = 3.14
    area = eval('PI * r * r', globals(), { "r": 10 })
    print(area)
    # output ➜ 314.0
    ```

> Pemanggilan `eval('expr')` tanpa parameter ke-2 dan ke-3 adalah ekuivalen dengan statement `eval('expr', globals(), locals())`

## A.58.2. Fungsi `exec()`

Fungsi `exec()` berguna untuk eksekusi string berisi kode Python. Cara penggunaannya mirip seperti `eval()`. Contoh:

- Eksekusi statement dengan operasi *assignment*

    ```python
    a = 10
    b = 5
    c = 8
    res = 0
    exec('res = (a + b) / 20 + (c * c)')
    print(res)
    # output ➜ 64.75
    ```

    Eksekusi `(a + b) / 20 + (c * c)` nilainya disimpan ke variabel `res` yang efeknya mengubah nilai variabel `res` yang telah dideklarasikan.

- Eksekusi perulangan

    ```python
    r = 4
    stmt = """
    for x in range(r):
        print(x)
    """
    exec(stmt)
    # output ↓
    #
    # 0
    # 1
    # 2
    # 3
    ```

- Eksekusi kode berisi statement import dan fungsi

    ```python
    r = 10
    res = 0
    stmt = """
    from typing import Final

    PI: Final = 3.14

    def calculate_area_of_circle():
        print(f"calculating area of circle with r: {r}")
        return PI * r * r

    res = calculate_area_of_circle()
    """
    exec(stmt)
    print(res)
    # output ↓
    #
    # calculating area of circle with r: 10
    # 314.0
    ```

Selama string berisi kode Python dengan syntax valid, maka bisa dijalankan via fungsi `exec()` ini.

## A.58.3. Fungsi `compile()`

Fungsi `compile()` digunakan untuk kompilasi expression maupun kode Python, untuk kemudian digunakan pada fungsi `eval()`, `exec()`, ataupun untuk keperluan lainnya (seperti parse AST dan lainnya).

Fungsi ini memiliki 3 parameter yang harus diisi saat pemanggilan:

- Parameter ke-1 diisi dengan nilai string *expression* atau kode Python
- Parameter ke-2 diisi string `'<string>'`
- Parameter ke-3 diisi `eval` atau `exec`

Dengan mengkompilasi string terlebih dahulu, kita bisa mengantisipasi syntax error ataupun expression error yang ada dalam string tanpa harus mengeksekusinya terlebih dahulu.

Pengaplikasian fungsi `compile()` dalam penggunaannya dibedakan berdasarkan isi string yang di-compile.

### ◉ Compile *expression*

Penggunaan fungsi `compile()` untuk *expression*, parameter ke-3 perlu diisi nilai `'eval'`.

```python
compiled = compile('expr', '<string>', 'eval')
res = eval(compiled)
```

Contoh:

```python
a = 10
b = 5
c = 8
compiled = compile('(a + b) / 20 + (c * c)', '<string>', 'eval')
area = eval(compiled)
print(area)
# output ➜ 64.75
```

### ◉ Compile *Python source code*

Sedangkan untuk eksekusi kode Python, parameter ke-3 diisi nilai `'exec'`.

```python
compiled = compile(stmt, '<string>', 'exec')
res = exec(compiled)
```

Contoh:

```python
r = 10
res = 0
stmt = """
from typing import Final

PI: Final = 3.14

def calculate_area_of_circle():
    print(f"calculating area of circle with r: {r}")
    return PI * r * r

res = calculate_area_of_circle()
"""
compiled = compile(stmt, '<string>', 'exec')
area = exec(compiled)
print(res)
# output ↓
#
# calculating area of circle with r: 10
# 314.0
```

## A.58.4. Fungsi `ast.literal_eval()`

Seperti yang sudah disebutkan pada peringatan di [A.58.1](#a571-fungsi-eval), fungsi `eval()` dan `exec()` berbahaya jika digunakan dengan input dari sumber tidak terpercaya karena dapat mengeksekusi kode berbahaya.

Sebagai alternatif yang aman untuk mengevaluasi literal Python (seperti string, angka, list, tuple, dict, bool, `None`), Python menyediakan fungsi `ast.literal_eval()` dari module `ast` (bagian dari stdlib).

Fungsi `ast.literal_eval()` hanya mengevaluasi literal — tidak bisa mengeksekusi ekspresi arbitrer. Ini membuatnya aman digunakan untuk parsing data dari user.

Contoh penggunaan:

```python
import ast

# aman: mengevaluasi literal dict
data = ast.literal_eval("{'name': 'Noval', 'age': 30}")
print(data)
# output ➜ {'name': 'Noval', 'age': 30}
print(type(data))
# output ➜ <class 'dict'>

# aman: mengevaluasi literal list
numbers = ast.literal_eval("[1, 2, 3, 4, 5]")
print(numbers)
# output ➜ [1, 2, 3, 4, 5]

# aman: mengevaluasi literal tuple
coord = ast.literal_eval("(10, 20)")
print(coord)
# output ➜ (10, 20)

# aman: mengevaluasi tipe data primitif
value = ast.literal_eval("3.14")
print(value)
# output ➜ 3.14
```

### ◉ Perbedaan `ast.literal_eval()` vs `eval()`

| Aspek | `eval()` | `ast.literal_eval()` |
|:-|:-|:-|
| Keamanan | Berbahaya dengan input tidak terpercaya | Aman (hanya literal) |
| Kode yang dieksekusi | Ekspresi Python apapun | Hanya literal Python |
| Risiko injeksi | Tinggi | Tidak ada |

Jika input yang akan dievaluasi bukan literal (misalnya ekspresi matematika), tetap gunakan `eval()`, tapi pastikan input berasal dari sumber terpercaya.

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/eval-exec">
        github.com/novalagung/dasarpemrogramanpython-example/../eval-exec
    </a>
</pre>

### ◉ Referensi

- https://stackoverflow.com/questions/2220699/whats-the-difference-between-eval-exec-and-compile

</div>





