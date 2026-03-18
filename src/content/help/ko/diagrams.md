# Mermaid 다이어그램

Mermaid 구문을 사용하여 노트에서 직접 아름다운 다이어그램을 만드세요.

## 기본 사용법

Mermaid 다이어그램을 만들려면 `mermaid` 언어 식별자가 있는 코드 블록을 사용하세요:

```mermaid
graph TD
    A[시작] --> B[처리]
    B --> C[종료]
```

## 순서도

```mermaid
flowchart TD
    A[시작] --> B{작동 중인가요?}
    B -->|예| C[훌륭해요!]
    B -->|아니요| D[디버그]
    D --> B
```

## 시퀀스 다이어그램

```mermaid
sequenceDiagram
    participant 사용자
    participant 브라우저
    participant 서버

    사용자->>브라우저: 버튼 클릭
    브라우저->>서버: 요청 전송
    서버-->>브라우저: 데이터 반환
    브라우저-->>사용자: 결과 표시
```

## 클래스 다이어그램

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

## 상태 다이어그램

```mermaid
stateDiagram-v2
    [*] --> 초안
    초안 --> 진행중 : 편집 시작
    진행중 --> 검토 : 완료
    검토 --> 게시됨 : 승인
    검토 --> 초안 : 거부
    게시됨 --> [*]
```

## 간트 차트

```mermaid
gantt
    title 프로젝트 타임라인
    dateFormat  YYYY-MM-DD
    section 계획
        연구     :a1, 2024-01-01, 30d
        디자인       :2024-01-15, 20d
    section 개발
        백엔드      :2024-02-01, 45d
        프론트엔드     :2024-02-15, 30d
    section 테스트
        QA 테스트   :2024-03-01, 15d
```

## 원형 차트

```mermaid
pie showPets
    "강아지" : 386
    "고양이" : 85
    "토끼" : 15
```

## 마인드맵

```mermaid
mindmap
  root((Classic))
    기능((기능))
      에디터((에디터))
      정리((정리))
    장점((장점))
      개인정보((개인정보))
      속도((속도))
```

## 팁

### 스타일링

- 서브그래프를 사용하여 복잡한 다이어그램 정리
- 시각적 일관성을 위해 스타일 및 테마 추가
- 다이어그램을 단순하고 읽기 쉽게 유지

### 성능

- 큰 다이어그램은 에디터 속도를 늦출 수 있습니다
- 복잡한 다이어그램을 더 작은 것으로 나누는 것을 고려하세요
- 구성에 `%%{init: ... }%%` 사용

### 일반적인 문제

**다이어그램이 렌더링되지 않나요?**
- Mermaid 구문 확인
- 코드 블록에 `mermaid` 언어가 있는지 확인
- 미리보기에서 구문 오류 찾기

**다이어그램이 너무 작거나 크나요?**
- `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%`를 사용하여 크기 조정

## 리소스

- [Mermaid 문서](https://mermaid.js.org/)
- [Mermaid 라이브 에디터](https://mermaid.live/)
- [Mermaid GitHub](https://github.com/mermaid-js/mermaid)
