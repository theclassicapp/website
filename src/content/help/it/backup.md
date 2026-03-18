# Backup e Ripristino

Mantieni le tue note al sicuro con il sistema di backup integrato di Classic. Non perdere mai il tuo lavoro.

## Backup Automatici

### Come Funziona

Classic crea automaticamente backup delle tue note a intervalli regolari:

- **Frequenza predefinita**: Ogni 30 minuti
- **Posizione backup**: Stessa cartella delle tue note
- **Conservazione**: Mantiene gli ultimi 10 backup
- **Formato**: Archivio compresso (`.cbak`)

### Configurare Auto Backup

1. Apri Impostazioni
2. Naviga su **Backup e Ripristino**
3. Configura quanto segue:

| Impostazione | Opzioni | Predefinito |
|--------------|---------|-------------|
| Abilita Auto Backup | On/Off | On |
| Frequenza Backup | 15min / 30min / 1ora / 4ore | 30min |
| Mantieni Backup | 5 / 10 / 20 / 50 | 10 |
| Posizione Backup | Percorso personalizzato | Cartella note |

## Backup Manuale

### Crea Backup Ora

1. Apri Palette Comandi (`Cmd/Ctrl+P`)
2. Digita "Backup"
3. Seleziona **Crea Backup Ora**
4. Scegli posizione (opzionale)
5. Il backup viene creato

### Formato File Backup

I backup sono salvati come file `.cbak` contenenti:

- Tutte le note (file Markdown)
- Allegati
- Impostazioni
- Metadati (tag, link, ecc.)

## Ripristina da Backup

### Processo di Ripristino

1. Apri Impostazioni
2. Vai su **Backup e Ripristino**
3. Clicca **Ripristina da Backup**
4. Seleziona il file di backup
5. Scegli opzioni di ripristino
6. Conferma il ripristino

### Opzioni di Ripristino

| Opzione | Descrizione |
|---------|-------------|
| **Sostituisci Tutto** | Sostituisci completamente le note attuali con il backup |
| **Unisci** | Combina backup con note esistenti |
| **Anteprima** | Visualizza contenuto backup prima di ripristinare |

### Cosa Viene Ripristinato

- ✅ Tutte le note e cartelle
- ✅ Allegati
- ✅ Tag e metadati
- ✅ Cronologia note
- ⚠️ Impostazioni (opzionale)
- ❌ Preferenze applicazione

## Posizioni Backup

### Posizione Predefinita

```
~/Classic/backups/
├── backup-2024-01-15-10-30.cbak
├── backup-2024-01-15-11-00.cbak
└── backup-2024-01-15-11-30.cbak
```

### Posizione Personalizzata

1. Apri Impostazioni
2. Vai su Backup e Ripristino
3. Clicca "Cambia Posizione Backup"
4. Seleziona la tua cartella preferita

### Backup Cloud

Punta la posizione backup a una cartella sincronizzata con cloud:

- **iCloud**: `~/Library/Mobile Documents/com~apple~CloudDocs/Classic Backups`
- **Dropbox**: `~/Dropbox/Classic Backups`
- **Google Drive**: `~/Google Drive/Classic Backups`
- **OneDrive**: `~/OneDrive/Classic Backups`

## Best Practice

### Pianificazione Backup

- **Auto Backup**: Mantieni abilitato a intervalli di 30 minuti
- **Backup Manuale**: Crea prima di modifiche importanti
- **Backup Fuori Sede**: Copia regolarmente backup su archiviazione esterna

### Verifica Backup

Verifica periodicamente i tuoi backup:

1. Crea un ripristino di test
2. Controlla il contenuto delle note
3. Verifica gli allegati
4. Conferma i metadati

### Rotazione Backup

- Mantieni backup recenti localmente
- Archivia backup più vecchi su archiviazione esterna
- Elimina backup molto vecchi per risparmiare spazio

## Risoluzione Problemi

### Backup Fallito

**Possibili cause**

- Spazio su disco insufficiente
- Problemi di permessi
- File in uso

**Soluzioni**

1. Controlla lo spazio su disco disponibile
2. Verifica i permessi della cartella
3. Chiudi altre applicazioni
4. Prova una posizione diversa

### Ripristino Fallito

**Possibili cause**

- File di backup corrotto
- Versione incompatibile
- Spazio insufficiente

**Soluzioni**

1. Prova un backup più vecchio
2. Controlla l'integrità del file di backup
3. Libera spazio su disco
4. Contatta il supporto

### Backup Mancanti

**Possibili cause**

- Auto backup disabilitato
- Posizione backup cambiata
- Backup eliminati

**Soluzioni**

1. Controlla le impostazioni di backup
2. Verifica la posizione di backup
3. Abilita auto backup
4. Crea backup manuale ora

## Opzioni Avanzate

### Backup Crittografati

Per maggiore sicurezza:

1. Apri Impostazioni
2. Vai su Backup e Ripristino
3. Abilita "Crittografa Backup"
4. Imposta una password
5. Ricorda questa password - non può essere recuperata

### Backup Incrementali

Risparmia spazio con backup incrementali:

- Solo le modifiche dall'ultimo backup sono salvate
- Il ripristino completo ricostruisce lo stato completo
- Riduce tempo e dimensione del backup

### Esclusioni Backup

Escludi contenuti specifici dai backup:

1. Apri Impostazioni
2. Vai su Backup e Ripristino
3. Clicca "Esclusioni"
4. Aggiungi cartelle o file da escludere
