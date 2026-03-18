# Recherche

Trouvez n'importe quelle note instantanément avec la recherche puissante de Classic. La recherche en texte intégral, les filtres et les opérateurs vous aident à localiser exactement ce dont vous avez besoin.

## Recherche de base

### Ouvrir la recherche

| Plateforme | Raccourci |
|------------|-----------|
| **macOS** | `Cmd+F` |
| **Windows/Linux** | `Ctrl+F` |

Ou cliquez sur la barre de recherche dans la barre latérale.

### Comment ça fonctionne

1. Ouvrez la recherche
2. Commencez à taper
3. Les résultats apparaissent instantanément
4. Cliquez pour ouvrir une note

## Fonctionnalités de recherche

### Recherche en texte intégral

Classic recherche dans :

- Titres des notes
- Contenu des notes
- Tags
- Noms de fichiers

### Résultats en temps réel

Les résultats se mettent à jour pendant que vous tapez :

- Pas besoin d'appuyer sur Entrée
- Retour instantané
- Correspondance floue activée

### Surlignage de recherche

Les termes trouvés sont surlignés dans les résultats :

- Voir le contexte autour des correspondances
- Identifier rapidement les notes pertinentes

## Opérateurs de recherche

### Correspondance exacte

Utilisez des guillemets pour les phrases exactes :

```
"planification de projet"
"notes de réunion"
```

### Recherche par tag

Trouvez des notes avec des tags spécifiques :

```
tag:travail
tag:reunions
tag:urgent
```

### Exclure des termes

Utilisez `-` pour exclure :

```
projet -archive
reunion -annule
```

### Recherche OU

Trouvez des notes avec n'importe quel terme :

```
projet OR initiative
```

### Plage de dates

Recherchez par date :

```
created:2024-01-01..2024-12-31
modified:last-week
```

### Type de fichier

Filtrez par extension :

```
ext:md
ext:txt
```

## Recherche avancée

### Combiner des opérateurs

Construisez des requêtes complexes :

```
tag:travail -tag:archive created:last-week
"reunion" tag:projet-alpha
```

### Recherche par chemin

Recherchez dans des dossiers :

```
path:Projets/
path:Archive/
```

### Recherche par titre

Recherchez uniquement les titres :

```
title:FeuilleDeRoute
title:Reunion
```

### Recherche de contenu

Recherchez uniquement le contenu (exclure les titres) :

```
content:important
content:echeance
```

## Filtres de recherche

### Par tag

1. Tapez votre recherche
2. Cliquez sur un tag pour filtrer
3. Les résultats se restreignent aux notes étiquetées

### Par date

Filtrez par date de modification :

- Aujourd'hui
- Cette semaine
- Ce mois
- Plage personnalisée

### Par dossier

Limitez la recherche à un dossier :

1. Faites un clic droit sur un dossier
2. Sélectionnez "Rechercher dans le dossier"
3. Résultats limités à ce dossier

## Résultats de recherche

### Tri

Triez les résultats par :

- **Pertinence** (par défaut)
- **Date de modification** (plus récent en premier)
- **Date de création** (plus récent en premier)
- **Titre** (alphabétique)

### Aperçu des résultats

Survolez les résultats pour prévisualiser :

- Premières lignes affichées
- Termes correspondants surlignés
- Tags affichés

### Contexte

Voyez où la correspondance s'est produite :

- Affiche le texte environnant
- Surligne la correspondance
- Cliquez pour aller à l'emplacement

## Historique de recherche

### Recherches récentes

Accédez aux recherches précédentes :

1. Cliquez dans la barre de recherche
2. Voir les recherches récentes
3. Cliquez pour réexécuter

### Effacer l'historique

1. Ouvrez les Paramètres
2. Allez dans Confidentialité
3. Cliquez sur "Effacer l'historique de recherche"

## Conseils

### Utiliser des termes spécifiques

Plus spécifique = meilleurs résultats :

```
✅ "Budget marketing T4"
❌ budget
```

### Combiner avec des tags

Réduisez rapidement les résultats :

```
projet tag:urgent
```

### Utiliser des exclusions

Filtrez le bruit :

```
reunion -tag:archive
```

### Sauvegarder les recherches fréquentes

Créez des recherches sauvegardées :

1. Entrez votre recherche
2. Cliquez sur "Sauvegarder la recherche"
3. Nommez-la
4. Accédez depuis la barre latérale

## Navigation clavier

| Action | Raccourci |
|--------|-----------|
| Ouvrir la recherche | `Cmd/Ctrl+F` |
| Résultat suivant | `Entrée` ou `Bas` |
| Résultat précédent | `Shift+Entrée` ou `Haut` |
| Fermer la recherche | `Echap` |

## Paramètres de recherche

### Personnaliser dans les Paramètres

| Paramètre | Options |
|-----------|---------|
| Sensible à la casse | On/Off |
| Rechercher les titres | On/Off |
| Rechercher le contenu | On/Off |
| Rechercher les tags | On/Off |
| Inclure les archivés | On/Off |

## Cas d'utilisation

### Trouver d'anciennes notes

```
"reunion" date:last-year
```

### Recherche de projet

```
path:Projets/ tag:recherche
```

### Éléments d'action

```
"AFAIRE" OR "AFIXER" -tag:fait
```

### Travail récent

```
modified:this-week
```

## Dépannage

### Aucun résultat trouvé

- Vérifiez l'orthographe
- Supprimez les filtres
- Essayez des termes plus larges
- Vérifiez si la note est archivée

### Recherche lente

- Les grandes collections de notes peuvent prendre plus de temps
- Désactivez la sensibilité à la casse
- Réduisez la portée de la recherche

### Notes manquantes

- La note peut être dans un dossier différent
- Vérifiez si le tag est correct
- Vérifiez que la note n'est pas archivée
