# İçe ve Dışa Aktarma

Notlarınızı diğer uygulamalardan Classic'e getirin veya paylaşmak ya da yedeklemek için dışa aktarın. Classic, sorunsuz veri geçişi için birden fazla biçimi destekler.

## Notları İçe Aktarma

### Desteklenen Biçimler

| Biçim | Uzantı | Notlar |
| ------ | --------- | ----- |
| Markdown | `.md` | ✅ Tam destek |
| Düz Metin | `.txt` | ✅ Not olarak içe aktarıldı |
| JSON | `.json` | ✅ Classic biçimi |
| HTML | `.html` | ⚠️ Markdown'a dönüştürüldü |
| Evernote | `.enex` | ⚠️ Deneysel |
| Notion | Notion dışa aktarma | ⚠️ Deneysel |
| Obsidian | Markdown dışa aktarma | ✅ Tam destek |

### İçe Aktarma Süreci

1. **Dosya** → **İçe Aktar**'ı açın (veya `Cmd/Ctrl+I`)
2. İçe aktarılacak dosyalarınızı seçin
3. Hedef klasörü seçin
4. İçe aktarma önizlemesini gözden geçirin
5. İçe aktarmayı onaylayın

### Panodan İçe Aktarma

Herhangi bir kaynaktan hızlı içe aktarma:

1. Metni panoya kopyalayın
2. Komut Paleti'ni açın
3. "Panodan İçe Aktar" yazın
4. Yeni not otomatik olarak oluşturulur

### Toplu İçe Aktarma

Aynı anda birden fazla dosya içe aktar:

1. **Dosya** → **İçe Aktar**'ı açın
2. **Klasör İçe Aktar**'ı seçin
3. Notları içeren klasörü seçin
4. Desteklenen tüm dosyalar içe aktarılır

## Notları Dışa Aktarma

### Dışa Aktarma Biçimleri

| Biçim | Kullanım Durumu |
| ------ | ------- |
| **Markdown** | Paylaşım, yedeklemeler, diğer uygulamalar |
| **HTML** | Web yayınlama |
| **PDF** | Arşivleme, yazdırma |
| **Düz Metin** | Basit paylaşım |
| **JSON** | API entegrasyonu |

### Tek Not Dışa Aktarma

1. Notu açın
2. **Dosya** → **Dışa Aktar**'a tıklayın
3. Biçimi seçin
4. Konumu seçin
5. Kaydedin

### Birden Fazla Not Dışa Aktarma

1. Kenar çubuğunda notları seçin (Cmd/Ctrl+tıkla)
2. Sağ tık → **Seçilenleri Dışa Aktar**
3. Biçimi seçin
4. Konumu seçin
5. Kaydedin

### Tüm Notları Dışa Aktarma

1. **Dosya** → **Tümünü Dışa Aktar**'ı açın
2. Biçimi seçin
3. Konumu seçin
4. Dışa aktarmanın tamamlanmasını bekleyin

## Geçiş Kılavuzları

### Obsidian'dan

Classic, Obsidian kasalarını doğrudan içe aktarabilir:

1. **Dosya** → **İçe Aktar**'ı açın
2. **Obsidian Kasası**'nı seçin
3. Klasör klasörünüze gidin
4. İçe aktarmayı seçin

**Neler Aktarılır**

- ✅ Notlar ve klasörler
- ✅ Etiketler
- ✅ Bağlantılar (geri bağlantılara dönüştürüldü)
- ✅ Meta veriler
- ⚠️ Eklentiler (desteklenmiyor)

### Notion'dan

1. Notion'dan Markdown olarak dışa aktarın
2. Classic'e içe aktarın
3. Biçimlendirmeyi gözden geçirin
4. Kırık bağlantıları düzeltin

**Notion geçişi için ipuçları**

- Notion'un "Markdown Olarak Dışa Aktar"ını kullanın
- Onay kutusu biçimlendirmesini kontrol edin
- Veritabanı referanslarını doğrulayın
- Bağlantılı veritabanlarını manuel olarak yeniden oluşturun

### Evernote'tan

1. Evernote'tan HTML olarak dışa aktarın
2. Classic'in HTML içe aktarmasını kullanın
3. Dönüştürülen içeriği gözden geçirin

**Evernote geçişi için ipuçları**

- Not defterleri klasör olur
- Etiketler korunur
- Ekler içe aktarılır
- Biçimlendirmeyi kontrol edin

## En İyi Uygulamalar

### İçe Aktarmadan Önce

- Mevcut notları yedekleyin
- İçe aktarma önizlemesini gözden geçirin
- Yinelenenleri kontrol edin
- Biçimlendirmeyi doğrulayın

### İçe Aktardıktan Sonra

- İçe aktarılan notları gözden geçirin
- Biçimlendirme sorunlarını düzeltin
- İç bağlantıları güncelleyin
- Gerektiğinde etiketler ekleyin

### Düzenli Dışa Aktarmalar

- Yedeklemeleri aylık dışa aktarın
- Farklı amaçlar için farklı biçimler kullanın
- Dışa aktarmaları tarihe göre düzenli tutun
- Site dışı yedekleme için bulutta saklayın

## Sorun Giderme

### İçe Aktarma Başarısız

**Yaygın nedenler**

- Desteklenmeyen biçim
- Bozuk dosya
- İzin sorunları
- Bellek sınırlamaları

**Çözümler**

1. Farklı bir biçim deneyin
2. Dosya bütünlüğünü kontrol edin
3. Okuma izinlerini doğrulayın
4. Aynı anda daha az dosya içe aktarın

### Biçimlendirme Kayboldu

**Yaygın nedenler**

- Karmaşık biçimlendirme
- Desteklenmeyen sözdizimi
- Dönüşüm sınırlamaları

**Çözümler**

1. Kaynak uygulamadan Markdown dışa aktarma kullanın
2. İçe aktarmadan önce biçimlendirmeyi basitleştirin
3. İçe aktarmadan sonra manuel olarak düzeltin

### Ekler Eksik

**Yaygın nedenler**

- İçe aktarma ekleri içermiyor
- Yanlış ek yolu
- Boyut sınırlamaları

**Çözümler**

1. Eklerle birlikte yeniden içe aktarın
2. Ek klasörünü kontrol edin
3. Ekleri ayrı olarak içe aktarın
