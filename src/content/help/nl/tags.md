# Labels

Labels zijn een krachtige manier om je notities in Classic te organiseren en categoriseren. Vind gerelateerde content direct.

## Labels Maken

### Inline Labels

Voeg labels direct toe in je notitiecontent:

```markdown
# Vergadernotities

Besproken de Q4 roadmap #werk #vergaderingen #planning
```

### Via de Labelknop

1. Klik op het labelpictogram in de werkbalk
2. Typ je labelnaam
3. Druk op Enter

### Sneltoets

| Platform | Sneltoets |
|----------|----------|
| **macOS** | `Cmd+T` |
| **Windows/Linux** | `Ctrl+T` |

## Label Syntax

### Basis Labels

```markdown
#project #werk #belangrijk
```

### Geneste Labels

Maak labelhiërarchieën met `/`:

```markdown
#werk/vergaderingen
#werk/projecten
#persoonlijk/hobby's/lezen
```

### Labels met Meerdere Woorden

Gebruik koppeltekens of underscores:

```markdown
#project-alpha
#vergader_notities
#q4-planning
```

## Labels Beheren

### Alle Labels Bekijken

1. Open de zijbalk
2. Zoek de "Labels" sectie
3. Bekijk al je labels

### Labelwolk

Visualiseer je meest gebruikte labels:

- Grotere labels = meer notities
- Klik op een label om te filteren
- Bekijk notitieaantal per label

### Labels Hernoemen

1. Klik met de rechtermuisknop op een label
2. Selecteer "Hernoemen"
3. Voer nieuwe naam in
4. Alle notities worden automatisch bijgewerkt

### Labels Verwijderen

1. Klik met de rechtermuisknop op een label
2. Selecteer "Verwijderen"
3. Bevestig verwijdering
4. Label verwijderd uit alle notities

## Zoeken op Label

### Labelpaneel

Klik op een label in de zijbalk om notities te filteren.

### Zoeksyntax

Gebruik `tag:` in zoeken:

```
tag:werk
tag:werk/vergaderingen
```

### Labels Combineren

Vind notities met meerdere labels:

```
tag:werk tag:dringend
```

### Labels Uitsluiten

Vind notities zonder een label:

```
-tag:gearchiveerd
```

## Label Best Practices

### Houd Het Eenvoudig

- Gebruik 3-5 labels per notitie
- Wees consistent met naamgeving
- Vermijd labelproliferatie

### Gebruik Hiërarchieën

Organiseer gerelateerde labels:

```
#werk
  #werk/vergaderingen
  #werk/projecten
  #werk/deadlines

#persoonlijk
  #persoonlijk/gezondheid
  #persoonlijk/financiën
```

### Stel Conventies In

Definieer labelstandaarden voor jezelf:

- **Status**: `#te-doen` `#in-behandeling` `#klaar`
- **Prioriteit**: `#dringend` `#hoog` `#laag`
- **Type**: `#vergadering` `#referentie` `#idee`

## Labelsuggesties

Terwijl je `#` typt, stelt Classic bestaande labels voor:

- Recente labels verschijnen eerst
- Fuzzy matching ondersteund
- Druk op Tab om suggestie te accepteren

## Labelstatistieken

Bekijk labelgebruik in Instellingen:

- Meest gebruikte labels
- Ongebruikte labels
- Labeltrends over tijd

## Gebruikscases

### Projectbeheer

```markdown
# Project Kickoff #project-alpha #vergadering #2024-01-15

Deelnemers: Team Alpha
Status: #te-doen
```

### Kennisbank

```markdown
# JavaScript Closures #programmeren #javascript #referentie #geavanceerd

Closures zijn functies die toegang hebben tot...
```

### Dagelijkse Notities

```markdown
# 2024-01-15

- ochtend standup #werk #vergaderingen
- code review #werk #ontwikkeling
- sportschool #persoonlijk #gezondheid
```

### Leesnotities

```markdown
# Atomic Habits Notities #lezen #boeken #productiviteit

Belangrijkste inzichten uit het boek...
```

## Sneltoetsen

| Actie | Sneltoets |
|--------|----------|
| Label Toevoegen | `Cmd/Ctrl+T` |
| Labels Zoeken | `Cmd/Ctrl+F`, typ dan `tag:` |
| Labelpaneel Tonen | `Cmd/Ctrl+Shift+T` |

## Tips

### Consistente Naamgeving

Houd je aan een conventie:

```
✅ #vergader-notities
✅ #vergader_notities
❌ #Vergader Notities (spaties niet toegestaan)
❌ #vergaderNotities (inconsistent)
```

### Vermijd Over-labelen

Te veel labels worden onbeheersbaar:

```
✅ #werk #dringend #project-alpha
❌ #werk #dringend #belangrijk #vandaag #maandag #kantoor #bureau #computer
```

### Periodieke Opschoning

Beoordeel en consolideer labels regelmatig:

- Voeg vergelijkbare labels samen
- Verwijder ongebruikte labels
- Werk conventies bij

## Geavanceerde Functies

### Label-gebaseerde Slimme Mappen

Maak mappen die automatisch worden gevuld op basis van labels:

1. Maak nieuwe map
2. Stel filter in: `tag:project`
3. Alle gelabelde notities verschijnen

### Labels in YAML

Voeg labels toe aan notitie frontmatter:

```yaml
---
tags:
  - werk
  - vergaderingen
  - project-alpha
---
```

### Labelaliassen

Stel labelaliassen in bij Instellingen:

- `#te-doen` = `#taak` = `#actie`
- Consolidatie vergelijkbare labels
