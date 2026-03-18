# Local-First-Architektur

Classic wurde mit Datenschutz als Grundlage entwickelt. Ihre Daten bleiben auf Ihrem Gerät, immer.

## Was bedeutet "Local-First"?

Local-First bedeutet:

1. **Ihre Daten werden lokal gespeichert** auf Ihrem Computer. Alle Ihre Notizen, Anhänge und Einstellungen werden in einem Ordner auf Ihrem Computer gespeichert.
2. **Keine Cloud erforderlich** Classic funktioniert ohne Internetverbindung.
3. **Sie besitzen Ihre Daten** Sie haben die vollständige Kontrolle über Ihre Daten.

## Datenspeicherung

### Standardspeicherort

Ihre Daten werden in einem dedizierten Ordner gespeichert:

| Plattform | Speicherort |
| --------- | ----------- |
| **macOS** | `~/Library/Application Support/Classic/notes` |
| **Windows** | `%APPDATA%\Classic\notes` |
| **Linux** | `~/.config/Classic/notes` |

### Datenformat

- Notizen werden als Klartextdateien (`.md`) gespeichert
- Anhänge werden in einem `attachments`-Unterordner gespeichert
- Einstellungen werden in `settings.json` gespeichert

### Dateistruktur

```
notes/
├── Inbox/
├── Daily Notes/
│   └── 2024-01-15.md
├── Projects/
│   ├── My Project.md
│   └── sub-note.md
└── attachments/
    └── image.png
settings.json
```

## Datenschutz-Vorteile

### Kein Konto erforderlich

- Keine Registrierung nötig
- Keine E-Mail-Verifizierung
- Keine persönlichen Daten gesammelt

### Kein Tracking

- Keine Analysen
- Keine Telemetrie
- Keine Nutzungsdaten an externe Server gesendet

### Offline-fähig

- Funktioniert ohne Internet
- Synchronisiert nur, wenn Sie es wählen
- Ihre Daten sind immer zugänglich

## Datensicherheit

### Ihre Verantwortung

- **Backups**: Automatische Backups in den Einstellungen einrichten
- **Exporte**: Daten regelmäßig exportieren
- **Updates**: Classic für Sicherheitsupdates aktuell halten

### Unsere Verantwortung

- **Lokale Speicherung**: Wir sehen oder berühren Ihre Daten nie
- **Keine Hintertüren**: Keine versteckte Datensammlung
- **Transparenz**: Offen und ehrlich im Umgang mit Daten

## Synchronisierung (Optional)

Classic enthält keine eingebaute Cloud-Synchronisierung. Sie können Ihre Daten jedoch synchronisieren:

### Mit iCloud/OneDrive/Dropbox

1. Classic-Einstellungen öffnen
2. Notizordner-Speicherort zu Ihrem Cloud-Ordner ändern
3. Classic synchronisiert über Ihren Cloud-Anbieter

### Mit Git

1. Git-Repository im Notizordner initialisieren
2. Änderungen manuell oder mit Automatisierung committen und pushen

## Datenwiederherstellung

### Aus Backup

1. Einstellungen öffnen
2. Zu Backup & Wiederherstellung gehen
3. Backupdatei auswählen
4. Wiederherstellen klicken

### Manuelle Wiederherstellung

1. Notizordner lokalisieren
2. Dateien an einen sicheren Ort kopieren
3. In eine frische Classic-Installation importieren

## Häufig gestellte Fragen

### Sind meine Daten wirklich privat?

**Ja.** Ihre Daten verlassen niemals Ihr Gerät, es sei denn, Sie synchronisieren sie explizit mit einem Drittanbieter-Dienst.

### Kann ich meine Daten auf einen anderen Computer verschieben?

**Ja.** Kopieren Sie einfach Ihren Notizordner auf den neuen Computer und zeigen Sie Classic in den Einstellungen darauf.

### Was passiert, wenn ich Classic deinstalliere?

**Ihre Daten bleiben erhalten.** Die Deinstallation von Classic löscht nicht Ihren Notizordner. Sie können sicher deinstallieren und neu installieren, ohne Daten zu verlieren.

### Kann Classic auf meine Daten zugreifen?

**Nein.** Classic ist eine lokale Anwendung ohne externe Konnektivität zur Datensammlung.
