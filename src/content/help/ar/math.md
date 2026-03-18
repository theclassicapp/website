# الرياض والمعادلات

يدعم كلاسيك الترميم الرياض الجميل باست بناء جملة KaTeX.

## تفعيل الرياض

### الرياض المضمنة

استخدم علامات الدولار المفرادة للمعادلات المضمنة السطر:

```markdown
$E = mc^2$ changed physics forever.
```

يع: The formula E=mc² changed physics forever.

### Block Math

Use double dollar signs for centered block equations:
```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## Common Notation

### Basic operations
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

أمث



- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)
### Square roots
```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

أمث

- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8
### Subscripts & superscripts
```markdown
$x_1$          → subscript
$x^2$          → superscript
$x_1^2$        → both
$x_{10}$       → multi-char subscript
$x^{n+1}$      → multi-char superscript
```

## Greek letters

### Lowercase
| syntax | symbol | syntax | symbol |
| ------ | ------ | ------ | ------ |
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |
### Uppercase
| syntax | symbol | syntax | symbol |
| ------ | ------ | ------ | ------ |
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |
## advanced math
### Sum
```markdown
$$
\sum_{i=1}^{n} x_i
$$
```
### integrals
```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```
### limits
```markdown
$$
\lim_{x \to \infty} f(x)
$$
```
### matrices
```markdown
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
### piecewise functions
```markdown
$$
f(x) = \begin{cases}
  1 & \text{if } x > 0 \\
  0 & \text{if } x = 0 \\
  -1 & \text{if } x < 0
\end{cases}
$$
```
## Symbols & operators
### arrows
| syntax | symbol |
| ------ | ------ |
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |
### logic
| syntax | symbol |
| ------ | ------ |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |
### sets
| syntax | symbol |
| ------ | ------ |
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |
## tips
### spacing
Use `\,` `\;` `\:` `\quad` `\qquad` for custom spacing
```markdown
$a \, b$     → small space
$a \quad b$  → larger space
```
### text in math
Use `\text{}` for regular text inside equations
```markdown
$\text{when } x > 0$
```
### coloring
Add color to parts of equations
```markdown
$\textcolor{red}{important}$
```
### alignment
Use `align` environment for multi-line equations
```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```
## common examples
### quadratic formula
```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```
### Euler's identity
```markdown
$$
e^{i\pi} + 1 = 0
$$
```
### Pythagorean theorem
```markdown
$$
a^2 + b^2 = c^2
$$
```
### Normal distribution
```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
