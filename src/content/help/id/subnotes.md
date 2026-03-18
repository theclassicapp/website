# Subcatatan

Subcatatan memungkinkan Anda membuat catatan bertingkat dan hierarkis dalam Classic. Atur topik kompleks menjadi bagian-bagian yang mudah dikelola.

## Apa Itu Subcatatan?

Subcatatan adalah catatan dalam catatan—cara untuk membuat struktur konten hierarkis.

### Manfaat

- **Organisasi**: Pecah topik kompleks menjadi bagian lebih kecil
- **Bertingkat**: Buat beberapa tingkat hierarki
- **Navigasi**: Mudah menavigasi antar catatan terkait
- **Fleksibilitas**: Perluas dan ciutkan sesuai kebutuhan

## Membuat Subcatatan

### Metode 1: Indentasi

Buat subcatatan dengan mengindentasi konten di bawah catatan induk:

1. Buat catatan induk
2. Buat catatan baru
3. Seret catatan baru ke catatan induk
4. Itu menjadi subcatatan

### Metode 2: Menu Konteks

1. Klik kanan catatan
2. Pilih "Subcatatan Baru"
3. Catatan bertingkat dibuat

### Metode 3: Pintasan Keyboard

1. Pilih catatan
2. Tekan `Cmd/Ctrl+Shift+N`
3. Subcatatan dibuat

## Mengelola Subcatatan

### Memperluas & Menciutkan

Klik panah di samping catatan dengan subcatatan:

- **Perluas**: Tampilkan semua catatan bertingkat
- **Ciutkan**: Sembunyikan catatan bertingkat

### Navigasi

- Klik untuk membuka subcatatan
- Gunakan tombol panah untuk menavigasi hierarki
- Breadcrumb menunjukkan lokasi Anda

### Memindahkan Subcatatan

Seret dan lepas untuk mengatur ulang:

1. Klik dan tahan subcatatan
2. Seret ke lokasi baru
3. Lepaskan untuk memposisikan ulang

### Mengonversi ke Catatan Utama

Promosikan subcatatan ke tingkat atas:

1. Klik kanan subcatatan
2. Pilih "Pindahkan ke Root"
3. Catatan menjadi catatan utama

## Kedalaman Subcatatan

Classic mendukung beberapa tingkat bertingkat:

```
📁 Proyek
  📄 Ikhtisar
  📁 Riset
    📄 Wawancara Pengguna
    📄 Hasil Survei
    📁 Analisis
      📄 Temuan Utama
      📄 Rekomendasi
  📁 Perencanaan
    📄 Timeline
    📄 Sumber Daya
```

### Praktik Terbaik

- **Batasi kedalaman**: Maksimal 3-4 tingkat untuk kejelasan
- **Pengelompokan logis**: Kelompokkan konten terkait bersama
- **Penamaan jelas**: Gunakan nama deskriptif untuk subcatatan

## Kasus Penggunaan

### Dokumentasi Proyek

```
Proyek Alpha
├── Persyaratan
├── Arsitektur
│   ├── Frontend
│   ├── Backend
│   └── Database
├── Catatan Rapat
└── Laporan Kemajuan
```

### Basis Pengetahuan

```
Pemrograman
├── JavaScript
│   ├── Dasar
│   ├── Lanjutan
│   └── Praktik Terbaik
├── Python
│   ├── Dasar
│   └── Library
└── Sumber Daya
```

### Catatan Belajar

```
Biologi 101
├── Struktur Sel
│   ├── Membran
│   ├── Nukleus
│   └── Organel
├── Genetika
│   ├── DNA
│   └── RNA
└── Evolusi
```

## Menautkan dengan Subcatatan

### Tautan Balik

Subcatatan secara otomatis membuat tautan balik ke catatan induk:

- Lihat bagian "Referensi Terhubung"
- Navigasi antar catatan terkait
- Pahami hubungan catatan

### Wikilink

Tautkan ke subcatatan dari mana saja:

```markdown
Lihat [[Proyek/Riset/Analisis]] untuk detail.
```

## Tips

### Konvensi Penamaan

Gunakan penamaan yang jelas dan konsisten:

```
✅ Baik:
Proyek/Persyaratan/Fungsional
Proyek/Persyaratan/Non-Fungsional

❌ Hindari:
Proyek/req/func
Proyek/rq/nf
```

### Navigasi Breadcrumb

Gunakan breadcrumb untuk memahami lokasi Anda:

```
Proyek > Riset > Analisis
```

### Pencarian

Pencarian menyertakan subcatatan secara otomatis:

- Temukan konten di semua tingkat
- Filter berdasarkan kedalaman catatan
- Navigasi cepat

### Template

Terapkan template ke subcatatan:

1. Buat subcatatan
2. Gunakan perintah slash `/template`
3. Pilih template

## Pintasan Keyboard

| Tindakan | Pintasan |
|----------|----------|
| Subcatatan Baru | `Cmd/Ctrl+Shift+N` |
| Perluas Semua | `Cmd/Ctrl+Down` |
| Ciutkan Semua | `Cmd/Ctrl+Up` |
| Pindah ke Atas | `Opt/Alt+Up` |
| Pindah ke Bawah | `Opt/Alt+Down` |
| Promosikan | `Opt/Alt+Left` |
| Turunkan | `Opt/Alt+Right` |

## Pemecahan Masalah

### Subcatatan Tidak Muncul

- Periksa apakah induk dicollapse
- Verifikasi catatan tidak dipindahkan
- Segarkan bilah samping

### Tidak Dapat Membuat Subcatatan

- Pastikan catatan induk ada
- Periksa izin
- Coba metode menu konteks

### Subcatatan Hilang

Gunakan pencarian untuk menemukan catatan yang hilang:

1. Buka pencarian (`Cmd/Ctrl+F`)
2. Ketik nama catatan
3. Lihat jalur lengkap di hasil
