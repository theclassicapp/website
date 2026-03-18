# コードブロック

Classicは数十のプログラミング言語のシンタックスハイライト付きでコードスニペットを優れたサポートを提供します。

## インラインコード

インラインコードには単一のバッククォートを使用

```markdown
デバッグには `console.log()` 関数を使用します。
```

レンダリング結果: デバッグには `console.log()` 関数を使用します。

## コードブロック

複数行コードには三重バッククォートを使用

````markdown
```
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

## シンタックスハイライト

開始バッククォートの後に言語を指定

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

### Bash/シェル

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

## サポートされている言語

Classicは100以上の言語のシンタックスハイライトをサポート

| カテゴリ | 言語 |
|----------|-----------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **バックエンド** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **システム** | C, C++, Rust, Assembly |
| **データ** | SQL, GraphQL, JSON, YAML, TOML |
| **シェル** | Bash, Zsh, PowerShell, Fish |
| **モバイル** | Swift, Kotlin, Dart, Objective-C |
| **関数型** | Haskell, Elixir, Clojure, F# |
| **設定** | Dockerfile, Kubernetes, Nginx |

## 行番号

コードブロックに行番号を有効化

````markdown
```javascript showLineNumbers
function example() {
  return "行番号付き";
}
```
````

## 行のハイライト

特定の行をハイライト

````markdown
```javascript {2-3}
function example() {
  console.log("ここがハイライト");  // ハイライト
  return "デモ";                        // ハイライト
}
```
````

## コピーボタン

コードブロックにはデフォルトでコピーボタンが含まれます。クリックしてコードをクリップボードにコピー。

## コードブロックオプション

### タイトル/ファイル名

コードブロックにタイトルを追加

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## ヒント

### インデント

読みやすいコードのために適切なインデントを維持

```markdown
// 良い
if (condition) {
  doSomething();
}

// 避ける
if (condition) {
doSomething();
}
```

### バッククォートのエスケープ

コードブロック内にバッククォートを表示するには、外側により多くのバッククォートを使用

`````markdown
````markdown
```
バッククォート付きコード
```
````
`````

### 長い行

長い行はコードブロック内で水平スクロールします

### 一貫したスタイル

ドキュメント内で一貫したコーディングスタイルを維持

## 一般的な使用例

### 設定スニペット

設定例を共有

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### コマンド例

CLIコマンドを文書化

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### API例

APIの使用方法を表示

```typescript
// ユーザーデータを取得
const response = await fetch('/api/users/1');
const user = await response.json();
```

### エラー例

一般的なエラーと解決策を文書化

```javascript
// ❌ 間違い
const data = JSON.parse(invalidJson);

// ✅ 正しい
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('無効なJSON');
}
```
