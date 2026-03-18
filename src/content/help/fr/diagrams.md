# Diagrammes Mermaid

Créez de beaux diagrammes directement dans vos notes en utilisant la syntaxe Mermaid.

## Utilisation de base

Pour créer un diagramme Mermaid, utilisez un bloc de code avec l'identifiant de langage `mermaid` :

```mermaid
graph TD
    A[Début] --> B[Traitement]
    B --> C[Fin]
```

## Organigramme

```mermaid
flowchart TD
    A[Début] --> B{Est-ce que ça fonctionne ?}
    B -->|Oui| C[Super !]
    B -->|Non| D[Débogage]
    D --> B
```

## Diagramme de séquence

```mermaid
sequenceDiagram
    participant Utilisateur
    participant Navigateur
    participant Serveur

    Utilisateur->>Navigateur: Clique sur le bouton
    Navigateur->>Serveur: Envoie la requête
    Serveur-->>Navigateur: Retourne les données
    Navigateur-->>Utilisateur: Affiche le résultat
```

## Diagramme de classes

```mermaid
classDiagram
    class Note {
        +String titre
        +String contenu
        +DateTime creeLe
        +sauvegarder()
    }
    class Tag {
        +String nom
        +ajouterNote()
    }
    Note "1" -- "*" Tag
```

## Diagramme d'état

```mermaid
stateDiagram-v2
    [*] --> Brouillon
    Brouillon --> EnCours : Commencer l'édition
    EnCours --> Revision : Terminer
    Revision --> Publie : Approuver
    Revision --> Brouillon : Rejeter
    Publie --> [*]
```

## Diagramme de Gantt

```mermaid
gantt
    title Chronologie du projet
    dateFormat  YYYY-MM-DD
    section Planification
        Recherche     :a1, 2024-01-01, 30d
        Conception    :2024-01-15, 20d
    section Développement
        Backend       :2024-02-01, 45d
        Frontend      :2024-02-15, 30d
    section Tests
        Tests QA      :2024-03-01, 15d
```

## Diagramme circulaire

```mermaid
pie showPets
    "Chiens" : 386
    "Chats" : 85
    "Lapins" : 15
```

## Carte mentale

```mermaid
mindmap
  root((Classic))
    Fonctionnalites((Fonctionnalités))
      Editeur((Éditeur))
      Organisation((Organisation))
    Avantages((Avantages))
      Confidentialite((Confidentialité))
      Vitesse((Vitesse))
```

## Conseils

### Style

- Utilisez des sous-graphes pour organiser les diagrammes complexes
- Ajoutez des styles et des thèmes pour une cohérence visuelle
- Gardez les diagrammes simples et lisibles

### Performance

- Les grands diagrammes peuvent ralentir l'éditeur
- Envisagez de diviser les diagrammes complexes en plus petits
- Utilisez `%%{init: ... }%%` pour la configuration

### Problèmes courants

**Le diagramme ne s'affiche pas ?**
- Vérifiez la syntaxe Mermaid
- Assurez-vous que le bloc de code a le langage `mermaid`
- Recherchez les erreurs de syntaxe dans l'aperçu

**Diagramme trop petit/grand ?**
- Utilisez `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` pour ajuster la taille

## Ressources

- [Documentation Mermaid](https://mermaid.js.org/)
- [Éditeur Mermaid en ligne](https://mermaid.live/)
- [GitHub Mermaid](https://github.com/mermaid-js/mermaid)
