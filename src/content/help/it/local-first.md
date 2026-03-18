# Architettura Local-First

Classic è costruito con la privacy come fondamento. I tuoi dati restano sul tuo dispositivo, sempre.

## Cosa Significa "Local-First"?

Local-first significa:

1. **I tuoi dati sono salvati localmente** sul tuo computer. Tutte le tue note, allegati e impostazioni sono salvati in una cartella sul tuo computer.
2. **Nessun cloud richiesto** Classic funziona senza connessione internet.
3. **Tu possiedi i tuoi dati** Hai il controllo completo sui tuoi dati.

## Archiviazione Dati

### Posizione Predefinita

I tuoi dati sono salvati in una cartella dedicata:

| Piattaforma | Posizione |
|-------------|-----------|
| **macOS** | `~/Library/Application Support/Classic/notes` |
| **Windows** | `%APPDATA%\Classic\notes` |
| **Linux** | `~/.config/Classic/notes` |

### Formato Dati

- Le note sono salvate come file di testo normale (`.md`)
- Gli allegati sono salvati in una sottocartella `attachments`
- Le impostazioni sono salvate in `settings.json`

### Struttura File

```
notes/
├── Inbox/
├── Note Giornaliere/
│   └── 2024-01-15.md
├── Progetti/
│   ├── Il Mio Progetto.md
│   └── sotto-nota.md
└── attachments/
    └── immagine.png
settings.json
```

## Vantaggi per la Privacy

### Nessun Account Richiesto

- Nessuna registrazione necessaria
- Nessuna verifica email
- Nessuna informazione personale raccolta

### Nessun Tracciamento

- Nessuna analitica
- Nessuna telemetria
- Nessun dato di utilizzo inviato a server esterni

### Funziona Offline

- Funziona senza internet
- Sincronizza solo quando scegli
- I tuoi dati sono sempre accessibili

## Sicurezza dei Dati

### Tua Responsabilità

- **Backup**: Configura backup automatici nelle Impostazioni
- **Esportazioni**: Esporta i tuoi dati regolarmente
- **Aggiornamenti**: Mantieni Classic aggiornato per fix di sicurezza

### Nostra Responsabilità

- **Archiviazione locale**: Non vediamo mai o tocchiamo i tuoi dati
- **Nessuna backdoor**: Nessuna raccolta dati nascosta
- **Trasparenza**: Aperti e onesti sulla gestione dei dati

## Sincronizzazione (Opzionale)

Classic non include sincronizzazione cloud integrata. Tuttavia, puoi sincronizzare i tuoi dati:

### Usando iCloud/OneDrive/Dropbox

1. Apri Impostazioni Classic
2. Cambia la posizione della cartella Note nella tua cartella cloud
3. Classic sincronizzerà attraverso il tuo provider cloud

### Usando Git

1. Inizializza un repo git nella tua cartella note
2. Committa e pusha le modifiche manualmente o con automazione

## Recupero Dati

### Da Backup

1. Apri Impostazioni
2. Vai su Backup & Ripristino
3. Seleziona un file di backup
4. Clicca Ripristina

### Recupero Manuale

1. Individua la tua cartella note
2. Copia i file in una posizione sicura
3. Importa in una nuova installazione di Classic

## Domande Frequenti

### I miei dati sono davvero privati?

**Sì.** I tuoi dati non lasciano mai il tuo dispositivo a meno che tu non li sincronizzi esplicitamente usando un servizio di terze parti.

### Posso spostare i miei dati su un altro computer?

**Sì.** Basta copiare la tua cartella note sul nuovo computer e puntare Classic ad essa nelle impostazioni.

### Cosa succede se disinstallo Classic?

**I tuoi dati restano.** Disinstallare Classic non elimina la tua cartella note. Puoi disinstallare e reinstallare in sicurezza senza perdere dati.

### Classic può accedere ai miei dati?

**No.** Classic è un'applicazione locale senza connettività esterna per la raccolta dati.
