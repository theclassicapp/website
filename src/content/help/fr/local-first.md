# Architecture locale d'abord

Classic est construit avec la confidentialité comme fondation. Vos données restent sur votre appareil, toujours.

## Que signifie "Local d'abord" ?

Local d'abord signifie :

1. **Vos données sont stockées localement** sur votre ordinateur. Toutes vos notes, pièces jointes et paramètres sont stockés dans un dossier sur votre ordinateur.
2. **Pas de cloud requis** Classic fonctionne sans connexion internet.
3. **Vous possédez vos données** Vous avez un contrôle complet sur vos données.

## Stockage des données

### Emplacement par défaut

Vos données sont stockées dans un dossier dédié :

| Plateforme | Emplacement |
| ---------- | ----------- |
| **macOS** | `~/Library/Application Support/Classic/notes` |
| **Windows** | `%APPDATA%\Classic\notes` |
| **Linux** | `~/.config/Classic/notes` |

### Format des données

- Les notes sont stockées sous forme de fichiers texte brut (`.md`)
- Les pièces jointes sont stockées dans un sous-dossier `attachments`
- Les paramètres sont stockés dans `settings.json`

### Structure des fichiers

```
notes/
├── Boîte de réception/
├── Notes quotidiennes/
│   └── 2024-01-15.md
├── Projets/
│   ├── Mon Projet.md
│   └── sous-note.md
└── attachments/
    └── image.png
settings.json
```

## Avantages pour la confidentialité

### Pas de compte requis

- Pas d'inscription nécessaire
- Pas de vérification par email
- Aucune information personnelle collectée

### Pas de suivi

- Pas d'analyse
- Pas de télémétrie
- Aucune donnée d'utilisation envoyée à des serveurs externes

### Capacité hors ligne

- Fonctionne sans internet
- Synchronise uniquement lorsque vous le choisissez
- Vos données sont toujours accessibles

## Sécurité des données

### Votre responsabilité

- **Sauvegardes** : Configurez des sauvegardes automatiques dans les Paramètres
- **Exports** : Exportez vos données régulièrement
- **Mises à jour** : Maintenez Classic à jour pour les correctifs de sécurité

### Notre responsabilité

- **Stockage local** : Nous ne voyons ni ne touchons jamais vos données
- **Pas de portes dérobées** : Aucune collecte de données cachée
- **Transparence** : Ouvert et honnête sur la gestion des données

## Synchronisation (Optionnelle)

Classic n'inclut pas de synchronisation cloud intégrée. Cependant, vous pouvez synchroniser vos données :

### Utiliser iCloud/OneDrive/Dropbox

1. Ouvrez les Paramètres Classic
2. Changez l'emplacement du dossier Notes vers votre dossier cloud
3. Classic se synchronisera via votre fournisseur cloud

### Utiliser Git

1. Initialisez un dépôt git dans votre dossier de notes
2. Commitez et poussez les modifications manuellement ou avec automatisation

## Récupération des données

### Depuis une sauvegarde

1. Ouvrez les Paramètres
2. Allez dans Sauvegarde et restauration
3. Sélectionnez un fichier de sauvegarde
4. Cliquez sur Restaurer

### Récupération manuelle

1. Localisez votre dossier de notes
2. Copiez les fichiers vers un emplacement sûr
3. Importez dans une nouvelle installation Classic

## Questions fréquemment posées

### Mes données sont-elles vraiment privées ?

**Oui.** Vos données ne quittent jamais votre appareil à moins que vous ne les synchronisiez explicitement en utilisant un service tiers.

### Puis-je déplacer mes données vers un autre ordinateur ?

**Oui.** Copiez simplement votre dossier de notes vers le nouvel ordinateur et pointez Classic vers celui-ci dans les paramètres.

### Que se passe-t-il si je désinstalle Classic ?

**Vos données restent.** La désinstallation de Classic ne supprime pas votre dossier de notes. Vous pouvez désinstaller et réinstaller en toute sécurité sans perdre de données.

### Classic peut-il accéder à mes données ?

**Non.** Classic est une application locale sans connectivité externe pour la collecte de données.
