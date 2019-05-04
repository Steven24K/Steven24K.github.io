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
                <div className="crop">
                    <div className="card">
                        <div className="blog-post" dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }}>
                        </div>
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