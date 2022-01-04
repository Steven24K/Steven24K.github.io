import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import CodeStory from "../lib/CodeStory"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return <Layout>

      <SEO title="Home" keywords={[`Steven Koerts`, `software developer`, `webdeveloper`, `portfolio`, `blog`]} />

      <div className="container homepage">
        <div className="row">
          <div className="col-md-8">

            <CodeStory />

          </div>

          <div className="col-md-4">

            <h2>Bio</h2>
            <p className="card">
              <span dangerouslySetInnerHTML={{ __html: this.props.data.site.siteMetadata.bio }} />

              <Link to="/About">Read full bio</Link>

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
}
`


export default Index
