module.exports = {
  siteMetadata: {
    title: `Carboy - Jamband`,
    description: `Carboy is a Boston based jamband that mixes Stax era Soul and Psychedlic Funk with a touch of Afrobeat.`,
    author: `Carboy`,
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
        name: `shows`,
        path: `${__dirname}/src/data/shows`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bios`,
        path: `${__dirname}/src/data/bios`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bungee Shade\:400`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "carboy.rocks",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/svgs/
        }
      }
    }
  ],
}
