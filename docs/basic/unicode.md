---
sidebar_position: 18
title: A.18. Python Unicode String
sidebar_label: A.18. String ➜ Unicode
---

Python mengadopsi aturan standar [Unicode](https://www.unicode.org/) dalam pengelolaan karakter pada string. Benefitnya Python mendukung dan mengenali berbagai macam jenis karakter, termasuk diantaranya adalah huruf Arab, Jepang, emoji, symbol, dan banyak jenis karakter lainnya.

> Unicode sendiri adalah suatu aturan standar untuk *encoding* text yang di-maintain oleh Unicode Consortium. Standarisasi ini diciptakan untuk mendukung semua jenis penulisan yang ada di bumi.

Pada chapter ini kita akan membahas tentang bagaimana implementasi Unicode di Python.

## A.18.1. Pengenalan Unicode String

Dalam dunia per-Unicode-an, ada yang disebut dengan **code point** yaitu suatu angka numerik (bisa desimal maupun hexadecimal) yang merepresentasikan karakter tertentu. Jadi bisa diibaratkan *identifier* dari suatu karakter. Semua karakter ada *code point*-nya, termasuk huruf A, B, C, maupun karakter lainnya (angka, tulisan romawi, symbol, dll).

Cara penulisan karakter unicode sendiri bisa dengan langsung menuliskan karakternya, atau bisa juga dengan menuliskan *code point* dalam notasi tertentu.

- Contoh penulisan text dengan langsung menuliskan karakternya:

    ```python
    message = "안녕하세요 😀"
    print(message)
    # output ➜ 안녕하세요 😀
    ```

- Menggunakan notasi special character `\uXXXX`, dimana `XXXX` diisi dengan *code point* dalam encoding 16-bit.

    ```python
    message = "\uC548\uB155\uD558\uC138\uC694"
    print(message)
    # output ➜ 안녕하세요
    ```

    <ul>
    <li><i>Code point</i> 16-bit <code>C548</code> merepresentasikan karakter <code>안</code></li>
    <li><i>Code point</i> 16-bit <code>B155</code> merepresentasikan karakter <code>녕</code></li>
    <li><i>Code point</i> 16-bit <code>D558</code> merepresentasikan karakter <code>하</code></li>
    <li><i>Code point</i> 16-bit <code>C548</code> merepresentasikan karakter <code>세</code></li>
    <li><i>Code point</i> 16-bit <code>C694</code> merepresentasikan karakter <code>요</code></li>
    </ul>

    Untuk memunculkan emoji menggunakan kode encoding 16-bit butuh tambahan effort karena code point emoji tidak cukup jika direpresentasikan oleh *code point* yang lebarnya hanya 16-bit.

- Menggunakan notasi special character `\UXXXXXXXX`, dimana `XXXXXXXX` diisi *code point* dalam encoding 32-bit.

    ```python
    message = "\U0000C548\U0000B155\U0000D558\U0000C138\U0000C694 \U0001F600"
    print(message)
    # output ➜ 안녕하세요 😀
    ```

    - *Code point* 32-bit `0000C548` merepresentasikan karakter `안`
    - *Code point* 32-bit `0000B155` merepresentasikan karakter `녕`
    - *Code point* 32-bit `0000D558` merepresentasikan karakter `하`
    - *Code point* 32-bit `0000C138` merepresentasikan karakter `세`
    - *Code point* 32-bit `0000C694` merepresentasikan karakter `요`
    - *Code point* 32-bit `0001F600` merepresentasikan emoji `😀`

- Atau menggunakan notasi special character `\N{NAME}`, dimana `NAME` diisi dengan nama karakter unicode dalam huruf besar.

    ```python
    message = "\N{HANGUL SYLLABLE AN}\N{HANGUL SYLLABLE NYEONG} \N{GRINNING FACE}"
    print(message)
    # output ➜ 안녕 😀
    ```

    - Nama karakter Unicode `HANGUL SYLLABLE AN` merepresentasikan karakter `안`
    - Nama karakter Unicode `HANGUL SYLLABLE NYEONG` merepresentasikan karakter `녕`
    - Nama karakter Unicode `GRINNING FACE` merepresentasikan emoji `😀`

> Salah satu website yang berguna untuk mencari informasi nama dan *code point* karakter Unicode: https://www.compart.com/en/unicode/

## A.18.2. Fungsi utilitas pada *Unicode*

### ◉ Fungsi `ord()`

Fungsi `ord()` digunakan untuk mengambil nilai code point dari suatu karakter. Nilai baliknya adalah numerik berbasis desimal.

```python
text = "N"
codePoint = ord(text)
print(f'code point of {text} in decimal: {codePoint}')
# output ➜ code point of N in decimal: 78

text = "안"
codePoint = ord(text)
print(f'code point of {text} in decimal: {codePoint}')
# output ➜ code point of 안 in decimal: 50504
```

Untuk menampilkan code point dalam notasi hexadesimal, cukup bungkus menggunakan fungsi `hex()`.

```python
text = "안"
codePoint = ord(text)

print(f'code point of {text} in decimal: {codePoint}')
# output ➜ code point of 안 in decimal: 50504

print(f'code point of {text} in hex: {hex(codePoint)}')
# output ➜ code point of 안 in hex: 0xc548
```

Bisa dilihat dari program di atas, unicode code point dari karakter `안` dalam bentuk hexadesimal adalah `c548`. Jika dicek pada praktek sebelumnya, kode hexadesimal yang sama kita gunakan juga dalam penulisan karakter unicode menggunakan notasi `\uXXXX` (yaitu `\uc548`).

### ◉ Fungsi `chr()`

Fungsi `chr()` adalah kebalikan dari fungsi `ord()`, kegunaannya adalah untuk menampilkan string sesuai code point.

Pada contoh dibawah ini fungsi `chr()` digunakan untuk memunculkan karakter dengan code point desimal `50504` dan juga hexadesimal `C548`, yang keduanya adalah merepresentasikan karakter yang sama, yaitu `안`.

```python
codePoint = chr(50504)
print(codePoint)
# output ➜ 안

codePoint = chr(0xC548)
print(codePoint)
# output ➜ 안
```

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/unicode">
        github.com/novalagung/dasarpemrogramanpython-example/../unicode
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [String](/basic/string)

### ◉ Referensi

- https://docs.python.org/3/howto/unicode.html#:~:text=Python's%20string%20type%20uses%20the,character%20its%20own%20unique%20code.
- https://docs.python.org/3/howto/unicode.html?highlight=unicode%20howto#the-string-type

</div>
