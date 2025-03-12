import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Letpay Documentation',
  tagline: 'Check out our guides and examples for integrating Letpay',
  favicon: 'img/Favicon-icon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  markdown: {
    mermaid: true, // Able Mermaid to do Diagram in Markdown
  },
  themes: ['@docusaurus/theme-mermaid'], // Adiciona o tema Mermaid
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Letpay', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          // Useful options to enforce blogging best practices
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Letpay Docs - Logo',
        src: 'img/Image - letpay - Docs.svg',
        srcDark: 'img/Image - letpay - Docs-dark.svg',
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
        // {
        //   type: "docSidebar",
        //   sidebarId: "reportsSidebar",
        //   position: "left",
        //   label: "Reports",
        // },
        {
          to: "https://documenter.getpostman.com/view/27205548/2sA3JQ4eeP",
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
        alt: "Letpay Docs - Logo",
        src: "img/Image - letpay - Docs.svg",
        srcDark: 'img/Image - letpay - Docs-dark.svg',
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
              to: "/docs/Payments/Brazil/simple-pix",
            },
            {
              label: "Two Step Payments",
              to: "/docs/Payment%20Order/create-payment-order",
            },
            {
              label: "Checkout",
              to: "/docs/Checkout/",
            },
            // {
            //   label: "Reports",
            //   to: "/docs/Reports/",
            // },
            {
              label: "API References",
              to: "https://documenter.getpostman.com/view/27205548/2sA3JQ4eeP",
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
              to: "https://letpay.co/",
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
              to: "https://letpay.co/legal/prohibited/",
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
