# Kod Blokları

Classic, düzinelerce programlama dili için sözdizimi vurgulama ile kod parçacıkları için mükemmel destek sağlar.

## Satır İçi Kod

Satır içi kod için tek ters tırnak kullanın:

```markdown
Hata ayıklama için `console.log()` fonksiyonunu kullanın.
```

Şu şekilde görünür: Hata ayıklama için `console.log()` fonksiyonunu kullanın.

## Kod Blokları

Çok satırlı kod için üçlü ters tırnak kullanın:

````markdown
```
function greet(name) {
  return `Merhaba, ${name}!`;
}
```
````

## Sözdizimi Vurgulama

Açılış ters tırnaklarından sonra dili belirtin:

### JavaScript

````markdown
```javascript
const greeting = (name) => {
  console.log(`Merhaba, ${name}!`);
};
```
````

### Python

````markdown
```python
def greet(name):
    print(f"Merhaba, {name}!")
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
  return `Merhaba, ${user.name}!`;
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
  <h1>Merhaba Dünya</h1>
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
echo "Merhaba, Dünya!"
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

## Desteklenen Diller

Classic 100'den fazla dil için sözdizimi vurgulamayı destekler:

| Kategori | Diller |
|----------|-----------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **Backend** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **Sistemler** | C, C++, Rust, Assembly |
| **Veri** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **Mobil** | Swift, Kotlin, Dart, Objective-C |
| **Fonksiyonel** | Haskell, Elixir, Clojure, F# |
| **Yapılandırma** | Dockerfile, Kubernetes, Nginx |

## Satır Numaraları

Kod blokları için satır numaralarını etkinleştirin:

````markdown
```javascript showLineNumbers
function example() {
  return "satır numaraları ile";
}
```
````

## Satır Vurgulama

Belirli satırları vurgulayın:

````markdown
```javascript {2-3}
function example() {
  console.log("Bu vurgulandı");  // vurgulandı
  return "demo";                        // vurgulandı
}
```
````

## Kopyalama Düğmesi

Kod blokları varsayılan olarak bir kopyalama düğmesi içerir. Kodu panonuza kopyalamak için tıklayın.

## Kod Bloğu Seçenekleri

### Başlık/Dosya Adı

Kod bloğunuza başlık ekleyin:

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## İpuçları

### Girinti

Okunabilir kod için uygun girintiyi koruyun:

```markdown
// İyi
if (condition) {
  doSomething();
}

// Kaçının
if (condition) {
doSomething();
}
```

### Ters Tırnakları Kaçış

Kod bloğu içinde ters tırnakları göstermek için, dışarıda daha fazla ters tırnak kullanın:

`````markdown
````markdown
```
ters tırnaklı kod
```
````
`````

### Uzun Satırlar

Uzun satırlar kod bloğu içinde yatay olarak kaydırılır.

### Tutarlı Stil

Belgelerinizde tutarlı kodlama stili koruyun.

## Yaygın Kullanım Senaryoları

### Yapılandırma Parçacıkları

Yapılandırma örneklerini paylaşın:

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### Komut Örnekleri

CLI komutlarını belgeleyin:

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

### API Örnekleri

API kullanımını gösterin:

```typescript
// Kullanıcı verisini getir
const response = await fetch('/api/users/1');
const user = await response.json();
```

### Hata Örnekleri

Yaygın hataları ve çözümleri belgeleyin:

```javascript
// ❌ Yanlış
const data = JSON.parse(invalidJson);

// ✅ Doğru
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('Geçersiz JSON');
}
```
