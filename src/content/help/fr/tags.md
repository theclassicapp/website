# Tags

Les tags sont un moyen puissant d'organiser et de catégoriser vos notes dans Classic. Trouvez le contenu connexe instantanément.

## Créer des tags

### Tags en ligne

Ajoutez des tags directement dans le contenu de votre note :

```markdown
# Notes de réunion

Discussion sur la feuille de route T4 #travail #reunions #planification
```

### Utiliser le bouton de tag

1. Cliquez sur l'icône de tag dans la barre d'outils
2. Tapez le nom de votre tag
3. Appuyez sur Entrée

### Raccourci clavier

| Plateforme | Raccourci |
|------------|-----------|
| **macOS** | `Cmd+T` |
| **Windows/Linux** | `Ctrl+T` |

## Syntaxe des tags

### Tags de base

```markdown
#projet #travail #important
```

### Tags imbriqués

Créez des hiérarchies de tags avec `/` :

```markdown
#travail/reunions
#travail/projets
#personnel/loisirs/lecture
```

### Tags multi-mots

Utilisez des tirets ou des tirets bas :

```markdown
#projet-alpha
#notes_reunion
#planification-t4
```

## Gérer les tags

### Voir tous les tags

1. Ouvrez la barre latérale
2. Trouvez la section "Tags"
3. Voir tous vos tags

### Nuage de tags

Visualisez vos tags les plus utilisés :

- Tags plus grands = plus de notes
- Cliquez sur n'importe quel tag pour filtrer
- Voir le nombre de notes par tag

### Renommer des tags

1. Faites un clic droit sur un tag
2. Sélectionnez "Renommer"
3. Entrez le nouveau nom
4. Toutes les notes se mettent à jour automatiquement

### Supprimer des tags

1. Faites un clic droit sur un tag
2. Sélectionnez "Supprimer"
3. Confirmez la suppression
4. Le tag est retiré de toutes les notes

## Rechercher par tag

### Panneau de tags

Cliquez sur un tag dans la barre latérale pour filtrer les notes.

### Syntaxe de recherche

Utilisez `tag:` dans la recherche :

```
tag:travail
tag:travail/reunions
```

### Combiner des tags

Trouvez des notes avec plusieurs tags :

```
tag:travail tag:urgent
```

### Exclure des tags

Trouvez des notes sans un tag :

```
-tag:archive
```

## Meilleures pratiques pour les tags

### Restez simple

- Utilisez 3-5 tags par note
- Soyez cohérent avec le nommage
- Évitez la prolifération de tags

### Utilisez des hiérarchies

Organisez les tags connexes :

```
#travail
  #travail/reunions
  #travail/projets
  #travail/echeances

#personnel
  #personnel/sante
  #personnel/finances
```

### Établissez des conventions

Définissez des standards de tags pour vous-même :

- **Statut** : `#afaire` `#en-cours` `#fait`
- **Priorité** : `#urgent` `#eleve` `#faible`
- **Type** : `#reunion` `#reference` `#idee`

## Suggestions de tags

Lorsque vous tapez `#`, Classic suggère les tags existants :

- Les tags récents apparaissent en premier
- Correspondance floue prise en charge
- Appuyez sur Tab pour accepter la suggestion

## Statistiques de tags

Voyez l'utilisation des tags dans les Paramètres :

- Tags les plus utilisés
- Tags inutilisés
- Tendances des tags au fil du temps

## Cas d'utilisation

### Gestion de projet

```markdown
# Lancement du projet #projet-alpha #reunion #2024-01-15

Participants : Équipe Alpha
Statut : #afaire
```

### Base de connaissances

```markdown
# Fermetures JavaScript #programmation #javascript #reference #avance

Les fermetures sont des fonctions qui ont accès à...
```

### Notes quotidiennes

```markdown
# 2024-01-15

- Réunion debout du matin #travail #reunions
- Revue de code #travail #developpement
- Séance de sport #personnel #sante
```

### Notes de lecture

```markdown
# Notes sur Atomic Habits #lecture #livres #productivite

Points clés du livre...
```

## Raccourcis clavier

| Action | Raccourci |
|--------|-----------|
| Ajouter un tag | `Cmd/Ctrl+T` |
| Rechercher des tags | `Cmd/Ctrl+F`, puis tapez `tag:` |
| Afficher le panneau de tags | `Cmd/Ctrl+Shift+T` |

## Conseils

### Nommage cohérent

Respectez une convention :

```
✅ #notes-reunion
✅ #notes_reunion
❌ #Notes Reunion (espaces non autorisés)
❌ #notesReunion (incohérent)
```

### Éviter le sur-étiquetage

Trop de tags deviennent ingérables :

```
✅ #travail #urgent #projet-alpha
❌ #travail #urgent #important #aujourd'hui #lundi #bureau #bureau #ordinateur
```

### Nettoyage périodique

Examinez et consolidez les tags régulièrement :

- Fusionnez les tags similaires
- Supprimez les tags inutilisés
- Mettez à jour les conventions

## Fonctionnalités avancées

### Dossiers intelligents basés sur les tags

Créez des dossiers qui se remplissent automatiquement en fonction des tags :

1. Créez un nouveau dossier
2. Définissez le filtre : `tag:projet`
3. Toutes les notes étiquetées apparaissent

### Tags en YAML

Ajoutez des tags au frontmatter de la note :

```yaml
---
tags:
  - travail
  - reunions
  - projet-alpha
---
```

### Alias de tags

Configurez des alias de tags dans les Paramètres :

- `#afaire` = `#tache` = `#action`
- Consolidez les tags similaires
