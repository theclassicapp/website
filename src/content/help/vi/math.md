# Toán học & Phương trình

Classic hỗ trợ ký hiệu toán học sử dụng cú pháp LaTeX. Viết các phương trình đẹp trong ghi chú của bạn.

## Kích hoạt Toán học

Hỗ trợ toán học được kích hoạt mặc định trong Classic.

### Toán học Nội tuyến

Sử dụng dấu đô la đơn cho các phương trình nội tuyến:

```markdown
Công thức $E = mc^2$ đã thay đổi vật lý mãi mãi.
```

Hiển thị: Công thức E=mc² đã thay đổi vật lý mãi mãi.

### Toán học Khối

Sử dụng dấu đô la kép cho các phương trình khối căn giữa:

```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## Ký hiệu Phổ biến

### Phép tính Cơ bản

| Cú pháp | Kết quả |
| ------- | ------- |
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x / y` | x/y |
| `x^2` | x² |
| `x_{n}` | xₙ |

### Phân số

```markdown
$\frac{tử số}{mẫu số}$
```

Ví dụ:

- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)

### Căn bậc hai

```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

Ví dụ:

- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8

### Chỉ số dưới và trên

```markdown
$x_1$          → chỉ số dưới
$x^2$          → chỉ số trên
$x_1^2$        → cả hai
$x_{10}$       → chỉ số dưới nhiều ký tự
$x^{n+1}$      → chỉ số trên nhiều ký tự
```

## Chữ cái Hy Lạp

### Chữ thường

| Cú pháp | Ký hiệu | Cú pháp | Ký hiệu |
| ------- | ------- | ------- | ------- |
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |

### Chữ hoa

| Cú pháp | Ký hiệu | Cú pháp | Ký hiệu |
| ------- | ------- | ------- | ------- |
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |

## Toán học Nâng cao

### Tổng

```markdown
$$
\sum_{i=1}^{n} x_i
$$
```

### Tích phân

```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```

### Giới hạn

```markdown
$$
\lim_{x \to \infty} f(x)
$$
```

### Ma trận

```markdown
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

### Hàm phân đoạn

```markdown
$$
f(x) = \begin{cases}
  1 & \text{nếu } x > 0 \\
  0 & \text{nếu } x = 0 \\
  -1 & \text{nếu } x < 0
\end{cases}
$$
```

## Ký hiệu & Toán tử

### Mũi tên

| Cú pháp | Ký hiệu |
| ------- | ------- |
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |

### Logic

| Cú pháp | Ký hiệu |
| ------- | ------- |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |

### Tập hợp

| Cú pháp | Ký hiệu |
| ------- | ------- |
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |

## Mẹo

### Khoảng cách

Sử dụng `\,` `\;` `\:` `\quad` `\qquad` cho khoảng cách tùy chỉnh:

```markdown
$a \, b$     → khoảng cách nhỏ
$a \quad b$  → khoảng cách lớn hơn
```

### Văn bản trong Toán học

Sử dụng `\text{}` cho văn bản thường trong các phương trình:

```markdown
$\text{khi } x > 0$
```

### Tô màu

Thêm màu vào các phần của phương trình:

```markdown
$\textcolor{red}{quan trọng}$
```

### Căn chỉnh

Sử dụng môi trường `align` cho các phương trình nhiều dòng:

```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```

## Ví dụ Phổ biến

### Công thức Bậc hai

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### Đồng nhất thức Euler

```markdown
$$
e^{i\pi} + 1 = 0
$$
```

### Định lý Pythagoras

```markdown
$$
a^2 + b^2 = c^2
$$
```

### Phân phối Chuẩn

```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
