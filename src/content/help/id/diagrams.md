# Diagram Mermaid

Buat diagram indah langsung di catatan Anda menggunakan sintaks Mermaid.

## Penggunaan Dasar

Untuk membuat diagram Mermaid, gunakan blok kode dengan pengenal bahasa `mermaid`:

```mermaid
graph TD
    A[Mulai] --> B[Proses]
    B --> C[Selesai]
```

## Flowchart

```mermaid
flowchart TD
    A[Mulai] --> B{Apakah berfungsi?}
    B -->|Ya| C[Bagus!]
    B -->|Tidak| D[Debug]
    D --> B
```

## Diagram Urutan

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Klik tombol
    Browser->>Server: Kirim permintaan
    Server-->>Browser: Kembalikan data
    Browser-->>User: Tampilkan hasil
```

## Diagram Kelas

```mermaid
classDiagram
    class Note {
        +String title
        +String content
        +DateTime createdAt
        +save()
    }
    class Tag {
        +String name
        +addNote()
    }
    Note "1" -- "*" Tag
```

## Diagram Status

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> InProgress : Mulai mengedit
    InProgress --> Review : Selesai
    Review --> Published : Setujui
    Review --> Draft : Tolak
    Published --> [*]
```

## Bagan Gantt

```mermaid
gantt
    title Timeline Proyek
    dateFormat  YYYY-MM-DD
    section Perencanaan
        Riset     :a1, 2024-01-01, 30d
        Desain       :2024-01-15, 20d
    section Pengembangan
        Backend      :2024-02-01, 45d
        Frontend     :2024-02-15, 30d
    section Pengujian
        QA Testing   :2024-03-01, 15d
```

## Bagan Pai

```mermaid
pie showPets
    "Anjing" : 386
    "Kucing" : 85
    "Kelinci" : 15
```

## Peta Pikiran

```mermaid
mindmap
  root((Classic))
    Fitur((Fitur))
      Editor((Editor))
      Organisasi((Organisasi))
    Manfaat((Manfaat))
      Privasi((Privasi))
      Kecepatan((Kecepatan))
```

## Tips

### Penataan Gaya

- Gunakan subgraf untuk mengatur diagram kompleks
- Tambahkan gaya dan tema untuk konsistensi visual
- Buat diagram tetap sederhana dan mudah dibaca

### Performa

- Diagram besar dapat memperlambat editor
- Pertimbangkan untuk memecah diagram kompleks menjadi yang lebih kecil
- Gunakan `%%{init: ... }%%` untuk konfigurasi

### Masalah Umum

**Diagram tidak dirender?**
- Periksa sintaks Mermaid
- Pastikan blok kode memiliki bahasa `mermaid`
- Cari kesalahan sintaks di pratinjau

**Diagram terlalu kecil/besar?**
- Gunakan `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` untuk menyesuaikan ukuran

## Sumber Daya

- [Dokumentasi Mermaid](https://mermaid.js.org/)
- [Editor Mermaid Live](https://mermaid.live/)
- [Mermaid GitHub](https://github.com/mermaid-js/mermaid)
