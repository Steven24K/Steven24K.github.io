/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.


const siteConfig = {
  title: 'Steven Koerts' /* title for your website */,
  tagline: 'Mijn persoonlijke blog, website en portfolio',
  cv: "pdf/Curriculum_Vitea_Steven_Koerts.pdf",
  email: "info@stevenkoerts.nl",
  url: 'https://steven24k.github.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'Portfolio',
  organizationName: 'Steven Koerts',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {page: 'about', label: 'Over Mij'},
    {doc: 'projecten', label: 'Projecten'},
    {blog: true, label: 'Blog'},
    {page: 'videos', label: 'Videos'},
    {page: 'contact', label: 'Contact'}
  ],



  /* path to images for header/footer */
  headerIcon: 'img/profiel.jpg',
  footerIcon: 'img/profiel.jpg',
  favicon: 'img/profiel.jpg',

  /* colors for website */
  colors: {
    primaryColor: '#10408c',
    secondaryColor: '#14e877',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Made by Steven Koerts',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
   repoUrl: 'https://github.com/Steven24K/steven24k.github.io',
};



module.exports = siteConfig;
