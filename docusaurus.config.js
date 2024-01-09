// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { buildConfig } = require('./src/config');

const config = buildConfig({
  title: 'Dasar Pemrograman Python',
  tagline: 'Panduan Ringkas untuk Cepat Belajar Pemrograman Python, Gratis!',
  url: 'https://dasarpemrogramanpython.novalagung.com',
  projectName: 'dasarpemrogramanpython',
  seoKeywords: 'python, belajar python, pemrograman python, noval agung, data analytics, fundamental python, contoh python, data science, machine learning',
  googleTrackingID: 'G-JLWG9B72SF',
  facebookAppID: '875100400724859',
  algoliaAppID: 'GTSLZ9HJP5',
  algoliaApiKey: 'd4cb065e748f1f0bde373e31b8f155a0',
  algoliaIndexName: 'dasarpemrogramanpython-novalagung',
});

module.exports = config;
