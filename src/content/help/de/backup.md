# Backup & Wiederherstellung

Halten Sie Ihre Notizen mit Classics eingebautem Backup-System sicher. Verlieren Sie nie wieder Ihre Arbeit.

## Automatische Backups

### Wie es funktioniert

Classic erstellt automatisch in regelmäßigen Abständen Backups Ihrer Notizen:

- **Standardhäufigkeit**: Alle 30 Minuten
- **Backup-Speicherort**: Gleicher Ordner wie Ihre Notizen
- **Aufbewahrung**: Behält die letzten 10 Backups
- **Format**: Komprimiertes Archiv (`.cbak`)

### Auto-Backup konfigurieren

1. Einstellungen öffnen
2. Zu **Backup & Wiederherstellung** navigieren
3. Folgendes konfigurieren:

| Einstellung | Optionen | Standard |
| ----------- | -------- | -------- |
| Auto-Backup aktivieren | Ein/Aus | Ein |
| Backup-Häufigkeit | 15min / 30min / 1Std / 4Std | 30min |
| Backups behalten | 5 / 10 / 20 / 50 | 10 |
| Backup-Speicherort | Benutzerdefinierter Pfad | Notizordner |

## Manuelles Backup

### Jetzt Backup erstellen

1. Befehlspalette öffnen (`Cmd/Ctrl+P`)
2. "Backup" eingeben
3. **Jetzt Backup erstellen** auswählen
4. Speicherort auswählen (optional)
5. Backup wird erstellt

### Backupdateiformat

Backups werden als `.cbak`-Dateien gespeichert, die enthalten:

- Alle Notizen (Markdown-Dateien)
- Anhänge
- Einstellungen
- Metadaten (Tags, Links, etc.)

## Aus Backup wiederherstellen

### Wiederherstellungsprozess

1. Einstellungen öffnen
2. Zu **Backup & Wiederherstellung** gehen
3. **Aus Backup wiederherstellen** klicken
4. Backupdatei auswählen
5. Wiederherstellungsoptionen wählen
6. Wiederherstellung bestätigen

### Wiederherstellungsoptionen

| Option | Beschreibung |
| ------ | ------------ |
| **Alle ersetzen** | Aktuelle Notizen vollständig mit Backup ersetzen |
| **Zusammenführen** | Backup mit vorhandenen Notizen kombinieren |
| **Vorschau** | Backup-Inhalte vor der Wiederherstellung anzeigen |

### Was wiederhergestellt wird

- ✅ Alle Notizen und Ordner
- ✅ Anhänge
- ✅ Tags und Metadaten
- ✅ Notizverlauf
- ⚠️ Einstellungen (optional)
- ❌ Anwendungseinstellungen

## Backup-Speicherorte

### Standardspeicherort

```
~/Classic/backups/
├── backup-2024-01-15-10-30.cbak
├── backup-2024-01-15-11-00.cbak
└── backup-2024-01-15-11-30.cbak
```

### Benutzerdefinierter Speicherort

1. Einstellungen öffnen
2. Zu Backup & Wiederherstellung gehen
3. "Backup-Speicherort ändern" klicken
4. Bevorzugten Ordner auswählen

### Cloud-Backup

Zeigen Sie den Backup-Speicherort auf einen Cloud-synchronisierten Ordner:

- **iCloud**: `~/Library/Mobile Documents/com~apple~CloudDocs/Classic Backups`
- **Dropbox**: `~/Dropbox/Classic Backups`
- **Google Drive**: `~/Google Drive/Classic Backups`
- **OneDrive**: `~/OneDrive/Classic Backups`

## Best Practices

### Backup-Zeitplan

- **Auto-Backup**: Aktiviert lassen mit 30-Minuten-Intervallen
- **Manuelles Backup**: Vor großen Änderungen erstellen
- **Offsite-Backup**: Regelmäßig Backups auf externen Speicher kopieren

### Backup-Überprüfung

Überprüfen Sie regelmäßig Ihre Backups:

1. Test-Wiederherstellung erstellen
2. Notizinhalte überprüfen
3. Anhänge verifizieren
4. Metadaten bestätigen

### Backup-Rotation

- Aktuelle Backups lokal behalten
- Ältere Backups auf externen Speicher archivieren
- Sehr alte Backups löschen, um Speicherplatz zu sparen

## Fehlerbehebung

### Backup fehlgeschlagen

**Mögliche Ursachen**

- Nicht genügend Speicherplatz
- Berechtigungsprobleme
| Datei in Verwendung

**Lösungen**

1. Verfügbaren Speicherplatz überprüfen
2. Ordnerberechtigungen verifizieren
3. Andere Anwendungen schließen
4. Anderen Speicherort versuchen

### Wiederherstellung fehlgeschlagen

**Mögliche Ursachen**

- Beschädigte Backupdatei
- Inkompatible Version
| Nicht genügend Speicherplatz

**Lösungen**

1. Älteres Backup versuchen
2. Backupdatei-Integrität überprüfen
3. Speicherplatz freigeben
4. Support kontaktieren

### Fehlende Backups

**Mögliche Ursachen**

- Auto-Backup deaktiviert
- Backup-Speicherort geändert
- Backups gelöscht

**Lösungen**

1. Backup-Einstellungen überprüfen
2. Backup-Speicherort verifizieren
3. Auto-Backup aktivieren
4. Jetzt manuelles Backup erstellen

## Erweiterte Optionen

### Verschlüsselte Backups

Für zusätzliche Sicherheit:

1. Einstellungen öffnen
2. Zu Backup & Wiederherstellung gehen
3. "Backups verschlüsseln" aktivieren
4. Passwort festlegen
5. Merken Sie sich dieses Passwort - es kann nicht wiederhergestellt werden

### Inkrementelle Backups

Sparen Sie Speicherplatz mit inkrementellen Backups:

- Nur Änderungen seit dem letzten Backup werden gespeichert
| Vollständige Wiederherstellung rekonstruiert den kompletten Zustand
- Reduziert Backup-Zeit und -Größe

### Backup-Ausschlüsse

Bestimmte Inhalte von Backups ausschließen:

1. Einstellungen öffnen
2. Zu Backup & Wiederherstellung gehen
3. "Ausschlüsse" klicken
4. Ordner oder Dateien zum Ausschließen hinzufügen
