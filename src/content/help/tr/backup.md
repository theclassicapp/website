# Yedekleme ve Geri Yükleme

Notlarınızı Classic'in yerleşik yedekleme sistemiyle güvende tutun. Çalışmanızı bir daha asla kaybetmeyin.

## Otomatik Yedeklemeler

### Nasıl Çalışır

Classic notlarınızı düzenli aralıklarla otomatik olarak yedekler:

- **Varsayılan sıklık**: Her 30 dakikada bir
- **Yedekleme konumu**: Notlarınızla aynı klasör
- **Saklama**: Son 10 yedeği tutar
- **Biçim**: Sıkıştırılmış arşiv (`.cbak`)

### Otomatik Yedeklemeyi Yapılandırma

1. Ayarlar'ı açın
2. **Yedekleme ve Geri Yükleme**'ye gidin
3. Şunları yapılandırın:

| Ayar | Seçenekler | Varsayılan |
| ------- | ------- | ------- |
| Otomatik Yedeklemeyi Etkinleştir | Açık/Kapalı | Açık |
| Yedekleme Sıklığı | 15dk / 30dk / 1sa / 4sa | 30dk |
| Yedekleri Sakla | 5 / 10 / 20 / 50 | 10 |
| Yedekleme Konumu | Özel yol | Notlar klasörü |

## Manuel Yedekleme

### Şimdi Yedekleme Oluştur

1. Komut Paleti'ni açın (`Cmd/Ctrl+P`)
2. "Yedekle" yazın
3. **Şimdi Yedekleme Oluştur**'u seçin
4. Konum seçin (isteğe bağlı)
5. Yedekleme oluşturulur

### Yedek Dosyası Biçimi

Yedeklemeler şunları içeren `.cbak` dosyaları olarak saklanır:

- Tüm notlar (Markdown dosyaları)
- Ekler
- Ayarlar
- Meta veriler (etiketler, bağlantılar, vb.)

## Yedekten Geri Yükleme

### Geri Yükleme Süreci

1. Ayarlar'ı açın
2. **Yedekleme ve Geri Yükleme**'ye gidin
3. **Yedekten Geri Yükle**'ye tıklayın
4. Yedek dosyasını seçin
5. Geri yükleme seçeneklerini seçin
6. Geri yüklemeyi onaylayın

### Geri Yükleme Seçenekleri

| Seçenek | Açıklama |
| ------ | ----------- |
| **Tümünü Değiştir** | Mevcut notları tamamen yedekle değiştir |
| **Birleştir** | Yedeği mevcut notlarla birleştir |
| **Önizleme** | Geri yüklemeden önce yedek içeriğini görüntüle |

### Neler Geri Yüklenir

- ✅ Tüm notlar ve klasörler
- ✅ Ekler
- ✅ Etiketler ve meta veriler
- ✅ Not geçmişi
- ⚠️ Ayarlar (isteğe bağlı)
- ❌ Uygulama tercihleri

## Yedekleme Konumları

### Varsayılan Konum

```
~/Classic/backups/
├── backup-2024-01-15-10-30.cbak
├── backup-2024-01-15-11-00.cbak
└── backup-2024-01-15-11-30.cbak
```

### Özel Konum

1. Ayarlar'ı açın
2. Yedekleme ve Geri Yükleme'ye gidin
3. "Yedekleme Konumunu Değiştir"e tıklayın
4. Tercih ettiğiniz klasörü seçin

### Bulut Yedekleme

Yedekleme konumunu bulut senkronize edilmiş bir klasöre yönlendirin:

- **iCloud**: `~/Library/Mobile Documents/com~apple~CloudDocs/Classic Backups`
- **Dropbox**: `~/Dropbox/Classic Backups`
- **Google Drive**: `~/Google Drive/Classic Backups`
- **OneDrive**: `~/OneDrive/Classic Backups`

## En İyi Uygulamalar

### Yedekleme Programı

- **Otomatik Yedekleme**: 30 dakikalık aralıklarda etkin tutun
- **Manuel Yedekleme**: Büyük değişikliklerden önce oluşturun
- **Site Dışı Yedekleme**: Yedeklemeleri düzenli olarak harici depolamaya kopyalayın

### Yedekleme Doğrulama

Yedeklemelerinizi periyodik olarak doğrulayın:

1. Bir test geri yükleme oluşturun
2. Not içeriklerini kontrol edin
3. Ekleri doğrulayın
4. Meta verileri onaylayın

### Yedekleme Rotasyonu

- Son yedeklemeleri yerel olarak tutun
- Eski yedeklemeleri harici depolamaya arşivleyin
- Yer kazanmak için çok eski yedeklemeleri silin

## Sorun Giderme

### Yedekleme Başarısız

**Olası nedenler**

- Yetersiz disk alanı
- İzin sorunları
- Dosya kullanımda

**Çözümler**

1. Mevcut disk alanını kontrol edin
2. Klasör izinlerini doğrulayın
3. Diğer uygulamaları kapatın
4. Farklı bir konum deneyin

### Geri Yükleme Başarısız

**Olası nedenler**

- Bozuk yedek dosyası
- Uyumsuz sürüm
- Yetersiz alan

**Çözümler**

1. Daha eski bir yedeklemeyi deneyin
2. Yedek dosyası bütünlüğünü kontrol edin
3. Disk alanı açın
4. Destek ekibiyle iletişime geçin

### Eksik Yedeklemeler

**Olası nedenler**

- Otomatik yedekleme devre dışı
- Yedekleme konumu değiştirildi
- Yedeklemeler silindi

**Çözümler**

1. Yedekleme ayarlarını kontrol edin
2. Yedekleme konumunu doğrulayın
3. Otomatik yedeklemeyi etkinleştirin
4. Şimdi manuel yedekleme oluşturun

## Gelişmiş Seçenekler

### Şifreli Yedeklemeler

Ekstra güvenlik için:

1. Ayarlar'ı açın
2. Yedekleme ve Geri Yükleme'ye gidin
3. "Yedeklemeleri Şifrele"yi etkinleştirin
4. Bir şifre belirleyin
5. Bu şifreyi hatırlayın - kurtarılamaz

### Artımlı Yedeklemeler

Artımlı yedeklemelerle yerden tasarruf edin:

- Sadece son yedeklemeden sonraki değişiklikler saklanır
- Tam geri yükleme tam durumu yeniden yapılandırır
- Yedekleme süresini ve boyutunu azaltır

### Yedekleme Hariç Tutmaları

Yedeklemelerden belirli içerikleri hariç tutun:

1. Ayarlar'ı açın
2. Yedekleme ve Geri Yükleme'ye gidin
3. "Hariç Tutmalar"a tıklayın
4. Hariç tutmak için klasörler veya dosyalar ekleyin
