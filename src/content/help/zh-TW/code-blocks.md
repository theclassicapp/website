# 程式碼區塊

Classic 為數十種程式語言提供優秀的程式碼片段支援，並提供語法高亮。

## 行內程式碼

使用單個反引號表示行內程式碼：

```markdown
使用 `console.log()` 函數進行除錯。
```

渲染為：使用 `console.log()` 函數進行除錯。

## 程式碼區塊

使用三個反引號表示多行程式碼：

````markdown
```
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

## 語法高亮

在開頭的反引號後指定語言：

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

## 支援的語言

Classic 支援 100+ 種語言的語法高亮，包括：

| 類別 | 語言 |
|------|------|
| **網頁** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **後端** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **系統** | C, C++, Rust, Assembly |
| **資料** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **行動** | Swift, Kotlin, Dart, Objective-C |
| **函數式** | Haskell, Elixir, Clojure, F# |
| **設定** | Dockerfile, Kubernetes, Nginx |

## 行號

為程式碼區塊啟用行號：

````markdown
```javascript showLineNumbers
function example() {
  return "with line numbers";
}
```
````

## 行高亮

高亮特定行：

````markdown
```javascript {2-3}
function example() {
  console.log("This is highlighted");  // 高亮
  return "demo";                        // 高亮
}
```
````

## 複製按鈕

程式碼區塊預設包含複製按鈕。點擊以將程式碼複製到剪貼簿。

## 程式碼區塊選項

### 標題/檔名

為程式碼區塊新增標題：

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## 提示

### 縮排

保持適當的縮排以利程式碼閱讀：

```markdown
// 良好
if (condition) {
  doSomething();
}

// 避免
if (condition) {
doSomething();
}
```

### 跳脫反引號

若要在程式碼區塊中顯示反引號，請在外層使用更多反引號：

`````markdown
````markdown
```
code with backticks
```
````
`````

### 長行

長行會在程式碼區塊內水平捲動。

### 一致的風格

在文件中保持一致的程式碼風格。

## 常見使用案例

### 設定片段

分享設定範例：

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### 命令範例

記錄 CLI 命令：

```bash
# 安裝相依套件
npm install

# 啟動開發伺服器
npm run dev
```

### API 範例

顯示 API 用法：

```typescript
// 取得使用者資料
const response = await fetch('/api/users/1');
const user = await response.json();
```

### 錯誤範例

記錄常見錯誤和解決方案：

```javascript
// ❌ 錯誤
const data = JSON.parse(invalidJson);

// ✅ 正確
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('Invalid JSON');
}
```
