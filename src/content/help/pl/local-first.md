# Architektura Local-First

Classic jest zbudowany z prywatnością jako fundamentem. Twoje dane pozostają na Twoim urządzeniu, zawsze.

## Co Oznacza "Local-First"?

Local-first oznacza:

1. **Twoje dane są przechowywane lokalnie** na Twoim komputerze. Wszystkie Twoje notatki, załączniki i ustawienia są przechowywane w folderze na Twoim komputerze.
2. **Chmura niewymagana** Classic działa bez połączenia z internetem.
3. **Ty posiadasz swoje dane** Masz pełną kontrolę nad swoimi danymi.

## Przechowywanie Danych

### Domyślna Lokalizacja

Twoje dane są przechowywane w dedykowanym folderze:

| Platforma | Lokalizacja |
| -------- | -------- |
| **macOS** | `~/Library/Application Support/Classic/notes` |
| **Windows** | `%APPDATA%\Classic\notes` |
| **Linux** | `~/.config/Classic/notes` |

### Format Danych

- Notatki są przechowywane jako zwykłe pliki tekstowe (`.md`)
- Załączniki są przechowywane w podfolderze `attachments`
- Ustawienia są przechowywane w `settings.json`

### Struktura Plików

```
notes/
├── Skrzynka/
├── Notatki Dzienne/
│   └── 2024-01-15.md
├── Projekty/
│   ├── Mój Projekt.md
│   └── pod-notatka.md
└── attachments/
    └── image.png
settings.json
```

## Korzyści dla Prywatności

### Konto Niewymagane

- Rejestracja niewymagana
- Brak weryfikacji email
- Brak zbierania danych osobowych

### Brak Śledzenia

- Brak analityki
- Brak telemetrii
- Brak danych o użyciu wysyłanych na zewnętrzne serwery

### Działanie Offline

- Działa bez internetu
- Synchronizuje się tylko, gdy wybierzesz
- Twoje dane są zawsze dostępne

## Bezpieczeństwo Danych

### Twoja Odpowiedzialność

- **Kopie zapasowe**: Skonfiguruj automatyczne kopie zapasowe w Ustawieniach
- **Eksporty**: Eksportuj swoje dane regularnie
- **Aktualizacje**: Utrzymuj Classic zaktualizowany dla poprawek bezpieczeństwa

### Nasza Odpowiedzialność

- **Lokalne przechowywanie**: Nigdy nie widzimy ani nie dotykamy Twoich danych
- **Brak backdoorów**: Brak ukrytego zbierania danych
- **Transparentność**: Otwarci i uczciwi w zakresie obsługi danych

## Synchronizacja (Opcjonalna)

Classic nie zawiera wbudowanej synchronizacji chmurowej. Możesz jednak synchronizować swoje dane:

### Używając iCloud/OneDrive/Dropbox

1. Otwórz Ustawienia Classic
2. Zmień lokalizację folderu Notatek na swój folder chmurowy
3. Classic będzie synchronizował przez Twojego dostawcę chmury

### Używając Git

1. Zinicjuj repozytorium git w folderze notatek
2. Zatwierdzaj i wypychaj zmiany ręcznie lub z automatyzacją

## Odzyskiwanie Danych

### Z Kopii Zapasowej

1. Otwórz Ustawienia
2. Przejdź do Kopia Zapasowa i Przywracanie
3. Wybierz plik kopii zapasowej
4. Kliknij Przywróć

### Ręczne Odzyskiwanie

1. Zlokalizuj swój folder notatek
2. Skopiuj pliki do bezpiecznej lokalizacji
3. Zaimportuj do świeżej instalacji Classic

## Często Zadawane Pytania

### Czy moje dane są naprawdę prywatne?

**Tak.** Twoje dane nigdy nie opuszczają Twojego urządzenia, chyba że wyraźnie synchronizujesz je za pomocą usługi zewnętrznej.

### Czy mogę przenieść swoje dane na inny komputer?

**Tak.** Po prostu skopiuj swój folder notatek na nowy komputer i wskaż go w ustawieniach Classic.

### Co się dzieje, jeśli odinstaluję Classic?

**Twoje dane pozostają.** Odinstalowanie Classic nie usuwa Twojego folderu notatek. Możesz bezpiecznie odinstalować i zainstalować ponownie bez utraty danych.

### Czy Classic może uzyskać dostęp do moich danych?

**Nie.** Classic to lokalna aplikacja bez zewnętrznego połączenia do zbierania danych.
