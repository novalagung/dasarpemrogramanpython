---
sidebar_position: 33
title: A.33. Python OOP ➜ Class Attribute & Method
sidebar_label: A.33. OOP ➜ Class Attribute & Method (WIP)
---

Perbedaan antara instance attribute vs class attribute

- Instance attribute / Instance variable ➜ variabel yang menempel ke variabel object yang datanya terisolasi pada object tersebut.
- Class attribute / Class variable ➜ variabel yang menempel ke class yang datanya bersifat global.

### ◉ Attribute lookup

Di Python, suatu class bisa saja memiliki class attribute dan instance attribute dengan nama sama persis. Pada kasus seperti ini, ketika value attribute diakses, maka:

1. Python mengembalikan value instance attribute.
1. Jika instance attribute yang dicari tidak ada, maka Python mengembalikan value class attribute.
1. Jika class attribute yang dicari tidak ada, maka error.

### ◉ Private attribute

Di Python, suatu class bisa saja memiliki class attribute dan instance attribute dengan nama sama persis. Pada kasus seperti ini, ketika value attribute diakses, maka:

1. Python mengembalikan value instance attribute.
1. Jika instance attribute yang dicari tidak ada, maka Python mengembalikan value class attribute.
1. Jika class attribute yang dicari tidak ada, maka error.
