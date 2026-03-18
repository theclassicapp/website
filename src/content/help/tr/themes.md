# Temalar ve Görünüm

Classic'in görünümünü tarzınıza uyacak şekilde kişiselleştirin ve göz yorgunluğunu azaltın.

## Tema Seçenekleri

### Açık Mod

Classic'in varsayılan teması şunları sunar:

- Temiz, parlak arayüz
- İyi aydınlatılmış ortamlar için optimal
- Okunabilirlik için yüksek kontrast

### Koyu Mod

Gece kuşları ve düşük ışıklı çalışma için mükemmel:

- Göz yorgunluğunu azaltır
- OLED ekranlarda daha düşük pil tüketimi
- Karanlık ortamlarda göze kolay

### Sistem (Otomatik)

İşletim sisteminizin temasını takip edin:

- İşletim sistemi ayarlarına göre otomatik geçiş yapar
- Manuel geçiş gerekmez
- Diğer uygulamalarla tutarlı

## Temaları Değiştirme

### Ayarlar Üzerinden

1. Ayarlar'ı açın (`Cmd+,` veya `Ctrl+,`)
2. **Görünüm**'e gidin
3. Tercih ettiğiniz temayı seçin

### Komut Paleti Üzerinden

1. Komut Paleti'ni açın (`Cmd+P` veya `Ctrl+P`)
2. "Tema" yazın
3. Tercih ettiğiniz temayı seçin

### Klavye Kısayolu

| Platform | Kısayol |
| -------- | -------- |
| **macOS** | `Cmd+Shift+T` |
| **Windows/Linux** | `Ctrl+Shift+T` |

Şu sırayla geçiş yapar: Açık → Koyu → Sistem

## Yazı Tipi Ayarları

### Düzenleyici Yazı Tipi

Yazma deneyimini özelleştirin:

1. Ayarlar'ı açın
2. **Görünüm** → **Düzenleyici**'ye gidin
3. Yazı tipi seçeneklerini yapılandırın

| Ayar | Seçenekler | Varsayılan |
| ------- | ------- | ------- |
| Yazı Tipi Ailesi | Sistem yazı tipleri + özel | Sistem UI |
| Yazı Tipi Boyutu | 12-24px | 16px |
| Satır Yüksekliği | 1.0-2.5 | 1.75 |
| Harf Aralığı | -2 ile 4 | 0 |

### UI Yazı Tipi

Arayüz yazı tipini ayarlayın:

1. Ayarlar'ı açın
2. **Görünüm** → **Arayüz**'e gidin
3. Yazı tipini ve boyutu seçin

### Sabit Genişlikli Yazı Tipi

Kod blokları ve teknik içerik için:

1. Ayarlar'ı açın
2. **Görünüm** → **Kod**'a gidin
3. Sabit genişlikli yazı tipini seçin

## Arayüz Seçenekleri

### Kenar Çubuğu

Kenar çubuğu davranışını özelleştirin:

| Ayar | Açıklama |
| ------- | ----------- |
| **Otomatik gizle** | Kullanılmadığında kenar çubuğunu gizle |
| **Genişlik** | Kenar çubuğu genişliğini ayarla (200-400px) |
| **Simgeleri Göster** | Simge görünürlüğünü aç/kapat |

### Düzenleyici Düzeni

Düzenleme deneyiminizi seçin:

- **Bölünmüş Görünüm**: Yan yana düzenle ve önizle
- **Sadece Önizle**: Sadece işlenmiş çıktıyı gör
- **Sadece Düzenle**: Ham Markdown'a odaklan

### Not Listesi

Notların nasıl görüneceğini yapılandırın:

- **Liste Görünümü**: Kompakt, not başına bir satır
- **Kart Görünümü**: Parçacıklı önizleme kartları
- **Ağaç Görünümü**: Hiyerarşik klasör yapısı

## Vurgu Renkleri

### Mevcut Renkler

Vurgu renginizi seçin:

- Classic Mavisi (varsayılan)
- Mor
- Yeşil
- Turuncu
- Kırmızı
- Pembe
- Turkuaz

### Vurgu Rengini Değiştirme

1. Ayarlar'ı açın
2. **Görünüm** → **Renkler**'e gidin
3. Tercih ettiğiniz vurguyu seçin

Vurgu rengi şunları etkiler:

- Bağlantılar ve düğmeler
- Seçim vurguları
- Aktif öğeler
- Odak göstergeleri

## Erişilebilirlik

### Yüksek Kontrast Modu

Daha iyi görünürlük için:

1. Ayarlar'ı açın
2. **Görünüm** → **Erişilebilirlik**'e gidin
3. **Yüksek Kontrast**'ı etkinleştirin

### Hareketi Azalt

Animasyonları en aza indirin:

1. Ayarlar'ı açın
2. **Görünüm** → **Erişilebilirlik**'e gidin
3. **Hareketi Azalt**'ı etkinleştirin

### Yazı Tipi Ayarlamaları

- Minimum yazı tipi boyutunu artırın
- Disleksi dostu yazı tipleri kullanın
- Kontrast oranlarını ayarlayın

## Özel CSS (Gelişmiş)

Tam kontrol isteyen güçlü kullanıcılar için:

1. Ayarlar'ı açın
2. **Görünüm** → **Gelişmiş**'e gidin
3. **Özel CSS Aç**'a tıklayın
4. Özelleştirmelerinizi ekleyin

### Örnek Özelleştirmeler

```css
/* Daha büyük başlıklar */
.prose h1 { font-size: 2.5rem; }
.prose h2 { font-size: 2rem; }

/* Özel bağlantı rengi */
a { color: #3b82f6; }

/* Daha geniş satır aralığı */
.prose p { line-height: 2; }
```

## Tema Senkronizasyonu

Giriş yaptığınızda (isteğe bağlı), tema tercihleriniz cihazlar arasında senkronize edilir:

- Otomatik tema senkronizasyonu
- Yazı tipi ayarları senkronize edilir
- Özel CSS senkronize edilir

## İpuçları

### İş Akışınıza Uygun

- Gündüz **Açık**, gece **Koyu** kullanın
- **Sistem** modu bunu otomatik halleder
- Ortam aydınlatmanızı düşünün

### Göz Yorgunluğunu Azaltma

- Düşük ışıkta Koyu mod kullanın
- Uzun oturumlar için yazı tipi boyutunu artırın
- Gerekirse Yüksek Kontrast'ı etkinleştirin
- Düzenli molalar verin

### Verimlilik

- Tema geçiş kısayolunu öğrenin
- Otomatik geçiş saatlerini ayarlayın
- Tutarlılık için Sistem modunu kullanın
