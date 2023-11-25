// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { buildConfig } = require('./src/config');

const config = buildConfig({
  title: 'Dasar Pemrograman Python',
  tagline: 'Panduan Ringkas untuk Cepat Belajar Pemrograman Python, Gratis!',
  url: 'https://dasarpemrogramanpython.novalagung.com',
  projectName: 'dasarpemrogramanpython',
  seoKeywords: 'python, belajar python, pemrograman python, cargo, concurrent programming, noval agung, data science, machine learning',
  googleTrackingID: 'G-JLWG9B72SF',
  facebookAppID: '875100400724859',
  algoliaAppID: '',
  algoliaApiKey: '',
  algoliaIndexName: '',
});

module.exports = config;
