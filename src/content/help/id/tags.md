# Tag

Tag adalah cara ampuh untuk mengatur dan mengkategorikan catatan Anda di Classic. Temukan konten terkait secara instan.

## Membuat Tag

### Tag Sebaris

Tambahkan tag langsung di konten catatan Anda:

```markdown
# Catatan Rapatan

Membahas roadmap Q4 #kerja #rapat #perencanaan
```

### Menggunakan Tombol Tag

1. Klik ikon tag di bilah alat
2. Ketik nama tag Anda
3. Tekan Enter

### Pintasan Keyboard

| Platform | Pintasan |
|----------|----------|
| **macOS** | `Cmd+T` |
| **Windows/Linux** | `Ctrl+T` |

## Sintaks Tag

### Tag Dasar

```markdown
#proyek #kerja #penting
```

### Tag Bertingkat

Buat hierarki tag dengan `/`:

```markdown
#kerja/rapat
#kerja/proyek
#pribadi/hobi/membaca
```

### Tag Multi-kata

Gunakan tanda hubung atau garis bawah:

```markdown
#proyek-alpha
#catatan_rapat
#perencanaan-q4
```

## Mengelola Tag

### Melihat Semua Tag

1. Buka bilah samping
2. Temukan bagian "Tag"
3. Lihat semua tag Anda

### Awan Tag

Visualisasi tag yang paling sering digunakan:

- Tag lebih besar = lebih banyak catatan
- Klik tag apa pun untuk memfilter
- Lihat jumlah catatan per tag

### Mengganti Nama Tag

1. Klik kanan tag
2. Pilih "Ganti Nama"
3. Masukkan nama baru
4. Semua catatan diperbarui secara otomatis

### Menghapus Tag

1. Klik kanan tag
2. Pilih "Hapus"
3. Konfirmasi penghapusan
4. Tag dihapus dari semua catatan

## Mencari berdasarkan Tag

### Panel Tag

Klik tag di bilah samping untuk memfilter catatan:

### Sintaks Pencarian

Gunakan `tag:` dalam pencarian:

```
tag:kerja
tag:kerja/rapat
```

### Menggabungkan Tag

Temukan catatan dengan beberapa tag:

```
tag:kerja tag:mendesak
```

### Mengecualikan Tag

Temukan catatan tanpa tag:

```
-tag:diarsipkan
```

## Praktik Terbaik Tag

### Tetap Sederhana

- Gunakan 3-5 tag per catatan
- Konsisten dengan penamaan
- Hindari proliferasi tag

### Gunakan Hierarki

Atur tag terkait:

```
#kerja
  #kerja/rapat
  #kerja/proyek
  #kerja/tenggat-waktu

#pribadi
  #pribadi/kesehatan
  #pribadi/keuangan
```

### Tetapkan Konvensi

Tentukan standar tag untuk diri Anda sendiri:

- **Status**: `#todo` `#dalam-proses` `#selesai`
- **Prioritas**: `#mendesak` `#tinggi` `#rendah`
- **Jenis**: `#rapat` `#referensi` `#ide`

## Saran Tag

Saat Anda mengetik `#`, Classic menyarankan tag yang ada:

- Tag terbaru muncul pertama
- Pencocokan fuzzy didukung
- Tekan Tab untuk menerima saran

## Statistik Tag

Lihat penggunaan tag di Pengaturan:

- Tag yang paling sering digunakan
- Tag yang tidak digunakan
- Tren tag dari waktu ke waktu

## Kasus Penggunaan

### Manajemen Proyek

```markdown
# Kickoff Proyek #proyek-alpha #rapat #2024-01-15

Peserta: Tim Alpha
Status: #todo
```

### Basis Pengetahuan

```markdown
# JavaScript Closures #pemrograman #javascript #referensi #lanjutan

Closures adalah fungsi yang memiliki akses ke...
```

### Catatan Harian

```markdown
# 2024-01-15

- Standup pagi #kerja #rapat
- Review kode #kerja #pengembangan
- Sesi gym #pribadi #kesehatan
```

### Catatan Membaca

```markdown
# Catatan Atomic Habits #membaca #buku #produktivitas

Pelajaran utama dari buku ini...
```

## Pintasan Keyboard

| Tindakan | Pintasan |
|----------|----------|
| Tambah Tag | `Cmd/Ctrl+T` |
| Cari Tag | `Cmd/Ctrl+F`, lalu ketik `tag:` |
| Tampilkan Panel Tag | `Cmd/Ctrl+Shift+T` |

## Tips

### Penamaan Konsisten

Tetap pada konvensi:

```
✅ #catatan-rapat
✅ #catatan_rapat
❌ #Catatan Rapat (spasi tidak diperbolehkan)
❌ #catatanRapat (tidak konsisten)
```

### Hindari Over-tagging

Terlalu banyak tag menjadi tidak terkelola:

```
✅ #kerja #mendesak #proyek-alpha
❌ #kerja #mendesak #penting #hariini #senin #kantor #meja #komputer
```

### Pembersihan Berkala

Tinjau dan konsolidasikan tag secara teratur:

- Gabungkan tag serupa
- Hapus tag yang tidak digunakan
- Perbarui konvensi

## Fitur Lanjutan

### Folder Pintar Berbasis Tag

Buat folder yang terisi otomatis berdasarkan tag:

1. Buat folder baru
2. Setel filter: `tag:proyek`
3. Semua catatan yang ditag muncul

### Tag di YAML

Tambahkan tag ke frontmatter catatan:

```yaml
---
tags:
  - kerja
  - rapat
  - proyek-alpha
---
```

### Alias Tag

Siapkan alias tag di Pengaturan:

- `#todo` = `#tugas` = `#aksi`
- Konsolidasikan tag serupa
