/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import NavBar from "./NavBar";
import "../Assets/site.css"
import "../Assets/button.css"
import Footer from "./Footer";
import SocialBar from "./SocialBar";

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        <div>
          <NavBar siteTitle={data.site.siteMetadata.title}>
            <Link to="/About">Over mij</Link>
            <Link to="/Posts">Posts</Link>
            {/* <Link to="/Playground">Code Playground</Link> */}
            <Link to="/Contact">Contact</Link>
          </NavBar>


          <main>
            {this.props.children}
          </main>

          <SocialBar/>

          <Footer/>

        </div>
      )}
    />
  }
}



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
