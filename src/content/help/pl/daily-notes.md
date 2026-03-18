# Notatki Dzienne

Notatki Dzienne automatycznie tworzą nową notatkę na każdy dzień, idealne do prowadzenia dziennika, codziennego planowania i przechwytywania informacji opartych na czasie.

## Jak To Działa

### Automatyczne Tworzenie

- Nowa notatka jest tworzona na każdy dzień
- Notatki są nazwane używając formatu daty (np. `2024-01-15.md`)
- Notatki z poprzednich dni są zachowywane i przeszukiwalne

### Dostęp do Notatek Dziennych

1. Kliknij **Notatki Dzienne** na pasku bocznym
2. Lub naciśnij `Ctrl/Cmd+D`
3. Dzisiejsza notatka otwiera się automatycznie

## Szablon Notatki Dziennej

Dostosuj szablon dla nowych notatek dziennych

### Domyślny Szablon

```markdown
# {{date}}

## Zadania
- [ ]
- [ ]

## Notatki


## Dziennik

```

### Dostosowywanie

1. Otwórz Ustawienia
2. Przejdź do Notatki Dzienne
3. Edytuj szablon
4. Użyj `{{date}}` dla bieżącej daty

### Zmienne Szablonu

| Zmienna | Opis |
| -------- | ----------- |
| `{{date}}` | Bieżąca data (YYYY-MM-DD) |
| `{{time}}` | Bieżący czas (HH:mm) |
| `{{weekday}}` | Nazwa dnia (Poniedziałek, itp.) |

## Funkcje

### Nawigacja po Datach

- **Poprzedni/Następny**: Nawiguj między dniami
- **Kalendarz**: Przejdź do konkretnych dat
- **Wyszukiwanie**: Znajdź treść we wszystkich notatkach dziennych

### Automatyczne Linkowanie

- Notatki utworzone tego samego dnia są automatycznie połączone
- Odnośniki zwrotne pokazują połączenia między dniami
- Tagi działają we wszystkich notatkach dziennych

### Integracja

- **Szybkie Przechwytywanie**: Dodaj do dzisiejszej notatki z `#dziś`
- **Widok Kalendarza**: Wizualny przegląd Twoich notatek dziennych
- **Statystyki**: Śledź swoje serie pisania

## Najlepsze Praktyki

### Codzienne Prowadzenie Dziennika

```markdown
# 2024-01-15

## Rano
- Obudziłem się o 6:30
- Samopoczucie: Pełen energii

## Zadania
- [x] Poranny trening
- [ ] Przegląd PR-ów
- [ ] Spotkanie zespołu o 14:00

## Nauka
- Odkryłem nowy skrót klawiaturowy
- Dowiedziałem się o diagramach Mermaid

## Jutro
- Skupienie na dokumentacji
- Zaplanuj przegląd kodu
```

### Notatki ze Spotkań

```markdown
# 2024-01-15

## Standup Zespołu

**Uczestnicy**: Alicja, Bob, Karol

### Aktualizacje
- Alicja: Zakończyła integrację API
- Bob: Pracuje nad komponentami UI
- Karol: Testy w toku

### Blokery
- Czekamy na przegląd designu

### Elementy Akcji
- [ ] Alicja: Wdróż na staging
- [ ] Bob: Ukończ bibliotekę komponentów
- [ ] Karol: Napisz testy integracyjne
```

### Dziennik Nauki

```markdown
# 2024-01-15

## Dzisiaj Się Nauczyłem

### Diagramy Mermaid
- Mogę tworzyć schematy blokowe w Markdown
- Składnia jest prosta
- Podgląd na żywo jest pomocny

### Zasoby
- [Dokumentacja Mermaid](https://mermaid.js.org/)

## Pytania
- Jak tworzyć złożone diagramy?
- Najlepsze praktyki dla organizacji diagramów?
```

## Wskazówki

### Spójność

- Twórz notatki o tej samej porze każdego dnia
- Używaj spójnego formatowania
- Przeglądaj i aktualizuj w ciągu dnia

### Organizacja

- Używaj nagłówków dla różnych sekcji
- Dodawaj tagi dla łatwego wyszukiwania
- Linkuj do powiązanych notatek

### Przegląd

- Cotygodniowy przegląd notatek dziennych
- Wyodrębnij ważne elementy do trwałych notatek
- Archiwizuj lub podsumowuj stare notatki
