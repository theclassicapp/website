# Tagi

Tagi to potężny sposób na organizowanie i kategoryzowanie notatek w Classic. Znajdź powiązaną treść natychmiast.

## Tworzenie Tagów

### Tagi w Linii

Dodawaj tagi bezpośrednio w treści notatki

```markdown
# Notatki ze Spotkania

Omówiono plan Q4 #praca #spotkania #planowanie
```

### Używając Przycisku Tagu

1. Kliknij ikonę tagu na pasku narzędzi
2. Wpisz nazwę tagu
3. Naciśnij Enter

### Skrót Klawiaturowy

| Platforma | Skrót |
|----------|----------|
| **macOS** | `Cmd+T` |
| **Windows/Linux** | `Ctrl+T` |

## Składnia Tagów

### Podstawowe Tagi

```markdown
#projekt #praca #ważne
```

### Zagnieżdżone Tagi

Twórz hierarchie tagów za pomocą `/`

```markdown
#praca/spotkania
#praca/projekty
#osobiste/hobby/czytanie
```

### Tagi Wielowyrazowe

Używaj myślników lub podkreślników

```markdown
#projekt-alpha
#notatki_spotkania
#planowanie-q4
```

## Zarządzanie Tagami

### Przeglądanie Wszystkich Tagów

1. Otwórz pasek boczny
2. Znajdź sekcję "Tagi"
3. Zobacz wszystkie swoje tagi

### Chmura Tagów

Wizualizuj swoje najczęściej używane tagi

- Większe tagi = więcej notatek
- Kliknij dowolny tag, aby filtrować
- Zobacz liczbę notatek na tag

### Zmiana Nazwy Tagów

1. Kliknij prawym przyciskiem myszy tag
2. Wybierz "Zmień Nazwę"
3. Wpisz nową nazwę
4. Wszystkie notatki aktualizują się automatycznie

### Usuwanie Tagów

1. Kliknij prawym przyciskiem myszy tag
2. Wybierz "Usuń"
3. Potwierdź usunięcie
4. Tag usunięty ze wszystkich notatek

## Wyszukiwanie po Tagach

### Panel Tagów

Kliknij tag na pasku bocznym, aby filtrować notatki

### Składnia Wyszukiwania

Użyj `tag:` w wyszukiwaniu

```
tag:praca
tag:praca/spotkania
```

### Łączenie Tagów

Znajdź notatki z wieloma tagami

```
tag:praca tag:pilne
```

### Wykluczanie Tagów

Znajdź notatki bez tagu

```
-tag:zarchiwizowane
```

## Najlepsze Praktyki Tagowania

### Utrzymuj Prostotę

- Używaj 3-5 tagów na notatkę
- Bądź spójny z nazewnictwem
- Unikaj proliferacji tagów

### Używaj Hierarchii

Organizuj powiązane tagi

```
#praca
  #praca/spotkania
  #praca/projekty
  #praca/deadliny

#osobiste
  #osobiste/zdrowie
  #osobiste/finanse
```

### Ustal Konwencje

Zdefiniuj standardy tagów dla siebie

- **Status**: `#todo` `#w-trakcie` `#ukończone`
- **Priorytet**: `#pilne` `#wysoki` `#niski`
- **Typ**: `#spotkanie` `#referencja` `#pomysł`

## Sugestie Tagów

Podczas pisania `#`, Classic sugeruje istniejące tagi

- Ostatnie tagi pojawiają się jako pierwsze
- Obsługiwane dopasowanie rozmyte
- Naciśnij Tab, aby zaakceptować sugestię

## Statystyki Tagów

Zobacz użycie tagów w Ustawieniach

- Najczęściej używane tagi
- Nieużywane tagi
- Trendy tagów w czasie

## Przypadki Użycia

### Zarządzanie Projektem

```markdown
# Rozpoczęcie Projektu #projekt-alpha #spotkanie #2024-01-15

Uczestnicy: Zespół Alpha
Status: #todo
```

### Baza Wiedzy

```markdown
# Domknięcia JavaScript #programowanie #javascript #referencja #zaawansowane

Domknięcia to funkcje, które mają dostęp do...
```

### Notatki Dzienne

```markdown
# 2024-01-15

- Poranny standup #praca #spotkania
- Przegląd kodu #praca #programowanie
- Sesja na siłowni #osobiste #zdrowie
```

### Notatki z Czytania

```markdown
# Notatki z Atomowych Nawyków #czytanie #książki #produktywność

Kluczowe wnioski z książki...
```

## Skróty Klawiaturowe

| Akcja | Skrót |
|--------|----------|
| Dodaj Tag | `Cmd/Ctrl+T` |
| Wyszukaj Tagi | `Cmd/Ctrl+F`, następnie wpisz `tag:` |
| Pokaż Panel Tagów | `Cmd/Ctrl+Shift+T` |

## Wskazówki

### Spójne Nazewnictwo

Trzymaj się konwencji

```
✅ #notatki-spotkania
✅ #notatki_spotkania
❌ #Notatki Spotkania (spacje niedozwolone)
❌ #notatkiSpotkania (niespójne)
```

### Unikaj Nadmiernego Tagowania

Zbyt wiele tagów staje się niezarządzalne

```
✅ #praca #pilne #projekt-alpha
❌ #praca #pilne #ważne #dzisiaj #poniedziałek #biuro #biurko #komputer
```

### Okresowe Czyszczenie

Regularnie przeglądaj i konsoliduj tagi

- Scal podobne tagi
- Usuń nieużywane tagi
- Aktualizuj konwencje

## Zaawansowane Funkcje

### Inteligentne Foldery Oparte na Tagach

Twórz foldery, które automatycznie wypełniają się na podstawie tagów

1. Utwórz nowy folder
2. Ustaw filtr: `tag:projekt`
3. Wszystkie otagowane notatki pojawią się

### Tagi w YAML

Dodawaj tagi do frontmatteru notatki

```yaml
---
tags:
  - praca
  - spotkania
  - projekt-alpha
---
```

### Aliasy Tagów

Skonfiguruj aliasy tagów w Ustawieniach

- `#todo` = `#zadanie` = `#akcja`
- Konsoliduj podobne tagi
