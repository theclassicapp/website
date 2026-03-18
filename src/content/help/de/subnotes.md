# Unternotizen

Unternotizen ermöglichen es Ihnen, verschachtelte, hierarchische Notizen innerhalb von Classic zu erstellen. Organisieren Sie komplexe Themen in überschaubare Teile.

## Was sind Unternotizen?

Unternotizen sind Notizen innerhalb von Notizen - eine Möglichkeit, hierarchische Inhaltsstrukturen zu erstellen.

### Vorteile

- **Organisation**: Komplexe Themen in kleinere Teile aufteilen
- **Verschachtelung**: Mehrere Ebenen der Hierarchie erstellen
- **Navigation**: Einfaches Navigieren zwischen verwandten Notizen
- **Flexibilität**: Nach Bedarf ein- und ausklappen

## Unternotizen erstellen

### Methode 1: Einrückung

Erstellen Sie Unternotizen durch Einrücken von Inhalten unter einer übergeordneten Notiz:

1. Erstellen Sie eine übergeordnete Notiz
2. Erstellen Sie eine neue Notiz
3. Ziehen Sie die neue Notiz auf die übergeordnete
4. Sie wird zur Unternotiz

### Methode 2: Kontextmenü

1. Rechtsklick auf eine Notiz
2. "Neue Unternotiz" auswählen
3. Eine verschachtelte Notiz wird erstellt

### Methode 3: Tastaturkürzel

1. Notiz auswählen
2. `Cmd/Ctrl+Shift+N` drücken
3. Eine Unternotiz wird erstellt

## Unternotizen verwalten

### Ein- & Ausklappen

Klicken Sie auf den Pfeil neben einer Notiz mit Unternotizen:

- **Ausklappen**: Alle verschachtelten Notizen anzeigen
- **Einklappen**: Verschachtelte Notizen ausblenden

### Navigation

- Klicken zum Öffnen einer Unternotiz
- Pfeiltasten zur Navigation in der Hierarchie verwenden
- Breadcrumb zeigt Ihren Standort

### Unternotizen verschieben

Ziehen und Ablegen zum Reorganisieren:

1. Klicken und Halten der Unternotiz
2. An neuen Ort ziehen
3. Ablegen zum Neu positionieren

### Zu Hauptnotiz konvertieren

Eine Unternotiz zur obersten Ebene befördern:

1. Rechtsklick auf die Unternotiz
2. "Zum Stamm verschieben" auswählen
3. Notiz wird zur Hauptnotiz

## Tiefe der Unternotizen

Classic unterstützt mehrere Ebenen der Verschachtelung:

```
📁 Projekt
  📄 Übersicht
  📁 Recherche
    📄 Benutzerinterviews
    📄 Umfrageergebnisse
    📁 Analyse
      📄 Hauptergebnisse
      📄 Empfehlungen
  📁 Planung
    📄 Zeitplan
    📄 Ressourcen
```

### Best Practices

- **Tiefe begrenzen**: Maximal 3-4 Ebenen für Klarheit
- **Logische Gruppierung**: Verwandte Inhalte zusammen gruppieren
- **Klare Benennung**: Beschreibende Namen für Unternotizen verwenden

## Anwendungsfälle

### Projektdokumentation

```
Projekt Alpha
├── Anforderungen
├── Architektur
│   ├── Frontend
│   ├── Backend
│   └── Datenbank
├── Besprechungsnotizen
└── Fortschrittsberichte
```

### Wissensdatenbank

```
Programmierung
├── JavaScript
│   ├── Grundlagen
│   ├── Fortgeschritten
│   └── Best Practices
├── Python
│   ├── Grundlagen
│   └── Bibliotheken
└── Ressourcen
```

### Studiennotizen

```
Biologie 101
├── Zellstruktur
│   ├── Membran
│   ├── Zellkern
│   └── Organellen
├── Genetik
│   ├── DNA
│   └── RNA
└── Evolution
```

## Verknüpfungen mit Unternotizen

### Rückverweise

Unternotizen erstellen automatisch Rückverweise zu übergeordneten Notizen:

- Siehe Abschnitt "Verknüpfte Referenzen"
- Zwischen verwandten Notizen navigieren
- Notizbeziehungen verstehen

### Wikilinks

Verlinken Sie Unternotizen von überall:

```markdown
Siehe [[Projekt/Recherche/Analyse]] für Details.
```

## Tipps

### Namenskonvention

Verwenden Sie klare, konsistente Namen:

```
✅ Gut:
Projekt/Anforderungen/Funktional
Projekt/Anforderungen/Nicht-Funktional

❌ Vermeiden:
Projekt/anw/funk
Projekt/aq/nf
```

### Breadcrumb-Navigation

Verwenden Sie Breadcrumbs, um Ihren Standort zu verstehen:

```
Projekt > Recherche > Analyse
```

### Suche

Die Suche schließt Unternotizen automatisch ein:

- Inhalte über alle Ebenen finden
- Nach Notiztiefe filtern
- Schnelle Navigation

### Vorlagen

Wenden Sie Vorlagen auf Unternotizen an:

1. Unternotiz erstellen
2. Schrägstrich-Befehl `/template` verwenden
3. Vorlage auswählen

## Tastaturkürzel

| Aktion | Tastenkombination |
|--------|-------------------|
| Neue Unternotiz | `Cmd/Ctrl+Shift+N` |
| Alle ausklappen | `Cmd/Ctrl+Down` |
| Alle einklappen | `Cmd/Ctrl+Up` |
| Nach oben verschieben | `Opt/Alt+Up` |
| Nach unten verschieben | `Opt/Alt+Down` |
| Befördern | `Opt/Alt+Left` |
| Zurückstufen | `Opt/Alt+Right` |

## Fehlerbehebung

### Unternotiz wird nicht angezeigt

- Überprüfen Sie, ob die übergeordnete Notiz eingeklappt ist
- Stellen Sie sicher, dass die Notiz nicht verschoben wurde
- Aktualisieren Sie die Seitenleiste

### Unternotiz kann nicht erstellt werden

- Stellen Sie sicher, dass die übergeordnete Notiz existiert
- Überprüfen Sie die Berechtigungen
- Versuchen Sie die Kontextmenü-Methode

### Verlorene Unternotizen

Verwenden Sie die Suche, um fehlende Notizen zu finden:

1. Suche öffnen (`Cmd/Ctrl+F`)
2. Notiznamen eingeben
3. Vollständigen Pfad in den Ergebnissen anzeigen
