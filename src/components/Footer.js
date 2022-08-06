import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../components/Assets/footer.css"

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
                        author
                        email
                    }
                }
            }
            `}

            render={data => (<footer className="footer">
                <p>
                    <a href={`mailto:${data.site.siteMetadata.email}`}>{data.site.siteMetadata.email}</a> {` | `}
                    &copy; {new Date().getFullYear()} Made by {data.site.siteMetadata.author}
                </p>
            </footer>)}
        />
    }
}

export default Footer