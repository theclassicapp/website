# Daily Notes

Daily Notes automatically creates a new note for each day, perfect for journaling, daily planning, and or capturing time-based information.

## How It Works

### Automatic Creation

- A new note is created for each day
- Notes are named using the date format (e.g., `2024-01-15.md`)
- Previous days' notes are preserved and searchable

### Accessing Daily Notes

1. Click **Daily Notes** in the sidebar
2. Or press `Ctrl/Cmd+D`
3. Today's note opens automatically

## Daily Note Template

Customize the template for new daily notes

### Default Template

```markdown
# {{date}}

## Tasks
- [ ]
- [ ]

## Notes


## Journal

```

### Customizing

1. Open Settings
2. Go to Daily Notes
3. Edit the template
4. Use `{{date}}` for the current date

### Template Variables

| Variable | Description |
| -------- | ----------- |
| `{{date}}` | Current date (YYYY-MM-DD) |
| `{{time}}` | Current time (HH:mm) |
| `{{weekday}}` | Day name (Monday, etc.) |

## Features

### Date Navigation

- **Previous/Next**: Navigate between days
- **Calendar**: Jump to specific dates
- **Search**: Find content across all daily notes

### Automatic Linking

- Notes created on the same day are automatically linked
- Backlinks show connections between days
- Tags work across all daily notes

### Integration

- **Quick Capture**: Add to today's note with `#today`
- **Calendar View**: Visual overview of your daily notes
- **Statistics**: Track your writing streaks

## Best Practices

### Daily Journaling

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

### Meeting Notes

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

### Learning Log

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

## Tips

### Consistency

- Create notes at the same time each day
- Use consistent formatting
- Review and update throughout the day

### Organization

- Use headings for different sections
- Add tags for easy searching
- Link to related notes

### Review

- Weekly review of daily notes
- Extract important items to permanent notes
- Archive or summarize old notes
