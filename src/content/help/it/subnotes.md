# Sottonote

Le sottonote ti permettono di creare note nidificate e gerarchiche in Classic. Organizza argomenti complessi in parti gestibili.

## Cosa Sono le Sottonote?

Le sottonote sono note dentro note—un modo per creare strutture di contenuto gerarchiche.

### Vantaggi

- **Organizzazione**: Suddividi argomenti complessi in parti più piccole
- **Nidificazione**: Crea livelli multipli di gerarchia
- **Navigazione**: Facile navigare tra note correlate
- **Flessibilità**: Espandi e comprimi secondo necessità

## Creare Sottonote

### Metodo 1: Indentazione

Crea sottonote indentando il contenuto sotto una nota genitore:

1. Crea una nota genitore
2. Crea una nuova nota
3. Trascina la nuova nota sul genitore
4. Diventa una sottonota

### Metodo 2: Menu Contestuale

1. Clic con il tasto destro su una nota
2. Seleziona "Nuova Sottonota"
3. Viene creata una nota nidificata

### Metodo 3: Scorciatoia da Tastiera

1. Seleziona una nota
2. Premi `Cmd/Ctrl+Shift+N`
3. Viene creata una sottonota

## Gestire le Sottonote

### Espandere e Comprimere

Clicca la freccia accanto a una nota con sottonote:

- **Espandi**: Mostra tutte le note nidificate
- **Comprimi**: Nascondi le note nidificate

### Navigazione

- Clicca per aprire una sottonota
- Usa i tasti freccia per navigare la gerarchia
- Il breadcrumb mostra la tua posizione

### Spostare Sottonote

Trascina e rilascia per riorganizzare:

1. Clicca e tieni premuto sulla sottonota
2. Trascina nella nuova posizione
3. Rilascia per riposizionare

### Convertire in Nota Principale

Promuovi una sottonota al livello superiore:

1. Clic con il tasto destro sulla sottonota
2. Seleziona "Sposta alla Radice"
3. La nota diventa una nota principale

## Profondità Sottonote

Classic supporta livelli multipli di nidificazione:

```
📁 Progetto
  📄 Panoramica
  📁 Ricerca
    📄 Interviste Utenti
    📄 Risultati Sondaggio
    📁 Analisi
      📄 Risultati Chiave
      📄 Raccomandazioni
  📁 Pianificazione
    📄 Timeline
    📄 Risorse
```

### Best Practices

- **Limita la profondità**: Massimo 3-4 livelli per chiarezza
- **Raggruppamento logico**: Raggruppa contenuti correlati insieme
- **Nomi chiari**: Usa nomi descrittivi per le sottonote

## Casi d'Uso

### Documentazione Progetto

```
Progetto Alpha
├── Requisiti
├── Architettura
│   ├── Frontend
│   ├── Backend
│   └── Database
├── Note Riunioni
└── Report Progresso
```

### Base di Conoscenza

```
Programmazione
├── JavaScript
│   ├── Base
│   ├── Avanzato
│   └── Best Practices
├── Python
│   ├── Base
│   └── Librerie
└── Risorse
```

### Note di Studio

```
Biologia 101
├── Struttura Cellulare
│   ├── Membrana
│   ├── Nucleo
│   └── Organelli
├── Genetica
│   ├── DNA
│   └── RNA
└── Evoluzione
```

## Link con Sottonote

### Backlink

Le sottonote creano automaticamente backlink alle note genitore:

- Vedi la sezione "Riferimenti Collegati"
- Naviga tra note correlate
- Comprendi le relazioni tra note

### Wikilink

Collega sottonote da qualsiasi luogo:

```markdown
Vedi [[Progetto/Ricerca/Analisi]] per i dettagli.
```

## Suggerimenti

### Convenzione di Nomenclatura

Usa nomi chiari e consistenti:

```
✅ Buono:
Progetto/Requisiti/Funzionali
Progetto/Requisiti/Non-Funzionali

❌ Evita:
Progetto/req/func
Progetto/rq/nf
```

### Navigazione Breadcrumb

Usa i breadcrumb per capire la tua posizione:

```
Progetto > Ricerca > Analisi
```

### Ricerca

La ricerca include automaticamente le sottonote:

- Trova contenuti su tutti i livelli
- Filtra per profondità nota
- Navigazione rapida

### Template

Applica template alle sottonote:

1. Crea sottonota
2. Usa comando slash `/template`
3. Scegli template

## Scorciatoie da Tastiera

| Azione | Scorciatoia |
|--------|-------------|
| Nuova Sottonota | `Cmd/Ctrl+Shift+N` |
| Espandi Tutto | `Cmd/Ctrl+Down` |
| Comprimi Tutto | `Cmd/Ctrl+Up` |
| Sposta Su | `Opt/Alt+Up` |
| Sposta Giù | `Opt/Alt+Down` |
| Promuovi | `Opt/Alt+Left` |
| Degrada | `Opt/Alt+Right` |

## Risoluzione Problemi

### Sottonota Non Visibile

- Controlla se il genitore è compresso
- Verifica che la nota non sia stata spostata
- Aggiorna la barra laterale

### Impossibile Creare Sottonota

- Assicurati che la nota genitore esista
- Controlla i permessi
- Prova il metodo menu contestuale

### Sottonote Perse

Usa la ricerca per trovare note mancanti:

1. Apri ricerca (`Cmd/Ctrl+F`)
2. Digita il nome della nota
3. Visualizza il percorso completo nei risultati
