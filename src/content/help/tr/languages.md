# Diller ve Yerelleştirme

Classic sizin dilinizi konuşur. Uygulamayı tercih ettiğiniz dilde kullanın ve seçtiğiniz herhangi bir dilde notlar yazın.

## Desteklenen Diller

Classic'in arayüzü birden fazla dilde mevcuttur:

| Dil | Kod |
|----------|------|
| English | `en` |
| 简体中文 | `zh-CN` |
| 繁體中文 | `zh-TW` |
| 日本語 | `ja` |
| 한국어 | `ko` |
| Español | `es` |
| Français | `fr` |
| Deutsch | `de` |
| Italiano | `it` |
| Português | `pt` |
| Русский | `ru` |
| العربية | `ar` |
| Ve daha fazlası... | |

## Arayüz Dilini Değiştirme

### Ayarlar Üzerinden

1. Ayarlar'ı açın (`Cmd+,` veya `Ctrl+,`)
2. **Genel** → **Dil**'e gidin
3. Tercih ettiğiniz dili seçin
4. Uygulamak için Classic'i yeniden başlatın

### Komut Paleti Üzerinden

1. Komut Paleti'ni açın (`Cmd+P` veya `Ctrl+P`)
2. "Dil" yazın
3. Tercih ettiğiniz dili seçin
4. Değişiklikleri uygulamak için yeniden başlatın

## Birden Fazla Dilde Yazma

Classic herhangi bir dilde not yazmayı destekler

### Unicode Desteği

- Tam Unicode desteği
- RTL (Sağdan Sola) diller desteklenir
- CJK (Çince, Japonca, Korece) karakterler mükemmel çalışır
- Emoji desteği

### Dil Algılama

Classic notlarınızın dilini algılayabilir:

- Yazım denetimi için otomatik algılama
- Not başına dil ayarı
- Karışık dil desteği

## Yazım Denetimi

### Yazım Denetimini Etkinleştirme

1. Ayarlar'ı açın
2. **Düzenleyici** → **Yazım Denetimi**'ne gidin
3. "Yazım Denetimi"ni etkinleştirin

### Yazım Denetimi Dilleri

1. Ayarlar'ı açın
2. **Düzenleyici** → **Yazım Denetimi**'ne gidin
3. "Diller"e tıklayın
4. Kontrol edilecek dilleri seçin

### Sözlüğe Kelime Ekleme

1. İşaretli bir kelimeye sağ tıklayın
2. "Sözlüğe Ekle"yi seçin
3. Kelime bir daha işaretlenmez

## RTL Desteği

Arapça, İbranice ve diğer RTL diller için

### Otomatik RTL Algılama

Classic RTL içeriği otomatik olarak algılar:

- Metin yönü ayarlanır
- İmleç hareketi uyum sağlar
- Hizalama değişir

### Manuel RTL Aç/Kapat

RTL veya LTR yönünü zorla:

1. Komut Paleti'ni açın
2. "RTL" veya "LTR" yazın
3. Tercihinizi seçin

## Giriş Yöntemleri

Classic sisteminizin giriş yöntemleriyle çalışır

### CJK Giriş Yöntemleri

- Pinyin, Zhuyin vb. ile çalışır
- Japonca IME'yi destekler
- Korece giriş yöntemleri desteklenir

### Özel Karakterler

Özel karakterleri kolayca ekleyin:

- Sisteminizin karakter seçicisini kullanın
- Karakter haritalarından kopyala/yapıştır
- Unicode girişi kullanın

## Tarih ve Saat Biçimleri

Tarihler yerelinize uyum sağlar

### Biçim Seçenekleri

| Ayar | Seçenekler |
|---------|---------|
| Tarih Biçimi | AA/GG/YYYY, GG/AA/YYYY, YYYY-MM-DD |
| Saat Biçimi | 12 saatlik, 24 saatlik |
| Haftanın İlk Günü | Pazar, Pazartesi, Cumartesi |

Ayarlar → Genel → Tarih ve Saat'te yapılandırın

## Sayı Biçimleri

Sayılar yerelinize göre görüntülenir:

- **Ondalık ayırıcı**: `.` veya `,`
- **Binlik ayırıcı**: `,` veya `.` veya boşluk
- **Para birimi sembolleri**: Bölgeye göre

## Klavye Düzenleri

Classic herhangi bir klavye düzeniyle çalışır:

- QWERTY, AZERTY, QWERTZ
- Dvorak, Colemak
- Özel düzenler

## Yerelleştirme Ayarları

### Ayarlar → Genel → Dil'de

| Ayar | Açıklama |
|---------|-------------|
| **Arayüz Dili** | Uygulama UI dili |
| **Tarih Biçimi** | Tarihlerin nasıl göründüğü |
| **Saat Biçimi** | 12 veya 24 saat |
| **Haftanın İlk Günü** | Takvim başlangıç günü |
| **Sayı Biçimi** | Ondalık/binlik ayırıcılar |

## İpuçları

### Karışık Dil Notları

Tek notta birden fazla dilde yazın:

```markdown
# Uluslararası Proje

English: Welcome to the project
中文: 欢迎来到这个项目
日本語: プロジェクトへようこそ
한국어: 프로젝트에 오신 것을 환영합니다
```

### Dile Özgü Yazı Tipleri

Bazı diller belirli yazı tipleriyle daha iyi görünür:

1. Ayarlar'ı açın
2. Görünüm → Yazı Tipleri'ne gidin
3. Farkı betikler için yazı tipleri ayarlayın

### Hızlı Dil Değiştirme

Bir klavye kısayolu oluşturun:

1. Ayarlar → Kısayollar'ı açın
2. "Dili Değiştir"i bulun
3. Tercih ettiğiniz kısayolu ayarlayın

## Sorun Giderme

### Dil Mevcut Değil

- Uygulama güncellemelerini kontrol edin
- Dil geliştirme aşamasında olabilir
- GitHub'da çevirilere katkıda bulunun

### Karakterler Görüntülenmiyor

- Gerekli yazı tiplerini yükleyin
- Yazı tipi ayarlarını kontrol edin
- Farklı bir yazı tipi deneyin

### Yazım Denetimi Çalışmıyor

- Yazım denetiminin etkin olduğunu doğrulayın
- Yazım denetimine dili ekleyin
- Classic'i yeniden başlatın

### RTL Doğru Çalışmıyor

- RTL algılamanın açık olduğundan emin olun
- Manuel RTL aç/kapat deneyin
- Karışık içerik sorunlarını kontrol edin

## Çevirilere Katkıda Bulunma

Classic'in çevirisine yardımcı olun:

1. Classic topluluğunu ziyaret edin
2. Çeviri takımına katılın
3. Çevirileri gönderin
4. Yerelleştirmeyi geliştirmeye yardımcı olun
