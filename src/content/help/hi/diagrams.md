# Mermaid डायग्राम

Mermaid सिंटैक्स का उपयोग करके अपनी नोट्स में सीधे सुंदर डायग्राम बनाएं।

## बुनियादी उपयोग

Mermaid डायग्राम बनाने के लिए, `mermaid` भाषा पहचानकर्ता के साथ एक कोड ब्लॉक का उपयोग करें:

```mermaid
graph TD
    A[Start] --> B[Process]
    B --> C[End]
```

## फ्लोचार्ट

```mermaid
flowchart TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
```

## सीक्वेंस डायग्राम

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

## क्लास डायग्राम

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

## स्टेट डायग्राम

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> InProgress : Start editing
    InProgress --> Review : Finish
    Review --> Published : Approve
    Review --> Draft : Reject
    Published --> [*]
```

## गैंट चार्ट

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

## पाई चार्ट

```mermaid
pie showPets
    "Dogs" : 386
    "Cats" : 85
    "Rabbits" : 15
```

## माइंड मैप

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

## टिप्स

### स्टाइलिंग

- जटिल डायग्राम को व्यवस्थित करने के लिए सबग्राफ़ का उपयोग करें
- दृश्य स्थिरता के लिए स्टाइल और थीम जोड़ें
- डायग्राम को सरल और पठनीय रखें

### प्रदर्शन

- बड़े डायग्राम एडिटर को धीमा कर सकते हैं
- जटिल डायग्राम को छोटे में तोड़ने पर विचार करें
- कॉन्फ़िगरेशन के लिए `%%{init: ... }%%` का उपयोग करें

### सामान्य समस्याएं

**डायग्राम रेंडर नहीं हो रहा?**
- Mermaid सिंटैक्स जांचें
- सुनिश्चित करें कि कोड ब्लॉक में `mermaid` भाषा है
- प्रीव्यू में सिंटैक्स त्रुटियों की तलाश करें

**डायग्राम बहुत छोटा/बड़ा?**
- आकार समायोजित करने के लिए `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` का उपयोग करें

## संसाधन

- [Mermaid डॉक्यूमेंटेशन](https://mermaid.js.org/)
- [Mermaid लाइव एडिटर](https://mermaid.live/)
- [Mermaid GitHub](https://github.com/mermaid-js/mermaid)
