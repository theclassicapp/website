# Blok Kode

Classic menyediakan dukungan sangat baik untuk cuplikan kode dengan penyorotan sintaks untuk puluhan bahasa pemrograman.

## Kode Sebaris

Gunakan backtick tunggal untuk kode sebaris:

```markdown
Gunakan fungsi `console.log()` untuk debugging.
```

Hasilnya: Gunakan fungsi `console.log()` untuk debugging.

## Blok Kode

Gunakan triple backtick untuk kode multi-baris:

````markdown
```
function greet(name) {
  return `Halo, ${name}!`;
}
```
````

## Penyorotan Sintaks

Tentukan bahasa setelah backtick pembuka:

### JavaScript

````markdown
```javascript
const greeting = (name) => {
  console.log(`Halo, ${name}!`);
};
```
````

### Python

````markdown
```python
def greet(name):
    print(f"Halo, {name}!")
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
  return `Halo, ${user.name}!`;
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
  <h1>Halo Dunia</h1>
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
echo "Halo, Dunia!"
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

## Bahasa yang Didukung

Classic mendukung penyorotan sintaks untuk 100+ bahasa termasuk:

| Kategori | Bahasa |
|----------|--------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **Backend** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **Sistem** | C, C++, Rust, Assembly |
| **Data** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **Mobile** | Swift, Kotlin, Dart, Objective-C |
| **Fungsional** | Haskell, Elixir, Clojure, F# |
| **Konfigurasi** | Dockerfile, Kubernetes, Nginx |

## Nomor Baris

Aktifkan nomor baris untuk blok kode:

````markdown
```javascript showLineNumbers
function example() {
  return "dengan nomor baris";
}
```
````

## Penyorotan Baris

Sorot baris tertentu:

````markdown
```javascript {2-3}
function example() {
  console.log("Ini disorot");  // disorot
  return "demo";              // disorot
}
```
````

## Tombol Salin

Blok kode menyertakan tombol salin secara default. Klik untuk menyalin kode ke clipboard Anda.

## Opsi Blok Kode

### Judul/Nama File

Tambahkan judul ke blok kode Anda:

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## Tips

### Indentasi

Pertahankan indentasi yang tepat untuk kode yang mudah dibaca:

```markdown
// Baik
if (condition) {
  doSomething();
}

// Hindari
if (condition) {
doSomething();
}
```

### Escape Backtick

Untuk menampilkan backtick di dalam blok kode, gunakan lebih banyak backtick di luar:

`````markdown
````markdown
```
kode dengan backtick
```
````
`````

### Baris Panjang

Baris panjang akan menggulir horizontal dalam blok kode:

### Gaya Konsisten

Pertahankan gaya pengkodean yang konsisten dalam dokumentasi Anda:

## Kasus Penggunaan Umum

### Cuplikan Konfigurasi

Bagikan contoh konfigurasi:

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### Contoh Perintah

Dokumentasikan perintah CLI:

```bash
# Instal dependensi
npm install

# Mulai server pengembangan
npm run dev
```

### Contoh API

Tampilkan penggunaan API:

```typescript
// Ambil data pengguna
const response = await fetch('/api/users/1');
const user = await response.json();
```

### Contoh Kesalahan

Dokumentasikan kesalahan umum dan solusinya:

```javascript
// ❌ Salah
const data = JSON.parse(invalidJson);

// ✅ Benar
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('JSON tidak valid');
}
```
