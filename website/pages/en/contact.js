const React = require('react')
const siteConfig = require(process.cwd() + '/siteConfig.js');

class Contact extends React.Component {
    render() {
        return (
            <div className="container">
               <h1>Contact</h1>

               <h2>U kunt contact met mij opnemen voor het volgende:</h2>
               <ul>
                   <li>Mij beter leren kennen</li>
                   <li>Gedetaileerde CV opvragen</li>
                   <li>Stage plekken/opdrachten</li>
                   <li>Werk opdrachten</li>
                   <li>(ICT) Bijbaantjes</li>
                   <li>Figuratie opdrachten en film rollen altijd welkom 😉</li>
               </ul>

               <h2>Staat uw reden voor contact opnemen hier niet bij? Twijfel dan niet en stuur mij een E-Mail!</h2>

               <a className="btn btn-lg btn-warning" href={"mailto:" + siteConfig.email}>Stuur een E-Mail</a>
            </div>
        )
    }
}

module.exports = Contact