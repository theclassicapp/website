# Importeren & Exporteren

Breng je notities naar Classic vanuit andere apps, of exporteer ze om te delen of als back-up. Classic ondersteunt meerdere formaten voor naadloze datamigratie.

## Notities Importeren

### Ondersteunde Formaten

| Formaat | Extensie | Opmerkingen |
| ------ | --------- | ----- |
| Markdown | `.md` | ✅ Volledige ondersteuning |
| Platte Tekst | `.txt` | ✅ Geïmporteerd als notitie |
| JSON | `.json` | ✅ Classic formaat |
| HTML | `.html` | ⚠️ Geconverteerd naar Markdown |
| Evernote | `.enex` | ⚠️ Experimenteel |
| Notion | Notion export | ⚠️ Experimenteel |
| Obsidian | Markdown export | ✅ Volledige ondersteuning |

### Import Proces

1. Open **Bestand** → **Importeren** (of `Cmd/Ctrl+I`)
2. Selecteer je bestand(en) om te importeren
3. Kies bestemmingsmap
4. Bekijk import voorbeeld
5. Bevestig import

### Importeren vanuit Klembord

Snelle import vanuit elke bron:

1. Kopieer tekst naar klembord
2. Open Commandopalet
3. Typ "Importeren vanuit Klembord"
4. Nieuwe notitie wordt automatisch gemaakt

### Bulk Import

Importeer meerdere bestanden tegelijk:

1. Open **Bestand** → **Importeren**
2. Selecteer **Map Importeren**
3. Kies de map met notities
4. Alle ondersteunde bestanden worden geïmporteerd

## Notities Exporteren

### Export Formaten

| Formaat | Gebruik |
| ------ | ------- |
| **Markdown** | Delen, back-ups, andere apps |
| **HTML** | Web publicatie |
| **PDF** | Archivering, afdrukken |
| **Platte Tekst** | Eenvoudig delen |
| **JSON** | API integratie |

### Enkele Notitie Exporteren

1. Open de notitie
2. Klik **Bestand** → **Exporteren**
3. Kies formaat
4. Selecteer locatie
5. Sla op

### Meerdere Notities Exporteren

1. Selecteer notities in zijbalk (Cmd/Ctrl+klik)
2. Klik met rechtermuisknop → **Selectie Exporteren**
3. Kies formaat
4. Selecteer locatie
5. Sla op

### Alle Notities Exporteren

1. Open **Bestand** → **Alles Exporteren**
2. Kies formaat
3. Selecteer locatie
4. Wacht tot export voltooid is

## Migratie Gidsen

### Vanuit Obsidian

Classic kan Obsidian vaults direct importeren:

1. Open **Bestand** → **Importeren**
2. Selecteer **Obsidian Vault**
3. Navigeer naar je vault map
4. Selecteer om te importeren

**Wat wordt overgezet**

- ✅ Notities en mappen
- ✅ Labels
- ✅ Links (geconverteerd naar terugverwijzingen)
- ✅ Metadata
- ⚠️ Plugins (niet ondersteund)

### Vanuit Notion

1. Exporteer vanuit Notion als Markdown
2. Importeer naar Classic
3. Beoordeel opmaak
4. Fix eventuele gebroken links

**Tips voor Notion migratie**

- Gebruik Notion's "Exporteer als Markdown"
- Controleer checkbox opmaak
- Verifieer database referenties
- Maak gekoppelde databases handmatig opnieuw

### Vanuit Evernote

1. Exporteer vanuit Evernote als HTML
2. Gebruik Classic's HTML import
3. Beoordeel geconverteerde content

**Tips voor Evernote migratie**

- Notitieboeken worden mappen
- Labels blijven behouden
- Bijlagen worden geïmporteerd
- Controleer opmaak

## Best Practices

### Voor Importeren

- Maak back-up van bestaande notities
- Beoordeel import voorbeeld
- Controleer op duplicaten
- Verifieer opmaak

### Na Importeren

- Beoordeel geïmporteerde notities
- Fix eventuele opmaakproblemen
- Werk interne links bij
- Voeg labels toe indien nodig

### Regelmatige Exports

- Exporteer maandelijks back-ups
- Gebruik verschillende formaten voor verschillende doeleinden
- Houd exports georganiseerd op datum
- Sla op in cloud voor offsite back-up

## Probleemoplossing

### Import Mislukt

**Veelvoorkomende oorzaken**

- Niet-ondersteund formaat
- Beschadigd bestand
- Machtigingsproblemen
- Geheugenbeperkingen

**Oplossingen**

1. Probeer een ander formaat
2. Controleer bestandsintegriteit
3. Verifieer leesmachtigingen
4. Importeer minder bestanden tegelijk

### Opmaak Verloren

**Veelvoorkomende oorzaken**

- Complexe opmaak
- Niet-ondersteunde syntax
- Conversiebeperkingen

**Oplossingen**

1. Gebruik Markdown export vanuit bron-app
2. Vereenvoudig opmaak voor import
3. Handmatig repareren na import

### Bijlagen Ontbreken

**Veelvoorkomende oorzaken**

- Import bevatte geen bijlagen
- Verkeerd bijlagepad
- Groottebeperkingen

**Oplossingen**

1. Opnieuw importeren met bijlagen
2. Controleer bijlagemap
3. Importeer bijlagen apart
