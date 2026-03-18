# Mathématiques et équations

Classic prend en charge la notation mathématique en utilisant la syntaxe LaTeX. Écrivez de belles équations dans vos notes.

## Activer les mathématiques

Le support mathématique est activé par défaut dans Classic.

### Mathématiques en ligne

Utilisez des signes dollar simples pour les équations en ligne :

```markdown
La formule $E = mc^2$ a changé la physique pour toujours.
```

S'affiche comme : La formule E=mc² a changé la physique pour toujours.

### Mathématiques en bloc

Utilisez des signes dollar doubles pour les équations en bloc centrées :

```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## Notation courante

### Opérations de base

| Syntaxe | Résultat |
| ------- | -------- |
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x / y` | x/y |
| `x^2` | x² |
| `x_{n}` | xₙ |

### Fractions

```markdown
$\frac{numerateur}{denominateur}$
```

Exemples :

- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)

### Racines carrées

```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

Exemples :

- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8

### Indices et exposants

```markdown
$x_1$          → indice
$x^2$          → exposant
$x_1^2$        → les deux
$x_{10}$       → indice multi-caractères
$x^{n+1}$      → exposant multi-caractères
```

## Lettres grecques

### Minuscules

| Syntaxe | Symbole | Syntaxe | Symbole |
| ------- | ------- | ------- | ------- |
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |

### Majuscules

| Syntaxe | Symbole | Syntaxe | Symbole |
| ------- | ------- | ------- | ------- |
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |

## Mathématiques avancées

### Sommes

```markdown
$$
\sum_{i=1}^{n} x_i
$$
```

### Intégrales

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

### Matrices

```markdown
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

### Fonctions définies par morceaux

```markdown
$$
f(x) = \begin{cases}
  1 & \text{si } x > 0 \\
  0 & \text{si } x = 0 \\
  -1 & \text{si } x < 0
\end{cases}
$$
```

## Symboles et opérateurs

### Flèches

| Syntaxe | Symbole |
| ------- | ------- |
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |

### Logique

| Syntaxe | Symbole |
| ------- | ------- |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |

### Ensembles

| Syntaxe | Symbole |
| ------- | ------- |
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |

## Conseils

### Espacement

Utilisez `\,` `\;` `\:` `\quad` `\qquad` pour un espacement personnalisé :

```markdown
$a \, b$     → petit espace
$a \quad b$  → espace plus grand
```

### Texte dans les mathématiques

Utilisez `\text{}` pour du texte normal dans les équations :

```markdown
$\text{quand } x > 0$
```

### Coloration

Ajoutez de la couleur à des parties d'équations :

```markdown
$\textcolor{red}{important}$
```

### Alignement

Utilisez l'environnement `align` pour les équations multi-lignes :

```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```

## Exemples courants

### Formule quadratique

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### Identité d'Euler

```markdown
$$
e^{i\pi} + 1 = 0
$$
```

### Théorème de Pythagore

```markdown
$$
a^2 + b^2 = c^2
$$
```

### Distribution normale

```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
