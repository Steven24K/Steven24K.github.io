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

      <div className='image-bar'>
        <div className='image-container'><img className='img-responsive' alt='' src='./images/home-4.jpg' /></div>
        <div className='image-container'><img className='img-responsive' alt='' src='./images/home-1.jpg' /></div>
        <div className='image-container'><img className='img-responsive' alt='' src='./images/home-2.jpg' /></div>
        <div className='image-container'><img className='img-responsive' alt='' src='./images/home-3.jpg' /></div>
      </div>


      <div className="container">


        <div className="card">

          <div className='row'>

            <div className='col-12'>

              <a target="_blank" rel="noopener noreferrer" className="btn btn-md btn-green" href={this.props.data.site.siteMetadata.curriculum}>Download mijn Curriculum</a>

            </div>

          </div>

          <div className="line"></div>

          <div className="row">

            <div className="col-12">

              <h3>Check hier mijn spokenword platform</h3>

              <h4>De QWERTY web - Een ode aan letters</h4>

              <a href="https://stevenkoerts.nl/OdeAanLetters" className="btn btn-md btn-green">OdeAanLetters</a>

            </div>

          </div>


          <div className='row'>

            <div className='col-12'>

              <h2>Binnenkort te zien op locatie </h2>

              <h3>Risjaar Modderfokker den Derde</h3>

              <a rel="noopener noreferrer" target="_blank" href='https://knapschiedam.nl/shop' className='btn btn-md btn-orange'>Koop hier uw kaarten</a>

              <p>
                Naar Shakespeares Richard III in een bewerking van Tom Lanoye, speelt binnenkort in de   <a rel="noopener noreferrer" target="_blank" href='https://sodafabriek.nl/'>Sodafabriek</a>.
                </p>

              <img alt='' className='img-responsive' src='./images/IMG-20200220-WA0000.jpg' />
            </div>



          </div>



          <div className="line"></div>

          <div className='skills-bar'>



            <div className='skill-items'>
              <h1>Software Engineer</h1>

              <h1>Webdeveloper</h1>

              <h1>Acteur</h1>
            </div>

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

        <div className='image-bar'>
          <div className='image-container'><img className='img-responsive' alt='' src='./images/home-5.jpg' /></div>
          <div className='image-container'><img className='img-responsive' alt='' src='./images/home-6.jpg' /></div>
          <div className='image-container'><img className='img-responsive' alt='' src='./images/home-7.jpg' /></div>
          <div className='image-container'><img className='img-responsive' alt='' src='./images/home-8.jpg' /></div>
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
