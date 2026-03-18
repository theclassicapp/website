# Blocs de code

Classic fournit un excellent support pour les extraits de code avec coloration syntaxique pour des dizaines de langages de programmation.

## Code en ligne

Utilisez des accents graves simples pour le code en ligne :

```markdown
Utilisez la fonction `console.log()` pour le débogage.
```

S'affiche comme : Utilisez la fonction `console.log()` pour le débogage.

## Blocs de code

Utilisez des accents graves triples pour le code multi-lignes :

````markdown
```
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

## Coloration syntaxique

Spécifiez le langage après les accents graves d'ouverture :

### JavaScript

````markdown
```javascript
const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};
```
````

### Python

````markdown
```python
def greet(name):
    print(f"Hello, {name}!")
```
````

### TypeScript

````markdown
```typescript
interface User {
  name: string;
  age: number;
}

function greet(user: User): string {
  return `Hello, ${user.name}!`;
}
```
````

### CSS

````markdown
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
````

### HTML

````markdown
```html
<div class="container">
  <h1>Hello World</h1>
</div>
```
````

### SQL

````markdown
```sql
SELECT * FROM users
WHERE created_at > '2024-01-01'
ORDER BY name ASC;
```
````

### Bash/Shell

````markdown
```bash
#!/bin/bash
echo "Hello, World!"
```
````

### JSON

````markdown
```json
{
  "name": "Classic",
  "version": "1.0.0",
  "features": ["markdown", "local-first"]
}
```
````

## Langages pris en charge

Classic prend en charge la coloration syntaxique pour plus de 100 langages, notamment :

| Catégorie | Langages |
|-----------|----------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **Backend** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **Systèmes** | C, C++, Rust, Assembly |
| **Données** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **Mobile** | Swift, Kotlin, Dart, Objective-C |
| **Fonctionnel** | Haskell, Elixir, Clojure, F# |
| **Config** | Dockerfile, Kubernetes, Nginx |

## Numéros de ligne

Activez les numéros de ligne pour les blocs de code :

````markdown
```javascript showLineNumbers
function example() {
  return "avec numéros de ligne";
}
```
````

## Surlignage de ligne

Surlignez des lignes spécifiques :

````markdown
```javascript {2-3}
function example() {
  console.log("Ceci est surligné");  // surligné
  return "demo";                     // surligné
}
```
````

## Bouton de copie

Les blocs de code incluent un bouton de copie par défaut. Cliquez pour copier le code dans votre presse-papiers.

## Options de bloc de code

### Titre/Nom de fichier

Ajoutez un titre à votre bloc de code :

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## Conseils

### Indentation

Préservez une indentation correcte pour un code lisible :

```markdown
// Bon
if (condition) {
  doSomething();
}

// À éviter
if (condition) {
doSomething();
}
```

### Échapper les accents graves

Pour afficher des accents graves dans un bloc de code, utilisez plus d'accents graves à l'extérieur :

`````markdown
````markdown
```
code avec accents graves
```
````
`````

### Lignes longues

Les lignes longues défileront horizontalement dans le bloc de code.

### Style cohérent

Maintenez un style de codage cohérent dans votre documentation.

## Cas d'utilisation courants

### Extraits de configuration

Partagez des exemples de configuration :

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### Exemples de commandes

Documentez les commandes CLI :

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Exemples d'API

Montrez l'utilisation de l'API :

```typescript
// Récupérer les données utilisateur
const response = await fetch('/api/users/1');
const user = await response.json();
```

### Exemples d'erreurs

Documentez les erreurs courantes et leurs solutions :

```javascript
// ❌ Faux
const data = JSON.parse(invalidJson);

// ✅ Correct
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('JSON invalide');
}
```
