# الوسوم
الوسوم طريقة قوي لتنظيم الملاحظات والعثور الفوري.

 ابحث عن المحتوى ذات صمل العك

## إنشاء الوسوم
أضف الوسوم مباش في المحتوى باست `#` متبوعة اسم الوسم
   - اكتب في شريط الأدوات
   - اضغط على زر الوسم في شريط الأدوات

   - أو استخدم شريط الأدوات
   - `Cmd+T`
   - `Cmd+T`

| **macOS** | `Cmd+T` |
| **Windows/Linux** | `Ctrl+T` |
## بناء جملة الوسوم
### الوسوم الأساسية
```markdown
#project #work #meetings #planning
```
### الوسوم المتداخ
```markdown
#work/meetings
#work/projects
#personal/hobbies/reading
```
### كلمات متعددة الكلمات
```markdown
#project-alpha #meeting_notes
#q4-planning
```

### استخدام زر الوسم في شريط الأدوات
1. انقر على tag icon in the toolbar
2. Type your tag name
3. press Enter
### keyboard shortcut
| platform | shortcut |
|----------|----------|
| **macOS** | `Cmd+T` |
| **Windows/Linux** | `Ctrl+T` |
## إدارة الوسوم
### عرض جميع الوسوم
1. افت الشريط الجانبي
2. ابحث عن "Tags" section
3. شاهد جميع الوسوم
### tag cloud
تصور استخدام الوسوم الأكثرها استخدام
- كلماحص من زوج الوسوم
- Larger tags = more notes
- click any tag to filter
- See note count per tag
### renaming tags
1. Right-click a tag
2. select "Rename"
3. enter new name
4. All notes update automatically
### deleting tags
1. right-click a tag
2. select "Delete"
3. confirm deletion
4. Tag removed from all notes
## searching by tag
### tag panel
Click a tag in the sidebar to filter notes
### search syntax
Use `tag:` in search
```
tag:work
tag:work/meetings
```
### combining tags
Find notes with multiple tags
```
tag:work tag:urgent
```
### excluding tags
Find notes without a tag
```
-tag:archived
```
## tag best practices
### keep it simple
- use 3-5 tags per note
- be consistent with naming
- avoid tag proliferation
### use hierarchies
Organize related tags
```
#work
  #work/meetings
  #work/projects
  #work/deadlines

#personal
  #personal/health
  #personal/finance
```
### establish conventions
Define tag standards for yourself
- **status**: `#todo` `#in-progress` `#done`
- **priority**: `#urgent` `#high` `#low`
- **type**: `#meeting` `#reference` `#idea`
## tag suggestions
As you type `#`, Classic suggests existing tags
- recent tags appear first
- fuzzy matching supported
- press Tab to accept suggestion
## tag statistics
View tag usage in Settings
- most used tags
- unused tags
- tag trends over time
## use cases
### project management
```markdown
# Project Kickoff #project-alpha #meeting #2024-01-15

Attendees: Team Alpha
Status: #todo
```
### knowledge base
```markdown
# JavaScript Closures #programming #javascript #reference #advanced
Closures are functions that have access to...
```
### daily notes
```markdown
# 2024-01-15
- Morning standup #work #meetings
- Code review #work #development
- Gym session #personal #health
```
### reading notes
```markdown
# Atomic Habits Notes #reading #books #productivity
Key takeaways from the book...
```
## keyboard shortcuts
| action | shortcut |
|--------|----------|
| add tag | `Cmd/Ctrl+T` |
| search tags | `Cmd/Ctrl+F`, then type `tag:` |
| show tag panel | `Cmd/Ctrl+Shift+T` |
## tips
### consistent naming
stick to a convention
```
✅ #meeting-notes
✅ #meeting_notes
❌ #Meeting Notes (spaces not allowed)
❌ #meetingNotes (inconsistent)
```
### avoid over-tagging
Too many tags become unmanageable
```
✅ #work #urgent #project-alpha
❌ #work #urgent #important #today #monday #office #desk #computer
```
### periodic cleanup
Review and consolidate tags regularly
- merge similar tags
- remove unused tags
- update conventions
## advanced features
### tag-based smart folders
create folders that auto-populate based on tags
1. create new folder
2. set filter: `tag:project`
3. all tagged notes appear
### tag in yaml
add tags to note frontmatter
```yaml
---
tags:
  - work
  - meetings
  - project-alpha
---
```
### tag aliases
set up tag aliases in settings
- `#todo` = `#task` = `#action`
- consolidate similar tags
