# Arama

Classic'in güçlü aramasıyla herhangi bir notu anında bulun. Tam metin araması, filtreler ve operatörler tam olarak ihtiyacınız olanı bulmanıza yardımcı olur.

## Temel Arama

### Aramayı Açma

| Platform | Kısayol |
|----------|----------|
| **macOS** | `Cmd+F` |
| **Windows/Linux** | `Ctrl+F` |

Veya kenar çubuğundaki arama çubuğuna tıklayın.

### Nasıl Çalışır

1. Aramayı açın
2. Yazmaya başlayın
3. Sonuçlar anında görünür
4. Bir notu açmak için tıklayın

## Arama Özellikleri

### Tam Metin Araması

Classic şunları arar:

- Not başlıkları
- Not içeriği
- Etiketler
- Dosya adları

### Gerçek Zamanlı Sonuçlar

Sonuçlar yazarken güncellenir:

- Enter'a basmanıza gerek yok
- Anında geri bildirim
- Bulanık eşleştirme etkin

### Arama Vurgulama

Bulunan terimler sonuçlarda vurgulanır:

- Eşleşmelerin etrafındaki bağlamı görün
- İlgili notları hızla tanımlayın

## Arama Operatörleri

### Tam Eşleşme

Tam ifadeler için tırnak işareti kullanın:

```
"proje planlama"
"toplanti notlari"
```

### Etiket Araması

Belirli etiketlere sahip notları bulun:

```
tag:iş
tag:toplantilar
tag:acil
```

### Terimleri Hariç Tut

Hariç tutmak için `-` kullanın:

```
proje -arşivlendi
toplanti -iptal
```

### VEYA Araması

Herhangi bir terimi içeren notları bulun:

```
proje VEYA girişim
```

### Tarih Aralığı

Tarihe göre arayın:

```
created:2024-01-01..2024-12-31
modified:son-hafta
```

### Dosya Türü

Uzantıya göre filtreleyin:

```
ext:md
ext:txt
```

## Gelişmiş Arama

### Operatörleri Birleştirme

Karmaşık sorgular oluşturun:

```
tag:iş -tag:arşivlendi created:son-hafta
"toplanti" tag:proje-alpha
```

### Yol Araması

Klasörler içinde arayın:

```
path:Projeler/
path:Arsiv/
```

### Başlık Araması

Sadece başlıklarda arayın:

```
title:YolHaritasi
title:Toplanti
```

### İçerik Araması

Sadece içerikte arayın (başlıkları hariç tut):

```
content:önemli
content:son_teslim_tarihi
```

## Arama Filtreleri

### Etikete Göre

1. Aramanızı yazın
2. Filtrelemek için bir etikete tıklayın
3. Sonuçlar etiketli notlara daralır

### Tarihe Göre

Değiştirilme tarihine göre filtreleyin:

- Bugün
- Bu hafta
- Bu ay
- Özel aralık

### Klasöre Göre

Aramayı bir klasörle sınırlayın:

1. Bir klasöre sağ tıklayın
2. "Klasörde Ara"yı seçin
3. Sonuçlar o klasırla sınırlıdır

## Arama Sonuçları

### Sıralama

Sonuçları şu şekilde sıralayın:

- **Alaka Düzeyi** (varsayılan)
- **Değiştirilme Tarihi** (en yeni önce)
- **Oluşturulma Tarihi** (en yeni önce)
- **Başlık** (alfabetik)

### Sonuç Önizleme

Önizlemek için sonuçların üzerine gelin:

- İlk birkaç satır gösterilir
- Eşleşen terimler vurgulanır
- Etiketler görüntülenir

### Bağlam

Eşleşmenin nerede olduğunu görün:

- Çevreleyen metni gösterir
- Eşleşmeyi vurgular
- Konuma atlamak için tıklayın

## Arama Geçmişi

### Son Aramalar

Önceki aramalara erişin:

1. Arama çubuğuna tıklayın
2. Son aramaları görün
3. Yeniden çalıştırmak için tıklayın

### Geçmişi Temizleme

1. Ayarlar'ı açın
2. Gizlilik'e gidin
3. "Arama Geçmişini Temizle"ye tıklayın

## İpuçları

### Belirli Terimler Kullanın

Daha belirli = daha iyi sonuçlar:

```
✅ "Çeyrek 4 pazarlama bütçesi"
❌ bütçe
```

### Etiketlerle Birleştirin

Sonuçları hızla daraltın:

```
proje tag:acil
```

### Hariç Tutmaları Kullanın

Gürültüyü filtreleyin:

```
toplanti -tag:arşivlendi
```

### Sık Kullanılan Aramaları Kaydedin

Kaydedilmiş aramalar oluşturun:

1. Aramanızı girin
2. "Aramayı Kaydet"e tıklayın
3. Adlandırın
4. Kenar çubuğundan erişin

## Klavye ile Gezinme

| İşlem | Kısayol |
|--------|----------|
| Aramayı Aç | `Cmd/Ctrl+F` |
| Sonraki Sonuç | `Enter` veya `Down` |
| Önceki Sonuç | `Shift+Enter` veya `Up` |
| Aramayı Kapat | `Escape` |

## Arama Ayarları

### Ayarlar'da Özelleştirin

| Ayar | Seçenekler |
|---------|---------|
| Büyük/Küçük Harf Duyarlı | Açık/Kapalı |
| Başlıkları Ara | Açık/Kapalı |
| İçeriği Ara | Açık/Kapalı |
| Etiketleri Ara | Açık/Kapalı |
| Arşivlenenleri Dahil Et | Açık/Kapalı |

## Kullanım Senaryoları

### Eski Notları Bulma

```
"toplanti" date:son-yil
```

### Proje Araştırması

```
path:Projeler/ tag:araştırma
```

### Eylem Öğeleri

```
"YAPILACAK" VEYA "DÜZELTİLECEK" -tag: tamamlandı
```

### Son Çalışmalar

```
modified:bu-hafta
```

## Sorun Giderme

### Sonuç Bulunamadı

- Yazımı kontrol edin
- Filtreleri kaldırın
- Daha geniş terimler deneyin
- Notun arşivlendiğini kontrol edin

### Yavaş Arama

- Büyük not koleksiyonları daha uzun sürebilir
- Büyük/küçük harf duyarlılığını devre dışı bırakın
- Arama kapsamını azaltın

### Eksik Notlar

- Not farklı bir klasörde olabilir
- Etiketin doğru olduğunu kontrol edin
- Notun arşivlenmediğini doğrulayın
