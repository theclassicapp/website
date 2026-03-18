# Terugverwijzingen

Terugverwijzingen tonen verbindingen tussen je notities en creëren een netwerk van gerelateerde ideeën. Ontdek relaties waar je niet van wist.

## Wat Zijn Terugverwijzingen?

Terugverwijzingen tonen welke notities naar de huidige notitie linken. Ze zijn verbindingen in je kennissgraaf.

### Voordelen

- **Ontdek verbindingen**: Vind automatisch gerelateerde notities
- **Context**: Begrijp hoe ideeën zich verhouden
- **Navigatie**: Spring tussen verbonden notities
- **Kennisgraaf**: Visualiseer je denken

## Hoe Terugverwijzingen Werken

Wanneer je een link naar een andere notitie maakt, maakt Classic automatisch een terugverwijzing aan.

```markdown
In notitie A:
Zie [[Projectplanning]] voor details.

Resultaat:
- Notitie A linkt naar "Projectplanning"
- "Projectplanning" toont een terugverwijzing naar Notitie A
```

## Terugverwijzingen Bekijken

### Terugverwijzingen Paneel

Open het terugverwijzingen paneel om alle referenties te zien:

1. Open een notitie
2. Klik op het terugverwijzingen pictogram in de zijbalk
3. Bekijk alle notities die naar deze linken

### Inline Terugverwijzingen

Terugverwijzingen verschijnen onderaan elke notitie:

- Toont bronnotitienaam
- Toont contextfragment
- Klik om te navigeren

## Links Maken

### Wikilink Syntax

Gebruik dubbele haakjes om naar notities te linken:

```markdown
[[Notitie Naam]]
[[Andere Notitie]]
```

### Weergavetekst

Pas linktekst aan:

```markdown
[[Project Alpha|het alpha project]]
[[Vergadernotities|de vergadering van gisteren]]
```

### Linken naar Koppen

Link naar specifieke secties:

```markdown
[[Notitie Naam#Kop]]
[[Notitie Naam#Sectie|ga naar sectie]]
```

## Terugverwijzingstypes

### Directe Links

Expliciete wikilinks die je maakt:

```markdown
Gerelateerd: [[Vergelijkbare Notitie]]
```

### Ongekoppelde Vermeldingen

Notities die de titel vermelden maar niet gelinkt zijn:

```markdown
Notitie vermeldt "Project Alpha" maar is niet gelinkt
```

Classic stelt voor om deze te converteren naar links.

## Terugverwijzingen Paneel

### Functies

- **Filter**: Zoek door terugverwijzingen
- **Sorteren**: Op datum, naam of relevantie
- **Voorbeeld**: Beweeg om content te bekijken
- **Context**: Zie omliggende tekst

### Acties

- Klik om gelinkte notitie te openen
- Klik met rechtermuisknop voor opties
- Converteer ongekoppelde vermeldingen

## Gebruikscases

### Kennisbeheer

Bouw een persoonlijke wiki:

```markdown
# Machine Learning

Gerelateerd aan [[Artificial Intelligence]]
Bouwt voort op [[Statistiek]]
Gebruikt in [[Natural Language Processing]]
```

### Projectdocumentatie

Verbind gerelateerde documenten:

```markdown
# API Ontwerp

Referenties [[Database Schema]]
Afhankelijk van [[Authenticatie Flow]]
Zie ook [[Frontend Integratie]]
```

### Onderzoek

Link concepten en bronnen:

```markdown
# Onderzoeksnotities

Gebaseerd op [[Bron Paper A]]
Tegenspreekt [[Bron Paper B]]
Ondersteunt [[Hypothese 1]]
```

### Vergadernotities

Verbind vergaderingen met projecten:

```markdown
# Vergadering: Q4 Planning

Project: [[Project Alpha]]
Vorige: [[Q3 Review]]
Volgende: [[Q4 Kickoff]]
```

## Grafiekweergave

Visualiseer je terugverwijzingen als een netwerk:

1. Open Grafiekweergave (`Cmd/Ctrl+G`)
2. Bekijk alle notities als knooppunten
3. Lijnen tonen verbindingen
4. Klik op knooppunten om te navigeren

### Grafiek Bedieningselementen

- **Zoom**: Scroll om te zoomen
- **Pan**: Sleep om te bewegen
- **Filter**: Toon/verberg op label
- **Focus**: Markeer verbindingen van een notitie

## Tips

### Link Royaal

Maak links wanneer je naar een ander concept verwijst:

```markdown
✅ Goed:
Besproken de [[Q4 Roadmap]] en [[Budget Toewijzing]].

❌ Vermijden:
Besproken de Q4 Roadmap en Budget Toewijzing.
```

### Gebruik Consistente Namen

Match notitietitels exact voor betrouwbare links:

```markdown
✅ [[Vergadernotities]]
❌ [[vergader notities]] (hoofdlettergebruik telt)
```

### Beoordeel Terugverwijzingen

Controleer regelmatig terugverwijzingen om:

- Vergeten verbindingen te ontdekken
- Notities te vinden om samen te voegen
- Kennishiaten te identificeren

### Link Voorbeeld

Beweeg over links om een voorbeeld te zien zonder te openen:

- Bekijk eerste regels
- Controleer of het de juiste notitie is
- Snelle referentie

## Sneltoetsen

| Actie | Sneltoets |
|--------|----------|
| Open Terugverwijzingen | `Cmd/Ctrl+Shift+B` |
| Maak Link | `[[` (auto-aanvulling) |
| Open Grafiekweergave | `Cmd/Ctrl+G` |
| Navigeer Links | `Tab` door links |

## Geavanceerde Functies

### Insluiten

Sluit content van andere notities in:

```markdown
![[Notitie Naam]]
![[Notitie Naam#Sectie]]
```

### Transclusie

Voeg content inline toe:

```markdown
## Gerelateerde Content
![[Gedeeld Sjabloon#Kop]]
```

### Linkkleuren

Links veranderen van kleur op basis van:

- **Blauw**: Onbezochte link
- **Paars**: Bezochte link
- **Rood**: Gebroken link (notitie bestaat niet)

## Probleemoplossing

### Ontbrekende Terugverwijzingen

- Controleer link syntax `[[Notitie Naam]]`
- Verifieer dat notitietitel exact overeenkomt
- Ververs het terugverwijzingen paneel

### Gebroken Links

- Notitie kan zijn hernoemd
- Notitie kan zijn verwijderd
- Gebruik zoeken om de juiste notitie te vinden

### Dubbele Links

- Consolidatie vergelijkbare notities
- Gebruik doorverwijzingen voor hernoemde notities
- Controleer op titelvariaties
