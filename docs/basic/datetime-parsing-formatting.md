---
sidebar_position: 54
title: A.54. Python DateTime Parsing & Formatting
sidebar_label: A.54. DateTime ➜ Parsing & Formatting
---

Chapter ini merupakan lanjutan dari chapter sebelumnmya. Di sini kita akan belajar tentang teknik parsing dan formatting pada tipe data `datetime`.

## A.54.1. Parsing `datetime`

Parsing adalah teknik konversi data date time berbentuk string ke tipe data `datetime`. Ada beberapa method yang tersedia untuk kebutuhan operasi ini:

### ◉ Via `datetime.strptime()` dan kode format

Class method `datetime.strptime()` digunakan untuk parsing string ke `datetime` dalam kombinasi kode format tertentu. Kode format sendiri merepresentasikan setiap unit waktu, misalnya:

- Kode format tahun adalah `%Y`
- Kode format jam adalah `%H`
- Kode format menit adalah `%M`
- dan lainnya.

Contoh implementasinya seperti ini:

- Contoh ke-1, parsing data `1985-04-12 23:20:50`:

    ```python
    from datetime import datetime

    date_string = '1985-04-12 23:20:50'
    format_string = '%Y-%m-%d %H:%M:%S'

    data_datetime = datetime.strptime(date_string, format_string)
    print("datetime:", data_datetime)
    # output ➜ datetime: 1985-04-12 23:20:50
    ```

- Contoh ke-2, parsing data `1985-04-12T23:20:50.52+0700`:

    ```python
    from datetime import datetime

    date_string = '1985-04-12T23:20:50.52+0700'
    format_string = '%Y-%m-%dT%H:%M:%S.%f%z'

    data_datetime = datetime.strptime(date_string, format_string)
    print("datetime:", data_datetime)
    # output ➜ datetime: 1985-04-12 23:20:50.520000+07:00
    ```

Selengkapnya silakan cek di bagian [A.54.3. Tabel kode format](/basic/datetime-parsing-formatting#a523-tabel-kode-format).

### ◉ Via `datetime.fromisoformat()` terhadap data ISO Date Time (ISO 8601)

Untuk data waktu berbentuk string sesuai spesifikasi ISO Date Time atau ISO 8601, konversi ke bentuk `datetime` bisa dilakukan secara praktis menggunakan `datetime.fromisoformat()`.

```python
data_datetime = datetime.fromisoformat('1985-04-12T23:20:50.52')
print("datetime:", data_datetime)
# output ➜ datetime: 1985-04-12 23:20:50.520000

data_datetime = datetime.fromisoformat('1985-04-12T23:20:50.52+0700')
print("datetime:", data_datetime)
# output ➜ datetime: 1985-04-12 23:20:50.520000+07:00
```

### ◉ Via `datetime.fromtimestamp()` terhadap data UNIX timestamp

Data dengan format UNIX timestamp 10 digit bisa dikonversi ke bentuk `datetime` menggunakan method `fromtimestamp()`.

```python
data_datetime = datetime.fromtimestamp(1702980333)
print("datetime:", data_datetime)
# output ➜ datetime: 2023-12-19 17:05:33
```

Untuk timestamp dengan digit lebih dari 10, informasi milisecond-nya bisa ditulis sebagai nilai floating point, misalnya:

```python
data_datetime = datetime.fromtimestamp(1702980333.244)
print("datetime:", data_datetime)
# output ➜ datetime: 2023-12-19 17:05:33.244000
```

Informasi timezone juga bisa ditentukan pada saat parsing. Caranya gunakan parameter `tz` method di atas:

```python
from dateutil import tz

data_datetime = datetime.fromtimestamp(1702980333.244, tz=tz.gettz("America/New_York"))
print("datetime:", data_datetime)
# output ➜ datetime: 2023-12-19 05:05:33.244000-05:00
```

### ◉ Via `dateutil.parser.parse()`

Method `parse()` milik `dateutil.parser` cukup cerdas untuk mengenali banyak jenis format (selama format tersebut umum digunakan). Contoh penerapannya:

```python
from dateutil import parser

data_datetime = parser.parse("May 12, 2021 8:00 AM")
print("datetime:", data_datetime)
# output ➜ datetime: 2021-05-12 08:00:00
```

Selengkapnya mengenai format yang didukung oleh parser ini bisa di cek di halaman dokumentasi Python https://dateutil.readthedocs.io/en/stable/parser.html

## A.54.2. Formatting `datetime`

Formatting adalah teknik untuk memformat data `datetime` menjadi bentuk string dengan susunan/format sesuai keinginan. Beberapa method untuk operasi formatting datetime bisa dilihat di bawah ini:

### ◉ Method `datetime.strftime()` dan kode format

Method formatting `datetime.strftime()` tersedia pada tipe data datetime, pemanggilannya disertai dengan kode format yang diinginkan untuk output. Perihal kode format sendiri adalah sama dengan yang digunakan pada teknik parsing via `strptime()`.

Contoh penerapannya:

```python
from datetime import datetime

data_datetime = datetime.fromtimestamp(1702980333, tz=None)
print(data_datetime.strftime('%Y-%m-%dT%H:%M:%S.%f%z'))
# output ➜ 2023-12-19T17:05:33.000000

data_datetime = datetime.fromisoformat('1985-04-12T23:20:50.52+0700')
print(data_datetime.strftime('%m/%d/%Y %H:%M:%S %z'))
# output ➜ 04/12/1985 23:20:50 +0700
```

Selengkapnya silakan cek di bagian [A.54.3. Tabel kode format](/basic/datetime-parsing-formatting#a523-tabel-kode-format).

### ◉ Method `datetime.isoformat()` ➜ ISO Date Time (ISO 8601)

Method ini menghasilkan output berbentuk string sesuai format ISO Date Time (ISO 8601). Contoh penggunaan:

```python
data_datetime = datetime.now()
print(data_datetime.isoformat())
# output ➜ 2023-12-23T14:01:03.088274
```

### ◉ Method `datetime.timestamp()` ➜ UNIX timestamp

Method ini menghasilkan output berbentuk UNIX timestamp bertipe float. Angka dibelakang koma merepresentasikan miliseconds. Contoh penggunaan:

```python
data_datetime = datetime.now()
print(data_datetime.timestamp())
# output ➜ 1703314863.975431
```

## A.54.3. Tabel kode format

Tabel kode format sesuai 1989 C standard:

| Kode&nbsp;format | Penjelasan | Contoh |
| :-: | :- | :- |
| `%a` | Weekday as locale’s abbreviated name | Sun, Mon, …, Sat (en_US); So, Mo, …, Sa (de_DE) |
| `%A` | Weekday as locale’s full name | Sunday, Monday, …, Saturday (en_US); Sonntag, Montag, …, Samstag (de_DE) |
| `%w` | Weekday as a decimal number, where 0 is Sunday and 6 is Saturday | 0, 1, …, 6 |
| `%d` | Day of the month as a zero-padded decimal number | 01, 02, …, 31 |
| `%b` | Month as locale’s abbreviated name | Jan, Feb, …, Dec (en_US) |
| `%B` | Month as locale’s full name | January, February, …, December (en_US) |
| `%m` | Month as a zero-padded decimal number | 01, 02, …, 12 |
| `%y` | Year without century as a zero-padded decimal number | 00, 01, …, 99 |
| `%Y` | Year with century as a decimal number | 0001, 0002, …, 2013, 2014, …, 9998, 9999 |
| `%H` | Hour (24-hour clock) as a zero-padded decimal number | 00, 01, …, 23 |
| `%I` | Hour (12-hour clock) as a zero-padded decimal number | 01, 02, …, 12 |
| `%p` | Locale’s equivalent of either AM or PM | AM, PM (en_US) |
| `%M` | Minute as a zero-padded decimal number | 00, 01, …, 59 |
| `%S` | Second as a zero-padded decimal number | 00, 01, …, 59 |
| `%f` | Microsecond as a decimal number, zero-padded to 6 digits | 000000, 000001, …, 999999 |
| `%z` | UTC offset in the form ±HHMM[SS[.ffffff]] (empty string if the object is naive) | (empty), +0000, -0400, +1030, +063415, -030712.345216 |
| `%Z` | Time zone name (empty string if the object is naive) | (empty), UTC, GMT |
| `%j` | Day of the year as a zero-padded decimal number | 001, 002, …, 366 |
| `%U` | Week number of the year (Sunday as the first day of the week) as a zero-padded decimal number. All days in a new year preceding the first Sunday are considered to be in week 0 | 00, 01, …, 53 |
| `%W` | Week number of the year (Monday as the first day of the week) as a zero-padded decimal number. All days in a new year preceding the first Monday are considered to be in week 0 | 00, 01, …, 53 |
| `%c` | Locale’s appropriate date and time representation | Tue Aug 16 21:30:00 1988 (en_US) |
| `%x` | Locale’s appropriate date representation | 08/16/88 (None); 08/16/1988 (en_US); 16.08.1988 (de_DE) |
| `%X` | Locale’s appropriate time representation | 21:30:00 (en_US); 21:30:00 (de_DE) |
| `%%` | A literal '%' character | % |

Tabel kode format sesuai C89 standard:

| Kode&nbsp;format | Penjelasan | Contoh |
| :-: | :- | :- |
| `%G` | ISO 8601 year with century representing the year that contains the greater part of the ISO week (%V) | 0001, 0002, …, 2013, 2014, …, 9998, 9999 |
| `%u` | ISO 8601 weekday as a decimal number where 1 is Monday | 1, 2, …, 7 |
| `%V` | ISO 8601 week as a decimal number with Monday as the first day of the week. Week 01 is the week containing Jan 4 | 01, 02, …, 53 |
| `%:z` | UTC offset in the form ±HH:MM[:SS[.ffffff]] (empty string if the object is naive) | (empty), +00:00, -04:00, +10:30, +06:34:15, -03:07:12.345216 |

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/datetime-parsing-formatting">
        github.com/novalagung/dasarpemrogramanpython-example/../datetime-parsing-formatting
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [Date, Time, DateTime, Timezone](/basic/datetime-timezone)

### ◉ TBA

- Locale

### ◉ Referensi

- https://docs.python.org/3/library/datetime.html
- https://dateutil.readthedocs.io/en/stable/parser.html
- https://stackoverflow.com/questions/3305413/how-to-preserve-timezone-when-parsing-date-time-strings-with-strptime
- https://stackoverflow.com/questions/13182075/how-to-convert-a-timezone-aware-string-to-datetime-in-python-without-dateutil
- https://stackoverflow.com/questions/1941927/convert-an-rfc-3339-time-to-a-standard-python-timestamp
- https://realpython.com/python-datetime/

</div>
