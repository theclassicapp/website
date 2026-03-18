# 수학 및 공식

Classic은 LaTeX 구문을 사용하여 수학 표기법을 지원합니다. 노트에 아름다운 수식을 작성하세요.

## 수학 활성화

수학 지원은 Classic에서 기본적으로 활성화되어 있습니다.

### 인라인 수학

인라인 공식에는 단일 달러 기호를 사용하세요

```markdown
공식 $E = mc^2$는 물학을 영원히 바꾸었습니다.
```

렌더링 결과: 공식 E=mc²는 물리학을 영원히 바꾸었습니다.

### 블록 수학

중앙 정렬된 블록 공식에는 이중 달러 기호를 사용하세요

```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

## 일반적인 표기법

### 기본 연산

| 구문 | 결과 |
| ---- | ---- |
| `x + y` | x + y |
| `x - y` | x - y |
| `x \times y` | x × y |
| `x \div y` | x ÷ y |
| `x / y` | x/y |
| `x^2` | x² |
| `x_{n}` | xₙ |

### 분수

```markdown
$\frac{분자}{분모}$
```

예시

- `$\frac{1}{2}$` → ½
- `$\frac{a+b}{c+d}$` → (a+b)/(c+d)

### 제곱근

```markdown
$\sqrt{x}$
$\sqrt[n]{x}$
```

예시

- `$\sqrt{2}$` → √2
- `$\sqrt[3]{8}$` → ³√8

### 아래첨자 및 위첨자

```markdown
$x_1$          → 아래첨자
$x^2$          → 위첨자
$x_1^2$        → 둘 다
$x_{10}$       → 여러 문자 아래첨자
$x^{n+1}$      → 여러 문자 위첨자
```

## 그리스 문자

### 소문자

| 구문 | 기호 | 구문 | 기호 |
| ---- | ---- | ---- | ---- |
| `\alpha` | α | `\beta` | β |
| `\gamma` | γ | `\delta` | δ |
| `\epsilon` | ε | `\theta` | θ |
| `\lambda` | λ | `\mu` | μ |
| `\pi` | π | `\sigma` | σ |
| `\omega` | ω | `\phi` | φ |

### 대문자

| 구문 | 기호 | 구문 | 기호 |
| ---- | ---- | ---- | ---- |
| `\Gamma` | Γ | `\Delta` | Δ |
| `\Theta` | Θ | `\Lambda` | Λ |
| `\Pi` | Π | `\Sigma` | Σ |
| `\Omega` | Ω | `\Phi` | Φ |

## 고급 수학

### 합계

```markdown
$$
\sum_{i=1}^{n} x_i
$$
```

### 적분

```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```

### 극한

```markdown
$$
\lim_{x \to \infty} f(x)
$$
```

### 행렬

```markdown
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

### 조각별 함수

```markdown
$$
f(x) = \begin{cases}
  1 & \text{if } x > 0 \\
  0 & \text{if } x = 0 \\
  -1 & \text{if } x < 0
\end{cases}
$$
```

## 기호 및 연산자

### 화살표

| 구문 | 기호 |
| ---- | ---- |
| `\to` | → |
| `\leftarrow` | ← |
| `\Rightarrow` | ⇒ |
| `\Leftarrow` | ⇐ |
| `\leftrightarrow` | ↔ |

### 논리

| 구문 | 기호 |
| ---- | ---- |
| `\forall` | ∀ |
| `\exists` | ∃ |
| `\neg` | ¬ |
| `\land` | ∧ |
| `\lor` | ∨ |

### 집합

| 구문 | 기호 |
| ---- | ---- |
| `\in` | ∈ |
| `\notin` | ∉ |
| `\subset` | ⊂ |
| `\supset` | ⊃ |
| `\cup` | ∪ |
| `\cap` | ∩ |
| `\emptyset` | ∅ |

## 팁

### 간격

사용자 정의 간격을 위해 `\,` `\;` `\:` `\quad` `\qquad` 사용

```markdown
$a \, b$     → 작은 공간
$a \quad b$  → 더 큰 공간
```

### 수학 내 텍스트

공식 내에 일반 텍스트를 위해 `\text{}` 사용

```markdown
$\text{when } x > 0$
```

### 색상

공식의 일부에 색상 추가

```markdown
$\textcolor{red}{중요}$
```

### 정렬

여러 줄 공식에 `align` 환경 사용

```markdown
$$
\begin{align}
a &= b + c \\
d &= e + f
\end{align}
$$
```

## 일반적인 예시

### 이차 공식

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

### 오일러 항등식

```markdown
$$
e^{i\pi} + 1 = 0
$$
```

### 피타고라스 정리

```markdown
$$
a^2 + b^2 = c^2
$$
```

### 정규 분포

```markdown
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$
```
