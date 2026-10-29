# Directrices del Proyecto Web (Portafolio Javier Flores)

## 1. Identidad Visual, Esencia y Ritmo de Color
- **Colores Principales:** Mantener el fondo oscuro (`#0f131f`) y acentos en cyan profesional (`#00e5ff`) para un look de ingeniería, tecnología y audio de alta gama.
- **Paleta de Secciones (Ritmo Estricto):** En los listados de secciones o tarjetas del índice (`.tiles`), utilizar exclusivamente los tonos azul (`#6fc3df`) y púrpura (`#8d82c4`) siguiendo estrictamente el patrón rítmico: **1 azul, 2 púrpuras, 2 azules, 2 púrpuras** (`#6fc3df`, `#8d82c4`, `#8d82c4`, `#6fc3df`, `#6fc3df`, `#8d82c4`) y así consecutivamente.
- **Tipografía y Jerarquía Fluida:** Usar fuentes sans-serif (`Inter`, `Source Sans Pro`) y monoespaciadas para metadatos técnicos. Implementar tipografía fluida con `clamp(2.5rem, 5vw, 4rem)` para que los títulos principales escalen dramáticamente en escritorio y mantengan legibilidad impecable en dispositivos móviles.
- **Micro-interacciones y Transiciones:** Toda transición de hover en tarjetas, botones y elementos interactivos debe ser suave (`0.25s ease`), con efectos de profundidad (backdrop blur, opacidad sutil en gradientes y elevación controlada `translateY`).

## 2. Arquitectura de Páginas y Patrones UI Homologados
- **Hero Sections (`.engineering-hero`, `.music-hero`):** Contenedor centralizado `.hero-inner` con ancho máximo de `1200px`, padding superior generoso (`7rem 0 4rem 0`), etiqueta de categoría (`.hero-badge`), título principal con `clamp()`, subtítulo descriptivo (`#cbd5e1` / `#94a3b8`) y línea divisoria de gradiente completo (`3px`, `#00e5ff` a `#8d82c4`).
- **Grillas de Contenido (`.eng-grid`, `.music-grid`):** Layouts de dos columnas (`1fr 1fr`, gap de `4rem`) con alineación vertical centrada. Soportan la variante `.reverse` (inversión visual para ritmo editorial) y adaptación a una columna en dispositivos móviles (`<= 960px` / `900px`).
- **Tarjetas de Medios y Multimedia (`.media-card`, `.image-card`):** Superficies de vidrio oscuro (`#151b2b` o `rgba(15, 19, 31, 0.6)`), bordes sutiles (`1px solid rgba(255, 255, 255, 0.08)`), esquinas redondeadas (`12px`), sombras profundas y efecto hover con elevación (`translateY(-4px)` a `(-5px)`) y borde iluminado en cyan (`rgba(0, 229, 255, 0.4)`).
- **Insignias y Especificaciones (`.tech-specs`, `.spec-badge`):** Badges de especificación técnica con fondo translúcido, bordes en tono cyan/azul y esquinas redondeadas (`6px` o `20px`).
- **Botones de Acción (`.primary-btn`):** Botones con gradiente vibrante (`linear-gradient(135deg, #00e5ff, #0088cc)`), texto oscuro de alto contraste (`#0f131f`), bordes redondeados de `12px`, sombra difusa en cyan y transiciones suaves.

## 3. Experiencia Inmersiva y Crafteo UI (Estilo Experience / Impeccable)
- **Audio Ambiental:** HUD flotante y minimalista con controles independientes para el soundscape ambiental generado con la Web Audio API.
- **Modulación por Scroll:** Modulación sutil del audio ambiental mediante el evento de *scroll* (filtros pasa-bajas dinámicos).
- **Aislamiento de Contextos:** Los contextos de audio ambiental nunca deben colisionar con las herramientas de trabajo (Metrónomo, Afinador, RTA).
- **Densidad Visual y Claridad:** Jerarquía limpia, contraste accesible (WCAG AA mínimo) y rendimiento optimizado con transformaciones aceleradas por hardware.

## 4. SEO Técnico e Internacionalización (i18n)
- Soporte bilingüe estricto (Español / Inglés) utilizando la estructura de carpetas de Astro (`/` / `/en/` y `/es/`) con etiquetas hreflang y URLs canónicas sincronizadas.
- Jerarquía semántica estricta de encabezados (`H1`, `H2`, `H3`).

## 5. Stack Técnico y Rendimiento
- Astro (SSG), HTML5 semántico, CSS Vanilla y Tailwind CSS v4.
- Optimización rigurosa de Core Web Vitals: imágenes responsivas en formato WebP con carga diferida (`loading="lazy"`, `decoding="async"`) y prioridad alta para elementos hero (`fetchpriority="high"`).
