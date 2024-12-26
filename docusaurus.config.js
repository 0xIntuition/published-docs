/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Intuition Docs',
  tagline: '',
  url: 'https://tech.docs.intuition.systems',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: '0xintuition', // Usually your GitHub org/user name.
  projectName: 'published-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      // '@docusaurus/preset-classic',
      'classic',
      {
        docs: {
          routeBasePath: 'landing',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [[require('./src/plugins/remark-apollo-sandbox'), {}]],
        },
        blog: false,
        pages: false,
        theme: {
          customCss: [
            require.resolve('./css/custom.css'),
            require.resolve('./css/docu-notion-styles.css'),
            require.resolve('./css/colors.css'),
            require.resolve('./css/gifplayer.css'),
          ],
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
      },
    },
  },
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // language: ["en", "fr"],
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      metadata: [
        {
          name: 'keywords',
          content: 'knowledge graph, trust, documentation, Web3 security, developer docs',
        },
      ],
      sitemap: {
        // https://www.sitemaps.org/protocol.html#xmlTagDefinitions
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: [],
      },
      navbar: {
        hideOnScroll: false,
        title: '',
        logo: {
          alt: 'Logo',
          src: 'img/intuition_full_logo_2.svg',
          href: 'https://intuition.systems',
        },
        items: [
          {
            to: 'https://github.com/0xIntuition',
            className: 'navbar--github-link',
            'aria-label': 'GitHub',
            position: 'right',
          },
          {
            to: 'https://discord.gg/0xintuition',
            className: 'navbar--discord-link',
            'aria-label': 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Intuition`,
        links: [
          {
            title: 'Developer',
            items: [
              {
                label: 'Whitepaper',
                href: 'https://github.com/0xIntuition/intuition-whitepaper/blob/main/intuition_whitepaper.pdf',
              },
              {
                label: 'Litepaper',
                href: 'https://github.com/0xIntuition/intuition-whitepaper/blob/main/intuition_litepaper.pdf',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: 'intuition-contracts',
                href: 'https://github.com/0xIntuition/intuition-contracts',
              },
              {
                label: 'intuition-ts',
                href: 'https://github.com/0xIntuition/intuition-ts',
              },
              {
                label: 'intuition-rs',
                href: 'https://github.com/0xIntuition/intuition-rs',
              },
              {
                label: 'intuition-chrome-extension',
                href: 'https://github.com/0xIntuition/intuition-chrome-extension',
              },
              {
                label: 'intuition-snap',
                href: 'https://github.com/0xIntuition/intuition-snap',
              },
              {
                label: 'intuition-frame',
                href: 'https://github.com/0xIntuition/intuition-frame',
              },
            ],
          },
          {
            title: 'Ecosystem',
            items: [
              {
                label: 'Homepage',
                href: 'https://intuition.systems',
              },
              {
                label: 'Explorer',
                href: 'https://beta.portal.intuition.systems',
              },
              {
                label: 'Data Populator',
                href: 'https://data-populator.onrender.com/',
              },
              {
                label: 'Chrome Extension',
                href: 'https://github.com/0xIntuition/intuition-chrome-extension',
              },
              {
                label: 'Genesis NFT',
                href: 'https://intuition.church',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'X',
                href: 'https://x.com/0xintuition',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/0xintuition',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/intuitionsystems',
              },
              {
                label: 'Warpcast',
                href: 'https://warpcast.com/0xintuition',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/0xintuition',
              },
              {
                label: 'Galxe',
                href: 'https://app.galxe.com/quest/intuition',
              },
              {
                label: 'Mirror',
                href: 'https://mirror.xyz/0x0bcAFff6B45769B53DE34169f08AB220d2b9F910',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config
