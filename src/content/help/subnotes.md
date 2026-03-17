# Subnotes

Subnotes let you create nested, hierarchical notes within Classic. Organize complex topics into manageable pieces.

## What Are Subnotes?

Subnotes are notes within notes—a way to create hierarchical content structures.

### Benefits

- **Organization**: Break complex topics into smaller pieces
- **Nesting**: Create multiple levels of hierarchy
- **Navigation**: Easy to navigate between related notes
- **Flexibility**: Expand and collapse as needed

## Creating Subnotes

### Method 1: Indentation

Create subnotes by indenting content under a parent note

1. Create a parent note
2. Create a new note
3. Drag the new note onto the parent
4. It becomes a subnote

### Method 2: Context Menu

1. Right-click a note
2. Select "New Subnote"
3. A nested note is created

### Method 3: Keyboard Shortcut

1. Select a note
2. Press `Cmd/Ctrl+Shift+N`
3. A subnote is created

## Managing Subnotes

### Expanding & Collapsing

Click the arrow next to a note with subnotes

- **Expand**: Show all nested notes
- **Collapse**: Hide nested notes

### Navigation

- Click to open a subnote
- Use arrow keys to navigate hierarchy
- Breadcrumb shows your location

### Moving Subnotes

Drag and drop to reorganize

1. Click and hold the subnote
2. Drag to new location
3. Drop to reposition

### Converting to Main Note

Promote a subnote to top level

1. Right-click the subnote
2. Select "Move to Root"
3. Note becomes a main note

## Subnote Depth

Classic supports multiple levels of nesting

```
📁 Project
  📄 Overview
  📁 Research
    📄 User Interviews
    📄 Survey Results
    📁 Analysis
      📄 Key Findings
      📄 Recommendations
  📁 Planning
    📄 Timeline
    📄 Resources
```

### Best Practices

- **Limit depth**: 3-4 levels maximum for clarity
- **Logical grouping**: Group related content together
- **Clear naming**: Use descriptive names for subnotes

## Use Cases

### Project Documentation

```
Project Alpha
├── Requirements
├── Architecture
│   ├── Frontend
│   ├── Backend
│   └── Database
├── Meeting Notes
└── Progress Reports
```

### Knowledge Base

```
Programming
├── JavaScript
│   ├── Basics
│   ├── Advanced
│   └── Best Practices
├── Python
│   ├── Basics
│   └── Libraries
└── Resources
```

### Study Notes

```
Biology 101
├── Cell Structure
│   ├── Membrane
│   ├── Nucleus
│   └── Organelles
├── Genetics
│   ├── DNA
│   └── RNA
└── Evolution
```

## Linking with Subnotes

### Backlinks

Subnotes automatically create backlinks to parent notes

- See "Linked References" section
- Navigate between related notes
- Understand note relationships

### Wikilinks

Link to subnotes from anywhere

```markdown
See [[Project/Research/Analysis]] for details.
```

## Tips

### Naming Convention

Use clear, consistent naming

```
✅ Good:
Project/Requirements/Functional
Project/Requirements/Non-Functional

❌ Avoid:
Project/req/func
Project/rq/nf
```

### Breadcrumb Navigation

Use breadcrumbs to understand your location

```
Project > Research > Analysis
```

### Search

Search includes subnotes automatically

- Find content across all levels
- Filter by note depth
- Quick navigation

### Templates

Apply templates to subnotes

1. Create subnote
2. Use slash command `/template`
3. Choose template

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| New Subnote | `Cmd/Ctrl+Shift+N` |
| Expand All | `Cmd/Ctrl+Down` |
| Collapse All | `Cmd/Ctrl+Up` |
| Move Up | `Opt/Alt+Up` |
| Move Down | `Opt/Alt+Down` |
| Promote | `Opt/Alt+Left` |
| Demote | `Opt/Alt+Right` |

## Troubleshooting

### Subnote Not Showing

- Check if parent is collapsed
- Verify note wasn't moved
- Refresh the sidebar

### Can't Create Subnote

- Ensure parent note exists
- Check permissions
- Try context menu method

### Lost Subnotes

Use search to find missing notes

1. Open search (`Cmd/Ctrl+F`)
2. Type note name
3. View full path in results
