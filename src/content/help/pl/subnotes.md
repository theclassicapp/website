# Podnotatki

Podnotatki pozwalają tworzyć zagnieżdżone, hierarchiczne notatki w Classic. Organizuj złożone tematy w łatwe do zarządzania części.

## Czym Są Podnotatki?

Podnotatki to notatki wewnątrz notatek—sposób na tworzenie hierarchicznych struktur treści.

### Korzyści

- **Organizacja**: Rozbij złożone tematy na mniejsze części
- **Zagnieżdżanie**: Twórz wiele poziomów hierarchii
- **Nawigacja**: Łatwa nawigacja między powiązanymi notatkami
- **Elastyczność**: Rozwijaj i zwijaj w razie potrzeby

## Tworzenie Podnotatek

### Metoda 1: Przeciągnij i Upuść

Twórz podnotatki przez przeciąganie treści pod notatką nadrzędną

1. Utwórz notatkę nadrzędną
2. Utwórz nową notatkę
3. Przeciągnij nową notatkę na nadrzędną
4. Staje się podnotatką

### Metoda 2: Menu Kontekstowe

1. Kliknij prawym przyciskiem myszy notatkę
2. Wybierz "Nowa Podnotatka"
3. Zagnieżdżona notatka zostanie utworzona

### Metoda 3: Skrót Klawiaturowy

1. Wybierz notatkę
2. Naciśnij `Cmd/Ctrl+Shift+N`
3. Podnotatka zostanie utworzona

## Zarządzanie Podnotatkami

### Rozwijanie i Zwijanie

Kliknij strzałkę obok notatki z podnotatkami

- **Rozwiń**: Pokaż wszystkie zagnieżdżone notatki
- **Zwiń**: Ukryj zagnieżdżone notatki

### Nawigacja

- Kliknij, aby otworzyć podnotatkę
- Użyj klawiszy strzałek do nawigacji po hierarchii
- Okruszki pokazują Twoją lokalizację

### Przenoszenie Podnotatek

Przeciągnij i upuść, aby zreorganizować

1. Kliknij i przytrzymaj podnotatkę
2. Przeciągnij do nowej lokalizacji
3. Upuść, aby zmienić pozycję

### Konwersja na Notatkę Główną

Awansuj podnotatkę do poziomu najwyższego

1. Kliknij prawym przyciskiem myszy podnotatkę
2. Wybierz "Przenieś do Korzenia"
3. Notatka staje się notatką główną

## Głębokość Podnotatek

Classic obsługuje wiele poziomów zagnieżdżenia

```
📁 Projekt
  📄 Przegląd
  📁 Badania
    📄 Wywiady Użytkowników
    📄 Wyniki Ankiety
    📁 Analiza
      📄 Kluczowe Wnioski
      📄 Rekomendacje
  📁 Planowanie
    📄 Harmonogram
    📄 Zasoby
```

### Najlepsze Praktyki

- **Ogranicz głębokość**: Maksymalnie 3-4 poziomy dla jasności
- **Logiczne grupowanie**: Grupuj powiązaną treść razem
- **Jasne nazewnictwo**: Używaj opisowych nazw dla podnotatek

## Przypadki Użycia

### Dokumentacja Projektu

```
Projekt Alpha
├── Wymagania
├── Architektura
│   ├── Frontend
│   ├── Backend
│   └── Baza Danych
├── Notatki ze Spotkań
└── Raporty Postępu
```

### Baza Wiedzy

```
Programowanie
├── JavaScript
│   ├── Podstawy
│   ├── Zaawansowane
│   └── Najlepsze Praktyki
├── Python
│   ├── Podstawy
│   └── Biblioteki
└── Zasoby
```

### Notatki do Nauki

```
Biologia 101
├── Struktura Komórki
│   ├── Błona
│   ├── Jądro
│   └── Organella
├── Genetyka
│   ├── DNA
│   └── RNA
└── Ewolucja
```

## Łączenie z Podnotatkami

### Odnośniki Zwrotne

Podnotatki automatycznie tworzą odnośniki zwrotne do notatek nadrzędnych

- Zobacz sekcję "Połączone Referencje"
- Nawiguj między powiązanymi notatkami
- Rozumiej relacje między notatkami

### Wikilinki

Linkuj do podnotatek z dowolnego miejsca

```markdown
Zobacz [[Projekt/Badania/Analiza]] dla szczegółów.
```

## Wskazówki

### Konwencja Nazewnictwa

Używaj jasnego, spójnego nazewnictwa

```
✅ Dobrze:
Projekt/Wymagania/Funkcjonalne
Projekt/Wymagania/Niefunkcjonalne

❌ Unikaj:
Projekt/wym/funk
Projekt/rq/nf
```

### Nawigacja Okruszkowa

Używaj okruszków, aby zrozumieć swoją lokalizację

```
Projekt > Badania > Analiza
```

### Wyszukiwanie

Wyszukiwanie automatycznie uwzględnia podnotatki

- Znajdź treść na wszystkich poziomach
- Filtruj według głębokości notatki
- Szybka nawigacja

### Szablony

Stosuj szablony do podnotatek

1. Utwórz podnotatkę
2. Użyj polecenia z ukośnikiem `/template`
3. Wybierz szablon

## Skróty Klawiaturowe

| Akcja | Skrót |
|--------|----------|
| Nowa Podnotatka | `Cmd/Ctrl+Shift+N` |
| Rozwiń Wszystkie | `Cmd/Ctrl+Down` |
| Zwiń Wszystkie | `Cmd/Ctrl+Up` |
| Przesuń w Górę | `Opt/Alt+Up` |
| Przesuń w Dół | `Opt/Alt+Down` |
| Awansuj | `Opt/Alt+Left` |
| Degraduj | `Opt/Alt+Right` |

## Rozwiązywanie Problemów

### Podnotatka Nie Wyświetla Się

- Sprawdź, czy nadrzędna jest zwinięta
- Zweryfikuj, czy notatka nie została przeniesiona
- Odśwież pasek boczny

### Nie Można Utworzyć Podnotatki

- Upewnij się, że notatka nadrzędna istnieje
- Sprawdź uprawnienia
- Spróbuj metody menu kontekstowego

### Utracone Podnotatki

Użyj wyszukiwania, aby znaleźć brakujące notatki

1. Otwórz wyszukiwanie (`Cmd/Ctrl+F`)
2. Wpisz nazwę notatki
3. Zobacz pełną ścieżkę w wynikach
