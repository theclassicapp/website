# Tag

I tag sono un modo potente per organizzare e categorizzare le tue note in Classic. Trova contenuti correlati istantaneamente.

## Creare Tag

### Tag Inline

Aggiungi tag direttamente nel contenuto della tua nota:

```markdown
# Note Riunione

Discussione della roadmap Q4 #lavoro #riunioni #pianificazione
```

### Usando il Pulsante Tag

1. Clicca l'icona tag nella barra degli strumenti
2. Digita il nome del tuo tag
3. Premi Invio

### Scorciatoia da Tastiera

| Piattaforma | Scorciatoia |
|-------------|-------------|
| **macOS** | `Cmd+T` |
| **Windows/Linux** | `Ctrl+T` |

## Sintassi Tag

### Tag Base

```markdown
#progetto #lavoro #importante
```

### Tag Nidificati

Crea gerarchie di tag con `/`:

```markdown
#lavoro/riunioni
#lavoro/progetti
#personale/hobby/lettura
```

### Tag Multi-parola

Usa trattini o underscore:

```markdown
#progetto-alpha
#note_riunione
#pianificazione-q4
```

## Gestire i Tag

### Visualizzare Tutti i Tag

1. Apri la barra laterale
2. Trova la sezione "Tag"
3. Vedi tutti i tuoi tag

### Tag Cloud

Visualizza i tuoi tag più usati:

- Tag più grandi = più note
- Clicca qualsiasi tag per filtrare
- Vedi il conteggio note per tag

### Rinominare Tag

1. Clic con il tasto destro su un tag
2. Seleziona "Rinomina"
3. Inserisci il nuovo nome
4. Tutte le note si aggiornano automaticamente

### Eliminare Tag

1. Clic con il tasto destro su un tag
2. Seleziona "Elimina"
3. Conferma l'eliminazione
4. Tag rimosso da tutte le note

## Ricerca per Tag

### Pannello Tag

Clicca un tag nella barra laterale per filtrare le note

### Sintassi di Ricerca

Usa `tag:` nella ricerca:

```
tag:lavoro
tag:lavoro/riunioni
```

### Combinare Tag

Trova note con tag multipli:

```
tag:lavoro tag:urgente
```

### Escludere Tag

Trova note senza un tag:

```
-tag:archiviato
```

## Best Practice per i Tag

### Mantienilo Semplice

- Usa 3-5 tag per nota
- Sii coerente con la nomenclatura
- Evita la proliferazione di tag

### Usa Gerarchie

Organizza tag correlati:

```
#lavoro
  #lavoro/riunioni
  #lavoro/progetti
  #lavoro/scadenze

#personale
  #personale/salute
  #personale/finanze
```

### Stabilisci Convenzioni

Definisci standard di tag per te stesso:

- **Stato**: `#todo` `#in-corso` `#completato`
- **Priorità**: `#urgente` `#alta` `#bassa`
- **Tipo**: `#riunione` `#riferimento` `#idea`

## Suggerimenti Tag

Mentre digiti `#`, Classic suggerisce tag esistenti:

- I tag recenti appaiono per primi
- Ricerca fuzzy supportata
- Premi Tab per accettare il suggerimento

## Statistiche Tag

Visualizza l'utilizzo dei tag nelle Impostazioni:

- Tag più usati
- Tag inutilizzati
- Tendenze dei tag nel tempo

## Casi d'Uso

### Gestione Progetti

```markdown
# Avvio Progetto #progetto-alpha #riunione #2024-01-15

Partecipanti: Team Alpha
Stato: #todo
```

### Base di Conoscenza

```markdown
# JavaScript Closures #programmazione #javascript #riferimento #avanzato

Le closures sono funzioni che hanno accesso a...
```

### Note Giornaliere

```markdown
# 2024-01-15

- Standup mattutino #lavoro #riunioni
- Code review #lavoro #sviluppo
- Sessione palestra #personale #salute
```

### Note di Lettura

```markdown
# Note Atomic Habits #lettura #libri #produttività

Spunti chiave dal libro...
```

## Scorciatoie da Tastiera

| Azione | Scorciatoia |
|--------|-------------|
| Aggiungi Tag | `Cmd/Ctrl+T` |
| Cerca Tag | `Cmd/Ctrl+F`, poi digita `tag:` |
| Mostra Pannello Tag | `Cmd/Ctrl+Shift+T` |

## Suggerimenti

### Nomenclatura Coerente

Atteniti a una convenzione:

```
✅ #note-riunione
✅ #note_riunione
❌ #Note Riunione (spazi non permessi)
❌ #noteRiunione (incoerente)
```

### Evita Eccesso di Tag

Troppi tag diventano ingestibili:

```
✅ #lavoro #urgente #progetto-alpha
❌ #lavoro #urgente #importante #oggi #lunedì #ufficio #scrivania #computer
```

### Pulizia Periodica

Rivedi e consolida i tag regolarmente:

- Unisci tag simili
- Rimuovi tag inutilizzati
- Aggiorna le convenzioni

## Funzionalità Avanzate

### Cartelle Smart Basate su Tag

Crea cartelle che si popolano automaticamente in base ai tag:

1. Crea nuova cartella
2. Imposta filtro: `tag:progetto`
3. Tutte le note taggate appaiono

### Tag in YAML

Aggiungi tag al frontmatter della nota:

```yaml
---
tags:
  - lavoro
  - riunioni
  - progetto-alpha
---
```

### Alias Tag

Imposta alias di tag nelle Impostazioni:

- `#todo` = `#attività` = `#azione`
- Consolida tag simili
