import React from "react"
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { graphql, Link } from "gatsby";

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <Layout>
            <SEO title={this.props.data.markdownRemark.frontmatter.title} />

            <div className="container">

                <div className="blog-post card">
                    
                    <div className="under-line">
                    <h1>{this.props.data.markdownRemark.frontmatter.title}</h1>
                    <div><i>Geplaatst op: {this.props.data.markdownRemark.frontmatter.date}</i></div>
                    <Link className="btn btn-link" to="/Posts">Terug naar overzicht</Link>
                    </div>

                    <div className="blog-content" dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }}>
                    </div>


                </div>

            </div>

        </Layout>
    }
}

export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug }}) {
        html
        frontmatter {
            title
            date
            category
        }
    }
}
`

export default Post