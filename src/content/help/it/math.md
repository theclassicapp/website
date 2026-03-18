# Matematica ed Equazioni

Classic supporta la notazione matematica usando la sintassi LaTeX. Scrivi bellissime equazioni nelle tue note.

## Abilitare la Matematica

Il supporto matematico è abilitato di default in Classic.

### Matematica Inline

Usa singoli dollari per equazioni inline:

```markdown
La formula $E = mc^2$ ha cambiato la fisica per sempre.
```

Viene renderizzato come: La formula E=mc² ha cambiato la fisica per sempre.

### Matematica a Blocco

Usa doppi dollari per equazioni a blocco centrate:

```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## Notazione Comune

### Operazioni Base

| Sintassi | Risultato |
|----------|-----------|
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x / y` | x/y |
| `x^2` | x² |
| `x_{n}` | xₙ |

### Frazioni

```markdown
$\frac{numeratore}{denominatore}$
```

Esempi:

- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)

### Radici Quadrate

```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

Esempi:

- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8

### Pedici e Apici

```markdown
$x_1$          → pedice
$x^2$          → apice
$x_1^2$        → entrambi
$x_{10}$       → pedice multi-carattere
$x^{n+1}$      → apice multi-carattere
```

## Lettere Greche

### Minuscole

| Sintassi | Simbolo | Sintassi | Simbolo |
|----------|---------|----------|---------|
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |

### Maiuscole

| Sintassi | Simbolo | Sintassi | Simbolo |
|----------|---------|----------|---------|
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |

## Matematica Avanzata

### Sommatorie

```markdown
$$
\sum_{i=1}^{n} x_i
$$
```

### Integrali

```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```

### Limiti

```markdown
$$
\lim_{x \to \infty} f(x)
$$
```

### Matrici

```markdown
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

### Funzioni a Tratti

```markdown
$$
f(x) = \begin{cases}
  1 & \text{se } x > 0 \\
  0 & \text{se } x = 0 \\
  -1 & \text{se } x < 0
\end{cases}
$$
```

## Simboli e Operatori

### Frecce

| Sintassi | Simbolo |
|----------|---------|
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |

### Logica

| Sintassi | Simbolo |
|----------|---------|
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |

### Insiemi

| Sintassi | Simbolo |
|----------|---------|
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |

## Suggerimenti

### Spaziatura

Usa `\,` `\;` `\:` `\quad` `\qquad` per spaziatura personalizzata:

```markdown
$a \, b$     → piccolo spazio
$a \quad b$  → spazio maggiore
```

### Testo nella Matematica

Usa `\text{}` per testo normale dentro le equazioni:

```markdown
$\text{quando } x > 0$
```

### Colorazione

Aggiungi colore a parti di equazioni:

```markdown
$\textcolor{red}{importante}$
```

### Allineamento

Usa l'ambiente `align` per equazioni multi-riga:

```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```

## Esempi Comuni

### Formula Quadratica

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### Identità di Eulero

```markdown
$$
e^{i\pi} + 1 = 0
$$
```

### Teorema di Pitagora

```markdown
$$
a^2 + b^2 = c^2
$$
```

### Distribuzione Normale

```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
