# Historial de Versiones

Classic mantiene un registro de cada cambio en tus notas. Navega, compara y restaura versiones anteriores cuando lo necesites.

## Cómo Funciona el Historial de Versiones

### Rastreo Automático

Classic guarda automáticamente versiones de tus notas:

- **Cada edición**: Cada guardado crea una versión
- **Con marca de tiempo**: Sabe cuándo ocurrieron los cambios
- **Contenido completo**: Instantáneas completas preservadas

### Retención

| Configuración | Por Defecto |
|---------------|-------------|
| **Retención de Historial** | 90 días |
| **Máximo de Versiones** | 100 por nota |
| **Limpieza automática** | Sí |

Configura esto en Configuración → Editor → Historial de Versiones.

## Ver Historial

### Abrir Historial de Versiones

1. Abre cualquier nota
2. Haz clic en el ícono de historial en la barra de herramientas
3. O usa `Cmd/Ctrl+H`

### Panel de Historial

El panel de historial muestra:

- **Línea de tiempo**: Lista de todas las versiones
- **Marcas de tiempo**: Cuándo se guardó cada versión
- **Vista previa**: Ver contenido de la versión seleccionada

### Navegar Versiones

1. Haz clic en cualquier versión de la lista
2. La vista previa muestra esa versión
3. Desplázate por los cambios
4. Compara con la versión actual

## Comparar Versiones

### Vista Lado a Lado

Ve diferencias entre versiones:

1. Abre historial de versiones
2. Selecciona una versión
3. Haz clic en "Comparar"
4. Ve adiciones (verde) y eliminaciones (rojo)

### Vista de Diferencias

Las diferencias de texto se resaltan:

- **Verde**: Contenido agregado
- **Rojo**: Contenido eliminado
- **Sin cambios**: Texto regular

## Restaurar Versiones

### Restaurar Nota Completa

Reemplaza el contenido actual con una versión anterior:

1. Abre historial de versiones
2. Selecciona la versión
3. Haz clic en "Restaurar"
4. Confirma la acción

### Restaurar Selección

Copia solo parte de una versión anterior:

1. Abre historial de versiones
2. Selecciona la versión
3. Resalta el texto que quieres
4. Haz clic en "Copiar al Portapapeles"
5. Pega en tu nota actual

### Crear Nueva Nota desde Versión

Mantén ambas versiones:

1. Abre historial de versiones
2. Selecciona la versión
3. Haz clic en "Crear Nota desde Versión"
4. Se crea una nueva nota

## Acciones del Historial de Versiones

| Acción | Descripción |
|--------|-------------|
| **Ver** | Previsualizar la versión |
| **Comparar** | Diferenciar con actual |
| **Restaurar** | Reemplazar actual con esta |
| **Copiar** | Copiar contenido al portapapeles |
| **Eliminar** | Eliminar esta versión |

## Atajos de Teclado

| Acción | Atajo |
|--------|-------|
| Abrir Historial | `Cmd/Ctrl+H` |
| Versión Anterior | `Up` |
| Siguiente Versión | `Down` |
| Restaurar | `Cmd/Ctrl+R` |
| Cerrar Historial | `Escape` |

## Configuración

### Configura en Configuración → Editor → Historial de Versiones

| Configuración | Opciones | Por Defecto |
|---------------|----------|-------------|
| Habilitar Historial | Encendido/Apagado | Encendido |
| Período de Retención | 30/60/90/180 días | 90 días |
| Máximo de Versiones | 50/100/200/500 | 100 |
| Intervalo de Auto-guardado | 1/5/10/30 minutos | 5 minutos |

### Ubicación de Almacenamiento

El historial de versiones se almacena localmente:

- **macOS**: `~/Library/Application Support/Classic/history/`
- **Windows**: `%APPDATA%/Classic/history/`
- **Linux**: `~/.config/Classic/history/`

## Casos de Uso

### Recuperar Cambios Accidentales

1. Abre historial de versiones
2. Encuentra versión antes del error
3. Restaura esa versión

### Comparar Borradores

1. Abre historial
2. Compara diferentes versiones
3. Ve cómo evolucionó la nota

### Encontrar Contenido Eliminado

1. Navega versiones más antiguas
2. Busca texto eliminado
3. Cópialo de vuelta

### Rastrear Progreso

Ve cómo se desarrolló una nota a lo largo del tiempo:

- Cuándo se agregaron ideas
- Cómo cambió la estructura
- Evolución de la escritura

## Consejos

### Revisión Regular

Revisa periódicamente el historial de versiones:

- Limpia versiones innecesarias
- Anota cómo evolucionó el contenido
- Aprende de tus patrones de edición

### Antes de Cambios Mayores

Crea un punto de control:

1. Haz una pequeña edición
2. Guarda (crea una versión)
3. Ahora haz tus cambios mayores
4. Fácil de revertir si es necesario

### Nombrar Versiones Importantes

Agrega marcadores en tus notas:

```markdown
<!-- VERSIÓN: Borrador final -->
<!-- VERSIÓN: Antes de reestructurar -->
```

Estos ayudan a identificar versiones después.

## Solución de Problemas

### Historial No Se Guarda

- Verifica si el historial de versiones está habilitado
- Verifica que la ubicación de almacenamiento tenga espacio
- Verifica permisos de archivo

### No Puedo Encontrar Versión Antigua

- La versión puede haber sido limpiada automáticamente
- Verifica configuración de retención
- Aumenta el período de retención

### Historial Ocupa Demasiado Espacio

1. Reduce el período de retención
2. Baja el máximo de versiones por nota
3. Ejecuta limpieza manual

### Carga de Historial Lenta

Notas grandes con muchas versiones pueden cargarse lentamente:

- Ten paciencia con historiales grandes
- Considera reducir máximo de versiones
- Archiva notas antiguas

## Privacidad y Seguridad

### Almacenamiento Local

El historial de versiones se almacena localmente:

- Nunca enviado a servidores
- Tus datos permanecen privados
- Solo tú tienes acceso

### Respaldos Encriptados

Si usas respaldos encriptados:

- El historial de versiones está incluido
- Protegido por tu contraseña de respaldo
- Seguro incluso en archivos de respaldo
