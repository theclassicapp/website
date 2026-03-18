# บล็อกโค้ด

Classic ให้การรองรับที่ยอดเยี่ยมสำหรับสไนปเป็ตโค้ดพร้อมการเน้นไวยากรณ์สำหรับภาษาโปรแกรมหลายสิบภาษา

## โค้ดอินไลน์

ใช้แบ็คทิกเดี่ยวสำหรับโค้ดอินไลน์

```markdown
Use the `console.log()` function for debugging.
```

แสดงผลเป็น: ใช้ฟังก์ชัน `console.log()` สำหรับการดีบัก

## บล็อกโค้ด

ใช้แบ็คทิกสามตัวสำหรับโค้ดหลายบรรทัด

````markdown
```
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

## การเน้นไวยากรณ์

ระบุภาษาหลังแบ็คทิกเปิด

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

## ภาษาที่รองรับ

Classic รองรับการเน้นไวยากรณ์สำหรับ 100+ ภาษา รวมถึง

| หมวดหมู่ | ภาษา |
|----------|-----------|
| **เว็บ** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **แบ็กเอนด์** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **ระบบ** | C, C++, Rust, Assembly |
| **ข้อมูล** | SQL, GraphQL, JSON, YAML, TOML |
| **เชลล์** | Bash, Zsh, PowerShell, Fish |
| **มือถือ** | Swift, Kotlin, Dart, Objective-C |
| **ฟังก์ชัน** | Haskell, Elixir, Clojure, F# |
| **การกำหนดค่า** | Dockerfile, Kubernetes, Nginx |

## หมายเลขบรรทัด

เปิดใช้งานหมายเลขบรรทัดสำหรับบล็อกโค้ด

````markdown
```javascript showLineNumbers
function example() {
  return "with line numbers";
}
```
````

## การเน้นบรรทัด

เน้นบรรทัดเฉพาะ

````markdown
```javascript {2-3}
function example() {
  console.log("This is highlighted");  // highlighted
  return "demo";                        // highlighted
}
```
````

## ปุ่มคัดลอก

บล็อกโค้ดมีปุ่มคัดลอกโดยค่าเริ่มต้น คลิกเพื่อคัดลอกโค้ดไปยังคลิปบอร์ดของคุณ

## ตัวเลือกบล็อกโค้ด

### ชื่อเรื่อง/ชื่อไฟล์

เพิ่มชื่อเรื่องให้บล็อกโค้ดของคุณ

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## เคล็ดลับ

### การเยื้อง

รักษาการเยื้องที่เหมาะสมสำหรับโค้ดที่อ่านง่าย

```markdown
// ดี
if (condition) {
  doSomething();
}

// หลีกเลี่ยง
if (condition) {
doSomething();
}
```

### การหลีกเลี่ยงแบ็คทิก

เพื่อแสดงแบ็คทิกภายในบล็อกโค้ด ให้ใช้แบ็คทิกมากกว่าด้านนอก

`````markdown
````markdown
```
code with backticks
```
````
`````

### บรรทัดยาว

บรรทัดยาวจะเลื่อนแนวนอนภายในบล็อกโค้ด

### สไตล์ที่สอดคล้อง

รักษาสไตล์การเขียนโค้ดที่สอดคล้องภายในเอกสารของคุณ

## กรณีการใช้งานทั่วไป

### สไนปเป็ตการกำหนดค่า

แชร์ตัวอย่างการกำหนดค่า

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### ตัวอย่างคำสั่ง

จัดทำเอกสารคำสั่ง CLI

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### ตัวอย่าง API

แสดงการใช้งาน API

```typescript
// Fetch user data
const response = await fetch('/api/users/1');
const user = await response.json();
```

### ตัวอย่างข้อผิดพลาด

จัดทำเอกสารข้อผิดพลาดทั่วไปและวิธีแก้ไข

```javascript
// ❌ ผิด
const data = JSON.parse(invalidJson);

// ✅ ถูกต้อง
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('Invalid JSON');
}
```
