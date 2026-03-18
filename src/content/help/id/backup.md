# Backup & Restore

Jaga catatan Anda tetap aman dengan sistem backup bawaan Classic. Jangan pernah kehilangan pekerjaan Anda lagi.

## Backup Otomatis

### Cara Kerjanya

Classic secara otomatis membuat backup catatan Anda secara berkala:

- **Frekuensi default**: Setiap 30 menit
- **Lokasi backup**: Folder yang sama dengan catatan Anda
- **Retensi**: Menyimpan 10 backup terakhir
- **Format**: Arsip terkompresi (`.cbak`)

### Mengkonfigurasi Auto Backup

1. Buka Pengaturan
2. Navigasi ke **Backup & Restore**
3. Konfigurasi berikut:

| Pengaturan | Opsi | Default |
| ---------- | ---- | ------- |
| Aktifkan Auto Backup | Aktif/Mati | Aktif |
| Frekuensi Backup | 15mnt / 30mnt / 1jam / 4jam | 30mnt |
| Simpan Backup | 5 / 10 / 20 / 50 | 10 |
| Lokasi Backup | Jalur kustom | Folder catatan |

## Backup Manual

### Buat Backup Sekarang

1. Buka Palet Perintah (`Cmd/Ctrl+P`)
2. Ketik "Backup"
3. Pilih **Buat Backup Sekarang**
4. Pilih lokasi (opsional)
5. Backup dibuat

### Format File Backup

Backup disimpan sebagai file `.cbak` yang berisi:

- Semua catatan (file Markdown)
- Lampiran
- Pengaturan
- Metadata (tag, tautan, dll.)

## Restore dari Backup

### Proses Restore

1. Buka Pengaturan
2. Buka **Backup & Restore**
3. Klik **Restore dari Backup**
4. Pilih file backup
5. Pilih opsi restore
6. Konfirmasi restorasi

### Opsi Restore

| Opsi | Deskripsi |
| ---- | --------- |
| **Ganti Semua** | Sepenuhnya mengganti catatan saat ini dengan backup |
| **Gabungkan** | Gabungkan backup dengan catatan yang ada |
| **Pratinjau** | Lihat konten backup sebelum merestore |

### Apa yang Di-restore

- ✅ Semua catatan dan folder
- ✅ Lampiran
- ✅ Tag dan metadata
- ✅ Riwayat catatan
- ⚠️ Pengaturan (opsional)
- ❌ Preferensi aplikasi

## Lokasi Backup

### Lokasi Default

```
~/Classic/backups/
├── backup-2024-01-15-10-30.cbak
├── backup-2024-01-15-11-00.cbak
└── backup-2024-01-15-11-30.cbak
```

### Lokasi Kustom

1. Buka Pengaturan
2. Buka Backup & Restore
3. Klik "Ubah Lokasi Backup"
4. Pilih folder pilihan Anda

### Backup Cloud

Arahkan lokasi backup ke folder yang disinkronkan cloud:

- **iCloud**: `~/Library/Mobile Documents/com~apple~CloudDocs/Classic Backups`
- **Dropbox**: `~/Dropbox/Classic Backups`
- **Google Drive**: `~/Google Drive/Classic Backups`
- **OneDrive**: `~/OneDrive/Classic Backups`

## Praktik Terbaik

### Jadwal Backup

- **Auto Backup**: Tetap aktifkan dengan interval 30 menit
- **Backup Manual**: Buat sebelum perubahan besar
- **Backup Offsite**: Secara teratur salin backup ke penyimpanan eksternal

### Verifikasi Backup

Verifikasi backup Anda secara berkala:

1. Buat restore pengujian
2. Periksa konten catatan
3. Verifikasi lampiran
4. Konfirmasi metadata

### Rotasi Backup

- Simpan backup terbaru secara lokal
- Arsipkan backup lama ke penyimpanan eksternal
- Hapus backup yang sangat lama untuk menghemat ruang

## Pemecahan Masalah

### Backup Gagal

**Kemungkinan penyebab**

- Ruang disk tidak mencukupi
- Masalah izin
- File sedang digunakan

**Solusi**

1. Periksa ruang disk yang tersedia
2. Verifikasi izin folder
3. Tutup aplikasi lain
4. Coba lokasi yang berbeda

### Restore Gagal

**Kemungkinan penyebab**

- File backup rusak
- Versi tidak kompatibel
- Ruang tidak mencukupi

**Solusi**

1. Coba backup yang lebih lama
2. Periksa integritas file backup
3. Kosongkan ruang disk
4. Hubungi dukungan

### Backup Hilang

**Kemungkinan penyebab**

- Auto backup dinonaktifkan
- Lokasi backup diubah
- Backup dihapus

**Solusi**

1. Periksa pengaturan backup
2. Verifikasi lokasi backup
3. Aktifkan auto backup
4. Buat backup manual sekarang

## Opsi Lanjutan

### Backup Terenkripsi

Untuk keamanan tambahan:

1. Buka Pengaturan
2. Buka Backup & Restore
3. Aktifkan "Enkripsi Backup"
4. Setel kata sandi
5. Ingat kata sandi ini - tidak dapat dipulihkan

### Backup Inkremental

Hemat ruang dengan backup inkremental:

- Hanya perubahan sejak backup terakhir yang disimpan
- Restore penuh merekonstruksi keadaan lengkap
- Mengurangi waktu dan ukuran backup

### Pengecualian Backup

Kecualikan konten tertentu dari backup:

1. Buka Pengaturan
2. Buka Backup & Restore
3. Klik "Pengecualian"
4. Tambahkan folder atau file untuk dikecualikan
