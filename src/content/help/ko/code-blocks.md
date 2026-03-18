# 코드 블록

Classic은 수십 개의 프로그래밍 언어에 대한 구문 강조와 함께 코드 스니펫에 대한 훌륭한 지원을 제공합니다.

## 인라인 코드

인라인 코드에는 단일 백틱을 사용하세요

```markdown
디버깅을 위해 `console.log()` 함수를 사용하세요.
```

렌더링 결과: 디버깅을 위해 `console.log()` 함수를 사용하세요.

## 코드 블록

여러 줄 코드에는 삼중 백틱을 사용하세요

````markdown
```
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

## 구문 강조

여는 백틱 다음에 언어를 지정하세요

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

## 지원되는 언어

Classic은 100개 이상의 언어에 대한 구문 강조를 지원합니다:

| 카테고리 | 언어 |
|----------|------|
| **웹** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **백엔드** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **시스템** | C, C++, Rust, Assembly |
| **데이터** | SQL, GraphQL, JSON, YAML, TOML |
| **셸** | Bash, Zsh, PowerShell, Fish |
| **모바일** | Swift, Kotlin, Dart, Objective-C |
| **함수형** | Haskell, Elixir, Clojure, F# |
| **설정** | Dockerfile, Kubernetes, Nginx |

## 줄 번호

코드 블록에 줄 번호 활성화

````markdown
```javascript showLineNumbers
function example() {
  return "줄 번호 포함";
}
```
````

## 줄 강조

특정 줄 강조

````markdown
```javascript {2-3}
function example() {
  console.log("이 줄이 강조됩니다");  // 강조됨
  return "데모";                        // 강조됨
}
```
````

## 복사 버튼

코드 블록에는 기본적으로 복사 버튼이 포함됩니다. 클릭하여 코드를 클립보드에 복사하세요.

## 코드 블록 옵션

### 제목/파일 이름

코드 블록에 제목 추가

````markdown
```javascript title="utils.js"
export function formatDate(date) {
  return date.toLocaleDateString();
}
```
````

## 팁

### 들여쓰기

읽기 쉬운 코드를 위해 적절한 들여쓰기 유지

```markdown
// 좋음
if (condition) {
  doSomething();
}

// 피하세요
if (condition) {
doSomething();
}
```

### 백틱 이스케이프

코드 블록 내에 백틱을 표시하려면 외부에 더 많은 백틱을 사용하세요

`````markdown
````markdown
```
백틱이 있는 코드
```
````
`````

### 긴 줄

긴 줄은 코드 블록 내에서 가로로 스크롤됩니다

### 일관된 스타일

문서 내에서 일관된 코딩 스타일 유지

## 일반적인 사용 사례

### 설정 스니펫

설정 예시 공유

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### 명령 예시

CLI 명령 문서화

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

### API 예시

API 사용법 표시

```typescript
// 사용자 데이터 가져오기
const response = await fetch('/api/users/1');
const user = await response.json();
```

### 오류 예시

일반적인 오류 및 해결 방법 문서화

```javascript
// ❌ 잘못됨
const data = JSON.parse(invalidJson);

// ✅ 올바름
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('잘못된 JSON');
}
```
