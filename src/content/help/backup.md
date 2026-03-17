# Backup & Restore

Keep your notes safe with Classic's built-in backup system. Never lose your work again.

## Automatic Backups

### How It Works

Classic automatically creates backups of your notes at regular intervals

- **Default frequency**: Every 30 minutes
- **Backup location**: Same folder as your notes
- **Retention**: Keeps last 10 backups
- **Format**: Compressed archive (`.cbak`)

### Configuring Auto Backup

1. Open Settings
2. Navigate to **Backup & Restore**
3. Configure the following

| Setting | Options | Default |
| ------- | ------- | ------- |
| Enable Auto Backup | On/Off | On |
| Backup Frequency | 15min / 30min / 1hr / 4hr | 30min |
| Keep Backups | 5 / 10 / 20 / 50 | 10 |
| Backup Location | Custom path | Notes folder |

## Manual Backup

### Create Backup Now

1. Open Command Palette (`Cmd/Ctrl+P`)
2. Type "Backup"
3. Select **Create Backup Now**
4. Choose location (optional)
5. Backup is created

### Backup File Format

Backups are stored as `.cbak` files containing

- All notes (Markdown files)
- Attachments
- Settings
- Metadata (tags, links, etc.)

## Restore from Backup

### Restore Process

1. Open Settings
2. Go to **Backup & Restore**
3. Click **Restore from Backup**
4. Select the backup file
5. Choose restore options
6. Confirm restoration

### Restore Options

| Option | Description |
| ------ | ----------- |
| **Replace All** | Completely replace current notes with backup |
| **Merge** | Combine backup with existing notes |
| **Preview** | View backup contents before restoring |

### What Gets Restored

- ✅ All notes and folders
- ✅ Attachments
- ✅ Tags and metadata
- ✅ Note history
- ⚠️ Settings (optional)
- ❌ Application preferences

## Backup Locations

### Default Location

```
~/Classic/backups/
├── backup-2024-01-15-10-30.cbak
├── backup-2024-01-15-11-00.cbak
└── backup-2024-01-15-11-30.cbak
```

### Custom Location

1. Open Settings
2. Go to Backup & Restore
3. Click "Change Backup Location"
4. Select your preferred folder

### Cloud Backup

Point the backup location to a cloud-synced folder

- **iCloud**: `~/Library/Mobile Documents/com~apple~CloudDocs/Classic Backups`
- **Dropbox**: `~/Dropbox/Classic Backups`
- **Google Drive**: `~/Google Drive/Classic Backups`
- **OneDrive**: `~/OneDrive/Classic Backups`

## Best Practices

### Backup Schedule

- **Auto Backup**: Keep enabled at 30-minute intervals
- **Manual Backup**: Create before major changes
- **Offsite Backup**: Regularly copy backups to external storage

### Backup Verification

Periodically verify your backups

1. Create a test restore
2. Check note contents
3. Verify attachments
4. Confirm metadata

### Backup Rotation

- Keep recent backups locally
- Archive older backups to external storage
- Delete very old backups to save space

## Troubleshooting

### Backup Failed

**Possible causes**

- Insufficient disk space
- Permission issues
- File in use

**Solutions**

1. Check available disk space
2. Verify folder permissions
3. Close other applications
4. Try a different location

### Restore Failed

**Possible causes**

- Corrupted backup file
- Incompatible version
- Insufficient space

**Solutions**

1. Try an older backup
2. Check backup file integrity
3. Free up disk space
4. Contact support

### Missing Backups

**Possible causes**

- Auto backup disabled
- Backup location changed
- Backups deleted

**Solutions**

1. Check backup settings
2. Verify backup location
3. Enable auto backup
4. Create manual backup now

## Advanced Options

### Encrypted Backups

For added security

1. Open Settings
2. Go to Backup & Restore
3. Enable "Encrypt Backups"
4. Set a password
5. Remember this password - it cannot be recovered

### Incremental Backups

Save space with incremental backups

- Only changes since last backup are stored
- Full restore reconstructs complete state
- Reduces backup time and size

### Backup Exclusions

Exclude specific content from backups

1. Open Settings
2. Go to Backup & Restore
3. Click "Exclusions"
4. Add folders or files to exclude
