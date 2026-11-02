---
nombre: MapleChess
tipo: aplicacion
url: https://maplechess.es
resumen: Para preparar partidas de ajedrez. Reúne jugadores, torneos y partidas de España, con las aperturas de cada rival y un visor con Stockfish.
destacados:
  - Unos 98.000 jugadores, 8.700 torneos y 117.000 partidas
  - Carga nocturna con Workflows y reintentos por paso
  - Búsqueda sin tildes con FTS5
  - Stockfish 19 en un Web Worker, y piezas y fuente propias
  - Más de 700 tests con vitest en workerd, y CI
stack:
  - Astro 7 SSR
  - TypeScript
  - Cloudflare Workers
  - D1
  - Workflows
inicio: '2026-10'
acceso: publico
repo: https://github.com/jorgeabf/maplechess
licencia: GPL-3.0-or-later
imagen: ./maplechess.webp
alt: Portada de MapleChess, con el buscador de rivales y los últimos torneos con partidas
orden: 1
publicar: true
---

MapleChess reúne los datos del ajedrez de competición en España para que cualquiera pueda preparar su próxima partida: quién es el rival, qué aperturas juega, cómo le van y si suele apurarse con el reloj. Es gratis y no pide registro. A principios de noviembre de 2026 tenía unos 98.000 jugadores, 8.700 torneos y 117.000 partidas.

## Cómo está hecho

La web se renderiza en Cloudflare Workers con Astro y guarda los datos en D1. Cada noche, varios Workflows traen los torneos y las partidas nuevas por pasos: si uno falla, se reintenta ese paso sin repetir lo que ya se cargó. La búsqueda ignora las tildes con un índice FTS5.

Todo funciona sin JavaScript salvo el tablero y el motor. El visor usa chessground y chessops, y Stockfish 19 analiza en un Web Worker, en el propio navegador. Las piezas y la fuente de las figuras son propias.

## Cómo se comprueba

Más de 700 tests se ejecutan con vitest dentro de workerd, el mismo entorno que en producción, y una CI de GitHub Actions los pasa. El despliegue acaba con una prueba de humo, y otra tarea vigila dos veces al día que la carga nocturna haya ido bien. La política de seguridad de contenidos (CSP) lleva los hashes de los scripts y los estilos que genera Astro.
