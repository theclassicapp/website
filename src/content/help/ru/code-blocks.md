# Блоки кода

Classic обеспечивает отличную поддержку фрагментов кода с подсветкой синтаксиса для десятков языков программирования.

## Встроенный код

Используйте одинарные обратные кавычки для встроенного кода:

```markdown
Используйте функцию `console.log()` для отладки.
```

Отображается как: Используйте функцию `console.log()` для отладки.

## Блоки кода

Используйте тройные обратные кавычки для многострочного кода:

````markdown
```
function greet(name) {
  return `Привет, ${name}!`;
}
```
````

## Подсветка синтаксиса

Укажите язык после открывающих обратных кавычек:

### JavaScript

````markdown
```javascript
const greeting = (name) => {
  console.log(`Привет, ${name}!`);
};
```
````

### Python

````markdown
```python
def greet(name):
    print(f"Привет, {name}!")
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
  return `Привет, ${user.name}!`;
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
  <h1>Привет, мир</h1>
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
echo "Привет, мир!"
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

## Поддерживаемые языки

Classic поддерживает подсветку синтаксиса для 100+ языков, включая:

| Категория | Языки |
|----------|-----------|
| **Веб** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **Бэкенд** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **Системные** | C, C++, Rust, Assembly |
| **Данные** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **Мобильные** | Swift, Kotlin, Dart, Objective-C |
| **Функциональные** | Haskell, Elixir, Clojure, F# |
| **Конфигурация** | Dockerfile, Kubernetes, Nginx |

## Нумерация строк

Включите нумерацию строк для блоков кода:

````markdown
```javascript showLineNumbers
function example() {
  return "с нумерацией строк";
}
```
````

## Подсветка строк

Подсветите определённые строки:

````markdown
```javascript {2-3}
function example() {
  console.log("Это подсвечено");  // подсвечено
  return "демо";                        // подсвечено
}
```
````

## Кнопка копирования

Блоки кода включают кнопку копирования по умолчанию. Нажмите, чтобы скопировать код в буфер обмена.

## Параметры блока кода

### Заголовок/имя файла

Добавьте заголовок к блоку кода:

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## Советы

### Отступы

Сохраняйте правильные отступы для читаемого кода:

```markdown
// Хорошо
if (condition) {
  doSomething();
}

// Избегайте
if (condition) {
doSomething();
}
```

### Экранирование обратных кавычек

Чтобы показать обратные кавычки внутри блока кода, используйте больше кавычек снаружи:

`````markdown
````markdown
```
код с обратными кавычками
```
````
`````

### Длинные строки

Длинные строки будут прокручиваться горизонтально внутри блока кода.

### Согласованный стиль

Поддерживайте согласованный стиль кодирования в документации.

## Распространённые примеры использования

### Фрагменты конфигурации

Делитесь примерами конфигурации:

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### Примеры команд

Документируйте CLI-команды:

```bash
# Установка зависимостей
npm install

# Запуск сервера разработки
npm run dev
```

### Примеры API

Показывайте использование API:

```typescript
// Получение данных пользователя
const response = await fetch('/api/users/1');
const user = await response.json();
```

### Примеры ошибок

Документируйте распространённые ошибки и решения:

```javascript
// ❌ Неправильно
const data = JSON.parse(invalidJson);

// ✅ Правильно
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('Неверный JSON');
}
```
