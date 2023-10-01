// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dasar Pemrograman Python',
  tagline: 'Panduan Ringkas untuk Cepat Belajar Pemrograman Python, Gratis!',
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

  scripts: [
    {
      src: 'https://pyscript.net/latest/pyscript.js',
      defer: true
    }
  ],

  stylesheets: [
    {
      href: 'https://pyscript.net/latest/pyscript.css'
    }
  ],
  
  plugins: [
    '@stackql/docusaurus-plugin-structured-data',
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
            label: '📖 Webbook/Ebook',
            items: [
              {
                label: 'Dasar Pemrograman Golang ',
                href: 'https://dasarpemrogramangolang.novalagung.com',
              },
              {
                label: 'Dasar Pemrograman Rust ',
                href: 'https://dasarpemrogramanrust.novalagung.com',
              },
              {
                label: 'How To ',
                href: 'https://howto.novalagung.com',
              },
            ]
          },
          {
            position: 'left',
            label: '▶️ Udemy courses',
            items: [
              {
                label: 'Udemy Course: Praktis Belajar Docker dan Kubernetes (FREE Juni 2023) ',
                href: 'https://www.udemy.com/course/praktis-belajar-docker-dan-kubernetes-untuk-pemula/?couponCode=FREE-202306',
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
      structuredData: {
        excludedRoutes: [ ],  
        verbose: true,
        featuredImageDimensions: {
          width: 1200,
          height: 627,
        },
        authors: {
          'Noval Agung Prayogo': {
            authorId: '1',
            url: 'https://www.linkedin.com/in/novalagung',
            imageUrl: 'https://i.stack.imgur.com/99yxf.jpg',
            sameAs: [
              'https://stackoverflow.com/users/1467988/novalagung',
              'https://www.udemy.com/user/noval-agung-prayogo',
              'https://apps.apple.com/id/developer/noval-agung-prayogo/id1163677873?l=id',
              'https://novalagung.medium.com',
              'https://adplist.org/mentors/noval-agung-prayogo',
              'https://novalagung.com',
              'https://linktr.ee/novalagung',
              'https://www.instagram.com/novalagung',
              'https://www.facebook.com/novalagungprayogo',
              'https://www.codementor.io/@novalagung'
            ],
          },
        },  
        organization: {
          sameAs: [
            'https://web.facebook.com/adamstudio.page',
            'https://www.instagram.com/adamstudio.ig',
            'https://github.com/adamstudiogh'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'hello@novalagung.com',
          },
          logo: {
            '@type': 'ImageObject',
            inLanguage: 'id',
            '@id': 'adamstudio',
            url: 'https://avatars.githubusercontent.com/u/65223287',
            contentUrl: 'https://avatars.githubusercontent.com/u/65223287',
            width: 1440,
            height: 900,
            caption: 'Adam Studio',
          },
          // address: {
          //   '@type': 'PostalAddress',
          //   addressCountry: 'AU', // https://en.wikipedia.org/wiki/ISO_3166-1
          //   postalCode: '3001',
          //   streetAddress: 'Level 24, 570 Bourke Street, Melbourne, Victoria',
          // },
          // duns: '750469226',
          // taxID: 'ABN 65 656 147 054',
        },
        website: {
          inLanguage: 'id',
        },
        webpage: {
          inLanguage: 'id',
          // datePublished: '2021-07-01',
        },
        breadcrumbLabelMap: {}
      },
    }),
};

module.exports = config;
