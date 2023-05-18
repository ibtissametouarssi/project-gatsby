/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My gatsby`,
    description: `This is my resume online`,
    author: `Hala Rami`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Barlow`,
                variants: [`300`, `400`, `500`, `600`],
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        
        baseUrl: "hello.project",
        protocol: "http",
        hostingWPCOM: false,
        excludedRoutes: ["///comments", 
         "/yoast/**",
         "**/pages",
         "**/users",
         "**/users/me",
         "**/themes",
         "**/settings",
         "**/options/"
       ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My gatsby`,
        short_name: `HR`,
        start_url: `/`,
        background_color: `#303030`,
         theme_color: `#9c27b0`,
        display: `standalone`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}