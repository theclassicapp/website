# Yerel Öncelikli Mimari

Classic, gizliliği temel olarak inşa edilmiştir. Verileriniz her zaman cihazınızda kalır.

## "Yerel Öncelikli" Ne Demek?

Yerel öncelikli demek:

1. **Verileriniz yerel olarak saklanır** bilgisayarınızda. Tüm notlarınız, ekleriniz ve ayarlarınız bilgisayarınızdaki bir klasörde saklanır.
2. **Bulut gerekmez** Classic internet bağlantısı olmadan çalışır.
3. **Verilerinizin sahibi sizsiniz** Verileriniz üzerinde tam kontrole sahipsiniz.

## Veri Depolama

### Varsayılan Konum

Verileriniz özel bir klasörde saklanır:

| Platform | Konum |
| -------- | -------- |
| **macOS** | `~/Library/Application Support/Classic/notes` |
| **Windows** | `%APPDATA%\Classic\notes` |
| **Linux** | `~/.config/Classic/notes` |

### Veri Biçimi

- Notlar düz metin dosyaları (`.md`) olarak saklanır
- Ekler bir `attachments` alt klasöründe saklanır
- Ayarlar `settings.json` içinde saklanır

### Dosya Yapısı

```
notes/
├── Gelen Kutusu/
├── Günlük Notlar/
│   └── 2024-01-15.md
├── Projeler/
│   ├── Projem.md
│   └── alt-not.md
└── attachments/
    └── resim.png
settings.json
```

## Gizlilik Faydaları

### Hesap Gerekmez

- Kayıt olmaya gerek yok
- E-posta doğrulama yok
- Kişisel bilgi toplanmaz

### İzleme Yok

- Analitik yok
- Telemetri yok
- Kullanım verileri dış sunuculara gönderilmez

### Çevrimdışı Çalışabilir

- İnternet olmadan çalışır
- Sadece seçtiğinizde senkronize olur
- Verileriniz her zaman erişilebilir

## Veri Güvenliği

### Sizin Sorumluluğunuz

- **Yedeklemeler**: Ayarlar'da otomatik yedeklemeyi ayarlayın
- **Dışa Aktarmalar**: Verilerinizi düzenli olarak dışa aktarın
- **Güncellemeler**: Güvenlik düzeltmeleri için Classic'i güncel tutun

### Bizim Sorumluluğumuz

- **Yerel depolama**: Verilerinizi asla görmüyoruz veya dokunmuyoruz
- **Arka kapı yok**: Gizli veri toplama yok
- **Şeffaflık**: Veri işleme konusunda açık ve dürüst

## Senkronizasyon (İsteğe Bağlı)

Classic yerleşik bulut senkronizasyonu içermez. Ancak, verilerinizi senkronize edebilirsiniz:

### iCloud/OneDrive/Dropbox Kullanarak

1. Classic Ayarları'nı açın
2. Notlar klasörü konumunu bulut klasörünüze değiştirin
3. Classic bulut sağlayıcınız aracılığıyla senkronize olacak

### Git Kullanarak

1. Notlar klasörünüzde bir git deposu başlatın
2. Değişiklikleri manuel olarak veya otomasyonla işleyin ve gönderin

## Veri Kurtarma

### Yedekten

1. Ayarlar'ı açın
2. Yedekleme ve Geri Yükleme'ye gidin
3. Bir yedek dosyası seçin
4. Geri Yükle'ye tıklayın

### Manuel Kurtarma

1. Notlar klasörünüzü bulun
2. Dosyaları güvenli bir konuma kopyalayın
3. Yeni bir Classic kurulumuna aktarın

## Sık Sorulan Sorular

### Verilerim gerçekten özel mi?

**Evet.** Üçüncü taraf bir hizmet kullanarak açıkça senkronize etmediğiniz sürece verileriniz cihazınızdan asla çıkmaz.

### Verilerimi başka bir bilgisayara taşıyabilir miyim?

**Evet.** Notlar klasörünüzü yeni bilgisayara kopyalamanız ve ayarlarda Classic'i ona yönlendirmeniz yeterlidir.

### Classic'i kaldırırsam ne olur?

**Verileriniz kalır.** Classic'i kaldırmak notlar klasörünüzü silmez. Veri kaybı olmadan güvenle kaldırabilir ve yeniden yükleyebilirsiniz.

### Classic verilerime erişebilir mi?

**Hayır.** Classic, veri toplama için dış bağlantısı olmayan yerel bir uygulamadır.
