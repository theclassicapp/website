# Mermaid-Diagramme

Erstellen Sie schöne Diagramme direkt in Ihren Notizen mit Mermaid-Syntax.

## Grundlegende Verwendung

Um ein Mermaid-Diagramm zu erstellen, verwenden Sie einen Codeblock mit dem `mermaid` Sprachkennzeichner:

```mermaid
graph TD
    A[Start] --> B[Verarbeitung]
    B --> C[Ende]
```

## Flussdiagramm

```mermaid
flowchart TD
    A[Start] --> B{Funktioniert es?}
    B -->|Ja| C[Toll!]
    B -->|Nein| D[Debuggen]
    D --> B
```

## Sequenzdiagramm

```mermaid
sequenceDiagram
    participant Benutzer
    participant Browser
    participant Server

    Benutzer->>Browser: Button klicken
    Browser->>Server: Anfrage senden
    Server-->>Browser: Daten zurückgeben
    Browser-->>Benutzer: Ergebnis anzeigen
```

## Klassendiagramm

```mermaid
classDiagram
    class Notiz {
        +String titel
        +String inhalt
        +DateTime erstelltAm
        +speichern()
    }
    class Tag {
        +String name
        +notizHinzufuegen()
    }
    Notiz "1" -- "*" Tag
```

## Zustandsdiagramm

```mermaid
stateDiagram-v2
    [*] --> Entwurf
    Entwurf --> InBearbeitung : Bearbeitung starten
    InBearbeitung --> Überprüfung : Fertigstellen
    Überprüfung --> Veröffentlicht : Genehmigen
    Überprüfung --> Entwurf : Ablehnen
    Veröffentlicht --> [*]
```

## Gantt-Diagramm

```mermaid
gantt
    title Projektzeitplan
    dateFormat  YYYY-MM-DD
    section Planung
        Recherche     :a1, 2024-01-01, 30d
        Design        :2024-01-15, 20d
    section Entwicklung
        Backend       :2024-02-01, 45d
        Frontend      :2024-02-15, 30d
    section Test
        QA-Tests      :2024-03-01, 15d
```

## Tortendiagramm

```mermaid
pie showPets
    "Hunde" : 386
    "Katzen" : 85
    "Kaninchen" : 15
```

## Mindmap

```mermaid
mindmap
  root((Classic))
    Funktionen((Funktionen))
      Editor((Editor))
      Organisation((Organisation))
    Vorteile((Vorteile))
      Datenschutz((Datenschutz))
      Geschwindigkeit((Geschwindigkeit))
```

## Tipps

### Gestaltung

- Verwenden Sie Subgraphen, um komplexe Diagramme zu organisieren
- Fügen Sie Stile und Themen für visuelle Konsistenz hinzu
- Halten Sie Diagramme einfach und lesbar

### Leistung

- Große Diagramme können den Editor verlangsamen
- Erwägen Sie, komplexe Diagramme in kleinere aufzuteilen
- Verwenden Sie `%%{init: ... }%%` für Konfiguration

### Häufige Probleme

**Diagramm wird nicht gerendert?**
- Überprüfen Sie die Mermaid-Syntax
- Stellen Sie sicher, dass der Codeblock die `mermaid` Sprachkennzeichnung hat
- Suchen Sie nach Syntaxfehlern in der Vorschau

**Diagramm zu klein/groß?**
- Verwenden Sie `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` zur Größenanpassung

## Ressourcen

- [Mermaid-Dokumentation](https://mermaid.js.org/)
- [Mermaid Live Editor](https://mermaid.live/)
- [Mermaid GitHub](https://github.com/mermaid-js/mermaid)
