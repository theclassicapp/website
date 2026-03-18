# مخططات Mermaid (أنشئ مخططات جميلة مباشية في ملاحظاتك باست بناء جملة Mermaid.

## الاستخدام الأساسي

لإنشاء مخطط Mermaid، استخدم كتلة الكود مع معرف اللغة `mermaid`،```mermaid
graph TD
    A[البداية] --> B[العملية]
    B --> C[النهاية]
```

## مخطط التدفق
```mermaid
flowchart TD
    A[البداية] --> B{هل يعمل؟}
    B -->|نعم| C[رائع!]
    B -->|لا| D[تصحيح أخطاء)
    D --> B
```
## مخطط التسلس
```mermaid
sequenceDiagram
    participant المستخدم
    participant المتصفح
    participant الخادم
    مستخدم->>المتصفح: انقر على الزر
    Browser->>Server: إرسال الطلب
    Server-->>Browser: إرجاع البيانات
    Browser-->>المستخدم: عرض النتيجة
```

## مخطط الفئة
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

## مخطط الحالة
```mermaid
stateDiagram-v2
    [*] --> مسودة
    مسودة --> قيد التقدم : بدء التحرير
    قيد التقدم --> مراجعة : إنه الموافقة)
    Marاجعة --> منشور if الموافقة
    Published --> [*]
```
## مخطط Gantt
```mermaid
gantt
    title الجدول الزمني للمشروع
    dateFormat  YYYY-MM-DD
    section التخطيط
        Research     :a1, 2024-01-01, 30d
        Design       :2024-01-15, 20d
    section التطوير
        Backend      :2024-02-01, 45d
        Frontend     :2024-02-15, 30d
    section الاختبار
        QA Testing   :2024-03-01, 15d
```
## مخطط الدائري
```mermaid
pie showPets
    "Dogs" : 386
    "Cats" : 85
    "Rabbits" : 15
```

## مخطط خريطة الذهنية

```mermaid
mindmap
  root((كلاسيك))
    الميزات((الميزات))
      المحرر((المحرر))
      التنظيم((التنظيم))
    الفوائد((الفوائد))
      الخصوصية((الخصوصية)
      السرعة((السرعة)
```

## نصائح

### التنسيق
- استخدم المخططات الفرعية لتنظيم المخططات المعقدة

- أضف الأنماط والسمات للتنظيم البصري
- حافظ على المخططات بسيطة قابيلة
- فكر في تقسيم المخططات المعقدة إلى مخططات أصغر
- استخدم `%%{init: ...}%%` للتكوين
### المشاكل الشائعة

**المخطط لا يُعرض؟؟**
- تحقق من بناء جملة Mermaid
- تأكد من أن كتلة الكود تحتوي على لغة `mermaid`
- ابحث عن أخطاء في المعاينة


- **المخطط صغير/كبير جدا؟**
- استخدم `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` لضبط الحجم
## الموارد

- [Mermaid Documentation](https://mermaid.js.org/)
- [Mermaid Live Editor](https://mermaid.live/)
- [Mermaid GitHub](https://github.com/mermaid-js/mermaid)
