---
title: "Stage Teqplay: Het vervolg"
---

Vanaf dit moment ben ik 13 weken bezig met mijn stage, we hebben al flink wat geprogrammeerd en een mooi product neergezet. 

<!--truncate-->

Naast de backend ben ik nu ook bezig met de frontend en het design van een mooie user interface. Je merkt dat we in 10 weken tijd een stabiele basis hadden voor het project met een duidelijk doel van het systeem moet kunnen. In de komende weken zal ik meer gaan werken naar het gebruik toe, om de te kunnen zorgen dat in eerste instantie andere werknemers het systeem kunnen gebruiken. 


## Analyseren
**AN2, AN3)** Bij deze competenties gaat er vooral om de requirements van het systeem in kaart te brengen, wat moet het systeem kunnen en wat moeten de gebruikers kunnen doen met het systeem. Zijn er verschillende gebruikers en hebben al die gebruikers verschillende rechten? Binnen deze competentie laat ik in een use case diagram zien wat de scope is van het project. 
![alt](/blog/assets/usecase-shiphappens.png) *Use case*

Wat te zien is in dit diagram zijn de verschillende gebruikers en systeem onderdelen die iets te maken hebben met het systeem en wat er van het systeem verwacht wordt. Een aantal eisen zijn dat het systeem nieuwe informatie moet binnenhalen in een vastgesteld tijd schema. Andere onderdelen zijn dat het systeem alle veranderingen op de database bij moet houden en als een schip handmatig wordt aangepast dat het dan in een aparte collectie wordt opgeslagen. 

Deze use cases worden vervolgens omgezet in kaarten die worden toegevoegd op het Trello bord. 

![alt](/blog/assets/trello-bord-bij-AN2-3.PNG)

## Ontwerpen
**O2)**
Bij [Ontwerpen 1](/blog/2018/10/30/Stage-TeqPlay-eerste-8-weken#ontwerpen) heb ik een eerste opzet van een component diagram gemaakt. Gedurende het project is er meer duidlijkheid gekomen over de structuur van het project en is het diagram ook wat veranderd. In onderstaand diagram zijn alle componenten concreter uitgewerkt en wordt de structuur van het systeem weergegeven.

![alt](/blog/assets/class-diagram-shiphappens.png) *Class Diagram*

In het diagram zijn de belangrijkste onderdelen van de backend geschetst, het systeem bestaat uit vier packages: 
- logic
- models
- controllers
- datasources

In de **logic** staat de kern van het systeem, dit onderdeel is verantwoordelijk voor het verzamelen van informatie en het samenvoegen van die informatie to één bron, in de **models** staan alle data modellen van hoe de data eruit ziet. De **controllers** zijn verantwoordelijk voor het naar buiten beschikbaar maken van de data en die data wordt uit de de database gehaald door de **datasources**, deze is tevens ook verantwoordelijk voor alle CRUD(Create, Read, Update en Delete) operations op de database. 


## Realiseren
**R1)**
Bij deze competentie zit het daadwerkelijk bouwen van de software bij in, hier volgt de implementatie van de applicatie volgens de eerder gemaakte diagrammen. De applicatie maakt gebruik van het [REST MVC](https://softwareengineering.stackexchange.com/questions/324730/mvc-and-restful-api-service) pattern. De backend bestaat uit de models en de controllers voor het beschikbaar maken van de data. De view(de frontend) staat in een los staande applicatie, dit is de opmaak en visualisatie van de data. In de backend is de systeem logica gescheiden van de rest van de applicatie. De backend is geschreven in Kotlin en voor de REST API wordt gebruik gemaakt van Springboot. 
De frontend is geschreven in Typescript en maakt gebruik van React, dit is tevens de standaard voor frontend applicatie bij TeqPlay. 

Hieronder volgen een aantal code snippets en design implementaties: 

### Backend

Project structuur:

 ![alt](/blog/assets/directory-structure.PNG)


Controller: ![alt](/blog/assets/controller-shiphappens.PNG) 

Datasource: ![alt](/blog/assets/datasource-shiphappens-standaard.PNG)

Datasource method: ![alt](/blog/assets/datasource-insertmany-method.PNG)

Ship model: ![alt](/blog/assets/model-shipinfo.PNG)


### Frontend

De frontend houdt voor in het vervolg een simpel design aan, ons project moet je zien als de Google voor scheepsinformatie. Wij verzamelen heel veel informatie en geven die vrij aan de gebruiker zodra die er om vraagt. We geven dus net als Google geen inkijk in onze database, maar geven alleen de de informatie vrij als er om gevraagd wordt. Als je het ontwerp met de implementatie vergelijkt zie je overeenkomsten en verschillen. Een verschil zijn de knoppen om te zoeken die weg gelaten zijn in de implementatie, het was volgens het bedrijf handiger om die knop weg te laten. Zodra de gebruiker klaar is met typen dan wordt er een request naar de server gemaakt en zie je automatisch het zoekresultaat in het scherm. Een ding in het ontwerp dat hetzelfde is gebleven is de afgeronde hoeken, als je kijkt naar veel websites en producten zie overal afgeronde hoeken en wordt door de consument als mooi ervaren. Kijk maar naar websites als Google, Facebook en YouTube, maar ook in producten om ons heen. Zoals telefoons, computers, autos, tafels etc. 

<img width="300px" src="/blog/assets/IMG_20181204_091110.jpg" alt="image"><img width="400px" src="/blog/assets/home-pageshiphappens.PNG" alt="image">

![alt](/blog/assets/dropdown-schets.png)










