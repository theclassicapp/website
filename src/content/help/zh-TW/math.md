# 數學與方程式

# Classic 支援使用 LaTeX 語法撰寫數學方程式。在您的筆記中撰寫精美的方程式。

## 啟用數學支援

數學支援在 Classic 中預設為啟用。

### 行內數學
# 使用單個錢符號表示行內方程式

```markdown
公式 $E = mc^2$ 改變了物理學。
```
渲染為： 公式 E=mc² 改變了物理學。
### 區塊數學
# 使用雙錢符號表示居中區塊方程式
```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
## 常用符號
### 基本運算
| 語法 | 結果 |
| ---- | ---- |
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x / y` | x/y |
| `x^2` | x² |
| `x_{n}` | xₙ |
### 分數
```markdown
$\frac{分子}{分母}$
```
範例：
- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)
### 平方根
```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```
範例：
- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8
### 下標與上標
```markdown
$x_1$          → 下標
$x^2$          → 上標
$x_1^2$        → 兩者
$x_{10}$       → 多字元下標
$x^{n+1}$      → 多字元上標
```
## 原文字母
### 小寫
| 語法 | 符號 | 語法 | 符號 |
| ---- | ---- | ---- | ---- |
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |
### 大寫
| 語法 | 符號 | 語法 | 符號 |
| ---- | ---- | ---- | ---- |
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |
## 進階數學
### 求和
```markdown
$$
\sum_{i=1}^{n} x_i
$$
### 積分
```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
### 極限
```markdown
$$
\lim_{x \to \infty} f(x)
$$
### 矩陣
```markdown
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
### 分段函數
```markdown
$$
f(x) = \begin{cases}
  1 & \text{若 } x > 0 \\
  0 & \text{若 } x = 0 \\
  -1 & \text{若 } x < 0
\end{cases}
$$
```
## 符號與運算子
### 硭頭
| 語法 | 符號 |
| ---- | ---- |
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |
### 邏輯
| 語法 | 符號 |
| ---- | ---- |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |
### 集合
| 語法 | 符號 |
| ---- | ---- |
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |
## 提示
### 間距
使用 `\,` `\;` `\:` `\quad` `\qquad` 跻加自訂間距
```markdown
$a \, b$     → 小間距
$a \quad b$  → 較大間距
```
### 數學中的文字
使用 `\text{}` 在方程式中添加一般文字
```markdown
$\text{當 } x > 0$
```
### 著色
為部分方程式添加顏色
```markdown
$\textcolor{red}{重要}$
```
### 對齊
使用 `align` 環境進行多行方程式對齊
```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```
## 常見範例
### 二次公式
```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
### 歐拉恆等式
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
### 常態分布
```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
