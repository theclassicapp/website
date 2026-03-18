# Local-First Architectuur

Classic is gebouwd met privacy als basis. Je data blijft op je apparaat, altijd.

## Wat Betekent "Local-First"?

Local-first betekent:

1. **Je data wordt lokaal opgeslagen** op je computer. Al je notities, bijlagen en instellingen worden opgeslagen in een map op je computer.
2. **Geen cloud vereist** Classic werkt zonder internetverbinding.
3. **Je bezit je data** Je hebt volledige controle over je data.

## Data Opslag

### Standaard Locatie

Je data wordt opgeslagen in een specifieke map:

| Platform | Locatie |
| -------- | -------- |
| **macOS** | `~/Library/Application Support/Classic/notes` |
| **Windows** | `%APPDATA%\Classic\notes` |
| **Linux** | `~/.config/Classic/notes` |

### Data Formaat

- Notities worden opgeslagen als platte tekstbestanden (`.md`)
- Bijlagen worden opgeslagen in een `attachments` submap
- Instellingen worden opgeslagen in `settings.json`

### Bestandsstructuur

```
notes/
├── Inbox/
├── Dagelijkse Notities/
│   └── 2024-01-15.md
├── Projecten/
│   ├── Mijn Project.md
│   └── sub-notitie.md
└── attachments/
    └── afbeelding.png
settings.json
```

## Privacy Voordelen

### Geen Account Vereist

- Geen registratie nodig
- Geen e-mailverificatie
- Geen persoonlijke informatie verzameld

### Geen Tracking

- Geen analytics
- Geen telemetrie
- Geen gebruiksdata naar externe servers

### Offline Mogelijk

- Werkt zonder internet
- Synchroniseert alleen wanneer jij kiest
- Je data is altijd toegankelijk

## Data Beveiliging

### Jouw Verantwoordelijkheid

- **Back-ups**: Stel automatische back-ups in bij Instellingen
- **Exports**: Exporteer je data regelmatig
- **Updates**: Houd Classic bijgewerkt voor beveiligingsfixes

### Onze Verantwoordelijkheid

- **Lokale opslag**: Wij zien of raken je data nooit aan
- **Geen achterdeuren**: Geen verborgen datacollectie
- **Transparantie**: Open en eerlijk over data-verwerking

## Synchronisatie (Optioneel)

Classic heeft geen ingebouwde cloudsynchronisatie. Je kunt je data echter wel synchroniseren:

### iCloud/OneDrive/Dropbox Gebruiken

1. Open Classic Instellingen
2. Wijzig de Notities map locatie naar je cloudmap
3. Classic synchroniseert via je cloudprovider

### Git Gebruiken

1. Initialiseer een git repo in je notities map
2. Commit en push wijzigingen handmatig of met automatisering

## Data Herstel

### Vanuit Back-up

1. Open Instellingen
2. Ga naar Back-up & Herstel
3. Selecteer een back-upbestand
4. Klik Herstel

### Handmatig Herstel

1. Zoek je notities map
2. Kopieer bestanden naar een veilige locatie
3. Importeer in een nieuwe Classic installatie

## Veelgestelde Vragen

### Is mijn data echt privé?

**Ja.** Je data verlaat nooit je apparaat tenzij je dit expliciet synchroniseert met een externe dienst.

### Kan ik mijn data naar een andere computer verplaatsen?

**Ja.** Kopieer simpelweg je notities map naar de nieuwe computer en wijs Classic er naar in instellingen.

### Wat gebeurt er als ik Classic verwijder?

**Je data blijft behouden.** Het verwijderen van Classic verwijdert niet je notities map. Je kunt Classic veilig verwijderen en opnieuw installeren zonder data te verliezen.

### Kan Classic mijn data toegang?

**Nee.** Classic is een lokale applicatie zonder externe connectiviteit voor datacollectie.
