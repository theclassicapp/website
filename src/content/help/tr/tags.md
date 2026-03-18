# Etiketler

Etiketler, Classic'te notlarınızı düzenlemenin ve kategorize etmenin güçlü bir yoludur. İlgili içeriği anında bulun.

## Etiket Oluşturma

### Satır İçi Etiketler

Etiketleri doğrudan not içeriğinize ekleyin:

```markdown
# Toplantı Notları

Çeyrek 4 yol haritası tartışıldı #iş #toplantılar #planlama
```

### Etiket Düğmesini Kullanarak

1. Araç çubuğundaki etiket simgesine tıklayın
2. Etiket adınızı yazın
3. Enter'a basın

### Klavye Kısayolu

| Platform | Kısayol |
|----------|----------|
| **macOS** | `Cmd+T` |
| **Windows/Linux** | `Ctrl+T` |

## Etiket Sözdizimi

### Temel Etiketler

```markdown
#proje #iş #önemli
```

### İç İçe Etiketler

`/` ile etiket hiyerarşileri oluşturun:

```markdown
#iş/toplantılar
#iş/projeler
#kişisel/hobiler/okuma
```

### Çok Kelimeli Etiketler

Tire veya alt çizgi kullanın:

```markdown
#proje-alpha
#toplanti_notlari
#q4-planlama
```

## Etiketleri Yönetme

### Tüm Etiketleri Görüntüleme

1. Kenar çubuğunu açın
2. "Etiketler" bölümünü bulun
3. Tüm etiketlerinizi görün

### Etiket Bulutu

En çok kullanılan etiketlerinizi görselleştirin:

- Daha büyük etiketler = daha fazla not
- Filtrelemek için herhangi bir etikete tıklayın
- Etiket başına not sayısını görün

### Etiketleri Yeniden Adlandırma

1. Bir etikete sağ tıklayın
2. "Yeniden Adlandır"ı seçin
3. Yeni adı girin
4. Tüm notlar otomatik olarak güncellenir

### Etiketleri Silme

1. Bir etikete sağ tıklayın
2. "Sil"i seçin
3. Silmeyi onaylayın
4. Etiket tüm notlardan kaldırılır

## Etikete Göre Arama

### Etiket Paneli

Notları filtrelemek için kenar çubuğundaki bir etikete tıklayın

### Arama Sözdizimi

Aramada `tag:` kullanın:

```
tag:iş
tag:iş/toplantılar
```

### Etiketleri Birleştirme

Birden fazla etiketi olan notları bulun:

```
tag:iş tag:acil
```

### Etiketleri Hariç Tutma

Etiketi olmayan notları bulun:

```
-tag:arşivlendi
```

## Etiket En İyi Uygulamaları

### Basit Tutun

- Not başına 3-5 etiket kullanın
- Adlandırmada tutarlı olun
- Etiket çoğalmasından kaçının

### Hiyerarşileri Kullanın

İlgili etiketleri düzenleyin:

```
#iş
  #iş/toplantılar
  #iş/projeler
  #iş/son_teslim_tarihleri

#kişisel
  #kişisel/sağlık
  #kişisel/finans
```

### Kurallar Belirleyin

Kendiniz için etiket standartları tanımlayın:

- **Durum**: `#yapılacak` `#devam-ediyor` `#tamamlandı`
- **Öncelik**: `#acil` `#yüksek` `#düşük`
- **Tür**: `#toplanti` `#referans` `#fikir`

## Etiket Önerileri

`#` yazarken Classic mevcut etiketleri önerir:

- Son etiketler önce görünür
- Bulanık eşleştirme desteklenir
- Öneriyi kabul etmek için Tab'a basın

## Etiket İstatistikleri

Ayarlar'da etiket kullanımını görüntüleyin:

- En çok kullanılan etiketler
- Kullanılmayan etiketler
- Zaman içinde etiket eğilimleri

## Kullanım Senaryoları

### Proje Yönetimi

```markdown
# Proje Başlangıcı #proje-alpha #toplanti #2024-01-15

Katılımcılar: Takım Alpha
Durum: #yapılacak
```

### Bilgi Tabanı

```markdown
# JavaScript Kapanışları #programlama #javascript #referans #ileri-düzey

Kapanışlar, ... erişimi olan fonksiyonlardır.
```

### Günlük Notlar

```markdown
# 2024-01-15

- Sabah toplantısı #iş #toplantılar
- Kod incelemesi #iş #geliştirme
- Spor salonu seansı #kişisel #sağlık
```

### Okuma Notları

```markdown
# Atomik Alışkanlıklar Notları #okuma #kitaplar #verimlilik

Kitaptan temel çıkarımlar...
```

## Klavye Kısayolları

| İşlem | Kısayol |
|--------|----------|
| Etiket Ekle | `Cmd/Ctrl+T` |
| Etiketlerde Ara | `Cmd/Ctrl+F`, ardından `tag:` yazın |
| Etiket Panelini Göster | `Cmd/Ctrl+Shift+T` |

## İpuçları

### Tutarlı Adlandırma

Bir kurala bağlı kalın:

```
✅ #toplanti-notlari
✅ #toplanti_notlari
❌ #Toplantı Notları (boşluklara izin verilmez)
❌ #toplantiNotlari (tutarsız)
```

### Aşırı Etiketlemekten Kaçının

Çok fazla etiket yönetilemez hale gelir:

```
✅ #iş #acil #proje-alpha
❌ #iş #acil #önemli #bugün #pazartesi #ofis #masa #bilgisayar
```

### Periyodik Temizlik

Etiketleri düzenli olarak gözden geçirin ve birleştirin:

- Benzer etiketleri birleştirin
- Kullanılmayan etiketleri kaldırın
- Kuralları güncelleyin

## Gelişmiş Özellikler

### Etiket Tabanlı Akıllı Klasörler

Etiketlere göre otomatik doldurulan klasörler oluşturun:

1. Yeni klasör oluşturun
2. Filtreyi ayarlayın: `tag:proje`
3. Tüm etiketli notlar görünür

### YAML'da Etiket

Not ön bilgisine etiketler ekleyin:

```yaml
---
tags:
  - iş
  - toplantılar
  - proje-alpha
---
```

### Etiket Takma Adları

Ayarlar'da etiket takma adları ayarlayın:

- `#yapılacak` = `#görev` = `#eylem`
- Benzer etiketleri birleştirin
