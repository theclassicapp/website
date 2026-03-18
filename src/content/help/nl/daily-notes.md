# Dagelijkse Notities

Dagelijkse Notities maakt automatisch een nieuwe notitie voor elke dag, perfect voor journaling, dagelijkse planning, of het vastleggen van tijdgebaseerde informatie.

## Hoe Het Werkt

### Automatische Creatie

- Er wordt een nieuwe notitie gemaakt voor elke dag
- Notities worden genoemd met het datumformaat (bijv. `2024-01-15.md`)
- Notities van eerdere dagen worden bewaard en zijn doorzoekbaar

### Dagelijkse Notities Openen

1. Klik op **Dagelijkse Notities** in de zijbalk
2. Of druk op `Ctrl/Cmd+D`
3. De notitie van vandaag opent automatisch

## Dagelijkse Notitie Sjabloon

Pas het sjabloon aan voor nieuwe dagelijkse notities:

### Standaard Sjabloon

```markdown
# {{date}}

## Taken
- [ ]
- [ ]

## Notities


## Journaal

```

### Aanpassen

1. Open Instellingen
2. Ga naar Dagelijkse Notities
3. Bewerk het sjabloon
4. Gebruik `{{date}}` voor de huidige datum

### Sjabloonvariabelen

| Variabele | Beschrijving |
| -------- | ----------- |
| `{{date}}` | Huidige datum (YYYY-MM-DD) |
| `{{time}}` | Huidige tijd (HH:mm) |
| `{{weekday}}` | Dagnaam (Maandag, etc.) |

## Functies

### Datum Navigatie

- **Vorige/Volgende**: Navigeer tussen dagen
- **Kalender**: Spring naar specifieke data
- **Zoeken**: Vind content in alle dagelijkse notities

### Automatische Linking

- Notities gemaakt op dezelfde dag worden automatisch gelinkt
- Terugverwijzingen tonen verbindingen tussen dagen
- Labels werken in alle dagelijkse notities

### Integratie

- **Snelle Vastlegging**: Voeg toe aan de notitie van vandaag met `#vandaag`
- **Kalenderweergave**: Visueel overzicht van je dagelijkse notities
- **Statistieken**: Houd je schrijfreeksen bij

## Best Practices

### Dagelijks Journaling

```markdown
# 2024-01-15

## Ochtend
- Opgewekt om 6:30
- Gevoel: Energiek

## Taken
- [x] Ochtend workout
- [ ] PRs beoordelen
- [ ] Teamvergadering om 14:00

## Lessen
- Een nieuwe sneltoets ontdekt
- Meer geleerd over Mermaid diagrammen

## Morgen
- Focus op documentatie
- Code review plannen
```

### Vergadernotities

```markdown
# 2024-01-15

## Team Standup

**Aanwezigen**: Alice, Bob, Carol

### Updates
- Alice: API integratie afgerond
- Bob: Werkt aan UI componenten
- Carol: Testen in uitvoering

### Blokkades
- Wacht op ontwerp review

### Actiepunten
- [ ] Alice: Deploy naar staging
- [ ] Bob: Complete component bibliotheek
- [ ] Carol: Schrijf integratietests
```

### Leerlogboek

```markdown
# 2024-01-15

## Vandaag Geleerd

### Mermaid Diagrammen
- Kan stroomdiagrammen maken in Markdown
- Syntax is eenvoudig
- Live voorbeeld is nuttig

### Bronnen
- [Mermaid Documentatie](https://mermaid.js.org/)

## Vragen
- Hoe maak je complexe diagrammen?
- Best practices voor diagramorganisatie?
```

## Tips

### Consistentie

- Maak notities op hetzelfde tijdstip elke dag
- Gebruik consistente opmaak
- Beoordeel en werk de hele dag door bij

### Organisatie

- Gebruik koppen voor verschillende secties
- Voeg labels toe voor eenvoudig zoeken
- Link naar gerelateerde notities

### Review

- Wekelijkse review van dagelijkse notities
- Haal belangrijke items naar permanente notities
- Archiveer of vat oude notities samen
