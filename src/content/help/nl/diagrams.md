# Mermaid Diagrammen

Maak prachtige diagrammen direct in je notities met Mermaid-syntax.

## Basisgebruik

Om een Mermaid-diagram te maken, gebruik je een codeblok met de `mermaid` taalidentificatie:

```mermaid
graph TD
    A[Start] --> B[Proces]
    B --> C[Einde]
```

## Stroomdiagram

```mermaid
flowchart TD
    A[Start] --> B{Werkt het?}
    B -->|Ja| C[Geweldig!]
    B -->|Nee| D[Debuggen]
    D --> B
```

## Sequentiediagram

```mermaid
sequenceDiagram
    participant Gebruiker
    participant Browser
    participant Server

    Gebruiker->>Browser: Klik knop
    Browser->>Server: Stuur verzoek
    Server-->>Browser: Retourneer data
    Browser-->>Gebruiker: Toon resultaat
```

## Klassediagram

```mermaid
classDiagram
    class Notitie {
        +String titel
        +String inhoud
        +DateTime aangemaaktOp
        +opslaan()
    }
    class Label {
        +String naam
        +notitieToevoegen()
    }
    Notitie "1" -- "*" Label
```

## Toestandsdiagram

```mermaid
stateDiagram-v2
    [*] --> Concept
    Concept --> InBehandeling : Start bewerken
    InBehandeling --> Review : Afronden
    Review --> Gepubliceerd : Goedkeuren
    Review --> Concept : Afkeuren
    Gepubliceerd --> [*]
```

## Gantt Chart

```mermaid
gantt
    title Project Tijdlijn
    dateFormat  YYYY-MM-DD
    section Planning
        Onderzoek     :a1, 2024-01-01, 30d
        Ontwerp       :2024-01-15, 20d
    section Ontwikkeling
        Backend       :2024-02-01, 45d
        Frontend      :2024-02-15, 30d
    section Testen
        QA Testen     :2024-03-01, 15d
```

## Cirkeldiagram

```mermaid
pie showPets
    "Honden" : 386
    "Katten" : 85
    "Konijnen" : 15
```

## Mindmap

```mermaid
mindmap
  root((Classic))
    Functies((Functies))
      Editor((Editor))
      Organisatie((Organisatie))
    Voordelen((Voordelen))
      Privacy((Privacy))
      Snelheid((Snelheid))
```

## Tips

### Styling

- Gebruik subgraphs om complexe diagrammen te organiseren
- Voeg stijlen en thema's toe voor visuele consistentie
- Houd diagrammen eenvoudig en leesbaar

### Prestaties

- Grote diagrammen kunnen de editor vertragen
- Overweeg om complexe diagrammen op te splitsen in kleinere
- Gebruik `%%{init: ... }%%` voor configuratie

### Veelvoorkomende Problemen

**Diagram wordt niet gerenderd?**
- Controleer Mermaid-syntax
- Zorg dat het codeblok `mermaid` als taal heeft
- Zoek naar syntaxfouten in het voorbeeld

**Diagram te klein/groot?**
- Gebruik `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` om de grootte aan te passen

## Bronnen

- [Mermaid Documentatie](https://mermaid.js.org/)
- [Mermaid Live Editor](https://mermaid.live/)
- [Mermaid GitHub](https://github.com/mermaid-js/mermaid)
