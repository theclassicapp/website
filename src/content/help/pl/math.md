# Matematyka i Równania

Classic obsługuje notację matematyczną używając składni LaTeX. Pisz piękne równania w swoich notatkach.

## Włączanie Matematyki

Obsługa matematyki jest domyślnie włączona w Classic.

### Matematyka w Linii

Użyj pojedynczych znaków dolara dla równań w linii

```markdown
Wzór $E = mc^2$ zmienił fizykę na zawsze.
```

Renderuje się jako: Wzór E=mc² zmienił fizykę na zawsze.

### Matematyka Blokowa

Użyj podwójnych znaków dolara dla wycentrowanych równań blokowych

```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## Podstawowa Notacja

### Podstawowe Operacje

| Składnia | Wynik |
| ------ | ------ |
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x / y` | x/y |
| `x^2` | x² |
| `x_{n}` | xₙ |

### Ułamki

```markdown
$\frac{licznik}{mianownik}$
```

Przykłady

- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)

### Pierwiastki Kwadratowe

```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

Przykłady

- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8

### Indeksy i Wykładniki

```markdown
$x_1$          → indeks dolny
$x^2$          → wykładnik
$x_1^2$        → oba
$x_{10}$       → indeks dolny wieloznakowy
$x^{n+1}$      → wykładnik wieloznakowy
```

## Litery Greckie

### Małe Litery

| Składnia | Symbol | Składnia | Symbol |
| ------ | ------ | ------ | ------ |
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |

### Wielkie Litery

| Składnia | Symbol | Składnia | Symbol |
| ------ | ------ | ------ | ------ |
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |

## Zaawansowana Matematyka

### Sumy

```markdown
$$
\sum_{i=1}^{n} x_i
$$
```

### Całki

```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```

### Granice

```markdown
$$
\lim_{x \to \infty} f(x)
$$
```

### Macierze

```markdown
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

### Funkcje Kawałkowe

```markdown
$$
f(x) = \begin{cases}
  1 & \text{jeśli } x > 0 \\
  0 & \text{jeśli } x = 0 \\
  -1 & \text{jeśli } x < 0
\end{cases}
$$
```

## Symbole i Operatory

### Strzałki

| Składnia | Symbol |
| ------ | ------ |
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |

### Logika

| Składnia | Symbol |
| ------ | ------ |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |

### Zbiory

| Składnia | Symbol |
| ------ | ------ |
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |

## Wskazówki

### Odstępy

Użyj `\,` `\;` `\:` `\quad` `\qquad` dla niestandardowych odstępów

```markdown
$a \, b$     → mała spacja
$a \quad b$  → większa spacja
```

### Tekst w Matematyce

Użyj `\text{}` dla zwykłego tekstu wewnątrz równań

```markdown
$\text{gdy } x > 0$
```

### Kolorowanie

Dodaj kolor do części równań

```markdown
$\textcolor{red}{ważne}$
```

### Wyrównanie

Użyj środowiska `align` dla wieloliniowych równań

```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```

## Częste Przykłady

### Wzór Kwadratowy

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### Tożsamość Eulera

```markdown
$$
e^{i\pi} + 1 = 0
$$
```

### Twierdzenie Pitagorasa

```markdown
$$
a^2 + b^2 = c^2
$$
```

### Rozkład Normalny

```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
