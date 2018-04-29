import React from 'react'
import styles from './component-css.module.css'

const GitHubIcon = require("../../static/images/GitHub.png")
const YouTubeIcon = require("../../static/images/youtube.png")
const LinkedInIcon = require("../../static/images/linkedin.png")
const instructIcon = require("../../static/images/instruct.png")

const Footer = () =>{
    return(
        <footer className="footer-icons">
            <a className="icon-holder" href="">
               <img height="150px" width="150px" src={GitHubIcon}/>
            </a>
            <a className="icon-holder" href="">
               <img height="150px" width="150px" src={YouTubeIcon}/>
            </a>
            <a className="icon-holder" href="">
               <img height="150px" width="150px" src={LinkedInIcon}/>
            </a>
            <a className="icon-holder" href="">
               <img height="150px" width="150px" src={instructIcon}/>
            </a>
        </footer>
    );
}

export default Footer