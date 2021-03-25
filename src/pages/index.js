import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      technolgies: 'loading',
      tech_stack: [
        { tech: "C#/.NET", descr: "I use it mainly as a backend for enterprise websites.", skill: 8 },
        { tech: "React", descr: "My favorite frontend framework, good state management is something I strive for", skill: 9 },
        { tech: "Typescript/Javascript", descr: "Type safety is very important to me.", skill: 9 },
        { tech: "(no)SQL", descr: "SQL is still the most common database language, I prefer LINQ queries over SQL queries.", skill: 7 },
        { tech: "PHP", descr: "Seems you don't have a choice when you're building a site on a budget on shared webhosting", skill: 7 },
        { tech: "WordPress", descr: "I can recommend this CMS to all entrepeneurs, love the Gutenberg editor", skill: 7 },
        { tech: "CSS", descr: "Not my favorite language, but applications need to look nice. Rather stick to bootstrap", skill: 5.5 }
      ]
    }
  }

  componentDidMount() {
    let interval = setInterval(() => {
      this.setState(s => {
        if (s.tech_stack === 'empty') return s
        if (s.tech_stack.length === 0) return ({ ...s, tech_stack: 'empty' })
        if (s.technolgies === 'loading') return ({ ...s, technolgies: [s.tech_stack[0]], tech_stack: s.tech_stack.slice(1) })
        return ({ ...s, technolgies: s.technolgies.concat([s.tech_stack[0]]), tech_stack: s.tech_stack.slice(1) })
      })
    }, 4000)

    if (this.state.tech_stack.length === 0) {
      clearInterval(interval)
    }
  }

  render() {
    return <Layout>

      <SEO title="Home" keywords={[`Steven Koerts`, `software developer`, `webdeveloper`, `portfolio`, `blog`]} />

      <div className="jumbotron">

        <div className="big-image">
        </div>
      </div>


      {/* <div className='image-bar'>
        <div className='image-container'><img className='img-responsive' alt='' src='./images/home-4.jpg' /></div>
        <div className='image-container'><img className='img-responsive' alt='' src='./images/home-1.jpg' /></div>
        <div className='image-container'><img className='img-responsive' alt='' src='./images/home-2.jpg' /></div>
        <div className='image-container'><img className='img-responsive' alt='' src='./images/home-3.jpg' /></div>
      </div> */}
      <div className="container">

        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className='skill-items'>
                <h1>Software Engineer</h1>
                <h1>Web developer</h1>
                <h1>Acteur</h1>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <h2 className="center">Websites die ik bij hou:</h2>
              <ul className="list-group">
                <li className="list-group-item"><a href="https://stevenkoerts.nl/OdeAanLetters" target="_blank" rel="noopener noreferrer" >De QWERTY-web</a></li>
                <li className="list-group-item"><a href="http://poetryfactory.nl/" target="_blank" rel="noopener noreferrer" >Poetry Factory</a></li>
                <li className="list-group-item"><a href="https://knapschiedam.nl" target="_blank" rel="noopener noreferrer" >Toneelgroep KNAP Schiedam</a></li>
              </ul>
            </div>

          </div>
        </div>
        {/*End row */}

        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <div className="card">
              <h2 className="center">Ik gebruik onderstaande tech stack:</h2>

              {this.state.technolgies === 'loading' ?
                <div>
                  Loading tech stack...
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
                :
                <div>
                  <ol class="list-group list-group-numbered">
                    {this.state.technolgies.map(v => <li key={v.tech} class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">{v.tech}</div>
                        {v.descr}
                      </div>
                      <span class="badge bg-primary rounded-pill">{v.skill}/10</span>
                    </li>)}
                  </ol>
                  {this.state.tech_stack !== 'empty' ? <div>
                    Getting the next one...
                  <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div> : <div>
                    <b>That is all the tech I work with.</b>
                  </div>}
                </div>
              }
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="card">
              <img className='img-responsive' alt='' src='./images/home-3.jpg' />
              <i>&copy; Steven Koerts</i>
            </div>
            <div className="card">
              <img className='img-responsive' alt='' src='./images/home-4.jpg' />
              <i>&copy; Steven Koerts</i>
            </div>
          </div>
        </div>
        {/*End row */}

        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="card">
              <img className='img-responsive' alt='' src='./images/StevenKoerts1.JPG' />
              <i>Photoshoot @Hoppinger</i>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="card">
            <img className='img-responsive' alt='' src='./images/StevenKoerts2.JPG' />
            <i>Photoshoot @Hoppinger</i>
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
            twitter
            curriculum
            profileImage
        }
    }
}
`


export default Index
