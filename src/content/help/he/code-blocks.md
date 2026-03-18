# בלוקי קוד

Classic מספק תמיכה מצוינת בקטעי קוד עם הדגשת תחביר לעשרות שפות תכנות.

## קוד בתוך השורה

השתמשו בגרשיים הפוכים בודדים לקוד בתוך השורה

```markdown
השתמשו בפונקציה `console.log()` לאיתור באגים.
```

מעובד כ: השתמשו בפונקציה `console.log()` לאיתור באגים.

## בלוקי קוד

השתמשו בשלושה גרשיים הפוכים לקוד מרובה שורות

````markdown
```
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

## הדגשת תחביר

ציינו את השפה אחרי הגרשיים ההפוכים הפותחים

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

## שפות נתמכות

Classic תומך בהדגשת תחביר ליותר מ-100 שפות כולל

| קטגוריה | שפות |
|----------|-----------|
| **אינטרנט** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **Backend** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **מערכות** | C, C++, Rust, Assembly |
| **נתונים** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **מובייל** | Swift, Kotlin, Dart, Objective-C |
| **פונקציונלי** | Haskell, Elixir, Clojure, F# |
| **קונפיג** | Dockerfile, Kubernetes, Nginx |

## מספור שורות

הפעילו מספור שורות לבלוקי קוד

````markdown
```javascript showLineNumbers
function example() {
  return "עם מספור שורות";
}
```
````

## הדגשת שורות

הדגישו שורות ספציפיות

````markdown
```javascript {2-3}
function example() {
  console.log("זה מודגש");  // מודגש
  return "demo";                        // מודגש
}
```
````

## כפתור העתקה

בלוקי קוד כוללים כפתור העתקה כברירת מחדל. לחצו להעתקת הקוד ללוח.

## אפשרויות בלוק קוד

### כותרת/שם קובץ

הוסיפו כותרת לבלוק הקוד שלכם

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## טיפים

### הזחה

שמרו על הזחה נכונה לקוד קריא

```markdown
// טוב
if (condition) {
  doSomething();
}

// הימנעו
if (condition) {
doSomething();
}
```

### בריחה מגרשיים הפוכים

כדי להציג גרשיים הפוכים בתוך בלוק קוד, השתמשו ביותר גרשיים הפוכים בחוץ

`````markdown
````markdown
```
קוד עם גרשיים הפוכים
```
````
`````

### שורות ארוכות

שורות ארוכות יגללו אופקית בתוך בלוק הקוד

### סגנון עקבי

שמרו על סגנון קידוד עקבי בתוך התיעוד שלכם

## מקרי שימוש נפוצים

### קטעי קונפיגורציה

שתפו דוגמאות קונפיגורציה

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### דוגמאות פקודות

תעדו פקודות CLI

```bash
# התקנת תלויות
npm install

# הפעלת שרת פיתוח
npm run dev
```

### דוגמאות API

הציגו שימוש ב-API

```typescript
// שליפת נתוני משתמש
const response = await fetch('/api/users/1');
const user = await response.json();
```

### דוגמאות שגיאות

תעדו שגיאות נפוצות ופתרונות

```javascript
// ❌ שגוי
const data = JSON.parse(invalidJson);

// ✅ נכון
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('JSON לא תקין');
}
```
