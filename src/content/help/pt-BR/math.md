# Matemática e Equações

O Classic suporta notação matemática usando a sintaxe LaTeX. Escreva belas equações em suas notas.

## Habilitando Matemática

O suporte a matemática está habilitado por padrão no Classic.

### Matemática Inline

Use cifrões únicos para equações inline:

```markdown
A fórmula $E = mc^2$ mudou a física para sempre.
```

Renderiza como: A fórmula E=mc² mudou a física para sempre.

### Matemática em Bloco

Use cifrões duplos para equações em bloco centralizadas:

```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## Notação Comum

### Operações Básicas

| Sintaxe | Resultado |
| ------- | --------- |
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x / y` | x/y |
| `x^2` | x² |
| `x_{n}` | xₙ |

### Frações

```markdown
$\frac{numerador}{denominador}$
```

Exemplos:

- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)

### Raízes Quadradas

```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

Exemplos:

- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8

### Subscritos e Sobrescritos

```markdown
$x_1$          → subscrito
$x^2$          → sobrescrito
$x_1^2$        → ambos
$x_{10}$       → subscrito com múltiplos caracteres
$x^{n+1}$      → sobrescrito com múltiplos caracteres
```

## Letras Gregas

### Minúsculas

| Sintaxe | Símbolo | Sintaxe | Símbolo |
| ------- | ------- | ------- | ------- |
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |

### Maiúsculas

| Sintaxe | Símbolo | Sintaxe | Símbolo |
| ------- | ------- | ------- | ------- |
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |

## Matemática Avançada

### Somatórios

```markdown
$$
\sum_{i=1}^{n} x_i
$$
```

### Integrais

```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```

### Limites

```markdown
$$
\lim_{x \to \infty} f(x)
$$
```

### Matrizes

```markdown
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

### Funções Definidas por Partes

```markdown
$$
f(x) = \begin{cases}
  1 & \text{se } x > 0 \\
  0 & \text{se } x = 0 \\
  -1 & \text{se } x < 0
\end{cases}
$$
```

## Símbolos e Operadores

### Setas

| Sintaxe | Símbolo |
| ------- | ------- |
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |

### Lógica

| Sintaxe | Símbolo |
| ------- | ------- |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |

### Conjuntos

| Sintaxe | Símbolo |
| ------- | ------- |
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |

## Dicas

### Espaçamento

Use `\,` `\;` `\:` `\quad` `\qquad` para espaçamento personalizado:

```markdown
$a \, b$     → espaço pequeno
$a \quad b$  → espaço maior
```

### Texto em Matemática

Use `\text{}` para texto regular dentro de equações:

```markdown
$\text{quando } x > 0$
```

### Coloração

Adicione cor a partes de equações:

```markdown
$\textcolor{red}{importante}$
```

### Alinhamento

Use o ambiente `align` para equações de múltiplas linhas:

```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```

## Exemplos Comuns

### Fórmula Quadrática

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### Identidade de Euler

```markdown
$$
e^{i\pi} + 1 = 0
$$
```

### Teorema de Pitágoras

```markdown
$$
a^2 + b^2 = c^2
$$
```

### Distribuição Normal

```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
