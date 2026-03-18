# Respaldo y Restauración

Mantén tus notas seguras con el sistema de respaldo integrado de Classic. Nunca pierdas tu trabajo de nuevo.

## Respaldos Automáticos

### Cómo Funciona

Classic crea automáticamente respaldos de tus notas a intervalos regulares:

- **Frecuencia por defecto**: Cada 30 minutos
- **Ubicación de respaldo**: Misma carpeta que tus notas
- **Retención**: Mantiene los últimos 10 respaldos
- **Formato**: Archivo comprimido (`.cbak`)

### Configurar Auto Respaldo

1. Abre Configuración
2. Navega a **Respaldo y Restauración**
3. Configura lo siguiente:

| Configuración | Opciones | Por Defecto |
| ------------- | -------- | ----------- |
| Habilitar Auto Respaldo | Encendido/Apagado | Encendido |
| Frecuencia de Respaldo | 15min / 30min / 1hr / 4hr | 30min |
| Mantener Respaldos | 5 / 10 / 20 / 50 | 10 |
| Ubicación de Respaldo | Ruta personalizada | Carpeta de notas |

## Respaldo Manual

### Crear Respaldo Ahora

1. Abre la Paleta de Comandos (`Cmd/Ctrl+P`)
2. Escribe "Respaldo"
3. Selecciona **Crear Respaldo Ahora**
4. Elige ubicación (opcional)
5. Se crea el respaldo

### Formato de Archivo de Respaldo

Los respaldos se almacenan como archivos `.cbak` que contienen:

- Todas las notas (archivos Markdown)
- Adjuntos
- Configuraciones
- Metadatos (etiquetas, enlaces, etc.)

## Restaurar desde Respaldo

### Proceso de Restauración

1. Abre Configuración
2. Ve a **Respaldo y Restauración**
3. Haz clic en **Restaurar desde Respaldo**
4. Selecciona el archivo de respaldo
5. Elige opciones de restauración
6. Confirma la restauración

### Opciones de Restauración

| Opción | Descripción |
| ------ | ----------- |
| **Reemplazar Todo** | Reemplazar completamente notas actuales con respaldo |
| **Fusionar** | Combinar respaldo con notas existentes |
| **Vista Previa** | Ver contenido del respaldo antes de restaurar |

### Qué Se Restaura

- ✅ Todas las notas y carpetas
- ✅ Adjuntos
- ✅ Etiquetas y metadatos
- ✅ Historial de notas
- ⚠️ Configuraciones (opcional)
- ❌ Preferencias de la aplicación

## Ubicaciones de Respaldo

### Ubicación por Defecto

```
~/Classic/backups/
├── backup-2024-01-15-10-30.cbak
├── backup-2024-01-15-11-00.cbak
└── backup-2024-01-15-11-30.cbak
```

### Ubicación Personalizada

1. Abre Configuración
2. Ve a Respaldo y Restauración
3. Haz clic en "Cambiar Ubicación de Respaldo"
4. Selecciona tu carpeta preferida

### Respaldo en la Nube

Apunta la ubicación de respaldo a una carpeta sincronizada con la nube:

- **iCloud**: `~/Library/Mobile Documents/com~apple~CloudDocs/Respaldos Classic`
- **Dropbox**: `~/Dropbox/Respaldos Classic`
- **Google Drive**: `~/Google Drive/Respaldos Classic`
- **OneDrive**: `~/OneDrive/Respaldos Classic`

## Mejores Prácticas

### Programación de Respaldos

- **Auto Respaldo**: Mantén habilitado en intervalos de 30 minutos
- **Respaldo Manual**: Crea antes de cambios importantes
- **Respaldo Fuera del Sitio**: Copia respaldos regularmente a almacenamiento externo

### Verificación de Respaldo

Verifica periódicamente tus respaldos:

1. Crea una restauración de prueba
2. Verifica contenido de notas
3. Verifica adjuntos
4. Confirma metadatos

### Rotación de Respaldos

- Mantén respaldos recientes localmente
- Archiva respaldos más antiguos a almacenamiento externo
- Elimina respaldos muy antiguos para ahorrar espacio

## Solución de Problemas

### Respaldo Fallido

**Posibles causas**

- Espacio en disco insuficiente
- Problemas de permisos
- Archivo en uso

**Soluciones**

1. Verifica espacio en disco disponible
2. Verifica permisos de carpeta
3. Cierra otras aplicaciones
4. Intenta una ubicación diferente

### Restauración Fallida

**Posibles causas**

- Archivo de respaldo corrupto
- Versión incompatible
- Espacio insuficiente

**Soluciones**

1. Intenta un respaldo más antiguo
2. Verifica integridad del archivo de respaldo
3. Libera espacio en disco
4. Contacta soporte

### Respaldos Faltantes

**Posibles causas**

- Auto respaldo deshabilitado
- Ubicación de respaldo cambiada
- Respaldos eliminados

**Soluciones**

1. Verifica configuración de respaldo
2. Verifica ubicación de respaldo
3. Habilita auto respaldo
4. Crea respaldo manual ahora

## Opciones Avanzadas

### Respaldos Encriptados

Para seguridad añadida:

1. Abre Configuración
2. Ve a Respaldo y Restauración
3. Habilita "Encriptar Respaldos"
4. Establece una contraseña
5. Recuerda esta contraseña - no puede ser recuperada

### Respaldos Incrementales

Ahorra espacio con respaldos incrementales:

- Solo se almacenan cambios desde el último respaldo
- La restauración completa reconstruye el estado completo
- Reduce tiempo y tamaño de respaldo

### Exclusiones de Respaldo

Excluye contenido específico de respaldos:

1. Abre Configuración
2. Ve a Respaldo y Restauración
3. Haz clic en "Exclusiones"
4. Agrega carpetas o archivos a excluir
