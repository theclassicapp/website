# Günlük Notlar

Günlük Notlar her gün için otomatik olarak yeni bir not oluşturur; günlük tutma, günlük planlama veya zamana dayalı bilgi yakalama için mükemmeldir.

## Nasıl Çalışır

### Otomatik Oluşturma

- Her gün için yeni bir not oluşturulur
- Notlar tarih biçimi kullanılarak adlandırılır (örn., `2024-01-15.md`)
- Önceki günlerin notları korunur ve aranabilir

### Günlük Notlara Erişim

1. Kenar çubuğunda **Günlük Notlar**'a tıklayın
2. Veya `Ctrl/Cmd+D` tuşlarına basın
3. Bugünün notu otomatik olarak açılır

## Günlük Not Şablonu

Yeni günlük notlar için şablonu özelleştirin

### Varsayılan Şablon

```markdown
# {{date}}

## Görevler
- [ ]
- [ ]

## Notlar


## Günlük

```

### Özelleştirme

1. Ayarlar'ı açın
2. Günlük Notlar'a gidin
3. Şablonu düzenleyin
4. Geçerli tarih için `{{date}}` kullanın

### Şablon Değişkenleri

| Değişken | Açıklama |
| -------- | ----------- |
| `{{date}}` | Geçerli tarih (YYYY-MM-DD) |
| `{{time}}` | Geçerli saat (HH:mm) |
| `{{weekday}}` | Gün adı (Pazartesi, vb.) |

## Özellikler

### Tarihe Göre Gezinme

- **Önceki/Sonraki**: Günler arasında gezinin
- **Takvim**: Belirli tarihlere atlayın
- **Arama**: Tüm günlük notlarda içerik bulun

### Otomatik Bağlantı Oluşturma

- Aynı günde oluşturulan notlar otomatik olarak bağlantılır
- Geri bağlantılar günler arasındaki bağlantıları gösterir
- Etiketler tüm günlük notlarda çalışır

### Entegrasyon

- **Hızlı Yakalama**: `#bugün` ile bugünün notuna ekleyin
- **Takvim Görünümü**: Günlük notlarınızın görsel genel bakışı
- **İstatistikler**: Yazma sürekliliklerinizi takip edin

## En İyi Uygulamalar

### Günlük Günlük Tutma

```markdown
# 2024-01-15

## Sabah
- 6:30'da uyandım
- Hissettim: Enerjik

## Görevler
- [x] Sabah egzersizi
- [ ] PR'ları incele
- [ ] Saat 14:00'te takım toplantısı

## Öğrenilenler
- Yeni bir klavye kısayolu keşfettim
- Mermaid diyagramları hakkında öğrendim

## Yarın
- Dokümantasyona odaklan
- Kod incelemesi planla
```

### Toplantı Notları

```markdown
# 2024-01-15

## Takım Standup'ı

**Katılımcılar**: Ali, Ayşe, Mehmet

### Güncellemeler
- Ali: API entegrasyonunu tamamladı
- Ayşe: UI bileşenleri üzerinde çalışıyor
- Mehmet: Test devam ediyor

### Engelleyiciler
- Tasarım incelemesi bekleniyor

### Eylem Öğeleri
- [ ] Ali: Staging'e dağıt
- [ ] Ayşe: Bileşen kütüphanesini tamamla
- [ ] Mehmet: Entegrasyon testlerini yaz
```

### Öğrenme Günlüğü

```markdown
# 2024-01-15

## Bugün Öğrendiklerim

### Mermaid Diyagramları
- Markdown'da akış şemaları oluşturabilirim
- Sözdizimi basit
- Anlık önizleme yardımcı olur

### Kaynaklar
- [Mermaid Belgeleri](https://mermaid.js.org/)

## Sorular
- Karmaşık diyagramlar nasıl oluşturulur?
- Diyagram organizasyonu için en iyi uygulamalar?
```

## İpuçları

### Tutarlılık

- Her gün aynı saatte notlar oluşturun
- Tutarlı biçimlendirme kullanın
- Gün boyunca gözden geçirin ve güncelleyin

### Organizasyon

- Farklı bölümler için başlıklar kullanın
- Kolay arama için etiketler ekleyin
- İlgili notlara bağlantı verin

### Gözden Geçirme

- Günlük notların haftalık gözden geçirilmesi
- Önemli öğeleri kalıcı notlara çıkarın
- Eski notları arşivleyin veya özetleyin
