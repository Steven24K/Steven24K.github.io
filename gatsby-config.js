module.exports = {
  siteMetadata: {
    title: 'Steven Koerts',
  },
  plugins: ['gatsby-plugin-react-helmet'],
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
