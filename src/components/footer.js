import React from 'react'
import styles from './component-css.module.css'

const GitHubIcon = require("../../static/images/GitHub.png")
const YouTubeIcon = require("../../static/images/youtube.png")
const LinkedInIcon = require("../../static/images/linkedin.png")
const instructIcon = require("../../static/images/instruct.png")

const images = [[GitHubIcon,""],
     [YouTubeIcon, ""], 
     [LinkedInIcon, ""], 
     [instructIcon, ""]
    ];

const Footer = () =>{
    return(
        <footer style={{
            paddingTop: 200,
            textAlign:"center",
            marginLeft:"auto",
            marginRight:"auto",
        }}>

           <ul style={{
               listStyleType:"none",
               display:"inline",

           }}>
           
               <li style={{display:"inline"}}>
           <a className="icon-holder" target="_blank" href="https://github.com/Steven24K">
               <img height="20%" width="20%" src={GitHubIcon}/>
            </a>
               </li>

               <li style={{display:"inline"}}>
            <a className="icon-holder" target="_blank" href="https://nl.linkedin.com/in/steven-koerts-223aa3135">
               <img height="20%" width="20%" src={LinkedInIcon}/>
            </a>
                </li>

                <li style={{display:"inline"}}>
            <a className="icon-holder" target="_blank" href="https://www.youtube.com/channel/UCYoHlYm31DGTR3Soqs6My6Q/featured">
               <img height="20%" width="20%" src={YouTubeIcon}/>
            </a>
                </li>

                <li style={{display:"inline"}}>
            <a className="icon-holder" target="_blank" href="https://www.instructables.com/member/stevenk102/">
               <img height="20%" width="20%" src={instructIcon}/>
            </a>
               </li>

           </ul>
        </footer>
    );
}

export default Footer