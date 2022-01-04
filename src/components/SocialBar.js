import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAt, faTools } from "@fortawesome/free-solid-svg-icons"
import "../components/Assets/socialbar.css"

library.add(faGithub)
library.add(faLinkedin)
library.add(faInstagram)
library.add(faYoutube)
library.add(faAt)
library.add(faTools)
library.add(faTwitter)

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
                twitter
                curriculum
                profileImage
            }
          }
        }
      `}

            render={data => (<div className="social-bar">
                <a aria-label="GitHub" href={data.site.siteMetadata.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                <a aria-label="YouTube" href={data.site.siteMetadata.youtube} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "youtube"]} /></a>
                <a aria-label="LinkedIn" href={data.site.siteMetadata.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                <a aria-label="Instagram" href={data.site.siteMetadata.instagram} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
                <a aria-label="Twitter" href={data.site.siteMetadata.twitter} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                <a aria-label="Email" href={`mailto: ${data.site.siteMetadata.email}`} rel="noopener noreferrer"><FontAwesomeIcon icon={["fas", "at"]} /></a>
            </div>)}
        />
    }
}

export default SocialBar