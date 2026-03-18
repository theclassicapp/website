# Búsqueda

Encuentra cualquier nota al instante con la poderosa búsqueda de Classic. Búsqueda de texto completo, filtros y operadores te ayudan a localizar exactamente lo que necesitas.

## Búsqueda Básica

### Abrir Búsqueda

| Plataforma | Atajo |
|------------|-------|
| **macOS** | `Cmd+F` |
| **Windows/Linux** | `Ctrl+F` |

O haz clic en la barra de búsqueda en la barra lateral.

### Cómo Funciona

1. Abre búsqueda
2. Comienza a escribir
3. Los resultados aparecen al instante
4. Haz clic para abrir una nota

## Características de Búsqueda

### Búsqueda de Texto Completo

Classic busca a través de:

- Títulos de notas
- Contenido de notas
- Etiquetas
- Nombres de archivos

### Resultados en Tiempo Real

Los resultados se actualizan mientras escribes:

- No necesitas presionar Enter
- Retroalimentación instantánea
- Coincidencia difusa habilitada

### Resaltado de Búsqueda

Los términos encontrados se resaltan en los resultados:

- Ve contexto alrededor de coincidencias
- Identifica notas relevantes rápidamente

## Operadores de Búsqueda

### Coincidencia Exacta

Usa comillas para frases exactas:

```
"planificación del proyecto"
"notas de reunión"
```

### Búsqueda por Etiqueta

Encuentra notas con etiquetas específicas:

```
tag:trabajo
tag:reuniones
tag:urgente
```

### Excluir Términos

Usa `-` para excluir:

```
proyecto -archivado
reunión -cancelada
```

### Búsqueda OR

Encuentra notas con cualquier término:

```
proyecto OR iniciativa
```

### Rango de Fechas

Busca por fecha:

```
created:2024-01-01..2024-12-31
modified:semana-pasada
```

### Tipo de Archivo

Filtra por extensión:

```
ext:md
ext:txt
```

## Búsqueda Avanzada

### Combinar Operadores

Construye consultas complejas:

```
tag:trabajo -tag:archivado created:semana-pasada
"reunión" tag:proyecto-alfa
```

### Búsqueda por Ruta

Busca dentro de carpetas:

```
path:Proyectos/
path:Archivo/
```

### Búsqueda por Título

Busca solo títulos:

```
title:HojaDeRuta
title:Reunión
```

### Búsqueda de Contenido

Busca solo contenido (excluye títulos):

```
content:importante
content:fecha-límite
```

## Filtros de Búsqueda

### Por Etiqueta

1. Escribe tu búsqueda
2. Haz clic en una etiqueta para filtrar
3. Los resultados se reducen a notas etiquetadas

### Por Fecha

Filtra por fecha de modificación:

- Hoy
- Esta semana
- Este mes
- Rango personalizado

### Por Carpeta

Limita la búsqueda a una carpeta:

1. Clic derecho en una carpeta
2. Selecciona "Buscar en Carpeta"
3. Resultados limitados a esa carpeta

## Resultados de Búsqueda

### Ordenamiento

Ordena resultados por:

- **Relevancia** (predeterminado)
- **Fecha de Modificación** (más recientes primero)
- **Fecha de Creación** (más recientes primero)
- **Título** (alfabético)

### Vista Previa de Resultados

Pasa el cursor sobre resultados para previsualizar:

- Se muestran las primeras líneas
- Términos coincidentes resaltados
- Etiquetas mostradas

### Contexto

Ve dónde ocurrió la coincidencia:

- Muestra texto circundante
- Resalta la coincidencia
- Haz clic para saltar a la ubicación

## Historial de Búsqueda

### Búsquedas Recientes

Accede a búsquedas anteriores:

1. Haz clic en la barra de búsqueda
2. Ve búsquedas recientes
3. Haz clic para ejecutar de nuevo

### Limpiar Historial

1. Abre Configuración
2. Ve a Privacidad
3. Haz clic en "Limpiar Historial de Búsqueda"

## Consejos

### Usa Términos Específicos

Más específico = mejores resultados:

```
✅ "presupuesto de marketing Q4"
❌ presupuesto
```

### Combina con Etiquetas

Reduce resultados rápidamente:

```
proyecto tag:urgente
```

### Usa Exclusiones

Filtra ruido:

```
reunión -tag:archivado
```

### Guarda Búsquedas Frecuentes

Crea búsquedas guardadas:

1. Ingresa tu búsqueda
2. Haz clic en "Guardar Búsqueda"
3. Nómbrala
4. Accede desde la barra lateral

## Navegación con Teclado

| Acción | Atajo |
|--------|-------|
| Abrir Búsqueda | `Cmd/Ctrl+F` |
| Siguiente Resultado | `Enter` o `Down` |
| Resultado Anterior | `Shift+Enter` o `Up` |
| Cerrar Búsqueda | `Escape` |

## Configuración de Búsqueda

### Personaliza en Configuración

| Configuración | Opciones |
|---------------|----------|
| Sensible a Mayúsculas | Encendido/Apagado |
| Buscar Títulos | Encendido/Apagado |
| Buscar Contenido | Encendido/Apagado |
| Buscar Etiquetas | Encendido/Apagado |
| Incluir Archivados | Encendido/Apagado |

## Casos de Uso

### Encontrar Notas Antiguas

```
"reunión" date:el-año-pasado
```

### Investigación de Proyecto

```
path:Proyectos/ tag:investigación
```

### Elementos de Acción

```
"HACER" OR "ARREGLAR" -tag:hecho
```

### Trabajo Reciente

```
modified:esta-semana
```

## Solución de Problemas

### No Se Encontraron Resultados

- Verifica ortografía
- Elimina filtros
- Intenta términos más amplios
- Verifica si la nota está archivada

### Búsqueda Lenta

- Colecciones grandes de notas pueden tomar más tiempo
- Deshabilita sensibilidad a mayúsculas
- Reduce el alcance de búsqueda

### Notas Faltantes

- La nota puede estar en una carpeta diferente
- Verifica si la etiqueta es correcta
- Verifica que la nota no esté archivada
