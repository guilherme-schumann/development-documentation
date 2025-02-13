import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'epag Documentation',
  tagline: 'Check out our guides and examples for integrating epag',
  favicon: 'img/Favicon-epag.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'epag', // Usually your GitHub org/user name.
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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        alt: 'epag Docs - Logo',
        src: 'img/Image - epag - Docs.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: 'apiReferences',
          label: 'API References',
          position: 'left',
        },
        {
          to: 'releases',
          label: 'Releases',
          position: 'left',
        },
        {
          to: 'support',
          label: 'Support',
          position: 'left',
        },
        {
          to: 'statusPage',
          label: 'Status Page',
          position: 'left',
        },
        {
          href: 'https://documenter.getpostman.com/view/32342679/2sA3JKcMvf',
          label: 'Postman',
          position: 'right',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'epag Docs - Logo',
        src: 'img/Image - epag - Docs.svg',
      },
      style: 'light',
      links: [
        {
          title: 'Menu',
          items: [
            {
              label: 'Docs',
              to: '/docs/introduction',
            },
            {
              label: 'API References',
              to: '/docs/introduction',
            },
            {
              label: 'Releases',
              to: '/docs/introduction',
            },
            {
              label: 'Support',
              to: '/docs/introduction',
            },
            {
              label: 'Status Page',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Our Website',
              to: 'https://epag.com/',
            },
            {
              label: 'Terms & Conditions',
              to: 'https://ep-lp.com/terms-conditions/',
            },
            {
              label: 'Privacy Policy',
              to: 'https://ep-lp.com/policy-privacy/',
            },
            {
              label: 'Imprint',
              to: 'https://ep-lp.com/imprint/',
            },
            {
              label: 'Prohibited',
              to: 'https://www.epag.com/en/legal/prohibited/',
            },
          ],
        },
        {
          title: 'Test API in Postman',
          items: [
            {
              label: 'Postman',
              href: 'https://documenter.getpostman.com/view/32342679/2sA3JKcMvf',
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
