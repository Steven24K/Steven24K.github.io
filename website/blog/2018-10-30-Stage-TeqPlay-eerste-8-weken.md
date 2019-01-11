---
title: "Stage TeqPlay: De eerste 8 weken"
---

Mijn stage bij TeqPlay begon al met het bekend maken van de opdracht, dat werd dus de masterdatabase. Ik ben er in teamverband aan gaan werken, onder de naam [ShipHappens](/docs/ShipHappens). 

<!--truncate-->

Deze opdracht leek me het meest intressant omdat je dan daadwerkelijk aan de slag met de data van schepen, het uiteindelijke doel is dus ook om zoveel mogelijk data te verzamelen en beschikbaar te stellen. Aangezien we gebruik moeten maken van verschillende bronnen is de hoofdvraag van het project: Hoe kun je data uit verschillende bronnen combineren tot één bron?



## Analyseren
**AN1)** In de eerste weken zijn we meteen aan de slag gegaan met het analyseren van de hoofdvraag, de vraag hoe je verschillende bronnen kunt combineren kan je opdelen in kleinere stukken. Eerst moet je weten welke data we tot onze beschikking hebben, hoe ziet die data er vervolgens uit, zitten er dubbele waardes bij de verschillende bronnen? Zo ja, welke waarde heeft dan voorrang op de andere? Hoeronder is een diagram die weergeeft hoe een *een schip er uit ziet*. 

![modelShip](/blog/assets/Data-with-there-identifiers.png)
*Data van het TeqPlay platform*

In het diagram is de data te zien die van het bedrijf zelf komt, het is een tabel met meerdere identifiers en elke identifier heeft zij eigen attributen. De linkerkant is hoe de data wordt vrijgegeven en de rechterkant is een geordende variant van de gegevens. Op deze mannier kan je de data van het bedrijf in kaart brengen. 

Later kwamen er al gauw meer databronnen bij en voordat we aan de slag gingen met de data maken we er eerst een diagram van om de vorm van de data in kaart te brengen. 

![sources-class](/blog/assets/models-for-sources.png)

## Beheren
**B1)** Om project matig te werken wordt bij TeqPlay met Scrum en Agile gewerkt, sprints duren twee weken en elke sprint begint met het maken van nieuwe taken op het Trello bord en eindigt met een demo van wat we in die sprint hebben gedaan. Voor meer info wat ik elke sprint heb gedaan en de afspraken die zijn gemaakt zie mijn [sprint logboek](assets/Sprint-logboek.pdf). Deze heb ik gedurende mijn stage ook om de twee weken bijgehouden. 
![trello](/blog/assets/trello-bord-sprint-2.PNG)


## Ontwerpen
**O1)** In de eerste weken heb ik ook al gewerkt aan een eerste ontwerp voor het systeem dat we gaan bouwen. Dit eerste ontwerp heb ik gemaakt met een component diagram. Hier kan je zien wat er precies nodig is om de applicatie te bouwen en correct te laten functioneren. In het eerste ontwerp zit nog maar 1 data bron verwerkt. De applicatie heeft dus een component voor het binnenhalen van data, het valideren en samenvoegen van data, een eigen database die alle gegevens apart opslaat, een API die die data exposed en beschikbaar maakt voor andere applicaties en als laatste een visualizer die laat zien wat er achter de schermen met de data gebeurt. 
![ontwerp](/blog/assets/System-Design.png)


## Realiseren
**R2)** Voor het project hebben we een aantal tests geschreven om de onderhoudbaarheid van de software te bevorderen. Het bedrijf heeft aangeraden om om unit tests te schrijven voor de losse componenten in het systeem. Zo kom je er ook meteen achter of een bepaalde functie te groot is, dan kun je hem opdelen in kleinere stukken. Een unit test bestaat uit een test case, de wat en waarom je gaat testen. De test is vervolgens opgebouwd uit een verwacht resultaat en een werkelijk resultaat, deze worden met elkaar vergeleken. Als ze hetzelfde zijn dan is de test succesvol, zijn er afwijkingen dan heeft de test gefaald. Verder is er ook nog de intergratie test deze is vrijwel hetzelfde als een unit test alleen is het enige verschil dat een unit test een onderdeel van het systeem test en een intergratie test, test een gedeelte dat afhankelijk is van een ander systeem onder andere via een internet verbinding. 

## UNIT TEST: TRAVERSING THE MAP

Een belangrijk onderdeel van het systeem is het verzamelen van data, zo halen we informatie uit verschillende bronnen. Eén van die bronnen is het TeqPlay platform zelf. De development omgeving bevat zo een 400.000 schepen en de productie omgeving zo een 5.000.000 schepen. Als je dit allemaal in één keer binnen zou halen dan zou dat erg veel zijn voor ons systeem. Daarom willen we de mogelijkheid om een bepaald gebied in stukken te kunnen binnenhalen. Om dit te kunnen realiseren heb ik een script geschreven die een groot gebied opdeelt in een x aantal kleine gebieden.
![alt](/blog/assets/traversing-the-map.PNG) Resultaat van de functie getekend in [Poly line tool](https://www.keene.edu/campus/maps/tool/?coordinates=15.0000000%2C%2055.0000000%0A15.0000000%2C%2040.0000000%0A0.0000000%2C%2040.0000000%0A0.0000000%2C%2055.0000000%0A15.0000000%2C%2055.0000000%0A15.0000000%2C%2049.0000000%0A9.0000000%2C%2049.0000000%0A9.0000000%2C%2055.0000000%0A9.0000000%2C%2055.0000000%0A9.0000000%2C%2049.0000000%0A3.0000000%2C%2049.0000000%0A3.0000000%2C%2055.0000000%0A3.0000000%2C%2055.0000000%0A3.0000000%2C%2049.0000000%0A0.0000000%2C%2049.0000000%0A0.0000000%2C%2055.0000000%0A15.0000000%2C%2049.0000000%0A15.0000000%2C%2043.0000000%0A9.0000000%2C%2043.0000000%0A9.0000000%2C%2049.0000000%0A9.0000000%2C%2049.0000000%0A9.0000000%2C%2043.0000000%0A3.0000000%2C%2043.0000000%0A3.0000000%2C%2049.0000000%0A3.0000000%2C%2049.0000000%0A3.0000000%2C%2043.0000000%0A0.0000000%2C%2043.0000000%0A0.0000000%2C%2049.0000000%0A15.0000000%2C%2043.0000000%0A15.0000000%2C%2040.0000000%0A9.0000000%2C%2040.0000000%0A9.0000000%2C%2043.0000000%0A9.0000000%2C%2043.0000000%0A9.0000000%2C%2040.0000000%0A3.0000000%2C%2040.0000000%0A3.0000000%2C%2043.0000000%0A3.0000000%2C%2043.0000000%0A3.0000000%2C%2040.0000000%0A0.0000000%2C%2040.0000000%0A0.0000000%2C%2043.0000000)


Zie de code hieronder:

```
/**
 * Class to hold information about an area, from longitude and latitude. The information is enough to draw a square.
 * @author Steven K*/
data class Area (
        var TopLeftLat: Double,
        var TopLeftLon: Double,
        var BottomRightLat: Double,
        var BottomRightLon: Double
) {
    /**
     * Method to calculate the size of the area, the area is calculates as folows:
     * It is the product of the difference between the longitude and the latitude.
     * (TopLeftLon - BottomRightLon) * (TopLeftLat - BottomRightLat)
     *
     * @return Double*/
    fun calculateTotalArea() = (TopLeftLon - BottomRightLon) * (TopLeftLat - BottomRightLat)

    /**
     * Function that returns a string representation of a polyline,
     * the result can be copy and pasted straight into: @see https://www.keene.edu/campus/maps/tool/
     * This is useful for debugging purposes
     *
     * @return String*/
    fun toPolyLine() = """
            $TopLeftLon, $TopLeftLat
            $TopLeftLon, $BottomRightLat
            $BottomRightLon, $BottomRightLat
            $BottomRightLon, $TopLeftLat
        """.trimIndent()

    /**
     * This method divides the main area in smaller areas, this is used to traverse the TeqPlay platform in smaller chunks.
     * It returns a list of all areas, the sum of these areas should be equal to the total area.
     *
     * The method starts with traversing the main area from the upper right corner to the bottom left corner.
     * NOTE: The variable names are called topLeft... and bottomRight...
     *
     * It moves with steps equals to size from the right to the left. When it has reached the end it of a row it moves one step to the bottom and starts back
     * at the right side. If the size fits exactly all the areas have equal sizes, when it doesn't fit the areas at the boundary will be cut to size
     * so they fit inside the area.
     *
     * When the main area size is equals or bigger than the size the method will only return one area in the list.
     *
     * @param size the size of the smaller areas, the total area will be the size squared.
     *
     * @return ArrayList<Area>*/
    fun divideArea(size: Double): ArrayList<Area> {
        val result = arrayListOf<Area>()
        //The start coordinates of the area
        var currentTopLat = this.TopLeftLat
        var currentTopLon: Double

        println(this.toPolyLine())

        //The outer while loop traverses the latitude and goes a step down every iteration
        //The inner while loop traverses the longitude and goes a step right every iteration
        while (currentTopLat > this.BottomRightLat) {
            //The longitude will be re-initialized every iteration.
            currentTopLon = this.TopLeftLon
            while (currentTopLon > this.BottomRightLon) {
                var currentBottomLat = currentTopLat - size
                var currentBottomLon = currentTopLon - size
                if (currentBottomLat < this.BottomRightLat) currentBottomLat = this.BottomRightLat
                if (currentBottomLon < this.BottomRightLon) currentBottomLon = this.BottomRightLon
                result.add(Area(
                        TopLeftLat = currentTopLat,
                        TopLeftLon = currentTopLon,
                        BottomRightLat = currentBottomLat,
                        BottomRightLon = currentBottomLon
                ))
                println(result.last().toPolyLine())
                currentTopLon -= size
            }
            currentTopLat -= size
        }
        return result
    }

}
```

Tijdens het bouwen ben ik de volgende issues tegengekomen die bij de complexiteit van de functie komen kijken: 
- De functie sloeg de randen van het gebied over
- De functie ging buiten het aangeven gebied

Verder is er nog een veel voorkomede issue voor als je de aarde rond wil gaan bij de coördinaten: (185, 85, -185, -85)

Bij deze functie heb ik ook een aantal unit tests geschreven, met de volgende test criteria: 
- De hoeveelheid gebieden waarin het gebied wordt opgedeeld is gelijk aan de totaal oppervlakte gedeeld door grootte van de losse gebieden.
- De meest rechts bovenste coördinaten van het eerste gebied zijn hetzelfde als de meest rechts bovenste coördinaten van het grootte gebied.
- De meest links onderste coördinaten van het laatste gebied zijn hetzelfde als de meest links onderste coördinaten van het grootte gebied.
- De totale oppervlakte van alle gebiedjes moet gelijk zijn als de totaal oppervlakte van het grote gebied. 

Verder zijn er nog een aantal bijzondere gevallen: 
- Als de grote van de gebieden niet precies uitkomt worden de randen afgerond zodat ze niet buiten het hoofd gebied vallen. 
- Als de oppervlakte van het de gespecificeerde gebied gelijk of groter is aan de totale oppervlakte van het grote gebied, dan returned de functie maar één gebied met dezelfde grote als het hoofdgebied.  

Zie hieronder de uitgewerkte unit tests: 
```
internal class TraverseMapTest {
    //A simple area where every value is divide-able by 5
    private val testArea = Area(55.0, 15.0, 40.0, 0.0)
    //Real world scenario for the area of west Europe
    private val westEuropeArea =  Area(54.378286,10.719496,48.964649,-0.379124)
    //A relatively larger area
    private  val largeArea = Area(185.0, 85.0, -185.0, -85.0)

    @Test
    fun totalAreaTest() {
        Assert.assertEquals(225.0, testArea.calculateTotalArea(), 0.0)
        Assert.assertEquals(60.08389988094002, westEuropeArea.calculateTotalArea(), 0.0)
        Assert.assertEquals(7303.033038288478, largeArea.calculateTotalArea(), 0.0)
    }

    @Test
    fun toPolyLineTest() {
        Assert.assertEquals("""
            15.0, 55.0
            15.0, 40.0
            0.0, 40.0
            0.0, 55.0
        """.trimIndent(), testArea.toPolyLine())
        Assert.assertEquals("""
            10.719496, 54.378286
            10.719496, 48.964649
            -0.379124, 48.964649
            -0.379124, 54.378286
        """.trimIndent(), westEuropeArea.toPolyLine())
        Assert.assertEquals("""
            -48.955596, 59.943996
            -48.955596, -0.553685
            -169.671513, -0.553685
            -169.671513, 59.943996
        """.trimIndent(), largeArea.toPolyLine())
    }

    @Test
    fun traverseAreaPerfectFitTest() {
        val size = 5.0
        val result = testArea.divideArea(size)
        var sumOfAllareas = 0.0
        for (area in result) sumOfAllareas += area.calculateTotalArea()

        Assert.assertEquals(9, result.size)
        Assert.assertEquals(Area(55.0, 15.0, 50.0, 10.0), result.first())
        Assert.assertEquals(Area(45.0, 5.0, 40.0, 0.0), result.last())
        Assert.assertEquals(225.0, sumOfAllareas, 0.0)
    }

    @Test
    fun traversAreaNoPerfectFitTest() {
        val size = 6.0
        val result = testArea.divideArea(size)
        var sumOfAllareas = 0.0
        for (area in result) sumOfAllareas += area.calculateTotalArea()

        Assert.assertEquals(9, result.size)
        Assert.assertEquals(Area(55.0, 15.0, 49.0, 9.0), result.first())
        Assert.assertEquals(Area(43.0, 3.0, 40.0, 0.0), result.last())
        Assert.assertEquals(225.0, sumOfAllareas, 0.0)
    }

    @Test
    fun traverseAreaMaxSizeTest() {
        val size = 16.0
        val result = testArea.divideArea(size)

        Assert.assertEquals(1, result.size)
        Assert.assertEquals(Area(55.0, 15.0, 40.0, 0.0), result.first())
        Assert.assertEquals(225.0, result.first().calculateTotalArea(), 0.0)
    }

    @Test
    fun traverseAreaOutOfBoundsTest() {
        val size = 16.0
        val result = testArea.divideArea(size)

        Assert.assertEquals(1, result.size)
        Assert.assertEquals(Area(55.0, 15.0, 40.0, 0.0), result.first())
        Assert.assertEquals(225.0, result.first().calculateTotalArea(), 0.0)
    }

    @Test
    fun traverserWestEuropeTest() {
        val size = 0.5
        val result = westEuropeArea.divideArea(size)
        var sumOfAllareas = 0.0
        for (area in result) sumOfAllareas += area.calculateTotalArea()

        Assert.assertEquals(253, result.size)
        Assert.assertEquals(Area(54.378286, 10.719496, 53.878286, 10.219496), result.first())
        Assert.assertEquals(Area(49.378286, -0.28050400000000053, 48.964649, -0.379124), result.last())
        Assert.assertEquals(westEuropeArea.calculateTotalArea(), sumOfAllareas, 1.0)
    }

    @Test
    fun traverseWesEuropeMaxValue() {
        val size = 61.0
        val result = westEuropeArea.divideArea(size)

        Assert.assertEquals(1, result.size)
        Assert.assertEquals(Area(54.378286, 10.719496, 48.964649, -0.379124), result.first())
        Assert.assertEquals(60.0, result.first().calculateTotalArea(), 1.0)
    }

    @Test
    fun traverseLargeAreaTest() {
        val size = 10.0
        val result = largeArea.divideArea(size)

        Assert.assertEquals(629, result.size)
    }
}
```

## INTEGRATIE TEST: COLLECTING DATA FROM THE TEQPLAY PLATFORM
Zoals je kunt lezen in de unit tests hierboven verzamelen we data uit het TeqPlay platform, dit is één van de eerste dingen die gebouwd is voor ons systeem. 
Een script dat een API request maakt naar de het TeqPlay platform en zo schepen binnenhaalt, om dit te testen moet je een intergratie test gebruiken omdat het stuk code afhankelijk is van een derde partij. Als die derde partij dan iets veranderd in de API dan zie je dat meteen terug in het test resultaat.

Zie hieronder de code om een request te maken naar het platform: 

```

fun platformParser(token: String, area: Area, showAged: Boolean = false, includeAgent: Boolean = false ): ResponseEntity<Array<ShipInfoStaticPlatform>>{
    val headers = HttpHeaders()

    //Login into the platform
    headers.add("Authorization", token)

    val url = "${ConfigCreator.getPlatformConfig().host}/ship/details?topLeftLat=${area.TopLeftLat}&topLeftLon=${area.TopLeftLon}&bottomRightLat=${area.BottomRightLat}&bottomRightLon=${area.BottomRightLon}&showAged=$showAged&includeAgent=$includeAgent"
    return RestTemplate().exchange(url,
            HttpMethod.GET,
            HttpEntity<String>(headers),
            Array<ShipInfoStaticPlatform>::class.java)

}
```

Er is getest onder de volgende criteria: 
- De response van het platform moet een statuscode 200(OK)terug geven.
- Het dat in de response body zit moet groter zijn dan 0. 

Als één van deze resultaten afwijkt dan zou je kunnen concluderen dat er iets mis gaat aan de kant van het platform of de verbinding daartussen. Zie hieronder de test: 

```
@Category(IntegrationServiceImpl::class)
internal class PlatformParserTest {

    @Test
    fun checkRequest(){
        val token = login().body.token
        val conf = ConfigCreator.getPlatformAreaConfig()
        val result = platformParser(token, Area(conf.maxTopLeftLat, conf.maxTopLeftLon, conf.minBottomRightLat, conf.minBottomRightLon))

        Assert.assertEquals(HttpStatus.OK, result.statusCode)
        Assert.assertNotEquals(0, result.body.size)
    }
}
```
