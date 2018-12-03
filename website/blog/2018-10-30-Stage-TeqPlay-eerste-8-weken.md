---
title: "Stage TeqPlay: De eerste 8 weken"
---

Mijn stage bij TeqPlay begon al meteen het bekend maken van de opdracht, dat werd dus de masterdatabase. Wij zijn er aan gaan werken onder de naam [ShipHappens](/docs/shiphappens). Deze opdracht leek me het meest intressant omdat je dan daadwerkelijk aan de slag met de data van schepen, het uiteindelijke doel is dus ook zoveel mogelijk data verzamelen en beschikbaar stellen. Aangezien we gebruik moeten maken van verschillende bronnen is de hoofdvraag van het project: Hoe kun je data uit verschillende bronnen combineren tot 1 bron?

<!--truncate-->

## Analyseren
**AN1)** In de eerste weken zijn we meteen aan de slag gegaan met het analyseren van de hoofdvraag, de vraag hoe je verschillende bronnen kunt combineren kan je opdelen in kleinere stukken. Eerste moet je weten welke data we tot onze beschikking hebben, hoe ziet die data er vervolgens uit, zitten er dubbele waardes bij de verschillende bronnen? Zo ja, welke waarde heeft dan voorrang op de andere? Hoeronder is een diagram die weergeeft hoe een *een schip er uit ziet*. 

![modelShip](/blog/assets/Data-with-there-identifiers.png)
*Data van het TeqPlay platform*

In het diagram is de data te zien die van het bedrijf zelf komt, het is een tabel met meerdere identifiers en elke identifier heeft zij eigen attributen. De linkerkant is hoe de data wordt vrijgegeven en de rechterkant is een geordende variant van de gegevens. Op deze mannier kan je de data van het bedrijf in kaart brengen. 

Later kwamen er al gauw meer databronnen bij en voordat we aan de slag gingen met de data maken we er eerst een diagram van om de vorm van de data in kaart te brengen. 

![sources-class](/blog/assets/models-for-sources.png)

## Beheren
**B1)** Om project matig te werken wordt bij TeqPlay met Scrum en Agile gewerkt, sprints duren twee weken en elke sprint begint met het maken van nieuwe taken op het Trello bord en eindigt met een demo van wat we in die sprint hebben gedaan. Voor meer info wat ik elke sprint heb gedaan en de afspraken die zijn gemaakt zie mijn [sprint logboek](assets/Sprint-logboek.pdf). 
![trello](/blog/assets/trello-bord-sprint-2.PNG)


## Ontwerpen
**O1)** In de eerste weken heb ik ook al gewerkt aan een eerste ontwerp voor het systeem dat we gaan bouwen. Dit eerste ontwerp heb ik gemaakt met een component diagram. Hier kan je zien wat er precies nodig is om de applicatie te bouwen en correct te laten functioneren. In het eerste ontwerp zit nog maar 1 data bron verwerkt. De applicatie heeft dus een component voor het binnenhalen van data, het valideren en samenvoegen van data, een eigen database die alle gegevens apart opslaat, een API die die data exposed en beschikbaar maakt voor andere applicaties en als laatste een visualizer die laat zien wat er achter de schermen met de data gebeurt. 
![ontwerp](/blog/assets/System-Design.png)


## Realiseren
**R2)** Voor het project hebben we een aantal tests geschreven om de onderhoudbaarheid van de software te bevorderen. Het bedrijf heeft aangeraden om om unit tests te schrijven voor de losse componenten in het systeem. Zo kom je er ook meteen achter of een bepaalde functie te groot is, dan kun je hem opdelen in kleinere stukken. Een unit test bestaat uit een test case, de wat en waarom je gaat testen. De test is vervolgens opgebouwd uit een verwacht resultaat en een werkelijk resultaat, deze worden met elkaar vergeleken. Als ze hetzelfde zijn dan is de test succesvol, zijn er afwijkingen dan heeft de test gefaald. 

## TEST: Database filters

Een zeer kritisch onderdeel van het systeem is het filter systeem. Het doel van dit onderdeel is op dynamische wijze filters maken om te kunnen zoeken binnen onze master database. 
Dit is een belangrijk onderdeel omdat dit de informatie uit onze database vrijgeeft, we geven geen hele datasets vrij. Alleen gefilterde data van wat de gebruiker heeft opgezocht, het idee is dus dat wij al die gegevens over schepen hebben en alleen vrijgeven als de gebruiker weet waar hij naar op zoek is. 

### Test case

En functie voor het genereren van MongoDB queries aan de hand van een key value pair, die een filter maakt voor het vergelijken van een attribuut met een bepaalde waarde bijvoorbeeld: het vergelijken van de `"name"` van een schip met waarde `"BETELGEUZE"`. 

- input waarde van de functie is `mapOf("name" to "BETELGEUZE"`) 
- Verwachte output is `{ $or: [ { "name" : "BETELGEUZE" } ] }`

Op het moment dat je de output runt in mongo dan worden alle schepen terug gegeven waar de naam gelijk is aan BETELGEUZE. 

Het success resultaat is alsvolgt: 
![alt](/blog/assets/test-success.PNG)


*De te testen component*
![alt](/blog/assets/function-to-test.PNG)


*De unit test*
![alt](/blog/assets/unit-test.PNG)