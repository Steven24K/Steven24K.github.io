import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import SocialBar from '../components/footer'
import './index.css'
import Footer from '../components/footer';

const Layout = ({ children, data }) => (
  <div>

  <div>

    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />

  </div>



    <div className="content">
    {children()}  
    </div>


  
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        profilePic
        CV
      }
    }
  }
`
