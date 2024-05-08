---
sidebar_position: 53
title: A.53. Python Date, Time, DateTime, Timezone
sidebar_label: A.53. Date, Time, DateTime, Timezone
---

Pada chapter ini kita akan belajar tentang tipe data `date`, `time`, `datetime` untuk penyimpanan informasi tanggal dan waktu di Python, serta peran dari tipe data `timezone` untuk penentuan zona waktu.

## A.53.1. Pengenalan `date`, `time`, dan `datetime`

Python menyediakan package `datetime` berisi banyak sekali API untuk keperluan operasi data yang berhubungan dengan tanggal dan waktu. Tiga diantaranya adalah tipe data berikut:

- Tipe data class `date` untuk penyimpanan informasi tanggal

    ```python
    from datetime import date

    data_date = date(year=2020, month=1, day=31)

    print("date:", data_date)
    print(" ➜ year:", data_date.year)
    print(" ➜ month:", data_date.month)
    print(" ➜ day:", data_date.day)
    # output ↓
    # 
    # date: 2020-01-31
    #  ➜ year: 2020
    #  ➜ month: 1
    #  ➜ day: 31
    ```

- Tipe data class `time` untuk penyimpanan informasi waktu (jam, menit, detik)

    ```python
    from datetime import time

    data_time = time(hour=13, minute=14, second=31)

    print("time:", data_time)
    print(" ➜ hour:", data_time.hour)
    print(" ➜ minute:", data_time.minute)
    print(" ➜ second:", data_time.second)
    print(" ➜ timezone:", data_time.tzinfo)
    # output ↓
    # 
    # time: 13:14:31
    #  ➜ hour: 13
    #  ➜ minute: 14
    #  ➜ second: 31
    #  ➜ timezone: None
    ```

- Tipe data class `datetime` untuk penyimpanan informasi tanggal dan waktu

    ```python
    from datetime import datetime

    data_datetime = datetime(year=2020, month=1, day=31, hour=13, minute=14, second=31)

    print("datetime:", data_datetime)
    print(" ➜ year:", data_datetime.year)
    print(" ➜ month:", data_datetime.month)
    print(" ➜ day:", data_datetime.day)
    print(" ➜ hour:", data_datetime.hour)
    print(" ➜ minute:", data_datetime.minute)
    print(" ➜ second:", data_datetime.second)
    print(" ➜ timezone:", data_datetime.tzinfo)
    # output ↓
    # 
    # datetime: 2020-01-31 13:14:31
    #  ➜ year: 2020
    #  ➜ month: 1
    #  ➜ day: 31
    #  ➜ hour: 13
    #  ➜ minute: 14
    #  ➜ second: 31
    #  ➜ timezone: None
    ```

Pengaksesan informasi unit waktu (seperti hari, tahun, jam, dan lainnya) dilakukan via attribute. Mengenai nama attribute-nya silakan lihat di kode di atas.

> Tipe data `datetime` berada di package bernama sama yaitu `datetime`. Pada contoh di atas, tipe data `datetime` di-import dari package-nya.
> 
> Contoh jika yang di-import adalah package `datetime` penggunaan tipe `datetime` seperti ini:<br />
> `datetime.datetime(year=2020, month=1, day=31, hour=13, minute=14, second=31)`
>
> Jangan sampai bingung ya.

Khusus untuk tipe data yang juga menyimpan informasi waktu (seperti `time` dan `datetime`), disitu ada attribute bernama `timezone` isinya informasi zona waktu. *By default*, zona waktu adalah kosong atau `None`.

### ◉ Combining `date` & `time`

Tipe `date` dan `time` bisa dikominasikan untuk menciptakan object baru bertipe `datetime`. Caranya via class method `combine` milik tipe data `datetime`

```python
data_datetime = datetime.combine(data_date, data_time)

print("datetime:", data_datetime)
print(" ➜ year:", data_datetime.year)
print(" ➜ month:", data_datetime.month)
print(" ➜ day:", data_datetime.day)
print(" ➜ hour:", data_datetime.hour)
print(" ➜ minute:", data_datetime.minute)
print(" ➜ second:", data_datetime.second)
print(" ➜ timezone:", data_datetime.tzinfo)
# output ↓
# 
# datetime: 2020-01-31 13:14:31
#  ➜ year: 2020
#  ➜ month: 1
#  ➜ day: 31
#  ➜ hour: 13
#  ➜ minute: 14
#  ➜ second: 31
#  ➜ timezone: None
```

### ◉ Mengambil datetime hari ini / sekarang

Tipe `date` dan `time` bisa dikominasikan untuk menciptakan object baru bertipe `datetime`. Caranya via class method `combine` milik tipe data `datetime`.

```python
data1 = datetime.now()
print("sekarang (datetime):", data1)
# output ➜ sekarang (datetime): 2023-12-23 11:50:45.303421

data2 = datetime.today()
print("sekarang (datetime):", data2)
# output ➜ sekarang (datetime): 2023-12-23 11:50:45.303422

data2 = date.today()
print("sekarang (date):", data2)
# output ➜ sekarang (date): 2023-12-23
```

> Kode di atas outputnya adalah sesuai dengan output program di local penulis saat program di run. Di tempat pembaca output pastinya berbeda.

## A.53.2. Pengenalan timezone (`tz`)

Setiap tipe data yang meyimpan informasi waktu (seperti `time` dan `datetime`) didalamnya ada informasi timezone yang bisa diakses ataupun ditentukan saat pembuatan data. Informasi timezone direpresentasikan menggunakan `dateutil.tz`, tipe data `tz` dalam package `dateutil`.

Method `tz.gettz()` digunakan untuk membuat data timezone. Contoh pengaplikasiannya:

- Membuat data timezone *New York* atau EST (Eastern Time):

    ```python
    tzinfo = tz.gettz("America/New_York")
    ```

- Membuat data timezone WIB (Waktu Indonesia Barat) atau GMT+7:

    ```python
    tzinfo = tz.gettz("Asia/Jakarta")
    ```

> Selengkapnya mengenai list timezone identifier silakan cek di https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

Penerapan `tz` dalam pembuatan data `time` dan `timezone` dilakukan via pengisian parameter `tzinfo`. Contoh penerapannya:

- Timezone pada tipe `time`:

    ```python
    from dateutil import tz
    from datetime import time

    tzinfo = tz.gettz("America/New_York")
    data_time = time(hour=13, minute=14, second=31, tzinfo=tzinfo)

    print("time:", data_time)
    # output ➜ time: 13:14:31

    print("timezone:", data_time.tzinfo)
    # output ➜ timezone: tzfile('US/Eastern')
    ```

- Timezone pada tipe `datetime`:

    ```python
    from dateutil import tz
    from datetime import datetime

    data_datetime = datetime(year=2020, month=1, day=31, hour=13, minute=14, second=31, tzinfo=tzinfo)

    print("datetime:", data_datetime)
    # output ➜ datetime: 2020-01-31 13:14:31-05:00

    print("timezone:", data_time.tzinfo)
    # output ➜ timezone: tzfile('US/Eastern')
    ```

- Timezone pada tipe `datetime` hasil kombinasi `date` dan `time`:

    ```python
    from dateutil import tz
    from datetime import date, time

    data_date = date(year=2020, month=1, day=31)
    data_time = time(hour=13, minute=14, second=31)
    data_datetime = datetime.combine(data_date, data_time, tzinfo=tzinfo)

    print("datetime:", data_datetime)
    # output ➜ datetime: 2020-01-31 13:14:31-05:00

    print("timezone:", data_time.tzinfo)
    # output ➜ timezone: tzfile('US/Eastern')
    ```

### ◉ Local timezone vs. UTC vs. specific timezone vs. no timezone

Selain method `tz.gettz()` ada juga 2 method untuk keperluan timezone lainnya, yaitu:

- Method `tz.tzlocal()` untuk membuat data timezone sesuai waktu local
- Method `tz.tzutc()` untuk membuat data timezone dengan offset UTC

Contoh penerapan:

```python
from dateutil import tz
from datetime import date, time, datetime

tzinfo = tz.tzlocal()
data_datetime = datetime(2020, 1, 31, 13, 14, 31, tzinfo=tzinfo)
print("datetime:", data_datetime)
# output ➜ datetime: 2020-01-31 13:14:31+07:00

tzinfo = tz.tzutc()
data_datetime = datetime(2020, 1, 31, 13, 14, 31, tzinfo=tzinfo)
print("datetime:", data_datetime)
# output ➜ datetime: 2020-01-31 13:14:31+00:00

tzinfo = tz.gettz("America/New_York")
data_datetime = datetime(2020, 1, 31, 13, 14, 31, tzinfo=tzinfo)
print("datetime:", data_datetime)
# output ➜ datetime: 2020-01-31 13:14:31-05:00

data_datetime = datetime(2020, 1, 31, 13, 14, 31)
print("datetime:", data_datetime)
# output ➜ datetime: 2020-01-31 13:14:31
```

Silakan perhatikan ke-4 output statement `print` di atas. Kesemuanya berisi informasi datetime yang sama persis namun berbeda timezone. Meskipun informasi tanggal dan waktunya sama persis, jika timezone-nya berbeda maka data tersebut menunjukkan datetime yang benar-benar berbeda.

### ◉ Konversi datetime antar timezone

Melanjutkan pembahasan section sebelumnya, data `2020-01-31 13:14:31+07:00` adalah ekuivalen dengan:

- Data `2020-01-31 06:14:31+00:00` pada zona waktu UTC
- Data `2020-01-31 01:14:31-05:00` pada zona waktu New York

Sampai sini bisa disimpulkan bahwa:

- Dua buah datetime adalah tidak sama jika informasi datetime sama persis namun timezone-nya berbeda.
- Dua buah datetime bisa saja ekuivalen atau sama meskipun informasi datetime dan timezone-nya berbeda.

Cara manual untuk mencari data `datetime` di zona waktu lain adalah dengan melakukan operasi tambah/kurang terhadap timezone-nya. Misalnya: Data `2020-01-31 13:14:31` WIB (GMT+7), kalau dikonversi ke timezone UTC caranya cukup dengan kurangi saja dengan 7 jam, hasilnya: `2020-01-31 06:14:31` UTC (GMT+0).

Atau, praktisnya bisa dengan menggunakan method `astimezone()` milik tipe data `datetime`.

```python
def print_dt(d):
    print("datetime:", d, "| tz:", d.tzname())

from dateutil import tz
from datetime import date, time, datetime

data = datetime(2020, 1, 31, 13, 14, 31, tzinfo=None)
print_dt(data)
# output ➜ datetime: 2020-01-31 13:14:31       | tz: None

data_local_tz = data.astimezone(tz.tzlocal())
print_dt(data_local_tz)
# output ➜ datetime: 2020-01-31 13:14:31+07:00 | tz: SE Asia Standard Time

data_new_york_tz = data.astimezone(tz.gettz("America/New_York"))
print_dt(data_new_york_tz)
# output ➜ datetime: 2020-01-31 01:14:31-05:00 | tz: EST

data_utc_tz = data.astimezone(tz.tzutc())
print_dt(data_utc_tz)
# output ➜ datetime: 2020-01-31 06:14:31+00:00 | tz: UTC
```

Penjelasan:

- Variabel `data` dibuat dengan isi datetime `2020-01-31 13:14:31` tanpa informasi timezone.

- Penerapan method `astimezone()` terhadap data tanpa timezone berefek ke penambahan timezone tanpa perubahan waktu.

    - Variabel `data_local_tz` berisi informasi datetime yang sama persis dengan `data` tapi dengan timezone adalah WIB atau GMT+7.

- Kemudian variabel `data_local_tz` dikonversi ke timezone New York dan hasilnya disimpan di variabel `data_new_york_tz`. Variabel ini berisi data yang mengarah ke suatu waktu yang sama tapi berbeda timezone.

    - Pada tanggal 31 Januari 2020, selisih jam antara GMT+7 dan New York tz (EST) adalah sebanyak `-12 jam`, maka output hasil konversi timezone data `2020-01-31 13:14:31+07:00` WIB adalah `2020-01-31 01:14:31-05:00` EST.

- Lalu variabel `data_new_york_tz` dikonversi ke UTC timezone dengan hasil disimpan di variabel `data_utc_tz`.

    - Pada tanggal 31 Januari 2020, selisih jam antara New York tz (EST) dan UTC adalah sebanyak `+5 jam`, maka output hasil konversi timezone data `2020-01-31 01:14:31-05:00` EST adalah `2020-01-31 06:14:31+00:00` UTC.

Semoga sampai sini cukup jelas.

:::info

Dalam konversi timezone, komputer membutuhkan setidaknya 2 hal agar konversi timezone terhadap data datetime menghasilkan output yang valid, yaitu:

- Informasi timezone asal dan tujuan
- Informasi tanggal timezone asal atau tujuan.

Poin ke-2 sangat penting untuk diketahui karena beberapa timezone mengadopsi sistem yang didalamnya ada pergeseran jam sebanyak 2 kali dalam setahun. Contohnya seperti timezone Pacific Time (PT). Selisih atau offset timezone PT terhadap UTC di bulan Juni adalah `-7 jam` sedangkan pada bulan Desember adalah `−8 jam`. Unik bukan?

Selengkapnya https://en.wikipedia.org/wiki/Pacific_Time_Zone

:::

### ◉ Mengubah timezone tanpa konversi datetime

Untuk mengkonversi suatu data `datetime` ke timezone lain, gunakan method `astimezone()`. Namun untuk merubah timezone tanpa melakukan konversi waktu, maka gunakan method `replace()`. Contoh:

```python
def print_dt(d):
    print("datetime:", d, "| tz:", d.tzname())

from dateutil import tz
from datetime import date, time, datetime

data = datetime(2020, 1, 31, 13, 14, 31, tzinfo=None)
print_dt(data)
# output ➜ datetime: 2020-01-31 13:14:31       | tz: None

data_local_tz = data.replace(tzinfo=tz.tzlocal())
print_dt(data_local_tz)
# output ➜ datetime: 2020-01-31 13:14:31+07:00 | tz: SE Asia Standard Time

data_new_york_tz = data.replace(tzinfo=tz.gettz("America/New_York"))
print_dt(data_new_york_tz)
# output ➜ datetime: 2020-01-31 13:14:31-05:00 | tz: EST

data_utc_tz = data.replace(tzinfo=tz.tzutc())
print_dt(data_utc_tz)
# output ➜ datetime: 2020-01-31 13:14:31+00:00 | tz: UTC
```

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/datetime-timezone">
        github.com/novalagung/dasarpemrogramanpython-example/../datetime-timezone
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [DateTime ➜ Parsing & Formatting](/basic/datetime-parsing-formatting)

### ◉ TBA

- Locale

### ◉ Referensi

- https://docs.python.org/3/library/datetime.html
- https://stackoverflow.com/questions/3305413/
- https://realpython.com/python-datetime/
- https://en.wikipedia.org/wiki/Pacific_Time_Zone

</div>
