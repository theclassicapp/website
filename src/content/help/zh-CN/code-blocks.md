# 代码块

Classic 为代码片段提供了出色的支持，支持数十种编程语言的语法高亮。

## 行内代码

使用单个反引号表示行内代码：

```markdown
使用 `console.log()` 函数进行调试。
```

## 代码块

使用三个反引号表示多行代码：

````markdown
```
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

## 语法高亮

在开头的反引号后指定语言：

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
```
````

### CSS

````markdown
```css
.container {
  display: flex;
  justify-content: center;
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

### JSON

````markdown
```json
{
  "name": "Classic",
  "version": "1.0.0"
}
```
````

## 支持的语言

Classic 支持 100+ 种语言的语法高亮：

| 类别 | 语言 |
|------|------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React |
| **后端** | Python, Ruby, PHP, Java, Go, Rust, C# |
| **系统** | C, C++, Rust, Assembly |
| **数据** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell |

## 代码块选项

### 显示行号

````markdown
```javascript showLineNumbers
function example() {
  return "with line numbers";
}
```
````

### 高亮行

高亮特定行：

````markdown
```javascript {2-3}
function example() {
  console.log("高亮显示");  // 高亮
  return "demo";           // 高亮
}
```
````

### 标题/文件名

为代码块添加标题：

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## 复制按钮

代码块默认包含复制按钮。点击即可将代码复制到剪贴板。

## 技巧

### 缩进

保持正确的缩进以提高代码可读性

### 转义反引号

要在代码块中显示反引号，在外部使用更多反引号：

`````markdown
````markdown
```
code with backticks
```
````
`````

### 长行

长行会在代码块内水平滚动
