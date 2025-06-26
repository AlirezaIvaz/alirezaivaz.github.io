// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'علیرضا ایوز',
    tagline: 'وب‌سایت شخصی من :)',
    favicon: 'img/icons/favicon.ico',

    // Set the production url of your site here
    url: 'https://alirezaivaz.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: '', // Usually your GitHub org/user name.
    projectName: '', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fa-IR',
        locales: ['fa-IR'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/AlirezaIvaz/alirezaivaz.github.io/blob/main/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    blogTitle: 'وبلاگ',
                    blogSidebarTitle: 'آخرین پست‌ها',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/AlirezaIvaz/alirezaivaz.github.io/blob/main/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/social_card.png',
            navbar: {
                title: 'علیرضا ایوز',
                logo: {
                    alt: 'علیرضا ایوز',
                    src: 'img/icons/icon-192.png',
                },
                items: [
                    {
                        to: '/blog',
                        label: 'وبلاگ',
                        position: 'left'
                    },
                    // {
                    //     type: 'docSidebar',
                    //     sidebarId: 'tutorialSidebar',
                    //     position: 'left',
                    //     label: 'آموزش‌ها',
                    // },
                    {
                        to: '/about',
                        label: 'دربارهٔ من',
                        position: 'left'
                    },
                    {
                        to: '/contact',
                        label: 'تماس با من',
                        position: 'left'
                    },
                    {
                        to: '/donate',
                        label: 'حمایت از من',
                        position: 'left'
                    },
                    {
                        href: 'https://github.com/AlirezaIvaz/alirezaivaz.github.io',
                        label: 'گیت‌هاب',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `© ۱۳۹۶ - ۱۴۰۴ علیرضا ایوز<br>همهٔ نوشته‌ها و محتوای این وب‌سایت تحت <a href="/license">مجوز بین‌المللی کریتیو کامنز ۴.۰ (CC BY 4.0)</a> در دسترس است.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: [
                    'powershell', 'bash'
                ],
            },
        }),
};

export default config;
