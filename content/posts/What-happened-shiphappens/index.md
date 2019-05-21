---
title: "What happened? ShipHappens!"
date: "2019-01-25"
category: projects
---

Dit is het project waar ik aan gewerkt heb gedurende mijn stage bij een maritieme IT startup [Teqplay](https://teqplay.nl/). Het doel van de applicatie was om zoveel mogelijk data van schepen te verzamelen uit verschillende bronnen, te combineren tot één master database en vevolgens in kaart te brengen waar alle data vandaan komt. 

Dus als iemand de vraag heeft over een schip: What happened? ShipHappens heeft het antwoord!

![Home Page ShipHappens](../What-happened-shiphappens\shiphappens_1.PNG)

![Zoek een ship](../What-happened-shiphappens\shiphappens-search.PNG)

![Details from ship](../What-happened-shiphappens\shiphappens-detailpage.PNG)

![master database](../What-happened-shiphappens\shiphappens_master_table.PNG)


# Tech 
Het systeem is geschreven in Kotlin en de front-end is gemaakt met React, er wordt data binnengehaald van de Teqplay API, een CSV file, een XML file en user input. Dit wordt allemaal appart opgeslagen en samengevoegd en vervolgens ook door een eigen API naar buiten beschikbaar gemaakt voor het publiek om te zoeken in de master database.
![diagram shiphappens](../What-happened-shiphappens\component-overview-shiphappens.png)