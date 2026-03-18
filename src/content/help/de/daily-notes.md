# Tägliche Notizen

Tägliche Notizen erstellen automatisch eine neue Notiz für jeden Tag - perfekt für Tagebuch, Tagesplanung oder das Erfassen zeitbasierter Informationen.

## Wie es funktioniert

### Automatische Erstellung

- Für jeden Tag wird eine neue Notiz erstellt
- Notizen werden mit dem Datumsformat benannt (z.B. `2024-01-15.md`)
- Notizen früherer Tage bleiben erhalten und sind durchsuchbar

### Tägliche Notizen aufrufen

1. Auf **Tägliche Notizen** in der Seitenleiste klicken
2. Oder `Ctrl/Cmd+D` drücken
3. Die heutige Notiz öffnet sich automatisch

## Vorlage für tägliche Notizen

Passen Sie die Vorlage für neue tägliche Notizen an:

### Standardvorlage

```markdown
# {{date}}

## Aufgaben
- [ ]
- [ ]

## Notizen


## Tagebuch

```

### Anpassung

1. Einstellungen öffnen
2. Zu Tägliche Notizen gehen
3. Die Vorlage bearbeiten
4. `{{date}}` für das aktuelle Datum verwenden

### Vorlagenvariablen

| Variable | Beschreibung |
| -------- | ------------ |
| `{{date}}` | Aktuelles Datum (JJJJ-MM-TT) |
| `{{time}}` | Aktuelle Zeit (HH:mm) |
| `{{weekday}}` | Wochentag (Montag, etc.) |

## Funktionen

### Datumsnavigation

- **Vorheriger/Nächster**: Zwischen Tagen navigieren
- **Kalender**: Zu bestimmten Daten springen
- **Suche**: Inhalte in allen täglichen Notizen finden

### Automatische Verknüpfung

- Am selben Tag erstellte Notizen werden automatisch verlinkt
- Rückverweise zeigen Verbindungen zwischen Tagen
- Tags funktionieren in allen täglichen Notizen

### Integration

- **Schnellerfassung**: Mit `#heute` zur heutigen Notiz hinzufügen
- **Kalenderansicht**: Visuelle Übersicht Ihrer täglichen Notizen
- **Statistiken**: Ihre Schreibsträhnen verfolgen

## Best Practices

### Tägliche Journal-Einträge

```markdown
# 2024-01-15

## Morgen
- Um 6:30 aufgewacht
- Gefühl: Energetisch

## Aufgaben
- [x] Morgen-Training
- [ ] PRs überprüfen
- [ ] Team-Besprechung um 14 Uhr

## Erkenntnisse
- Neues Tastaturkürzel entdeckt
- Über Mermaid-Diagramme gelernt

## Morgen
- Fokus auf Dokumentation
- Code-Review einplanen
```

### Besprechungsnotizen

```markdown
# 2024-01-15

## Team-Standup

**Teilnehmer**: Alice, Bob, Carol

### Updates
- Alice: API-Integration fertiggestellt
- Bob: Arbeite an UI-Komponenten
- Carol: Tests laufen

### Blocker
- Warte auf Design-Review

### Aktionspunkte
- [ ] Alice: Auf Staging bereitstellen
- [ ] Bob: Komponentenbibliothek fertigstellen
- [ ] Carol: Integrationstests schreiben
```

### Lern-Logbuch

```markdown
# 2024-01-15

## Heute gelernt

### Mermaid-Diagramme
- Kann Flussdiagramme in Markdown erstellen
- Syntax ist einfach
- Live-Vorschau ist hilfreich

### Ressourcen
- [Mermaid-Dokumentation](https://mermaid.js.org/)

## Fragen
- Wie erstellt man komplexe Diagramme?
- Best Practices für Diagramm-Organisation?
```

## Tipps

### Konsistenz

- Notizen jeden Tag zur gleichen Zeit erstellen
- Konsistente Formatierung verwenden
- Den Tag über überprüfen und aktualisieren

### Organisation

- Überschriften für verschiedene Abschnitte verwenden
- Tags für einfaches Suchen hinzufügen
- Auf verwandte Notizen verlinken

### Überprüfung

- Wöchentliche Überprüfung der täglichen Notizen
- Wichtige Punkte in permanente Notizen extrahieren
- Alte Notizen archivieren oder zusammenfassen
