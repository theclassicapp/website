# Enlaces Inversos

Los enlaces inversos muestran conexiones entre tus notas, creando una red de ideas relacionadas. Descubre relaciones que no sabías que existían.

## ¿Qué Son los Enlaces Inversos?

Los enlaces inversos muestran qué notas enlazan a la nota actual. Son conexiones en tu gráfico de conocimiento.

### Beneficios

- **Descubrir conexiones**: Encuentra notas relacionadas automáticamente
- **Contexto**: Entiende cómo se relacionan las ideas
- **Navegación**: Salta entre notas conectadas
- **Gráfico de conocimiento**: Visualiza tu pensamiento

## Cómo Funcionan los Enlaces Inversos

Cuando creas un enlace a otra nota, Classic crea automáticamente un enlace inverso.

```markdown
En nota A:
Ver [[Planificación del Proyecto]] para detalles.

Resultado:
- La nota A enlaza a "Planificación del Proyecto"
- "Planificación del Proyecto" muestra un enlace inverso a la Nota A
```

## Ver Enlaces Inversos

### Panel de Enlaces Inversos

Abre el panel de enlaces inversos para ver todas las referencias:

1. Abre cualquier nota
2. Haz clic en el ícono de enlaces inversos en la barra lateral
3. Ve todas las notas que enlazan a esta

### Enlaces Inversos en Línea

Los enlaces inversos aparecen al final de cada nota:

- Muestra el nombre de la nota fuente
- Muestra fragmento de contexto
- Haz clic para navegar

## Crear Enlaces

### Sintaxis Wikilink

Usa dobles corchetes para enlazar a notas:

```markdown
[[Nombre de Nota]]
[[Otra Nota]]
```

### Texto de Visualización

Personaliza el texto del enlace:

```markdown
[[Proyecto Alpha|el proyecto alfa]]
[[Notas de Reunión|la reunión de ayer]]
```

### Enlazar a Encabezados

Enlaza a secciones específicas:

```markdown
[[Nombre de Nota#Encabezado]]
[[Nombre de Nota#Sección|saltar a sección]]
```

## Tipos de Enlaces Inversos

### Enlaces Directos

Wikilinks explícitos que creas:

```markdown
Relacionado: [[Nota Similar]]
```

### Menciones No Enlazadas

Notas que mencionan el título pero no están enlazadas:

```markdown
La nota menciona "Proyecto Alpha" pero no está enlazada
```

Classic sugiere convertir estos en enlaces.

## Panel de Enlaces Inversos

### Características

- **Filtrar**: Buscar a través de enlaces inversos
- **Ordenar**: Por fecha, nombre o relevancia
- **Vista Previa**: Pasa el cursor para previsualizar contenido
- **Contexto**: Ver texto circundante

### Acciones

- Haz clic para abrir nota enlazada
- Clic derecho para opciones
- Convertir menciones no enlazadas

## Casos de Uso

### Gestión del Conocimiento

Construye una wiki personal:

```markdown
# Aprendizaje Automático

Relacionado con [[Inteligencia Artificial]]
Construido sobre [[Estadística]]
Usado en [[Procesamiento del Lenguaje Natural]]
```

### Documentación de Proyecto

Conecta documentos relacionados:

```markdown
# Diseño de API

Referencias [[Esquema de Base de Datos]]
Depende de [[Flujo de Autenticación]]
Ver también [[Integración Frontend]]
```

### Investigación

Enlaza conceptos y fuentes:

```markdown
# Notas de Investigación

Basado en [[Documento Fuente A]]
Contradice [[Documento Fuente B]]
Apoya [[Hipótesis 1]]
```

### Notas de Reunión

Conecta reuniones con proyectos:

```markdown
# Reunión: Planificación Q4

Proyecto: [[Proyecto Alpha]]
Anterior: [[Revisión Q3]]
Siguiente: [[Inicio Q4]]
```

## Vista de Gráfico

Visualiza tus enlaces inversos como una red:

1. Abre Vista de Gráfico (`Cmd/Ctrl+G`)
2. Ve todas las notas como nodos
3. Las líneas muestran conexiones
4. Haz clic en nodos para navegar

### Controles del Gráfico

- **Zoom**: Desplázate para hacer zoom
- **Pan**: Arrastra para mover
- **Filtrar**: Mostrar/ocultar por etiqueta
- **Enfoque**: Resaltar conexiones de una nota

## Consejos

### Enlaza Generosamente

Crea enlaces siempre que referencies otro concepto:

```markdown
✅ Bueno:
Discutimos la [[Hoja de Ruta Q4]] y [[Asignación de Presupuesto]].

❌ Evitar:
Discutimos la Hoja de Ruta Q4 y Asignación de Presupuesto.
```

### Usa Nombres Consistentes

Coincide exactamente con los títulos de notas para enlaces confiables:

```markdown
✅ [[Notas de Reunión]]
❌ [[notas de reunión]] (las mayúsculas importan)
```

### Revisa Enlaces Inversos

Revisa periódicamente los enlaces inversos para:

- Descubrir conexiones olvidadas
- Encontrar notas para fusionar
- Identificar lagunas de conocimiento

### Vista Previa de Enlaces

Pasa el cursor sobre enlaces para previsualizar sin abrir:

- Ve las primeras líneas
- Verifica si es la nota correcta
- Referencia rápida

## Atajos de Teclado

| Acción | Atajo |
|--------|-------|
| Abrir Enlaces Inversos | `Cmd/Ctrl+Shift+B` |
| Crear Enlace | `[[` (autocompleta) |
| Abrir Vista de Gráfico | `Cmd/Ctrl+G` |
| Navegar Enlaces | `Tab` a través de enlaces |

## Características Avanzadas

### Incrustación

Incrusta contenido de otras notas:

```markdown
![[Nombre de Nota]]
![[Nombre de Nota#Sección]]
```

### Transclusión

Incluye contenido en línea:

```markdown
## Contenido Relacionado
![[Plantilla Compartida#Encabezado]]
```

### Coloreado de Enlaces

Los enlaces cambian de color basándose en:

- **Azul**: Enlace no visitado
- **Púrpura**: Enlace visitado
- **Rojo**: Enlace roto (la nota no existe)

## Solución de Problemas

### Enlaces Inversos Faltantes

- Verifica la sintaxis del enlace `[[Nombre de Nota]]`
- Verifica que el título de la nota coincida exactamente
- Actualiza el panel de enlaces inversos

### Enlaces Rotos

- La nota puede haber sido renombrada
- La nota puede haber sido eliminada
- Usa búsqueda para encontrar la nota correcta

### Enlaces Duplicados

- Consolida notas similares
- Usa redirecciones para notas renombradas
- Verifica variaciones de título
