# Suche

Finden Sie jede Notiz sofort mit Classics leistungsstarker Suche. Volltextsuche, Filter und Operatoren helfen Ihnen, genau das zu finden, was Sie brauchen.

## Grundlegende Suche

### Suche öffnen

| Plattform | Tastenkombination |
|----------|-------------------|
| **macOS** | `Cmd+F` |
| **Windows/Linux** | `Ctrl+F` |

Oder klicken Sie auf die Suchleiste in der Seitenleiste.

### Wie es funktioniert

1. Suche öffnen
2. Mit der Eingabe beginnen
3. Ergebnisse erscheinen sofort
4. Klicken zum Öffnen einer Notiz

## Suchfunktionen

### Volltextsuche

Classic durchsucht:

- Notiztitel
- Notizinhalt
- Tags
- Dateinamen

### Echtzeit-Ergebnisse

Ergebnisse werden während des Tippens aktualisiert:

- Keine Eingabetaste erforderlich
- Sofortiges Feedback
- Fuzzy-Matching aktiviert

### Suchhervorhebung

Gefundene Begriffe werden in Ergebnissen hervorgehoben:

- Kontext um Treffer sehen
- Relevante Notizen schnell identifizieren

## Suchoperatoren

### Exakte Übereinstimmung

Verwenden Sie Anführungszeichen für exakte Phrasen:

```
"projektplanung"
"besprechungsnotizen"
```

### Tag-Suche

Finden Sie Notizen mit bestimmten Tags:

```
tag:arbeit
tag:besprechungen
tag:dringend
```

### Begriffe ausschließen

Verwenden Sie `-` zum Ausschließen:

```
projekt -archiviert
besprechung -abgesagt
```

### ODER-Suche

Finden Sie Notizen mit einem beliebigen Begriff:

```
projekt OR initiative
```

### Datumsbereich

Nach Datum suchen:

```
created:2024-01-01..2024-12-31
modified:letzte-woche
```

### Dateityp

Nach Erweiterung filtern:

```
ext:md
ext:txt
```

## Erweiterte Suche

### Operatoren kombinieren

Erstellen Sie komplexe Abfragen:

```
tag:arbeit -tag:archiviert created:letzte-woche
"besprechung" tag:projekt-alpha
```

### Pfad-Suche

In Ordnern suchen:

```
path:Projekte/
path:Archiv/
```

### Titelsuche

Nur Titel durchsuchen:

```
title:Roadmap
title:Besprechung
```

### Inhaltssuche

Nur Inhalte durchsuchen (Titel ausschließen):

```
content:wichtig
content:frist
```

## Suchfilter

### Nach Tag

1. Suche eingeben
2. Auf einen Tag klicken zum Filtern
3. Ergebnisse werden auf getaggte Notizen eingeschränkt

### Nach Datum

Nach Änderungsdatum filtern:

- Heute
- Diese Woche
- Dieser Monat
- Benutzerdefinierter Bereich

### Nach Ordner

Suche auf einen Ordner beschränken:

1. Rechtsklick auf einen Ordner
2. "In Ordner suchen" auswählen
3. Ergebnisse auf diesen Ordner beschränkt

## Suchergebnisse

### Sortierung

Ergebnisse sortieren nach:

- **Relevanz** (Standard)
- **Änderungsdatum** (neueste zuerst)
- **Erstellungsdatum** (neueste zuerst)
- **Titel** (alphabetisch)

### Ergebnisvorschau

Über Ergebnisse fahren für Vorschau:

- Erste Zeilen werden angezeigt
- Passende Begriffe hervorgehoben
- Tags werden angezeigt

### Kontext

Sehen, wo der Treffer auftrat:

- Zeigt umgebenden Text
- Hebt den Treffer hervor
- Klicken zum Springen zur Stelle

## Suchverlauf

### Zuletzt verwendete Suchen

Auf frühere Suchen zugreifen:

1. In die Suchleiste klicken
2. Zuletzt verwendete Suchen sehen
3. Klicken zum erneuten Ausführen

### Verlauf löschen

1. Einstellungen öffnen
2. Zu Datenschutz gehen
3. "Suchverlauf löschen" klicken

## Tipps

### Spezifische Begriffe verwenden

Spezifischer = bessere Ergebnisse:

```
✅ "Q4 Marketing-Budget"
❌ Budget
```

### Mit Tags kombinieren

Ergebnisse schnell einschränken:

```
projekt tag:dringend
```

### Ausschlüsse verwenden

Störende Ergebnisse herausfiltern:

```
besprechung -tag:archiviert
```

### Häufige Suchen speichern

Gespeicherte Suchen erstellen:

1. Suche eingeben
2. "Suche speichern" klicken
3. Benennen
4. Von der Seitenleiste aus zugreifen

## Tastaturnavigation

| Aktion | Tastenkombination |
|--------|-------------------|
| Suche öffnen | `Cmd/Ctrl+F` |
| Nächstes Ergebnis | `Eingabetaste` oder `Down` |
| Vorheriges Ergebnis | `Shift+Eingabetaste` oder `Up` |
| Suche schließen | `Escape` |

## Sucheinstellungen

### In Einstellungen anpassen

| Einstellung | Optionen |
|-------------|----------|
| Groß-/Kleinschreibung | Ein/Aus |
| Titel durchsuchen | Ein/Aus |
| Inhalt durchsuchen | Ein/Aus |
| Tags durchsuchen | Ein/Aus |
| Archivierte einbeziehen | Ein/Aus |

## Anwendungsfälle

### Alte Notizen finden

```
"besprechung" date:letztes-jahr
```

### Projekt-Recherche

```
path:Projekte/ tag:recherche
```

### Aktionspunkte

```
"TODO" OR "FIXME" -tag:erledigt
```

### Aktuelle Arbeit

```
modified:diese-woche
```

## Fehlerbehebung

### Keine Ergebnisse gefunden

- Rechtschreibung überprüfen
- Filter entfernen
- Breitere Begriffe versuchen
- Überprüfen, ob Notiz archiviert ist

### Langsame Suche

- Große Notizsammlungen können länger dauern
- Groß-/Kleinschreibung deaktivieren
| Suchbereich reduzieren

### Fehlende Notizen

- Notiz könnte in einem anderen Ordner sein
- Überprüfen, ob Tag korrekt ist
| Verifizieren, dass Notiz nicht archiviert ist
