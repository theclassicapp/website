# Diagrammi Mermaid

Crea bellissimi diagrammi direttamente nelle tue note usando la sintassi Mermaid.

## Uso Base

Per creare un diagramma Mermaid, usa un blocco di codice con l'identificatore di linguaggio `mermaid`:

```mermaid
graph TD
    A[Inizio] --> B[Processo]
    B --> C[Fine]
```

## Diagramma di Flusso

```mermaid
flowchart TD
    A[Inizio] --> B{Funziona?}
    B -->|Sì| C[Ottimo!]
    B -->|No| D[Debug]
    D --> B
```

## Diagramma di Sequenza

```mermaid
sequenceDiagram
    participant Utente
    participant Browser
    participant Server

    Utente->>Browser: Clicca pulsante
    Browser->>Server: Invia richiesta
    Server-->>Browser: Restituisci dati
    Browser-->>Utente: Mostra risultato
```

## Diagramma delle Classi

```mermaid
classDiagram
    class Nota {
        +String titolo
        +String contenuto
        +DateTime creatoIl
        +salva()
    }
    class Tag {
        +String nome
        +aggiungiNota()
    }
    Nota "1" -- "*" Tag
```

## Diagramma di Stato

```mermaid
stateDiagram-v2
    [*] --> Bozza
    Bozza --> InCorso : Inizia modifica
    InCorso --> Revisione : Termina
    Revisione --> Pubblicato : Approva
    Revisione --> Bozza : Rifiuta
    Pubblicato --> [*]
```

## Diagramma di Gantt

```mermaid
gantt
    title Timeline Progetto
    dateFormat  YYYY-MM-DD
    section Pianificazione
        Ricerca     :a1, 2024-01-01, 30d
        Design      :2024-01-15, 20d
    section Sviluppo
        Backend     :2024-02-01, 45d
        Frontend    :2024-02-15, 30d
    section Testing
        QA Testing  :2024-03-01, 15d
```

## Grafico a Torta

```mermaid
pie showPets
    "Cani" : 386
    "Gatti" : 85
    "Conigli" : 15
```

## Mappa Mentale

```mermaid
mindmap
  root((Classic))
    Funzionalità((Funzionalità))
      Editor((Editor))
      Organizzazione((Organizzazione))
    Vantaggi((Vantaggi))
      Privacy((Privacy))
      Velocità((Velocità))
```

## Suggerimenti

### Stile

- Usa sottografi per organizzare diagrammi complessi
- Aggiungi stili e temi per coerenza visiva
- Mantieni i diagrammi semplici e leggibili

### Prestazioni

- Diagrammi grandi potrebbero rallentare l'editor
- Considera di suddividere diagrammi complessi in più piccoli
- Usa `%%{init: ... }%%` per la configurazione

### Problemi Comuni

**Il diagramma non viene renderizzato?**
- Controlla la sintassi Mermaid
- Assicurati che il blocco di codice abbia il linguaggio `mermaid`
- Cerca errori di sintassi nell'anteprima

**Il diagramma è troppo piccolo/grande?**
- Usa `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` per regolare le dimensioni

## Risorse

- [Documentazione Mermaid](https://mermaid.js.org/)
- [Editor Mermaid Live](https://mermaid.live/)
- [GitHub Mermaid](https://github.com/mermaid-js/mermaid)
