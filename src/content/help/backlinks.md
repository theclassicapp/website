# Backlinks

Backlinks show connections between your notes, creating a network of related ideas. Discover relationships you didn't know existed.

## What Are Backlinks?

Backlinks show which notes link to the current note. They're connections in your knowledge graph.

### Benefits

- **Discover connections**: Find related notes automatically
- **Context**: Understand how ideas relate
- **Navigation**: Jump between connected notes
- **Knowledge graph**: Visualize your thinking

## How Backlinks Work

When you create a link to another note, Classic automatically creates a backlink.

```markdown
In note A:
See [[Project Planning]] for details.

Result:
- Note A links to "Project Planning"
- "Project Planning" shows a backlink to Note A
```

## Viewing Backlinks

### Backlinks Panel

Open the backlinks panel to see all references

1. Open any note
2. Click the backlinks icon in the sidebar
3. See all notes linking to this one

### Inline Backlinks

Backlinks appear at the bottom of each note

- Shows source note name
- Displays context snippet
- Click to navigate

## Creating Links

### Wikilink Syntax

Use double brackets to link to notes

```markdown
[[Note Name]]
[[Another Note]]
```

### Display Text

Customize link text

```markdown
[[Project Alpha|the alpha project]]
[[Meeting Notes|yesterday's meeting]]
```

### Link to Headings

Link to specific sections

```markdown
[[Note Name#Heading]]
[[Note Name#Section|jump to section]]
```

## Backlink Types

### Direct Links

Explicit wikilinks you create

```markdown
Related: [[Similar Note]]
```

### Unlinked Mentions

Notes that mention the title but aren't linked

```markdown
Note mentions "Project Alpha" but isn't linked
```

Classic suggests converting these to links.

## Backlinks Panel

### Features

- **Filter**: Search through backlinks
- **Sort**: By date, name, or relevance
- **Preview**: Hover to preview content
- **Context**: See surrounding text

### Actions

- Click to open linked note
- Right-click for options
- Convert unlinked mentions

## Use Cases

### Knowledge Management

Build a personal wiki

```markdown
# Machine Learning

Related to [[Artificial Intelligence]]
Builds on [[Statistics]]
Used in [[Natural Language Processing]]
```

### Project Documentation

Connect related documents

```markdown
# API Design

References [[Database Schema]]
Depends on [[Authentication Flow]]
See also [[Frontend Integration]]
```

### Research

Link concepts and sources

```markdown
# Research Notes

Based on [[Source Paper A]]
Contradicts [[Source Paper B]]
Supports [[Hypothesis 1]]
```

### Meeting Notes

Connect meetings to projects

```markdown
# Meeting: Q4 Planning

Project: [[Project Alpha]]
Previous: [[Q3 Review]]
Next: [[Q4 Kickoff]]
```

## Graph View

Visualize your backlinks as a network

1. Open Graph View (`Cmd/Ctrl+G`)
2. See all notes as nodes
3. Lines show connections
4. Click nodes to navigate

### Graph Controls

- **Zoom**: Scroll to zoom
- **Pan**: Drag to move
- **Filter**: Show/hide by tag
- **Focus**: Highlight a note's connections

## Tips

### Link Generously

Create links whenever you reference another concept

```markdown
✅ Good:
Discussed the [[Q4 Roadmap]] and [[Budget Allocation]].

❌ Avoid:
Discussed the Q4 Roadmap and Budget Allocation.
```

### Use Consistent Names

Match note titles exactly for reliable linking

```markdown
✅ [[Meeting Notes]]
❌ [[meeting notes]] (case matters)
```

### Review Backlinks

Periodically check backlinks to

- Discover forgotten connections
- Find notes to merge
- Identify knowledge gaps

### Link Preview

Hover over links to preview without opening

- See first few lines
- Check if it's the right note
- Quick reference

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open Backlinks | `Cmd/Ctrl+Shift+B` |
| Create Link | `[[` (auto-completes) |
| Open Graph View | `Cmd/Ctrl+G` |
| Navigate Links | `Tab` through links |

## Advanced Features

### Embedding

Embed content from other notes

```markdown
![[Note Name]]
![[Note Name#Section]]
```

### Transclusion

Include content inline

```markdown
## Related Content
![[Shared Template#Header]]
```

### Link Coloring

Links change color based on

- **Blue**: Unvisited link
- **Purple**: Visited link
- **Red**: Broken link (note doesn't exist)

## Troubleshooting

### Missing Backlinks

- Check link syntax `[[Note Name]]`
- Verify note title matches exactly
- Refresh the backlinks panel

### Broken Links

- Note may have been renamed
- Note may have been deleted
- Use search to find the correct note

### Duplicate Links

- Consolidate similar notes
- Use redirects for renamed notes
- Check for title variations
