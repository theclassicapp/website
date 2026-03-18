# Codeblöcke

Classic bietet hervorragende Unterstützung für Code-Snippets mit Syntaxhervorhebung für Dutzende von Programmiersprachen.

## Inline-Code

Verwenden Sie einzelne Backticks für Inline-Code:

```markdown
Verwenden Sie die `console.log()`-Funktion zum Debuggen.
```

Wird dargestellt als: Verwenden Sie die `console.log()`-Funktion zum Debuggen.

## Codeblöcke

Verwenden Sie dreifache Backticks für mehrzeiligen Code:

````markdown
```
function greet(name) {
  return `Hallo, ${name}!`;
}
```
````

## Syntaxhervorhebung

Geben Sie die Sprache nach den öffnenden Backticks an:

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
  <h1>Hallo Welt</h1>
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
echo "Hallo, Welt!"
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

## Unterstützte Sprachen

Classic unterstützt Syntaxhervorhebung für über 100 Sprachen, darunter:

| Kategorie | Sprachen |
|----------|----------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **Backend** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **Systeme** | C, C++, Rust, Assembly |
| **Daten** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **Mobile** | Swift, Kotlin, Dart, Objective-C |
| **Funktional** | Haskell, Elixir, Clojure, F# |
| **Konfig** | Dockerfile, Kubernetes, Nginx |

## Zeilennummern

Aktivieren Sie Zeilennummern für Codeblöcke:

````markdown
```javascript showLineNumbers
function example() {
  return "mit Zeilennummern";
}
```
````

## Zeilenhervorhebung

Heben Sie bestimmte Zeilen hervor:

````markdown
```javascript {2-3}
function example() {
  console.log("Dies ist hervorgehoben");  // hervorgehoben
  return "demo";                          // hervorgehoben
}
```
````

## Kopier-Button

Codeblöcke enthalten standardmäßig einen Kopier-Button. Klicken Sie, um den Code in die Zwischenablage zu kopieren.

## Codeblock-Optionen

### Titel/Dateiname

Fügen Sie einen Titel zu Ihrem Codeblock hinzu:

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## Tipps

### Einrückung

Bewahren Sie die richtige Einrückung für lesbaren Code:

```markdown
// Gut
if (condition) {
  doSomething();
}

// Vermeiden
if (condition) {
doSomething();
}
```

### Backticks maskieren

Um Backticks innerhalb eines Codeblocks anzuzeigen, verwenden Sie mehr Backticks außen:

`````markdown
````markdown
```
code mit backticks
```
````
`````

### Lange Zeilen

Lange Zeilen werden horizontal innerhalb des Codeblocks gescrollt.

### Konsistenter Stil

Bewahren Sie einen konsistenten Codierungsstil innerhalb Ihrer Dokumentation.

## Häufige Anwendungsfälle

### Konfigurations-Snippets

Konfigurationsbeispiele teilen:

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### Befehlsbeispiele

CLI-Befehle dokumentieren:

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

### API-Beispiele

API-Verwendung zeigen:

```typescript
// Benutzerdaten abrufen
const response = await fetch('/api/users/1');
const user = await response.json();
```

### Fehlerbeispiele

Häufige Fehler und Lösungen dokumentieren:

```javascript
// ❌ Falsch
const data = JSON.parse(invalidJson);

// ✅ Richtig
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('Ungültiges JSON');
}
```
