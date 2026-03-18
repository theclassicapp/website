# Note Giornaliere

Le Note Giornaliere creano automaticamente una nuova nota per ogni giorno, perfette per il journaling, la pianificazione giornaliera o la cattura di informazioni basate sul tempo.

## Come Funziona

### Creazione Automatica

- Viene creata una nuova nota per ogni giorno
- Le note sono nominate usando il formato data (es., `2024-01-15.md`)
- Le note dei giorni precedenti sono preservate e ricercabili

### Accesso alle Note Giornaliere

1. Clicca **Note Giornaliere** nella barra laterale
2. Oppure premi `Ctrl/Cmd+D`
3. La nota di oggi si apre automaticamente

## Template Nota Giornaliera

Personalizza il template per le nuove note giornaliere:

### Template Predefinito

```markdown
# {{date}}

## Attività
- [ ]
- [ ]

## Note


## Diario

```

### Personalizzazione

1. Apri Impostazioni
2. Vai su Note Giornaliere
3. Modifica il template
4. Usa `{{date}}` per la data corrente

### Variabili Template

| Variabile | Descrizione |
|-----------|-------------|
| `{{date}}` | Data corrente (YYYY-MM-DD) |
| `{{time}}` | Ora corrente (HH:mm) |
| `{{weekday}}` | Nome giorno (Lunedì, ecc.) |

## Funzionalità

### Navigazione Date

- **Precedente/Successiva**: Naviga tra i giorni
- **Calendario**: Salta a date specifiche
- **Ricerca**: Trova contenuto in tutte le note giornaliere

### Link Automatico

- Le note create nello stesso giorno sono linkate automaticamente
- I backlink mostrano connessioni tra giorni
- I tag funzionano in tutte le note giornaliere

### Integrazione

- **Cattura Rapida**: Aggiungi alla nota di oggi con `#oggi`
- **Vista Calendario**: Panoramica visiva delle tue note giornaliere
- **Statistiche**: Traccia le tue serie di scrittura

## Best Practice

### Journaling Giornaliero

```markdown
# 2024-01-15

## Mattina
- Svegliato alle 6:30
- Umore: Energico

## Attività
- [x] Allenamento mattutino
- [ ] Revisiona PR
- [ ] Riunione team alle 14:00

## Apprendimenti
- Scoperta una nuova scorciatoia da tastiera
- Imparato sui diagrammi Mermaid

## Domani
- Concentrati sulla documentazione
- Pianifica code review
```

### Note Riunione

```markdown
# 2024-01-15

## Standup Team

**Partecipanti**: Alice, Bob, Carol

### Aggiornamenti
- Alice: Completata integrazione API
- Bob: Lavorando su componenti UI
- Carol: Testing in corso

### Blocchi
- In attesa di revisione design

### Azioni
- [ ] Alice: Deploy su staging
- [ ] Bob: Completa libreria componenti
- [ ] Carol: Scrivi test di integrazione
```

### Registro Apprendimenti

```markdown
# 2024-01-15

## Oggi Ho Imparato

### Diagrammi Mermaid
- Posso creare flowchart in Markdown
- La sintassi è semplice
- L'anteprima live è utile

### Risorse
- [Documentazione Mermaid](https://mermaid.js.org/)

## Domande
- Come creare diagrammi complessi?
- Best practice per organizzazione diagrammi?
```

## Suggerimenti

### Coerenza

- Crea note alla stessa ora ogni giorno
- Usa formattazione coerente
- Rivedi e aggiorna durante il giorno

### Organizzazione

- Usa intestazioni per sezioni diverse
- Aggiungi tag per ricerca facile
- Linka a note correlate

### Revisione

- Revisione settimanale delle note giornaliere
- Estrai elementi importanti in note permanenti
- Archivia o riassumi vecchie note
