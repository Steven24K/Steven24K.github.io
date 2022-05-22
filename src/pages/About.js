import React from "react"
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO";

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <Layout>
            <SEO title="About" />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">

                            <h1 className="under-line">Over mij</h1>

                            <Link to="/">Terug naar mijn homepage</Link>

                            <br />

                            <h2>Hallo internet,<span aria-label="Peace out" role="img">✌</span></h2>

                            <p>
                                Mijn is Steven, ik ben Software Engineer met een bachelor in informatica.
                                Ik heb een passie voor het uitzoeken en werken met nieuwe technolgieën en presenteren
                                daarvan door middel van story telling. Ik geloof sterk in de kracht van het gesproken woord,
                                de woordspeel kunst speelt een grote rol bij bij het presenteren van nieuwe ideeën.
                                De moeilijkste vraag die je kunt stellen als het gaat om software development is:
                            </p>

                            <p>
                                <blockquote>How to write code that doesn't break over time?</blockquote>
                            </p>


                            <p>
                                Als engineer streef je altijd naar foutloze code, met behulp van test frameworks, 
                                standaarden, design patterns en type safety. Vooral dat laatste is een belangrijke factor voor mij om te zorgen
                                dat de software blijft draaien, voor een tijd langer dan vandaag.
                            </p>

                            <h3>Tech Stack</h3>

                            <p>
                                Ik ben van mening dat een software developer in elke taal moet kunnen programmeren met de kennis 
                                van alle bestaande principes en patronen. Want op die manier zie je veel overeenkomsten tussen alle talen.
                            </p>

                            <p>
                                <b>Momenteel werk ik veel met:</b>
                                <ul>
                                    <li>C#/.NET</li>
                                    <li>Typescript</li>
                                    <li>React</li>
                                    <li>(no)SQL</li>
                                    <li>WordPress</li>
                                </ul>
                                <i>Als het echt niet anders kan werk ik ook met PHP, HTML, Javascript en CSS.</i>
                            </p>


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
                twitter
                curriculum
                profileImage
            }
        }
    }
    `

export default About