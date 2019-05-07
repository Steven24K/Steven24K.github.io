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


      <div className="big-image" style={{ backgroundImage: `url("./images/profiel.jpg")` }}>

      </div>

      <div className="container">

        <div className="crop">

          <div className="card">

            <h1>Wat doe ik nu?</h1>

            Op dit moment studeer ik informatica aan de Hogeschool Rotterdam, ik zit in het 3ejaar en volg een minor
            in <a target="_blank" rel="noopener noreferrer" href="https://github.com/hogeschool/Software-Engineering-Minor">Software Engineering</a> in Typescript.
            
            <br></br>

           <a target="_blank" rel="noopener noreferrer" className="btn btn-md btn-green" href={this.props.data.site.siteMetadata.curriculum}>Download mijn Curriculum</a>

            <div className="line"></div>

            <h2>Programmeertalen &amp; Tools: </h2>
   
            <ul>
              <li>C#/.NET</li>
              <li>Python</li>
              <li>SQL</li>
              <li>PHP</li>
              <li>Typescript</li>
              <li>No-SQL(MongoDB/Neo4J)</li>
              <li>PostgreSQL/PHPMyAdmin/MySQL</li>
              <li>React</li>
              <li>Gatsby (Daar maakt deze site gebruik van)</li>
              <li>Bootstrap</li>
              <li>Node.js</li>
              <li>HTML/CSS/Javascript</li>
              <li>Java</li>
              <li>Kotlin</li>
              <li>De statistiektaal R</li>
            </ul>

            <div className="line"></div>

            Ook speel ik toneel, 23 t/m 29 mei sta ik in het Passage theater in Schiedam met <b>Vreemden in een lift</b>.
           <br />
            <a target="_blank" rel="noopener noreferrer" className="btn btn-md btn-orange" href="http://knapschiedam.nl">Kijk hier voor kaarten en meer informatie</a>


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
