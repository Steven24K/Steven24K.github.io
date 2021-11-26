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

                        <div className="row">
                            <div className="col-6">
                                <div className="card">
                                    <h1>Some facts about me</h1>
                                    <ol>
                                        <li><b>Favorite IDE:</b> Visual Sudio Code</li>
                                        <li><b>Currently building:</b> Headless websites with React/Typescript/C#/Wordpress</li>
                                        <li><b>Personal project: </b><a target="_blank" href="https://github.com/Steven24K/CodeGenPHP">CodeGenPHP</a></li>
                                        <li><b>Favorite artists:</b> Johnny Cash &amp; Tupac are both legends</li>
                                    </ol>
                                </div>

                            </div>
                            <div className="col-6">
                                <div className="card">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ehPfn2AmZx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <i>Spoken word: Tweet on the lamppost</i>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                                <div className="card">
                                    <img className="img-fluid" alt="profile-steven-koerts" src="../images/home-3.jpg" />
                                    <i>Fotoshoot: Soda fabriek 2019 &copy;</i>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="card">
                                    <h2>Archief</h2>
                                    {data.allMarkdownRemark.totalCount === 0 ?
                                        (<div>Er zijn nog posts, meer content is comming soon</div>) :
                                        (
                                            <ul className="post-grid">
                                                {data.allMarkdownRemark.edges.map(({ node }) => (
                                                    <li style={{
                                                        fontSize: getRandomArbitrary(20, 30)
                                                    }} className="post-item under-line" key={node.id}>
                                                        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </Layout>)}
        />
    }
}

export default Posts