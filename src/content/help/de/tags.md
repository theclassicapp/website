# Tags

Tags sind eine leistungsstarke Möglichkeit, Ihre Notizen in Classic zu organisieren und zu kategorisieren. Finden Sie verwandte Inhalte sofort.

## Tags erstellen

### Inline-Tags

Fügen Sie Tags direkt in Ihren Notizinhalt ein:

```markdown
# Besprechungsnotizen

Q4-Roadmap besprochen #arbeit #besprechungen #planung
```

### Über die Tag-Schaltfläche

1. Klicken Sie auf das Tag-Symbol in der Symbolleiste
2. Geben Sie Ihren Tag-Namen ein
3. Drücken Sie Eingabetaste

### Tastaturkürzel

| Plattform | Tastenkombination |
|----------|-------------------|
| **macOS** | `Cmd+T` |
| **Windows/Linux** | `Ctrl+T` |

## Tag-Syntax

### Grundlegende Tags

```markdown
#projekt #arbeit #wichtig
```

### Verschachtelte Tags

Erstellen Sie Tag-Hierarchien mit `/`:

```markdown
#arbeit/besprechungen
#arbeit/projekte
#persönlich/hobbys/lesen
```

### Mehrwort-Tags

Verwenden Sie Bindestriche oder Unterstriche:

```markdown
#projekt-alpha
#besprechungs_notizen
#q4-planung
```

## Tags verwalten

### Alle Tags anzeigen

1. Öffnen Sie die Seitenleiste
2. Finden Sie den Abschnitt "Tags"
3. Sehen Sie alle Ihre Tags

### Tag-Wolke

Visualisieren Sie Ihre am häufigsten verwendeten Tags:

- Größere Tags = mehr Notizen
- Beliebigen Tag zum Filtern anklicken
- Notizenanzahl pro Tag sehen

### Tags umbenennen

1. Rechtsklick auf einen Tag
2. "Umbenennen" auswählen
3. Neuen Namen eingeben
4. Alle Notizen werden automatisch aktualisiert

### Tags löschen

1. Rechtsklick auf einen Tag
2. "Löschen" auswählen
3. Löschung bestätigen
4. Tag wird aus allen Notizen entfernt

## Nach Tags suchen

### Tag-Panel

Klicken Sie auf einen Tag in der Seitenleiste, um Notizen zu filtern.

### Suchsyntax

Verwenden Sie `tag:` in der Suche:

```
tag:arbeit
tag:arbeit/besprechungen
```

### Tags kombinieren

Finden Sie Notizen mit mehreren Tags:

```
tag:arbeit tag:dringend
```

### Tags ausschließen

Finden Sie Notizen ohne einen Tag:

```
-tag:archiviert
```

## Tag-Best Practices

### Halten Sie es einfach

- 3-5 Tags pro Notiz verwenden
- Konsistent bei der Benennung sein
- Tag-Vermehrung vermeiden

### Hierarchien verwenden

Organisieren Sie verwandte Tags:

```
#arbeit
  #arbeit/besprechungen
  #arbeit/projekte
  #arbeit/fristen

#persönlich
  #persönlich/gesundheit
  #persönlich/finanzen
```

### Konventionen festlegen

Definieren Sie Tag-Standards für sich selbst:

- **Status**: `#todo` `#in-bearbeitung` `#erledigt`
- **Priorität**: `#dringend` `#hoch` `#niedrig`
- **Typ**: `#besprechung` `#referenz` `#idee`

## Tag-Vorschläge

Während Sie `#` eingeben, schlägt Classic vorhandene Tags vor:

- Zuletzt verwendete Tags erscheinen zuerst
- Fuzzy-Matching wird unterstützt
- Tab drücken, um Vorschlag zu akzeptieren

## Tag-Statistiken

Tag-Verwendung in den Einstellungen anzeigen:

- Meistverwendete Tags
- Unbenutzte Tags
- Tag-Trends im Zeitverlauf

## Anwendungsfälle

### Projektmanagement

```markdown
# Projekt-Kickoff #projekt-alpha #besprechung #2024-01-15

Teilnehmer: Team Alpha
Status: #todo
```

### Wissensdatenbank

```markdown
# JavaScript Closures #programmierung #javascript #referenz #fortgeschritten

Closures sind Funktionen, die Zugriff haben auf...
```

### Tägliche Notizen

```markdown
# 2024-01-15

- Morgen-Standup #arbeit #besprechungen
- Code-Review #arbeit #entwicklung
- Fitness-Training #persönlich #gesundheit
```

### Lesenotizen

```markdown
# Atomic Habits Notizen #lesen #bücher #produktivität

Wichtigste Erkenntnisse aus dem Buch...
```

## Tastaturkürzel

| Aktion | Tastenkombination |
|--------|-------------------|
| Tag hinzufügen | `Cmd/Ctrl+T` |
| Tags suchen | `Cmd/Ctrl+F`, dann `tag:` eingeben |
| Tag-Panel anzeigen | `Cmd/Ctrl+Shift+T` |

## Tipps

### Konsistente Benennung

Halten Sie sich an eine Konvention:

```
✅ #besprechungs-notizen
✅ #besprechungs_notizen
❌ #Besprechung Notizen (Leerzeichen nicht erlaubt)
❌ #besprechungsNotizen (inkonsistent)
```

### Über-Tagging vermeiden

Zu viele Tags werden unübersichtlich:

```
✅ #arbeit #dringend #projekt-alpha
❌ #arbeit #dringend #wichtig #heute #montag #büro #schreibtisch #computer
```

### Regelmäßige Bereinigung

Überprüfen und konsolidieren Sie Tags regelmäßig:

- Ähnliche Tags zusammenführen
- Unbenutzte Tags entfernen
- Konventionen aktualisieren

## Erweiterte Funktionen

### Tag-basierte intelligente Ordner

Erstellen Sie Ordner, die automatisch basierend auf Tags befüllt werden:

1. Neuen Ordner erstellen
2. Filter setzen: `tag:projekt`
3. Alle getaggten Notizen erscheinen

### Tags in YAML

Fügen Sie Tags zum Notiz-Frontmatter hinzu:

```yaml
---
tags:
  - arbeit
  - besprechungen
  - projekt-alpha
---
```

### Tag-Aliase

Richten Sie Tag-Aliase in den Einstellungen ein:

- `#todo` = `#aufgabe` = `#aktion`
- Ähnliche Tags konsolidieren
