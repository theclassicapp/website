# Codeblokken

Classic biedt uitstekende ondersteuning voor codefragmenten met syntaxiskleuring voor tientallen programmeertalen.

## Inline Code

Gebruik enkele backticks voor inline code:

```markdown
Gebruik de `console.log()` functie voor debugging.
```

Wordt weergegeven als: Gebruik de `console.log()` functie voor debugging.

## Codeblokken

Gebruik driedubbele backticks voor code met meerdere regels:

````markdown
```
function greet(name) {
  return `Hallo, ${name}!`;
}
```
````

## Syntaxiskleuring

Specificeer de taal na de openings-backticks:

### JavaScript

````markdown
```javascript
const greeting = (name) => {
  console.log(`Hallo, ${name}!`);
};
```
````

### Python

````markdown
```python
def greet(name):
    print(f"Hallo, {name}!")
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
  return `Hallo, ${user.name}!`;
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
  <h1>Hallo Wereld</h1>
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
echo "Hallo, Wereld!"
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

## Ondersteunde Talen

Classic ondersteunt syntaxiskleuring voor 100+ talen, waaronder:

| Categorie | Talen |
|----------|-----------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **Backend** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **Systems** | C, C++, Rust, Assembly |
| **Data** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **Mobiel** | Swift, Kotlin, Dart, Objective-C |
| **Functioneel** | Haskell, Elixir, Clojure, F# |
| **Config** | Dockerfile, Kubernetes, Nginx |

## Regelnummers

Schakel regelnummers in voor codeblokken:

````markdown
```javascript showLineNumbers
function example() {
  return "met regelnummers";
}
```
````

## Regelmarkering

Markeer specifieke regels:

````markdown
```javascript {2-3}
function example() {
  console.log("Dit is gemarkeerd");  // gemarkeerd
  return "demo";                        // gemarkeerd
}
```
````

## Kopieerknop

Codeblokken hebben standaard een kopieerknop. Klik om de code naar je klembord te kopiëren.

## Codeblok Opties

### Titel/Bestandsnaam

Voeg een titel toe aan je codeblok:

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## Tips

### Inspringing

Behoud correcte inspringing voor leesbare code:

```markdown
// Goed
if (condition) {
  doSomething();
}

// Vermijden
if (condition) {
doSomething();
}
```

### Backticks Ongedaan Maken

Om backticks binnen een codeblok weer te geven, gebruik meer backticks aan de buitenkant:

`````markdown
````markdown
```
code met backticks
```
````
`````

### Lange Regels

Lange regels scrollen horizontaal binnen het codeblok.

### Consistente Stijl

Handhaaf een consistente codeerstijl binnen je documentatie.

## Veelvoorkomende Gebruiken

### Configuratiefragmenten

Deel configuratievoorbeelden:

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### Commando-voorbeelden

Documenteer CLI-commando's:

```bash
# Installeer afhankelijkheden
npm install

# Start ontwikkelserver
npm run dev
```

### API-voorbeelden

Toon API-gebruik:

```typescript
// Haal gebruikersdata op
const response = await fetch('/api/users/1');
const user = await response.json();
```

### Foutvoorbeelden

Documenteer veelvoorkomende fouten en oplossingen:

```javascript
// ❌ Fout
const data = JSON.parse(invalidJson);

// ✅ Correct
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('Ongeldige JSON');
}
```
