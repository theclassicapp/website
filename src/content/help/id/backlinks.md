# Tautan Balik

Tautan balik menunjukkan koneksi antar catatan Anda, menciptakan jaringan ide terkait. Temukan hubungan yang tidak Anda ketahui sebelumnya.

## Apa Itu Tautan Balik?

Tautan balik menunjukkan catatan mana yang menautkan ke catatan saat ini. Mereka adalah koneksi dalam grafik pengetahuan Anda.

### Manfaat

- **Temukan koneksi**: Temukan catatan terkait secara otomatis
- **Konteks**: Pahami bagaimana ide saling terkait
- **Navigasi**: Loncat antar catatan yang terhubung
- **Grafik pengetahuan**: Visualisasi pemikiran Anda

## Bagaimana Tautan Balik Bekerja

Saat Anda membuat tautan ke catatan lain, Classic secara otomatis membuat tautan balik.

```markdown
Di catatan A:
Lihat [[Perencanaan Proyek]] untuk detail.

Hasil:
- Catatan A menautkan ke "Perencanaan Proyek"
- "Perencanaan Proyek" menampilkan tautan balik ke Catatan A
```

## Melihat Tautan Balik

### Panel Tautan Balik

Buka panel tautan balik untuk melihat semua referensi:

1. Buka catatan apa pun
2. Klik ikon tautan balik di bilah samping
3. Lihat semua catatan yang menautkan ke ini

### Tautan Balik Sebaris

Tautan balik muncul di bagian bawah setiap catatan:

- Menampilkan nama catatan sumber
- Menampilkan cuplikan konteks
- Klik untuk menavigasi

## Membuat Tautan

### Sintaks Wikilink

Gunakan kurung ganda untuk menautkan ke catatan:

```markdown
[[Nama Catatan]]
[[Catatan Lain]]
```

### Teks Tampilan

Kustomisasi teks tautan:

```markdown
[[Proyek Alpha|proyek alpha]]
[[Catatan Rapat|rapat kemarin]]
```

### Tautan ke Heading

Tautan ke bagian tertentu:

```markdown
[[Nama Catatan#Heading]]
[[Nama Catatan#Bagian|loncat ke bagian]]
```

## Jenis Tautan Balik

### Tautan Langsung

Wikilink eksplisit yang Anda buat:

```markdown
Terkait: [[Catatan Serupa]]
```

### Sebutan Tidak Terhubung

Catatan yang menyebutkan judul tetapi tidak ditautkan:

```markdown
Catatan menyebutkan "Proyek Alpha" tetapi tidak ditautkan
```

Classic menyarankan untuk mengonversi ini menjadi tautan.

## Panel Tautan Balik

### Fitur

- **Filter**: Cari melalui tautan balik
- **Urutkan**: Berdasarkan tanggal, nama, atau relevansi
- **Pratinjau**: Arahkan kursor untuk melihat konten
- **Konteks**: Lihat teks sekitar

### Tindakan

- Klik untuk membuka catatan tertaut
- Klik kanan untuk opsi
- Konversi sebutan tidak terhubung

## Kasus Penggunaan

### Manajemen Pengetahuan

Bangun wiki pribadi:

```markdown
# Machine Learning

Terkait dengan [[Kecerdasan Buatan]]
Dibangun di atas [[Statistik]]
Digunakan dalam [[Pemrosesan Bahasa Alami]]
```

### Dokumentasi Proyek

Hubungkan dokumen terkait:

```markdown
# Desain API

Referensi [[Skema Database]]
Tergantung pada [[Alur Autentikasi]]
Lihat juga [[Integrasi Frontend]]
```

### Riset

Tautkan konsep dan sumber:

```markdown
# Catatan Riset

Berdasarkan [[Makalah Sumber A]]
Bertentangan dengan [[Makalah Sumber B]]
Mendukung [[Hipotesis 1]]
```

### Catatan Rapat

Hubungkan rapat dengan proyek:

```markdown
# Rapat: Perencanaan Q4

Proyek: [[Proyek Alpha]]
Sebelumnya: [[Review Q3]]
Selanjutnya: [[Kickoff Q4]]
```

## Tampilan Grafik

Visualisasi tautan balik Anda sebagai jaringan:

1. Buka Tampilan Grafik (`Cmd/Ctrl+G`)
2. Lihat semua catatan sebagai node
3. Garis menunjukkan koneksi
4. Klik node untuk menavigasi

### Kontrol Grafik

- **Zoom**: Gulir untuk zoom
- **Geser**: Seret untuk bergerak
- **Filter**: Tampilkan/sembunyikan berdasarkan tag
- **Fokus**: Sorot koneksi catatan

## Tips

### Tautkan dengan Murah Hati

Buat tautan setiap kali Anda mereferensikan konsep lain:

```markdown
✅ Baik:
Membahas [[Roadmap Q4]] dan [[Alokasi Anggaran]].

❌ Hindari:
Membahas Roadmap Q4 dan Alokasi Anggaran.
```

### Gunakan Nama yang Konsisten

Cocokkan judul catatan persis untuk penautan yang andal:

```markdown
✅ [[Catatan Rapat]]
❌ [[catatan rapat]] (huruf besar-kecil penting)
```

### Tinjau Tautan Balik

Periksa tautan balik secara berkala untuk:

- Menemukan koneksi yang terlupakan
- Menemukan catatan untuk digabungkan
- Mengidentifikasi kesenjangan pengetahuan

### Pratinjau Tautan

Arahkan kursor ke tautan untuk melihat pratinjau tanpa membuka:

- Lihat beberapa baris pertama
- Periksa apakah itu catatan yang benar
- Referensi cepat

## Pintasan Keyboard

| Tindakan | Pintasan |
|----------|----------|
| Buka Tautan Balik | `Cmd/Ctrl+Shift+B` |
| Buat Tautan | `[[` (auto-lengkapi) |
| Buka Tampilan Grafik | `Cmd/Ctrl+G` |
| Navigasi Tautan | `Tab` melalui tautan |

## Fitur Lanjutan

### Penyematan

Sematkan konten dari catatan lain:

```markdown
![[Nama Catatan]]
![[Nama Catatan#Bagian]]
```

### Transklusi

Sertakan konten sebaris:

```markdown
## Konten Terkait
![[Template Bersama#Header]]
```

### Pewarnaan Tautan

Tautan berubah warna berdasarkan:

- **Biru**: Tautan belum dikunjungi
- **Ungu**: Tautan dikunjungi
- **Merah**: Tautan rusak (catatan tidak ada)

## Pemecahan Masalah

### Tautan Balik Hilang

- Periksa sintaks tautan `[[Nama Catatan]]`
- Verifikasi judul catatan cocok persis
- Segarkan panel tautan balik

### Tautan Rusak

- Catatan mungkin telah diganti nama
- Catatan mungkin telah dihapus
- Gunakan pencarian untuk menemukan catatan yang benar

### Tautan Duplikat

- Konsolidasikan catatan serupa
- Gunakan redirect untuk catatan yang diganti nama
- Periksa variasi judul
