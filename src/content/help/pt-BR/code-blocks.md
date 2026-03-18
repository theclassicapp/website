# Blocos de Código

O Classic fornece excelente suporte para trechos de código com destaque de sintaxe para dezenas de linguagens de programação.

## Código Inline

Use crases simples para código inline:

```markdown
Use a função `console.log()` para depuração.
```

Renderiza como: Use a função `console.log()` para depuração.

## Blocos de Código

Use crases triplas para código de múltiplas linhas:

````markdown
```
function saudar(nome) {
  return `Olá, ${nome}!`;
}
```
````

## Destaque de Sintaxe

Especifique a linguagem após as crases de abertura:

### JavaScript

````markdown
```javascript
const saudacao = (nome) => {
  console.log(`Olá, ${nome}!`);
};
```
````

### Python

````markdown
```python
def saudar(nome):
    print(f"Olá, {nome}!")
```
````

### TypeScript

````markdown
```typescript
interface Usuario {
  nome: string;
  idade: number;
}

function saudar(usuario: Usuario): string {
  return `Olá, ${usuario.nome}!`;
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
  <h1>Olá Mundo</h1>
</div>
```
````

### SQL

````markdown
```sql
SELECT * FROM usuarios
WHERE criado_em > '2024-01-01'
ORDER BY nome ASC;
```
````

### Bash/Shell

````markdown
```bash
#!/bin/bash
echo "Olá, Mundo!"
```
````

### JSON

````markdown
```json
{
  "nome": "Classic",
  "versao": "1.0.0",
  "recursos": ["markdown", "local-first"]
}
```
````

## Linguagens Suportadas

O Classic suporta destaque de sintaxe para mais de 100 linguagens, incluindo:

| Categoria | Linguagens |
|-----------|------------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React, Svelte |
| **Backend** | Python, Ruby, PHP, Java, Go, Rust, C#, Node.js |
| **Sistemas** | C, C++, Rust, Assembly |
| **Dados** | SQL, GraphQL, JSON, YAML, TOML |
| **Shell** | Bash, Zsh, PowerShell, Fish |
| **Mobile** | Swift, Kotlin, Dart, Objective-C |
| **Funcional** | Haskell, Elixir, Clojure, F# |
| **Config** | Dockerfile, Kubernetes, Nginx |

## Números de Linha

Habilite números de linha para blocos de código:

````markdown
```javascript showLineNumbers
function exemplo() {
  return "com números de linha";
}
```
````

## Destaque de Linhas

Destaque linhas específicas:

````markdown
```javascript {2-3}
function exemplo() {
  console.log("Isto está destacado");  // destacado
  return "demo";                        // destacado
}
```
````

## Botão de Copiar

Blocos de código incluem um botão de copiar por padrão. Clique para copiar o código para a área de transferência.

## Opções de Bloco de Código

### Título/Nome do Arquivo

Adicione um título ao seu bloco de código:

````markdown
```javascript title="utils.js"
export function formatarData(data) {
  return data.toLocaleDateString();
}
```
````

## Dicas

### Indentação

Preserve a indentação adequada para código legível:

```markdown
// Bom
if (condicao) {
  fazerAlgo();
}

// Evitar
if (condicao) {
fazerAlgo();
}
```

### Escapando Crases

Para mostrar crases dentro de um bloco de código, use mais crases por fora:

`````markdown
````markdown
```
codigo com crases
```
````
`````

### Linhas Longas

Linhas longas rolarão horizontalmente dentro do bloco de código.

### Estilo Consistente

Mantenha um estilo de codificação consistente dentro de sua documentação.

## Casos de Uso Comuns

### Trechos de Configuração

Compartilhe exemplos de configuração:

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

### Exemplos de Comandos

Documente comandos CLI:

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

### Exemplos de API

Mostre uso de API:

```typescript
// Buscar dados do usuário
const resposta = await fetch('/api/usuarios/1');
const usuario = await resposta.json();
```

### Exemplos de Erros

Documente erros comuns e soluções:

```javascript
// ❌ Errado
const dados = JSON.parse(jsonInvalido);

// ✅ Correto
try {
  const dados = JSON.parse(jsonString);
} catch (erro) {
  console.error('JSON inválido');
}
```
