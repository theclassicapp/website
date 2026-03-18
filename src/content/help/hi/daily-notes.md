# डेली नोट्स

डेली नोट्स प्रत्येक दिन के लिए स्वचालित रूप से एक नई नोट बनाते हैं, जर्नलिंग, दैनिक नियोजन, या समय-आधारित जानकारी कैप्चर करने के लिए उत्तम।

## यह कैसे काम करता है

### स्वचालित निर्माण

- प्रत्येक दिन के लिए एक नई नोट बनाई जाती है
- नोट्स को तिथि प्रारूप का उपयोग करके नामित किया जाता है (जैसे, `2024-01-15.md`)
- पिछले दिनों की नोट्स संरक्षित और खोजने योग्य हैं

### डेली नोट्स एक्सेस करना

1. साइडबार में **Daily Notes** पर क्लिक करें
2. या `Ctrl/Cmd+D` दबाएं
3. आज की नोट स्वचालित रूप से खुलती है

## डेली नोट टेम्प्लेट

नई डेली नोट्स के लिए टेम्प्लेट कस्टमाइज़ करें।

### डिफ़ॉल्ट टेम्प्लेट

```markdown
# {{date}}

## Tasks
- [ ]
- [ ]

## Notes


## Journal

```

### कस्टमाइज़ करना

1. सेटिंग्स खोलें
2. Daily Notes पर जाएं
3. टेम्प्लेट संपादित करें
4. वर्तमान तिथि के लिए `{{date}}` का उपयोग करें

### टेम्प्लेट वेरिएबल्स

| वेरिएबल | विवरण |
| -------- | ----------- |
| `{{date}}` | वर्तमान तिथि (YYYY-MM-DD) |
| `{{time}}` | वर्तमान समय (HH:mm) |
| `{{weekday}}` | दिन का नाम (Monday, आदि) |

## विशेषताएं

### तिथि नेविगेशन

- **पिछला/अगला**: दिनों के बीच नेविगेट करें
- **कैलेंडर**: विशिष्ट तिथियों पर जाएं
- **खोज**: सभी डेली नोट्स में सामग्री खोजें

### स्वचालित लिंकिंग

- उसी दिन बनाई गई नोट्स स्वचालित रूप से लिंक होती हैं
- बैकलिंक्स दिनों के बीच कनेक्शन दिखाते हैं
- टैग्स सभी डेली नोट्स में काम करते हैं

### एकीकरण

- **त्वरित कैप्चर**: `#today` के साथ आज की नोट में जोड़ें
- **कैलेंडर व्यू**: अपनी डेली नोट्स का विज़ुअल अवलोकन
- **आंकड़े**: अपनी लेखन स्ट्रीक्स ट्रैक करें

## सर्वोत्तम अभ्यास

### दैनिक जर्नलिंग

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

### मीटिंग नोट्स

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

### लर्निंग लॉग

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

## टिप्स

### स्थिरता

- प्रत्येक दिन एक ही समय पर नोट्स बनाएं
- सुसंगत फ़ॉर्मेटिंग का उपयोग करें
- पूरे दिन समीक्षा और अपडेट करें

### संगठन

- विभिन्न अनुभागों के लिए हेडिंग्स का उपयोग करें
- आसान खोज के लिए टैग्स जोड़ें
- संबंधित नोट्स से लिंक करें

### समीक्षा

- डेली नोट्स की साप्ताहिक समीक्षा
- महत्वपूर्ण आइटम्स को स्थायी नोट्स में निकालें
- पुरानी नोट्स को संग्रहित या सारांशित करें
