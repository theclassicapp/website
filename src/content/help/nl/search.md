# Zoeken

Vind elke notitie direct met de krachtige zoekfunctie van Classic. Full-text zoeken, filters en operators helpen je precies te vinden wat je nodig hebt.

## Basis Zoeken

### Zoeken Openen

| Platform | Sneltoets |
|----------|----------|
| **macOS** | `Cmd+F` |
| **Windows/Linux** | `Ctrl+F` |

Of klik op de zoekbalk in de zijbalk.

### Hoe Het Werkt

1. Open zoeken
2. Begin met typen
3. Resultaten verschijnen direct
4. Klik om een notitie te openen

## Zoekfuncties

### Full-Text Zoeken

Classic doorzoekt:

- Notitietitels
- Notitiecontent
- Labels
- Bestandsnamen

### Real-Time Resultaten

Resultaten worden bijgewerkt terwijl je typt:

- Enter indrukken is niet nodig
- Directe feedback
- Fuzzy matching ingeschakeld

### Zoekmarkering

Gevonden termen worden gemarkeerd in resultaten:

- Zie context rond matches
- Identificeer snel relevante notities

## Zoekoperators

### Exacte Match

Gebruik aanhalingstekens voor exacte zinnen:

```
"project planning"
"vergader notities"
```

### Label Zoeken

Vind notities met specifieke labels:

```
tag:werk
tag:vergaderingen
tag:dringend
```

### Termen Uitsluiten

Gebruik `-` om uit te sluiten:

```
project -gearchiveerd
vergadering -geannuleerd
```

### OF Zoeken

Vind notities met een van de termen:

```
project OF initiatief
```

### Datumbereik

Zoek op datum:

```
created:2024-01-01..2024-12-31
modified:afgelopen-week
```

### Bestandstype

Filter op extensie:

```
ext:md
ext:txt
```

## Geavanceerd Zoeken

### Operators Combineren

Bouw complexe query's:

```
tag:werk -tag:gearchiveerd created:afgelopen-week
"vergadering" tag:project-alpha
```

### Pad Zoeken

Zoek binnen mappen:

```
path:Projecten/
path:Archief/
```

### Titel Zoeken

Zoek alleen in titels:

```
title:Roadmap
title:Vergadering
```

### Content Zoeken

Zoek alleen in content (titels uitsluiten):

```
content:belangrijk
content:deadline
```

## Zoekfilters

### Op Label

1. Typ je zoekopdracht
2. Klik op een label om te filteren
3. Resultaten verfijnen naar gelabelde notities

### Op Datum

Filter op wijzigingsdatum:

- Vandaag
- Deze week
- Deze maand
- Aangepast bereik

### Op Map

Beperk zoeken tot een map:

1. Klik met rechtermuisknop op een map
2. Selecteer "Zoeken in Map"
3. Resultaten beperkt tot die map

## Zoekresultaten

### Sorteren

Sorteer resultaten op:

- **Relevantie** (standaard)
- **Datum Gewijzigd** (nieuwste eerst)
- **Datum Gemaakt** (nieuwste eerst)
- **Titel** (alfabetisch)

### Resultaat Voorbeeld

Beweeg over resultaten om een voorbeeld te zien:

- Eerste regels getoond
- Overeenkomende termen gemarkeerd
- Labels weergegeven

### Context

Zie waar de match plaatsvond:

- Toont omliggende tekst
- Markeert de match
- Klik om naar locatie te springen

## Zoekgeschiedenis

### Recente Zoekopdrachten

Toegang tot eerdere zoekopdrachten:

1. Klik in de zoekbalk
2. Bekijk recente zoekopdrachten
3. Klik om opnieuw uit te voeren

### Geschiedenis Wissen

1. Open Instellingen
2. Ga naar Privacy
3. Klik "Zoekgeschiedenis Wissen"

## Tips

### Gebruik Specifieke Termen

Specifieker = betere resultaten:

```
✅ "Q4 marketing budget"
❌ budget
```

### Combineer met Labels

Verfijn resultaten snel:

```
project tag:dringend
```

### Gebruik Uitsluitingen

Filter ruis:

```
vergadering -tag:gearchiveerd
```

### Bewaar Veelvoorkomende Zoekopdrachten

Maak opgeslagen zoekopdrachten:

1. Voer je zoekopdracht in
2. Klik "Zoekopdracht Opslaan"
3. Geef het een naam
4. Toegang vanaf zijbalk

## Toetsenbord Navigatie

| Actie | Sneltoets |
|--------|----------|
| Open Zoeken | `Cmd/Ctrl+F` |
| Volgend Resultaat | `Enter` of `Down` |
| Vorig Resultaat | `Shift+Enter` of `Up` |
| Zoeken Sluiten | `Escape` |

## Zoekinstellingen

### Aanpassen in Instellingen

| Instelling | Opties |
|---------|---------|
| Hoofdlettergevoelig | Aan/Uit |
| Titels Doorzoeken | Aan/Uit |
| Content Doorzoeken | Aan/Uit |
| Labels Doorzoeken | Aan/Uit |
| Gearchiveerd Meenemen | Aan/Uit |

## Gebruikscases

### Oude Notities Vinden

```
"vergadering" date:vorig-jaar
```

### Project Onderzoek

```
path:Projecten/ tag:onderzoek
```

### Actiepunten

```
"TE DOEN" OF "FIXME" -tag:klaar
```

### Recent Werk

```
modified:deze-week
```

## Probleemoplossing

### Geen Resultaten Gevonden

- Controleer spelling
- Verwijder filters
- Probeer ruimere termen
- Controleer of notitie is gearchiveerd

### Traag Zoeken

- Grote notitiecollecties kunnen langer duren
- Schakel hoofdlettergevoeligheid uit
- Verminder zoekbereik

### Ontbrekende Notities

- Notitie kan in een andere map zitten
- Controleer of label correct is
- Verifieer dat notitie niet is gearchiveerd
