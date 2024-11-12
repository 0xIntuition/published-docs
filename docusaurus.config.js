/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Intuition Docs',
  tagline: '',
  url: 'https://tech.docs.intuition.systems',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/intuition-logo-white.ico',

  organizationName: '0xintuition', // Usually your GitHub org/user name.
  projectName: 'published-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      // '@docusaurus/preset-classic',
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [[require('./src/plugins/remark-apollo-sandbox'), {}]],
        },
        blog: false,
        pages: false,
        theme: {
          customCss: [
            require.resolve('./css/custom.css'),
            require.resolve('./css/docu-notion-styles.css'),
         /*   require.resolve('./css/colors.css'),*/
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
          content:
            'knowledge graph, trust, documentation, Web3 security, developer docs',
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
            label: 'GitHub',
            position: 'right',
          },
          {
            to: 'https://discord.gg/0xintuition',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright ${new Date().getFullYear()} Intuition`,
      },
    }),
};

module.exports = config;
