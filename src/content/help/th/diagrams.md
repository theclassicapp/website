# ไดอะแกรม Mermaid

สร้างไดอะแกรมสวยงามโดยตรงในบันทึกของคุณโดยใช้ไวยากรณ์ Mermaid

## การใช้งานพื้นฐาน

เพื่อสร้างไดอะแกรม Mermaid ให้ใช้บล็อกโค้ดพร้อมตัวระบุภาษา `mermaid`:

```mermaid
graph TD
    A[Start] --> B[Process]
    B --> C[End]
```

## โฟลว์ชาร์ต

```mermaid
flowchart TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
```

## ไดอะแกรมลำดับ

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Click button
    Browser->>Server: Send request
    Server-->>Browser: Return data
    Browser-->>User: Display result
```

## ไดอะแกรมคลาส

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

## ไดอะแกรมสถานะ

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> InProgress : Start editing
    InProgress --> Review : Finish
    Review --> Published : Approve
    Review --> Draft : Reject
    Published --> [*]
```

## แผนภูมิแกนต์

```mermaid
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Planning
        Research     :a1, 2024-01-01, 30d
        Design       :2024-01-15, 20d
    section Development
        Backend      :2024-02-01, 45d
        Frontend     :2024-02-15, 30d
    section Testing
        QA Testing   :2024-03-01, 15d
```

## แผนภูมิวงกลม

```mermaid
pie showPets
    "Dogs" : 386
    "Cats" : 85
    "Rabbits" : 15
```

## แผนที่ความคิด

```mermaid
mindmap
  root((Classic))
    Features((Features))
      Editor((Editor))
      Organization((Organization))
    Benefits((Benefits))
      Privacy((Privacy))
      Speed((Speed))
```

## เคล็ดลับ

### การจัดสไตล์

- ใช้ subgraphs เพื่อจัดระเบียบไดอะแกรมที่ซับซ้อน
- เพิ่มสไตล์และธีมเพื่อความสอดคล้องของภาพ
- รักษาไดอะแกรมให้เรียบง่ายและอ่านง่าย

### ประสิทธิภาพ

- ไดอะแกรมขนาดใหญ่อาจทำให้ตัวแก้ไขช้าลง
- พิจารณาแบ่งไดอะแกรมที่ซับซ้อนเป็นไดอะแกรมเล็กๆ
- ใช้ `%%{init: ... }%%` สำหรับการกำหนดค่า

### ปัญหาทั่วไป

**ไดอะแกรมไม่แสดงผล?**
- ตรวจสอบไวยากรณ์ Mermaid
- ตรวจสอบให้แน่ใจว่าบล็อกโค้ดมีภาษา `mermaid`
- มองหาข้อผิดพลาดทางไวยากรณ์ในตัวอย่าง

**ไดอะแกรมเล็ก/ใหญ่เกินไป?**
- ใช้ `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` เพื่อปรับขนาด

## แหล่งข้อมูล

- [เอกสาร Mermaid](https://mermaid.js.org/)
- [Mermaid Live Editor](https://mermaid.live/)
- [Mermaid GitHub](https://github.com/mermaid-js/mermaid)
