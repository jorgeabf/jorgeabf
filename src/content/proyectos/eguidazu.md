---
nombre: Club de Ajedrez Eguidazu
tipo: sitio
url: https://www.ajedrezeguidazu.com
resumen: Web del club, con sus torneos, el palmarés, el ranking FIDE de sus jugadores, una calculadora de ELO y un portal de socios.
destacados:
  - Más de 180 fichas de torneo en YAML
  - Ranking FIDE generado y calculadora de ELO
  - Recompilación nocturna con GitHub Actions
  - Portal de socios con inscripción tras contraseña
stack:
  - Astro 7
  - funciones de Vercel
  - Google Sheets
inicio: '2022-08'
acceso: con-zona-privada
peso:
  kb: 158
  peticiones: 8
  js: 1
  medido: '2026-11'
imagen: ./eguidazu.webp
alt: Portada del Club de Ajedrez Eguidazu, con un tablero de fondo
orden: 3
publicar: true
---

La web del club reúne sus torneos, el palmarés, el ranking FIDE de sus jugadores con una calculadora de ELO, la información del club y un portal para los socios.

## Cómo está hecho

Es un sitio estático con Astro, en Vercel. Las más de 180 fichas de torneo son archivos YAML que se validan con un esquema: si uno no cuadra, la compilación falla. El ranking se genera con los datos de FIDE, y una tarea de GitHub Actions recompila la web cada noche con un Deploy Hook para que esté al día.

Sólo el portal de socios, en `/socios`, se renderiza en el servidor, con una función de Vercel. Tras una contraseña, los socios se inscriben en los torneos. Las inscripciones van a una hoja de Google Sheets que se escribe sin el SDK de Google, y el formulario funciona también sin JavaScript. La sesión se guarda en una cookie firmada, nunca la contraseña.

El portal sustituyó en noviembre de 2026 a una aplicación aparte que vivía en un subdominio. El menú del móvil usa el popover nativo del navegador.
