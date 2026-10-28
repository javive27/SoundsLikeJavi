# Directrices del Proyecto Web (Portafolio Javier Flores)

## 1. Identidad Visual, Esencia y Ritmo de Color
- **Colores Principales:** Mantener el fondo oscuro (`#0f131f` o zinc-900) y acentos en cyan (`#00e5ff`) para un look de ingeniería, tecnología y audio profesional.
- **Paleta de Secciones (Ritmo Estricto):** En los listados de secciones o tarjetas del índice (`.tiles`), utilizar exclusivamente los tonos azul (`#6fc3df`) y púrpura (`#8d82c4`) siguiendo estrictamente el patrón rítmico: **1 azul, 2 púrpuras, 2 azules, 2 púrpuras** (`#6fc3df`, `#8d82c4`, `#8d82c4`, `#6fc3df`, `#6fc3df`, `#8d82c4`) y así consecutivamente, evitando colores discordantes.
- **Tipografía y Jerarquía Fluida:** Usar fuentes sans-serif (ej. `Source Sans Pro`) y monoespaciadas para metadatos técnicos. Implementar tipografía fluida con `clamp()` para que los títulos principales escalen dramáticamente en escritorio y mantengan legibilidad impecable en dispositivos móviles.
- **Micro-interacciones y Transiciones:** Toda transición de hover en tarjetas, botones y elementos interactivos debe ser suave (`0.25s ease`), con efectos de profundidad (backdrop blur, opacidad sutil en gradientes y elevación controlada).

## 2. Experiencia Inmersiva y Crafteo UI (Estilo Experience / Impeccable)
- **Audio Ambiental:** La página incluye un HUD (Head-Up Display) flotante y minimalista con controles independientes para el soundscape ambiental generado con la Web Audio API.
- **Modulación por Scroll:** El audio ambiental se modula sutilmente con el evento de *scroll* (filtros pasa-bajas dinámicos).
- **Aislamiento de Contextos:** Los contextos de audio ambiental nunca deben colisionar con las herramientas de trabajo (Metrónomo, Afinador, RTA).
- **Densidad Visual y Claridad:** Priorizar la jerarquía visual limpia, el contraste accesible (WCAG AA mínimo) y el rendimiento en animaciones (hardware-accelerated transforms).

## 3. SEO Técnico e Internacionalización (i18n)
- Soporte bilingüe estricto (Español / Inglés) utilizando la estructura de carpetas de Astro (`/en/` y `/es/`) con etiquetas hreflang y URLs canónicas.
- Jerarquía semántica estricta de encabezados (`H1`, `H2`, `H3`).

## 4. Stack Técnico y Rendimiento
- Astro (SSG), HTML5 semántico, CSS Vanilla y Tailwind CSS v4.
- Optimización rigurosa de Core Web Vitals: imágenes responsivas en formato WebP con carga diferida (`loading="lazy"`, `decoding="async"`) y prioridad alta para elementos hero (`fetchpriority="high"`).
