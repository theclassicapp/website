# 数式と方程式

ClassicはLaTeX構文を使用した数学表記をサポートしています。ノートに美しい方程式を書きましょう。

## 数式の有効化

数式サポートはClassicでデフォルトで有効になっています。

### インライン数式

インライン方程式には単一のドル記号を使用

```markdown
公式 $E = mc^2$ は物理学を永遠に変えました。
```

レンダリング結果: 公式 E=mc² は物理学を永遠に変えました。

### ブロック数式

中央揃えブロック方程式には二重ドル記号を使用

```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## 一般的な表記

### 基本演算

| 構文 | 結果 |
| ------ | ------ |
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x / y` | x/y |
| `x^2` | x² |
| `x_{n}` | xₙ |

### 分数

```markdown
$\frac{分子}{分母}$
```

例

- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)

### 平方根

```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

例

- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8

### 下付き文字と上付き文字

```markdown
$x_1$          → 下付き文字
$x^2$          → 上付き文字
$x_1^2$        → 両方
$x_{10}$       → 複数文字の下付き文字
$x^{n+1}$      → 複数文字の上付き文字
```

## ギリシャ文字

### 小文字

| 構文 | 記号 | 構文 | 記号 |
| ------ | ------ | ------ | ------ |
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |

### 大文字

| 構文 | 記号 | 構文 | 記号 |
| ------ | ------ | ------ | ------ |
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |

## 高度な数学

### 総和

```markdown
$$
\sum_{i=1}^{n} x_i
$$
```

### 積分

```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```

### 極限

```markdown
$$
\lim_{x \to \infty} f(x)
$$
```

### 行列

```markdown
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

### 区分関数

```markdown
$$
f(x) = \begin{cases}
  1 & \text{if } x > 0 \\
  0 & \text{if } x = 0 \\
  -1 & \text{if } x < 0
\end{cases}
$$
```

## 記号と演算子

### 矢印

| 構文 | 記号 |
| ------ | ------ |
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |

### 論理

| 構文 | 記号 |
| ------ | ------ |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |

### 集合

| 構文 | 記号 |
| ------ | ------ |
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |

## ヒント

### スペーシング

カスタムスペーシングに `\,` `\;` `\:` `\quad` `\qquad` を使用

```markdown
$a \, b$     → 小さなスペース
$a \quad b$  → 大きなスペース
```

### 数式内のテキスト

方程式内の通常テキストに `\text{}` を使用

```markdown
$\text{when } x > 0$
```

### 色付け

方程式の一部に色を追加

```markdown
$\textcolor{red}{重要}$
```

### 整列

複数行の方程式に `align` 環境を使用

```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```

## 一般的な例

### 二次方程式の公式

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### オイラーの等式

```markdown
$$
e^{i\pi} + 1 = 0
$$
```

### ピタゴラスの定理

```markdown
$$
a^2 + b^2 = c^2
$$
```

### 正規分布

```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
