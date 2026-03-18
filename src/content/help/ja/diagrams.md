# Mermaidダイアグラム

Mermaid構文を使用してノート内に美しいダイアグラムを直接作成できます。

## 基本的な使い方

Mermaidダイアグラムを作成するには、`mermaid` 言語識別子でコードブロックを使用します:

```mermaid
graph TD
    A[開始] --> B[処理]
    B --> C[終了]
```

## フローチャート

```mermaid
flowchart TD
    A[開始] --> B{動作していますか？}
    B -->|はい| C[素晴らしい！|
    B -->|いいえ| D[デバッグ]
    D --> B
```

## シーケンス図

```mermaid
sequenceDiagram
    participant ユーザー
    participant ブラウザ
    participant サーバー

    ユーザー->>ブラウザ: ボタンをクリック
    ブラウザ->>サーバー: リクエストを送信
    サーバー-->>ブラウザ: データを返す
    ブラウザ-->>ユーザー: 結果を表示
```

## クラス図

```mermaid
classDiagram
    class Note {
        +String title
        +String content
        +DateTime createdAt
        +save()
    }
    class Tag {
        +String name
        +addNote()
    }
    Note "1" -- "*" Tag
```

## 状態図

```mermaid
stateDiagram-v2
    [*] --> 下書き
    下書き --> 進行中 : 編集開始
    進行中 --> レビュー : 完了
    レビュー --> 公開済み : 承認
    レビュー --> 下書き : 却下
    公開済み --> [*]
```

## ガントチャート

```mermaid
gantt
    title プロジェクトタイムライン
    dateFormat  YYYY-MM-DD
    section 計画
        調査     :a1, 2024-01-01, 30d
        設計       :2024-01-15, 20d
    section 開発
        バックエンド      :2024-02-01, 45d
        フロントエンド     :2024-02-15, 30d
    section テスト
        QAテスト   :2024-03-01, 15d
```

## 円グラフ

```mermaid
pie showPets
    "犬" : 386
    "猫" : 85
    "ウサギ" : 15
```

## マインドマップ

```mermaid
mindmap
  root((Classic))
    機能((機能))
      エディター((エディター))
      整理((整理))
    利点((利点))
      プライバシー((プライバシー))
      速度((速度))
```

## ヒント

### スタイリング

- サブグラフを使用して複雑なダイアグラムを整理
- 視覚的な一貫性のためにスタイルとテーマを追加
- ダイアグラムはシンプルで読みやすく保つ

### パフォーマンス

- 大きなダイアグラムはエディターを遅くする可能性
- 複雑なダイアグラムを小さなものに分割することを検討
- 設定に `%%{init: ... }%%` を使用

### よくある問題

**ダイアグラムがレンダリングされない？**
- Mermaid構文を確認
- コードブロックに `mermaid` 言語があることを確認
- プレビューで構文エラーを探す

**ダイアグラムが小さすぎる/大きすぎる？**
- `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` を使用してサイズを調整

## リソース

- [Mermaidドキュメント](https://mermaid.js.org/)
- [Mermaidライブエディター](https://mermaid.live/)
- [Mermaid GitHub](https://github.com/mermaid-js/mermaid)
