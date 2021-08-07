import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { getRandomArbitrary } from "../utils/utils";

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <StaticQuery
            query={graphql`
        query {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                totalCount
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            category
                            date
                        }
                        fields {
                            slug
                        }
                        excerpt
                    }
                }
            }
        }
        `}

            render={data => (<Layout>
                <SEO title="Posts" />
                <div className="container">

                    <div className="posts">

                        <h1 className="under-line">Posts</h1>

                        <div>
                            {data.allMarkdownRemark.totalCount === 0 ?
                                (<div>Er zijn nog posts, meer content is comming soon</div>) :
                                (
                                    <ul className="post-grid">
                                        {data.allMarkdownRemark.edges.map(({ node }) => (
                                            <li style={{
                                                fontSize: getRandomArbitrary(20, 70)
                                            }} className="post-item under-line" key={node.id}>
                                                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                        </div>


                    </div>

                </div>
            </Layout>)}
        />
    }
}

export default Posts