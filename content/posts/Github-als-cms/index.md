---
title: GitHub als content management systeem
date: "2019-04-30"
category: "blog"
---



Deze website wordt gehost vanuit een public repository, via GitHub pages. Onder het motto van low budget web development, aangezien ik gebruik maak van een gratis GitHub account. [GitHub pages](https://pages.github.com/) stelt de mogelijkheid om GitHub repositories te veranderen in statische websites.


Hiervoor hostte ik mijn website via Versio, dit was het goedkoopste hosting bedrijf dat ik online kon vinden 1500MB SSD schijfruimte voor €0,50/maand plus de kosten voor mijn domeinnaam stevenkoerts.nl.
Verder over gratis webhosting via GitHub pages, er zijn een hoop websites en bedrijven die gebruik maken van deze dienst. Zo zijn er bedrijven die alles via GitHub pages regelen, zoals: getbootstrap of startbootstrap en stevenkoerts.nl(vanaf nu ook.) Het hosten van een website via GitHub heeft een hoop voordelen, alle content van de site staat in je repository. Dus er zijn geen databases die opgezet moeten, geen ingewikkelde content management systemen die gebouwd moeten worden en je hoeft je geen zorgen te maken over de structuur van je website. Je kan je op deze manier beter focussen op de inhoud.

# Statische content 

Statische content houdt in dat je alleen gebruik kunt maken van text-documenten, HTML, CSS en Javascript. Je kunt dus gewoon je website bouwen met behulp van die talen, maar je kunt ook gebruik maken van een statische site generator. Een **static site generator** heeft zelf een backend die lokaal draait vanaf een development omgeving. Bij het uitvoeren van het programma wordt de statische site gegenereerd. Die site bestaat dan alleen uit wat HTML, CSS en Javascript bestanden en eventueel wat foto's en documenten. 

## Voorbeelden van statische site generatoren

### Jekyll 
[source](https://jekyllrb.com/)

Jekyll is geschreven in Ruby en kan aan de hand van simpele placeholders en HTML templates een statisce website genereren. In de templates kun je ook if-statements en for/while-loops gebruiken. 
```
{% if page.show_sidebar %}
  <div class="sidebar">
    sidebar content
  </div>
{% endif %}
```

### Gatsby 
[source](https://www.gatsbyjs.org/)

Deze site is gemaakt met behulp van Gatsby. Gatsby maakt zelf gebruik van React. Je kunt webpagina's aanmaken doormiddel van React components en je kunt data in die components inladen vanaf onderandere markdown files. Data kun je opvragen met GraphQL queries, maar je bent niet beperkt tot het bovenstaande. Je kunt ook data ophalen aan de hand van een API, of een database. De output van een Gatsby build is een React website. Gatsby maakt het makkelijk om een uitgebreide site te bouwen, door middel van zijn vele beschikbare plugins. Je bent niet beperkt tot alleen de Gatsby plugins, maar je kan elke npm package instaleren. 
```
// Simplest component possible
const HomePage = () => <h1>Home</h1>

export default HomePage
```

### Docusaurus
[source](https://docusaurus.io/)

Docusaurus is de standaard website layout van Facebook's opensource documentatie. Hoewel de website als uitgangspunt heeft het bijhouden van documentatie, is het ook een uitstekende static site generator. Ook Docusaurus maakt gebruik van React, aan de hand van components worden de pagina's gecreeërd. De output is, vergeleken met Gatsby, geen React site, maar een gewone statische website met HTML bestanden. Zo kan je bij Gatsby dus gebruik maken van alle React features en gebruikt Docusaurus alleen maar de `render()` methode om een site te genereren. Logica die je in `ComponentDidMount()` of `ComponentWillMount()` zet gaat verloren. Ook is het vrij lastig om een npm package te instaleren. 
Met Docusaurus heb je wel met weinig een tijd een volledig werkende website waarbij je niet op de logica hoeft te laten en alleen de content hoeft in te vullen. 
```
export default class HomePage {
    
    ComponentDidMount() { 
        //This is not being used
        ...
    }
    render() {
        // Render is used to generate static HTML files
        return <h1>HomePage</h1>
    }
}
```

## GitHub pages heeft voor zowel bedrijven als individuelen veel voordelen:

- Het is gratis
- Makkelijk in onderhoud
- Onbeperkt opslagruimte
- Geen databases
- Snel een website online met Jekyll(gratis templates)

## Nadelen:

- Support geen serverside processen, alleen statische HTML, JS en CSS
- Jekyll werkt alleen (lokaal) op Apple of LUNIX
- Coderen vereist
- Geen WordPress bloggers


## Final

Bij het maken van een website hangt de keuze af van wat de gebruiker ermee moet doen en wat de maker er mee wil bereiken. Is je website alleen een visite kaartje op het internet, is er maar één persoon die het behoudt, hoeft de gebruiker alleen maar informatie te lezen dan is een GitHub pages(of statische website) site voldoende. Op het moment dat de gebruiker ergens op moet stemmen, zich moet kunnen registreren dan heb je toch iets van een database nodig.

Uiteindelijk komt het erop neer dat hoe minder geld iemand in zijn website wil stoppen hoe meer werk er zelf gedaan moet worden. 