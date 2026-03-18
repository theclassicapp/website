# कोड ब्लॉक्स

Classic दर्जनों प्रोग्रामिंग भाषाओं के लिए सिंटैक्स हाइलाइटिंग के साथ कोड स्निपेट्स के लिए उत्कृष्ट समर्थन प्रदान करता है।

## इनलाइन कोड

इनलाइन कोड के लिए सिंगल बैकटिक्स का उपयोग करें:

```markdown
डिबगिंग के लिए `console.log()` फंक्शन का उपयोग करें।
```

यह इस रूप में रेंडर होता है: डिबगिंग के लिए `console.log()` फंक्शन का उपयोग करें।

## कोड ब्लॉक्स

मल्टी-लाइन कोड के लिए ट्रिपल बैकटिक्स का उपयोग करें:

````markdown
```
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

## सिंटैक्स हाइलाइटिंग

ओपनिंग बैकटिक्स के बाद भाषा निर्दिष्ट करें:

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

## समर्थित भाषाएं

Classic 100+ भाषाओं के लिए सिंटैक्स हाइलाइटिंग का समर्थन करता है:

| श्रेणी | भाषाएं |
|----------|-----------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **Backend** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **Systems** | C, C++, Rust, Assembly |
| **Data** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **Mobile** | Swift, Kotlin, Dart, Objective-C |
| **Functional** | Haskell, Elixir, Clojure, F# |
| **Config** | Dockerfile, Kubernetes, Nginx |

## लाइन नंबर

कोड ब्लॉक्स के लिए लाइन नंबर सक्षम करें:

````markdown
```javascript showLineNumbers
function example() {
  return "with line numbers";
}
```
````

## लाइन हाइलाइटिंग

विशिष्ट लाइनों को हाइलाइट करें:

````markdown
```javascript {2-3}
function example() {
  console.log("This is highlighted");  // highlighted
  return "demo";                        // highlighted
}
```
````

## कॉपी बटन

कोड ब्लॉक्स में डिफ़ॉल्ट रूप से एक कॉपी बटन शामिल है। कोड को अपने क्लिपबोर्ड पर कॉपी करने के लिए क्लिक करें।

## कोड ब्लॉक विकल्प

### शीर्षक/फ़ाइलनाम

अपने कोड ब्लॉक में शीर्षक जोड़ें:

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## टिप्स

### इंडेंटेशन

पठनीय कोड के लिए उचित इंडेंटेशन बनाए रखें:

```markdown
// अच्छा
if (condition) {
  doSomething();
}

// बचें
if (condition) {
doSomething();
}
```

### बैकटिक्स एस्केप करना

कोड ब्लॉक के अंदर बैकटिक्स दिखाने के लिए, बाहर अधिक बैकटिक्स का उपयोग करें:

`````markdown
````markdown
```
code with backticks
```
````
`````

### लंबी लाइनें

लंबी लाइनें कोड ब्लॉक के भीतर क्षैतिज रूप से स्क्रॉल होंगी।

### सुसंगत स्टाइल

अपने डॉक्यूमेंटेशन में सुसंगत कोडिंग स्टाइल बनाए रखें।

## सामान्य उपयोग के मामले

### कॉन्फ़िगरेशन स्निपेट्स

कॉन्फ़िगरेशन उदाहरण साझा करें:

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### कमांड उदाहरण

CLI कमांड डॉक्यूमेंट करें:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### API उदाहरण

API उपयोग दिखाएं:

```typescript
// Fetch user data
const response = await fetch('/api/users/1');
const user = await response.json();
```

### त्रुटि उदाहरण

सामान्य त्रुटियों और समाधानों को डॉक्यूमेंट करें:

```javascript
// ❌ गलत
const data = JSON.parse(invalidJson);

// ✅ सही
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('Invalid JSON');
}
```
