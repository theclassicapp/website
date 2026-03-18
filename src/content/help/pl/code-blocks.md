# Bloki Kodu

Classic zapewnia doskonałą obsługę fragmentów kodu z podświetlaniem składni dla dziesiątek języków programowania.

## Kod w Linii

Użyj pojedynczych odwrotnych cudzysłowów dla kodu w linii

```markdown
Użyj funkcji `console.log()` do debugowania.
```

Renderuje się jako: Użyj funkcji `console.log()` do debugowania.

## Bloki Kodu

Użyj potrójnych odwrotnych cudzysłowów dla wieloliniowego kodu

````markdown
```
function greet(name) {
  return `Witaj, ${name}!`;
}
```
````

## Podświetlanie Składni

Określ język po otwierających odwrotnych cudzysłowach

### JavaScript

````markdown
```javascript
const greeting = (name) => {
  console.log(`Witaj, ${name}!`);
};
```
````

### Python

````markdown
```python
def greet(name):
    print(f"Witaj, {name}!")
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
  return `Witaj, ${user.name}!`;
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
  <h1>Witaj Świecie</h1>
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
echo "Witaj, Świecie!"
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

## Obsługiwane Języki

Classic obsługuje podświetlanie składni dla 100+ języków w tym

| Kategoria | Języki |
|----------|-----------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **Backend** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **Systemowe** | C, C++, Rust, Assembly |
| **Dane** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **Mobilne** | Swift, Kotlin, Dart, Objective-C |
| **Funkcyjne** | Haskell, Elixir, Clojure, F# |
| **Konfiguracja** | Dockerfile, Kubernetes, Nginx |

## Numeracja Linii

Włącz numerację linii dla bloków kodu

````markdown
```javascript showLineNumbers
function example() {
  return "z numeracją linii";
}
```
````

## Podświetlanie Linii

Podświetl konkretne linie

````markdown
```javascript {2-3}
function example() {
  console.log("To jest podświetlone");  // podświetlone
  return "demo";                        // podświetlone
}
```
````

## Przycisk Kopiowania

Bloki kodu domyślnie zawierają przycisk kopiowania. Kliknij, aby skopiować kod do schowka.

## Opcje Bloku Kodu

### Tytuł/Nazwa Pliku

Dodaj tytuł do swojego bloku kodu

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## Wskazówki

### Wcięcia

Zachowaj odpowiednie wcięcia dla czytelnego kodu

```markdown
// Dobrze
if (condition) {
  doSomething();
}

// Unikaj
if (condition) {
doSomething();
}
```

### Ucieczka Odwrotnych Cudzysłowów

Aby pokazać odwrotne cudzysłowowe wewnątrz bloku kodu, użyj więcej odwrotnych cudzysłowów na zewnątrz

`````markdown
````markdown
```
kod z odwrotnymi cudzysłowami
```
````
`````

### Długie Linie

Długie linie będą przewijać się poziomo wewnątrz bloku kodu

### Spójny Styl

Utrzymuj spójny styl kodowania w swojej dokumentacji

## Częste Przypadki Użycia

### Fragmenty Konfiguracji

Udostępniaj przykłady konfiguracji

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### Przykłady Poleceń

Dokumentuj polecenia CLI

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev
```

### Przykłady API

Pokazuj użycie API

```typescript
// Pobierz dane użytkownika
const response = await fetch('/api/users/1');
const user = await response.json();
```

### Przykłady Błędów

Dokumentuj częste błędy i rozwiązania

```javascript
// ❌ Źle
const data = JSON.parse(invalidJson);

// ✅ Dobrze
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('Nieprawidłowy JSON');
}
```
