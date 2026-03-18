# Kopia Zapasowe i Przywracanie

Zachowuj swoje notatki bezpie dzięki wbudowanego systemu kopii zapasowych Classic. Nigdy więcej nie utracisz swojej pracy.

## Automatyczne kopie zapasowe

### Jak To działa

Classic automatycznie tworzy kopie zapasowych swoich notatek w regularnych odstępach czasu

- **Domyślna częstotliwość**: Cozych 30 minut
- **Lokalizacja kopii zapasowych**: Ten sam folder, co notatki
- **Format**: Skompresowane archiwum (`.cbak`)
- **Przechowywanie**: Zachowuje ostatnie 10 kopii zapasowe

### Konfiguracja automatycznego kopii zapasowych

1. Otwórz Ustawienia
2. Przejdź do Kopia Zapasowe i przywraczenie
3. Skonfiguruj następujące opcje

| Ustawienie | Opcje | Domyślnie |
| ------- | ------- | ------- |
| Włącz automatyczne kopie zapasowe | Wł/Wył | Wł |
| Częstotliwość kopii zapasowych | 15min / 30min / 1h / 4h | 30min |
| Zachowuj kopie zapasowe | 5 / 10 / 20 / 50 | 10 |
| Lokalizacja kopii zapasowych | Niestandardowa ścieżka | Folder notatek |

## Ręczny kopia zapasowa

### Utwórz kopię zapasową teraz

1. Otwórz paletę poleceń (`Cmd/Ctrl+P`)
2. Wpisz "Utwórz kopie zapasową teraz"
3. Wybierz lokalizację (opcjonalnie)
4. Kopia zapasowa jest tworzona

### Format pliku kopii zapasowego
Kopie zapasowe są przechowywane jako pliki `.cbak` zawierające:
- Wszystkie notatki (pliki Markdown)
- Załączniki
- Ustawienia
- Metadane (tagi, linki, itp.)

## Przywracanie z kopii zapasowej

### Przywracanie z kopii zapasowej

1. Otwórz Ustawienia
2. Przejdź do kopia Zapasowe i Przywraczenie
3. Wybierz plik kopii zapasowej
4. Wybierz opcje przywracania
| Opcja | Opis |
| ------ | ----------- |
| **Zastą wszystko** | Całkowicie zastą b obecne notatki kopią zapasem |
| **Scal** | Połącz kopopy zapasowe z istniejącymi notatkami |
| **Podgląd** | Zobacz zawartość kopii zapasowego przed przywrózeniem |

| **Co jest przywracane** |
|--- | ✅ Wszystkie notatki i foldery
| ✅ Załączniki
| ✅ Tagi i metadane
| ✅ Historia notatek
| ⚠️ Ustawienia (opcjonalnie)
| ❌ Preferencje aplikacji |
## Lokalizacje kopii zapasowych

### Domyślna lokalizacja

```
~/Classic/backups/
├── backup-2024-01-15-10-30.cbak
├── backup-2024-01-15-11-00.cbak
└── backup-2024-01-15-11-30.cbak
```

### Niestandardowa lokalizacja
1. Otwórz Ustawienia
2. Przejdź do kopia Zapasowe i przywraczenie
3. Kliknij "Zmień lokalizację kopii zapasowych"
4. Wybierz preferowany folder

### Kopia zapasowa w chmurze
Wkaieraj lokalizację kopii zapasowych do folderu synchronizowanego z chmurą

- **iCloud**: `~/Library/Mobile Documents/com~apple~CloudDocs/Classic Backups`
- **Dropbox**: `~/Dropbox/Classic Backups`
- **Google Drive**: `~/Google Drive/Classic Backups`
- **OneDrive**: `~/OneDrive/Classic Backups`
## Najlepsze praktyki
### Harmonogram kopii zapasowych
- **Automatyczne kopie zapasowe**: Utrzymuj włączone w 30-minutowych odstępach czasu
- **Ręczne kopia zapasowa**: Twóó przed dużymi zmianami
- **Kopia zapasowa poza siedzibą**: Regularnie kopiuj zapasowe do zewnętrznej nośzenia
### Weryfikacja kopii zapasowych
Okresowo weryfikuj swoje kopasy zapasowe
1. Utwórz testowe przywraczenie
2. Sprawdź treść notatek
3. Zweryfikuj załączniki
4. Potwierdź metadane
### Rotacja kopii zapasowych
- Zachowuj ostatnie kopie zapasowe lokalnie
- Archiwizuj starsze kopie zapasowe do zewnętrznego nośnika
- Usuwaj bardzo stare kopie zapasowe, aby oszczędzić miejsce
## Rozwiązywanie problemów
### Nieudany kopia zapasowej
**Moögliche przyczyny**
- Niewystarczają miejsce na dysku
- Problemy z uprawnieniami
- Plik w użyciu
**Rozwiązania**
1. Sprawdź dostępne miejsce na dysku
2. Zweryfikuj uprawnienia folderu
3. Zamknij inne aplikacje
4. Spróbuj innej lokalizacji
### Nieudane przywraczenie
**Mögliche przyczyny**
- Uszkodzony plik kopii zapasowego
- Niekompatybilna wersja
- Niewystarczają miejsce
**Rozwiązania**
1. Spróbuj starszego kopii zapasowego
2. Sprawdź integralność pliku kopii zapasowego
3. Zwolnij miejsce na dysku
4. Skontaktuj się z pomocą techniczną
### Brakujące kopie zapasowe
**Mossible przyczyny**
- Automatyczne kopia zapasowe wyłączone
- Zmieniono lokalizacja kopii zapasowych
- Kopie zapasowe usunięte
**Rozwiązania**
1. Sprawdź ustawienia kopii zapasowych
2. Zweryfikuj lokalizację kopii zapasowych
3. Włącz automatyczne kopia zapasowe
4. Utwórz ręczny kopia zapasowy teraz
## Opcje zaawansowane
### Szyfrowane kopie zapasowe
Dla dodatkowego bezpieczeństwa
1. Otwórz Ustawienia
2. Przejdź do kopia Zapasowe i przywraczenie
3. Włącz "Szyfruj kopie zapasowe"
4. Ustaw hasło
5. Pamiętaj to hasło - nie można go odzyskać
### Przyrostowe kopie zapasowe
Oszczędzaj miejsce z przyrostowymi kopiami zapasowymi
- Tylko zmiany od ostatniego kopii zapasowego są przechowywane
- Pełne przywraczenie rekonstruuje pełny stan
- Zmniejsza czas i rozmiar kopii zapasowego
### Wykluczenia z kopii zapasowych
Wyklucz okretną treści z kopii zapasowych
1. Otwórz Ustawienia
2. Przejdź do kopia Zapasowe i przywraczenie
3. Kliknij "Wykluczenia"
4. Dodaj foldery lub pliki do wykluczenia
