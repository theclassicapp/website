# Blocchi di Codice

Classic fornisce un eccellente supporto per frammenti di codice con evidenziazione della sintassi per decine di linguaggi di programmazione.

## Codice Inline

Usa singoli backtick per codice inline:

```markdown
Usa la funzione `console.log()` per il debug.
```

Viene renderizzato come: Usa la funzione `console.log()` per il debug.

## Blocchi di Codice

Usa tripli backtick per codice multi-riga:

````markdown
```
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

## Evidenziazione della Sintassi

Specifica il linguaggio dopo i backtick di apertura:

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

## Linguaggi Supportati

Classic supporta l'evidenziazione della sintassi per oltre 100 linguaggi, tra cui:

| Categoria | Linguaggi |
|-----------|-----------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **Backend** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **Sistemi** | C, C++, Rust, Assembly |
| **Dati** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **Mobile** | Swift, Kotlin, Dart, Objective-C |
| **Funzionali** | Haskell, Elixir, Clojure, F# |
| **Config** | Dockerfile, Kubernetes, Nginx |

## Numeri di Riga

Abilita i numeri di riga per i blocchi di codice:

````markdown
```javascript showLineNumbers
function example() {
  return "con numeri di riga";
}
```
````

## Evidenziazione Righe

Evidenzia righe specifiche:

````markdown
```javascript {2-3}
function example() {
  console.log("Questa è evidenziata");  // evidenziata
  return "demo";                        // evidenziata
}
```
````

## Pulsante Copia

I blocchi di codice includono un pulsante copia di default. Clicca per copiare il codice negli appunti.

## Opzioni Blocco di Codice

### Titolo/Nome File

Aggiungi un titolo al tuo blocco di codice:

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## Suggerimenti

### Indentazione

Mantieni un'indentazione corretta per codice leggibile:

```markdown
// Buono
if (condition) {
  doSomething();
}

// Evita
if (condition) {
doSomething();
}
```

### Escape dei Backtick

Per mostrare backtick dentro un blocco di codice, usa più backtick all'esterno:

`````markdown
````markdown
```
codice con backtick
```
````
`````

### Righe Lunghe

Le righe lunghe scorreranno orizzontalmente all'interno del blocco di codice

### Stile Coerente

Mantieni uno stile di codifica coerente nella tua documentazione

## Casi d'Uso Comuni

### Frammenti di Configurazione

Condividi esempi di configurazione:

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### Esempi di Comandi

Documenta comandi CLI:

```bash
# Installa dipendenze
npm install

# Avvia server di sviluppo
npm run dev
```

### Esempi API

Mostra utilizzo API:

```typescript
// Fetch dati utente
const response = await fetch('/api/users/1');
const user = await response.json();
```

### Esempi di Errori

Documenta errori comuni e soluzioni:

```javascript
// ❌ Sbagliato
const data = JSON.parse(invalidJson);

// ✅ Corretto
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('Invalid JSON');
}
```
