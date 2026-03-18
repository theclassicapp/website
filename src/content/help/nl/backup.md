# Back-up & Herstel

Houd je notities veilig met het ingebouwde back-upsysteem van Classic. Verlies nooit meer je werk.

## Automatische Back-ups

### Hoe Het Werkt

Classic maakt automatisch back-ups van je notities met regelmatige tussenpozen:

- **Standaard frequentie**: Elke 30 minuten
- **Back-up locatie**: Zelfde map als je notities
- **Bewaartermijn**: Bewaart laatste 10 back-ups
- **Formaat**: Gecomprimeerd archief (`.cbak`)

### Automatische Back-up Configureren

1. Open Instellingen
2. Navigeer naar **Back-up & Herstel**
3. Configureer het volgende:

| Instelling | Opties | Standaard |
| ------- | ------- | ------- |
| Automatische Back-up Inschakelen | Aan/Uit | Aan |
| Back-up Frequentie | 15min / 30min / 1uur / 4uur | 30min |
| Back-ups Bewaren | 5 / 10 / 20 / 50 | 10 |
| Back-up Locatie | Aangepast pad | Notities map |

## Handmatige Back-up

### Nu Back-up Maken

1. Open Commandopalet (`Cmd/Ctrl+P`)
2. Typ "Back-up"
3. Selecteer **Nu Back-up Maken**
4. Kies locatie (optioneel)
5. Back-up wordt gemaakt

### Back-up Bestandsformaat

Back-ups worden opgeslagen als `.cbak` bestanden die bevatten:

- Alle notities (Markdown bestanden)
- Bijlagen
- Instellingen
- Metadata (labels, links, etc.)

## Herstellen vanuit Back-up

### Herstel Proces

1. Open Instellingen
2. Ga naar **Back-up & Herstel**
3. Klik **Herstellen vanuit Back-up**
4. Selecteer het back-upbestand
5. Kies herstelopties
6. Bevestig herstel

### Herstel Opties

| Optie | Beschrijving |
| ------ | ----------- |
| **Alles Vervangen** | Vervang huidige notities volledig met back-up |
| **Samenvoegen** | Combineer back-up met bestaande notities |
| **Voorbeeld** | Bekijk back-up inhoud voor herstellen |

### Wat Wordt Hersteld

- ✅ Alle notities en mappen
- ✅ Bijlagen
- ✅ Labels en metadata
- ✅ Notitiegeschiedenis
- ⚠️ Instellingen (optioneel)
- ❌ Applicatievoorkeuren

## Back-up Locaties

### Standaard Locatie

```
~/Classic/backups/
├── backup-2024-01-15-10-30.cbak
├── backup-2024-01-15-11-00.cbak
└── backup-2024-01-15-11-30.cbak
```

### Aangepaste Locatie

1. Open Instellingen
2. Ga naar Back-up & Herstel
3. Klik "Back-up Locatie Wijzigen"
4. Selecteer je voorkeursmap

### Cloud Back-up

Wijs de back-up locatie naar een cloud-gesynchroniseerde map:

- **iCloud**: `~/Library/Mobile Documents/com~apple~CloudDocs/Classic Backups`
- **Dropbox**: `~/Dropbox/Classic Backups`
- **Google Drive**: `~/Google Drive/Classic Backups`
- **OneDrive**: `~/OneDrive/Classic Backups`

## Best Practices

### Back-up Schema

- **Automatische Back-up**: Houd ingeschakeld met 30-minuten intervallen
- **Handmatige Back-up**: Maak voor grote wijzigingen
- **Offsite Back-up**: Kopieer regelmatig back-ups naar externe opslag

### Back-up Verificatie

Verifieer regelmatig je back-ups:

1. Maak een test-herstel
2. Controleer notitie-inhoud
3. Verifieer bijlagen
4. Bevestig metadata

### Back-up Rotatie

- Bewaar recente back-ups lokaal
- Archiveer oudere back-ups naar externe opslag
- Verwijder zeer oude back-ups om ruimte te besparen

## Probleemoplossing

### Back-up Mislukt

**Mogelijke oorzaken**

- Onvoldoende schijfruimte
- Machtigingsproblemen
- Bestand in gebruik

**Oplossingen**

1. Controleer beschikbare schijfruimte
2. Verifieer mapmachtigingen
3. Sluit andere applicaties
4. Probeer een andere locatie

### Herstel Mislukt

**Mogelijke oorzaken**

- Beschadigd back-upbestand
- Incompatibele versie
- Onvoldoende ruimte

**Oplossingen**

1. Probeer een oudere back-up
2. Controleer back-upbestand integriteit
3. Maak schijfruimte vrij
4. Neem contact op met support

### Ontbrekende Back-ups

**Mogelijke oorzaken**

- Automatische back-up uitgeschakeld
- Back-up locatie gewijzigd
- Back-ups verwijderd

**Oplossingen**

1. Controleer back-upinstellingen
2. Verifieer back-up locatie
3. Schakel automatische back-up in
4. Maak nu een handmatige back-up

## Geavanceerde Opties

### Versleutelde Back-ups

Voor extra beveiliging:

1. Open Instellingen
2. Ga naar Back-up & Herstel
3. Schakel "Back-ups Versleutelen" in
4. Stel een wachtwoord in
5. Onthoud dit wachtwoord - het kan niet worden hersteld

### Incrementele Back-ups

Bespaar ruimte met incrementele back-ups:

- Alleen wijzigingen sinds laatste back-up worden opgeslagen
- Volledig herstel reconstrueert complete status
- Verkleint back-uptijd en -grootte

### Back-up Uitsluitingen

Sluit specifieke content uit van back-ups:

1. Open Instellingen
2. Ga naar Back-up & Herstel
3. Klik "Uitsluitingen"
4. Voeg mappen of bestanden toe om uit te sluiten
