import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

library.add(faPaperPlane)

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <Layout>
            <SEO title="Contact" />

            <div className="container">

                <div className="row">
                    <div className="col-12">
                        <div className="card">

                            <h1 className="under-line">Contact</h1>

                            <h2>Mij beter leren kennen?</h2>

                            <p>Neem contact met mij op!</p>

                            <a className="btn btn-primary" href={`mailto: ${this.props.data.site.siteMetadata.email}`}><FontAwesomeIcon icon="paper-plane" />Mail me!</a>


                            <h3>Stuur me een mail voor:</h3>

                            <ul>
                                <li>CV opvragen</li>
                                <li>Freelance opdrachten</li>
                                <li>Website beheer (WordPress)</li>
                                <li>(ICT) Bijbaantjes</li>
                                <li>Mij beter leren kennen</li>
                                <li>Figuratie opdrachten, acteerklussen en filmrollen altijd welkom!</li>
                            </ul>

                            <h4>Of neem een kijkje op mijn socials om meer over mij te weten te komen.</h4>



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

export default Contact