# Wyszukiwanie

Znajdź każdą notatkę natychmiast z potężnym wyszukiwaniem Classic. Pełnotekstowe wyszukiwanie, filtry i operatory pomogą Ci znaleźć dokładnie to, czego potrzebujesz.

## Podstawowe Wyszukiwanie

### Otwieranie Wyszukiwania

| Platforma | Skrót |
|----------|----------|
| **macOS** | `Cmd+F` |
| **Windows/Linux** | `Ctrl+F` |

Lub kliknij pasek wyszukiwania na pasku bocznym.

### Jak To Działa

1. Otwórz wyszukiwanie
2. Zacznij pisać
3. Wyniki pojawiają się natychmiast
4. Kliknij, aby otworzyć notatkę

## Funkcje Wyszukiwania

### Pełnotekstowe Wyszukiwanie

Classic przeszukuje przez

- Tytuły notatek
- Treść notatek
- Tagi
- Nazwy plików

### Wyniki w Czasie Rzeczywistym

Wyniki aktualizują się podczas pisania

- Nie musisz naciskać Enter
- Natychmiastowa informacja zwrotna
- Włączone dopasowanie rozmyte

### Podświetlanie Wyszzukiwania

Znalezione terminy są podświetlone w wynikach

- Zobacz kontekst wokół dopasowań
- Szybko zidentyfikuj istotne notatki

## Operatory Wyszukiwania

### Dokładne Dopasowanie

Użyj cudzysłowów dla dokładnych fraz

```
"planowanie projektu"
"notatki ze spotkania"
```

### Wyszukiwanie po Tagach

Znajdź notatki z konkretnymi tagami

```
tag:praca
tag:spotkania
tag:pilne
```

### Wykluczanie Terminów

Użyj `-`, aby wykluczyć

```
projekt -zarchiwizowane
spotkanie -odwołane
```

### Wyszukiwanie OR

Znajdź notatki z dowolnym terminem

```
projekt LUB inicjatywa
```

### Zakres Dat

Wyszukuj według daty

```
utworzono:2024-01-01..2024-12-31
zmodyfikowano:ostatni-tydzień
```

### Typ Pliku

Filtruj według rozszerzenia

```
ext:md
ext:txt
```

## Zaawansowane Wyszukiwanie

### Łączenie Operatorów

Buduj złożone zapytania

```
tag:praca -tag:zarchiwizowane utworzono:ostatni-tydzień
"spotkanie" tag:projekt-alpha
```

### Wyszukiwanie po Ścieżce

Wyszukuj wewnątrz folderów

```
path:Projekty/
path:Archiwum/
```

### Wyszukiwanie po Tytule

Wyszukuj tylko tytuły

```
title:Plan
title:Spotkanie
```

### Wyszukiwanie po Treści

Wyszukuj tylko treść (wyklucz tytuły)

```
content:ważne
content:deadline
```

## Filtry Wyszukiwania

### Według Tagu

1. Wpisz swoje wyszukiwanie
2. Kliknij tag, aby filtrować
3. Wyniki zawężają się do otagowanych notatek

### Według Daty

Filtruj według daty modyfikacji

- Dzisiaj
- Ten tydzień
- Ten miesiąc
- Niestandardowy zakres

### Według Folderu

Ogranicz wyszukiwanie do folderu

1. Kliknij prawym przyciskiem myszy folder
2. Wybierz "Wyszukaj w Folderze"
3. Wyniki ograniczone do tego folderu

## Wyniki Wyszukiwania

### Sortowanie

Sortuj wyniki według

- **Trafność** (domyślnie)
- **Data Modyfikacji** (najnowsze pierwsze)
- **Data Utworzenia** (najnowsze pierwsze)
- **Tytuł** (alfabetycznie)

### Podgląd Wyników

Najedź na wyniki, aby zobaczyć podgląd

- Pokazane pierwsze kilka linii
- Podświetlone pasujące terminy
- Wyświetlone tagi

### Kontekst

Zobacz, gdzie wystąpiło dopasowanie

- Pokazuje otaczający tekst
- Podświetla dopasowanie
- Kliknij, aby przejść do lokalizacji

## Historia Wyszukiwania

### Ostatnie Wyszukiwania

Dostęp do poprzednich wyszukiwań

1. Kliknij w pasek wyszukiwania
2. Zobacz ostatnie wyszukiwania
3. Kliknij, aby uruchomić ponownie

### Czyszczenie Historii

1. Otwórz Ustawienia
2. Przejdź do Prywatność
3. Kliknij "Wyczyść Historię Wyszukiwania"

## Wskazówki

### Używaj Konkretnych Terminów

Bardziej konkretne = lepsze wyniki

```
✅ "Budżet marketingowy Q4"
❌ budżet
```

### Łącz z Tagami

Szybko zawęź wyniki

```
projekt tag:pilne
```

### Używaj Wykluczeń

Odfiltruj szum

```
spotkanie -tag:zarchiwizowane
```

### Zapisz Częste Wyszukiwania

Twórz zapisane wyszukiwania

1. Wpisz swoje wyszukiwanie
2. Kliknij "Zapisz Wyszukiwanie"
3. Nazwij je
4. Dostęp z paska bocznego

## Nawigacja Klawiaturą

| Akcja | Skrót |
|--------|----------|
| Otwórz Wyszukiwanie | `Cmd/Ctrl+F` |
| Następny Wynik | `Enter` lub `Down` |
| Poprzedni Wynik | `Shift+Enter` lub `Up` |
| Zamknij Wyszukiwanie | `Escape` |

## Ustawienia Wyszukiwania

### Dostosuj w Ustawieniach

| Ustawienie | Opcje |
|---------|---------|
| Uwzględnij Wielkość Liter | Wł/Wył |
| Przeszukuj Tytuły | Wł/Wył |
| Przeszukuj Treść | Wł/Wył |
| Przeszukuj Tagi | Wł/Wył |
| Uwzględnij Zarchiwizowane | Wł/Wył |

## Przypadki Użycia

### Znajdowanie Starych Notatek

```
"spotkanie" data:ostatni-rok
```

### Badania Projektu

```
path:Projekty/ tag:badania
```

### Elementy Akcji

```
"TODO" LUB "FIXME" -tag:ukończone
```

### Ostatnia Praca

```
zmodyfikowano:ten-tydzień
```

## Rozwiązywanie Problemów

### Brak Wyników

- Sprawdź pisownię
- Usuń filtry
- Spróbuj szerszych terminów
- Sprawdź, czy notatka jest zarchiwizowana

### Wolne Wyszukiwanie

- Duże zbiory notatek mogą trwać dłużej
- Wyłącz uwzględnianie wielkości liter
- Zmniejsz zakres wyszukiwania

### Brakujące Notatki

- Notatka może być w innym folderze
- Sprawdź, czy tag jest poprawny
- Zweryfikuj, czy notatka nie jest zarchiwizowana
