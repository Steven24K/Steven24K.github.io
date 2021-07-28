import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Map } from 'immutable'
import { Call, CallIf, Repeat, Seq, Timer, Wait, Print, Done} from '../utils/stateMachine'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      program_counter: 0,
      code_story: Map(), // number -> string or string[] 
    }
  }

  moveNext = () => this.setState(s => ({...s, program_counter: s.program_counter + 1})) 

  addToList = (v) => this.setState(s => {
    let new_list = []
    if (s.code_story.has(this.state.program_counter) && Array.isArray(s.code_story.get(this.state.program_counter))) {
      new_list = s.code_story.get(s.program_counter)
    } 
    return ({...s, code_story: s.code_story.set(this.state.program_counter, new_list.concat(v))})
  })

  setValue = (v) => this.setState(s => ({...s, code_story: s.code_story.set(this.state.program_counter, v)}))

  resetState = () => this.setState({program_counter: 0, code_story: Map()})

  codingMyStory () {
    let program = Repeat(
      Seq(Call(() => this.setValue("Hello")), Seq(Timer(1000), Seq(Call(() => this.moveNext()), Seq(Call(() => this.setValue("World")), Seq(Timer(1000), Call(() => this.resetState()))))))
    )
  
  let interval = setInterval(() => {
      program.update();
      if (!program.busy) {
          clearInterval(interval);
      }
  }, 100)
  }

  componentDidMount() {
    console.log('Mounted')
    this.codingMyStory()
  }

  render() {
    //let items_loaded = this.state.technolgies !== 'loading' ? this.state.technolgies.length : 0
    //let total = (this.state.tech_stack.length + items_loaded)
    //let progress = Math.floor((items_loaded / total) * 100)

    return <Layout>

      <SEO title="Home" keywords={[`Steven Koerts`, `software developer`, `webdeveloper`, `portfolio`, `blog`]} />

      <div className="container homepage">
        <div className="row">
          <div className="col-md-4">
            <h2>Bio</h2>
            <p>
              to be, or not to be, thats the question Devoutly to be wish'd. to die, to sleep; If we have unearned
              luck If you pardon, we will mend

              Else the puck a liar call; Of edward's heirs the murderer shall be. That make ingrateful man! Those
              that slew thy virgin knight; The slings and arrows of outrageous fortune, Here's to my love! That my
              youth suffer'd. My story being done,

              When he himself might his quietus make And so the general of hot desire Which many legions of true
              hearts had warm'd;

              First, as I am his kinsman and his subject, A dateless bargain to engrossing death!

            </p>

            <img className="img-fluid" alt="profile-steven-koerts" src="./images/StevenKoerts2.JPG" />
          </div>

          <div className="col-md-8">
            <h2>My story in code <button className="btn btn-success">Start the show!</button></h2>


            <div className="code">
              {this.state.code_story.toIndexedSeq().toArray().map((value, index0) => {
                if (Array.isArray(value)) {
                  return <ul key={index0}>
                    {value.map((item, index1) => <li key={index1}>{item}</li>)}
                  </ul>
                }
                return <p  key={index0} dangerouslySetInnerHTML={{__html: value}}/>
              })}
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
