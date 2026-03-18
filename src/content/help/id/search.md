# Pencarian

Temukan catatan apa pun secara instan dengan pencarian powerful Classic. Pencarian full-text, filter, dan operator membantu Anda menemukan persis apa yang Anda butuhkan.

## Pencarian Dasar

### Membuka Pencarian

| Platform | Pintasan |
|----------|----------|
| **macOS** | `Cmd+F` |
| **Windows/Linux** | `Ctrl+F` |

Atau klik bilah pencarian di bilah samping.

### Cara Kerjanya

1. Buka pencarian
2. Mulai mengetik
3. Hasil muncul secara instan
4. Klik untuk membuka catatan

## Fitur Pencarian

### Pencarian Full-Text

Classic mencari melalui:

- Judul catatan
- Konten catatan
- Tag
- Nama file

### Hasil Real-Time

Hasil diperbarui saat Anda mengetik:

- Tidak perlu menekan Enter
- Umpan balik instan
- Pencocokan fuzzy diaktifkan

### Penyorotan Pencarian

Kata yang ditemukan disorot dalam hasil:

- Lihat konteks di sekitar kecocokan
- Identifikasi catatan relevan dengan cepat

## Operator Pencarian

### Pencocokan Eksak

Gunakan tanda kutip untuk frasa eksak:

```
"perencanaan proyek"
"catatan rapat"
```

### Pencarian Tag

Temukan catatan dengan tag tertentu:

```
tag:kerja
tag:rapat
tag:mendesak
```

### Kecualikan Istilah

Gunakan `-` untuk mengecualikan:

```
proyek -diarsipkan
rapat -dibatalkan
```

### Pencarian OR

Temukan catatan dengan istilah apa pun:

```
proyek OR inisiatif
```

### Rentang Tanggal

Cari berdasarkan tanggal:

```
created:2024-01-01..2024-12-31
modified:minggu-lalu
```

### Jenis File

Filter berdasarkan ekstensi:

```
ext:md
ext:txt
```

## Pencarian Lanjutan

### Menggabungkan Operator

Buat kueri kompleks:

```
tag:kerja -tag:diarsipkan created:minggu-lalu
"rapat" tag:proyek-alpha
```

### Pencarian Jalur

Cari dalam folder:

```
path:Proyek/
path:Arsip/
```

### Pencarian Judul

Cari hanya judul:

```
title:Roadmap
title:Rapat
```

### Pencarian Konten

Cari hanya konten (kecualikan judul):

```
content:penting
content:tenggat-waktu
```

## Filter Pencarian

### Berdasarkan Tag

1. Ketik pencarian Anda
2. Klik tag untuk memfilter
3. Hasil dipersempit ke catatan yang ditag

### Berdasarkan Tanggal

Filter berdasarkan tanggal modifikasi:

- Hari ini
- Minggu ini
- Bulan ini
- Rentang kustom

### Berdasarkan Folder

Batasi pencarian ke folder:

1. Klik kanan folder
2. Pilih "Cari di Folder"
3. Hasil dibatasi ke folder tersebut

## Hasil Pencarian

### Pengurutan

Urutkan hasil berdasarkan:

- **Relevansi** (default)
- **Tanggal Dimodifikasi** (terbaru dulu)
- **Tanggal Dibuat** (terbaru dulu)
- **Judul** (abjad)

### Pratinjau Hasil

Arahkan kursor ke hasil untuk melihat pratinjau:

- Beberapa baris pertama ditampilkan
- Istilah yang cocok disorot
- Tag ditampilkan

### Konteks

Lihat di mana kecocokan terjadi:

- Menampilkan teks sekitar
- Menyorot kecocokan
- Klik untuk loncat ke lokasi

## Riwayat Pencarian

### Pencarian Terbaru

Akses pencarian sebelumnya:

1. Klik di bilah pencarian
2. Lihat pencarian terbaru
3. Klik untuk menjalankan ulang

### Menghapus Riwayat

1. Buka Pengaturan
2. Buka Privasi
3. Klik "Hapus Riwayat Pencarian"

## Tips

### Gunakan Istilah Spesifik

Lebih spesifik = hasil lebih baik:

```
✅ "Anggaran pemasaran Q4"
❌ anggaran
```

### Gabungkan dengan Tag

Persempit hasil dengan cepat:

```
proyek tag:mendesak
```

### Gunakan Pengecualian

Filter kebisingan:

```
rapat -tag:diarsipkan
```

### Simpan Pencarian Sering

Buat pencarian tersimpan:

1. Masukkan pencarian Anda
2. Klik "Simpan Pencarian"
3. Beri nama
4. Akses dari bilah samping

## Navigasi Keyboard

| Tindakan | Pintasan |
|----------|----------|
| Buka Pencarian | `Cmd/Ctrl+F` |
| Hasil Berikutnya | `Enter` atau `Down` |
| Hasil Sebelumnya | `Shift+Enter` atau `Up` |
| Tutup Pencarian | `Escape` |

## Pengaturan Pencarian

### Kustomisasi di Pengaturan

| Pengaturan | Opsi |
|-----------|------|
| Peka Huruf Besar/Kecil | Aktif/Mati |
| Cari Judul | Aktif/Mati |
| Cari Konten | Aktif/Mati |
| Cari Tag | Aktif/Mati |
| Sertakan Arsip | Aktif/Mati |

## Kasus Penggunaan

### Menemukan Catatan Lama

```
"rapat" date:tahun-lalu
```

### Riset Proyek

```
path:Proyek/ tag:riset
```

### Item Aksi

```
"TODO" OR "FIXME" -tag:selesai
```

### Pekerjaan Terbaru

```
modified:minggu-ini
```

## Pemecahan Masalah

### Tidak Ada Hasil Ditemukan

- Periksa ejaan
- Hapus filter
- Coba istilah yang lebih luas
- Periksa apakah catatan diarsipkan

### Pencarian Lambat

- Koleksi catatan besar mungkin memerlukan waktu lebih lama
- Nonaktifkan kepekaan huruf besar/kecil
- Kurangi cakupan pencarian

### Catatan Hilang

- Catatan mungkin di folder yang berbeda
- Periksa apakah tag benar
- Verifikasi catatan tidak diarsipkan
