# Versionsverlauf

Classic verfolgt jede Änderung an Ihren Notizen. Durchsuchen, vergleichen und stellen Sie frühere Versionen wieder her, wann immer Sie müssen.

## Wie der Versionsverlauf funktioniert

### Automatische Verfolgung

Classic speichert automatisch Versionen Ihrer Notizen:

- **Jede Bearbeitung**: Jedes Speichern erstellt eine Version
- **Mit Zeitstempel**: Wissen, wann Änderungen auftraten
- **Vollständiger Inhalt**: Vollständige Snapshots werden bewahrt

### Aufbewahrung

| Einstellung | Standard |
|-------------|----------|
| **Verlaufsaufbewahrung** | 90 Tage |
| **Maximale Versionen** | 100 pro Notiz |
| **Automatische Bereinigung** | Ja |

Konfigurieren Sie diese in Einstellungen → Editor → Versionsverlauf.

## Verlauf anzeigen

### Versionsverlauf öffnen

1. Beliebige Notiz öffnen
2. Auf das Verlaufssymbol in der Symbolleiste klicken
3. Oder `Cmd/Ctrl+H` verwenden

### Verlaufspanel

Das Verlaufspanel zeigt:

- **Zeitlinie**: Liste aller Versionen
- **Zeitstempel**: Wann jede Version gespeichert wurde
- **Vorschau**: Inhalt der ausgewählten Version sehen

### Versionen navigieren

1. Auf eine beliebige Version in der Liste klicken
2. Vorschau zeigt diese Version
3. Durch Änderungen scrollen
4. Mit aktueller Version vergleichen

## Versionen vergleichen

### Seitenansicht

Unterschiede zwischen Versionen sehen:

1. Versionsverlauf öffnen
2. Eine Version auswählen
3. "Vergleichen" klicken
4. Hinzufügungen (grün) und Löschungen (rot) sehen

### Diff-Ansicht

Textunterschiede werden hervorgehoben:

- **Grün**: Hinzugefügter Inhalt
- **Rot**: Entfernter Inhalt
- **Unverändert**: Normaler Text

## Versionen wiederherstellen

### Gesamte Notiz wiederherstellen

Aktuellen Inhalt mit einer früheren Version ersetzen:

1. Versionsverlauf öffnen
2. Die Version auswählen
3. "Wiederherstellen" klicken
4. Aktion bestätigen

### Auswahl wiederherstellen

Nur einen Teil einer früheren Version kopieren:

1. Versionsverlauf öffnen
2. Die Version auswählen
3. Gewünschten Text markieren
4. "In Zwischenablage kopieren" klicken
5. In aktueller Notiz einfügen

### Neue Notiz aus Version erstellen

Beide Versionen behalten:

1. Versionsverlauf öffnen
2. Die Version auswählen
3. "Notiz aus Version erstellen" klicken
4. Eine neue Notiz wird erstellt

## Versionsverlauf-Aktionen

| Aktion | Beschreibung |
|--------|--------------|
| **Anzeigen** | Versionsvorschau |
| **Vergleichen** | Diff mit aktuellem |
| **Wiederherstellen** | Aktuellen mit diesem ersetzen |
| **Kopieren** | Inhalt in Zwischenablage kopieren |
| **Löschen** | Diese Version entfernen |

## Tastaturkürzel

| Aktion | Tastenkombination |
|--------|-------------------|
| Verlauf öffnen | `Cmd/Ctrl+H` |
| Vorherige Version | `Up` |
| Nächste Version | `Down` |
| Wiederherstellen | `Cmd/Ctrl+R` |
| Verlauf schließen | `Escape` |

## Einstellungen

### In Einstellungen → Editor → Versionsverlauf konfigurieren

| Einstellung | Optionen | Standard |
|-------------|----------|----------|
| Verlauf aktivieren | Ein/Aus | Ein |
| Aufbewahrungszeitraum | 30/60/90/180 Tage | 90 Tage |
| Max. Versionen | 50/100/200/500 | 100 |
| Auto-Speicher-Intervall | 1/5/10/30 Minuten | 5 Minuten |

### Speicherort

Versionsverlauf wird lokal gespeichert:

- **macOS**: `~/Library/Application Support/Classic/history/`
- **Windows**: `%APPDATA%/Classic/history/`
- **Linux**: `~/.config/Classic/history/`

## Anwendungsfälle

### Versehentliche Änderungen wiederherstellen

1. Versionsverlauf öffnen
2. Version vor dem Fehler finden
3. Diese Version wiederherstellen

### Entwürfe vergleichen

1. Verlauf öffnen
2. Unterschiedliche Versionen vergleichen
3. Sehen, wie sich die Notiz entwickelt hat

### Gelöschten Inhalt finden

1. Ältere Versionen durchsuchen
2. Nach gelöschtem Text suchen
3. Zurückkopieren

### Fortschritt verfolgen

Sehen, wie sich eine Notiz im Laufe der Zeit entwickelt hat:

- Wann Ideen hinzugefügt wurden
- Wie sich die Struktur geändert hat
| Schreibentwicklung

## Tipps

### Regelmäßige Überprüfung

Überprüfen Sie regelmäßig den Versionsverlauf:

- Unnötige Versionen bereinigen
| Beachten, wie sich Inhalte entwickelt haben
- Aus Ihren Bearbeitungsmustern lernen

### Vor großen Änderungen

Einen Kontrollpunkt erstellen:

1. Eine kleine Bearbeitung machen
2. Speichern (erstellt eine Version)
3. Jetzt große Änderungen vornehmen
4. Einfach rückgängig zu machen falls nötig

### Wichtige Versionen benennen

Markierungen in Ihren Notizen hinzufügen:

```markdown
<!-- VERSION: Finaler Entwurf -->
<!-- VERSION: Vor Umstrukturierung -->
```

Diese helfen, Versionen später zu identifizieren.

## Fehlerbehebung

### Verlauf wird nicht gespeichert

- Überprüfen, ob Versionsverlauf aktiviert ist
- Speicherplatz am Speicherort verifizieren
| Dateiberechtigungen überprüfen

### Alte Version nicht gefunden

- Version wurde möglicherweise automatisch bereinigt
| Aufbewahrungseinstellungen überprüfen
| Aufbewahrungszeitraum erhöhen

### Verlauf nimmt zu viel Speicherplatz ein

1. Aufbewahrungszeitraum reduzieren
2. Max. Versionen pro Notiz senken
3. Manuelle Bereinigung durchführen

### Langsames Laden des Verlaufs

Große Notizen mit vielen Versionen können langsam laden:

- Geduld bei großen Verläufen haben
| Erwägen, max. Versionen zu reduzieren
- Alte Notizen archivieren

## Datenschutz & Sicherheit

### Lokale Speicherung

Versionsverlauf wird lokal gespeichert:

- Niemals an Server gesendet
- Ihre Daten bleiben privat
- Nur Sie haben Zugriff

### Verschlüsselte Backups

Wenn Sie verschlüsselte Backups verwenden:

- Versionsverlauf ist enthalten
- Durch Ihr Backup-Passwort geschützt
- Sicher auch in Backupdateien
