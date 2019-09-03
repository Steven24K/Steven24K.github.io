import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"


class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <Layout>

      <SEO title="Home" keywords={[`Steven Koerts`, `software developer`, `webdeveloper`, `portfolio`, `blog`]} />


      <div className="big-image">

      </div>

      <div className="container">

        <div className="card">

          <div className='image-bar'>
            <img alt='' src='./images/home-4.jpg' />
            <img alt='' src='./images/home-1.jpg' />
            <img alt='' src='./images/home-2.jpg' />
            <img alt='' src='./images/home-3.jpg' />
          </div>

          <div className="line"></div>

          <div className='skills-bar'>

            <a target="_blank" rel="noopener noreferrer" className="btn btn-md btn-green" href={this.props.data.site.siteMetadata.curriculum}>Download mijn Curriculum</a>

            <div className='skill-items'>
              <h1>Software Engineer</h1>

              <h1>Webdeveloper</h1>

              <h1>Acteur</h1>
            </div>

          </div>


          <div className='image-bar'>
            <img alt='' src='./images/home-5.jpg' />
            <img alt='' src='./images/home-6.jpg' />
            <img alt='' src='./images/home-7.jpg' />
            <img alt='' src='./images/home-8.jpg' />
          </div>

          <div className="line"></div>

          <div className='skills-bar'>

            <div className='skill-items'>
              <h2>C#/.NET</h2>

              <h2>React</h2>

              <h2>Typescript/Javascript</h2>

              <h2>(no-)SQL</h2>

              <h2>PHP</h2>

            </div>

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
            instructables
            curriculum
            profileImage
        }
    }
}
`


export default Index
