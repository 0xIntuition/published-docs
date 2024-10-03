// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "docu-notion-sample-site",
  tagline: "",
  url: "https://0xintuition.github.io",
  baseUrl: "/published-docs/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/intuition-logo-white.ico",

  organizationName: "0xintuition", // Usually your GitHub org/user name.
  projectName: "published-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: undefined, //  `undefined` to create a fully autogenerated sidebar.
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve("./css/docu-notion-styles.css"),
            require.resolve("./css/custom2.css"),
            require.resolve("./css/colors.css")
            require.resolve(
              "./css/gifplayer.css"
              //"./node_modules/react-gif-player/dist/gifplayer.css" // this gave a big red compile warning which is seaming unrelated "  Replace Autoprefixer browsers option to Browserslist config..."
            ),
          ],
        },
      }),
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
      },
    },
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // language: ["en", "fr"],
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/",
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
        defaultMode: 'dark',
        respectPrefersColorScheme: false
      },
      metadata: [
        {
          name: "keywords",
          content: "knowledge graph, trust, documentation, Web3 security, developer docs",
        },
      ],
      sitemap: {
        // https://www.sitemaps.org/protocol.html#xmlTagDefinitions
        changefreq: "weekly",
        priority: 0.5,
        ignorePatterns: [],
      },
      navbar: {
        title: "Intuition Docs",
        logo: {
          alt: "Logo",
          src: "img/logo-bw.svg",
        },
        items: [
                    {
                        href: 'https://github.com/0xIntuition',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        label: 'Discord',
                        href: 'https://discord.com/channels/909531430881746974/1151564740255043604',
                        position: 'right',
                    },
                ],
            },
   //  prism: {
     //theme: darkCodeTheme,
     //darkTheme: darkCodeTheme,
     //},
    }),
};

module.exports = config;
