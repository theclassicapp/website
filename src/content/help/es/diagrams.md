# Diagramas Mermaid

Crea hermosos diagramas directamente en tus notas usando sintaxis Mermaid.

## Uso Básico

Para crear un diagrama Mermaid, usa un bloque de código con el identificador de lenguaje `mermaid`:

```mermaid
graph TD
    A[Inicio] --> B[Proceso]
    B --> C[Fin]
```

## Diagrama de Flujo

```mermaid
flowchart TD
    A[Inicio] --> B{¿Está funcionando?}
    B -->|Sí| C[¡Genial!]
    B -->|No| D[Depurar]
    D --> B
```

## Diagrama de Secuencia

```mermaid
sequenceDiagram
    participant Usuario
    participant Navegador
    participant Servidor

    Usuario->>Navegador: Clic botón
    Navegador->>Servidor: Enviar solicitud
    Servidor-->>Navegador: Devolver datos
    Navegador-->>Usuario: Mostrar resultado
```

## Diagrama de Clases

```mermaid
classDiagram
    class Nota {
        +String titulo
        +String contenido
        +DateTime creadoEn
        +guardar()
    }
    class Etiqueta {
        +String nombre
        +agregarNota()
    }
    Nota "1" -- "*" Etiqueta
```

## Diagrama de Estados

```mermaid
stateDiagram-v2
    [*] --> Borrador
    Borrador --> EnProgreso : Comenzar edición
    EnProgreso --> Revision : Terminar
    Revision --> Publicado : Aprobar
    Revision --> Borrador : Rechazar
    Publicado --> [*]
```

## Diagrama de Gantt

```mermaid
gantt
    title Línea de Tiempo del Proyecto
    dateFormat  YYYY-MM-DD
    section Planificación
        Investigación     :a1, 2024-01-01, 30d
        Diseño       :2024-01-15, 20d
    section Desarrollo
        Backend      :2024-02-01, 45d
        Frontend     :2024-02-15, 30d
    section Pruebas
        Pruebas QA   :2024-03-01, 15d
```

## Gráfico Circular

```mermaid
pie showPets
    "Perros" : 386
    "Gatos" : 85
    "Conejos" : 15
```

## Mapa Mental

```mermaid
mindmap
  root((Classic))
    Características((Características))
      Editor((Editor))
      Organización((Organización))
    Beneficios((Beneficios))
      Privacidad((Privacidad))
      Velocidad((Velocidad))
```

## Consejos

### Estilo

- Usa subgrafos para organizar diagramas complejos
- Agrega estilos y temas para consistencia visual
- Mantén los diagramas simples y legibles

### Rendimiento

- Los diagramas grandes pueden ralentizar el editor
- Considera dividir diagramas complejos en otros más pequeños
- Usa `%%{init: ... }%%` para configuración

### Problemas Comunes

**¿El diagrama no se renderiza?**
- Verifica la sintaxis Mermaid
- Asegúrate de que el bloque de código tenga el lenguaje `mermaid`
- Busca errores de sintaxis en la vista previa

**¿Diagrama demasiado pequeño/grande?**
- Usa `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` para ajustar el tamaño

## Recursos

- [Documentación de Mermaid](https://mermaid.js.org/)
- [Editor en Vivo de Mermaid](https://mermaid.live/)
- [GitHub de Mermaid](https://github.com/mermaid-js/mermaid)
