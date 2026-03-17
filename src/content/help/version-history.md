# Version History

Classic keeps track of every change to your notes. Browse, compare, and restore previous versions whenever you need.

## How Version History Works

### Automatic Tracking

Classic automatically saves versions of your notes

- **Every edit**: Each save creates a version
- **Time-stamped**: Know when changes occurred
- **Full content**: Complete snapshots preserved

### Retention

| Setting | Default |
|---------|---------|
| **History Retention** | 90 days |
| **Maximum Versions** | 100 per note |
| **Auto-cleanup** | Yes |

Configure these in Settings → Editor → Version History.

## Viewing History

### Opening Version History

1. Open any note
2. Click the history icon in the toolbar
3. Or use `Cmd/Ctrl+H`

### History Panel

The history panel shows

- **Timeline**: List of all versions
- **Timestamps**: When each version was saved
- **Preview**: See content of selected version

### Navigating Versions

1. Click any version in the list
2. Preview shows that version
3. Scroll through changes
4. Compare with current version

## Comparing Versions

### Side-by-Side View

See differences between versions

1. Open version history
2. Select a version
3. Click "Compare"
4. See additions (green) and deletions (red)

### Diff View

Text differences are highlighted

- **Green**: Added content
- **Red**: Removed content
- **Unchanged**: Regular text

## Restoring Versions

### Restore Entire Note

Replace current content with a previous version

1. Open version history
2. Select the version
3. Click "Restore"
4. Confirm the action

### Restore Selection

Copy just part of a previous version

1. Open version history
2. Select the version
3. Highlight the text you want
4. Click "Copy to Clipboard"
5. Paste in your current note

### Create New Note from Version

Keep both versions

1. Open version history
2. Select the version
3. Click "Create Note from Version"
4. A new note is created

## Version History Actions

| Action | Description |
|--------|-------------|
| **View** | Preview the version |
| **Compare** | Diff with current |
| **Restore** | Replace current with this |
| **Copy** | Copy content to clipboard |
| **Delete** | Remove this version |

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open History | `Cmd/Ctrl+H` |
| Previous Version | `Up` |
| Next Version | `Down` |
| Restore | `Cmd/Ctrl+R` |
| Close History | `Escape` |

## Settings

### Configure in Settings → Editor → Version History

| Setting | Options | Default |
|---------|---------|---------|
| Enable History | On/Off | On |
| Retention Period | 30/60/90/180 days | 90 days |
| Max Versions | 50/100/200/500 | 100 |
| Auto-save Interval | 1/5/10/30 minutes | 5 minutes |

### Storage Location

Version history is stored locally

- **macOS**: `~/Library/Application Support/Classic/history/`
- **Windows**: `%APPDATA%/Classic/history/`
- **Linux**: `~/.config/Classic/history/`

## Use Cases

### Recovering Accidental Changes

1. Open version history
2. Find version before the mistake
3. Restore that version

### Comparing Drafts

1. Open history
2. Compare different versions
3. See how the note evolved

### Finding Deleted Content

1. Browse older versions
2. Search for deleted text
3. Copy it back

### Tracking Progress

See how a note developed over time

- When ideas were added
- How structure changed
- Writing evolution

## Tips

### Regular Review

Periodically review version history

- Clean up unnecessary versions
- Note how content evolved
- Learn from your editing patterns

### Before Major Changes

Create a checkpoint

1. Make a small edit
2. Save (creates a version)
3. Now make your major changes
4. Easy to revert if needed

### Name Important Versions

Add markers in your notes

```markdown
<!-- VERSION: Final draft -->
<!-- VERSION: Before restructuring -->
```

These help identify versions later.

## Troubleshooting

### History Not Saving

- Check if version history is enabled
- Verify storage location has space
- Check file permissions

### Can't Find Old Version

- Version may have been auto-cleaned
- Check retention settings
- Increase retention period

### History Taking Too Much Space

1. Reduce retention period
2. Lower max versions per note
3. Run manual cleanup

### Slow History Loading

Large notes with many versions may load slowly

- Be patient with large histories
- Consider reducing max versions
- Archive old notes

## Privacy & Security

### Local Storage

Version history is stored locally

- Never sent to servers
- Your data stays private
- Only you have access

### Encrypted Backups

If you use encrypted backups

- Version history is included
- Protected by your backup password
- Secure even in backup files
