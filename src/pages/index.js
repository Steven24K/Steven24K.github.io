import React from "react"
import { graphql } from "gatsby"
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
              to be, or not to be, thats the question Devoutly to be wish'd. to die, to sleep; If we have unearned
              luck If you pardon, we will mend

              Else the puck a liar call; Of edward's heirs the murderer shall be. That make ingrateful man! Those
              that slew thy virgin knight; The slings and arrows of outrageous fortune, Here's to my love! That my
              youth suffer'd. My story being done,

              When he himself might his quietus make And so the general of hot desire Which many legions of true
              hearts had warm'd;

              First, as I am his kinsman and his subject, A dateless bargain to engrossing death!

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
            author
            email
            github
            linkedin
            instagram
            youtube
            facebook
            twitter
            curriculum
            profileImage
        }
    }
}
`


export default Index
