import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faAt, faTools } from "@fortawesome/free-solid-svg-icons"
import "../components/Assets/socialbar.css"

library.add(faGithub)
library.add(faLinkedin)
library.add(faFacebook)
library.add(faInstagram)
library.add(faYoutube)
library.add(faAt)
library.add(faTools)

class SocialBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <StaticQuery
            query={graphql`
        query SiteSocialQuery {
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
      `}

            render={data => (<div className="social-bar">
                <a href={data.site.siteMetadata.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                <a href={data.site.siteMetadata.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                <a href={data.site.siteMetadata.facebook} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "facebook"]} /></a>
                <a href={data.site.siteMetadata.instagram} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
                <a href={data.site.siteMetadata.youtube} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "youtube"]} /></a>
                <a href={data.site.siteMetadata.instructables} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fas", "tools"]} /></a>
                <a href={`mailto: ${data.site.siteMetadata.email}`} rel="noopener noreferrer"><FontAwesomeIcon icon={["fas", "at"]} /></a>
            </div>)}
        />
    }
}

export default SocialBar