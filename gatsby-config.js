module.exports = {
  siteMetadata: {
    title: `Steven Koerts`,
    description: `Mijn eigen website`,
    bio: `Programming and acting is both the creation and execution of scripts`,
    author: `Steven Koerts`,
    email: "s.koerts2@gmail.com",
    github: "https://github.com/Steven24K",
    linkedin: "https://nl.linkedin.com/in/steven-koerts-223aa3135",
    instagram: "https://www.instagram.com/hello_world_my_name_is_steven/",
    youtube: "https://www.youtube.com/channel/UCYoHlYm31DGTR3Soqs6My6Q/featured",
    twitter: "https://twitter.com/PoetrySteven",
    curriculum: "./documents/Curriculum_Vitae_Steven_Koerts.pdf",
    profileImage: "./images/profiel.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/content/images`,
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts/`,
        name: 'posts',
      },
    },
    //`gatsby-transformer-sharp`, error cant find python path
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
        icon: `static/images/icon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
