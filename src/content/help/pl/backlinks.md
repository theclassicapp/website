# Odnośniki Zwrotne

Odnośniki zwrotne pokazują połączenia między Twoimi notatkami, tworząc sieć powiązanych pomysłów. Odkryj relacje, o których nie wiedziałeś.

## Czym Są Odnośniki Zwrotne?

Odnośniki zwrotne pokazują, które notatki linkują do bieżącej notatki. To połączenia w Twoim grafie wiedzy.

### Korzyści

- **Odkryj połączenia**: Znajdź powiązane notatki automatycznie
- **Kontekst**: Zrozum, jak pomysły się łączą
- **Nawigacja**: Przeskakuj między połączonymi notatkami
- **Graf wiedzy**: Wizualizuj swoje myślenie

## Jak Działają Odnośniki Zwrotne

Gdy tworzysz link do innej notatki, Classic automatycznie tworzy odnośnik zwrotny.

```markdown
W notatce A:
Zobacz [[Planowanie Projektu]] dla szczegółów.

Wynik:
- Notatka A linkuje do "Planowanie Projektu"
- "Planowanie Projektu" pokazuje odnośnik zwrotny do Notatki A
```

## Przeglądanie Odnośników Zwrotnych

### Panel Odnośników Zwrotnych

Otwórz panel odnośników zwrotnych, aby zobaczyć wszystkie referencje

1. Otwórz dowolną notatkę
2. Kliknij ikonę odnośników zwrotnych na pasku bocznym
3. Zobacz wszystkie notatki linkujące do tej

### Odnośniki Zwrotne w Linii

Odnośniki zwrotne pojawiają się na dole każdej notatki

- Pokazuje nazwę notatki źródłowej
- Wyświetla fragment kontekstu
- Kliknij, aby nawigować

## Tworzenie Linków

### Składnia Wikilink

Użyj podwójnych nawiasów kwadratowych, aby linkować do notatek

```markdown
[[Nazwa Notatki]]
[[Inna Notatka]]
```

### Tekst Wyświetlany

Dostosuj tekst linku

```markdown
[[Projekt Alpha|projekt alpha]]
[[Notatki ze Spotkania|wczorajsze spotkanie]]
```

### Linkowanie do Nagłówków

Linkuj do konkretnych sekcji

```markdown
[[Nazwa Notatki#Nagłówek]]
[[Nazwa Notatki#Sekcja|przejdź do sekcji]]
```

## Typy Odnośników Zwrotnych

### Bezpośrednie Linki

Jawne wikilinki, które tworzysz

```markdown
Powiązane: [[Podobna Notatka]]
```

### Niepołączone Wzmianki

Notatki, które wspominają tytuł, ale nie są połączone

```markdown
Notatka wspomina "Projekt Alpha" ale nie jest połączona
```

Classic sugeruje konwersję tych na linki.

## Panel Odnośników Zwrotnych

### Funkcje

- **Filtr**: Przeszukuj odnośniki zwrotne
- **Sortuj**: Według daty, nazwy lub trafności
- **Podgląd**: Najedź, aby zobaczyć podgląd treści
- **Kontekst**: Zobacz otaczający tekst

### Akcje

- Kliknij, aby otworzyć połączoną notatkę
- Kliknij prawym przyciskiem dla opcji
- Konwertuj niepołączone wzmianki

## Przypadki Użycia

### Zarządzanie Wiedzą

Zbuduj osobistą wiki

```markdown
# Uczenie Maszynowe

Powiązane z [[Sztuczna Inteligencja]]
Buduje na [[Statystyka]]
Używane w [[Przetwarzanie Języka Naturalnego]]
```

### Dokumentacja Projektu

Połącz powiązane dokumenty

```markdown
# Projektowanie API

Referencje [[Schemat Bazy Danych]]
Zależy od [[Przepływ Uwierzytelniania]]
Zobacz też [[Integracja Frontend]]
```

### Badania

Połącz koncepcje i źródła

```markdown
# Notatki Badawcze

Oparte na [[Źródłowy Papier A]]
Sprzeczne z [[Źródłowy Papier B]]
Wspiera [[Hipoteza 1]]
```

### Notatki ze Spotkań

Połącz spotkania z projektami

```markdown
# Spotkanie: Planowanie Q4

Projekt: [[Projekt Alpha]]
Poprzednie: [[Przegląd Q3]]
Następne: [[Rozpoczęcie Q4]]
```

## Widok Grafu

Wizualizuj swoje odnośniki zwrotne jako sieć

1. Otwórz Widok Grafu (`Cmd/Ctrl+G`)
2. Zobacz wszystkie notatki jako węzły
3. Linie pokazują połączenia
4. Kliknij węzły, aby nawigować

### Kontrolki Grafu

- **Zoom**: Przewiń, aby przybliżać
- **Pan**: Przeciągnij, aby przesuwać
- **Filtr**: Pokaż/ukryj według tagu
- **Fokus**: Podświetl połączenia notatki

## Wskazówki

### Linkuj Hojnie

Twórz linki, gdykolwiek odnosisz się do innej koncepcji

```markdown
✅ Dobrze:
Omówiono [[Plan Q4]] i [[Alokację Budżetu]].

❌ Unikaj:
Omówiono plan Q4 i alokację budżetu.
```

### Używaj Spójnych Nazw

Dopasuj dokładnie tytuły notatek dla niezawodnego linkowania

```markdown
✅ [[Notatki ze Spotkania]]
❌ [[notatki ze spotkania]] (wielkość ma znaczenie)
```

### Przeglądaj Odnośniki Zwrotne

Okresowo sprawdzaj odnośniki zwrotne, aby

- Odkryć zapomniane połączenia
- Znaleźć notatki do scalenia
- Zidentyfikować luki w wiedzy

### Podgląd Linków

Najedź na linki, aby zobaczyć podgląd bez otwierania

- Zobacz pierwsze kilka linii
- Sprawdź, czy to właściwa notatka
- Szybka referencja

## Skróty Klawiaturowe

| Akcja | Skrót |
|--------|----------|
| Otwórz Odnośniki Zwrotne | `Cmd/Ctrl+Shift+B` |
| Utwórz Link | `[[` (autouzupełnianie) |
| Otwórz Widok Grafu | `Cmd/Ctrl+G` |
| Nawiguj Linkami | `Tab` przez linki |

## Zaawansowane Funkcje

### Osadzanie

Osadzaj treść z innych notatek

```markdown
![[Nazwa Notatki]]
![[Nazwa Notatki#Sekcja]]
```

### Transkluzja

Dołączaj treść w linii

```markdown
## Powiązana Treść
![[Wspólny Szablon#Nagłówek]]
```

### Kolorowanie Linków

Linki zmieniają kolor w zależności od

- **Niebieski**: Nieodwiedzony link
- **Fioletowy**: Odwiedzony link
- **Czerwony**: Zepsuty link (notatka nie istnieje)

## Rozwiązywanie Problemów

### Brakujące Odnośniki Zwrotne

- Sprawdź składnię linku `[[Nazwa Notatki]]`
- Zweryfikuj, czy tytuł notatki dokładnie pasuje
- Odśwież panel odnośników zwrotnych

### Zepsute Linki

- Notatka mogła zostać przemianowana
- Notatka mogła zostać usunięta
- Użyj wyszukiwania, aby znaleźć właściwą notatkę

### Duplikaty Linków

- Skonsoliduj podobne notatki
- Użyj przekierowań dla przemianowanych notatek
- Sprawdź warianty tytułów
