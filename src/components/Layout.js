/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "../Assets/site.css"
import "../Assets/button.css"
import "../Assets/bootstrap.rtl.min.css"
import "../Assets/bootstrap.min.css"
import "../Assets/bootstrap-utilities.min.css"
import "../Assets/bootstrap-utilities.rtl.min.css"
import "../Assets/bootstrap-reboot.rtl.min.css"
import "../Assets/bootstrap-reboot.min.css"
import "../Assets/bootstrap-grid.rtl.min.css"
import "../Assets/bootstrap-grid.min.css"
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
          {/* <NavBar siteTitle={data.site.siteMetadata.title}/> */}

          <main className="wrapper">
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
