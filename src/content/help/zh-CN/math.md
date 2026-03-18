# 数学公式

Classic 支持使用 LaTeX 语法编写数学公式。在笔记中编写漂亮的公式。

## 启用数学支持

数学支持在 Classic 中默认启用。

### 行内公式

使用单个美元符号表示行内公式：

```markdown
公式 $E = mc^2$ 永远改变了物理学。
```

### 块级公式

使用双美元符号表示居中的块级公式：

```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## 常用符号

### 基本运算

| 语法 | 结果 |
|------|------|
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x^2` | x² |
| `x_{n}` | xₙ |

### 分数

```markdown
$\frac{分子}{分母}$
```

示例：
- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)

### 根号

```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

### 上下标

```markdown
$x_1$          → 下标
$x^2$          → 上标
$x_1^2$        → 同时
```

## 希腊字母

### 小写

| 语法 | 符号 |
|------|------|
| `\alpha` | α |
| `\beta` | β |
| `\gamma` | γ |
| `\delta` | δ |
| `\theta` | θ |
| `\lambda` | λ |
| `\mu` | μ |
| `\pi` | π |
| `\sigma` | σ |
| `\omega` | ω |

### 大写

| 语法 | 符号 |
|------|------|
| `\Gamma` | Γ |
| `\Delta` | Δ |
| `\Theta` | Θ |
| `\Pi` | Π |
| `\Sigma` | Σ |
| `\Omega` | Ω |

## 高级公式

### 求和

```markdown
$$
\sum_{i=1}^{n} x_i
$$
```

### 积分

```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```

### 极限

```markdown
$$
\lim_{x \to \infty} f(x)
$$
```

### 矩阵

```markdown
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

### 分段函数

```markdown
$$
f(x) = \begin{cases}
  1 & \text{若 } x > 0 \\
  0 & \text{若 } x = 0 \\
  -1 & \text{若 } x < 0
\end{cases}
$$
```

## 常用示例

### 求根公式

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### 欧拉恒等式

```markdown
$$
e^{i\pi} + 1 = 0
$$
```

### 勾股定理

```markdown
$$
a^2 + b^2 = c^2
$$
```

### 正态分布

```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
