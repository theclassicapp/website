# Historia Wersi



Classic śledzi śistorię każ zmiany w Twoich notatkach. Przeglądaj, porównuj i przywracuj poprzednie wersje, kiedy tylko potrzebujesz.

## Jak działa historia wersji

### Automatyczne śledzenie

Classic automatycznie zapisuje wersje Twoich notatek

- **Każda edycja**: Każde zapis tworzy wersję
- **Ze znakiem czasowymi**: Wiedz, kiedy wystąpiły zmiany
- **Pełna treść**: Kompletne migawki są zachowane

### Przechowywanie

| Ustawienie | Domyślnie |
|---------|---------|
| **Przechowywanie historii** | 90 dni |
| **Maksymalna liczba wersji** | 100 na notatkę |
| **Automatyczne czyszczenie** | Tak |

Skonfiguruj te w Ustawienia → Edytor → Historia wersji.

## Przeglądanie historii

### Otwieranie historii wersji
1. Otwórz dowolną notatkę
2. Kliknij ikonę historii na pasku narzędzi
3. Lub użyj `Cmd/Ctrl+H`
### Panel historii
Panel historii pokazuje
- **Oś czasu**: Lista wszystkich wersji
- **Znakiem czasowe**: Kiedy każda wersja została zapisana
- **Podgląd**: Zobacz treść wybranej wersji
### Nawigacja po wersjach
1. Kliknij dowolną wersję na liście
2. Podgląd pokazuje tę wersję
3. Przewiń przez zmiany
4. Porównaj z bieżącą wersją
## Porówny wersji
### Widok obok siebie
Zobacz różnice między wersjami
1. Otwórz historię wersji
2. Wybierz wersję
3. Kliknij "Porównaj"
4. Zobacz dodatki (zielone) i usunięcia (czerwone)
### Widok różnic
Różnice tekst są podświetlone
- **Zielone**: Dodana treść
- **Czerwone**: Usunięta treść
- **Niezmienione**: Zwykły tekst
## Przywracanie wersji

### Przywróć całej notatki
Zastąp bieżącą treść poprzednią wersją
1. Otwórz historię wersji
2. Wybierz wersję
3. Kliknij "Przywróć"
4. Potwierdź akcję
### Przywróć zaznaczenia
Skopiuj tylko część poprzedniej wersji
1. Otwórz historię wersji
2. Wybierz wersję
3. Podświetl tekst, który chcesz
4. Kliknij "Kopiuj do schowka"
5. Wklej w bieżącej notatce
### Utwórz nową notatkę z wersji
Zachowaj obie wersje
1. Otwórz historię wersji
2. Wybierz wersję
3. Kliknij "Utwórz notatkę z wersji"
4. Nowa notatka jest tworzona
## Akcje historii wersji

| Akcja | Opis |
|--------|-------------|
| **Zobacz** | Podgląd wersji |
| **Porównaj** | Różnica z bieżącą |
| **Przywróć** | Zastąp bieżącą tą |
| **Kopiuj** | Kopiuj treść do schowka |
| **Usuń** | Usuń tę wersję |
## Skróty klawiaturowe
| Akcja | Skrót |
|--------|----------|
| Otwórz historię | `Cmd/Ctrl+H` |
| Poprzednia wersja | `Up` |
| Następna wersja | `Down` |
| Przywróć | `Cmd/Ctrl+R` |
| Zamknij historię | `Escape` |
## Ustawienia
### Skonfiguruj w Ustawienia → Edytor → Historia wersji
| Ustawienie | Opcje | Domyślnie |
|---------|---------|---------|
| Włącz historię | Wł/Wył | Wł |
| Okres przechowywania | 30/60/90/180 dni | 90 dni |
| Maks.alna wersji | 50/100/200/500 | 100 |
| Interwał autozapisu | 1/5/10/30 minut | 5 minut |
### Lokalizacja przechowywania
Historia wersji jest przechowywana lokalnie
- **macOS**: `~/Library/Application Support/Classic/history/`
- **Windows**: `%APPDATA%/Classic/history/`
- **Linux**: `~/.config/Classic/history/`
## Przypadki użycia
### Odzyskiwanie przypadkowych zmian
1. Otwórz historię wersji
2. Znajdź wersję przed błędem
3. Przywróć tę wersję
### Porówny projektów
1. Otwórz historię
2. Porównaj różne wersje
3. Zobacz jak notatka się roana
### Znajdowanie usuniętej treści
1. Przeglądaj starsze wersje
2. Szukaj usuniętego tekstu
3. Skopiuj go z powrotem
### Śledzenie postępu
Zobacz jak notatka roawijała się w czasie
- Kiedy pomysły zosta dodane
- Jak zmieniła się struktura
- Ewolucja pisania
## Wskazówki
### Regularny przegląd
Okresowo przeglądaj historię wersji
- Czyść zb zbędne wersje
- Zauważ jak treść się wypewijała
- Ucz się z wzorców edycji
### Przed dużymi zmianami
Utwórz punkt kontrolny
1. Wprowadź małą edycję
2. Zapisz (tworzy wersję)
3. Teraz wprowadź duże zmiany
4. Łatwo cofnąć się przywrócić
### Nazwij ważne wersje
Dodaj znaczniki w swoich notatkach
```markdown
<!-- WERSJA: Ostateń końcowy -->
<!-- WERSJA: Przed restrukturyzacją -->
Te pomagają zidentyfikować wersje później.
## Rozwiązywanie problemów
### Historia się nie zapisana się
- Sprawdź, czy historia wersji jest włączona
- Zweryfikuj, czy lokalizacja przechowywania ma miejsce
- Sprawdź uprawnienia pliku
### Nie można znaleźć starej wersji
- Wersja mogła zosta automatycznie wyczyszczona
- Sprawdź ustawienia przechowywania
- Zwiększ okres przechowywania
### Historia zajiera zbyt dużo miejsca
1. Zmniejsz okres przechowywania
2. Zmniejsz maks.alną wersji na notatkę
3. Uruchom ręczne czyszczenie
### Wolne ładowanie historii
Duże notatki z wieloma wersjami mogą ładowić się powoli
- Bądź cierpliwy z dużymi historiami
- Rozważ zmniejszenie maksymalną wersji
- Archiwizuj stare notatki
## Prywatność i bezpieczeństwo
### Lokalne przechowywanie
Historia wersji jest przechowywana lokalnie
- Nigdy nie wysyłana na serwery
- Twoje dane pozostają prywatne
- Tylko Ty masz dostęp
### Szyfrowane kopie zapasowe
Jeśli używasz szyfrowanych kopii zapasowych
- Historia wersji jest uwzględniona
- Chroniona Twoje hasło kopii zapasowania
- Bezpieczna nawet w plikachach kopii zapasowych
