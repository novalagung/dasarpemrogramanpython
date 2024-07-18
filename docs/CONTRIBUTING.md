---
sidebar_position: 3
title: Contribution & Tech Stack
sidebar_label: Contribution & Tech Stack
---

Ebook Dasar Pemrograman Python adalah project open source. Siapapun bebas untuk berkontribusi di sini, bisa dalam bentuk perbaikan typo, update kalimat, maupun submit tulisan baru.

Bagi kawan-kawan yang berminat untuk berkontribusi, silakan fork [github.com/novalagung/dasarpemrogramanpython](https://github.com/novalagung/dasarpemrogramanpython), kemudian langsung saja cek/buat issue kemudian submit relevan pull request untuk issue tersebut 😊

## Checkout project

```
git clone https://github.com/novalagung/dasarpemrogramanpython.git
git submodule update --init --recursive --remote
```

## Maintainer

E-book ini di-inisialisasi dan di-maintain oleh Noval Agung Prayogo.

## Contributors

Berikut merupakan hall of fame kontributor yang sudah berbaik hati menyisihkan waktunya untuk membantu pengembangan e-book ini.

1. [Arsy Opraza Akma](https://github.com/arasopraza)
1. [Barep Bimo Pangestu](https://github.com/bosmobosmo)
1. [Mohammad Safri Dwi Rizky](https://github.com/safridwirizky)
1. ... anda 🚀

## Ebook/webhook techstack & architecture

Jika pembaca tertarik untuk membuat konten ebook berbasis web sekaligus versi PDF file-nya, bisa menggunakan link berikut sebagai referensi:

> https://medium.com/geekculture/serverless-e-book-web-book-using-docusaurus-v2-github-pages-actions-and-pdf-tools-4fef54847b85

Tools yang digunakan:

- Web-book engine ➜ [Docusaurus v2](https://docusaurus.io/)
- PDF generator ➜ [Prince XML](https://www.princexml.com/) + [docusaurus-prince-pdf](https://github.com/signcl/docusaurus-prince-pdf) + [PDFtk](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/)
- Source code repository ➜ [GitHub](https://github.com/)
- Hosting ➜ [GitHub Pages](https://pages.github.com/)
- CI/CD pipeline ➜ [GitHub Actions](https://github.com/features/actions)
- Content Search ➜ [Algolia DocSearch](https://docsearch.algolia.com/)

Desain arsitektur:

![Dasar pemrograman python](https://raw.githubusercontent.com/novalagung/dasarpemrogramanrust/master/etc/base%20architecture.jpg)
