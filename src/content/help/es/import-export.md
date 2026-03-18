# Importar y Exportar

Trae tus notas a Classic desde otras apps, o expórtalas para compartir o respaldar. Classic soporta múltiples formatos para migración de datos sin problemas.

## Importar Notas

### Formatos Soportados

| Formato | Extensión | Notas |
| ------- | --------- | ----- |
| Markdown | `.md` | ✅ Soporte completo |
| Texto Plano | `.txt` | ✅ Importado como nota |
| JSON | `.json` | ✅ Formato Classic |
| HTML | `.html` | ⚠️ Convertido a Markdown |
| Evernote | `.enex` | ⚠️ Experimental |
| Notion | Exportación Notion | ⚠️ Experimental |
| Obsidian | Exportación Markdown | ✅ Soporte completo |

### Proceso de Importación

1. Abre **Archivo** → **Importar** (o `Cmd/Ctrl+I`)
2. Selecciona tu(s) archivo(s) para importar
3. Elige carpeta de destino
4. Revisa la vista previa de importación
5. Confirma importación

### Importar desde Portapapeles

Importación rápida desde cualquier fuente:

1. Copia texto al portapapeles
2. Abre la Paleta de Comandos
3. Escribe "Importar desde Portapapeles"
4. Se crea nota automáticamente

### Importación Masiva

Importa múltiples archivos a la vez:

1. Abre **Archivo** → **Importar**
2. Selecciona **Importar Carpeta**
3. Elige la carpeta que contiene las notas
4. Todos los archivos soportados se importan

## Exportar Notas

### Formatos de Exportación

| Formato | Caso de Uso |
| ------- | ----------- |
| **Markdown** | Compartir, respaldos, otras apps |
| **HTML** | Publicación web |
| **PDF** | Archivado, impresión |
| **Texto Plano** | Compartir simple |
| **JSON** | Integración API |

### Exportar Nota Individual

1. Abre la nota
2. Haz clic en **Archivo** → **Exportar**
3. Elige formato
4. Selecciona ubicación
5. Guarda

### Exportar Múltiples Notas

1. Selecciona notas en la barra lateral (Cmd/Ctrl+clic)
2. Clic derecho → **Exportar Seleccionadas**
3. Elige formato
4. Selecciona ubicación
5. Guarda

### Exportar Todas las Notas

1. Abre **Archivo** → **Exportar Todo**
2. Elige formato
3. Selecciona ubicación
4. Espera a que se complete la exportación

## Guías de Migración

### Desde Obsidian

Classic puede importar bóvedas de Obsidian directamente:

1. Abre **Archivo** → **Importar**
2. Selecciona **Bóveda Obsidian**
3. Navega a tu carpeta de bóveda
4. Selecciona para importar

**Qué se transfiere**

- ✅ Notas y carpetas
- ✅ Etiquetas
- ✅ Enlaces (convertidos a enlaces inversos)
- ✅ Metadatos
- ⚠️ Plugins (no soportados)

### Desde Notion

1. Exporta desde Notion como Markdown
2. Importa a Classic
3. Revisa formato
4. Corrige enlaces rotos

**Consejos para migración desde Notion**

- Usa "Exportar como Markdown" de Notion
- Verifica formato de casillas de verificación
- Verifica referencias de bases de datos
- Recrea bases de datos enlazadas manualmente

### Desde Evernote

1. Exporta desde Evernote como HTML
2. Usa la importación HTML de Classic
3. Revisa contenido convertido

**Consejos para migración desde Evernote**

- Los cuadernos se convierten en carpetas
- Las etiquetas se preservan
- Los adjuntos se importan
- Verifica formato

## Mejores Prácticas

### Antes de Importar

- Respaldar notas existentes
- Revisar vista previa de importación
- Verificar duplicados
- Verificar formato

### Después de Importar

- Revisar notas importadas
- Corregir problemas de formato
- Actualizar enlaces internos
- Agregar etiquetas según sea necesario

### Exportaciones Regulares

- Exporta respaldos mensualmente
- Usa diferentes formatos para diferentes propósitos
- Mantén exportaciones organizadas por fecha
- Almacena en la nube para respaldo fuera del sitio

## Solución de Problemas

### Importación Fallida

**Causas comunes**

- Formato no soportado
- Archivo corrupto
- Problemas de permisos
- Limitaciones de memoria

**Soluciones**

1. Intenta un formato diferente
2. Verifica integridad del archivo
3. Verifica permisos de lectura
4. Importa menos archivos a la vez

### Formato Perdido

**Causas comunes**

- Formato complejo
- Sintaxis no soportada
- Limitaciones de conversión

**Soluciones**

1. Usa exportación Markdown desde la app fuente
2. Simplifica formato antes de importar
3. Corrige manualmente después de importar

### Adjuntos Faltantes

**Causas comunes**

- La importación no incluyó adjuntos
- Ruta de adjunto incorrecta
- Limitaciones de tamaño

**Soluciones**

1. Re-importa con adjuntos
2. Verifica carpeta de adjuntos
3. Importa adjuntos por separado
