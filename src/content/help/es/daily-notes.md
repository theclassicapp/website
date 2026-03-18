# Notas Diarias

Las Notas Diarias crean automáticamente una nueva nota para cada día, perfectas para hacer un diario, planificación diaria o capturar información basada en el tiempo.

## Cómo Funciona

### Creación Automática

- Se crea una nueva nota para cada día
- Las notas se nombran usando el formato de fecha (ej., `2024-01-15.md`)
- Las notas de días anteriores se conservan y son buscables

### Acceder a Notas Diarias

1. Haz clic en **Notas Diarias** en la barra lateral
2. O presiona `Ctrl/Cmd+D`
3. La nota de hoy se abre automáticamente

## Plantilla de Nota Diaria

Personaliza la plantilla para nuevas notas diarias.

### Plantilla por Defecto

```markdown
# {{date}}

## Tareas
- [ ]
- [ ]

## Notas


## Diario

```

### Personalizar

1. Abre Configuración
2. Ve a Notas Diarias
3. Edita la plantilla
4. Usa `{{date}}` para la fecha actual

### Variables de Plantilla

| Variable | Descripción |
| -------- | ----------- |
| `{{date}}` | Fecha actual (YYYY-MM-DD) |
| `{{time}}` | Hora actual (HH:mm) |
| `{{weekday}}` | Nombre del día (Lunes, etc.) |

## Características

### Navegación por Fecha

- **Anterior/Siguiente**: Navega entre días
- **Calendario**: Salta a fechas específicas
- **Búsqueda**: Encuentra contenido en todas las notas diarias

### Enlazado Automático

- Las notas creadas el mismo día se enlazan automáticamente
- Los enlaces inversos muestran conexiones entre días
- Las etiquetas funcionan en todas las notas diarias

### Integración

- **Captura Rápida**: Agrega a la nota de hoy con `#today`
- **Vista de Calendario**: Vista general visual de tus notas diarias
- **Estadísticas**: Rastrea tus rachas de escritura

## Mejores Prácticas

### Diario Personal

```markdown
# 2024-01-15

## Mañana
- Me desperté a las 6:30
- Estado de ánimo: Energizado

## Tareas
- [x] Ejercicio de la mañana
- [ ] Revisar PRs
- [ ] Reunión de equipo a las 2pm

## Aprendizajes
- Descubrí un nuevo atajo de teclado
- Aprendí sobre diagramas Mermaid

## Mañana
- Enfocarse en documentación
- Programar revisión de código
```

### Notas de Reunión

```markdown
# 2024-01-15

## Reunión de Equipo

**Asistentes**: Alicia, Roberto, Carolina

### Actualizaciones
- Alicia: Terminó integración de API
- Roberto: Trabajando en componentes UI
- Carolina: Pruebas en progreso

### Bloqueos
- Esperando revisión de diseño

### Elementos de Acción
- [ ] Alicia: Desplegar a staging
- [ ] Roberto: Completar librería de componentes
- [ ] Carolina: Escribir pruebas de integración
```

### Registro de Aprendizaje

```markdown
# 2024-01-15

## Hoy Aprendí

### Diagramas Mermaid
- Puedo crear diagramas de flujo en Markdown
- La sintaxis es sencilla
- La vista previa en vivo es útil

### Recursos
- [Documentación de Mermaid](https://mermaid.js.org/)

## Preguntas
- ¿Cómo crear diagramas complejos?
- ¿Mejores prácticas para organización de diagramas?
```

## Consejos

### Consistencia

- Crea notas a la misma hora cada día
- Usa formato consistente
- Revisa y actualiza a lo largo del día

### Organización

- Usa encabezados para diferentes secciones
- Agrega etiquetas para búsqueda fácil
- Enlaza a notas relacionadas

### Revisión

- Revisión semanal de notas diarias
- Extrae elementos importantes a notas permanentes
- Archiva o resume notas antiguas
