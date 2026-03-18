# Subnotas

Las subnotas te permiten crear notas anidadas y jerárquicas dentro de Classic. Organiza temas complejos en partes manejables.

## ¿Qué Son las Subnotas?

Las subnotas son notas dentro de notas, una forma de crear estructuras de contenido jerárquicas.

### Beneficios

- **Organización**: Divide temas complejos en piezas más pequeñas
- **Anidamiento**: Crea múltiples niveles de jerarquía
- **Navegación**: Fácil navegar entre notas relacionadas
- **Flexibilidad**: Expande y colapsa según sea necesario

## Crear Subnotas

### Método 1: Sangría

Crea subnotas sangrando contenido bajo una nota padre:

1. Crea una nota padre
2. Crea una nueva nota
3. Arrastra la nueva nota sobre la padre
4. Se convierte en una subnota

### Método 2: Menú Contextual

1. Clic derecho en una nota
2. Selecciona "Nueva Subnota"
3. Se crea una nota anidada

### Método 3: Atajo de Teclado

1. Selecciona una nota
2. Presiona `Cmd/Ctrl+Shift+N`
3. Se crea una subnota

## Gestionar Subnotas

### Expandir y Colapsar

Haz clic en la flecha junto a una nota con subnotas:

- **Expandir**: Mostrar todas las notas anidadas
- **Colapsar**: Ocultar notas anidadas

### Navegación

- Haz clic para abrir una subnota
- Usa las teclas de flecha para navegar la jerarquía
- Las migas de pan muestran tu ubicación

### Mover Subnotas

Arrastra y suelta para reorganizar:

1. Haz clic y mantén presionada la subnota
2. Arrastra a la nueva ubicación
3. Suelta para reposicionar

### Convertir a Nota Principal

Promueve una subnota al nivel superior:

1. Clic derecho en la subnota
2. Selecciona "Mover a Raíz"
3. La nota se convierte en nota principal

## Profundidad de Subnotas

Classic soporta múltiples niveles de anidamiento:

```
📁 Proyecto
  📄 Resumen
  📁 Investigación
    📄 Entrevistas de Usuarios
    📄 Resultados de Encuestas
    📁 Análisis
      📄 Hallazgos Clave
      📄 Recomendaciones
  📁 Planificación
    📄 Cronograma
    📄 Recursos
```

### Mejores Prácticas

- **Limitar profundidad**: Máximo 3-4 niveles para claridad
- **Agrupación lógica**: Agrupa contenido relacionado junto
- **Nombres claros**: Usa nombres descriptivos para subnotas

## Casos de Uso

### Documentación de Proyecto

```
Proyecto Alpha
├── Requisitos
├── Arquitectura
│   ├── Frontend
│   ├── Backend
│   └── Base de Datos
├── Notas de Reunión
└── Informes de Progreso
```

### Base de Conocimiento

```
Programación
├── JavaScript
│   ├── Básico
│   ├── Avanzado
│   └── Mejores Prácticas
├── Python
│   ├── Básico
│   └── Librerías
└── Recursos
```

### Notas de Estudio

```
Biología 101
├── Estructura Celular
│   ├── Membrana
│   ├── Núcleo
│   └── Organelos
├── Genética
│   ├── ADN
│   └── ARN
└── Evolución
```

## Enlazar con Subnotas

### Enlaces Inversos

Las subnotas crean automáticamente enlaces inversos a notas padre:

- Ve la sección "Referencias Enlazadas"
- Navega entre notas relacionadas
- Entiende las relaciones entre notas

### Wikilinks

Enlaza a subnotas desde cualquier lugar:

```markdown
Ver [[Proyecto/Investigación/Análisis]] para detalles.
```

## Consejos

### Convención de Nombres

Usa nombres claros y consistentes:

```
✅ Bueno:
Proyecto/Requisitos/Funcionales
Proyecto/Requisitos/No-Funcionales

❌ Evitar:
Proyecto/req/func
Proyecto/rq/nf
```

### Navegación con Migas de Pan

Usa migas de pan para entender tu ubicación:

```
Proyecto > Investigación > Análisis
```

### Búsqueda

La búsqueda incluye subnotas automáticamente:

- Encuentra contenido en todos los niveles
- Filtra por profundidad de nota
- Navegación rápida

### Plantillas

Aplica plantillas a subnotas:

1. Crea subnota
2. Usa comando con barra `/template`
3. Elige plantilla

## Atajos de Teclado

| Acción | Atajo |
|--------|-------|
| Nueva Subnota | `Cmd/Ctrl+Shift+N` |
| Expandir Todo | `Cmd/Ctrl+Down` |
| Colapsar Todo | `Cmd/Ctrl+Up` |
| Mover Arriba | `Opt/Alt+Up` |
| Mover Abajo | `Opt/Alt+Down` |
| Promover | `Opt/Alt+Left` |
| Degradar | `Opt/Alt+Right` |

## Solución de Problemas

### Subnota No Aparece

- Verifica si el padre está colapsado
- Verifica que la nota no fue movida
- Actualiza la barra lateral

### No Puedo Crear Subnota

- Asegúrate de que la nota padre existe
- Verifica permisos
- Intenta el método del menú contextual

### Subnotas Perdidas

Usa búsqueda para encontrar notas perdidas:

1. Abre búsqueda (`Cmd/Ctrl+F`)
2. Escribe el nombre de la nota
3. Ve la ruta completa en los resultados
