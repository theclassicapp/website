# Tags

Tags are a powerful way to organize and categorize your notes in Classic. Find related content instantly.

## Creating Tags

### Inline Tags

Add tags directly in your note content

```markdown
# Meeting Notes

Discussed the Q4 roadmap #work #meetings #planning
```

### Using the Tag Button

1. Click the tag icon in the toolbar
2. Type your tag name
3. Press Enter

### Keyboard Shortcut

| Platform | Shortcut |
|----------|----------|
| **macOS** | `Cmd+T` |
| **Windows/Linux** | `Ctrl+T` |

## Tag Syntax

### Basic Tags

```markdown
#project #work #important
```

### Nested Tags

Create tag hierarchies with `/`

```markdown
#work/meetings
#work/projects
#personal/hobbies/reading
```

### Multi-word Tags

Use hyphens or underscores

```markdown
#project-alpha
#meeting_notes
#q4-planning
```

## Managing Tags

### Viewing All Tags

1. Open the sidebar
2. Find the "Tags" section
3. See all your tags

### Tag Cloud

Visualize your most-used tags

- Larger tags = more notes
- Click any tag to filter
- See note count per tag

### Renaming Tags

1. Right-click a tag
2. Select "Rename"
3. Enter new name
4. All notes update automatically

### Deleting Tags

1. Right-click a tag
2. Select "Delete"
3. Confirm deletion
4. Tag removed from all notes

## Searching by Tag

### Tag Panel

Click a tag in the sidebar to filter notes

### Search Syntax

Use `tag:` in search

```
tag:work
tag:work/meetings
```

### Combining Tags

Find notes with multiple tags

```
tag:work tag:urgent
```

### Excluding Tags

Find notes without a tag

```
-tag:archived
```

## Tag Best Practices

### Keep It Simple

- Use 3-5 tags per note
- Be consistent with naming
- Avoid tag proliferation

### Use Hierarchies

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

### Establish Conventions

Define tag standards for yourself

- **Status**: `#todo` `#in-progress` `#done`
- **Priority**: `#urgent` `#high` `#low`
- **Type**: `#meeting` `#reference` `#idea`

## Tag Suggestions

As you type `#`, Classic suggests existing tags

- Recent tags appear first
- Fuzzy matching supported
- Press Tab to accept suggestion

## Tag Statistics

View tag usage in Settings

- Most used tags
- Unused tags
- Tag trends over time

## Use Cases

### Project Management

```markdown
# Project Kickoff #project-alpha #meeting #2024-01-15

Attendees: Team Alpha
Status: #todo
```

### Knowledge Base

```markdown
# JavaScript Closures #programming #javascript #reference #advanced

Closures are functions that have access to...
```

### Daily Notes

```markdown
# 2024-01-15

- Morning standup #work #meetings
- Code review #work #development
- Gym session #personal #health
```

### Reading Notes

```markdown
# Atomic Habits Notes #reading #books #productivity

Key takeaways from the book...
```

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Add Tag | `Cmd/Ctrl+T` |
| Search Tags | `Cmd/Ctrl+F`, then type `tag:` |
| Show Tag Panel | `Cmd/Ctrl+Shift+T` |

## Tips

### Consistent Naming

Stick to a convention

```
✅ #meeting-notes
✅ #meeting_notes
❌ #Meeting Notes (spaces not allowed)
❌ #meetingNotes (inconsistent)
```

### Avoid Over-tagging

Too many tags become unmanageable

```
✅ #work #urgent #project-alpha
❌ #work #urgent #important #today #monday #office #desk #computer
```

### Periodic Cleanup

Review and consolidate tags regularly

- Merge similar tags
- Remove unused tags
- Update conventions

## Advanced Features

### Tag-based Smart Folders

Create folders that auto-populate based on tags

1. Create new folder
2. Set filter: `tag:project`
3. All tagged notes appear

### Tag in YAML

Add tags to note frontmatter

```yaml
---
tags:
  - work
  - meetings
  - project-alpha
---
```

### Tag Aliases

Set up tag aliases in Settings

- `#todo` = `#task` = `#action`
- Consolidate similar tags
