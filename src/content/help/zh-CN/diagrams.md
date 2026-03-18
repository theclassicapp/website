# Mermaid 图表

Classic 支持使用 Mermaid 语法创建图表和流程图。无需外部工具，直接在笔记中可视化您的想法。

## 基本语法

使用代码块创建 Mermaid 图表：

````markdown
```mermaid
graph TD
    A[开始] --> B[结束]
```
````

## 流程图

### 从上到下

```mermaid
graph TD
    A[开始] --> B{判断}
    B -->|是| C[操作 1]
    B -->|否| D[操作 2]
    C --> E[结束]
    D --> E
```

### 从左到右

```mermaid
graph LR
    A[开始] --> B[步骤 1]
    B --> C[步骤 2]
    C --> D[结束]
```

### 节点形状

```mermaid
graph TD
    A[矩形]
    B(圆角矩形)
    C([体育场形])
    D[[子程序]]
    E[(数据库)]
    F((圆形))
    G>旗帜]
    H{菱形}
    I{{六边形}}
```

### 连接线

```mermaid
graph LR
    A --> B
    C --- D
    E -.-> F
    G ==> H
    I -- 文本 --> J
    K -. 文本 .-> L
    M == 文本 ==> N
```

## 时序图

```mermaid
sequenceDiagram
    participant A as 用户
    participant B as 服务器
    participant C as 数据库
    
    A->>B: 发送请求
    B->>C: 查询数据
    C-->>B: 返回结果
    B-->>A: 响应数据
```

### 激活框

```mermaid
sequenceDiagram
    Alice->>Bob: 你好
    activate Bob
    Bob-->>Alice: 你好！
    deactivate Bob
```

## 类图

```mermaid
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    class Duck{
        +String beakColor
        +swim()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
```

## 状态图

```mermaid
stateDiagram-v2
    [*] --> 待处理
    待处理 --> 进行中 : 开始
    进行中 --> 已完成 : 完成
    进行中 --> 已暂停 : 暂停
    已暂停 --> 进行中 : 恢复
    已完成 --> [*]
```

## 饼图

```mermaid
pie showData
    title 项目时间分配
    "开发" : 45
    "测试" : 25
    "设计" : 20
    "文档" : 10
```

## 甘特图

```mermaid
gantt
    title 项目计划
    dateFormat YYYY-MM-DD
    section 规划
    需求分析 :a1, 2024-01-01, 7d
    设计 :a2, after a1, 5d
    section 开发
    前端开发 :a3, after a2, 10d
    后端开发 :a4, after a2, 12d
    section 测试
    集成测试 :a5, after a4, 5d
```

## 思维导图

```mermaid
mindmap
  root((Classic))
    功能
      Markdown
      斜杠命令
      图表
    组织
      标签
      文件夹
      反向链接
    主题
      浅色
      深色
```

## ER 图

```mermaid
erDiagram
    USER ||--o{ NOTE : creates
    USER {
        int id
        string name
    }
    NOTE {
        int id
        string title
        string content
    }
```

## 技巧

### 样式

使用 `style` 关键字自定义节点样式：

```mermaid
graph LR
    A[节点 A]
    B[节点 B]
    style A fill:#f9f,stroke:#333
    style B fill:#bbf,stroke:#333
```

### 子图

将相关节点分组：

```mermaid
graph TB
    subgraph 第一组
        A --> B
    end
    subgraph 第二组
        C --> D
    end
    B --> C
```

### 链接

添加可点击链接：

```mermaid
graph LR
    A[文档] --> B[帮助]
    click A "https://example.com" "链接"
```
