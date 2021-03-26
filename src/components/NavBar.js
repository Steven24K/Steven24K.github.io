import { Link } from "gatsby"
import React from "react"
import "../components/Assets/navbar.css"

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
    return <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#040d5c'}}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">{this.props.siteTitle}</Link>
        <button onClick={this.toggleNavBar} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${this.state.showMenu ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/About" className="nav-link" aria-current="page" href="#">Bio</Link>
            </li>
            <li className="nav-item">
              <Link to="/Posts" className="nav-link" href="#">What's new?</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link" href="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  }
}

export default NavBar