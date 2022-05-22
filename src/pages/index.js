import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import CodeStory from "../lib/CodeStory"
import Clock from "../lib/CanvasClock"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    // console.log(this.props.data)
    let last_story = this.props.data.allMarkdownRemark.edges[0].node
    return <Layout>

      <SEO title="Home" keywords={[`Steven Koerts`, `software developer`, `webdeveloper`, `portfolio`, `blog`]} />

      <div className="container homepage">
        <div className="row">
          <div className="col-md-8">

            <CodeStory />

            <p className="card">
              <h3>Contact</h3>

              Mij beter leren kennen? Neem contact met mij op!

              <a className="btn btn-primary" href={`mailto: ${this.props.data.site.siteMetadata.email}`}>Mail me!</a>

              <h3 className="under-line">Laatste story</h3>

              <div className="highlight">
                <Link to={last_story.fields.slug}>
                  <h4>{last_story.frontmatter.title}</h4>
                </Link>
                <p>{last_story.excerpt}</p>
              </div>

            </p>

            <p className="card">
              <h3>De tijd tikt altijd door</h3>
              <Clock />
            </p>

          </div>

          <div className="col-md-4">

            <h2>Bio</h2>
            <p className="card">
              <span dangerouslySetInnerHTML={{ __html: this.props.data.site.siteMetadata.bio }} />

              <Link className="btn btn-lg btn-primary" to="/About">Full bio (NL)</Link>

              <img className="img-fluid" alt="profile-steven-koerts" src="./images/StevenKoerts2.JPG" />

            </p>

          </div>

        </div>

      </div>

    </Layout>
  }
}


export const query = graphql`
query {
    site {
        siteMetadata {
            title
            description
            bio
            author
            email
            github
            linkedin
            instagram
            youtube
            twitter
            curriculum
            profileImage
        }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            category
                        }
                        fields {
                            slug
                        }
                        excerpt
                    }
                }
            }
}
`


export default Index
