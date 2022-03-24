require('dotenv').config()

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: `production`,
        watchmode: true,
        overlayDrafts: !process.env.production,
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
