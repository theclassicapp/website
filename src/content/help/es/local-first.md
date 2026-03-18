# Arquitectura Local-First

Classic está construido con privacidad como fundamento. Tus datos permanecen en tu dispositivo, siempre.

## ¿Qué Significa "Local-First"?

Local-first significa:

1. **Tus datos se almacenan localmente** en tu computadora. Todas tus notas, adjuntos y configuraciones se almacenan en una carpeta en tu computadora.
2. **No se requiere nube** Classic funciona sin conexión a internet.
3. **Tú eres dueño de tus datos** Tienes control completo sobre tus datos.

## Almacenamiento de Datos

### Ubicación por Defecto

Tus datos se almacenan en una carpeta dedicada:

| Plataforma | Ubicación |
| ---------- | --------- |
| **macOS** | `~/Library/Application Support/Classic/notes` |
| **Windows** | `%APPDATA%\Classic\notes` |
| **Linux** | `~/.config/Classic/notes` |

### Formato de Datos

- Las notas se almacenan como archivos de texto plano (`.md`)
- Los adjuntos se almacenan en una subcarpeta `attachments`
- Las configuraciones se almacenan en `settings.json`

### Estructura de Archivos

```
notes/
├── Bandeja de Entrada/
├── Notas Diarias/
│   └── 2024-01-15.md
├── Proyectos/
│   ├── Mi Proyecto.md
│   └── sub-nota.md
└── adjuntos/
    └── imagen.png
settings.json
```

## Beneficios de Privacidad

### No Se Requiere Cuenta

- No necesitas registrarte
- Sin verificación de correo
- Sin información personal recopilada

### Sin Rastreo

- Sin análisis
- Sin telemetría
- Sin datos de uso enviados a servidores externos

### Capacidad Offline

- Funciona sin internet
- Sincroniza solo cuando tú eliges
- Tus datos siempre están accesibles

## Seguridad de Datos

### Tu Responsabilidad

- **Respaldos**: Configura respaldos automáticos en Configuración
- **Exportaciones**: Exporta tus datos regularmente
- **Actualizaciones**: Mantén Classic actualizado para correcciones de seguridad

### Nuestra Responsabilidad

- **Almacenamiento local**: Nunca vemos ni tocamos tus datos
- **Sin puertas traseras**: Sin recopilación de datos oculta
- **Transparencia**: Abiertos y honestos sobre el manejo de datos

## Sincronización (Opcional)

Classic no incluye sincronización en la nube integrada. Sin embargo, puedes sincronizar tus datos:

### Usando iCloud/OneDrive/Dropbox

1. Abre Configuración de Classic
2. Cambia la ubicación de la carpeta de Notas a tu carpeta en la nube
3. Classic sincronizará a través de tu proveedor de nube

### Usando Git

1. Inicializa un repositorio git en tu carpeta de notas
2. Confirma y empuja cambios manualmente o con automatización

## Recuperación de Datos

### Desde Respaldo

1. Abre Configuración
2. Ve a Respaldo y Restauración
3. Selecciona un archivo de respaldo
4. Haz clic en Restaurar

### Recuperación Manual

1. Localiza tu carpeta de notas
2. Copia archivos a una ubicación segura
3. Importa en una instalación nueva de Classic

## Preguntas Frecuentes

### ¿Mis datos son realmente privados?

**Sí.** Tus datos nunca salen de tu dispositivo a menos que tú explícitamente los sincronices usando un servicio de terceros.

### ¿Puedo mover mis datos a otra computadora?

**Sí.** Simplemente copia tu carpeta de notas a la nueva computadora y apunta Classic a ella en configuración.

### ¿Qué pasa si desinstalo Classic?

**Tus datos permanecen.** Desinstalar Classic no elimina tu carpeta de notas. Puedes desinstalar y reinstalar de forma segura sin perder datos.

### ¿Classic puede acceder a mis datos?

**No.** Classic es una aplicación local sin conectividad externa para recopilación de datos.
