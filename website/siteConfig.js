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
  email: "no-mail",//"info@stevenkoerts.nl",
  url: 'http://stevenkoerts.nl/' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  cname: 'stevenkoerts.nl',

  // Used for publishing and more
  projectName: 'Steven24K.github.io',
  organizationName: 'Steven24K',


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

  noIndex: false,

  cleanUrl: true,
  customDocsPath: 'projects',

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Made by Steven Koerts',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'dracula',
  },

  // Add custom scripts here that would be placed in <script> tags
  //Add jquery, popper and bootstrap to site javascript files
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    'https://unpkg.com/popper.js/dist/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
    '/js/custom.js'
  ],

//Add bootstrap stylesheet to site
  stylesheets: [
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
  ],

  //Create a scroll to to top button
  scrollToTop: true,

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/profiel.jpg',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...

  //Link to GitHub repository
   repoUrl: 'https://github.com/Steven24K/steven24k.github.io',
};



module.exports = siteConfig;
