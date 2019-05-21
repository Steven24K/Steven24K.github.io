---
title: "Hear: Een app voor doven?"
date: "2018-02-07"
category: Projects
---

Dit project heb ik gedaan in opdracht van [Project B](https://www.facebook.com/ProjectBchallenge/?hc_ref=ARSAqWZGc9eopjGYsmf99T1Fl23ytFU-iiQv11y9MEQ__MNdiwsQ-pMx8PLIZDqWsjk&fref=nf) van het bedrijf [Sogeti](https://www.sogeti.nl/over-sogeti), een onderdeel van [Capgemini](https://www.capgemini.com/nl-nl/). 

<iframe width="854" height="480" src="https://www.youtube.com/embed/pLZORE6hHBc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Het project stond ook onder de naam *Emerging technolgies*, met als doel om een product te bouwen voor mensen met een beperking. 

Wij hadden gekozen voor mensen met een auditieve beperking, dus doven en slechthorenden. Als product hebben we een app gemaakt, de app had de volgende features: 
- Spraak-naar-tekst
- Tekst-naar-Spraak
- Gebarenherkenning

[Source Code](https://github.com/297Hacker/Emerging_Technology78/)

[Download Link](https://github.com/297Hacker/Emerging_Technology78/releases/download/v0.9-beta/hear.apk)

![App hear APK](../Hear-Een-app-voor-doven\apphear.png)

# Gebarenherkenning

Gebarenherkenning was één van de moeilijkste features, deze is ook alleen maar gedeeltelijk uitgewerkt door middel van een Tensorflow machine learning algoritme. [Kijk op mijn GiTHub voor meer info](https://github.com/Steven24K/Sign-language-dataset). Het is de basis voor image recognition, gemaakt met behulp van deze [tutorial](https://www.tensorflow.org/tutorials/image_recognition).

We hebben hier heel veel foto's van handgebaren gemaakt om een algoritme te trainen: 

![gebaren dataset](../Hear-Een-app-voor-doven\drie-gebaar.PNG)

Die vervolgens te labelen door alles in mapjes te zetten, beginnend met de getallen 1 t/m 10: 

![mapjes labelen](../Hear-Een-app-voor-doven\foldergebaren.PNG)

Om tenslotte een nieuw gebaar te tonen en het algoritme een voorspelling te laten maken: 

![voorspelling](../Hear-Een-app-voor-doven\sign_lan.png)