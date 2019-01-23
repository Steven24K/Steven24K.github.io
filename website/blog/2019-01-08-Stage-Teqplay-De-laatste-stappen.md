---
title: "Stage TeqPlay: De laatste stappen"
---

Ik ben de laatste weken in gegaan van mijn stage bij TeqPlay, op dit moment is er een werkend prototype van de masterdatabase neergezet op de student server van het bedrijf. 

<!--truncate-->

Het prototype is beschikbaar via deze [link](http://demo.teqplay.nl/shiphappens/)

![alt](/blog/assets/live-demo-shiphappens.PNG)

## Analyseren

**AN4)** Vanaf dit moment is het goed om terug te blikken op wat er gedaan is en wat er nog gebeuren moet. Hiervoor is een [acceptatietest](https://nl.wikipedia.org/wiki/Acceptatietest)  geschikt om te onderzoeken of het product bruikbaar is en wat er nog veranderd moet worden.

### Acceptatietest: ShipHappens

Het doel van ShipHappens is om data over schepen te verzamelen uit verschillende bronnen en dit te combineren tot één databron. Vervolgens moet deze data beschikbaar gemaakt worden voor eindgebruikers, zodat ze schepen kunnen opzoeken en alle nodige informatie over dat schip kunnen vinden. 

Vragen die je kan stellen om te concluderen of het systeem acceptabel is zijn: 
- Reageert het systeem meteen?
- Is informatie geordend, zodat de gebruiker weet waar die moet zoeken? 
- Als de gebruiker iets aanpast ziet hij dan meteen resultaat? 

Op dit moment draait het systeem dus op de studentserver van TeqPlay en is het beschikbaar voor gebruikers via deze [link](http://demo.teqplay.nl/shiphappens/). Een aantal dingen die het systeem nog niet doet is snel reageren. Dit komt doordat het systeem moet zoeken in een database van meer dan 400.000 schepen, dit gaat op dit moment dus nog erg traag. Een ander probleem tot dit moment is de routes van de URL's. De react-router werkt blijkbaar niet goed samen met een Amazon S3 bucket, dit veroorzaakt dat de detail pagina niet bereikbaar is. Lokaal is deze wel bereikbaar. Op de detail pagina zijn gegevens geordend in categorieën, de volgende categorieën zijn beschikbaar: 
- Identifiers
- Measurements
- Static info
- Categorieën

![alt](/blog/assets/detail-page-shiphappens.PNG)

Achter elke categorie staat een pen tool, waardoor de gebruiker in staat is om de gegevens te bewerken. Op het moment dat de gebruiker iets aanpast wordt het schip toegevoegd aan een aparte collectie met user input data. Vervolgens wordt het schip meteen samengevoegd met de andere data, waardoor de gebruiker meteen resultaat ziet. 

### Conclusie
Wat er dus op dit moment staat is een werkend prototype, van een masterdatabase en een Google-achtige zoekmachine die direct toegang geeft tot de data. Wat het systeem goed doet is het meteen laten zien van resultaat als een schip is aangepast. Dat de gebruiker niet eerst 5 minuten hoeft te wachten. Verbeterpunten voor het systeem op dit moment is zorgen dat elke pagina zowel als in productie als lokaal beschikbaar is. Een ander punt is het verbeteren van de performance, zorgen voor een snellere zoekmethode om in grote datasets een schip te vinden. Een methode daarvoor is het gebruik van indexen in de database, waarbij de schip id's gekoppeld zijn aan een op alfabet gesorteerde lijst. Hiermee kan het systeem sneller het juiste schip vinden. In mongoDB heet dit [compound indexing](https://docs.mongodb.com/manual/core/index-compound/#create-a-compound-index), dit is dus een ding waar ik mij de laatste weken op ga focussen. Voor mij is dit een nieuwe techniek dus zal ik mij hier eerst over moeten gaan inlezen, een klein projectje bouwen als experiment en vervolgens toepassen op het project. Als blijkt dat het probleem hieraan ligt. 


## Adviseren

**AD1)** In het project hebben we gekozen om bepaalde frameworks, tools en technieken te gebruiken om het doel van het project te bereiken. Sommige tools en frameworks hebben we van het bedrijf aangeraden gekregen en andere hebben we zelf voor gekozen om te gebruiken. Als database systeem bijvoorbeeld heeft het bedrijf aangeraden om te kiezen voor [MongoDB](https://www.mongodb.com/). Dit is een noSQL database, dus zonder relaties. Het voordeel is dat je dan niet vast zit aan een standaard database model en makkelijk nieuwe gegevens kunt toevoegen als er nieuwe info wordt ontdekt. Bij een SQL database moet hiervoor eerst alle relaties worden aangepast en een nieuwe migratie worden uitgevoerd op de database tabellen(het opnieuw formateren van de database). 
![alt](/blog/assets/mongoDB-example-1.PNG)

Verder hebben we op aanraden van het bedrijf ook gekozen voor de taal [Kotlin](https://kotlinlang.org/), Java is op dit moment nog de standaard bij het bedrijf. Aangezien ze willen stappen op Kotlin was dat voor ons ook een logische keuze. Zodat de applicatie binnen het bedrijf zou passen, Kotlin is ook een dialect van Java met simpelere syntax.

Een taal waar ik wel zelf voor heb gekozen is [Typescript](https://www.typescriptlang.org/), dit had ik vanuit school ook al geleerd. Het standaard frontend framework by TeqPlay is [React](https://reactjs.org/). Dus dat hadden we ook gebruikt voor de frontend van het project, hierbij ligt dan de keuze of we Javascript of Typescript gaan gebruiken. De keuze voor Typescript was vooral vanwege de schaalbaarheid, de syntax lijkt vrij veel op C# wat ik gewend was vanuit school. Verder zitten er features in als typechecking, interfaces en inheritance. Dit was voor een data applicatie die wij maakte erg handig omdat het datatype van de verschillende bronnen erg belangrijk is. In Javascript krijg je dan eerder een runtime error omdat bepaalde typen niet met elkaar matchen, terwijl in Typescript je dan al een compile error krijgt. Op deze mannier haal je een hoop fouten er dus al uit voordat de applicatie opgestart wordt.



## Skills en attitude

**S3)** Voor deze competentie zie mijn feedback en zelfreflectie formulier ingevult door mij en de bedrijfsbegeleider.

[Feedback formulier](/blog/assets/Feedbackformulier-Steven-Koerts-0904861.pdf)
Het feedbackformulier is gezamenlijk gemaakt door alle studenten van TeqPlay, [Catalina Andreitacarstoiu](https://catalinaandreitacarstoiu.github.io/), [Joost Zonneveld](http://jozonneveld.nl/) en [Maurice van Veen](http://teqplay.derdejaarsstage.mauricevanveen.com/)

De conclusie van het feedbackformulier komt er bij mij voornamelijk op neer dat ik mijzelf niet te veel met andere moet vergelijken, dus niet kijken of ik beter of slechter in programmeren ben dan de ander. Het is voorral belangrijk om naar mijn eigen werk te kijken en daar het beste uittehalen. Een erg positief punt is dat ik nieuwe technieken snel op weet te pakken en er ook energie uithaal om nieuwe dingen te leren. Het blijft voormij dan nog wel lastig om vervolgens die nieuwe techniek toe te passen in de praktijk en ook de nieuwe informatie over te brengen op collaga's. Verder is het ook belangrijk om niet één oplossing te zoeken voor een probleem en ook met alternatieven te komen, als het gaat om software development is er tevens nooit één oplossing.