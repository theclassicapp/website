# Arsitektur Local-First

Classic dibangun dengan privasi sebagai fondasi. Data Anda tetap di perangkat Anda, selalu.

## Apa Arti "Local-First"?

Local-first berarti:

1. **Data Anda disimpan secara lokal** di perangkat Anda. Semua catatan, lampiran, dan pengaturan Anda disimpan dalam folder di komputer Anda.
2. **Tidak ada cloud yang diperlukan** Classic bekerja tanpa koneksi internet.
3. **Anda memiliki data Anda** Anda memiliki kendali penuh atas data Anda.

## Penyimpanan Data

### Lokasi Default

Data Anda disimpan dalam folder khusus:

| Platform | Lokasi |
| -------- | ------ |
| **macOS** | `~/Library/Application Support/Classic/notes` |
| **Windows** | `%APPDATA%\Classic\notes` |
| **Linux** | `~/.config/Classic/notes` |

### Format Data

- Catatan disimpan sebagai file teks biasa (`.md`)
- Lampiran disimpan di subfolder `attachments`
- Pengaturan disimpan dalam `settings.json`

### Struktur File

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

## Manfaat Privasi

### Tidak Ada Akun yang Diperlukan

- Tidak perlu mendaftar
- Tidak ada verifikasi email
- Tidak ada informasi pribadi yang dikumpulkan

### Tidak Ada Pelacakan

- Tidak ada analitik
- Tidak ada telemetri
- Tidak ada data penggunaan yang dikirim ke server eksternal

### Mampu Offline

- Bekerja tanpa internet
- Sinkronisasi hanya saat Anda memilih
- Data Anda selalu dapat diakses

## Keamanan Data

### Tanggung Jawab Anda

- **Backup**: Siapkan backup otomatis di Pengaturan
- **Ekspor**: Ekspor data Anda secara teratur
- **Pembaruan**: Jaga Classic tetap diperbarui untuk perbaikan keamanan

### Tanggung Jawab Kami

- **Penyimpanan lokal**: Kami tidak pernah melihat atau menyentuh data Anda
- **Tidak ada backdoor**: Tidak ada pengumpulan data tersembunyi
- **Transparansi**: Terbuka dan jujur tentang penanganan data

## Sinkronisasi (Opsional)

Classic tidak menyertakan sinkronisasi cloud bawaan. Namun, Anda dapat menyinkronkan data Anda:

### Menggunakan iCloud/OneDrive/Dropbox

1. Buka Pengaturan Classic
2. Ubah lokasi folder Catatan ke folder cloud Anda
3. Classic akan menyinkronkan melalui penyedia cloud Anda

### Menggunakan Git

1. Inisialisasi repo git di folder catatan Anda
2. Commit dan push perubahan secara manual atau dengan otomasi

## Pemulihan Data

### Dari Backup

1. Buka Pengaturan
2. Buka Backup & Restore
3. Pilih file backup
4. Klik Restore

### Pemulihan Manual

1. Temukan folder catatan Anda
2. Salin file ke lokasi yang aman
3. Impor ke instalasi Classic baru

## Pertanyaan yang Sering Diajukan

### Apakah data saya benar-benar pribadi?

**Ya.** Data Anda tidak pernah meninggalkan perangkat Anda kecuali Anda secara eksplisit menyinkronkannya menggunakan layanan pihak ketiga.

### Bisakah saya memindahkan data saya ke komputer lain?

**Ya.** Cukup salin folder catatan Anda ke komputer baru dan arahkan Classic ke folder tersebut di pengaturan.

### Apa yang terjadi jika saya uninstall Classic?

**Data Anda tetap ada.** Menguninstall Classic tidak menghapus folder catatan Anda. Anda dapat dengan aman uninstall dan reinstall tanpa kehilangan data.

### Bisakah Classic mengakses data saya?

**Tidak.** Classic adalah aplikasi lokal tanpa konektivitas eksternal untuk pengumpulan data.
