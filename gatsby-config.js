module.exports = {
    siteMetadata: {
        title: `CanWork Blog`,
        description: `The CanWork Blog.`,
        logoUrl : `https://www.canwork.io/assets/img/logo.svg`
    },
    plugins: [
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
}