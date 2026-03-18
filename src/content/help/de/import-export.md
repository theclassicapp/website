# Import & Export

Bringen Sie Ihre Notizen aus anderen Apps in Classic oder exportieren Sie sie zum Teilen oder Backup. Classic unterstützt mehrere Formate für nahtlose Datenmigration.

## Notizen importieren

### Unterstützte Formate

| Format | Erweiterung | Hinweise |
| ------ | ----------- | -------- |
| Markdown | `.md` | ✅ Vollständige Unterstützung |
| Klartext | `.txt` | ✅ Als Notiz importiert |
| JSON | `.json` | ✅ Classic-Format |
| HTML | `.html` | ⚠️ Zu Markdown konvertiert |
| Evernote | `.enex` | ⚠️ Experimentell |
| Notion | Notion-Export | ⚠️ Experimentell |
| Obsidian | Markdown-Export | ✅ Vollständige Unterstützung |

### Importprozess

1. **Datei** → **Importieren** öffnen (oder `Cmd/Ctrl+I`)
2. Zu importierende Datei(en) auswählen
3. Zielordner auswählen
4. Importvorschau überprüfen
5. Import bestätigen

### Aus Zwischenablage importieren

Schneller Import aus jeder Quelle:

1. Text in Zwischenablage kopieren
2. Befehlspalette öffnen
3. "Aus Zwischenablage importieren" eingeben
4. Neue Notiz wird automatisch erstellt

### Massenimport

Mehrere Dateien gleichzeitig importieren:

1. **Datei** → **Importieren** öffnen
2. **Ordner importieren** auswählen
3. Den Ordner mit Notizen auswählen
4. Alle unterstützten Dateien werden importiert

## Notizen exportieren

### Exportformate

| Format | Anwendungsfall |
| ------ | -------------- |
| **Markdown** | Teilen, Backups, andere Apps |
| **HTML** | Web-Veröffentlichung |
| **PDF** | Archivierung, Drucken |
| **Klartext** | Einfaches Teilen |
| **JSON** | API-Integration |

### Einzelne Notiz exportieren

1. Notiz öffnen
2. **Datei** → **Exportieren** klicken
3. Format auswählen
4. Speicherort auswählen
5. Speichern

### Mehrere Notizen exportieren

1. Notizen in der Seitenleiste auswählen (Cmd/Ctrl+Klick)
2. Rechtsklick → **Ausgewählte exportieren**
3. Format auswählen
4. Speicherort auswählen
5. Speichern

### Alle Notizen exportieren

1. **Datei** → **Alle exportieren** öffnen
2. Format auswählen
3. Speicherort auswählen
4. Auf Abschluss des Exports warten

## Migrationsanleitungen

### Von Obsidian

Classic kann Obsidian-Vaults direkt importieren:

1. **Datei** → **Importieren** öffnen
2. **Obsidian-Vault** auswählen
3. Zu Ihrem Vault-Ordner navigieren
4. Auswählen zum Importieren

**Was übertragen wird**

- ✅ Notizen und Ordner
- ✅ Tags
- ✅ Links (zu Rückverweisen konvertiert)
- ✅ Metadaten
- ⚠️ Plugins (nicht unterstützt)

### Von Notion

1. Aus Notion als Markdown exportieren
2. In Classic importieren
3. Formatierung überprüfen
4. Kaputte Links korrigieren

**Tipps für Notion-Migration**

- Notions "Als Markdown exportieren" verwenden
| Kontrollkästchen-Formatierung überprüfen
- Datenbank-Referenzen verifizieren
- Verknüpfte Datenbanken manuell neu erstellen

### Von Evernote

1. Aus Evernote als HTML exportieren
2. Classics HTML-Import verwenden
3. Konvertierten Inhalt überprüfen

**Tipps für Evernote-Migration**

- Notizbücher werden zu Ordnern
- Tags bleiben erhalten
- Anhänge werden importiert
- Formatierung überprüfen

## Best Practices

### Vor dem Importieren

- Vorhandene Notizen sichern
- Importvorschau überprüfen
| Auf Duplikate überprüfen
- Formatierung verifizieren

### Nach dem Importieren

- Importierte Notizen überprüfen
- Formatierungsprobleme beheben
| Interne Links aktualisieren
- Tags nach Bedarf hinzufügen

### Regelmäßige Exporte

- Monatlich Backup-Exporte
- Unterschiedliche Formate für verschiedene Zwecke
- Exporte nach Datum organisiert halten
- In Cloud für Offsite-Backup speichern

## Fehlerbehebung

### Import fehlgeschlagen

**Häufige Ursachen**

- Nicht unterstütztes Format
- Beschädigte Datei
| Berechtigungsprobleme
- Speicherbegrenzungen

**Lösungen**

1. Anderes Format versuchen
2. Dateiintegrität überprüfen
3. Leseberechtigungen verifizieren
4. Weniger Dateien gleichzeitig importieren

### Formatierung verloren

**Häufige Ursachen**

- Komplexe Formatierung
- Nicht unterstützte Syntax
| Konvertierungseinschränkungen

**Lösungen**

1. Markdown-Export aus Quell-App verwenden
2. Formatierung vor dem Import vereinfachen
3. Nach Import manuell korrigieren

### Anhänge fehlen

**Häufige Ursachen**

- Import enthielt keine Anhänge
| Falscher Anhangspfad
- Größenbeschränkungen

**Lösungen**

1. Mit Anhängen neu importieren
2. Anhangsordner überprüfen
3. Anhänge separat importieren
