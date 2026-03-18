# Bloques de Código

Classic proporciona excelente soporte para fragmentos de código con resaltado de sintaxis para docenas de lenguajes de programación.

## Código en Línea

Usa comillas invertidas simples para código en línea:

```markdown
Usa la función `console.log()` para depuración.
```

Se renderiza como: Usa la función `console.log()` para depuración.

## Bloques de Código

Usa comillas invertidas triples para código de múltiples líneas:

````markdown
```
function greet(name) {
  return `¡Hola, ${name}!`;
}
```
````

## Resaltado de Sintaxis

Especifica el lenguaje después de las comillas invertidas de apertura:

### JavaScript

````markdown
```javascript
const greeting = (name) => {
  console.log(`¡Hola, ${name}!`);
};
```
````

### Python

````markdown
```python
def greet(name):
    print(f"¡Hola, {name}!")
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
  return `¡Hola, ${user.name}!`;
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
  <h1>Hola Mundo</h1>
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
echo "¡Hola, Mundo!"
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

## Lenguajes Soportados

Classic soporta resaltado de sintaxis para más de 100 lenguajes incluyendo:

| Categoría | Lenguajes |
|-----------|-----------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **Backend** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **Sistemas** | C, C++, Rust, Assembly |
| **Datos** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **Móvil** | Swift, Kotlin, Dart, Objective-C |
| **Funcional** | Haskell, Elixir, Clojure, F# |
| **Config** | Dockerfile, Kubernetes, Nginx |

## Números de Línea

Habilita números de línea para bloques de código:

````markdown
```javascript showLineNumbers
function example() {
  return "con números de línea";
}
```
````

## Resaltado de Líneas

Resalta líneas específicas:

````markdown
```javascript {2-3}
function example() {
  console.log("Esto está resaltado");  // resaltado
  return "demo";                        // resaltado
}
```
````

## Botón de Copiar

Los bloques de código incluyen un botón de copiar por defecto. Haz clic para copiar el código al portapapeles.

## Opciones de Bloque de Código

### Título/Nombre de Archivo

Agrega un título a tu bloque de código:

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## Consejos

### Sangría

Preserva la sangría adecuada para código legible:

```markdown
// Bueno
if (condition) {
  doSomething();
}

// Evitar
if (condition) {
doSomething();
}
```

### Escapar Comillas Invertidas

Para mostrar comillas invertidas dentro de un bloque de código, usa más comillas invertidas fuera:

`````markdown
````markdown
```
código con comillas invertidas
```
````
`````

### Líneas Largas

Las líneas largas se desplazarán horizontalmente dentro del bloque de código.

### Estilo Consistente

Mantén un estilo de codificación consistente dentro de tu documentación.

## Casos de Uso Comunes

### Fragmentos de Configuración

Comparte ejemplos de configuración:

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### Ejemplos de Comandos

Documenta comandos CLI:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Ejemplos de API

Muestra uso de API:

```typescript
// Obtener datos de usuario
const response = await fetch('/api/users/1');
const user = await response.json();
```

### Ejemplos de Errores

Documenta errores comunes y soluciones:

```javascript
// ❌ Incorrecto
const data = JSON.parse(invalidJson);

// ✅ Correcto
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('JSON inválido');
}
```
