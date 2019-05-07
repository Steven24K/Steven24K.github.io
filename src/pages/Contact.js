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

                <div className="crop">

                    <div className="card">

                        <h1 className="under-line">Contact</h1>


                        <a className="btn btn-xlg btn-purple btn-fullscreen" href={`mailto: ${this.props.data.site.siteMetadata.email}`}><FontAwesomeIcon icon="paper-plane" />Mail me!</a>


                        <h3>Stuur me een mail voor:</h3>

                        <ul>
                            <li>Gedetaileerde CV opvragen</li>
                            <li>Stage plekken/opdrachten</li>
                            <li>Werk opdrachten</li>
                            <li>(ICT) Bijbaantjes</li>
                            <li>Mij beter leren kennen</li>
                            <li>Figuratie opdrachten, acteerklussen en filmrollen altijd welkom</li>
                        </ul>



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

export default Contact