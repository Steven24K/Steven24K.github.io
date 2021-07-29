import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Map } from 'immutable'
import { Call, CallIf, Repeat, Seq, Timer, Wait, Print, Done } from '../utils/stateMachine'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      program_counter: 0,
      code_story: Map(), // number -> string or string[] 
    }
  }

  newLine = () => Call(() => this.setState(s => ({ ...s, program_counter: s.program_counter + 1 })))

  addToList = (v) => Call(() => this.setState(s => {
    let new_list = []
    if (s.code_story.has(this.state.program_counter) && Array.isArray(s.code_story.get(this.state.program_counter))) {
      new_list = s.code_story.get(s.program_counter)
    }
    return ({ ...s, code_story: s.code_story.set(this.state.program_counter, new_list.concat(v)) })
  }))

  print = (v) => Call(() => this.setState(s => ({ ...s, code_story: s.code_story.set(this.state.program_counter, v) })))

  appendValue = (v) => Call(() => this.setState(s => {
    let current = ""
    if (s.code_story.has(s.program_counter)) {
      current = s.code_story.get(s.program_counter)
    }
    return ({ ...s, code_story: s.code_story.set(s.program_counter, current + v) })
  }))

  resetState = () => Call(() => this.setState({ program_counter: 0, code_story: Map() }))

  writeLine = (sentence, timeout = 100, accellerate = false) => sentence.split("").reduce((xs, x, i) => {
    return Seq(xs, Seq(Timer(timeout / (accellerate ? i + 1 : 1)), this.appendValue(x)))
  }, Done(""))

  writeLines = (phrases, timeout = 100, accellerate = false) => phrases.map(phrase => this.writeLine(phrase, timeout, accellerate)).reduce((xs, x) => Seq(xs, Seq(this.newLine(), x)), Done(""))

  code_my_story() {

    let program = [
      this.writeLines([
        "This is how I started my coding journey",
        "It all started with..."
      ], 200, true), 
      this.print("<code>print('Hello World')</code>"), 
      this.writeLines([
        "Yeah how could be different?",
        "Everyone starts like that.",
        "Right?"
      ], 200, true), 
      this.writeLine("Have more questions about me?"), 
      this.writeLine("Feel free to ask me any question!"), 
      this.print("Mail me <a href='mailto:s.koerts2@gmail.com'>here</a>")
    ].reduce((xs, x) => Seq(xs, Seq(Seq(Timer(1000), this.newLine()), x)) , Done(""))


    let interval = setInterval(() => {
      program.update();
      if (!program.busy) {
        clearInterval(interval);
      }
    }, 10)
  }

  componentDidMount() {
    this.code_my_story()
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
                return <p key={index0} dangerouslySetInnerHTML={{ __html: value }} />
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
