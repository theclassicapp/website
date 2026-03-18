# דיאגרמות Mermaid

צרו דיאגרמות יפות ישירות בהערות שלכם באמצעות תחביר Mermaid.

## שימוש בסיסי

ליצירת דיאגרמת Mermaid, השתמשו בבלוק קוד עם מזהה השפה `mermaid`:

```mermaid
graph TD
    A[התחלה] --> B[תהליך]
    B --> C[סיום]
```

## תרשים זרימה

```mermaid
flowchart TD
    A[התחלה] --> B{זה עובד?}
    B -->|כן| C[מעולה!]
    B -->|לא| D[איתור באגים]
    D --> B
```

## דיאגרמת רצף

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: לחץ על כפתור
    Browser->>Server: שלח בקשה
    Server-->>Browser: החזר נתונים
    Browser-->>User: הצג תוצאה
```

## דיאגרמת מחלקות

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

## דיאגרמת מצבים

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> InProgress : התחל עריכה
    InProgress --> Review : סיום
    Review --> Published : אישור
    Review --> Draft : דחייה
    Published --> [*]
```

## תרשים Gantt

```mermaid
gantt
    title לוח זמנים פרויקט
    dateFormat  YYYY-MM-DD
    section תכנון
        מחקר     :a1, 2024-01-01, 30d
        עיצוב       :2024-01-15, 20d
    section פיתוח
        Backend      :2024-02-01, 45d
        Frontend     :2024-02-15, 30d
    section בדיקות
        בדיקות QA   :2024-03-01, 15d
```

## תרשים עוגה

```mermaid
pie showPets
    "כלבים" : 386
    "חתולים" : 85
    "ארנבים" : 15
```

## מפת חשיבה

```mermaid
mindmap
  root((Classic))
    Features((תכונות))
      Editor((עורך))
      Organization((ארגון))
    Benefits((יתרונות))
      Privacy((פרטיות))
      Speed((מהירות))
```

## טיפים

### עיצוב

- השתמשו בתת-גרפים לארגון דיאגרמות מורכבות
- הוסיפו סגנונות וערכות נושא לעקביות חזותית
- שמרו על דיאגרמות פשוטות וקריאות

### ביצועים

- דיאגרמות גדולות עלולות להאט את העורך
- שקלו לפצל דיאגרמות מורכבות לקטנות יותר
- השתמשו ב-`%%{init: ... }%%` להגדרות

### בעיות נפוצות

**הדיאגרמה לא מתעבדת?**
- בדקו את תחביר Mermaid
- ודאו שלבלוק הקוד יש שפת `mermaid`
- חפשו שגיאות תחביר בתצוגה המקדימה

**הדיאגרמה קטנה/גדולה מדי?**
- השתמשו ב-`%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` להתאמת גודל

## משאבים

- [תיעוד Mermaid](https://mermaid.js.org/)
- [עורך Mermaid Live](https://mermaid.live/)
- [Mermaid ב-GitHub](https://github.com/mermaid-js/mermaid)
