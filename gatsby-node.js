/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: "post" })
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }

}


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(`
    {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `
    ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug, 
                component: path.resolve("./src/templates/Post.js"),
                context: {
                    slug: node.fields.slug
                }
            })
        })
    })
}
