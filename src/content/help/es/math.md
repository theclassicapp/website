# Matemáticas y Ecuaciones

Classic soporta notación matemática usando sintaxis LaTeX. Escribe hermosas ecuaciones en tus notas.

## Habilitar Matemáticas

El soporte de matemáticas está habilitado por defecto en Classic.

### Matemáticas en Línea

Usa signos de dólar simples para ecuaciones en línea:

```markdown
La fórmula $E = mc^2$ cambió la física para siempre.
```

Se renderiza como: La fórmula E=mc² cambió la física para siempre.

### Matemáticas en Bloque

Usa signos de dólar dobles para ecuaciones en bloque centradas:

```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## Notación Común

### Operaciones Básicas

| Sintaxis | Resultado |
| -------- | --------- |
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x / y` | x/y |
| `x^2` | x² |
| `x_{n}` | xₙ |

### Fracciones

```markdown
$\frac{numerador}{denominador}$
```

Ejemplos:

- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)

### Raíces Cuadradas

```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

Ejemplos:

- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8

### Subíndices y Superíndices

```markdown
$x_1$          → subíndice
$x^2$          → superíndice
$x_1^2$        → ambos
$x_{10}$       → subíndice de múltiples caracteres
$x^{n+1}$      → superíndice de múltiples caracteres
```

## Letras Griegas

### Minúsculas

| Sintaxis | Símbolo | Sintaxis | Símbolo |
| -------- | ------- | -------- | ------- |
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |

### Mayúsculas

| Sintaxis | Símbolo | Sintaxis | Símbolo |
| -------- | ------- | -------- | ------- |
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |

## Matemáticas Avanzadas

### Sumatorias

```markdown
$$
\sum_{i=1}^{n} x_i
$$
```

### Integrales

```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```

### Límites

```markdown
$$
\lim_{x \to \infty} f(x)
$$
```

### Matrices

```markdown
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

### Funciones a Trozos

```markdown
$$
f(x) = \begin{cases}
  1 & \text{si } x > 0 \\
  0 & \text{si } x = 0 \\
  -1 & \text{si } x < 0
\end{cases}
$$
```

## Símbolos y Operadores

### Flechas

| Sintaxis | Símbolo |
| -------- | ------- |
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |

### Lógica

| Sintaxis | Símbolo |
| -------- | ------- |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |

### Conjuntos

| Sintaxis | Símbolo |
| -------- | ------- |
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |

## Consejos

### Espaciado

Usa `\,` `\;` `\:` `\quad` `\qquad` para espaciado personalizado:

```markdown
$a \, b$     → espacio pequeño
$a \quad b$  → espacio más grande
```

### Texto en Matemáticas

Usa `\text{}` para texto regular dentro de ecuaciones:

```markdown
$\text{cuando } x > 0$
```

### Coloreado

Agrega color a partes de ecuaciones:

```markdown
$\textcolor{red}{importante}$
```

### Alineación

Usa el entorno `align` para ecuaciones de múltiples líneas:

```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```

## Ejemplos Comunes

### Fórmula Cuadrática

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### Identidad de Euler

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

### Distribución Normal

```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
