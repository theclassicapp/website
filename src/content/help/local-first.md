# Local-First Architecture

Classic is built with privacy as the foundation. Your data stays on your device, always.

## What Does "Local-First" Mean?

Local-first means:

1. **Your data is stored locally** on All your notes, attachments, and settings are stored in a folder on your computer.
2. **No cloud required** Classic works without an internet connection.
3. **You own your data** You have complete control over your data.

## Data Storage

### Default Location

Your data is stored in a dedicated folder:

| Platform | Location |
| -------- | -------- |
| **macOS** | `~/Library/Application Support/Classic/notes` |
| **Windows** | `%APPDATA%\Classic\notes` |
| **Linux** | `~/.config/Classic/notes` |

### Data Format

- Notes are stored as plain text files (`.md`)
- Attachments are stored in an `attachments` subfolder
- Settings are stored in `settings.json`

### File Structure

```
notes/
├── Inbox/
├── Daily Notes/
│   └── 2024-01-15.md
├── Projects/
│   ├── My Project.md
│   └── sub-note.md
└── attachments/
    └── image.png
settings.json
```

## Privacy Benefits

### No Account Required

- No sign-up needed
- No email verification
- No personal information collected

### No Tracking

- No analytics
- No telemetry
- No usage data sent to external servers

### Offline Capable

- Works without internet
- Syncs only when you choose
- Your data is always accessible

## Data Security

### Your Responsibility

- **Backups**: Set up automatic backups in Settings
- **Exports**: Export your data regularly
- **Updates**: Keep Classic updated for security fixes

### Our Responsibility

- **Local storage**: We never see or touch your data
- **No backdoors**: No hidden data collection
- **Transparency**: Open and honest about data handling

## Sync (Optional)

Classic doesn't include built-in cloud sync. However, you can sync your data:

### Using iCloud/OneDrive/Dropbox

1. Open Classic Settings
2. Change the Notes folder location to your cloud folder
3. Classic will sync through your cloud provider

### Using Git

1. Initialize a git repo in your notes folder
2. Commit and push changes manually or with automation

## Data Recovery

### From Backup

1. Open Settings
2. Go to Backup & Restore
3. Select a backup file
4. Click Restore

### Manual Recovery

1. Locate your notes folder
2. Copy files to a safe location
3. Import into a fresh Classic installation

## Frequently Asked Questions

### Is my data really private?

**Yes.** Your data never leaves your device unless you explicitly sync it using a third-party service.

### Can I move my data to another computer?

**Yes.** Simply copy your notes folder to the new computer and point Classic to it in settings.

### What happens if I uninstall Classic?

**Your data remains.** Uninstalling Classic doesn't delete your notes folder. You can safely uninstall and reinstall without losing data.

### Can Classic access my data?

**No.** Classic is a local application with no external connectivity for data collection.
