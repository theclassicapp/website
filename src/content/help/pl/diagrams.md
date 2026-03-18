# Diagramy Mermaid

Twórz piękne diagramy bezpośrednio w swoich notatkach używając składni Mermaid.

## Podstawowe Użycie

Aby utworzyć diagram Mermaid, użyj bloku kodu z identyfikatorem języka `mermaid`:

```mermaid
graph TD
    A[Start] --> B[Proces]
    B --> C[Koniec]
```

## Schemat Blokowy

```mermaid
flowchart TD
    A[Start] --> B{Czy to działa?}
    B -->|Tak| C[Świetnie!]
    B -->|Nie| D[Debugowanie]
    D --> B
```

## Diagram Sekwencji

```mermaid
sequenceDiagram
    participant Użytkownik
    participant Przeglądarka
    participant Serwer

    Użytkownik->>Przeglądarka: Kliknij przycisk
    Przeglądarka->>Serwer: Wyślij żądanie
    Serwer-->>Przeglądarka: Zwróć dane
    Przeglądarka-->>Użytkownik: Wyświetl wynik
```

## Diagram Klas

```mermaid
classDiagram
    class Note {
        +String tytuł
        +String treść
        +DateTime utworzono
        +zapisz()
    }
    class Tag {
        +String nazwa
        +dodajNotatkę()
    }
    Note "1" -- "*" Tag
```

## Diagram Stanów

```mermaid
stateDiagram-v2
    [*] --> Szkic
    Szkic --> WTrakcie : Rozpocznij edycję
    WTrakcie --> Recenzja : Zakończ
    Recenzja --> Opublikowano : Zatwierdź
    Recenzja --> Szkic : Odrzuć
    Opublikowano --> [*]
```

## Wykres Gantta

```mermaid
gantt
    title Oś Czasu Projektu
    dateFormat  YYYY-MM-DD
    section Planowanie
        Badania     :a1, 2024-01-01, 30d
        Projektowanie :2024-01-15, 20d
    section Rozwój
        Backend      :2024-02-01, 45d
        Frontend     :2024-02-15, 30d
    section Testowanie
        Testy QA   :2024-03-01, 15d
```

## Wykres Kołowy

```mermaid
pie showPets
    "Psy" : 386
    "Koty" : 85
    "Króliki" : 15
```

## Mapa Myśli

```mermaid
mindmap
  root((Classic))
    Funkcje((Funkcje))
      Edytor((Edytor))
      Organizacja((Organizacja))
    Korzyści((Korzyści))
      Prywatność((Prywatność))
      Szybkość((Szybkość))
```

## Wskazówki

### Stylizacja

- Używaj podgrafów do organizowania złożonych diagramów
- Dodawaj style i motywy dla spójności wizualnej
- Utrzymuj diagramy proste i czytelne

### Wydajność

- Duże diagramy mogą spowolnić edytor
- Rozważ podzielenie złożonych diagramów na mniejsze
- Użyj `%%{init: ... }%%` dla konfiguracji

### Typowe Problemy

**Diagram się nie renderuje?**
- Sprawdź składnię Mermaid
- Upewnij się, że blok kodu ma język `mermaid`
- Szukaj błędów składni w podglądzie

**Diagram za mały/za duży?**
- Użyj `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` aby dostosować rozmiar

## Zasoby

- [Dokumentacja Mermaid](https://mermaid.js.org/)
- [Edytor Live Mermaid](https://mermaid.live/)
- [GitHub Mermaid](https://github.com/mermaid-js/mermaid)
