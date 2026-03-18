# Etiquetas

Las etiquetas son una forma poderosa de organizar y categorizar tus notas en Classic. Encuentra contenido relacionado al instante.

## Crear Etiquetas

### Etiquetas en Línea

Agrega etiquetas directamente en el contenido de tu nota:

```markdown
# Notas de Reunión

Discutimos la hoja de ruta del Q4 #trabajo #reuniones #planificación
```

### Usando el Botón de Etiqueta

1. Haz clic en el ícono de etiqueta en la barra de herramientas
2. Escribe el nombre de tu etiqueta
3. Presiona Enter

### Atajo de Teclado

| Plataforma | Atajo |
|------------|-------|
| **macOS** | `Cmd+T` |
| **Windows/Linux** | `Ctrl+T` |

## Sintaxis de Etiquetas

### Etiquetas Básicas

```markdown
#proyecto #trabajo #importante
```

### Etiquetas Anidadas

Crea jerarquías de etiquetas con `/`:

```markdown
#trabajo/reuniones
#trabajo/proyectos
#personal/hobbies/lectura
```

### Etiquetas de Múltiples Palabras

Usa guiones o guiones bajos:

```markdown
#proyecto-alfa
#notas_reunión
#planificación-q4
```

## Gestionar Etiquetas

### Ver Todas las Etiquetas

1. Abre la barra lateral
2. Encuentra la sección "Etiquetas"
3. Ve todas tus etiquetas

### Nube de Etiquetas

Visualiza tus etiquetas más usadas:

- Etiquetas más grandes = más notas
- Haz clic en cualquier etiqueta para filtrar
- Ve conteo de notas por etiqueta

### Renombrar Etiquetas

1. Clic derecho en una etiqueta
2. Selecciona "Cambiar nombre"
3. Ingresa el nuevo nombre
4. Todas las notas se actualizan automáticamente

### Eliminar Etiquetas

1. Clic derecho en una etiqueta
2. Selecciona "Eliminar"
3. Confirma la eliminación
4. La etiqueta se elimina de todas las notas

## Buscar por Etiqueta

### Panel de Etiquetas

Haz clic en una etiqueta en la barra lateral para filtrar notas.

### Sintaxis de Búsqueda

Usa `tag:` en la búsqueda:

```
tag:trabajo
tag:trabajo/reuniones
```

### Combinar Etiquetas

Encuentra notas con múltiples etiquetas:

```
tag:trabajo tag:urgente
```

### Excluir Etiquetas

Encuentra notas sin una etiqueta:

```
-tag:archivado
```

## Mejores Prácticas de Etiquetas

### Manténlo Simple

- Usa 3-5 etiquetas por nota
- Sé consistente con los nombres
- Evita la proliferación de etiquetas

### Usa Jerarquías

Organiza etiquetas relacionadas:

```
#trabajo
  #trabajo/reuniones
  #trabajo/proyectos
  #trabajo/plazos

#personal
  #personal/salud
  #personal/finanzas
```

### Establece Convenciones

Define estándares de etiquetas para ti mismo:

- **Estado**: `#hacer` `#en-progreso` `#hecho`
- **Prioridad**: `#urgente` `#alto` `#bajo`
- **Tipo**: `#reunión` `#referencia` `#idea`

## Sugerencias de Etiquetas

Mientras escribes `#`, Classic sugiere etiquetas existentes:

- Las etiquetas recientes aparecen primero
- Coincidencia difusa soportada
- Presiona Tab para aceptar sugerencia

## Estadísticas de Etiquetas

Ve el uso de etiquetas en Configuración:

- Etiquetas más usadas
- Etiquetas no usadas
- Tendencias de etiquetas a lo largo del tiempo

## Casos de Uso

### Gestión de Proyectos

```markdown
# Inicio del Proyecto #proyecto-alfa #reunión #2024-01-15

Asistentes: Equipo Alpha
Estado: #hacer
```

### Base de Conocimiento

```markdown
# Closures en JavaScript #programación #javascript #referencia #avanzado

Los closures son funciones que tienen acceso a...
```

### Notas Diarias

```markdown
# 2024-01-15

- Reunión de mañana #trabajo #reuniones
- Revisión de código #trabajo #desarrollo
- Sesión de gimnasio #personal #salud
```

### Notas de Lectura

```markdown
# Notas de Hábitos Atómicos #lectura #libros #productividad

Conclusiones clave del libro...
```

## Atajos de Teclado

| Acción | Atajo |
|--------|-------|
| Agregar Etiqueta | `Cmd/Ctrl+T` |
| Buscar Etiquetas | `Cmd/Ctrl+F`, luego escribe `tag:` |
| Mostrar Panel de Etiquetas | `Cmd/Ctrl+Shift+T` |

## Consejos

### Nombres Consistentes

Mantén una convención:

```
✅ #notas-reunión
✅ #notas_reunión
❌ #Notas Reunión (espacios no permitidos)
❌ #notasReunión (inconsistente)
```

### Evitar Exceso de Etiquetas

Demasiadas etiquetas se vuelven inmanejables:

```
✅ #trabajo #urgente #proyecto-alfa
❌ #trabajo #urgente #importante #hoy #lunes #oficina #escritorio #computadora
```

### Limpieza Periódica

Revisa y consolida etiquetas regularmente:

- Fusiona etiquetas similares
- Elimina etiquetas no usadas
- Actualiza convenciones

## Características Avanzadas

### Carpetas Inteligentes Basadas en Etiquetas

Crea carpetas que se auto-pueblan basadas en etiquetas:

1. Crea nueva carpeta
2. Establece filtro: `tag:proyecto`
3. Todas las notas etiquetadas aparecen

### Etiquetas en YAML

Agrega etiquetas al frontmatter de la nota:

```yaml
---
tags:
  - trabajo
  - reuniones
  - proyecto-alfa
---
```

### Alias de Etiquetas

Configura alias de etiquetas en Configuración:

- `#hacer` = `#tarea` = `#acción`
- Consolida etiquetas similares
