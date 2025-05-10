import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'epag Documentation',
  tagline: 'Check out our guides and examples for integrating epag',
  favicon: 'img/Favicon-epag.ico',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  organizationName: 'epag',
  projectName: 'Documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: undefined,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'epag Docs - Logo',
        src: 'img/Image - epag - Docs.svg',
        srcDark: 'img/Image - epag - Docs-dark.svg',
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "left",
          label: "Overview",
        },
        {
          type: "docSidebar",
          sidebarId: "paymentsSidebar",
          position: "left",
          label: "Payments",
        },
        {
          type: "docSidebar",
          sidebarId: "twostepaymentsSidebar",
          position: "left",
          label: "Two Step Payments",
        },
        {
          type: "docSidebar",
          sidebarId: "checkoutSidebar",
          position: "left",
          label: "Checkout",
        },
        {
          type: "docSidebar",
          sidebarId: "payoutsSidebar",
          position: "left",
          label: "Payouts",
        },
        {
          type: "docSidebar",
          sidebarId: "reportsSidebar",
          position: "left",
          label: "Reports",
        },
        {
          to: "https://documenter.getpostman.com/view/27205548/2sB2iwGacC",
          label: "API References",
          position: "left",
        },
        {
          to: "/blog",
          label: "Releases",
          position: "left",
        },
      ],
    },
    footer: {
      logo: {
        alt: "epag Docs - Logo",
        src: "img/Image - epag - Docs.svg",
        srcDark: 'img/Image - epag - Docs-dark.svg',
      },
      style: "light",
      links: [
        {
          title: "Menu",
          items: [
            {
              label: "Overview",
              to: "/docs/introduction",
            },
            {
              label: "Payments",
              to: "/docs/payments/brazil/pix",
            },
            {
              label: "Two Step Payments",
              to: "/docs/two-step-payments/create-payment-order",
            },
            {
              label: "Checkout",
              to: "/docs/checkout/",
            },
            // {
            //   label: "Payouts",
            //   to: "/docs/payouts/",
            // },
            // {
            //   label: "Reports",
            //   to: "/docs/reports/",
            // },
            {
              label: "API References",
              to: "https://documenter.getpostman.com/view/27205548/2sB2iwGacC",
            },
            {
              label: "Releases",
              to: "/blog",
            },
            // {
            //   label: "Support",
            //   to: "/docs/introduction",
            // },
            // {
            //   label: "Status Page",
            //   to: "/docs/introduction",
            // },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Our Website",
              to: "https://epag.com/",
            },
            {
              label: "Terms & Conditions",
              to: "https://ep-lp.com/terms-conditions/",
            },
            {
              label: "Privacy Policy",
              to: "https://ep-lp.com/policy-privacy/",
            },
            {
              label: "Imprint",
              to: "https://ep-lp.com/imprint/",
            },
            {
              label: "Prohibited",
              to: "https://www.epag.com/en/legal/prohibited/",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
