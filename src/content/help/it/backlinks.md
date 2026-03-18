# Backlink

I backlink mostrano le connessioni tra le tue note, creando una rete di idee correlate. Scopri relazioni che non sapevi esistessero.

## Cosa Sono i Backlink?

I backlink mostrano quali note linkano alla nota corrente. Sono connessioni nel tuo grafo di conoscenza.

### Vantaggi

- **Scopri connessioni**: Trova note correlate automaticamente
- **Contesto**: Comprendi come le idee si relazionano
- **Navigazione**: Passa tra note connesse
- **Grafo di conoscenza**: Visualizza il tuo pensiero

## Come Funzionano i Backlink

Quando crei un link a un'altra nota, Classic crea automaticamente un backlink.

```markdown
Nella nota A:
Vedi [[Pianificazione Progetto]] per i dettagli.

Risultato:
- La nota A linka a "Pianificazione Progetto"
- "Pianificazione Progetto" mostra un backlink alla Nota A
```

## Visualizzare i Backlink

### Pannello Backlink

Apri il pannello backlink per vedere tutti i riferimenti:

1. Apri qualsiasi nota
2. Clicca l'icona backlink nella barra laterale
3. Vedi tutte le note che linkano a questa

### Backlink Inline

I backlink appaiono in fondo a ogni nota:

- Mostra il nome della nota sorgente
- Visualizza uno snippet di contesto
- Clicca per navigare

## Creare Link

### Sintassi Wikilink

Usa doppie parentesi quadre per linkare note:

```markdown
[[Nome Nota]]
[[Altra Nota]]
```

### Testo Visualizzato

Personalizza il testo del link:

```markdown
[[Progetto Alpha|il progetto alpha]]
[[Note Riunione|la riunione di ieri]]
```

### Linka a Intestazioni

Collega a sezioni specifiche:

```markdown
[[Nome Nota#Intestazione]]
[[Nome Nota#Sezione|vai alla sezione]]
```

## Tipi di Backlink

### Link Diretti

Wikilink espliciti che crei:

```markdown
Correlato: [[Nota Simile]]
```

### Menzioni Non Linkate

Note che menzionano il titolo ma non sono linkate:

```markdown
La nota menziona "Progetto Alpha" ma non è linkata
```

Classic suggerisce di convertire queste in link.

## Pannello Backlink

### Funzionalità

- **Filtro**: Cerca tra i backlink
- **Ordinamento**: Per data, nome o rilevanza
- **Anteprima**: Passa il mouse per anteprima contenuto
- **Contesto**: Vedi il testo circostante

### Azioni

- Clicca per aprire la nota linkata
- Clic con il tasto destro per opzioni
- Converti menzioni non linkate

## Casi d'Uso

### Gestione della Conoscenza

Costruisci un wiki personale:

```markdown
# Machine Learning

Correlato a [[Intelligenza Artificiale]]
Costruito su [[Statistica]]
Usato in [[Natural Language Processing]]
```

### Documentazione Progetto

Collega documenti correlati:

```markdown
# Design API

Riferimenti [[Schema Database]]
Dipende da [[Flusso Autenticazione]]
Vedi anche [[Integrazione Frontend]]
```

### Ricerca

Collega concetti e fonti:

```markdown
# Note di Ricerca

Basato su [[Paper Fonte A]]
Contraddice [[Paper Fonte B]]
Supporta [[Ipotesi 1]]
```

### Note Riunione

Collega riunioni a progetti:

```markdown
# Riunione: Pianificazione Q4

Progetto: [[Progetto Alpha]]
Precedente: [[Revisione Q3]]
Prossima: [[Kickoff Q4]]
```

## Vista Grafo

Visualizza i tuoi backlink come una rete:

1. Apri Vista Grafo (`Cmd/Ctrl+G`)
2. Vedi tutte le note come nodi
3. Le linee mostrano le connessioni
4. Clicca i nodi per navigare

### Controlli Grafo

- **Zoom**: Scorri per zoomare
- **Pan**: Trascina per spostare
- **Filtro**: Mostra/nascondi per tag
- **Focus**: Evidenzia le connessioni di una nota

## Suggerimenti

### Linka Generosamente

Crea link ogni volta che referenzi un altro concetto:

```markdown
✅ Buono:
Discusso della [[Roadmap Q4]] e [[Allocazione Budget]].

❌ Evita:
Discusso della Roadmap Q4 e Allocazione Budget.
```

### Usa Nomi Coerenti

Corrispondi esattamente ai titoli delle note per link affidabili:

```markdown
✅ [[Note Riunione]]
❌ [[note riunione]] (le maiuscole contano)
```

### Rivedi i Backlink

Controlla periodicamente i backlink per:

- Scoprire connessioni dimenticate
- Trovare note da unire
- Identificare lacune nella conoscenza

### Anteprima Link

Passa il mouse sui link per anteprima senza aprire:

- Vedi le prime righe
- Controlla se è la nota giusta
- Riferimento rapido

## Scorciatoie da Tastiera

| Azione | Scorciatoia |
|--------|-------------|
| Apri Backlink | `Cmd/Ctrl+Shift+B` |
| Crea Link | `[[` (auto-completamento) |
| Apri Vista Grafo | `Cmd/Ctrl+G` |
| Naviga Link | `Tab` attraverso i link |

## Funzionalità Avanzate

### Embedding

Incorpora contenuto da altre note:

```markdown
![[Nome Nota]]
![[Nome Nota#Sezione]]
```

### Transclusione

Includi contenuto inline:

```markdown
## Contenuto Correlato
![[Template Condiviso#Intestazione]]
```

### Colorazione Link

I link cambiano colore in base a:

- **Blu**: Link non visitato
- **Viola**: Link visitato
- **Rosso**: Link rotto (la nota non esiste)

## Risoluzione Problemi

### Backlink Mancanti

- Controlla la sintassi del link `[[Nome Nota]]`
- Verifica che il titolo della nota corrisponda esattamente
- Aggiorna il pannello backlink

### Link Rotti

- La nota potrebbe essere stata rinominata
- La nota potrebbe essere stata eliminata
- Usa la ricerca per trovare la nota corretta

### Link Duplicati

- Consolida note simili
- Usa reindirizzamenti per note rinominate
- Controlla variazioni del titolo
