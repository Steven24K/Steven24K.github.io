const path = require(`path`);
const _ = require("lodash")

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
      //Create the different templates
      const projectDetail = path.resolve("src/templates/detail.js")
      graphql(`
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
       if(result.errors){
          console.log(result.errors)
          resolve()
       }

       //Create project page
       _.each(result.data.allMarkdownRemark.edges, edge => {
        createPage({
          path: edge.node.fields.slug, // required
          component: projectDetail,
          context: {
            slug: edge.node.fields.slug,
          },
        })
      })


      

       resolve()
      })
    })
  };


  

  