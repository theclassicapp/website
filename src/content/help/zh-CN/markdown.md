# Markdown 参考

Classic 支持完整的 Markdown 语法和实时预览。以下是所有支持格式选项的综合参考。

## 基本格式

### 文本格式

```markdown
**粗体文本**
*斜体文本*
***粗斜体文本***
~~删除线~~
```

结果：

**粗体文本**
*斜体文本*
***粗斜体文本***
~~删除线~~

### 快捷键

| 样式 | macOS | Windows/Linux |
|------|-------|---------------|
| **粗体** | `Cmd+B` | `Ctrl+B` |
| **斜体** | `Cmd+I` | `Ctrl+I` |
| **删除线** | `Cmd+Shift+X` | `Ctrl+Shift+X` |

## 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 段落和换行

```markdown
这是一个段落。

这是另一个段落。

这是第一行  
这是第二行（两个空格 + 换行）
```

## 列表

### 无序列表

```markdown
- 项目 1
- 项目 2
  - 嵌套项目
  - 另一个嵌套
- 项目 3
```

### 有序列表

```markdown
1. 第一项
2. 第二项
   1. 嵌套项
   2. 另一个嵌套
3. 第三项
```

### 任务列表

```markdown
- [x] 已完成任务
- [ ] 待完成任务
- [ ] 另一个待完成
```

## 链接

### 基本链接

```markdown
[链接文本](https://example.com)
```

### 带标题的链接

```markdown
[链接文本](https://example.com "悬停标题")
```

### 内部链接

链接到其他笔记：

```markdown
[[笔记名称]]
[[笔记名称|显示文本]]
```

## 图片

### 基本图片

```markdown
![替代文本](image.png)
```

### 带标题的图片

```markdown
![替代文本](image.png "图片标题")
```

### 调整图片大小

```markdown
![替代文本](image.png =300x200)
![替代文本](image.png =x200)  # 固定高度
![替代文本](image.png =300x)  # 固定宽度
```

## 代码

### 行内代码

```markdown
使用 `console.log()` 进行调试。
```

### 代码块

````markdown
```javascript
function hello() {
  console.log('Hello, World!');
}
```
````

## 引用

```markdown
> 这是一个引用
> 可以跨越多行
>
> > 甚至可以嵌套
```

## 表格

```markdown
| 列 1 | 列 2 | 列 3 |
|------|------|------|
| 数据 | 数据 | 数据 |
| 数据 | 数据 | 数据 |
```

### 对齐

```markdown
| 左对齐 | 居中 | 右对齐 |
|:-------|:----:|-------:|
| 左     | 中   | 右     |
```

## 分隔线

```markdown
---

***

___
```

## 脚注

```markdown
这是一个脚注引用[^1]。

[^1]: 这是脚注的内容。
```

## 高亮

```markdown
==高亮文本==
```

## 下标和上标

```markdown
H~2~O（下标）
X^2^（上标）
```

## 转义字符

使用反斜杠转义特殊字符：

```markdown
\* 不是斜体 \*
\# 不是标题
```

## 快捷键参考

| 操作 | macOS | Windows/Linux |
|------|-------|---------------|
| 粗体 | `Cmd+B` | `Ctrl+B` |
| 斜体 | `Cmd+I` | `Ctrl+I` |
| 删除线 | `Cmd+Shift+X` | `Ctrl+Shift+X` |
| 链接 | `Cmd+K` | `Ctrl+K` |
| 图片 | `Cmd+Shift+I` | `Ctrl+Shift+I` |
| 代码 | `Cmd+Shift+C` | `Ctrl+Shift+C` |
| 代码块 | `Cmd+Alt+C` | `Ctrl+Alt+C` |
