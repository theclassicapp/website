# Sous-notes

Les sous-notes vous permettent de créer des notes imbriquées et hiérarchiques dans Classic. Organisez des sujets complexes en morceaux gérables.

## Que sont les sous-notes ?

Les sous-notes sont des notes dans des notes - un moyen de créer des structures de contenu hiérarchiques.

### Avantages

- **Organisation** : Divisez les sujets complexes en morceaux plus petits
- **Imbrication** : Créez plusieurs niveaux de hiérarchie
- **Navigation** : Facile à naviguer entre les notes connexes
- **Flexibilité** : Développez et réduisez selon les besoins

## Créer des sous-notes

### Méthode 1 : Indentation

Créez des sous-notes en indentant le contenu sous une note parente :

1. Créez une note parente
2. Créez une nouvelle note
3. Faites glisser la nouvelle note sur le parent
4. Elle devient une sous-note

### Méthode 2 : Menu contextuel

1. Faites un clic droit sur une note
2. Sélectionnez "Nouvelle sous-note"
3. Une note imbriquée est créée

### Méthode 3 : Raccourci clavier

1. Sélectionnez une note
2. Appuyez sur `Cmd/Ctrl+Shift+N`
3. Une sous-note est créée

## Gérer les sous-notes

### Développer et réduire

Cliquez sur la flèche à côté d'une note avec des sous-notes :

- **Développer** : Afficher toutes les notes imbriquées
- **Réduire** : Masquer les notes imbriquées

### Navigation

- Cliquez pour ouvrir une sous-note
- Utilisez les touches fléchées pour naviguer dans la hiérarchie
- Le fil d'Ariane montre votre emplacement

### Déplacer des sous-notes

Faites glisser et déposer pour réorganiser :

1. Cliquez et maintenez la sous-note
2. Faites glisser vers le nouvel emplacement
3. Déposez pour repositionner

### Convertir en note principale

Promouvoir une sous-note au niveau supérieur :

1. Faites un clic droit sur la sous-note
2. Sélectionnez "Déplacer à la racine"
3. La note devient une note principale

## Profondeur des sous-notes

Classic prend en charge plusieurs niveaux d'imbrication :

```
📁 Projet
  📄 Aperçu
  📁 Recherche
    📄 Entretiens utilisateurs
    📄 Résultats de l'enquête
    📁 Analyse
      📄 Conclusions clés
      📄 Recommandations
  📁 Planification
    📄 Chronologie
    📄 Ressources
```

### Meilleures pratiques

- **Limiter la profondeur** : 3-4 niveaux maximum pour la clarté
- **Regroupement logique** : Regroupez le contenu connexe ensemble
- **Nommage clair** : Utilisez des noms descriptifs pour les sous-notes

## Cas d'utilisation

### Documentation de projet

```
Projet Alpha
├── Exigences
├── Architecture
│   ├── Frontend
│   ├── Backend
│   └── Base de données
├── Notes de réunion
└── Rapports d'avancement
```

### Base de connaissances

```
Programmation
├── JavaScript
│   ├── Bases
│   ├── Avancé
│   └── Meilleures pratiques
├── Python
│   ├── Bases
│   └── Bibliothèques
└── Ressources
```

### Notes d'étude

```
Biologie 101
├── Structure cellulaire
│   ├── Membrane
│   ├── Noyau
│   └── Organites
├── Génétique
│   ├── ADN
│   └── ARN
└── Évolution
```

## Liaison avec les sous-notes

### Rétroliens

Les sous-notes créent automatiquement des rétroliens vers les notes parentes :

- Voir la section "Références liées"
- Naviguer entre les notes connexes
- Comprendre les relations entre les notes

### Wikilinks

Liez aux sous-notes depuis n'importe où :

```markdown
Voir [[Projet/Recherche/Analyse]] pour plus de détails.
```

## Conseils

### Convention de nommage

Utilisez un nommage clair et cohérent :

```
✅ Bon :
Projet/Exigences/Fonctionnelles
Projet/Exigences/Non-fonctionnelles

❌ À éviter :
Projet/ex/fonc
Projet/ex/nf
```

### Navigation par fil d'Ariane

Utilisez le fil d'Ariane pour comprendre votre emplacement :

```
Projet > Recherche > Analyse
```

### Recherche

La recherche inclut automatiquement les sous-notes :

- Trouvez du contenu à tous les niveaux
- Filtrez par profondeur de note
- Navigation rapide

### Modèles

Appliquez des modèles aux sous-notes :

1. Créez une sous-note
2. Utilisez la commande slash `/template`
3. Choisissez le modèle

## Raccourcis clavier

| Action | Raccourci |
|--------|-----------|
| Nouvelle sous-note | `Cmd/Ctrl+Shift+N` |
| Tout développer | `Cmd/Ctrl+Down` |
| Tout réduire | `Cmd/Ctrl+Up` |
| Déplacer vers le haut | `Opt/Alt+Up` |
| Déplacer vers le bas | `Opt/Alt+Down` |
| Promouvoir | `Opt/Alt+Left` |
| Rétrograder | `Opt/Alt+Right` |

## Dépannage

### Sous-note non affichée

- Vérifiez si le parent est réduit
- Vérifiez que la note n'a pas été déplacée
- Rafraîchissez la barre latérale

### Impossible de créer une sous-note

- Assurez-vous que la note parente existe
- Vérifiez les permissions
- Essayez la méthode du menu contextuel

### Sous-notes perdues

Utilisez la recherche pour trouver les notes manquantes :

1. Ouvrez la recherche (`Cmd/Ctrl+F`)
2. Tapez le nom de la note
3. Voir le chemin complet dans les résultats
