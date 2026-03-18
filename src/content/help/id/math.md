# Matematika & Persamaan

Classic mendukung notasi matematika menggunakan sintaks LaTeX. Tulis persamaan indah di catatan Anda.

## Mengaktifkan Matematika

Dukungan matematika diaktifkan secara default di Classic.

### Matematika Sebaris

Gunakan tanda dolar tunggal untuk persamaan sebaris:

```markdown
Rumus $E = mc^2$ mengubah fisika selamanya.
```

Hasilnya: Rumus E=mc² mengubah fisika selamanya.

### Matematika Blok

Gunakan tanda dolar ganda untuk persamaan blok di tengah:

```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## Notasi Umum

### Operasi Dasar

| Sintaks | Hasil |
| ------- | ----- |
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x / y` | x/y |
| `x^2` | x² |
| `x_{n}` | xₙ |

### Pecahan

```markdown
$\frac{pembilang}{penyebut}$
```

Contoh:

- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)

### Akar Kuadrat

```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

Contoh:

- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8

### Subskrip & Superskrip

```markdown
$x_1$          → subskrip
$x^2$          → superskrip
$x_1^2$        → keduanya
$x_{10}$       → subskrip multi-karakter
$x^{n+1}$      → superskrip multi-karakter
```

## Huruf Yunani

### Huruf Kecil

| Sintaks | Simbol | Sintaks | Simbol |
| ------- | ------ | ------- | ------ |
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |

### Huruf Kapital

| Sintaks | Simbol | Sintaks | Simbol |
| ------- | ------ | ------- | ------ |
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |

## Matematika Lanjutan

### Penjumlahan

```markdown
$$
\sum_{i=1}^{n} x_i
$$
```

### Integral

```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```

### Limit

```markdown
$$
\lim_{x \to \infty} f(x)
$$
```

### Matriks

```markdown
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

### Fungsi Sebagian

```markdown
$$
f(x) = \begin{cases}
  1 & \text{jika } x > 0 \\
  0 & \text{jika } x = 0 \\
  -1 & \text{jika } x < 0
\end{cases}
$$
```

## Simbol & Operator

### Panah

| Sintaks | Simbol |
| ------- | ------ |
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |

### Logika

| Sintaks | Simbol |
| ------- | ------ |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |

### Himpunan

| Sintaks | Simbol |
| ------- | ------ |
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |

## Tips

### Spasi

Gunakan `\,` `\;` `\:` `\quad` `\qquad` untuk spasi kustom:

```markdown
$a \, b$     → spasi kecil
$a \quad b$  → spasi lebih besar
```

### Teks dalam Matematika

Gunakan `\text{}` untuk teks biasa di dalam persamaan:

```markdown
$\text{ketika } x > 0$
```

### Pewarnaan

Tambahkan warna ke bagian persamaan:

```markdown
$\textcolor{red}{penting}$
```

### Perataan

Gunakan lingkungan `align` untuk persamaan multi-baris:

```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```

## Contoh Umum

### Rumus Kuadrat

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### Identitas Euler

```markdown
$$
e^{i\pi} + 1 = 0
$$
```

### Teorema Pythagoras

```markdown
$$
a^2 + b^2 = c^2
$$
```

### Distribusi Normal

```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
