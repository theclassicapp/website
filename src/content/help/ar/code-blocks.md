# كتل الكود البريد كلاسيك دعمً ممتازة للعشرات العشر (syntax highlighting) لعشراتات لغات البر البر الامية.

## Inline code
Use single backticks for inline code
```markdown
Use the `console.log()` function for debugging.
```
```

### Inline code: استخدام علامات `console.log()` function for debugging.
```
## code blocks
Use triple backticks for multi-line code
````markdown
function greet(name) {
  return `Hello, ${name}!`;
}
```
```
## syntax highlighting
Specify the language after the opening backticks

### JavaScript
````markdown
```javascript
const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};
```
```
### Python
````markdown
```python
def greet(name):
    print(f"Hello, {name}!")
```
```
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
```
### CSS
````markdown
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
```
### HTML
````markdown
```html
<div class="container">
  <h1>Hello World</h1>
</div>
```
```
### SQL
````markdown
```sql
SELECT * FROM users
WHERE created_at > '2024-01-01'
ORDER BY name ASC;
```
```
### Bash/Shell
````markdown
```bash
#!/bin/bash
echo "Hello, World!"
```
```
### JSON
````markdown
```json
{
  "name": "Classic",
  "version": "1.0.0",
  "features": ["markdown", "local-first"]
}
```
```
## supported languages
Classic supports syntax highlighting for 100+ languages including:
| category | languages |
|----------|-----------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **Backend** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **Systems** | C, C++, Rust, Assembly |
| **Data** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **Mobile** | Swift, Kotlin, Dart, Objective-C |
| **Functional** | Haskell, Elixir, Clojure, F# |
| **Config** | Dockerfile, Kubernetes, Nginx |
## line numbers
Enable line numbers for code blocks
````markdown
```javascript showLineNumbers
function example() {
  return "with line numbers";
}
```
```
## line highlighting
Highlight specific lines
````markdown
```javascript {2-3}
function example() {
  console.log("This is highlighted");  // highlighted
  return "demo";                        // highlighted
}
```
```
## copy button
Code blocks include a copy button by default. Click to copy the code to your clipboard.

## code block options
### title/filename
Add a title to your code block
````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
```
## tips
### indentation
Preserve proper indentation for readable code
```markdown
// Good
if (condition) {
  doSomething();
}

// Avoid
if (condition) {
doSomething();
}
```
### escaping backticks
To show backticks inside a code block, use more backticks outside
````markdown
````markdown
`````javascript
code with backticks
```
````
`````markdown
### long lines
Long lines will scroll horizontally within the code block
### consistent style
Maintain consistent coding style within your documentation
## common use cases
### configuration snippets
Share configuration examples
```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```
### command examples
Document CLI commands
```bash
# Install dependencies

npm install

# Start development server
npm run dev
```
### API examples
Show API usage
```typescript
// Fetch user data
const response = await fetch('/api/users/1');
const user = await response.json();
```
### error examples
Document common errors and solutions
```javascript
// Wrong
const data = JSON.parse(invalidJson);

// Correct
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('Invalid JSON');
}
```
