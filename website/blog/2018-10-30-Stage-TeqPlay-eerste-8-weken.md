---
title: "Stage TeqPlay: De eerste 8 weken"
---

Mijn stage bij TeqPlay begon al meteen het bekend maken van de opdracht, dat werd dus de masterdatabase. Wij zijn er aan gaan werken onder de naam [ShipHappens](/docs/shiphappens). Deze opdracht leek me het meest intressant omdat je dan daadwerkelijk aan de slag met de data van schepen, het uiteindelijke doel is dus ook zoveel mogelijk data verzamelen en beschikbaar stellen. Aangezien we gebruik moeten maken van verschillende bronnen is de hoofdvraag van het project: Hoe kun je data uit verschillende bronnen combineren tot 1 bron?

<!--truncate-->

**AN1)** In de eerste weken zijn we meteen aan de slag gegaan met het analyseren van de hoofdvraag, de vraag hoe je verschillende bronnen kunt combineren kan je opdelen in kleinere stukken. Eerste moet je weten welke data we tot onze beschikking hebben, hoe ziet die data er vervolgens uit, zitten er dubbele waardes bij de verschillende bronnen? Zo ja, welke waarde heeft dan voorrang op de andere? Hoeronder is een diagram die weergeeft hoe een *een schip er uit ziet*. 

![modelShip](/blog/assets/Data-with-there-identifiers.png)
*Data van het TeqPlay platform*

In het diagram is de data te zien die van het bedrijf zelf komt, het is een tabel met meerdere identifiers en elke identifier heeft zij eigen attributen. De linkerkant is hoe de data wordt vrijgegeven en de rechterkant is een geordende variant van de gegevens. Op deze mannier kan je de data van het bedrijf in kaart brengen. 

Later kwamen er al gauw meer databronnen bij en voordat we aan de slag gingen met de data maken we er eerst een diagram van om de vorm van de data in kaart te brengen. 

![sources-class](/blog/assets/models-for-sources.png)


**B1)** Om project matig te werken wordt bij TeqPlay met Scrum en Agile gewerkt, sprints duren twee weken en elke sprint begint met het maken van nieuwe taken op het Trello bord en eindigt met een demo van wat we in die sprint hebben gedaan. Voor meer info wat ik elke sprint heb gedaan en de afspraken die zijn gemaakt zie mijn [sprint logboek](assets/Sprint-logboek.pdf). 
![trello](/blog/assets/trello-bord-sprint-2.PNG)


**O1)** In de eerste weken heb ik ook al gewerkt aan een eerste ontwerp voor het systeem dat we gaan bouwen. Dit eerste ontwerp heb ik gemaakt met een component diagram. Hier kan je zien wat er precies nodig is om de applicatie te bouwen en correct te laten functioneren. In het eerste ontwerp zit nog maar 1 data bron verwerkt. De applicatie heeft dus een component voor het binnenhalen van data, het valideren en samenvoegen van data, een eigen database die alle gegevens apart opslaat, een API die die data exposed en beschikbaar maakt voor andere applicaties en als laatste een visualizer die laat zien wat er achter de schermen met de data gebeurt. 
![ontwerp](/blog/assets/System-Design.png)

<!--Realiseren kan hier wellicht ook bij-->