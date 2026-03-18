# Notes quotidiennes

Les Notes quotidiennes créent automatiquement une nouvelle note pour chaque jour, parfaites pour le journaling, la planification quotidienne et la capture d'informations basées sur le temps.

## Comment ça fonctionne

### Création automatique

- Une nouvelle note est créée pour chaque jour
- Les notes sont nommées en utilisant le format de date (ex: `2024-01-15.md`)
- Les notes des jours précédents sont préservées et consultables

### Accéder aux Notes quotidiennes

1. Cliquez sur **Notes quotidiennes** dans la barre latérale
2. Ou appuyez sur `Ctrl/Cmd+D`
3. La note du jour s'ouvre automatiquement

## Modèle de note quotidienne

Personnalisez le modèle pour les nouvelles notes quotidiennes.

### Modèle par défaut

```markdown
# {{date}}

## Tâches
- [ ]
- [ ]

## Notes


## Journal

```

### Personnaliser

1. Ouvrez les Paramètres
2. Allez dans Notes quotidiennes
3. Modifiez le modèle
4. Utilisez `{{date}}` pour la date actuelle

### Variables de modèle

| Variable | Description |
| -------- | ----------- |
| `{{date}}` | Date actuelle (AAAA-MM-JJ) |
| `{{time}}` | Heure actuelle (HH:mm) |
| `{{weekday}}` | Nom du jour (Lundi, etc.) |

## Fonctionnalités

### Navigation par date

- **Précédent/Suivant** : Naviguez entre les jours
- **Calendrier** : Accédez à des dates spécifiques
- **Recherche** : Trouvez du contenu dans toutes les notes quotidiennes

### Liaison automatique

- Les notes créées le même jour sont automatiquement liées
- Les rétroliens montrent les connexions entre les jours
- Les tags fonctionnent dans toutes les notes quotidiennes

### Intégration

- **Capture rapide** : Ajoutez à la note du jour avec `#today`
- **Vue calendrier** : Aperçu visuel de vos notes quotidiennes
- **Statistiques** : Suivez vos séries d'écriture

## Meilleures pratiques

### Journaling quotidien

```markdown
# 2024-01-15

## Matin
- Réveillé à 6h30
- Humeur : Énergique

## Tâches
- [x] Sport matinal
- [ ] Examiner les PR
- [ ] Réunion d'équipe à 14h

## Apprentissages
- Découvert un nouveau raccourci clavier
- Appris sur les diagrammes Mermaid

## Demain
- Se concentrer sur la documentation
- Planifier la revue de code
```

### Notes de réunion

```markdown
# 2024-01-15

## Réunion d'équipe

**Participants** : Alice, Bob, Carol

### Mises à jour
- Alice : Intégration API terminée
- Bob : Travail sur les composants UI
- Carol : Tests en cours

### Blocages
- En attente de la revue de conception

### Actions
- [ ] Alice : Déployer en staging
- [ ] Bob : Compléter la bibliothèque de composants
- [ ] Carol : Écrire les tests d'intégration
```

### Journal d'apprentissage

```markdown
# 2024-01-15

## Aujourd'hui j'ai appris

### Diagrammes Mermaid
- Peut créer des organigrammes en Markdown
- La syntaxe est simple
- L'aperçu en direct est utile

### Ressources
- [Documentation Mermaid](https://mermaid.js.org/)

## Questions
- Comment créer des diagrammes complexes ?
- Meilleures pratiques pour l'organisation des diagrammes ?
```

## Conseils

### Cohérence

- Créez des notes à la même heure chaque jour
- Utilisez un formatage cohérent
- Examinez et mettez à jour tout au long de la journée

### Organisation

- Utilisez des titres pour différentes sections
- Ajoutez des tags pour une recherche facile
- Liez aux notes connexes

### Revue

- Revue hebdomadaire des notes quotidiennes
- Extrayez les éléments importants vers des notes permanentes
- Archivez ou résumez les anciennes notes
