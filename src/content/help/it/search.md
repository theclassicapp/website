# Ricerca

Trova qualsiasi nota istantaneamente con la potente ricerca di Classic. Ricerca full-text, filtri e operatori ti aiutano a localizzare esattamente ciò di cui hai bisogno.

## Ricerca Base

### Apertura Ricerca

| Piattaforma | Scorciatoia |
|-------------|-------------|
| **macOS** | `Cmd+F` |
| **Windows/Linux** | `Ctrl+F` |

Oppure clicca la barra di ricerca nella barra laterale.

### Come Funziona

1. Apri ricerca
2. Inizia a digitare
3. I risultati appaiono istantaneamente
4. Clicca per aprire una nota

## Funzionalità di Ricerca

### Ricerca Full-Text

Classic cerca attraverso:

- Titoli delle note
- Contenuto delle note
- Tag
- Nomi file

### Risultati in Tempo Reale

I risultati si aggiornano mentre digiti:

- Non serve premere Invio
- Feedback istantaneo
- Ricerca fuzzy abilitata

### Evidenziazione Ricerca

I termini trovati sono evidenziati nei risultati:

- Vedi il contesto attorno alle corrispondenze
- Identifica rapidamente le note rilevanti

## Operatori di Ricerca

### Corrispondenza Esatta

Usa virgolette per frasi esatte:

```
"pianificazione progetto"
"note riunione"
```

### Ricerca per Tag

Trova note con tag specifici:

```
tag:lavoro
tag:riunioni
tag:urgente
```

### Escludi Termini

Usa `-` per escludere:

```
progetto -archiviato
riunione -cancellato
```

### Ricerca OR

Trova note con qualsiasi termine:

```
progetto OR iniziativa
```

### Intervallo Date

Cerca per data:

```
created:2024-01-01..2024-12-31
modified:last-week
```

### Tipo File

Filtra per estensione:

```
ext:md
ext:txt
```

## Ricerca Avanzata

### Combinare Operatori

Costruisci query complesse:

```
tag:lavoro -tag:archiviato created:last-week
"riunione" tag:progetto-alpha
```

### Ricerca per Percorso

Cerca dentro cartelle:

```
path:Progetti/
path:Archivio/
```

### Ricerca Titolo

Cerca solo nei titoli:

```
title:Roadmap
title:Riunione
```

### Ricerca Contenuto

Cerca solo nel contenuto (escludi titoli):

```
content:importante
content:scadenza
```

## Filtri di Ricerca

### Per Tag

1. Digita la tua ricerca
2. Clicca un tag per filtrare
3. I risultati si restringono alle note taggate

### Per Data

Filtra per data di modifica:

- Oggi
- Questa settimana
- Questo mese
- Intervallo personalizzato

### Per Cartella

Limita la ricerca a una cartella:

1. Clic con il tasto destro su una cartella
2. Seleziona "Cerca nella Cartella"
3. Risultati limitati a quella cartella

## Risultati di Ricerca

### Ordinamento

Ordina risultati per:

- **Rilevanza** (predefinito)
- **Data Modifica** (più recenti prima)
- **Data Creazione** (più recenti prima)
- **Titolo** (alfabetico)

### Anteprima Risultati

Passa il mouse sui risultati per anteprima:

- Mostrate le prime righe
- Termini corrispondenti evidenziati
- Tag visualizzati

### Contesto

Vedi dove si è verificata la corrispondenza:

- Mostra testo circostante
- Evidenzia la corrispondenza
- Clicca per saltare alla posizione

## Cronologia Ricerca

### Ricerche Recenti

Accedi alle ricerche precedenti:

1. Clicca nella barra di ricerca
2. Vedi le ricerche recenti
3. Clicca per rieseguire

### Cancellare Cronologia

1. Apri Impostazioni
2. Vai su Privacy
3. Clicca "Cancella Cronologia Ricerca"

## Suggerimenti

### Usa Termini Specifici

Più specifico = risultati migliori:

```
✅ "Budget marketing Q4"
❌ budget
```

### Combina con Tag

Restringi rapidamente i risultati:

```
progetto tag:urgente
```

### Usa Esclusioni

Filtra il rumore:

```
riunione -tag:archiviato
```

### Salva Ricerche Frequenti

Crea ricerche salvate:

1. Inserisci la tua ricerca
2. Clicca "Salva Ricerca"
3. Dalle un nome
4. Accedi dalla barra laterale

## Navigazione da Tastiera

| Azione | Scorciatoia |
|--------|-------------|
| Apri Ricerca | `Cmd/Ctrl+F` |
| Risultato Successivo | `Invio` o `Giù` |
| Risultato Precedente | `Shift+Invio` o `Su` |
| Chiudi Ricerca | `Escape` |

## Impostazioni Ricerca

### Personalizza nelle Impostazioni

| Impostazione | Opzioni |
|--------------|---------|
| Case Sensitive | On/Off |
| Cerca Titoli | On/Off |
| Cerca Contenuto | On/Off |
| Cerca Tag | On/Off |
| Includi Archiviati | On/Off |

## Casi d'Uso

### Trovare Vecchie Note

```
"riunione" date:last-year
```

### Ricerca Progetto

```
path:Progetti/ tag:ricerca
```

### Elementi Azione

```
"TODO" OR "FIXME" -tag:completato
```

### Lavoro Recente

```
modified:this-week
```

## Risoluzione Problemi

### Nessun Risultato Trovato

- Controlla l'ortografia
- Rimuovi i filtri
- Prova termini più ampi
- Controlla se la nota è archiviata

### Ricerca Lenta

- Grandi collezioni di note potrebbero richiedere più tempo
- Disabilita case sensitivity
- Riduci l'ambito della ricerca

### Note Mancanti

- La nota potrebbe essere in una cartella diversa
- Controlla se il tag è corretto
- Verifica che la nota non sia archiviata
