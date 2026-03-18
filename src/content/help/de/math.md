# Mathematik & Gleichungen

Classic unterstützt mathematische Notation mit LaTeX-Syntax. Schreiben Sie schöne Gleichungen in Ihren Notizen.

## Mathematik aktivieren

Mathe-Unterstützung ist in Classic standardmäßig aktiviert.

### Inline-Mathematik

Verwenden Sie einzelne Dollarzeichen für Inline-Gleichungen:

```markdown
Die Formel $E = mc^2$ hat die Physik für immer verändert.
```

Wird dargestellt als: Die Formel E=mc² hat die Physik für immer verändert.

### Block-Mathematik

Verwenden Sie doppelte Dollarzeichen für zentrierte Blockgleichungen:

```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## Gängige Notation

### Grundoperationen

| Syntax | Ergebnis |
| ------ | -------- |
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x / y` | x/y |
| `x^2` | x² |
| `x_{n}` | xₙ |

### Brüche

```markdown
$\frac{zähler}{nenner}$
```

Beispiele:

- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)

### Quadratwurzeln

```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

Beispiele:

- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8

### Tief- und Hochstellungen

```markdown
$x_1$          → Tiefstellung
$x^2$          → Hochstellung
$x_1^2$        → beides
$x_{10}$       → mehrzeichen-Tiefstellung
$x^{n+1}$      → mehrzeichen-Hochstellung
```

## Griechische Buchstaben

### Kleinbuchstaben

| Syntax | Symbol | Syntax | Symbol |
| ------ | ------ | ------ | ------ |
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |

### Großbuchstaben

| Syntax | Symbol | Syntax | Symbol |
| ------ | ------ | ------ | ------ |
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |

## Fortgeschrittene Mathematik

### Summen

```markdown
$$
\sum_{i=1}^{n} x_i
$$
```

### Integrale

```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```

### Grenzwerte

```markdown
$$
\lim_{x \to \infty} f(x)
$$
```

### Matrizen

```markdown
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

### Stückweise Funktionen

```markdown
$$
f(x) = \begin{cases}
  1 & \text{wenn } x > 0 \\
  0 & \text{wenn } x = 0 \\
  -1 & \text{wenn } x < 0
\end{cases}
$$
```

## Symbole & Operatoren

### Pfeile

| Syntax | Symbol |
| ------ | ------ |
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |

### Logik

| Syntax | Symbol |
| ------ | ------ |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |

### Mengen

| Syntax | Symbol |
| ------ | ------ |
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |

## Tipps

### Abstände

Verwenden Sie `\,` `\;` `\:` `\quad` `\qquad` für benutzerdefinierte Abstände:

```markdown
$a \, b$     → kleiner Abstand
$a \quad b$  → größerer Abstand
```

### Text in Mathematik

Verwenden Sie `\text{}` für normalen Text innerhalb von Gleichungen:

```markdown
$\text{wenn } x > 0$
```

### Färbung

Fügen Sie Farben zu Teilen von Gleichungen hinzu:

```markdown
$\textcolor{red}{wichtig}$
```

### Ausrichtung

Verwenden Sie die `align`-Umgebung für mehrzeilige Gleichungen:

```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```

## Gängige Beispiele

### Quadratische Formel

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### Eulers Identität

```markdown
$$
e^{i\pi} + 1 = 0
$$
```

### Satz des Pythagoras

```markdown
$$
a^2 + b^2 = c^2
$$
```

### Normalverteilung

```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
