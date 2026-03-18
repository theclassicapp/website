# Rückverweise

Rückverweise zeigen Verbindungen zwischen Ihren Notizen und erstellen ein Netzwerk verwandter Ideen. Entdecken Sie Beziehungen, von denen Sie nicht wussten, dass sie existieren.

## Was sind Rückverweise?

Rückverweise zeigen, welche Notizen auf die aktuelle Notiz verweisen. Sie sind Verbindungen in Ihrem Wissensnetzwerk.

### Vorteile

- **Verbindungen entdecken**: Verwandte Notizen automatisch finden
- **Kontext**: Verstehen, wie Ideen zusammenhängen
- **Navigation**: Zwischen verbundenen Notizen springen
- **Wissensnetzwerk**: Ihr Denken visualisieren

## Wie Rückverweise funktionieren

Wenn Sie einen Link zu einer anderen Notiz erstellen, erstellt Classic automatisch einen Rückverweis.

```markdown
In Notiz A:
Siehe [[Projektplanung]] für Details.

Ergebnis:
- Notiz A verlinkt auf "Projektplanung"
- "Projektplanung" zeigt einen Rückverweis auf Notiz A
```

## Rückverweise anzeigen

### Rückverweis-Panel

Öffnen Sie das Rückverweis-Panel, um alle Referenzen zu sehen:

1. Beliebige Notiz öffnen
2. Auf das Rückverweis-Symbol in der Seitenleiste klicken
3. Alle Notizen sehen, die auf diese verweisen

### Inline-Rückverweise

Rückverweise erscheinen am Ende jeder Notiz:

- Zeigt Name der Quellnotiz
- Zeigt Kontext-Snippet
- Klicken zum Navigieren

## Links erstellen

### Wikilink-Syntax

Verwenden Sie doppelte eckige Klammern, um auf Notizen zu verlinken:

```markdown
[[Notiz Name]]
[[Eine andere Notiz]]
```

### Anzeigetext

Link-Text anpassen:

```markdown
[[Projekt Alpha|das Alpha-Projekt]]
[[Besprechungsnotizen|die gestrige Besprechung]]
```

### Auf Überschriften verlinken

Auf bestimmte Abschnitte verlinken:

```markdown
[[Notiz Name#Überschrift]]
[[Notiz Name#Abschnitt|zum Abschnitt springen]]
```

## Rückverweis-Typen

### Direkte Links

Explizite Wikilinks, die Sie erstellen:

```markdown
Verwandt: [[Ähnliche Notiz]]
```

### Unverknüpfte Erwähnungen

Notizen, die den Titel erwähnen, aber nicht verlinkt sind:

```markdown
Notiz erwähnt "Projekt Alpha", ist aber nicht verlinkt
```

Classic schlägt vor, diese in Links umzuwandeln.

## Rückverweis-Panel

### Funktionen

- **Filter**: Rückverweise durchsuchen
- **Sortieren**: Nach Datum, Name oder Relevanz
- **Vorschau**: Hover für Inhaltsvorschau
- **Kontext**: Umgebenden Text sehen

### Aktionen

- Klicken zum Öffnen der verlinkten Notiz
- Rechtsklick für Optionen
- Unverknüpfte Erwähnungen konvertieren

## Anwendungsfälle

### Wissensmanagement

Erstellen Sie ein persönliches Wiki:

```markdown
# Maschinelles Lernen

Verwandt mit [[Künstliche Intelligenz]]
Baut auf [[Statistik]] auf
Verwendet in [[Natürliche Sprachverarbeitung]]
```

### Projektdokumentation

Verbinden Sie verwandte Dokumente:

```markdown
# API-Design

Referenziert [[Datenbankschema]]
Hängt ab von [[Authentifizierungsfluss]]
Siehe auch [[Frontend-Integration]]
```

### Recherche

Verknüpfen Sie Konzepte und Quellen:

```markdown
# Forschungsnotizen

Basiert auf [[Quellpapier A]]
Widerspricht [[Quellpapier B]]
Unterstützt [[Hypothese 1]]
```

### Besprechungsnotizen

Verbinden Sie Besprechungen mit Projekten:

```markdown
# Besprechung: Q4-Planung

Projekt: [[Projekt Alpha]]
Vorherige: [[Q3-Review]]
Nächste: [[Q4-Kickoff]]
```

## Graph-Ansicht

Visualisieren Sie Ihre Rückverweise als Netzwerk:

1. Graph-Ansicht öffnen (`Cmd/Ctrl+G`)
2. Alle Notizen als Knoten sehen
3. Linien zeigen Verbindungen
4. Knoten anklicken zum Navigieren

### Graph-Steuerung

- **Zoom**: Scrollen zum Zoomen
- **Verschieben**: Ziehen zum Bewegen
- **Filter**: Nach Tag ein-/ausblenden
- **Fokus**: Verbindungen einer Notiz hervorheben

## Tipps

### Großzügig verlinken

Erstellen Sie Links, wann immer Sie auf ein anderes Konzept verweisen:

```markdown
✅ Gut:
Die [[Q4-Roadmap]] und [[Budget-Zuweisung]] besprochen.

❌ Vermeiden:
Die Q4-Roadmap und Budget-Zuweisung besprochen.
```

### Konsistente Namen verwenden

Passen Sie genau auf Notiztitel für zuverlässiges Verlinken:

```markdown
✅ [[Besprechungsnotizen]]
❌ [[besprechungsnotizen]] (Groß-/Kleinschreibung wichtig)
```

### Rückverweise überprüfen

Überprüfen Sie regelmäßig Rückverweise, um:

- Vergessene Verbindungen zu entdecken
- Notizen zum Zusammenführen zu finden
- Wissenslücken zu identifizieren

### Link-Vorschau

Über Links fahren, um ohne Öffnen eine Vorschau zu sehen:

- Erste Zeilen sehen
- Überprüfen, ob es die richtige Notiz ist
- Schnelle Referenz

## Tastaturkürzel

| Aktion | Tastenkombination |
|--------|-------------------|
| Rückverweise öffnen | `Cmd/Ctrl+Shift+B` |
| Link erstellen | `[[` (auto-vervollständigt) |
| Graph-Ansicht öffnen | `Cmd/Ctrl+G` |
| Links navigieren | `Tab` durch Links |

## Erweiterte Funktionen

### Einbettung

Inhalt aus anderen Notizen einbetten:

```markdown
![[Notiz Name]]
![[Notiz Name#Abschnitt]]
```

### Transklusion

Inhalte inline einfügen:

```markdown
## Verwandter Inhalt
![[Gemeinsame Vorlage#Kopfzeile]]
```

### Link-Färbung

Links ändern die Farbe basierend auf:

- **Blau**: Nicht besuchter Link
- **Lila**: Besuchter Link
- **Rot**: Kaputter Link (Notiz existiert nicht)

## Fehlerbehebung

### Fehlende Rückverweise

- Link-Syntax überprüfen `[[Notiz Name]]`
- Stellen Sie sicher, dass der Notiztitel genau stimmt
- Rückverweis-Panel aktualisieren

### Kaputte Links

- Notiz wurde möglicherweise umbenannt
- Notiz wurde möglicherweise gelöscht
- Suche verwenden, um die richtige Notiz zu finden

### Doppelte Links

- Ähnliche Notizen konsolidieren
- Weiterleitungen für umbenannte Notizen verwenden
- Auf Titelvariationen überprüfen
