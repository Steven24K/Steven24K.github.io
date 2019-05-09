import React from "react"
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <Layout>
            <SEO title="blog-post" />

            <div className="container">

                <div className="blog-post">
                    
                    <h1>{this.props.data.markdownRemark.frontmatter.title}</h1>

                    <div dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }}>
                    </div>

                    <div><i>Datum: {this.props.data.markdownRemark.frontmatter.date}</i></div>

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