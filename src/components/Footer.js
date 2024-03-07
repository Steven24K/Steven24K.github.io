import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import "../components/Assets/footer.css"

class Footer extends React.Component {
    constructor(props) {
        super()
        this.state = {}
    }

    render() {
        return <StaticQuery
            query={graphql`
            query getSiteAuthor {
                site {
                    siteMetadata {
                        email
                        github
                        linkedin
                        author
                        email
                    }
                }
            }
            `}

            render={data => (<footer className="footer">
                <p>
                    <a href={data.site.siteMetadata.github}>Github</a>{` | `}
                    <a href={data.site.siteMetadata.linkedin}>Linkedin</a>{` | `}
                    <a href={`mailto:${data.site.siteMetadata.email}`}>Email</a> {` | `}
                    &copy; {new Date().getFullYear()} Made by {data.site.siteMetadata.author}
                </p>
            </footer>)}
        />
    }
}

export default Footer