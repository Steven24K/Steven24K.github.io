---
title: "Stage TeqPlay: Performancetest"
---

Zoals in deze [acceptatietest](/blog/2019/01/08/Stage-Teqplay-De-laatste-stappen#acceptatietest-shiphappens) te lezen is bleek dat de zoekfunctie van de applicatie erg traag was. Om uit te zoeken hoe dit kwam heb ik een performancetest gedaan. 

<!--truncate-->

## Realiseren R2
## Testplan performancetesttest zoekfunctie ShipHappens

Uit het gebruik van het systeem is gebleken dat de zoekfunctie
enorm traag wordt als er meer schepen in de database zitten. Bij 
400.000 schepen moet je zo een 8 seconden wachten totdat je resultaat
ziet. Vandaar dit testplan om uit te zoeken waar dit aan ligt. 
Verder blijkt het dat als de collectie met schepen groter wordt de
response tijd ook groter wordt.

**Dus de hoofdvraag van deze test is: Wat is het dat response tijd van de zoekfunctie van de applicatie traag maakt?**


### Mogelijke oorzaken
- Trage mongoDB queries
- Zware operaties in de backend die aangeroepen wanneer er een zoekopdracht wordt gedaan

### Onderzoeksmethoden
1. Om er achter te komen of de mongo query te zwaar is en teveel rekenkracht inneemt kan gekeken worden naar de tijd als je de query handmatig invoert. 
   Aangezien de tijd elke keer anders is moet de query een aantal keer achter elkaar uitgevoerd worden voor een goed resultaat. Dit heeft te maken met dat
   de tijd hoelang een query erover doet ook afhankelijk is van de processor snelheid. Als dit het probleem is dan zal [compound indexing](https://docs.mongodb.com/manual/core/index-compound/) een goede oplossing zijn. 
   ![alt](/blog/assets/mongoDB-performance-test.PNG)

De resultaten kun je uitzetten in de volgende tabel: 
![alt](/blog/assets/result-mongo-test.PNG)

2. Om de tijd van de operaties in de backend te meten kan een stopwatchmethode worden gebruikt die in Kotlin zit ingebouwd. De response tijd hangt dus af van de grote van de collectie. Dus in een tabel kan de collectie grote worden uitgezet tegen de tijd van een bepaalde operatie in het systeem. Eerst zullen de handelingen in kaart gebracht moeten worden van het maken van de request tot aan het terug sturen van het resultaat. 
   ![alt](/blog/assets/api-call-performance-test.PNG)
   ![alt](/blog/assets/api-call-performance-test-2.PNG)

De responsetijd wordt op het scherm geprint:
![alt](/blog/assets/make-search-query-response-time.PNG)
Vervolgens kan per handelijk de tijd gemeten worden en dan de totale response tijd worden berekend.
![alt](/blog/assets/backend-test-table-sample.PNG)



## Testrapport

Hieronder zijn de resultaten uitgewerkt in een testrapport. 


### Resultaten
![alt](/blog/assets/test-results-performance-test.PNG)
Zoals in de tabel te zien is ligt de traagheid niet aan de mongoDB query, de database geeft in 0,008 seconden een resultaat terug bij het doorzoeken 130.000 schepen. 
![alt](/blog/assets/MongoDB-collection-size.PNG)
Er is meerdere keren getest omdat de tijd ook afhankelijk is van de hardware van de computer, het kan zijn dat de pc op het moment van de test iets anders op de achtergrond aan het doen was waardoor de responsetijd trager wordt. Dus vandaar wordt het gemiddelde genomen. 

Verder is er te zien dat het ophalen van data gemiddeld 1,5 seconden kost, met uitschieters naar de 5 seconden. De responsetijd is hier afhankelijk van de collectie grote, hoe meer schepen in de database hoelanger de responsetijd. Dit komt dus door de `searchShip` methode, in die methoden zitten wat operaties die de request vertragen. Eén van de dingen die veranderd kan worden is het verplaatsen van zware methoden naar de mongoDB, dan is het systeem daar niet meer verantwoordelijk voor. Eén van de zware operaties was het kleiner maken van de collectie, er worden maximaal 20 schepen naar de frontend gestuurd. Omdat een webbrowser kan crashen als er teveel data wordt ingeladen en de gebruiker heeft er ook niet zo veel aan als hij/zij 20.000 schepen op het scherm te zien krijgt. 


## Conclusie

Wat dus blijkt uit deze test is dat het probleem dus niet bij mongoDB ligt maar bij het systeem zelf. MongoDB is dus vele malen sneller in het opzoeken en kleiner maken van datasets. De oplossing voor compound indexing zal het niet heel veel sneller maken, dit is overigens wel handig als de database groter wordt dan een miljoen schepen. Dat is nog niet het geval, maar met oog op de toekomst zal het zeker handig zijn om dit te implementeren. Het gebruik indexen in de database maakt het opzoeken van gegevens een heel stuk sneller, dit blijkt ook uit de officiële documentatie. 

De oplossing om de limiet operatie te verplaatsen naar de mongo database en niet meer in de backend te laten uitvoeren maakt een groot verschil, de responsetijd is nu stabiel rond de 10 milliseconden. 
![alt](/blog/assets/perfamnce-improvements.PNG)



