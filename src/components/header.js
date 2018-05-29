import React from 'react'
import Link from 'gatsby-link'
import styles from './component-css.module.css'


const ListLink = props =>
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const Header = ({ siteTitle }) => (
      <ul className={styles.sidenav}>
        <li><h1>{siteTitle}</h1></li>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">Over Mij</ListLink>
        <ListLink to="/projects/">Projecten</ListLink>
        <ListLink to="/videos/">Video's</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
)

export default Header
