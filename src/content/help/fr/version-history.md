# Historique des versions

Classic garde une trace de chaque changement apporté à vos notes. Parcourez, comparez et restaurez les versions précédentes chaque fois que vous en avez besoin.

## Comment fonctionne l'historique des versions

### Suivi automatique

Classic sauvegarde automatiquement les versions de vos notes :

- **Chaque édition** : Chaque sauvegarde crée une version
- **Horodatée** : Sachez quand les changements ont eu lieu
- **Contenu complet** : Instantanés complets préservés

### Rétention

| Paramètre | Par défaut |
|-----------|------------|
| **Rétention de l'historique** | 90 jours |
| **Versions maximales** | 100 par note |
| **Nettoyage automatique** | Oui |

Configurez ces éléments dans Paramètres → Éditeur → Historique des versions.

## Voir l'historique

### Ouvrir l'historique des versions

1. Ouvrez n'importe quelle note
2. Cliquez sur l'icône d'historique dans la barre d'outils
3. Ou utilisez `Cmd/Ctrl+H`

### Panneau d'historique

Le panneau d'historique affiche :

- **Chronologie** : Liste de toutes les versions
- **Horodatages** : Quand chaque version a été sauvegardée
- **Aperçu** : Voir le contenu de la version sélectionnée

### Naviguer dans les versions

1. Cliquez sur n'importe quelle version dans la liste
2. L'aperçu montre cette version
3. Faites défiler les changements
4. Comparez avec la version actuelle

## Comparer les versions

### Vue côte à côte

Voyez les différences entre les versions :

1. Ouvrez l'historique des versions
2. Sélectionnez une version
3. Cliquez sur "Comparer"
4. Voir les ajouts (vert) et les suppressions (rouge)

### Vue Diff

Les différences de texte sont surlignées :

- **Vert** : Contenu ajouté
- **Rouge** : Contenu supprimé
- **Non modifié** : Texte normal

## Restaurer les versions

### Restaurer la note entière

Remplacez le contenu actuel par une version précédente :

1. Ouvrez l'historique des versions
2. Sélectionnez la version
3. Cliquez sur "Restaurer"
4. Confirmez l'action

### Restaurer une sélection

Copiez seulement une partie d'une version précédente :

1. Ouvrez l'historique des versions
2. Sélectionnez la version
3. Surlignez le texte que vous voulez
4. Cliquez sur "Copier dans le presse-papiers"
5. Collez dans votre note actuelle

### Créer une nouvelle note depuis une version

Gardez les deux versions :

1. Ouvrez l'historique des versions
2. Sélectionnez la version
3. Cliquez sur "Créer une note depuis la version"
4. Une nouvelle note est créée

## Actions de l'historique des versions

| Action | Description |
|--------|-------------|
| **Voir** | Prévisualiser la version |
| **Comparer** | Diff avec la version actuelle |
| **Restaurer** | Remplacer la version actuelle par celle-ci |
| **Copier** | Copier le contenu dans le presse-papiers |
| **Supprimer** | Supprimer cette version |

## Raccourcis clavier

| Action | Raccourci |
|--------|-----------|
| Ouvrir l'historique | `Cmd/Ctrl+H` |
| Version précédente | `Haut` |
| Version suivante | `Bas` |
| Restaurer | `Cmd/Ctrl+R` |
| Fermer l'historique | `Echap` |

## Paramètres

### Configurer dans Paramètres → Éditeur → Historique des versions

| Paramètre | Options | Par défaut |
|-----------|---------|------------|
| Activer l'historique | On/Off | On |
| Période de rétention | 30/60/90/180 jours | 90 jours |
| Versions max | 50/100/200/500 | 100 |
| Intervalle de sauvegarde automatique | 1/5/10/30 minutes | 5 minutes |

### Emplacement de stockage

L'historique des versions est stocké localement :

- **macOS** : `~/Library/Application Support/Classic/history/`
- **Windows** : `%APPDATA%/Classic/history/`
- **Linux** : `~/.config/Classic/history/`

## Cas d'utilisation

### Récupérer des changements accidentels

1. Ouvrez l'historique des versions
2. Trouvez la version avant l'erreur
3. Restaurez cette version

### Comparer des brouillons

1. Ouvrez l'historique
2. Comparez différentes versions
3. Voyez comment la note a évolué

### Trouver du contenu supprimé

1. Parcourez les anciennes versions
2. Recherchez le texte supprimé
3. Copiez-le à nouveau

### Suivre la progression

Voyez comment une note s'est développée au fil du temps :

- Quand les idées ont été ajoutées
- Comment la structure a changé
- Évolution de l'écriture

## Conseils

### Revue régulière

Examinez périodiquement l'historique des versions :

- Nettoyez les versions inutiles
- Notez comment le contenu a évolué
- Apprenez de vos habitudes d'édition

### Avant les changements majeurs

Créez un point de contrôle :

1. Faites une petite modification
2. Sauvegardez (crée une version)
3. Maintenant faites vos changements majeurs
4. Facile à revenir en arrière si nécessaire

### Nommer les versions importantes

Ajoutez des marqueurs dans vos notes :

```markdown
<!-- VERSION : Brouillon final -->
<!-- VERSION : Avant restructuration -->
```

Ceux-ci aident à identifier les versions plus tard.

## Dépannage

### L'historique ne se sauvegarde pas

- Vérifiez si l'historique des versions est activé
- Vérifiez que l'emplacement de stockage a de l'espace
- Vérifiez les permissions de fichier

### Impossible de trouver une ancienne version

- La version peut avoir été nettoyée automatiquement
- Vérifiez les paramètres de rétention
- Augmentez la période de rétention

### L'historique prend trop de place

1. Réduisez la période de rétention
2. Diminuez le nombre max de versions par note
3. Exécutez un nettoyage manuel

### Chargement d'historique lent

Les grandes notes avec beaucoup de versions peuvent se charger lentement :

- Soyez patient avec les grands historiques
- Envisagez de réduire le nombre max de versions
- Archivez les anciennes notes

## Confidentialité et sécurité

### Stockage local

L'historique des versions est stocké localement :

- Jamais envoyé aux serveurs
- Vos données restent privées
- Seul vous y avez accès

### Sauvegardes chiffrées

Si vous utilisez des sauvegardes chiffrées :

- L'historique des versions est inclus
- Protégé par votre mot de passe de sauvegarde
- Sécurisé même dans les fichiers de sauvegarde
