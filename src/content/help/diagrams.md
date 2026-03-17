# Mermaid Diagrams

Create beautiful diagrams directly in your notes using Mermaid syntax.

## Basic Usage

To create a Mermaid diagram, use a code block with the `mermaid` language identifier:

```mermaid
graph TD
    A[Start] --> B[Process]
    B --> C[End]
```

## Flowchart

```mermaid
flowchart TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
```

## Sequence Diagram

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

## Class Diagram

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

## State Diagram

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> InProgress : Start editing
    InProgress --> Review : Finish
    Review --> Published : Approve
    Review --> Draft : Reject
    Published --> [*]
```

## Gantt Chart

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

## Pie Chart

```mermaid
pie showPets
    "Dogs" : 386
    "Cats" : 85
    "Rabbits" : 15
```

## Mind Map

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

## Tips

### Styling

- Use subgraphs to organize complex diagrams
- Add styles and themes for visual consistency
- Keep diagrams simple and readable

### Performance

- Large diagrams may slow down the editor
- Consider breaking complex diagrams into smaller ones
- Use `%%{init: ... }%%` for configuration

### Common Issues

**Diagram not rendering?**
- Check Mermaid syntax
- Ensure the code block has `mermaid` language
- Look for syntax errors in the preview

**Diagram too small/large?**
- Use `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` to adjust size

## Resources

- [Mermaid Documentation](https://mermaid.js.org/)
- [Mermaid Live Editor](https://mermaid.live/)
- [Mermaid GitHub](https://github.com/mermaid-js/mermaid)
