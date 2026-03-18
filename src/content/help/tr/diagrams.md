# Mermaid Diyagramları

Mermaid sözdizimini kullanarak notlarınızda doğrudan güzel diyagramlar oluşturun.

## Temel Kullanım

Mermaid diyagramı oluşturmak için `mermaid` dil tanımlayıcılı bir kod bloğu kullanın:

```mermaid
graph TD
    A[Başla] --> B[İşlem]
    B --> C[Bitir]
```

## Akış Şeması

```mermaid
flowchart TD
    A[Başla] --> B{Çalışıyor mu?}
    B -->|Evet| C[Harika!]
    B -->|Hayır| D[Hata Ayıkla]
    D --> B
```

## Sıra Diyagramı

```mermaid
sequenceDiagram
    participant Kullanıcı
    participant Tarayıcı
    participant Sunucu

    Kullanıcı->>Tarayıcı: Butona tıkla
    Tarayıcı->>Sunucu: İstek gönder
    Sunucu-->>Tarayıcı: Veriyi döndür
    Tarayıcı-->>Kullanıcı: Sonucu göster
```

## Sınıf Diyagramı

```mermaid
classDiagram
    class Not {
        +String başlık
        +String içerik
        +DateTime oluşturulmaTarihi
        +kaydet()
    }
    class Etiket {
        +String ad
        +notEkle()
    }
    Not "1" -- "*" Etiket
```

## Durum Diyagramı

```mermaid
stateDiagram-v2
    [*] --> Taslak
    Taslak --> DevamEdiyor : Düzenlemeye başla
    DevamEdiyor --> İnceleme : Bitir
    İnceleme --> Yayınlandı : Onayla
    İnceleme --> Taslak : Reddet
    Yayınlandı --> [*]
```

## Gantt Şeması

```mermaid
gantt
    title Proje Zaman Çizelgesi
    dateFormat  YYYY-MM-DD
    section Planlama
        Araştırma     :a1, 2024-01-01, 30d
        Tasarım       :2024-01-15, 20d
    section Geliştirme
        Backend       :2024-02-01, 45d
        Frontend      :2024-02-15, 30d
    section Test
        QA Testi      :2024-03-01, 15d
```

## Pasta Grafik

```mermaid
pie showPets
    "Köpekler" : 386
    "Kediler" : 85
    "Tavşanlar" : 15
```

## Zihin Haritası

```mermaid
mindmap
  root((Classic))
    Özellikler((Özellikler))
      Editör((Editör))
      Organizasyon((Organizasyon))
    Faydalar((Faydalar))
      Gizlilik((Gizlilik))
      Hız((Hız))
```

## İpuçları

### Stil

- Karmaşık diyagramları düzenlemek için alt grafikleri kullanın
- Görsel tutarlılık için stiller ve temalar ekleyin
- Diyagramları basit ve okunabilir tutun

### Performans

- Büyük diyagramlar editörü yavaşlatabilir
- Karmaşık diyagramları daha küçük olanlara bölmeyi düşünün
- Yapılandırma için `%%{init: ... }%%` kullanın

### Yaygın Sorunlar

**Diyagram işlenmiyor mu?**
- Mermaid sözdizimini kontrol edin
- Kod bloğunun `mermaid` diline sahip olduğundan emin olun
- Önizlemede sözdizimi hatalarını arayın

**Diyagram çok küçük/büyük mü?**
- Boyutu ayarlamak için `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` kullanın

## Kaynaklar

- [Mermaid Dokümantasyonu](https://mermaid.js.org/)
- [Mermaid Canlı Editör](https://mermaid.live/)
- [Mermaid GitHub](https://github.com/mermaid-js/mermaid)
