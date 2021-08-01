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
                <div className="row">
                    <div className="col-12">
                        <div className="card">

                            <h1 className="under-line">Over mij</h1>

                            <br />

                            <h2>Hallo,<span aria-label="Peace out" role="img">✌</span></h2>

                            <p>
                                Ik ben Steven Koerts(<i>11 oktober 1997</i>) en dit is mijn website. Een eigen plek op het internet om mijn werk te tonen.
                            </p>

                            <p>
                                In 2020 ben in afgestudeerd voor mijn bachelor informatica aan de Hogeschool Rotterdam. Ik werk nu bij Hoppinger als software developer, het
                                bededrijf waar ik ook mijn afstudeerstage heb afgerond. Ik heb gewerkt aan een code scaffolder om het opzet proces van een applicatie te automatiseren.
                            </p>

                            <p>
                                Ik ben begonnen met programmeren in HAVO 4 bij het vak informatica, daar begon ik met de talen PHP, HTML en CSS. Al
                                snel kwam daar Javascript en SQL bij. Dankzij mijn opleiding beheers ik nu een heel breed Scala(deze taal ken ik nog niet) aan programmeertalen.
                                Op mijn homepage staat een uitgebreide lijst. Ik ben van mening dat het iedereen elke taal moet kunnen leren en dat het voor de programmeur niet uitmaakt waar
                                hij in programmeert. Software engineering is de kunst om de juiste talen en tools te selecteren voor de juiste opdracht.
                            </p>

                            <p>
                                Op dit moment heb ik de meeste ervaring in C#/.NET en Typescript, allebij enterprise talen onderdeel van Microsoft stack. Daarnaast werk ik veel met het 
                                frontend framework React van Facebook. Een combinatie van deze tools is zeer geschikt om toe te passen op grote complexe systemen, typesafety is erg belangrijk om 
                                fouten te voorkomen bij een groot systeem. React helpt bij de state management van de applicatie en het maken van herbruikbare bouwblokken. 
                            </p>

                            <p>
                                Verder gebruik ik ook nog steeds PHP, dit is mijn favoriete taal als het neerkomt op syntax. Dit is overigens wel een goede oplossing voor low-budget websites. 
                                Als je vast zit aan een shared webhosting pakket dan is vaak je enige tech stack op de server PHP en Perl. Zo raad ik zelfstandige ondernemers of kleine lokale bedrijven aan 
                                hun website met WordPress te bouwen. Met duizenden thema's en plugins op de markt, plus een klein beetje eigen PHP code heb je een volledig werkzame website die aan de basis eisen voldoet. 
                            </p>

                            <h2>Vrij tijd <span aria-label="music" role="img">🎶</span><span aria-label="mic" role="img">🎤</span><span aria-label="theater" role="img">🎭</span></h2>

                            <p>
                                Naast programmeren heb ik een grote passie voor theater, zowel het bezoeken en zelf spelen doe ik graag. Op dit moment ben ik een
                                <i> grote;) </i>amateurspeler. Van grote rollen in een kleine productie tot kleine rollen in een grote productie. Verder besteed ik mijn vrije tijd
                                graag aan het schrijven van eigen teksten, ik luister graag naar de kunst van spoken word. Een vrije dicht- en poëzievorm waar de kunstenaar als het ware
                                een ritme weet te maken met zijn woorden en door de mannier van opschrijven.
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
                facebook
                twitter
                curriculum
                profileImage
            }
        }
    }
    `

export default About