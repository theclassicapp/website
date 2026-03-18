# Mermaid 圖表

使用 Mermaid 語法直接在筆記中建立精美的圖表。

## 基本用法

要建立 Mermaid 圖表，請使用帶有 `mermaid` 語言識別碼的程式碼區塊：

```mermaid
graph TD
    A[開始] --> B[處理]
    B --> C[結束]
```

## 流程圖

```mermaid
flowchart TD
    A[開始] --> B{是否正常運作？}
    B -->|是| C[太好了！]
    B -->|否| D[除錯]
    D --> B
```

## 時序圖

```mermaid
sequenceDiagram
    participant 使用者
    participant 瀏覽器
    participant 伺服器

    使用者->>瀏覽器: 點擊按鈕
    瀏覽器->>伺服器: 發送請求
    伺服器-->>瀏覽器: 返回資料
    瀏覽器-->>使用者: 顯示結果
```

## 類別圖

```mermaid
classDiagram
    class Note {
        +String 標題
        +String 內容
        +DateTime 建立時間
        +save()
    }
    class Tag {
        +String 名稱
        +addNote()
    }
    Note "1" -- "*" Tag
```

## 狀態圖

```mermaid
stateDiagram-v2
    [*] --> 草稿
    草稿 --> 進行中 : 開始編輯
    進行中 --> 審核中 : 完成
    審核中 --> 已發布 : 核准
    審核中 --> 草稿 : 駁回
    已發布 --> [*]
```

## 甘特圖

```mermaid
gantt
    title 專案時程
    dateFormat  YYYY-MM-DD
    section 規劃
        研究     :a1, 2024-01-01, 30d
        設計       :2024-01-15, 20d
    section 開發
        後端      :2024-02-01, 45d
        前端     :2024-02-15, 30d
    section 測試
        QA 測試   :2024-03-01, 15d
```

## 圓餅圖

```mermaid
pie showPets
    "狗" : 386
    "貓" : 85
    "兔子" : 15
```

## 心智圖

```mermaid
mindmap
  root((Classic))
    功能((功能))
      編輯器((編輯器))
      組織((組織))
    優點((優點))
      隱私((隱私))
      速度((速度))
```

## 提示

### 樣式

- 使用子圖表組織複雜圖表
- 加入樣式和主題以保持視覺一致性
- 保持圖表簡單易讀

### 效能

- 大型圖表可能會拖慢編輯器
- 考慮將複雜圖表拆分為較小的圖表
- 使用 `%%{init: ... }%%` 進行設定

### 常見問題

**圖表無法渲染？**
- 檢查 Mermaid 語法
- 確保程式碼區塊有 `mermaid` 語言標記
- 查看預覽中的語法錯誤

**圖表太小/太大？**
- 使用 `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` 調整大小

## 資源

- [Mermaid 文件](https://mermaid.js.org/)
- [Mermaid 線上編輯器](https://mermaid.live/)
- [Mermaid GitHub](https://github.com/mermaid-js/mermaid)
