# Import i Eksport

Przenie swoje notatki do Classic z innych aplik lub udostępnij je jako kopie zapasowe lub do ichowania. Classic obsługu wiele formatów dla płynnej migracji danych.

## Importowanie notatek

### Obsługiwane formaty

| Format | Rozszerzenie | Uwagi |
| ------ | --------- | ----- |
| Markdown | `.md` | ✅ Pełna obsługa |
| Zwykły tekst | `.txt` | ✅ Importowane jako notatka |
| JSON | `.json` | ✅ Format Classic |
| HTML | `.html` | ⚠️ Konwertowane do Markdown |
| Evernote | `.enex` | ⚠️ Eksperymentalne |
| Notion | Eksport z Notion | ⚠️ Eksperymentalne |
| Obsidian | Eksport Markdown | ✅ Pełna obsługa |

### Proces importu

1. Otwórz **Plik** → **Importuj** (lub `Cmd/Ctrl+I`)
2. Wybierz swoje plik(i) do zaimportowania
3. Wybierz folder docelowy
4. Przejrzyj podgląd importu
5. Potwierdź import
### Import ze schowka
Szybki import z dowolnego źródła
1. Skopiuj tekst do schowka
2. Otwórz paletę poleceń
3. Wpisz "Importuj ze schowka"
4. Nowa notatka jest tworzona automatycznie
### Import masowy
Importuj wiele plików naraz
1. Otwórz **Plik** → **Importuj**
2. Wybierz **Importuj folder**
3. Wybierz folder zawierają notatki
4. Wszystkie obsługiwane pliki są importowane
## Eksportowanie notatek

### Formaty eksportu
| Format | Przypadek użycia |
| ------ | ------- |
| **Markdown** | Udostępnianie, kopie zapasowe, inne aplikacje |
| **HTML** | Publikowanie internetowe |
| **PDF** | Archiwizowanie, drukowanie |
| **Zwykły tekst** | Proste udostępnianie |
| **JSON** | Integracja API |
### Eksport pojedynczej notatki
1. Otwórz notatkę, którą chcesz wyeksportować
2. Kliknij **Plik** → **Eksportuj**
3. Wybierz format
4. Wybierz lokalizację
5. Zapisz
### Eksport wielu notatek
1. Wybierz notatki na pasku bocznym (Cmd/Ctrl+klik)
2. Kliknij prawym przyciskiem myszy → **Eksportuj wybrane**
3. Wybierz format
4. Wybierz lokalizację
5. Zapisz
### Eksport wszystkich notatek
1. Otwórz **Plik** → **Eksportuj wszystko**
2. Wybierz format
3. Wybierz lokalizację
4. Czekaj na ukończenie eksportu
## Przewodniki migracji
### Z Obsidian
Classic może importować seaulty Obsidian bezpośrednio
1. Otwórz **Plik** → **Importuj**
2. Wybierz **Sejfault Obsidian**
3. Nawiguj do folderu sejfa
4. Wybierz do zaimportowania
**Co jest przenoszone**
- ✅ Notatki i foldery
- ✅ Tagi
- ✅ Linki (konwertowane na odnośniki zwrotne)
- ✅ Metadane
- ⚠️ Wtyczki (nie obsługiwane)
### Z Notion
1. Eksportuj z Notion jako Markdown
2. Importuj do Classic
3. Przejrzyj formatowanie
4. Napraw uszkodzone linki
**Wskazówki dla migracji z Notion**
- Użyj "Eksportuj jako Markdown" w Notion
- Sprawdź formatowanie pól wyboru
- Zweryfikuj referencje do bazy danych
- Utwórz ponownie połączone bazy danych ręcznie
### Z Evernote
1. Eksportuj z Evernote jako HTML
2. Użyj importu HTML w Classic
3. Przejrzyj przekonwertowaną treść
**Wskazówki dla migracji z Evernote**
- Notatniki stają się folderami
- Tagi są zachowane
- Załączniki są importowane
- Sprawdź formatowanie
## Najlepsze praktyki
### Przed importem
- Utwórz kopię zapasową istniejących notatek
- Przejrzyj podgląd importu
- Sprawdź duplikaty
- Zweryfikuj formatowanie
### Po imporcie
- Przejrzyj zaimportowane notatki
- Napraw problemy z formatowaniem
- Zaktualizuj linki wewnętrzne
- Dodaj tagi w razie potrzeby
### Regularne eksporty
- Eksportuj kopie zapasowe co miesiąc
- Używaj różnych formatów do różnych celów
- Utrzymuj eksporty zorganizowane według daty
- Przechowuj w chmurze dla kopii zapasowej poza siedzibą
## Rozwiązywanie problemów
### Import nie powiódł się
**Częste przyczyny**
- Nieobsługiwany format
- Uszkodzony plik
- Problemy z uprawnieniami
- Ograniczenia pamięci
**Rozwiązania**
1. Spróbuj innny format
2. Sprawdź integralność pliku
3. Zweryfikuj uprawnienia odczytu
4. Importuj mniej plików naraz
### Utracone formatowanie
**Częste przyczyny**
- Złożone formatowanie
- Nieobsługiwana składnia
- Ograniczenia konwersji
**Rozwiązania**
1. Użyj eksportu Markdown z aplikacji źródłowej
2. Uprość formatowanie przed importem
3. Ręcznie napraw po imporcie
### Brakujące załączniki
**Częste przyczyny**
- Import nie uwzględnił załączników
- Błędna ścieżka załącznika
- Ograniczenia rozmiaru
**Rozwiązania**
1. Ponownie importuj z załącznikami
2. Sprawdź folder załączników
3. Importuj załączniki oddzielnie
