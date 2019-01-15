---
title: "Stage TeqPlay: Einde stage"
---

Dit is de laatste blog post van mijn portfolio gedurende mijn stage, hier zal ik kort terugblikken op wat ik heb gedaan en ziet u nog één keer alle uitgewerkte competenties en leerdoelen achterelkaar.  

<!--truncate-->

Tijdens mijn stage heb om de x aantal weken een blog bijgehouden, waar mijn voortgangen en werkzaamheden staan beschreven. Met als belangrijkste wat ik geleerd heb, met welke kennis ben ik mijn stage ingegaan en met welke kennis heb ik mijn stage afgesloten? 

Al deze competenties en leerdoelen heb ik behaald door het werken aan het [ShipHappens project](/docs/ShipHappens).

## Documenten
Voor mijn stage heb ik de volgende documenten gemaakt en bijgehouden: 
- [Stageplan deel 1](/blog/assets/Stageplan-1-Teqplay-Steven-Koerts-0904861.pdf)
- [Stageplan deel 2 v1](/blog/assets/Stageplan-2-Teqplay-Steven-Koerts-0904861.pdf)
- [Stageplan deel 2 v2](/blog/assets/Stageplan-3-Teqplay-Steven-Koerts-0904861.pdf)
- [Sprint logboek](/blog/assets/Sprint-logboek.pdf)
- [Feedback formulier](/blog/assets/Feedbackformulier-Steven-Koerts-0904861.pdf)

Het stageplan heb ik voorafgaand gemaakt aan mijn stage, hierin staan mijn verwachtingen informatie over TeqPlay, de vantevoren gestelde leerdoelen, uitleg bij de competenties(o.a. hoe ik die ga aantonen). Verder heb ik een sprint logboek bijgehouden waar ik per twee weken bij heb gehouden wat ik in een bepaalde sprint gedaan heb en als laattse is er het feedback formulier van de bedrijfsbegeleider. 

## Leerdoelen
Aan het begin van stage heb ik twee leerdoelen gesteld voor mezelf. Wat ik graag nog wou leren tijdens mijn stage. 

### Leerdoel 1

Leerdoel 1 heb ik gedurende het project wat bijgesteld, het project ShipHappens ging voornamelijk over big data. Een onderwerp waar ik zelf in de toekomst ook nog meer over wil leren. Vandaar ook mijn keuze voor de minor data engineering. De vraag die ik mezelf bij het project heb gesteld is: "Waar haalt TeqPlay al zijn data vandaan en hoe weet je of een bron betrouwbaar is?". Het probleem dat ons project beschrijft is dat het bedrijf informatie uit veel verschillende bronnen haalt en het bedrijf zou graag één grote databron willen hebben waar alle verschillende bronnen samengevoegd zijn. Dus kortom wat ik hiel wou leren is hoe je grote hoeveelheid data analyseert en de context van de databron weet te achterhalen, welke data is relevant en wat gebruiken we niet. 

Dit leerdoel heb ik behaald door het onderzoeken van verschillende bronnen, om eerst de bron te analyseren en vervolgens aan de database toe te voegen. 
Zo ben ik in de eerste weken aan de slag gegaan met het kijken naar hoe de dataset van TeqPlay eruit zag, wat ze in hun eigen systeem hadden staan. Hierbij heb ik dan ook een diagram gemaakt om te laten zien hoe een schip eruit ziet. 

Deze afbeelding staat ook bij [analyseren 1](/blog/2018/10/30/Stage-TeqPlay-eerste-8-weken#analyseren)
![alt](/blog/assets/Data-with-there-identifiers.png)

Aan de hand van dit diagram kan dan een data model worden geïmplementeerd in het systeem: 

```
@JsonInclude(JsonInclude.Include.NON_NULL)
class ShipInfoStaticPlatform(
        val teqplayId: String? = null,
        mmsi: String? = null,
        val _id: String? = null,
        eni: String? = null,
        imoNumber: String? = null,
        positionOfTransponder: PositionOfTransponder? = PositionOfTransponder(),
        hazardCode: Int? = null,
        //shipWidth and shipLength are in meters
        width: Double? = null,
        length: Double? = null,
        positionSensorType: String? = null ,
        aisVersion: String?  = null,
        callSign: String?  = null,
        name: String? = null,
        shipType: String? = null,
        combinationType:String? = null,
        category: String? = null,
        role: String? = null,
        val static_source: Sources = Sources.TEQPLAY_PLATFORM,
        val date: String = Date().toString()
)
```

Vervolgens zijn dit de stappen die nodig zijn voor het toevoegen van een nieuwe bron: 
1. Het analyseren van de informatie die de bron bevat
2. Bedenken wat de herkomst is van alle informatie, door mensen of computers geproduceerd? 
3. Het opstellen van een diagram met alle bruikbare gegevens
4. Het diagram implementeren in het systeem
5. Een prioritering bedenken hoe de data gecombineerd gaat worden met andere bronnen, hierbij is het belangrijk om te weten of er dubbele data is

Het belangrijkste wat ik hiervan heb geleerd is het belang van een goede voorbereiding en een goed ontwerp. Om eerste bij een casus of probleemstelling still te staan en erover nagedacht te hebben voordat je aan de slag gaat met het daadwerkelijk bouwen. Voor projecten die ik in de toekomst ga doen zou ik langer willen stil staan bij de ontwerpfase. Hier geld dan overigens een goed begin is het halve werk.

### Leerdoel 2

Leerdoel 2 ging over software deployment, hoe zet je een systeem online en dat het ook nog onderhoudtbaar is. Ook gaat het er hierbij om netjes te programmeren, zorg dat er voldoende comments in de code staan. Gemaakte diagrammen, API documentatie, build scripts en README files. Dit alles heeft te maken met het maken van onderhoudtbare software en dus ook met software deployment.

Dit leerdoel heb ik behaald door zelf uit te zoeken hoe je een systeem op een server zet en daarbij ook de nodige stappen te noteren. Uiteindelijk stelt het online zetten van een software systeem niet zo veel voor, het is een kwestie van een serie commando's op de juiste volgorde achter elkaar uitvoeren op een server. Ik ben hierdoor wel anders naar software systemen gaan kijken, hierdoor heb ik nu ingezien hoe belangrijk het is om goed onderscheidt te maken tussen een development- en een productieomgeving. Dit vooral met het oog op database wachtwoorden die verschillen tussen de omgevingen.
Hieronder zijn de stappen die nodig zijn voor de deployment van het project, in eerste instantie had ik niet opgeschreven waardoor ik binnen de kortste keren vergeten was hoe het ook alweer moest. Hiervan heb ik dus geleerd dat het belangrijk is om dit soort handelingen meteen op te schrijven. 

Zie hieronder de stappen die je moet maken om de software online te zetten of te updaten:
![alt](/blog/assets/readme-shiphappens-deployment-steps.PNG)

Een ander belangrijk onderdeel wat bij het leerdoel hoort is het bijhouden van documentatie, het plaatsen van voldoende comments in de code, API documentatie beschikbaar maken en zorgen voor diagrammen van de systeem structuur. Dit alles heeft te maken met de onderhoudbaarheid van het systeem en of andere developers er aan verder kunnen werken. Een groot diagram van het systeem is [hier](/docs/ShipHappens#werking) te vinden, verder staat hieronder de API documentatie van het project. Hier kan een gebruiker of developer vinden welke interacties hij/zij kan hebben met het systeem, o.a. hoe je alle informatie van een schip moet opvragen.

**TODO: AFBEELDING API DOCS**

Kortom, het belangrijkste wat ik hierbij geleerd heb is dat documentatie iets is wat niet pas aan het eind van een project komt. Als je het gedurende het project bijhoudt scheelt dat een hoop werk voor later, plus dat je dan soms vergeet hoe iets precies werkt wat je gebouwd hebt. Ook heb ik ingezien dat documentatie niet iets is dat één keer wordt geschreven, maar constant veranderd. Door o.a. gebruik te maken van automatische documentatie tools zoals [Springfox](https://springfox.github.io/springfox/docs/current/), zorg je ervoor dat als er veranderingen in de code plaatsvinden dat de documentatie ook meteen wordt geüpdatet. Want ook in de praktijk zie je vaak dat software veranderd en de documentatie niet wordt bijgewerkt, of wordt uitgesteld naar een later moment.


## Persoonlijke groei

Dus mijn leerdoelen hadden vooral te maken met het verzamelen en valideren van data en het uiteindelijk beschikbaar maken van de data door middel van een live deployment. Mijn leerdoelen hebben zeker invloed gehad op mijn interesse ontwikkeling binnen informatica. Ik weet nu aanzienlijk meer of software deployment dan voor mijn stage, ook omdat ik hier vanuit de opleiding nog niks meegedaan had. Deployment was voor mij nog een blank gebied. Nu heb ik een beter idee wat er allemaal bij komt kijken als je een systeem op een server wilt zetten en beschikbaar wil maken voor anderen. Het geeft mij overigens een erg goed gevoel als ik een live deployment heb gedaan en vervolgens een [link](http://demo.teqplay.nl/shiphappens/) kan delen met anderen. Om te laten zien wat ik gemaakt heb. 

Verder op het gebied van het verzamelen van data. Hier neem ik vooral mee wat grote datasets doen met je applicatie, dat je dan ook over de performance moet gaan nadenken. Anders wordt de applicatie enorm traag. Wat ik volgende keer anders zou doen is eerder gaan nadenken over de hoeveelheid data die het systeem per keer inlaadt en niet honderdduizenden records tegelijk. Tenslotte zou ik het leuk vinden om richting de data verzamel kant te gaan later. Dus niet bezig zijn met wat er met de data gebeurd, maar waar het vandaan komt. Hoe betrouwbaar de bronnen zijn, hoe combineer je verschillende bronnen, hoe ga je om met veranderingen en hoe maak je de data beschikbaar voor anderen. Vandaar ook mijn keuze voor de minor data engineering omdat ik dan hoop meer met de data bezig te zijn en hoe ik een dataset aanlever voor anderen en minder bezig te zijn met wat er met een dataset gebeurd.  


## Competenties
Aan de onderstaande competenties heb ik gedurende mijn stage gewerkt en in een blog de voortgang bijgehouden. Hieronder staat nog één keer kort wat ik voor elke competenties gedaan heb en een verwijzing naar het blog artikel van de volledige uitwerking.

### Beheren 
**B1)**

### Analyseren 
**AN1)**

**AN2)**

**AN3)**

**AN4)**


### Adviseren
**AD1)**


### Ontwerpen
**O1)**

**O2)**


### Realiseren
**R1)**

**R2)**


### Skills & Attitude
**S1)**

**S2)**

**S3)**

