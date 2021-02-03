const path = require("path")
module.exports = {
  siteMetadata: {
    title: `KimSY Personal Website`,
    description: `Kim Sheng Yong's Personal site. He shares about tech, life and his thoughts here.`,
    author: `@kimsy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    // `gatsby-transformer-remark`, //convert md into html
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Light+ (default light)",
              injectStyles: true,
              extensions: [],
              extensionDataDirectory: path.resolve("extensions"),
              logLevel: "error",
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/profile-pic.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
