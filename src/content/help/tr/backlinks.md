# Geri Bağlantılar

Geri bağlantılar, notlarınız arasındaki bağlantıları göstererek ilgili fikirlerden oluşan bir ağ oluşturur. Var olduğunu bilmediğiniz ilişkileri keşfedin.

## Geri Bağlantılar Nedir?

Geri bağlantılar, hangi notların mevcut nota bağlantı verdiğini gösterir. Bunlar bilgi grafiğinizdeki bağlantılardır.

### Faydalar

- **Bağlantıları keşfedin**: İlgili notları otomatik olarak bulun
- **Bağlam**: Fikirlerin nasıl ilişkili olduğunu anlayın
- **Gezinme**: Bağlantılı notlar arasında atlayın
- **Bilgi grafiği**: Düşüncenizi görselleştirin

## Geri Bağlantılar Nasıl Çalışır

Başka bir nota bağlantı oluşturduğunuzda, Classic otomatik olarak bir geri bağlantı oluşturur.

```markdown
Not A'da:
Detaylar için [[Proje Planlama]]'ya bakın.

Sonuç:
- Not A, "Proje Planlama"ya bağlantı verir
- "Proje Planlama", Not A'ya geri bağlantı gösterir
```

## Geri Bağlantıları Görüntüleme

### Geri Bağlantılar Paneli

Tüm referansları görmek için geri bağlantılar panelini açın:

1. Herhangi bir notu açın
2. Kenar çubuğundaki geri bağlantılar simgesine tıklayın
3. Buna bağlantı veren tüm notları görün

### Satır İçi Geri Bağlantılar

Geri bağlantılar her notun alt kısmında görünür:

- Kaynak not adını gösterir
- Bağlam parçacığını görüntüler
- Gezinmek için tıklayın

## Bağlantı Oluşturma

### Wiki Bağlantısı Sözdizimi

Notlara bağlantı vermek için çift köşeli parantez kullanın:

```markdown
[[Not Adı]]
[[Başka Bir Not]]
```

### Görüntüleme Metni

Bağlantı metnini özelleştirin:

```markdown
[[Proje Alpha|alpha projesi]]
[[Toplantı Notları|dünkü toplantı]]
```

### Başlıklara Bağlantı

Belirli bölümlere bağlantı verin:

```markdown
[[Not Adı#Başlık]]
[[Not Adı#Bölüm|bölüme atla]]
```

## Geri Bağlantı Türleri

### Doğrudan Bağlantılar

Oluşturduğunuz açık wiki bağlantıları:

```markdown
İlgili: [[Benzer Not]]
```

### Bağlantısız Bahsetmeler

Başlığı bahseden ama bağlantı vermeyen notlar:

```markdown
Not "Proje Alpha"dan bahseder ama bağlı değildir
```

Classic bunları bağlantıya dönüştürmeyi önerir.

## Geri Bağlantılar Paneli

### Özellikler

- **Filtrele**: Geri bağlantılar arasında arama yapın
- **Sırala**: Tarih, ad veya alaka düzeyine göre
- **Önizleme**: İçeriği önizlemek için üzerine gelin
- **Bağlam**: Çevreleyen metni görün

### İşlemler

- Bağlantılı notu açmak için tıklayın
- Seçenekler için sağ tıklayın
- Bağlantısız bahsetmeleri dönüştürün

## Kullanım Senaryoları

### Bilgi Yönetimi

Kişisel bir wiki oluşturun:

```markdown
# Makine Öğrenmesi

[[Yapay Zeka]] ile ilgili
[[İstatistik]] üzerine inşa edilir
[[Doğal Dil İşleme]]'de kullanılır
```

### Proje Dokümantasyonu

İlgili belgeleri bağlayın:

```markdown
# API Tasarımı

[[Veritabanı Şeması]] referansları
[[Kimlik Doğrulama Akışı]]'na bağlı
Ayrıca bkz. [[Frontend Entegrasyonu]]
```

### Araştırma

Kavramları ve kaynakları bağlayın:

```markdown
# Araştırma Notları

[[Kaynak Makale A]]'ya dayanır
[[Kaynak Makale B]] ile çelişir
[[Hipotez 1]]'i destekler
```

### Toplantı Notları

Toplantıları projelere bağlayın:

```markdown
# Toplantı: Çeyrek 4 Planlaması

Proje: [[Proje Alpha]]
Önceki: [[Çeyrek 3 İncelemesi]]
Sonraki: [[Çeyrek 4 Başlangıcı]]
```

## Grafik Görünümü

Geri bağlantılarınızı bir ağ olarak görselleştirin:

1. Grafik Görünümü'nü açın (`Cmd/Ctrl+G`)
2. Tüm notları düğüm olarak görün
3. Çizgiler bağlantıları gösterir
4. Gezinmek için düğümlere tıklayın

### Grafik Kontrolleri

- **Yakınlaştır**: Yakınlaştırmak için kaydırın
- **Kaydır**: Taşımak için sürükleyin
- **Filtrele**: Etikete göre göster/gizle
- **Odaklan**: Bir notun bağlantılarını vurgula

## İpuçları

### Cömertçe Bağlantı Verin

Başka bir kavramdan bahsettiğinizde bağlantı oluşturun:

```markdown
✅ İyi:
[[Çeyrek 4 Yol Haritası]] ve [[Bütçe Tahsisi]] tartışıldı.

❌ Kaçının:
Çeyrek 4 Yol Haritası ve Bütçe Tahsisi tartışıldı.
```

### Tutarlı Adlar Kullanın

Güvenilir bağlantı için not başlıklarını tam olarak eşleştirin:

```markdown
✅ [[Toplantı Notları]]
❌ [[toplanti notlari]] (büyük/küçük harf önemlidir)
```

### Geri Bağlantıları Gözden Geçirin

Düzenli olarak geri bağlantıları kontrol edin:

- Unutulmuş bağlantıları keşfedin
- Birleştirilecek notları bulun
- Bilgi boşluklarını belirleyin

### Bağlantı Önizleme

Açmadan önizlemek için bağlantıların üzerine gelin:

- İlk birkaç satırı görün
- Doğru not olup olmadığını kontrol edin
- Hızlı referans

## Klavye Kısayolları

| İşlem | Kısayol |
|--------|----------|
| Geri Bağlantıları Aç | `Cmd/Ctrl+Shift+B` |
| Bağlantı Oluştur | `[[` (otomatik tamamlar) |
| Grafik Görünümünü Aç | `Cmd/Ctrl+G` |
| Bağlantılarda Gezin | Bağlantılar arasında `Tab` |

## Gelişmiş Özellikler

### Gömme

Diğer notlardan içerik gömün:

```markdown
![[Not Adı]]
![[Not Adı#Bölüm]]
```

### Transklüzyon

İçeriği satır içi olarak dahil edin:

```markdown
## İlgili İçerik
![[Paylaşılan Şablon#Başlık]]
```

### Bağlantı Renklendirme

Bağlantılar şu duruma göre renk değiştirir:

- **Mavi**: Ziyaret edilmemiş bağlantı
- **Mor**: Ziyaret edilmiş bağlantı
- **Kırmızı**: Kırık bağlantı (not mevcut değil)

## Sorun Giderme

### Eksik Geri Bağlantılar

- Bağlantı sözdizimini kontrol edin `[[Not Adı]]`
- Not başlığının tam olarak eşleştiğini doğrulayın
- Geri bağlantılar panelini yenileyin

### Kırık Bağlantılar

- Not yeniden adlandırılmış olabilir
- Not silinmiş olabilir
- Doğru notu bulmak için aramayı kullanın

### Yinelenen Bağlantılar

- Benzer notları birleştirin
- Yeniden adlandırılan notlar için yönlendirmeler kullanın
- Başlık varyasyonlarını kontrol edin
