module.exports = {
    siteMetadata: {
        title: `CanWork Blog`,
        description: `The CanWork Blog.`,
        logoUrl: `https://www.canwork.io/assets/img/logo.svg`
    },
    plugins: [
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: "posts",
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: 'gatsby-source-firestore',
            options: {
                credential: require("./firebase.json"),
                types: [{
                        type: 'Book',
                        collection: 'books',
                        map: doc => ({
                            title: doc.title,
                            isbn: doc.isbn,
                            author___NODE: doc.author.id,
                        }),
                    },
                    {
                        type: 'Author',
                        collection: 'authors',
                        map: doc => ({
                            name: doc.name,
                            country: doc.country,
                            books___NODE: doc.books.map(book => book.id),
                        }),
                    },
                ],
            },
        },
    ],
}