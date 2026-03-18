# Sauvegarde et restauration

Gardez vos notes en sécurité avec le système de sauvegarde intégré de Classic. Ne perdez plus jamais votre travail.

## Sauvegardes automatiques

### Comment ça fonctionne

Classic crée automatiquement des sauvegardes de vos notes à intervalles réguliers :

- **Fréquence par défaut** : Toutes les 30 minutes
- **Emplacement de sauvegarde** : Même dossier que vos notes
- **Rétention** : Conserve les 10 dernières sauvegardes
- **Format** : Archive compressée (`.cbak`)

### Configurer la sauvegarde automatique

1. Ouvrez les Paramètres
2. Naviguez vers **Sauvegarde et restauration**
3. Configurez les éléments suivants :

| Paramètre | Options | Par défaut |
| --------- | ------- | ---------- |
| Activer la sauvegarde automatique | On/Off | On |
| Fréquence de sauvegarde | 15min / 30min / 1h / 4h | 30min |
| Conserver les sauvegardes | 5 / 10 / 20 / 50 | 10 |
| Emplacement de sauvegarde | Chemin personnalisé | Dossier Notes |

## Sauvegarde manuelle

### Créer une sauvegarde maintenant

1. Ouvrez la Palette de commandes (`Cmd/Ctrl+P`)
2. Tapez "Sauvegarde"
3. Sélectionnez **Créer une sauvegarde maintenant**
4. Choisissez l'emplacement (optionnel)
5. La sauvegarde est créée

### Format du fichier de sauvegarde

Les sauvegardes sont stockées sous forme de fichiers `.cbak` contenant :

- Toutes les notes (fichiers Markdown)
- Pièces jointes
- Paramètres
- Métadonnées (tags, liens, etc.)

## Restaurer depuis une sauvegarde

### Processus de restauration

1. Ouvrez les Paramètres
2. Allez dans **Sauvegarde et restauration**
3. Cliquez sur **Restaurer depuis une sauvegarde**
4. Sélectionnez le fichier de sauvegarde
5. Choisissez les options de restauration
6. Confirmez la restauration

### Options de restauration

| Option | Description |
| ------ | ----------- |
| **Tout remplacer** | Remplacer complètement les notes actuelles par la sauvegarde |
| **Fusionner** | Combiner la sauvegarde avec les notes existantes |
| **Aperçu** | Voir le contenu de la sauvegarde avant de restaurer |

### Ce qui est restauré

- ✅ Toutes les notes et dossiers
- ✅ Pièces jointes
- ✅ Tags et métadonnées
- ✅ Historique des notes
- ⚠️ Paramètres (optionnel)
- ❌ Préférences de l'application

## Emplacements de sauvegarde

### Emplacement par défaut

```
~/Classic/backups/
├── backup-2024-01-15-10-30.cbak
├── backup-2024-01-15-11-00.cbak
└── backup-2024-01-15-11-30.cbak
```

### Emplacement personnalisé

1. Ouvrez les Paramètres
2. Allez dans Sauvegarde et restauration
3. Cliquez sur "Changer l'emplacement de sauvegarde"
4. Sélectionnez votre dossier préféré

### Sauvegarde cloud

Pointez l'emplacement de sauvegarde vers un dossier synchronisé avec le cloud :

- **iCloud** : `~/Library/Mobile Documents/com~apple~CloudDocs/Classic Backups`
- **Dropbox** : `~/Dropbox/Classic Backups`
- **Google Drive** : `~/Google Drive/Classic Backups`
- **OneDrive** : `~/OneDrive/Classic Backups`

## Meilleures pratiques

### Calendrier de sauvegarde

- **Sauvegarde automatique** : Maintenez activée à des intervalles de 30 minutes
- **Sauvegarde manuelle** : Créez avant les changements majeurs
- **Sauvegarde hors site** : Copiez régulièrement les sauvegardes vers un stockage externe

### Vérification des sauvegardes

Vérifiez périodiquement vos sauvegardes :

1. Créez une restauration de test
2. Vérifiez le contenu des notes
3. Vérifiez les pièces jointes
4. Confirmez les métadonnées

### Rotation des sauvegardes

- Conservez les sauvegardes récentes localement
- Archivez les anciennes sauvegardes vers un stockage externe
- Supprimez les très anciennes sauvegardes pour économiser de l'espace

## Dépannage

### Échec de la sauvegarde

**Causes possibles**

- Espace disque insuffisant
- Problèmes de permission
- Fichier en cours d'utilisation

**Solutions**

1. Vérifiez l'espace disque disponible
2. Vérifiez les permissions du dossier
3. Fermez les autres applications
4. Essayez un emplacement différent

### Échec de la restauration

**Causes possibles**

- Fichier de sauvegarde corrompu
- Version incompatible
- Espace insuffisant

**Solutions**

1. Essayez une sauvegarde plus ancienne
2. Vérifiez l'intégrité du fichier de sauvegarde
3. Libérez de l'espace disque
4. Contactez le support

### Sauvegardes manquantes

**Causes possibles**

- Sauvegarde automatique désactivée
- Emplacement de sauvegarde modifié
- Sauvegardes supprimées

**Solutions**

1. Vérifiez les paramètres de sauvegarde
2. Vérifiez l'emplacement de sauvegarde
3. Activez la sauvegarde automatique
4. Créez une sauvegarde manuelle maintenant

## Options avancées

### Sauvegardes chiffrées

Pour une sécurité accrue :

1. Ouvrez les Paramètres
2. Allez dans Sauvegarde et restauration
3. Activez "Chiffrer les sauvegardes"
4. Définissez un mot de passe
5. Souvenez-vous de ce mot de passe - il ne peut pas être récupéré

### Sauvegardes incrémentielles

Économisez de l'espace avec des sauvegardes incrémentielles :

- Seuls les changements depuis la dernière sauvegarde sont stockés
- La restauration complète reconstruit l'état complet
- Réduit le temps et la taille de sauvegarde

### Exclusions de sauvegarde

Excluez du contenu spécifique des sauvegardes :

1. Ouvrez les Paramètres
2. Allez dans Sauvegarde et restauration
3. Cliquez sur "Exclusions"
4. Ajoutez des dossiers ou fichiers à exclure
