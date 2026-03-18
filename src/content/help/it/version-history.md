# Cronologia Versioni

Classic tiene traccia di ogni modifica alle tue note. Sfoglia, confronta e ripristina versioni precedenti quando necessario.

## Come Funziona la Cronologia Versioni

### Tracciamento Automatico

Classic salva automaticamente le versioni delle tue note:

- **Ogni modifica**: Ogni salvataggio crea una versione
- **Con timestamp**: Sapere quando sono avvenute le modifiche
- **Contenuto completo**: Snapshot completi preservati

### Conservazione

| Impostazione | Predefinito |
|--------------|-------------|
| **Conservazione Cronologia** | 90 giorni |
| **Versioni Massime** | 100 per nota |
| **Pulizia Automatica** | Sì |

Configura queste in Impostazioni → Editor → Cronologia Versioni.

## Visualizzare la Cronologia

### Apertura Cronologia Versioni

1. Apri qualsiasi nota
2. Clicca l'icona cronologia nella barra degli strumenti
3. Oppure usa `Cmd/Ctrl+H`

### Pannello Cronologia

Il pannello cronologia mostra:

- **Timeline**: Elenco di tutte le versioni
- **Timestamp**: Quando ogni versione è stata salvata
- **Anteprima**: Vedi il contenuto della versione selezionata

### Navigare le Versioni

1. Clicca qualsiasi versione nella lista
2. L'anteprima mostra quella versione
3. Scorri attraverso le modifiche
4. Confronta con la versione corrente

## Confrontare Versioni

### Vista Affiancata

Vedi le differenze tra versioni:

1. Apri cronologia versioni
2. Seleziona una versione
3. Clicca "Confronta"
4. Vedi aggiunte (verde) e rimozioni (rosso)

### Vista Diff

Le differenze di testo sono evidenziate:

- **Verde**: Contenuto aggiunto
- **Rosso**: Contenuto rimosso
- **Invariato**: Testo normale

## Ripristinare Versioni

### Ripristina Nota Intera

Sostituisci il contenuto corrente con una versione precedente:

1. Apri cronologia versioni
2. Seleziona la versione
3. Clicca "Ripristina"
4. Conferma l'azione

### Ripristina Selezione

Copia solo parte di una versione precedente:

1. Apri cronologia versioni
2. Seleziona la versione
3. Evidenzia il testo che vuoi
4. Clicca "Copia negli Appunti"
5. Incolla nella tua nota corrente

### Crea Nuova Nota da Versione

Mantieni entrambe le versioni:

1. Apri cronologia versioni
2. Seleziona la versione
3. Clicca "Crea Nota da Versione"
4. Viene creata una nuova nota

## Azioni Cronologia Versioni

| Azione | Descrizione |
|--------|-------------|
| **Visualizza** | Anteprima della versione |
| **Confronta** | Diff con corrente |
| **Ripristina** | Sostituisci corrente con questa |
| **Copia** | Copia contenuto negli appunti |
| **Elimina** | Rimuovi questa versione |

## Scorciatoie da Tastiera

| Azione | Scorciatoia |
|--------|-------------|
| Apri Cronologia | `Cmd/Ctrl+H` |
| Versione Precedente | `Su` |
| Versione Successiva | `Giù` |
| Ripristina | `Cmd/Ctrl+R` |
| Chiudi Cronologia | `Escape` |

## Impostazioni

### Configura in Impostazioni → Editor → Cronologia Versioni

| Impostazione | Opzioni | Predefinito |
|--------------|---------|-------------|
| Abilita Cronologia | On/Off | On |
| Periodo Conservazione | 30/60/90/180 giorni | 90 giorni |
| Versioni Massime | 50/100/200/500 | 100 |
| Intervallo Auto-salvataggio | 1/5/10/30 minuti | 5 minuti |

### Posizione Archiviazione

La cronologia versioni è salvata localmente:

- **macOS**: `~/Library/Application Support/Classic/history/`
- **Windows**: `%APPDATA%/Classic/history/`
- **Linux**: `~/.config/Classic/history/`

## Casi d'Uso

### Recuperare Modifiche Accidentali

1. Apri cronologia versioni
2. Trova versione prima dell'errore
3. Ripristina quella versione

### Confrontare Bozze

1. Apri cronologia
2. Confronta versioni diverse
3. Vedi come la nota si è evoluta

### Trovare Contenuto Eliminato

1. Sfoglia versioni più vecchie
2. Cerca testo eliminato
3. Copialo indietro

### Tracciare Progresso

Vedi come una nota si è sviluppata nel tempo:

- Quando le idee sono state aggiunte
- Come la struttura è cambiata
- Evoluzione della scrittura

## Suggerimenti

### Revisione Regolare

Rivedi periodicamente la cronologia versioni:

- Pulisci versioni non necessarie
- Nota come il contenuto è evoluto
- Impara dai tuoi pattern di modifica

### Prima di Modifiche Importanti

Crea un checkpoint:

1. Fai una piccola modifica
2. Salva (crea una versione)
3. Ora fai le tue modifiche importanti
4. Facile da ripristinare se necessario

### Nominare Versioni Importanti

Aggiungi marker nelle tue note:

```markdown
<!-- VERSIONE: Bozza finale -->
<!-- VERSIONE: Prima della ristrutturazione -->
```

Questi aiutano a identificare le versioni dopo.

## Risoluzione Problemi

### Cronologia Non Si Salva

- Controlla se la cronologia versioni è abilitata
- Verifica che la posizione di archiviazione abbia spazio
- Controlla i permessi dei file

### Non Trovo Vecchia Versione

- La versione potrebbe essere stata pulita automaticamente
- Controlla le impostazioni di conservazione
- Aumenta il periodo di conservazione

### Cronologia Occupa Troppo Spazio

1. Riduci il periodo di conservazione
2. Riduci le versioni massime per nota
3. Esegui pulizia manuale

### Caricamento Cronologia Lento

Note grandi con molte versioni potrebbero caricarsi lentamente:

- Sii paziente con cronologie grandi
- Considera di ridurre le versioni massime
- Archivia vecchie note

## Privacy e Sicurezza

### Archiviazione Locale

La cronologia versioni è salvata localmente:

- Mai inviata a server
- I tuoi dati restano privati
- Solo tu hai accesso

### Backup Crittografati

Se usi backup crittografati:

- La cronologia versioni è inclusa
- Protetta dalla tua password di backup
- Sicura anche nei file di backup
