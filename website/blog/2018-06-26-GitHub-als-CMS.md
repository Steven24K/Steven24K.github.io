---
title: "GitHub als content management systeem"
---


Deze website wordt gehost vanuit een public repository, via <a href="https://pages.github.com/">GitHub pages</a>. Onder het motto van low budget webdevelopment, aangezien ik gebruik maak van een gratis GitHub account.

<!--truncate-->

 Hiervoor hostte ik mijn website via 
<a href="https://www.versio.nl/webhosting">Versio</a>, dit was het goedkoopste hosting bedrijf dat ik online kon vinden 1500MB SSD schijfruimte voor €0,50/maand plus de kosten voor mijn domeinnaam <a href="http://stevenkoerts.nl/">stevenkoerts.nl</a>.<br>
Verder over gratis webhosting via GitHub pages, er zijn een hoop websites en bedrijven die gebruik maken van deze dienst. Zo zijn er bedrijven die alles via GitHub pages regelen, zoals: <a href="https://github.com/twbs/bootstrap">getbootstrap</a> of <a href="https://github.com/BlackrockDigital/startbootstrap">startbootstrap</a> en <a href="http://stevenkoerts.nl/">stevenkoerts.nl</a>(vanaf nu ook.)

Eerst heb ik gekozen voor <a href="https://www.gatsbyjs.org/">Gatsby</a>, dat is een open-source Javascript static site generator voor <a href="https://reactjs.org/">React</a>. De website van React is trouwens ook gebouwd met Gatsby, volgens de showcase in de <a href="https://github.com/gatsbyjs/gatsby">README.md</a> file van hun GitHub en mijn website staat daar ook mooi tussen.

Er zijn ook een hoop andere static site generator beschikbaar, kijk hier voor een complete [lijst](https://www.staticgen.com/). 
Deze website is gemaakt met docusaurus, een static site generator die gebruik maakt van Reacts component structure. De reden waarom ik van Gatsby ben afgestapt is vanwege deze [issue](https://github.com/gatsbyjs/gatsby/issues/2440), die al een aantal jaren loopt. Ik wou afbeeldingen toevoegen in de 
markdown files, maar dat werkt dus niet bij gatsby. Bij docusaurus is dat een stuk eenvoudiger door simpel weg je afbeeldingen in 
website/blog/assets of docs/assets te pushen. Verder blijf ik bij GitHub pages, webhosting. 

<b>GitHub pages heeft voor zowel bedrijven als individueelen veel voordelen:</b>
        <ul>
            <li>Het is gratis</li>
            <li>Makkelijk in onderhoud</li>
            <li>Onbeperkt opslagruimte</li>
            <li>Snel een website online met <a href="https://jekyllrb.com/">Jekyll</a>(gratis templates)</li>
        </ul>

<b>Nadelen:</b>
        <ul>
            <li>Support geen serverside processen, alleen statische HTML, JS en CSS</li>
            <li>Jekyll werkt alleen (lokaal) op Apple of LUNIX</li>
        </ul>