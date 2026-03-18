# Daily Notes

Daily Notes สร้างบันทึกใหม่โดยอัตโนมัติสำหรับแต่ละวัน เหมาะสำหรับการบันทึกประจำวัน การวางแผนรายวัน และการบันทึกข้อมูลตามเวลา

## มันทำงานอย่างไร

### การสร้างอัตโนมัติ

- บันทึกใหม่ถูกสร้างขึ้นสำหรับแต่ละวัน
- บันทึกถูกตั้งชื่อโดยใช้รูปแบบวันที่ (เช่น `2024-01-15.md`)
- บันทึกของวันก่อนหน้าถูกเก็บรักษาและค้นหาได้

### การเข้าถึง Daily Notes

1. คลิก **Daily Notes** ในแถบด้านข้าง
2. หรือกด `Ctrl/Cmd+D`
3. บันทึกของวันนี้จะเปิดโดยอัตโนมัติ

## เทมเพลต Daily Note

ปรับแต่งเทมเพลตสำหรับ daily notes ใหม่

### เทมเพลตเริ่มต้น

```markdown
# {{date}}

## Tasks
- [ ]
- [ ]

## Notes


## Journal

```

### การปรับแต่ง

1. เปิดการตั้งค่า
2. ไปที่ Daily Notes
3. แก้ไขเทมเพลต
4. ใช้ `{{date}}` สำหรับวันที่ปัจจุบัน

### ตัวแปรเทมเพลต

| ตัวแปร | คำอธิบาย |
| -------- | ----------- |
| `{{date}}` | วันที่ปัจจุบัน (YYYY-MM-DD) |
| `{{time}}` | เวลาปัจจุบัน (HH:mm) |
| `{{weekday}}` | ชื่อวัน (Monday, etc.) |

## คุณสมบัติ

### การนำทางวันที่

- **ก่อนหน้า/ถัดไป**: นำทางระหว่างวัน
- **ปฏิทิน**: กระโดดไปยังวันที่เฉพาะเจาะจง
- **ค้นหา**: ค้นหาเนื้อหาใน daily notes ทั้งหมด

### การเชื่อมโยงอัตโนมัติ

- บันทึกที่สร้างในวันเดียวกันถูกเชื่อมโยงโดยอัตโนมัติ
- แบ็คลิงก์แสดงการเชื่อมโยงระหว่างวัน
- แท็กทำงานใน daily notes ทั้งหมด

### การรวม

- **Quick Capture**: เพิ่มในบันทึกของวันนี้ด้วย `#today`
- **มุมมองปฏิทิน**: ภาพรวมของ daily notes ของคุณ
- **สถิติ**: ติดตามสตรีคการเขียนของคุณ

## แนวทางปฏิบัติที่ดีที่สุด

### การบันทึกประจำวัน

```markdown
# 2024-01-15

## Morning
- Woke up at 6:30
- Feeling: Energized

## Tasks
- [x] Morning workout
- [ ] Review PRs
- [ ] Team meeting at 2pm

## Learnings
- Discovered a new keyboard shortcut
- Learned about Mermaid diagrams

## Tomorrow
- Focus on documentation
- Schedule code review
```

### บันทึกการประชุม

```markdown
# 2024-01-15

## Team Standup

**Attendees**: Alice, Bob, Carol

### Updates
- Alice: Finished API integration
- Bob: Working on UI components
- Carol: Testing in progress

### Blockers
- Waiting for design review

### Action Items
- [ ] Alice: Deploy to staging
- [ ] Bob: Complete component library
- [ ] Carol: Write integration tests
```

### บันทึกการเรียนรู้

```markdown
# 2024-01-15

## Today I Learned

### Mermaid Diagrams
- Can create flowcharts in Markdown
- Syntax is straightforward
- Live preview is helpful

### Resources
- [Mermaid Documentation](https://mermaid.js.org/)

## Questions
- How to create complex diagrams?
- Best practices for diagram organization?
```

## เคล็ดลับ

### ความสอดคล้อง

- สร้างบันทึกในเวลาเดียวกันทุกวัน
- ใช้การจัดรูปแบบที่สอดคล้อง
- ตรวจสอบและอัปเดตตลอดทั้งวัน

### การจัดระเบียบ

- ใช้หัวข้อสำหรับส่วนต่างๆ
- เพิ่มแท็กเพื่อค้นหาง่าย
- เชื่อมโยงไปยังบันทึกที่เกี่ยวข้อง

### การตรวจสอบ

- ตรวจสอบรายสัปดาห์ของ daily notes
- ดึงรายการสำคัญไปยังบันทึกถาวร
- เก็บถาวรหรือสรุปบันทึกเก่า
