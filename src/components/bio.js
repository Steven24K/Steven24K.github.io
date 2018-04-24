import React from 'react'
import typography from "../utils/typography"
import LinkButton from '../components/button';
const rhythm = typography.rhythm

const ProfilePic = require("../images/profiel.jpg")
const CV = require("../pdf/Curriculum_Vitea_Steven_Koerts.pdf");

const Bio = () => (
    <div style={{
        marginBottom: rhythm(1.5),
      }}>

        <img style={{
              borderRadius: `100%`,
              float: "left",
              marginRight: rhythm(1 / 4),
              marginBottom: 0,
            }}
            width="20%" height="20%" src={ProfilePic}/>

        <p>
            Op dit moment studeer ik informatica(computer science) aan de Hogeschool van Rotterdam. Ik zit in het tweede jaar van mijn opleiding, 
            op dit moment beheers ik de programmeertalen: Python, C#, Java, Javascript, Typescript, HTML, CSS, PHP en R😉. 
            Het leukste aan mijn opleiding vind ik dat het een zowel technische als creatieve opleiding is, bij het bouwen van een website komt een hoop techniek kijken, 
            maar bij de front-end helpt het als je je creatieviteit de vrije loop laat gaan. Zelf heb heb ik een voorkeur voor de back-end.
        </p>
        

        <ul style={{float: 'right'}}>
            <li>Software Engineer (C#/.NET)</li>
            <li>Webdevoper(React, Gatsby, Angular, Bootsrap)</li>
            <li>Python, Java, R(statistics), PHP</li>
            <li>Scrum/Agile</li>
            <li>Actor😎</li>
        </ul>


        <LinkButton to={CV} text="Curriculum Vitae" color="#11af43" target="_blank"/>

    </div>
);

export default Bio