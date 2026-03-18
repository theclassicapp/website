# Khối Mã

Classic cung cấp hỗ trợ tuyệt vời cho các đoạn mã với tô sáng cú pháp cho hàng chục ngôn ngữ lập trình.

## Mã Nội tuyến

Sử dụng dấu ngoặc đơn ngược cho mã nội tuyến:

```markdown
Sử dụng hàm `console.log()` để gỡ lỗi.
```

Hiển thị: Sử dụng hàm `console.log()` để gỡ lỗi.

## Khối Mã

Sử dụng ba dấu ngoặc đơn ngược cho mã nhiều dòng:

````markdown
```
function greet(name) {
  return `Xin chào, ${name}!`;
}
```
````

## Tô sáng Cú pháp

Chỉ định ngôn ngữ sau dấu ngoặc đơn ngược mở đầu:

### JavaScript

````markdown
```javascript
const greeting = (name) => {
  console.log(`Xin chào, ${name}!`);
};
```
````

### Python

````markdown
```python
def greet(name):
    print(f"Xin chào, {name}!")
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
  return `Xin chào, ${user.name}!`;
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
  <h1>Xin chào Thế giới</h1>
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
echo "Xin chào, Thế giới!"
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

## Ngôn ngữ Được hỗ trợ

Classic hỗ trợ tô sáng cú pháp cho hơn 100 ngôn ngữ bao gồm:

| Danh mục | Ngôn ngữ |
|----------|----------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **Backend** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **Hệ thống** | C, C++, Rust, Assembly |
| **Dữ liệu** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **Di động** | Swift, Kotlin, Dart, Objective-C |
| **Hàm** | Haskell, Elixir, Clojure, F# |
| **Cấu hình** | Dockerfile, Kubernetes, Nginx |

## Số dòng

Kích hoạt số dòng cho các khối mã:

````markdown
```javascript showLineNumbers
function example() {
  return "với số dòng";
}
```
````

## Tô sáng Dòng

Tô sáng các dòng cụ thể:

````markdown
```javascript {2-3}
function example() {
  console.log("Dòng này được tô sáng");  // được tô sáng
  return "demo";                        // được tô sáng
}
```
````

## Nút Sao chép

Các khối mã bao gồm nút sao chép mặc định. Nhấp để sao chép mã vào clipboard của bạn.

## Tùy chọn Khối Mã

### Tiêu đề/Tên tệp

Thêm tiêu đề vào khối mã của bạn:

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## Mẹo

### Thụt lề

Giữ thụt lề đúng cho mã dễ đọc:

```markdown
// Tốt
if (condition) {
  doSomething();
}

// Tránh
if (condition) {
doSomething();
}
```

### Thoát dấu ngoặc đơn ngược

Để hiển thị dấu ngoặc đơn ngược trong khối mã, sử dụng nhiều dấu ngoặc hơn bên ngoài:

`````markdown
````markdown
```
code with backticks
```
````
`````

### Dòng dài

Các dòng dài sẽ cuộn ngang trong khối mã

### Phong cách Nhất quán

Duy trì phong cách mã hóa nhất quán trong tài liệu của bạn

## Trường hợp Sử dụng Phổ biến

### Đoạn Cấu hình

Chia sẻ các ví dụ cấu hình:

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### Ví dụ Lệnh

Tài liệu hóa các lệnh CLI:

```bash
# Cài đặt dependencies
npm install

# Khởi động máy chủ phát triển
npm run dev
```

### Ví dụ API

Hiển thị cách sử dụng API:

```typescript
// Lấy dữ liệu người dùng
const response = await fetch('/api/users/1');
const user = await response.json();
```

### Ví dụ Lỗi

Tài liệu hóa các lỗi phổ biến và giải pháp:

```javascript
// ❌ Sai
const data = JSON.parse(invalidJson);

// ✅ Đúng
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('JSON không hợp lệ');
}
```
