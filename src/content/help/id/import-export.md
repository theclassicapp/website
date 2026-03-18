# Impor & Ekspor

Bawa catatan Anda ke Classic dari aplikasi lain, atau ekspor untuk berbagi atau backup. Classic mendukung beberapa format untuk migrasi data yang mulus.

## Mengimpor Catatan

### Format yang Didukung

| Format | Ekstensi | Catatan |
| ------ | --------- | ------- |
| Markdown | `.md` | ✅ Dukungan penuh |
| Teks Biasa | `.txt` | ✅ Diimpor sebagai catatan |
| JSON | `.json` | ✅ Format Classic |
| HTML | `.html` | ⚠️ Dikonversi ke Markdown |
| Evernote | `.enex` | ⚠️ Eksperimental |
| Notion | Ekspor Notion | ⚠️ Eksperimental |
| Obsidian | Ekspor Markdown | ✅ Dukungan penuh |

### Proses Impor

1. Buka **File** → **Impor** (atau `Cmd/Ctrl+I`)
2. Pilih file Anda untuk diimpor
3. Pilih folder tujuan
4. Tinjau pratinjau impor
5. Konfirmasi impor

### Impor dari Clipboard

Impor cepat dari sumber apa pun:

1. Salin teks ke clipboard
2. Buka Palet Perintah
3. Ketik "Impor dari Clipboard"
4. Catatan baru dibuat secara otomatis

### Impor Massal

Impor beberapa file sekaligus:

1. Buka **File** → **Impor**
2. Pilih **Impor Folder**
3. Pilih folder yang berisi catatan
4. Semua file yang didukung diimpor

## Mengekspor Catatan

### Format Ekspor

| Format | Kasus Penggunaan |
| ------ | ---------------- |
| **Markdown** | Berbagi, backup, aplikasi lain |
| **HTML** | Publikasi web, berbagi |
| **PDF** | Pengarsipan, mencetak |
| **Teks Biasa** | Berbagi sederhana |
| **JSON** | Integrasi API |

### Ekspor Catatan Tunggal

1. Buka catatan yang ingin Anda ekspor
2. Klik **File** → **Ekspor**
3. Pilih format
4. Pilih lokasi
5. Simpan

### Ekspor Beberapa Catatan

1. Pilih catatan di bilah samping (Cmd/Ctrl+klik)
2. Klik kanan → **Ekspor Terpilih**
3. Pilih format
4. Pilih lokasi
5. Simpan

### Ekspor Semua Catatan

1. Buka **File** → **Ekspor Semua**
2. Pilih format
3. Pilih lokasi
4. Tunggu ekspor selesai

## Panduan Migrasi

### Dari Obsidian

Classic dapat mengimpor vault Obsidian secara langsung:

1. Buka **File** → **Impor**
2. Pilih **Vault Obsidian**
3. Navigasi ke folder vault Anda
4. Pilih untuk mengimpor

**Apa yang ditransfer**

- ✅ Catatan dan folder
- ✅ Tag
- ✅ Tautan (dikonversi ke tautan balik)
- ✅ Metadata
- ⚠️ Plugin (tidak didukung)

### Dari Notion

1. Ekspor dari Notion sebagai Markdown
2. Impor ke Classic
3. Tinjau pemformatan
4. Perbaiki tautan yang rusak

**Tips untuk migrasi Notion**

- Gunakan "Ekspor sebagai Markdown" Notion
- Periksa pemformatan checkbox
- Verifikasi referensi database
- Buat ulang database tertaut secara manual

### Dari Evernote

1. Ekspor dari Evernote sebagai HTML
2. Gunakan impor HTML Classic
3. Tinjau konten yang dikonversi

**Tips untuk migrasi Evernote**

- Notebook menjadi folder
- Tag dipertahankan
- Lampiran diimpor
- Periksa pemformatan

## Praktik Terbaik

### Sebelum Mengimpor

- Backup catatan yang ada
- Tinjau pratinjau impor
- Periksa duplikat
- Verifikasi pemformatan

### Setelah Mengimpor

- Tinjau catatan yang diimpor
- Perbaiki masalah pemformatan
- Perbarui tautan internal
- Tambahkan tag sesuai kebutuhan

### Ekspor Berkala

- Ekspor backup bulanan
- Gunakan format berbeda untuk tujuan berbeda
- Simpan ekspor terorganisir berdasarkan tanggal
- Simpan di cloud untuk backup offsite

## Pemecahan Masalah

### Impor Gagal

**Penyebab umum**

- Format tidak didukung
- File rusak
- Masalah izin
- Keterbatasan memori

**Solusi**

1. Coba format yang berbeda
2. Periksa integritas file
3. Verifikasi izin baca
4. Impor lebih sedikit file sekaligus

### Pemformatan Hilang

**Penyebab umum**

- Pemformatan kompleks
- Sintaks tidak didukung
- Keterbatasan konversi

**Solusi**

1. Gunakan ekspor Markdown dari aplikasi sumber
2. Sederhanakan pemformatan sebelum impor
3. Perbaiki secara manual setelah impor

### Lampiran Hilang

**Penyebab umum**

- Impor tidak menyertakan lampiran
- Jalur lampiran salah
- Keterbatasan ukuran

**Solusi**

1. Impor ulang dengan lampiran
2. Periksa folder lampiran
3. Impor lampiran secara terpisah
