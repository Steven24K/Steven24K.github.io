module.exports = {
  siteMetadata: {
    title: 'Steven Koerts',
    profilePic: 'profiel.jpg',
    CV: 'Curriculum_Vitea_Steven_Koerts.pdf',
  },
  plugins:[
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-csv`,
      options: {
        noheader: true,
      },
    },
  ]
}
