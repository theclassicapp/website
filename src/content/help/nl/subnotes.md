# Subnotities

Subnotities laten je geneste, hiërarchische notities maken binnen Classic. Organiseer complexe onderwerpen in beheersbare stukken.

## Wat Zijn Subnotities?

Subnotities zijn notities binnen notities - een manier om hiërarchische contentstructuren te maken.

### Voordelen

- **Organisatie**: Verdeel complexe onderwerpen in kleinere stukken
- **Nesting**: Maak meerdere niveaus van hiërarchie
- **Navigatie**: Eenvoudig navigeren tussen gerelateerde notities
- **Flexibiliteit**: In- en uitklappen indien nodig

## Subnotities Maken

### Methode 1: Inspringing

Maak subnotities door content in te springen onder een bovenliggende notitie:

1. Maak een bovenliggende notitie
2. Maak een nieuwe notitie
3. Sleep de nieuwe notitie op de bovenliggende
4. Het wordt een subnotitie

### Methode 2: Contextmenu

1. Klik met de rechtermuisknop op een notitie
2. Selecteer "Nieuwe Subnotitie"
3. Er wordt een geneste notitie gemaakt

### Methode 3: Sneltoets

1. Selecteer een notitie
2. Druk op `Cmd/Ctrl+Shift+N`
3. Er wordt een subnotitie gemaakt

## Subnotities Beheren

### In- en Uitklappen

Klik op de pijl naast een notitie met subnotities:

- **Uitklappen**: Toon alle geneste notities
- **Inklappen**: Verberg geneste notities

### Navigatie

- Klik om een subnotitie te openen
- Gebruik pijltjestoetsen om door de hiërarchie te navigeren
- Broodkruimels tonen je locatie

### Subnotities Verplaatsen

Sleep en neerzetten om te reorganiseren:

1. Klik en houd de subnotitie vast
2. Sleep naar nieuwe locatie
3. Laat los om te herpositioneren

### Converteren naar Hoofdnotitie

Promoveer een subnotitie naar topniveau:

1. Klik met de rechtermuisknop op de subnotitie
2. Selecteer "Verplaatsen naar Root"
3. Notitie wordt een hoofdnotitie

## Subnotitie Diepte

Classic ondersteunt meerdere niveaus van nesting:

```
📁 Project
  📄 Overzicht
  📁 Onderzoek
    📄 Gebruikersinterviews
    📄 Enquêteresultaten
    📁 Analyse
      📄 Belangrijkste Bevindingen
      📄 Aanbevelingen
  📁 Planning
    📄 Tijdlijn
    📄 Middelen
```

### Best Practices

- **Beperk diepte**: Maximaal 3-4 niveaus voor duidelijkheid
- **Logische groepering**: Groepeer gerelateerde content samen
- **Duidelijke naamgeving**: Gebruik beschrijvende namen voor subnotities

## Gebruikscases

### Projectdocumentatie

```
Project Alpha
├── Eisen
├── Architectuur
│   ├── Frontend
│   ├── Backend
│   └── Database
├── Vergadernotities
└── Voortgangsverslagen
```

### Kennisbank

```
Programmeren
├── JavaScript
│   ├── Basis
│   ├── Geavanceerd
│   └── Best Practices
├── Python
│   ├── Basis
│   └── Bibliotheken
└── Bronnen
```

### Studienotities

```
Biologie 101
├── Celstructuur
│   ├── Membraan
│   ├── Kern
│   └── Organellen
├── Genetica
│   ├── DNA
│   └── RNA
└── Evolutie
```

## Linken met Subnotities

### Terugverwijzingen

Subnotities maken automatisch terugverwijzingen naar bovenliggende notities:

- Zie "Gelinkte Referenties" sectie
- Navigeer tussen gerelateerde notities
- Begrijp notitierelaties

### Wikilinks

Link naar subnotities vanuit elke locatie:

```markdown
Zie [[Project/Onderzoek/Analyse]] voor details.
```

## Tips

### Naamgevingsconventie

Gebruik duidelijke, consistente naamgeving:

```
✅ Goed:
Project/Eisen/Functioneel
Project/Eisen/Niet-Functioneel

❌ Vermijden:
Project/req/func
Project/rq/nf
```

### Broodkruimel Navigatie

Gebruik broodkruimels om je locatie te begrijpen:

```
Project > Onderzoek > Analyse
```

### Zoeken

Zoeken omvat subnotities automatisch:

- Vind content op alle niveaus
- Filter op notitiediepte
- Snelle navigatie

### Sjablonen

Pas sjablonen toe op subnotities:

1. Maak subnotitie
2. Gebruik slash-commando `/template`
3. Kies sjabloon

## Sneltoetsen

| Actie | Sneltoets |
|--------|----------|
| Nieuwe Subnotitie | `Cmd/Ctrl+Shift+N` |
| Alles Uitklappen | `Cmd/Ctrl+Down` |
| Alles Inklappen | `Cmd/Ctrl+Up` |
| Omhoog Verplaatsen | `Opt/Alt+Up` |
| Omlaag Verplaatsen | `Opt/Alt+Down` |
| Promoveren | `Opt/Alt+Left` |
| Degraderen | `Opt/Alt+Right` |

## Probleemoplossing

### Subnotitie Niet Zichtbaar

- Controleer of bovenliggende is ingeklapt
- Verifieer dat notitie niet is verplaatst
- Ververs de zijbalk

### Kan Geen Subnotitie Maken

- Zorg dat bovenliggende notitie bestaat
- Controleer machtigingen
- Probeer de contextmenu-methode

### Subnotities Kwijt

Gebruik zoeken om ontbrekende notities te vinden:

1. Open zoeken (`Cmd/Ctrl+F`)
2. Typ notitienaam
3. Bekijk volledige pad in resultaten
