# Riwayat Versi

Classic melacak setiap perubahan pada catatan Anda. Jelajahi, bandingkan, dan restore versi sebelumnya kapan pun Anda butuhkan.

## Cara Kerja Riwayat Versi

### Pelacakan Otomatis

Classic secara otomatis menyimpan versi catatan Anda:

- **Setiap edit**: Setiap penyimpanan membuat versi
- **Timestamp**: Tahu kapan perubahan terjadi
- **Konten penuh**: Snapshot lengkap dipertahankan

### Retensi

| Pengaturan | Default |
| ----------- | ------- |
| **Retensi Riwayat** | 90 hari |
| **Versi Maksimum** | 100 per catatan |
| **Auto-cleanup** | Ya |

Konfigurasi ini di Pengaturan → Editor → Riwayat Versi.

## Melihat Riwayat

### Membuka Riwayat Versi

1. Buka catatan apa pun
2. Klik ikon riwayat di bilah alat
3. Atau gunakan `Cmd/Ctrl+H`

### Panel Riwayat

Panel riwayat menampilkan:

- **Timeline**: Daftar semua versi
- **Timestamp**: Kapan setiap versi disimpan
- **Pratinjau**: Lihat konten versi yang dipilih

### Menavigasi Versi

1. Klik versi apa pun dalam daftar
2. Pratinjau menampilkan versi tersebut
3. Gulir melalui perubahan
4. Bandingkan dengan versi saat ini

## Membandingkan Versi

### Tampilan Side-by-Side

Lihat perbedaan antar versi:

1. Buka riwayat versi
2. Pilih versi
3. Klik "Bandingkan"
4. Lihat penambahan (hijau) dan penghapusan (merah)

### Tampilan Diff

Perbedaan teks disorot:

- **Hijau**: Konten yang ditambahkan
- **Merah**: Konten yang dihapus
- **Tidak berubah**: Teks biasa

## Merestore Versi

### Restore Seluruh Catatan

Ganti konten saat ini dengan versi sebelumnya:

1. Buka riwayat versi
2. Pilih versi
3. Klik "Restore"
4. Konfirmasi tindakan

### Restore Seleksi

Salin hanya bagian dari versi sebelumnya:

1. Buka riwayat versi
2. Pilih versi
3. Sorot teks yang Anda inginkan
4. Klik "Salin ke Clipboard"
5. Tempel di catatan saat ini

### Buat Catatan Baru dari Versi

Simpan kedua versi:

1. Buka riwayat versi
2. Pilih versi
3. Klik "Buat Catatan dari Versi"
4. Catatan baru dibuat

## Tindakan Riwayat Versi

| Tindakan | Deskripsi |
| -------- | --------- |
| **Lihat** | Pratinjau versi |
| **Bandingkan** | Diff dengan saat ini |
| **Restore** | Ganti saat ini dengan ini |
| **Salin** | Salin konten ke clipboard |
| **Hapus** | Hapus versi ini |

## Pintasan Keyboard

| Tindakan | Pintasan |
| -------- | -------- |
| Buka Riwayat | `Cmd/Ctrl+H` |
| Versi Sebelumnya | `Up` |
| Versi Berikutnya | `Down` |
| Restore | `Cmd/Ctrl+R` |
| Tutup Riwayat | `Escape` |

## Pengaturan

### Konfigurasi di Pengaturan → Editor → Riwayat Versi

| Pengaturan | Opsi | Default |
| ----------- | ----- | ------- |
| Aktifkan Riwayat | Aktif/Mati | Aktif |
| Periode Retensi | 30/60/90/180 hari | 90 hari |
| Versi Maks | 50/100/200/500 | 100 |
| Interval Auto-save | 1/5/10/30 menit | 5 menit |

### Lokasi Penyimpanan

Riwayat versi disimpan secara lokal:

- **macOS**: `~/Library/Application Support/Classic/history/`
- **Windows**: `%APPDATA%/Classic/history/`
- **Linux**: `~/.config/Classic/history/`

## Kasus Penggunaan

### Memulihkan Perubahan Tidak Sengaja

1. Buka riwayat versi
2. Temukan versi sebelum kesalahan
3. Restore versi tersebut

### Membandingkan Draft

1. Buka riwayat
2. Bandingkan versi yang berbeda
3. Lihat bagaimana catatan berkembang

### Menemukan Konten yang Dihapus

1. Jelajahi versi yang lebih lama
2. Cari teks yang dihapus
3. Salin kembali

### Melacak Kemajuan

Lihat bagaimana catatan berkembang dari waktu ke waktu:

- Kapan ide ditambahkan
- Bagaimana struktur berubah
- Evolusi penulisan

## Tips

### Review Berkala

Tinjau riwayat versi secara berkala:

- Bersihkan versi yang tidak diperlukan
- Catat bagaimana konten berkembang
- Belajar dari pola pengeditan Anda

### Sebelum Perubahan Besar

Buat checkpoint:

1. Buat edit kecil
2. Simpan (membuat versi)
3. Sekarang buat perubahan besar Anda
4. Mudah untuk revert jika diperlukan

### Nama Versi Penting

Tambahkan penanda di catatan Anda:

```markdown
<!-- VERSI: Draft final -->
<!-- VERSI: Sebelum restrukturisasi -->
```

Ini membantu mengidentifikasi versi nanti.

## Pemecahan Masalah

### Riwayat Tidak Menyimpan

- Periksa apakah riwayat versi diaktifkan
- Verifikasi lokasi penyimpanan memiliki ruang
- Periksa izin file

### Tidak Dapat Menemukan Versi Lama

- Versi mungkin telah di-auto-cleanup
- Periksa pengaturan retensi
- Tingkatkan periode retensi

### Riwayat Menggunakan Terlalu Banyak Ruang

1. Kurangi periode retensi
2. Kurangi versi maks per catatan
3. Jalankan pembersihan manual

### Pemuatan Riwayat Lambat

Catatan besar dengan banyak versi mungkin memuat lambat:

- Bersabarlah dengan riwayat besar
- Pertimbangkan untuk mengurangi versi maks
- Arsipkan catatan lama

## Privasi & Keamanan

### Penyimpanan Lokal

Riwayat versi disimpan secara lokal:

- Tidak pernah dikirim ke server
- Data Anda tetap pribadi
- Hanya Anda yang memiliki akses

### Backup Terenkripsi

Jika Anda menggunakan backup terenkripsi:

- Riwayat versi disertakan
- Dilindungi oleh kata sandi backup Anda
- Aman bahkan dalam file backup
