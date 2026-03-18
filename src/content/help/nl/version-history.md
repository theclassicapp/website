# Versiegeschiedenis

Classic houdt elke wijziging aan je notities bij. Blader, vergelijk en herstel eerdere versies wanneer je maar wilt.

## Hoe Versiegeschiedenis Werkt

### Automatische Tracking

Classic slaat automatisch versies van je notities op:

- **Elke bewerking**: Elke opslag maakt een versie
- **Tijdstempel**: Weet wanneer wijzigingen plaatsvonden
- **Volledige content**: Complete momentopnamen bewaard

### Bewaartermijn

| Instelling | Standaard |
|---------|---------|
| **Geschiedenis Bewaartermijn** | 90 dagen |
| **Maximum Versies** | 100 per notitie |
| **Automatische opschoning** | Ja |

Configureer dit in Instellingen → Editor → Versiegeschiedenis.

## Geschiedenis Bekijken

### Versiegeschiedenis Openen

1. Open een notitie
2. Klik op het geschiedenispictogram in de werkbalk
3. Of gebruik `Cmd/Ctrl+H`

### Geschiedenispaneel

Het geschiedenispaneel toont:

- **Tijdlijn**: Lijst van alle versies
- **Tijdstempels**: Wanneer elke versie is opgeslagen
- **Voorbeeld**: Bekijk content van geselecteerde versie

### Door Versies Navigeren

1. Klik op een versie in de lijst
2. Voorbeeld toont die versie
3. Scroll door wijzigingen
4. Vergelijk met huidige versie

## Versies Vergelijken

### Weergave Zij aan Zij

Zie verschillen tussen versies:

1. Open versiegeschiedenis
2. Selecteer een versie
3. Klik "Vergelijken"
4. Zie toevoegingen (groen) en verwijderingen (rood)

### Diff Weergave

Tekstverschillen worden gemarkeerd:

- **Groen**: Toegevoegde content
- **Rood**: Verwijderde content
- **Ongewijzigd**: Gewone tekst

## Versies Herstellen

### Volledige Notitie Herstellen

Vervang huidige content met een eerdere versie:

1. Open versiegeschiedenis
2. Selecteer de versie
3. Klik "Herstellen"
4. Bevestig de actie

### Selectie Herstellen

Kopieer slechts een deel van een eerdere versie:

1. Open versiegeschiedenis
2. Selecteer de versie
3. Markeer de tekst die je wilt
4. Klik "Kopiëren naar Klembord"
5. Plak in je huidige notitie

### Nieuwe Notitie Maken vanuit Versie

Bewaar beide versies:

1. Open versiegeschiedenis
2. Selecteer de versie
3. Klik "Notitie Maken vanuit Versie"
4. Er wordt een nieuwe notitie gemaakt

## Versiegeschiedenis Acties

| Actie | Beschrijving |
|--------|-------------|
| **Bekijken** | Bekijk de versie |
| **Vergelijken** | Diff met huidige |
| **Herstellen** | Vervang huidige met deze |
| **Kopiëren** | Kopieer content naar klembord |
| **Verwijderen** | Verwijder deze versie |

## Sneltoetsen

| Actie | Sneltoets |
|--------|----------|
| Open Geschiedenis | `Cmd/Ctrl+H` |
| Vorige Versie | `Up` |
| Volgende Versie | `Down` |
| Herstellen | `Cmd/Ctrl+R` |
| Geschiedenis Sluiten | `Escape` |

## Instellingen

### Configureer in Instellingen → Editor → Versiegeschiedenis

| Instelling | Opties | Standaard |
|---------|---------|---------|
| Geschiedenis Inschakelen | Aan/Uit | Aan |
| Bewaartermijn | 30/60/90/180 dagen | 90 dagen |
| Max Versies | 50/100/200/500 | 100 |
| Auto-opslag Interval | 1/5/10/30 minuten | 5 minuten |

### Opslaglocatie

Versiegeschiedenis wordt lokaal opgeslagen:

- **macOS**: `~/Library/Application Support/Classic/history/`
- **Windows**: `%APPDATA%/Classic/history/`
- **Linux**: `~/.config/Classic/history/`

## Gebruikscases

### Per ongeluk Gemaakte Wijzigingen Herstellen

1. Open versiegeschiedenis
2. Vind versie vóór de fout
3. Herstel die versie

### Concepten Vergelijken

1. Open geschiedenis
2. Vergelijk verschillende versies
3. Zie hoe de notitie zich ontwikkelde

### Verwijderde Content Vinden

1. Blader door oudere versies
2. Zoek naar verwijderde tekst
3. Kopieer het terug

### Voortgang Volgen

Zie hoe een notitie zich door de tijd ontwikkelde:

- Wanneer ideeën werden toegevoegd
- Hoe structuur veranderde
- Schrijfontwikkeling

## Tips

### Regelmatige Review

Beoordeel regelmatig versiegeschiedenis:

- Ruim onnodige versies op
- Let op hoe content zich ontwikkelde
- Leer van je bewerkingspatronen

### Voor Grote Wijzigingen

Maak een checkpoint:

1. Maak een kleine bewerking
2. Sla op (maakt een versie)
3. Maak nu je grote wijzigingen
4. Eenvoudig terug te draaien indien nodig

### Belangrijke Versies Naamgeven

Voeg markers toe in je notities:

```markdown
<!-- VERSIE: Definitief concept -->
<!-- VERSIE: Voor herstructurering -->
```

Deze helpen bij het identificeren van versies later.

## Probleemoplossing

### Geschiedenis Wordt Niet Opgeslagen

- Controleer of versiegeschiedenis is ingeschakeld
- Verifieer dat opslaglocatie ruimte heeft
- Controleer bestandsmachtigingen

### Kan Oude Versie Niet Vinden

- Versie kan automatisch zijn opgeschoond
- Controleer bewaarinstellingen
- Verhoog bewaartermijn

### Geschiedenis Neemt Te Veel Ruimte

1. Verminder bewaartermijn
2. Verlaag max versies per notitie
3. Voer handmatige opschoning uit

### Traag Laden van Geschiedenis

Grote notities met veel versies kunnen traag laden:

- Heb geduld met grote geschiedenissen
- Overweeg max versies te verlagen
- Archiveer oude notities

## Privacy & Beveiliging

### Lokale Opslag

Versiegeschiedenis wordt lokaal opgeslagen:

- Nooit naar servers verzonden
- Je data blijft privé
- Alleen jij hebt toegang

### Versleutelde Back-ups

Als je versleutelde back-ups gebruikt:

- Versiegeschiedenis is inbegrepen
- Beschermd door je back-up wachtwoord
- Veilig, zelfs in back-upbestanden
