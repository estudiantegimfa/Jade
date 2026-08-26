# Jade — Joyería fina

Sitio web de una sola página para **Jade**, joyería fina en oro, platino y piedras preciosas ubicada en Medellín, Colombia.

> "Cada pieza, una historia forjada en oro."

## Estructura del proyecto

```
jade-joyas/
├── index.html          # Estructura de la página (todas las secciones)
├── README.md            # Este archivo
├── css/
│   └── styles.css       # Estilos: tema obsidiana + oro antiguo + esmeralda + granate
└── js/
    └── main.js           # Menú móvil, animaciones al scroll, contador de stats, formulario demo, copyright automático
```

## Cómo verlo

No requiere instalación ni servidor. Basta con abrir `index.html` en cualquier navegador moderno, o servirlo con un servidor estático simple, por ejemplo:

```bash
cd jade-joyas
python3 -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Secciones incluidas

1. **Header / navegación** — logo, menú, botón "Agenda una cita", menú hamburguesa responsive.
2. **Hero principal** — título, texto de marca, dos llamadas a la acción y una gema facetada animada en SVG.
3. **Servicios** — seis tarjetas (joyería a la medida, anillos de compromiso, restauración, engaste, fundición, certificación).
4. **Sobre nosotros** — filosofía del taller y estadísticas animadas (500+ piezas, 15 maestros joyeros, 3 generaciones, 100% materiales certificados).
5. **Proceso de trabajo** — cuatro pasos numerados (Consultamos, Diseñamos, Elaboramos, Entregamos).
6. **Colecciones destacadas** — Aurora Eterna, Raíces, Herencia.
7. **Llamada a la acción** — invitación a agendar consulta.
8. **Contacto** — formulario funcional como demostración (JavaScript puro, sin backend), con mensaje de confirmación.
9. **Footer** — logo, eslogan y copyright con el año generado automáticamente por JavaScript.

## Detalles técnicos

- HTML5, CSS3 y JavaScript puro (sin frameworks ni librerías externas, salvo la carga de fuentes de Google Fonts).
- Totalmente responsive (escritorio, tablet y móvil), con menú de navegación colapsable en pantallas pequeñas.
- Animaciones suaves: revelado de secciones al hacer scroll (`IntersectionObserver`), conteo animado de estadísticas y gema giratoria en el hero.
- Accesibilidad: foco visible en elementos interactivos, `aria-*` en el menú y el formulario, y soporte para `prefers-reduced-motion`.
- Paleta: negro obsidiana cálido, vetas moradas, oro antiguo, verde esmeralda y acentos en granate.
- Tipografía: **Cormorant Garamond** (títulos, serif elegante) y **Jost** (cuerpo, sans-serif limpia).

## Personalización rápida

- **Colores**: editar las variables CSS al inicio de `css/styles.css` (bloque `:root`).
- **Textos e imágenes de colecciones**: editar directamente en `index.html`, sección `#colecciones`.
- **Formulario**: actualmente es una demostración en el navegador (`js/main.js`). Para conectarlo a un backend real, reemplazar la lógica dentro del listener `submit` por una petición `fetch` a tu servicio de correo o API.
