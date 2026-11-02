---
nombre: FADA (Federación Alavesa de Ajedrez)
tipo: sitio
url: https://www.fadaajedrez.com
resumen: Web de la federación, en castellano y euskera, con el calendario, las competiciones, las noticias, los documentos y el ranking de federados.
destacados:
  - Unas 360 páginas sin framework de cliente
  - Calendario y filtros hechos con CSS
  - Unos 380 tests, con axe-core sobre el build
  - Instalable como PWA
  - Lee los emparejamientos de la API de MapleChess
stack:
  - Astro 7
  - Netlify
  - Netlify Forms
inicio: '2025-11'
acceso: publico
imagen: ./fada.webp
alt: Portada de la Federación Alavesa de Ajedrez, con los avisos de emparejamientos e inscripciones
orden: 2
publicar: true
---

La web de la Federación Alavesa de Ajedrez publica el calendario, las competiciones (de Álava, de Euskadi, abiertos y escolares), las noticias, los documentos y el ranking de federados, en castellano y en euskera. Está en línea desde septiembre de 2026.

## Cómo está hecho

Son unas 360 páginas estáticas que genera Astro y sirve Netlify, sin ningún framework en el navegador: el calendario y los filtros de noticias funcionan con CSS, y sólo el menú, el cambio de tema y poco más llevan un script propio. Se puede instalar como aplicación (PWA), y el formulario de contacto usa Netlify Forms.

Una tarea de GitHub Actions la recompila cada noche. En cada compilación lee de MapleChess los emparejamientos de las rondas que vienen, con un tope de cinco segundos para no depender de él.

## Cómo se comprueba

Netlify sólo publica si pasan los tests: unos 380 con vitest, entre ellos una revisión de accesibilidad con axe-core sobre las páginas ya compiladas. El sitemap enlaza las dos lenguas con `hreflang`, y las direcciones del blog antiguo redirigen a las nuevas.
