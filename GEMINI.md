# Directrices del Proyecto Web (Portafolio Javier Flores)

## 1. Identidad Visual y Esencia
- **Colores:** Mantener el fondo oscuro (`#0f131f` o zinc-900) y acentos en cyan (`#00e5ff`) para un look de ingeniería/tecnología. 
- **Paleta de Secciones:** En los listados de secciones o tarjetas del índice, utilizar exclusivamente los tonos azul (`#6fc3df`) y púrpura (`#8d82c4`) siguiendo estrictamente el patrón rítmico: **1 azul, 2 púrpuras, 2 azules, 2 púrpuras** y así consecutivamente, evitando colores discordantes.
- **Tipografía (Estilo Run Rob Run):** Usa fuentes sans-serif o monoespaciadas gruesas para los títulos (ej. `font-black`). Implementa tipografía fluida usando `clamp()` para que los títulos grandes escalen dramáticamente en escritorio y se adapten a móviles.
- **Layout (Estilo Run Rob Run):** Transiciona los contenedores clásicos hacia un sistema de cuadrícula (`grid-cols-12`). Usa bordes sutiles (`border-zinc-800`) para separar secciones horizontalmente, dándole un toque editorial y estructurado.

## 2. Experiencia Inmersiva (Estilo Zero University)
- **Audio Ambiental:** La página debe incluir un HUD (Head-Up Display) flotante y minimalista con un botón para activar/desactivar un "Soundscape" ambiental generado con la Web Audio API.
- **Interactividad:** El audio ambiental debe modularse sutilmente con el evento de *scroll* (ej. abrir un filtro pasa-bajas al bajar por la página).
- **Aislamiento de Audio:** Los contextos de audio del HUD ambiental deben ser independientes de las herramientas de trabajo (Metrónomo, Afinador, RTA) para evitar conflictos.

## 3. SEO Técnico e Internacionalización (i18n)
- Mantener soporte bilingüe (Español / Inglés) usando variables o la estructura de carpetas de Astro (`/en/`).
- Mantener jerarquía estricta de H1, H2, H3.

## 4. Stack Técnico
- Astro (SSG), HTML5 semántico, CSS Vanilla o Tailwind CSS v4.
- Optimización de Core Web Vitals (imágenes lazy/async).
