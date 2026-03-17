# Math & Equations

Classic supports mathematical notation using LaTeX syntax. Write beautiful equations in your notes.

## Enabling Math

Math support is enabled by default in Classic.

### Inline Math

Use single dollar signs for inline equations

```markdown
The formula $E = mc^2$ changed physics forever.
```

Renders as: The formula E=mc² changed physics forever.

### Block Math

Use double dollar signs for centered block equations

```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## Common Notation

### Basic Operations

| Syntax | Result |
| ------ | ------ |
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x / y` | x/y |
| `x^2` | x² |
| `x_{n}` | xₙ |

### Fractions

```markdown
$\frac{numerator}{denominator}$
```

Examples

- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)

### Square Roots

```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

Examples

- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8

### Subscripts & Superscripts

```markdown
$x_1$          → subscript
$x^2$          → superscript
$x_1^2$        → both
$x_{10}$       → multi-char subscript
$x^{n+1}$      → multi-char superscript
```

## Greek Letters

### Lowercase

| Syntax | Symbol | Syntax | Symbol |
| ------ | ------ | ------ | ------ |
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |

### Uppercase

| Syntax | Symbol | Syntax | Symbol |
| ------ | ------ | ------ | ------ |
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |

## Advanced Math

### Summations

```markdown
$$
\sum_{i=1}^{n} x_i
$$
```

### Integrals

```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```

### Limits

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

### Piecewise Functions

```markdown
$$
f(x) = \begin{cases}
  1 & \text{if } x > 0 \\
  0 & \text{if } x = 0 \\
  -1 & \text{if } x < 0
\end{cases}
$$
```

## Symbols & Operators

### Arrows

| Syntax | Symbol |
| ------ | ------ |
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |

### Logic

| Syntax | Symbol |
| ------ | ------ |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |

### Sets

| Syntax | Symbol |
| ------ | ------ |
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |

## Tips

### Spacing

Use `\,` `\;` `\:` `\quad` `\qquad` for custom spacing

```markdown
$a \, b$     → small space
$a \quad b$  → larger space
```

### Text in Math

Use `\text{}` for regular text inside equations

```markdown
$\text{when } x > 0$
```

### Coloring

Add color to parts of equations

```markdown
$\textcolor{red}{important}$
```

### Alignment

Use `align` environment for multi-line equations

```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```

## Common Examples

### Quadratic Formula

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### Euler's Identity

```markdown
$$
e^{i\pi} + 1 = 0
$$
```

### Pythagorean Theorem

```markdown
$$
a^2 + b^2 = c^2
$$
```

### Normal Distribution

```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
