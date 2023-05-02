// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dasar Pemrograman Python',
  tagline: 'Panduan Ringkas untuk Cepat Belajar Pemrograman Python',
  url: 'https://dasarpemrogramanpython.novalagung.com',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'novalagung',
  projectName: 'dasarpemrogramanpython',
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-JLWG9B72SF',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**', '/wip/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords', content: 'python, belajar python, pemrograman python, cargo, concurrent programming, noval agung, data science, machine learning',
        },
        {
          name: 'author', content: 'Noval Agung Prayogo',
        },
        {
          name: 'og:image', content: 'https://dasarpemrogramanpython.novalagung.com/img/cover_media_share.png?v=1',
        }
      ],
      image: 'https://dasarpemrogramanpython.novalagung.com/img/cover_media_share.png?v=1',
      navbar: {
        title: 'Dasar Pemrograman Python',
        logo: {
          alt: 'Ebook Dasar Pemrograman Python - Panduan Ringkas untuk Cepat Belajar Pemrograman Python',
          src: 'https://dasarpemrogramanpython.novalagung.com/img/logo_small.png',
        },
        items: [
          {
            position: 'left',
            label: '📖 Ebook lainnya',
            items: [
              {
                label: 'Ebook: Dasar Pemrograman Golang ',
                href: 'https://dasarpemrogramangolang.novalagung.com',
              },
              {
                label: 'Ebook: Dasar Pemrograman Rust ',
                href: 'https://dasarpemrogramanrust.novalagung.com',
              },
              {
                label: 'Ebook: Learn Devops ',
                href: 'https://learndevops.novalagung.com',
              },
            ]
          },
          {
            position: 'left',
            label: '▶️ Udemy courses',
            items: [
              {
                label: 'Udemy Course: Praktis Belajar Docker dan Kubernetes (FREE April 2023) ',
                href: 'https://www.udemy.com/course/praktis-belajar-docker-dan-kubernetes-untuk-pemula/?couponCode=FREE-202304',
              },
            ]
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [ ],
        copyright: `${new Date().getFullYear()} | Maintained by Noval Agung Prayogo`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'python', 'toml'],
      },
      // algolia: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      //   contextualSearch: true,
      //   searchPagePath: '', // `false`, 'search'
      // },
    }),
};

module.exports = config;
