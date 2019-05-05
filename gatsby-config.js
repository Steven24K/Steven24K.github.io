module.exports = {
  siteMetadata: {
    title: `Steven Koerts`,
    description: `My personal website and portfolio, here I show and tell what I am up to at the moment.`,
    author: `Steven Koerts`,
    email: "s.koerts2@gmail.com",
    github: "https://github.com/Steven24K",
    linkedin: "https://nl.linkedin.com/in/steven-koerts-223aa3135",
    instagram: "https://www.instagram.com/steven_koerts/",
    youtube: "https://www.youtube.com/channel/UCYoHlYm31DGTR3Soqs6My6Q/featured",
    facebook: "https://www.facebook.com/24ksteven",
    instructables: "https://www.instructables.com/member/stevenk102/",
    curriculum: "./documents/Curriculum_Vitea_Steven_Koerts.pdf",
    profileImage: "./images/profiel.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts/`,
        name: 'posts',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'uploads',
              
            }
          },
          // Add more remark plugins here...

        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wwwstevenkoertsnl`,
        short_name: `stevenkoerts`,
        start_url: `/`,
        background_color: `#040d5c`,
        theme_color: `#040d5c`,
        display: `minimal-ui`,
        icon: `static/images/profiel.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
