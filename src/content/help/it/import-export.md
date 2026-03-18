# Importa ed Esporta

Porta le tue note in Classic da altre app, o esportale per condividere o fare backup. Classic supporta formati multipli per migrazione dati senza interruzioni.

## Importare Note

### Formati Supportati

| Formato | Estensione | Note |
|---------|------------|------|
| Markdown | `.md` | ✅ Supporto completo |
| Testo Semplice | `.txt` | ✅ Importato come nota |
| JSON | `.json` | ✅ Formato Classic |
| HTML | `.html` | ⚠️ Convertito in Markdown |
| Evernote | `.enex` | ⚠️ Sperimentale |
| Notion | Export Notion | ⚠️ Sperimentale |
| Obsidian | Export Markdown | ✅ Supporto completo |

### Processo di Importazione

1. Apri **File** → **Importa** (o `Cmd/Ctrl+I`)
2. Seleziona i tuoi file da importare
3. Scegli cartella di destinazione
4. Rivedi l'anteprima importazione
5. Conferma importazione

### Importa da Appunti

Importazione rapida da qualsiasi sorgente:

1. Copia testo negli appunti
2. Apri Palette Comandi
3. Digita "Importa da Appunti"
4. Nuova nota creata automaticamente

### Importazione in Blocco

Importa file multipli contemporaneamente:

1. Apri **File** → **Importa**
2. Seleziona **Importa Cartella**
3. Scegli la cartella contenente le note
4. Tutti i file supportati sono importati

## Esportare Note

### Formati di Esportazione

| Formato | Caso d'Uso |
|---------|------------|
| **Markdown** | Condivisione, backup, altre app |
| **HTML** | Pubblicazione web |
| **PDF** | Archiviazione, stampa |
| **Testo Semplice** | Condivisione semplice |
| **JSON** | Integrazione API |

### Esporta Nota Singola

1. Apri la nota
2. Clicca **File** → **Esporta**
3. Scegli formato
4. Seleziona posizione
5. Salva

### Esporta Note Multiple

1. Seleziona note nella barra laterale (Cmd/Ctrl+clic)
2. Clic con il tasto destro → **Esporta Selezionate**
3. Scegli formato
4. Seleziona posizione
5. Salva

### Esporta Tutte le Note

1. Apri **File** → **Esporta Tutto**
2. Scegli formato
3. Seleziona posizione
4. Attendi il completamento dell'esportazione

## Guide alla Migrazione

### Da Obsidian

Classic può importare vault Obsidian direttamente:

1. Apri **File** → **Importa**
2. Seleziona **Vault Obsidian**
3. Naviga nella cartella del tuo vault
4. Seleziona per importare

**Cosa viene trasferito**:

- ✅ Note e cartelle
- ✅ Tag
- ✅ Link (convertiti in backlink)
- ✅ Metadati
- ⚠️ Plugin (non supportati)

### Da Notion

1. Esporta da Notion come Markdown
2. Importa in Classic
3. Rivedi formattazione
4. Correggi eventuali link rotti

**Suggerimenti per migrazione Notion**:

- Usa "Esporta come Markdown" di Notion
- Controlla formattazione checkbox
- Verifica riferimenti database
- Ricrea database collegati manualmente

### Da Evernote

1. Esporta da Evernote come HTML
2. Usa l'importazione HTML di Classic
3. Rivedi contenuto convertito

**Suggerimenti per migrazione Evernote**:

- I notebook diventano cartelle
- I tag sono preservati
- Gli allegati sono importati
- Controlla formattazione

## Best Practice

### Prima di Importare

- Fai backup delle note esistenti
- Rivedi l'anteprima importazione
- Controlla duplicati
- Verifica formattazione

### Dopo l'Importazione

- Rivedi le note importate
- Correggi problemi di formattazione
- Aggiorna link interni
- Aggiungi tag se necessario

### Esportazioni Regolari

- Esporta backup mensilmente
- Usa formati diversi per scopi diversi
- Mantieni esportazioni organizzate per data
- Archivia nel cloud per backup fuori sede

## Risoluzione Problemi

### Importazione Fallita

**Cause comuni**:

- Formato non supportato
- File corrotto
- Problemi di permessi
- Limitazioni di memoria

**Soluzioni**:

1. Prova un formato diverso
2. Controlla l'integrità del file
3. Verifica permessi di lettura
4. Importa meno file alla volta

### Formattazione Persa

**Cause comuni**:

- Formattazione complessa
- Sintassi non supportata
- Limitazioni di conversione

**Soluzioni**:

1. Usa export Markdown dall'app sorgente
2. Semplifica formattazione prima di importare
3. Correggi manualmente dopo importazione

### Allegati Mancanti

**Cause comuni**:

- Importazione non includeva allegati
- Percorso allegato sbagliato
- Limitazioni dimensione

**Soluzioni**:

1. Re-importa con allegati
2. Controlla cartella allegati
3. Importa allegati separatamente
