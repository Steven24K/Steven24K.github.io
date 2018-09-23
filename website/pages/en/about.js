const React = require('react')
const siteConfig = require(process.cwd() + '/siteConfig.js');

class About extends React.Component {
    render() {
        return (
            <div className="container"> 
              <h1>Over Mij</h1>
              <div className="row">
                 <div className="col-lg-12 card">
                    <div className="card-body">

                    <h3>Wat doe ik nu? </h3>

                    Zoals je kunt zijn van mijn website mijn naam is Steven Koerts, ik studeer informatica. Op dit moment zit ik in het 
                    derde jaar en loop stage bij <a href="https://teqplay.nl/" target="_blank">Teqplay B.V.</a>. Teqplay is een IT startup dat zich 
                    richt op de maritieme sector, het bedrijf verzamelt data over de scheepvaart en probeert met die data de haven logistiek beter te laten
                    verlopen. Wat ik intressant vind aan Teqplat(naast mijn intresse in de scheepvaart) is dat het bedrijf constant aan het zoeken is naar nieuwe
                    databronnen om hun applicaties slimmer te maken. 

                    <h3>Kennis niveau</h3>

                    Ik ben begonnen met programmeren in 4 Havo bij het vak informatica, daar begon ik met de talen HTML, CSS en PHP, later kwam daar al snel Javascript en SQL bij.
                    Toen ik informatica ben gaan studeren bij de Hogeschool Rotterdam begon ik met het leren van Python, het eerste project was om een game te maken met pygame. Vervolgens
                    ging ik verder met C# en het maken van crossplatform apps met Xamarin. In de jaren daarna ging het vrij snel met nieuwe talen en frameworks leren, zo maakte ik een webshop met
                    C# ASP.NET en als front-end framework React.js met Typescript. Verder ben ik ook verder gegaan met het maken van mobiele en desktop apps met React native, Nativescript en Electron. 
                    Vanuit de opleiding krijgen we een hoop programmeer diciplines mee zoals object oriented design patterns en functional programming, als laatste beheers ik ook de statistiek taal R. 
                    Voor mijn stage ben ik nu bezig met Java, Kotlin en MongoDB, met de kennis die ik van de opleiding heb meegekregen was het vrij eenvoudig om deze nieuwe talen en tools onder de knie te 
                    krijgen.
                    Als programeur is het belangrijk om verschillende diciplines te kennen want dan ben je uiteindelijk instaat om elke programeertaal te leren en beheersen.  

                    <h3>Hobby's</h3>

                    Naast het programmeren, wat echt te gek is om te doen, ben ik ook actief bezig met het amateur theater. 
                    Toen ik 12 was zat ik bij amateur jeugd theater school de Teerstoof in Schiedam, ik heb al in meerdere producties mee gespeeld o.a. Find me on Facebook, Anne Frank, Hart voor de zaak, Kleine Sofie en Lange Wapper en koning Lier. 
                    Verder sta ik ook aangemeld bij meerdere figuranten casting bureaus en zo krijg ik zo nu en dan een leuk rolletje in een film of serie. 
                    Zo ben ik al door het beeld gelopen van de politieke serie De Fractie(seizoen 2 aflevering 1), ICarus(Aflevering: Rita Verdonk) en Flikken Rotterdam(Seizoen 3). 
                    Maar mijn voorkeur gaat toch het meest uit naar het theater.
                    
                    </div>
                 </div>
              </div>

              <div className="row">
                 <div className="col-lg-12 center">
                     <a target="_blank" href={siteConfig.cv} className="btn btn-success btn-lg cv">Curriculum Vitae</a>
                 </div>
              </div>
            </div>
        )
    }
}

module.exports = About