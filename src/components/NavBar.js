import { Link } from "gatsby"
import React from "react"
import "../components/Assets/navbar.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
library.add(faChevronCircleUp)


class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
    this.toggleNavBar = this.toggleNavBar.bind(this)
  }

  toggleNavBar() {
    this.setState({ ...this.state, showMenu: !this.state.showMenu })
  }

  render() {
    return <div className="nav">
      <input type="checkbox" id="nav-check" />

      <div className="nav-header">
        <div className="nav-title"><Link to="/">{this.props.siteTitle}</Link></div>
      </div>

      <div className="nav-btn">
        <label htmlFor="nav-check"><FontAwesomeIcon icon="bars" /></label>
      </div>

      <div className="nav-links">
        {this.props.children}
      </div>

    </div>
  }
}

export default NavBar