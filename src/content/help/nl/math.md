# Wiskunde & Vergelijkingen

Classic ondersteunt wiskundige notatie met LaTeX-syntax. Schrijf prachtige vergelijkingen in je notities.

## Wiskunde Inschakelen

Wiskunde-ondersteuning is standaard ingeschakeld in Classic.

### Inline Wiskunde

Gebruik enkele dollartekens voor inline vergelijkingen:

```markdown
De formule $E = mc^2$ veranderde de natuurkunde voorgoed.
```

Wordt weergegeven als: De formule E=mc² veranderde de natuurkunde voorgoed.

### Blok Wiskunde

Gebruik dubbele dollartekens voor gecentreerde blokvergelijkingen:

```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## Veelvoorkomende Notatie

### Basisbewerkingen

| Syntax | Resultaat |
| ------ | ------ |
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x / y` | x/y |
| `x^2` | x² |
| `x_{n}` | xₙ |

### Breuken

```markdown
$\frac{teller}{noemer}$
```

Voorbeelden:

- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)

### Wortels

```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

Voorbeelden:

- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8

### Subscripts & Superscripts

```markdown
$x_1$          → subscript
$x^2$          → superscript
$x_1^2$        → beide
$x_{10}$       → multi-teken subscript
$x^{n+1}$      → multi-teken superscript
```

## Griekse Letters

### Kleine Letters

| Syntax | Symbool | Syntax | Symbool |
| ------ | ------ | ------ | ------ |
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |

### Hoofdletters

| Syntax | Symbool | Syntax | Symbool |
| ------ | ------ | ------ | ------ |
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |

## Geavanceerde Wiskunde

### Sommaties

```markdown
$$
\sum_{i=1}^{n} x_i
$$
```

### Integralen

```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```

### Limieten

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

### Stuksgewijze Functies

```markdown
$$
f(x) = \begin{cases}
  1 & \text{als } x > 0 \\
  0 & \text{als } x = 0 \\
  -1 & \text{als } x < 0
\end{cases}
$$
```

## Symbolen & Operatoren

### Pijlen

| Syntax | Symbool |
| ------ | ------ |
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |

### Logica

| Syntax | Symbool |
| ------ | ------ |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |

### Verzamelingen

| Syntax | Symbool |
| ------ | ------ |
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |

## Tips

### Spatiëring

Gebruik `\,` `\;` `\:` `\quad` `\qquad` voor aangepaste spatiëring:

```markdown
$a \, b$     → kleine ruimte
$a \quad b$  → grotere ruimte
```

### Tekst in Wiskunde

Gebruik `\text{}` voor gewone tekst binnen vergelijkingen:

```markdown
$\text{wanneer } x > 0$
```

### Kleuren

Voeg kleur toe aan delen van vergelijkingen:

```markdown
$\textcolor{red}{belangrijk}$
```

### Uitlijning

Gebruik `align` omgeving voor regels met meerdere vergelijkingen:

```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```

## Veelvoorkomende Voorbeelden

### Kwadratische Formule

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### Identiteit van Euler

```markdown
$$
e^{i\pi} + 1 = 0
$$
```

### Stelling van Pythagoras

```markdown
$$
a^2 + b^2 = c^2
$$
```

### Normale Verdeling

```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
