# Import et export

Importez vos notes dans Classic depuis d'autres applications, ou exportez-les pour les partager ou les sauvegarder. Classic prend en charge plusieurs formats pour une migration de données fluide.

## Importer des notes

### Formats pris en charge

| Format | Extension | Notes |
| ------ | --------- | ----- |
| Markdown | `.md` | ✅ Support complet |
| Texte brut | `.txt` | ✅ Importé comme note |
| JSON | `.json` | ✅ Format Classic |
| HTML | `.html` | ⚠️ Converti en Markdown |
| Evernote | `.enex` | ⚠️ Expérimental |
| Notion | Export Notion | ⚠️ Expérimental |
| Obsidian | Export Markdown | ✅ Support complet |

### Processus d'importation

1. Ouvrez **Fichier** → **Importer** (ou `Cmd/Ctrl+I`)
2. Sélectionnez vos fichier(s) à importer
3. Choisissez le dossier de destination
4. Examinez l'aperçu d'importation
5. Confirmez l'importation

### Importer depuis le presse-papiers

Importation rapide depuis n'importe quelle source :

1. Copiez le texte dans le presse-papiers
2. Ouvrez la Palette de commandes
3. Tapez "Importer depuis le presse-papiers"
4. Une nouvelle note est créée automatiquement

### Importation en masse

Importez plusieurs fichiers à la fois :

1. Ouvrez **Fichier** → **Importer**
2. Sélectionnez **Importer un dossier**
3. Choisissez le dossier contenant les notes
4. Tous les fichiers pris en charge sont importés

## Exporter des notes

### Formats d'exportation

| Format | Cas d'utilisation |
| ------ | ----------------- |
| **Markdown** | Partage, sauvegardes, autres applications |
| **HTML** | Publication web, visualisation |
| **PDF** | Archivage, impression |
| **Texte brut** | Partage simple |
| **JSON** | Intégration API |

### Exporter une note unique

1. Ouvrez la note
2. Cliquez sur **Fichier** → **Exporter**
3. Choisissez le format
4. Sélectionnez l'emplacement
5. Sauvegardez

### Exporter plusieurs notes

1. Sélectionnez les notes dans la barre latérale (Cmd/Ctrl+clic)
2. Clic droit → **Exporter la sélection**
3. Choisissez le format
4. Sélectionnez l'emplacement
5. Sauvegardez

### Exporter toutes les notes

1. Ouvrez **Fichier** → **Tout exporter**
2. Choisissez le format
3. Sélectionnez l'emplacement
4. Attendez la fin de l'exportation

## Guides de migration

### Depuis Obsidian

Classic peut importer des coffres Obsidian directement :

1. Ouvrez **Fichier** → **Importer**
2. Sélectionnez **Coffre Obsidian**
3. Naviguez vers votre dossier de coffre
4. Sélectionnez pour importer

**Ce qui est transféré**

- ✅ Notes et dossiers
- ✅ Tags
- ✅ Liens (convertis en rétroliens)
- ✅ Métadonnées
- ⚠️ Plugins (non pris en charge)

### Depuis Notion

1. Exportez depuis Notion en Markdown
2. Importez dans Classic
3. Examinez le formatage
4. Corrigez les liens brisés

**Conseils pour la migration depuis Notion**

- Utilisez "Exporter en Markdown" de Notion
- Vérifiez le formatage des cases à cocher
- Vérifiez les références de base de données
- Recréez manuellement les bases de données liées

### Depuis Evernote

1. Exportez depuis Evernote en HTML
2. Utilisez l'importation HTML de Classic
3. Examinez le contenu converti

**Conseils pour la migration depuis Evernote**

- Les carnets deviennent des dossiers
- Les tags sont préservés
- Les pièces jointes sont importées
- Vérifiez le formatage

## Meilleures pratiques

### Avant l'importation

- Sauvegardez les notes existantes
- Examinez l'aperçu d'importation
- Vérifiez les doublons
- Vérifiez le formatage

### Après l'importation

- Examinez les notes importées
- Corrigez les problèmes de formatage
- Mettez à jour les liens internes
- Ajoutez des tags si nécessaire

### Exportations régulières

- Exportez des sauvegardes mensuellement
- Utilisez différents formats pour différents usages
- Gardez les exportations organisées par date
- Stockez dans le cloud pour une sauvegarde hors site

## Dépannage

### Échec de l'importation

**Causes courantes**

- Format non pris en charge
- Fichier corrompu
- Problèmes de permission
- Limitations de mémoire

**Solutions**

1. Essayez un format différent
2. Vérifiez l'intégrité du fichier
3. Vérifiez les permissions de lecture
4. Importez moins de fichiers à la fois

### Formatage perdu

**Causes courantes**

- Formatage complexe
- Syntaxe non prise en charge
- Limitations de conversion

**Solutions**

1. Utilisez l'export Markdown depuis l'application source
2. Simplifiez le formatage avant l'importation
3. Corrigez manuellement après l'importation

### Pièces jointes manquantes

**Causes courantes**

- L'importation n'incluait pas les pièces jointes
- Mauvais chemin de pièce jointe
- Limitations de taille

**Solutions**

1. Réimportez avec les pièces jointes
2. Vérifiez le dossier des pièces jointes
3. Importez les pièces jointes séparément
