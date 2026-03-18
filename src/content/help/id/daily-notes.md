# Catatan Harian

Catatan Harian secara otomatis membuat catatan baru untuk setiap hari, sempurna untuk jurnal, perencanaan harian, atau menangkap informasi berbasis waktu.

## Cara Kerjanya

### Pembuatan Otomatis

- Catatan baru dibuat untuk setiap hari
- Catatan diberi nama menggunakan format tanggal (misal., `2024-01-15.md`)
- Catatan hari-hari sebelumnya dipertahankan dan dapat dicari

### Mengakses Catatan Harian

1. Klik **Catatan Harian** di bilah samping
2. Atau tekan `Ctrl/Cmd+D`
3. Catatan hari ini terbuka secara otomatis

## Template Catatan Harian

Kustomisasi template untuk catatan harian baru:

### Template Default

```markdown
# {{date}}

## Tugas
- [ ]
- [ ]

## Catatan


## Jurnal

```

### Mengkustomisasi

1. Buka Pengaturan
2. Buka Catatan Harian
3. Edit template
4. Gunakan `{{date}}` untuk tanggal saat ini

### Variabel Template

| Variabel | Deskripsi |
| -------- | --------- |
| `{{date}}` | Tanggal saat ini (YYYY-MM-DD) |
| `{{time}}` | Waktu saat ini (HH:mm) |
| `{{weekday}}` | Nama hari (Senin, dll.) |

## Fitur

### Navigasi Tanggal

- **Sebelumnya/Berikutnya**: Navigasi antar hari
- **Kalender**: Loncat ke tanggal tertentu
- **Pencarian**: Temukan konten di semua catatan harian

### Penautan Otomatis

- Catatan yang dibuat pada hari yang sama secara otomatis ditautkan
- Tautan balik menunjukkan koneksi antar hari
- Tag berfungsi di semua catatan harian

### Integrasi

- **Tangkapan Cepat**: Tambahkan ke catatan hari ini dengan `#today`
- **Tampilan Kalender**: Ikhtisar visual catatan harian Anda
- **Statistik**: Lacak streak penulisan Anda

## Praktik Terbaik

### Jurnal Harian

```markdown
# 2024-01-15

## Pagi
- Bangun pukul 6:30
- Perasaan: Berenergi

## Tugas
- [x] Olahraga pagi
- [ ] Review PR
- [ ] Rapat tim jam 2 siang

## Pembelajaran
- Menemukan pintasan keyboard baru
- Belajar tentang diagram Mermaid

## Besok
- Fokus pada dokumentasi
- Jadwalkan review kode
```

### Catatan Rapat

```markdown
# 2024-01-15

## Standup Tim

**Peserta**: Alice, Bob, Carol

### Update
- Alice: Selesai integrasi API
- Bob: Mengerjakan komponen UI
- Carol: Pengujian sedang berlangsung

### Bloker
- Menunggu review desain

### Item Aksi
- [ ] Alice: Deploy ke staging
- [ ] Bob: Selesaikan library komponen
- [ ] Carol: Tulis tes integrasi
```

### Log Pembelajaran

```markdown
# 2024-01-15

## Hari Ini Saya Belajar

### Diagram Mermaid
- Bisa membuat flowchart di Markdown
- Sintaksnya mudah dipahami
- Pratinjau langsung sangat membantu

### Sumber Daya
- [Dokumentasi Mermaid](https://mermaid.js.org/)

## Pertanyaan
- Bagaimana cara membuat diagram kompleks?
- Praktik terbaik untuk organisasi diagram?
```

## Tips

### Konsistensi

- Buat catatan pada waktu yang sama setiap hari
- Gunakan pemformatan yang konsisten
- Tinjau dan perbarui sepanjang hari

### Organisasi

- Gunakan heading untuk bagian yang berbeda
- Tambahkan tag untuk pencarian mudah
- Tautkan ke catatan terkait

### Review

- Review mingguan catatan harian
- Ekstrak item penting ke catatan permanen
- Arsipkan atau ringkas catatan lama
