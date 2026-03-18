# Alt Notlar

Alt notlar, Classic içinde iç içe, hiyerarşik notlar oluşturmanızı sağlar. Karmaşık konuları yönetilebilir parçalara organize edin.

## Alt Notlar Nedir?

Alt notlar, notların içindeki notlardır—hiyerarşik içerik yapıları oluşturmanın bir yoludur.

### Faydalar

- **Organizasyon**: Karmaşık konuları daha küçük parçalara bölün
- **İç İçe**: Birden fazla hiyerarşi seviyesi oluşturun
- **Gezinme**: İlgili notlar arasında gezinme kolaydır
- **Esneklik**: Gerektiğinde genişletin ve daraltın

## Alt Not Oluşturma

### Yöntem 1: Girinti

Ana not altında içerik girintileyerek alt notlar oluşturun:

1. Bir ana not oluşturun
2. Yeni bir not oluşturun
3. Yeni notu ana notun üzerine sürükleyin
4. Alt not olur

### Yöntem 2: Bağlam Menüsü

1. Bir nota sağ tıklayın
2. "Yeni Alt Not" seçin
3. İç içe bir not oluşturulur

### Yöntem 3: Klavye Kısayolu

1. Bir not seçin
2. `Cmd/Ctrl+Shift+N` tuşlarına basın
3. Bir alt not oluşturulur

## Alt Notları Yönetme

### Genişletme ve Daraltma

Alt notları olan bir notun yanındaki oka tıklayın:

- **Genişlet**: Tüm iç içe notları göster
- **Daralt**: İç içe notları gizle

### Gezinme

- Bir alt notu açmak için tıklayın
- Hiyerarşide gezinmek için ok tuşlarını kullanın
- Ekmek kırıntısı konumunuzu gösterir

### Alt Notları Taşıma

Yeniden düzenlemek için sürükle ve bırak:

1. Alt notu tıklayın ve basılı tutun
2. Yeni konuma sürükleyin
3. Yeniden konumlandırmak için bırakın

### Ana Nota Dönüştürme

Bir alt notu üst seviyeye yükseltin:

1. Alt nota sağ tıklayın
2. "Köke Taşı"yı seçin
3. Not ana not olur

## Alt Not Derinliği

Classic birden fazla iç içe seviyesini destekler:

```
📁 Proje
  📄 Genel Bakış
  📁 Araştırma
    📄 Kullanıcı Görüşmeleri
    📄 Anket Sonuçları
    📁 Analiz
      📄 Temel Bulgular
      📄 Öneriler
  📁 Planlama
    📄 Zaman Çizelgesi
    📄 Kaynaklar
```

### En İyi Uygulamalar

- **Derinliği sınırlayın**: Netlik için maksimum 3-4 seviye
- **Mantıksal gruplama**: İlgili içeriği birlikte gruplayın
- **Net adlandırma**: Alt notlar için açıklayıcı adlar kullanın

## Kullanım Senaryoları

### Proje Dokümantasyonu

```
Proje Alpha
├── Gereksinimler
├── Mimari
│   ├── Frontend
│   ├── Backend
│   └── Veritabanı
├── Toplantı Notları
└── İlerleme Raporları
```

### Bilgi Tabanı

```
Programlama
├── JavaScript
│   ├── Temeller
│   ├── İleri Düzey
│   └── En İyi Uygulamalar
├── Python
│   ├── Temeller
│   └── Kütüphaneler
└── Kaynaklar
```

### Çalışma Notları

```
Biyoloji 101
├── Hücre Yapısı
│   ├── Zar
│   ├── Çekirdek
│   └── Organeller
├── Genetik
│   ├── DNA
│   └── RNA
└── Evrim
```

## Alt Notlarla Bağlantı Kurma

### Geri Bağlantılar

Alt notlar otomatik olarak ana notlara geri bağlantılar oluşturur:

- "Bağlantılı Referanslar" bölümüne bakın
- İlgili notlar arasında gezinin
- Not ilişkilerini anlayın

### Wiki Bağlantıları

Her yerden alt notlara bağlantı verin:

```markdown
Detaylar için [[Proje/Araştırma/Analiz]]'e bakın.
```

## İpuçları

### Adlandırma Kuralı

Net, tutarlı adlandırma kullanın:

```
✅ İyi:
Proje/Gereksinimler/Fonksiyonel
Proje/Gereksinimler/Fonksiyonel Olmayan

❌ Kaçının:
Proje/gereks/func
Proje/rq/nf
```

### Ekmek Kırıntısı Gezinmesi

Konumunuzu anlamak için ekmek kırıntılarını kullanın:

```
Proje > Araştırma > Analiz
```

### Arama

Arama otomatik olarak alt notları içerir:

- Tüm seviyelerde içerik bulun
- Not derinliğine göre filtreleyin
- Hızlı gezinme

### Şablonlar

Alt notlara şablonlar uygulayın:

1. Alt not oluşturun
2. Bölü komutu `/template` kullanın
3. Şablonu seçin

## Klavye Kısayolları

| İşlem | Kısayol |
|--------|----------|
| Yeni Alt Not | `Cmd/Ctrl+Shift+N` |
| Tümünü Genişlet | `Cmd/Ctrl+Down` |
| Tümünü Daralt | `Cmd/Ctrl+Up` |
| Yukarı Taşı | `Opt/Alt+Up` |
| Aşağı Taşı | `Opt/Alt+Down` |
| Yükselt | `Opt/Alt+Left` |
| Alçalt | `Opt/Alt+Right` |

## Sorun Giderme

### Alt Not Gösterilmiyor

- Ana notun daraltılmış olup olmadığını kontrol edin
- Notun taşınmadığını doğrulayın
- Kenar çubuğunu yenileyin

### Alt Not Oluşturulamıyor

- Ana notun mevcut olduğundan emin olun
- İzinleri kontrol edin
- Bağlam menüsü yöntemini deneyin

### Kayıp Alt Notlar

Kayıp notları bulmak için aramayı kullanın:

1. Aramayı açın (`Cmd/Ctrl+F`)
2. Not adını yazın
3. Sonuçlarda tam yolu görün
