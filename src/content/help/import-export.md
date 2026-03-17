# Import & Export

Bring your notes into Classic from other apps, or export them to share or backup. Classic supports multiple formats for seamless data migration.

## Importing Notes

### Supported Formats

| Format | Extension | Notes |
| ------ | --------- | ----- |
| Markdown | `.md` | ✅ Full support |
| Plain Text | `.txt` | ✅ Imported as note |
| JSON | `.json` | ✅ Classic format |
| HTML | `.html` | ⚠️ Converted to Markdown |
| Evernote | `.enex` | ⚠️ Experimental |
| Notion | Notion export | ⚠️ Experimental |
| Obsidian | Markdown export | ✅ Full support |

### Import Process

1. Open **File** → **Import** (or `Cmd/Ctrl+I`)
2. Select your file(s) to import
3. Choose destination folder
4. Review import preview
5. Confirm import

### Import from Clipboard

Quick import from any source

1. Copy text to clipboard
2. Open Command Palette
3. Type "Import from Clipboard"
4. New note created automatically

### Bulk Import

Import multiple files at once

1. Open **File** → **Import**
2. Select **Import Folder**
3. Choose the folder containing notes
4. All supported files are imported

## Exporting Notes

### Export Formats

| Format | Use Case |
| ------ | ------- |
| **Markdown** | Sharing, backups, other apps |
| **HTML** | Web publishing, |
| **PDF** | Archiving, printing |
| **Plain Text** | Simple sharing |
| **JSON** | API integration |

### Export Single Note

1. Open the note you2. Click **File** → **Export**
3. Choose format
4. Select location
5. Save

### Export Multiple Notes

1. Select notes in sidebar (Cmd/Ctrl+click)
2. Right-click → **Export Selected**
3. Choose format
4. Select location
5. Save

### Export All Notes

1. Open **File** → **Export All**
2. Choose format
3. Select location
4. Wait for export to complete

## Migration Guides

### From Obsidian

Classic can import Obsidian vaults directly

1. Open **File** → **Import**
2. Select **Obsidian Vault**
3. Navigate to your vault folder
4. Select to import

**What transfers**

- ✅ Notes and folders
- ✅ Tags
- ✅ Links (converted to backlinks)
- ✅ Metadata
- ⚠️ Plugins (not supported)

### From Notion

1. Export from Notion as Markdown
2. Import to Classic
3. Review formatting
4. Fix any broken links

**Tips for Notion migration**

- Use Notion's "Export as Markdown"
- Check checkbox formatting
- Verify database references
- Re-create linked databases manually

### From Evernote

1. Export from Evernote as HTML
2. Use Classic's HTML import
3. Review converted content

**Tips for Evernote migration**

- Notebooks become folders
- Tags are preserved
- Attachments are imported
- Check formatting

## Best Practices

### Before Importing

- Backup existing notes
- Review import preview
- Check for duplicates
- Verify formatting

### After Importing

- Review imported notes
- Fix any formatting issues
- Update internal links
- Add tags as needed

### Regular Exports

- Export backups monthly
- Use different formats for different purposes
- Keep exports organized by date
- Store in cloud for offsite backup

## Troubleshooting

### Import Failed

**Common causes**

- Unsupported format
- Corrupted file
- Permission issues
- Memory limitations

**Solutions**

1. Try a different format
2. Check file integrity
3. Verify read permissions
4. Import fewer files at once

### Formatting Lost

**Common causes**

- Complex formatting
- Unsupported syntax
- Conversion limitations

**Solutions**

1. Use Markdown export from source app
2. Simplify formatting before import
3. Manually fix after import

### Attachments Missing

**Common causes**

- Import didn't include attachments
- Wrong attachment path
- Size limitations

**Solutions**

1. Re-import with attachments
2. Check attachment folder
3. Import attachments separately
