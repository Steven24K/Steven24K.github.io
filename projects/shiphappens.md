---
id: shiphappens
title: "Master DataBase: ShipHappens" 
---

![ShipHappens](assets/shiphappens_cli-start.PNG)

## Inleiding

Dit project heb ik gedaan voor mijn stage bij [TeqPlay](https://link), TeqPlay is een bedrijf gevestigd in de [Van Nelle fabriek](https://link). Het idee achter
dit project was om een master database to bouwen voor scheepsinformatie gecombineerd uit meerdere bronnen. Inclusief met een API die de *master data* weer beschikbaar maakt. 


## Het project ShipHappens

In de eerste week van mijn stage kreeg ik te horen wat de opdracht precies zou zijn, die het bedrijf voor ons bedacht had. Dat was dus het bouwen van éen master databron voor scheepsdata waar andere applicaties van TeqPlay in de toekomst hun informatie vandaan kunnen halen. Eerst wat achtergrond over hoe hoed it project to stand is gekomen. TeqPlay heeft een intern systeem dat continu informatie binnenhaalt en doorgeeft aan andere applicaties waaronder [RiverGuide](https://link). Die data komt uit verschillende bronnen, onder andere de [AIS](https://link) van schepen zend een hoop informatie uit, verder halen ze ook informatie uit hun eigen apps. Dit is user generated data, ingevoerd door de schipper. 

Het probleem is dat al deze data in verschillende tabellen en databases zit en ook uit verschillende bronnen komt. Het bedrijf zo het ideaal vinden als al deze gegevens dus gebundeld worden to éen centrale bron. 
Dit is dus wat ShipHappens moet gaan realiseren. 

## Eisen

Een aantal eisen die het project heeft zijn: 

1. De data moet om de n minuten binnengehaald kunnen worden. (Bijvoordbeeld elke dag of elk uur een update)
2. De applicatie slaat de bronnen waarvan de data vandaan komt apart op
3. De data uit de master database mag niet direct aangepast worden
5. Het proces van hoe de data samengevoegd wordt moet visueel inzichtelijk worden
6. Incorrecte data moet handmatig gewijzigd kunnen worden en vervolgens gemarkeerd worden als handmatig aangepast



## De Master DataBase

![Masterdatabase](assets/shiphappens_master_table.PNG)
*De Master Database*

Hierboven is een screenshot te zien van onze masterdatabase, deze tabel is een visuele representatie van de data. Als front-end framework is hiervoor [React](https://reactjs.org/) gebruikt, 
de tabel is gemaakt met [ReactTable](https://react-table.js.org/#/story/readme). De data komt uit een zelfgebouwde API die gemaakt is met behulp van [SpringBoot](http://spring.io/) in de programmeertaal [Kotlin](https://kotlinlang.org/). Onder de tabel is te zien waar de data vandaan komt en hoe die is samengesteld. Het idee van de masterdatabase is dus dat de data een samensmelting is van gegevens uit andere bronnen. Als de data maar uit 1 bron komt wordt dat aangegeven in de tabel, als de data samengevoegd is kan dat ook gezien worden en als de data
handmatig aangepast is dan moet dat ook zichtbaar zijn. 

Het handmatig aanpassen van de masterdatabase gaat als volgt: Er wordt een kopie gemaakt van de data in een andere tabel, vervolgens kan die tabel door een administrator worden aangepast en tenslotte wordt die nieuwe tabel samengevoegd met de data uit de masterdatabase. Het schip staat dan ook gemarkeerd als handmatig gewijzigd, op deze manier krijg je dus beter inzicht waar alle gegevens precies vandaan komen. 

![sources](assets/sources_shiphappens.PNG)
*de beschikbare bronnen voor statische scheepsinformatie*


## Mergen van data

![Flowchart](assets/Flowchart-ShipHappens.png)

Het samenvoegen of mergen van data is waar onze applicatie om draait, we haleninformatie uit een bron en vervolgens doen we daar iets mee en daarna gaat de data weer naar buiten toe om gebruikt te worden andere applicaties. Het merge algoritme is de kern van het systeem, aan de hand van vooraf opgestelde prioriteiten wordt een beslissing genomen welke data voorang krijgt. Deze voorkeur is ook te wijzigen door de eindgebruiker. Het bedrijf wil dat de handmatige info of user created input voorrang krijgt op alle andere bronnen. 

Verder kan er dus voor elke aparte bron en elke aparte eigenschap bepaald worden wat de voorkeur heeft ten opzichte van een andere bron. 

Het samenvoegen van data wordt voornamelijk gedaan door een beslistabel, waar de prioriteiten staan aangegeven. Het attribuut van een bepaalde bron dat de hoogste prioriteit heeft gaat voor op alle andere bronnen. Als die afwezig is dan geld de daarop volgende hoogste prioriteit.


<!--Stukje over deployment student server-->



