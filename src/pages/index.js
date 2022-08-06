import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import CodeStory from "../lib/CodeStory"
import Clock from "../lib/CanvasClock"
import { Map } from "immutable"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    // console.log(this.props.data)
    // let last_story = this.props.data.allMarkdownRemark.edges[0].node
    let bio = this.props.data.site.siteMetadata.bio


    return <Layout>

      <SEO title="Home" keywords={[`Steven Koerts`, `software developer`, `webdeveloper`, `portfolio`, `blog`]} />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 class="title">Hello World My Name Is Steven</h2>
            <h4 className="sub-title">{bio}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <CodeStory stack={Map()
              .set('profile_picture_start', <div style={{ width: '250px', marginLeft: 'auto', marginRight: 'auto' }}>
                <img width={'auto'} className="img-fluid" alt="profile-steven-koerts" src="./images/StevenKoerts1.JPG" />
              </div>)
              .set('profile_picture_end', <div style={{ width: '350px', marginLeft: 'auto', marginRight: 'auto' }}>
                <img width={'auto'} className="img-fluid" alt="profile-steven-koerts" src="./images/StevenKoerts2.JPG" />
              </div>)
              .set('clock', <Clock />)
            }
            />
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
