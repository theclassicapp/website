# Matematik ve Denklemler

Classic, LaTeX sözdizimini kullanarak matematiksel gösterimi destekler. Notlarınızda güzel denklemler yazın.

## Matematik Desteğini Etkinleştirme

Matematik desteği Classic'te varsayılan olarak etkindir.

### Satır İçi Matematik

Satır içi denklemler için tek dolar işareti kullanın:

```markdown
$E = mc^2$ formülü fiziği sonsuza dek değiştirdi.
```

Şu şekilde görünür: E=mc² formülü fiziği sonsuza dek değiştirdi.

### Blok Matematik

Ortalanmış blok denklemleri için çift dolar işareti kullanın:

```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## Yaygın Gösterim

### Temel İşlemler

| Sözdizimi | Sonuç |
| ------ | ------ |
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x / y` | x/y |
| `x^2` | x² |
| `x_{n}` | xₙ |

### Kesirler

```markdown
$\frac{pay}{payda}$
```

Örnekler:

- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)

### Kare Kökler

```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

Örnekler:

- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8

### Alt Simge ve Üst Simge

```markdown
$x_1$          → alt simge
$x^2$          → üst simge
$x_1^2$        → her ikisi
$x_{10}$       → çok karakterli alt simge
$x^{n+1}$      → çok karakterli üst simge
```

## Yunan Harfleri

### Küçük Harf

| Sözdizimi | Sembol | Sözdizimi | Sembol |
| ------ | ------ | ------ | ------ |
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |

### Büyük Harf

| Sözdizimi | Sembol | Sözdizimi | Sembol |
| ------ | ------ | ------ | ------ |
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |

## Gelişmiş Matematik

### Toplamlar

```markdown
$$
\sum_{i=1}^{n} x_i
$$
```

### İntegraller

```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```

### Limitler

```markdown
$$
\lim_{x \to \infty} f(x)
$$
```

### Matrisler

```markdown
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

### Parçalı Fonksiyonlar

```markdown
$$
f(x) = \begin{cases}
  1 & \text{eğer } x > 0 \\
  0 & \text{eğer } x = 0 \\
  -1 & \text{eğer } x < 0
\end{cases}
$$
```

## Semboller ve Operatörler

### Oklar

| Sözdizimi | Sembol |
| ------ | ------ |
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |

### Mantık

| Sözdizimi | Sembol |
| ------ | ------ |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |

### Kümeler

| Sözdizimi | Sembol |
| ------ | ------ |
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |

## İpuçları

### Boşluk

Özel boşluk için `\,` `\;` `\:` `\quad` `\qquad` kullanın:

```markdown
$a \, b$     → küçük boşluk
$a \quad b$  → daha büyük boşluk
```

### Matematikte Metin

Denklemler içinde normal metin için `\text{}` kullanın:

```markdown
$\text{ne zaman } x > 0$
```

### Renklendirme

Denklem parçalarına renk ekleyin:

```markdown
$\textcolor{red}{önemli}$
```

### Hizalama

Çok satırlı denklemler için `align` ortamını kullanın:

```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```

## Yaygın Örnekler

### İkinci Derece Formülü

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### Euler Özdeşliği

```markdown
$$
e^{i\pi} + 1 = 0
$$
```

### Pisagor Teoremi

```markdown
$$
a^2 + b^2 = c^2
$$
```

### Normal Dağılım

```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
