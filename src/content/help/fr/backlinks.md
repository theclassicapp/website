# Rétroliens

Les rétroliens montrent les connexions entre vos notes, créant un réseau d'idées connexes. Découvrez des relations dont vous ne soupçonniez pas l'existence.

## Que sont les rétroliens ?

Les rétroliens montrent quelles notes lient vers la note actuelle. Ce sont des connexions dans votre graphe de connaissances.

### Avantages

- **Découvrir des connexions** : Trouvez des notes connexes automatiquement
- **Contexte** : Comprenez comment les idées sont liées
- **Navigation** : Sautez entre les notes connectées
- **Graphe de connaissances** : Visualisez votre pensée

## Comment fonctionnent les rétroliens

Lorsque vous créez un lien vers une autre note, Classic crée automatiquement un rétrolien.

```markdown
Dans la note A :
Voir [[Planification du projet]] pour plus de détails.

Résultat :
- La note A lie vers "Planification du projet"
- "Planification du projet" montre un rétrolien vers la note A
```

## Voir les rétroliens

### Panneau des rétroliens

Ouvrez le panneau des rétroliens pour voir toutes les références :

1. Ouvrez n'importe quelle note
2. Cliquez sur l'icône des rétroliens dans la barre latérale
3. Voir toutes les notes liant vers celle-ci

### Rétroliens en ligne

Les rétroliens apparaissent en bas de chaque note :

- Affiche le nom de la note source
- Affiche un extrait de contexte
- Cliquez pour naviguer

## Créer des liens

### Syntaxe Wikilink

Utilisez des doubles crochets pour lier vers des notes :

```markdown
[[Nom de la note]]
[[Une autre note]]
```

### Texte d'affichage

Personnalisez le texte du lien :

```markdown
[[Projet Alpha|le projet alpha]]
[[Notes de réunion|la réunion d'hier]]
```

### Lier vers des titres

Liez vers des sections spécifiques :

```markdown
[[Nom de la note#Titre]]
[[Nom de la note#Section|aller à la section]]
```

## Types de rétroliens

### Liens directs

Wikilinks explicites que vous créez :

```markdown
Connexe : [[Note similaire]]
```

### Mentions non liées

Notes qui mentionnent le titre mais ne sont pas liées :

```markdown
La note mentionne "Projet Alpha" mais n'est pas liée
```

Classic suggère de convertir celles-ci en liens.

## Panneau des rétroliens

### Fonctionnalités

- **Filtrer** : Recherchez dans les rétroliens
- **Trier** : Par date, nom ou pertinence
- **Aperçu** : Survolez pour prévisualiser le contenu
- **Contexte** : Voir le texte environnant

### Actions

- Cliquez pour ouvrir la note liée
- Clic droit pour les options
- Convertir les mentions non liées

## Cas d'utilisation

### Gestion des connaissances

Construisez un wiki personnel :

```markdown
# Apprentissage automatique

Connexe à [[Intelligence artificielle]]
Basé sur [[Statistiques]]
Utilisé dans [[Traitement du langage naturel]]
```

### Documentation de projet

Connectez des documents connexes :

```markdown
# Conception d'API

Référence [[Schéma de base de données]]
Dépend de [[Flux d'authentification]]
Voir aussi [[Intégration frontend]]
```

### Recherche

Liez des concepts et des sources :

```markdown
# Notes de recherche

Basé sur [[Article source A]]
Contredit [[Article source B]]
Soutient [[Hypothèse 1]]
```

### Notes de réunion

Connectez les réunions aux projets :

```markdown
# Réunion : Planification T4

Projet : [[Projet Alpha]]
Précédent : [[Revue T3]]
Suivant : [[Lancement T4]]
```

## Vue graphe

Visualisez vos rétroliens comme un réseau :

1. Ouvrez la Vue graphe (`Cmd/Ctrl+G`)
2. Voir toutes les notes comme des nœuds
3. Les lignes montrent les connexions
4. Cliquez sur les nœuds pour naviguer

### Contrôles du graphe

- **Zoom** : Faites défiler pour zoomer
- **Pan** : Faites glisser pour déplacer
- **Filtrer** : Afficher/masquer par tag
- **Focus** : Mettre en surbrillance les connexions d'une note

## Conseils

### Lier généreusement

Créez des liens chaque fois que vous référencez un autre concept :

```markdown
✅ Bon :
Discussion sur la [[Feuille de route T4]] et l'[[Allocation budgétaire]].

❌ À éviter :
Discussion sur la Feuille de route T4 et l'Allocation budgétaire.
```

### Utiliser des noms cohérents

Correspondez exactement aux titres des notes pour une liaison fiable :

```markdown
✅ [[Notes de réunion]]
❌ [[notes de réunion]] (la casse compte)
```

### Examiner les rétroliens

Vérifiez périodiquement les rétroliens pour :

- Découvrir des connexions oubliées
- Trouver des notes à fusionner
- Identifier les lacunes dans les connaissances

### Aperçu des liens

Survolez les liens pour prévisualiser sans ouvrir :

- Voir les premières lignes
- Vérifier si c'est la bonne note
- Référence rapide

## Raccourcis clavier

| Action | Raccourci |
|--------|-----------|
| Ouvrir les rétroliens | `Cmd/Ctrl+Shift+B` |
| Créer un lien | `[[` (auto-complétion) |
| Ouvrir la vue graphe | `Cmd/Ctrl+G` |
| Naviguer dans les liens | `Tab` à travers les liens |

## Fonctionnalités avancées

### Intégration

Intégrez du contenu d'autres notes :

```markdown
![[Nom de la note]]
![[Nom de la note#Section]]
```

### Transclusion

Incluez du contenu en ligne :

```markdown
## Contenu connexe
![[Modèle partagé#En-tête]]
```

### Coloration des liens

Les liens changent de couleur en fonction de :

- **Bleu** : Lien non visité
- **Violet** : Lien visité
- **Rouge** : Lien brisé (la note n'existe pas)

## Dépannage

### Rétroliens manquants

- Vérifiez la syntaxe du lien `[[Nom de la note]]`
- Vérifiez que le titre de la note correspond exactement
- Rafraîchissez le panneau des rétroliens

### Liens brisés

- La note peut avoir été renommée
- La note peut avoir été supprimée
- Utilisez la recherche pour trouver la bonne note

### Liens dupliqués

- Consolidez les notes similaires
- Utilisez des redirections pour les notes renommées
- Vérifiez les variations de titre
