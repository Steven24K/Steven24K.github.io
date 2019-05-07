import React from "react"
import Layout from "../components/Layout";
import { graphql } from "gatsby"
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

                <div className="crop">

                    <div className="card">

                        <h1 className="under-line">Over mij</h1>

                        <a target="_blank" rel="noopener noreferrer" class="btn btn-md btn-green" href={this.props.data.site.siteMetadata.curriculum}>Download mijn Curriculum</a>

                        <br />

                        <p>

                            Mijn naam is Steven Koerts(<i>11 oktober 1997</i>) en dit is mijn website. Mijn eigen plek op het internet
                            waar ik de wereld op de hoogte kan houden van wat ik doe(voor zover dat iemand interesseert).

                            <br /><br />

                            Op dit moment studeer ik informatica aan de Hogeschool Rotterdam, ik zit in het 3e jaar en volg een minor
                            software engineering met Typescript.

                            <br /><br />

                            Ik ben een trots geboren Schiedammer en woon er tot nu toe heel mijn leven. 

                            <br/><br/>

                            Ik ben begonnen met programmeren in HAVO 4 bij het vak informatica, daar begon ik met de talen PHP, HTML en CSS. Al 
                            snel kwam daar Javascript en SQL bij. Dankzij mijn opleiding beheers ik nu een heel breed Scala(deze taal ken ik nog niet) aan programmeertalen. 
                            Op mijn homepage staat een uitgebreide lijst. Ik ben van mening dat het iedereen elke taal moet kunnen leren en dat het voor de programmeur niet uitmaakt waar
                            hij in programmeert. Software engineering is de kunst om de juiste talen en tools te selecteren voor de juiste opdracht. 

                            <br /><br />

                            Naast programmeren heb ik een grote passie voor theater, zowel het bezoeken en zelf spelen doe ik graag. Op dit moment ben ik een 
                            <i> grote;) </i>amateurspeler. Van grote rollen in een kleine productie tot kleine rollen in een grote productie. 

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
                instructables
                curriculum
                profileImage
            }
        }
    }
    `
    
export default About