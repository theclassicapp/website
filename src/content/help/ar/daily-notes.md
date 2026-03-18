# الملاحظات اليومية
تنشئ كلاسيك تلقائياً بشكل تلقائيي يومي، وهي مثالية: التدوين اليومية أو المواعبة اليومية.

## كيف يعمل
### automatic creation
- a new note is created for each day
- notes are named using the date format (e.g., `2024-01-15.md`)
- previous days' notes are preserved and searchable
### accessing daily notes
1. click **Daily Notes** in the sidebar
2. or press `Ctrl/Cmd+D`
3. today's note opens automatically
## daily note template
customize the template for new daily notes
### default template
```markdown
# {{date}}

## Tasks
- [ ]
- [ ]

## Notes


## Journal
```
### customizing
1. open settings
2. go to daily notes
3. edit the template
4. use `{{date}}` for the current date
### template variables
| variable | description |
| -------- | ----------- |
| `{{date}}` | current date (YYYY-MM-DD) |
| `{{time}}` | current time (HH:mm) |
| `{{weekday}}` | day name (monday, etc.) |
## features
### date navigation
- **previous/next**: navigate between days
- **calendar**: jump to specific dates
- **search**: find content across all daily notes
### automatic linking
- notes created on the same day are automatically linked
- backlinks show connections between days
- tags work across all daily notes
### integration
- **quick capture**: add to today's note with `#today`
- **calendar view**: visual overview of your daily notes
- **statistics**: track your writing streaks
## best practices
### daily journaling
```markdown
# 2024-01-15
## morning
- Woke up at 6:30
- feeling: energized
## tasks
- [x] morning workout
- [ ] review PRs
- [ ] team meeting at 2pm
## learnings
- discovered a new keyboard shortcut
- learned about mermaid diagrams
## tomorrow
- focus on documentation
- schedule code review
```
### meeting notes
```markdown
# 2024-01-15
## team standup
**attendees**: alice, bob, carol
### updates
- alice: finished api integration
- bob: working on UI components
- carol: testing in progress
### blockers
- waiting for design review
### action items
- [ ] alice: deploy to staging
- [ ] bob: complete component library
- [ ] carol: write integration tests
```
### learning log
```markdown
# 2024-01-15
## today i learned
### mermaid diagrams
- can create flowcharts in markdown
- syntax is straightforward
- live preview is helpful
### resources
- [mermaid documentation](https://mermaid.js.org/)
## questions
- how to create complex diagrams?
- best practices for diagram organization?
```
## tips
### consistency
- create notes at the same time each day
- use consistent formatting
- review and update throughout the day
### organization
- use headings for different sections
- add tags for easy searching
- link to related notes
### review
- weekly review of daily notes
- extract important items to permanent notes
- archive or summarize old notes
