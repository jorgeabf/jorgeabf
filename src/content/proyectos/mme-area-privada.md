---
nombre: Área privada del Máster en Medicina de Emergencia
tipo: aplicacion
url: https://app.masteremergencias.com
resumen: Plataforma del alumnado y el profesorado del máster, con los cursos, las grabaciones de las clases, los mensajes de cada curso y las prácticas.
destacados:
  - Acceso con un código por email, para unas 50 personas
  - Grabaciones de Zoom publicadas solas
  - Resúmenes por email y prácticas con cupos
  - Sin React ni Tailwind
stack:
  - Astro 7 SSR
  - Cloudflare Workers
  - D1
  - R2
  - Zoom
  - Brevo
inicio: '2022-11'
acceso: privado
imagen: ./mme-area-privada.webp
alt: Pantalla de acceso del área privada, con el campo del email para recibir un código
orden: 4
publicar: true
---

Es la plataforma privada del Máster en Medicina de Emergencia. El alumnado y el profesorado entran con un código que reciben por email, sin contraseñas, y encuentran los cursos, las grabaciones de las clases, los canales de mensajes de cada curso, las prácticas y las novedades. La usan como mucho unas 50 personas. La imagen enseña sólo la pantalla de acceso.

## Cómo está hecho

La aplicación corre en Cloudflare Workers con Astro, y guarda los datos en D1 y los archivos en R2, los dos en la Unión Europea. Las grabaciones de Zoom llegan por un webhook, y un cron las copia a R2 y las publica solas, sin que nadie tenga que subirlas; en total hay cuatro crons. Los resúmenes por email salen con Brevo, y las prácticas tienen cupos y permiten intercambiar plazas.

La primera versión es de noviembre de 2022. En septiembre de 2026 la reescribí desde cero, ya sin React ni Tailwind: el CSS es propio, y las transiciones entre páginas son las nativas del navegador, con `@view-transition`. La política de seguridad de contenidos no admite nada en línea, así que todo el CSS y el JavaScript van en archivos. Al cerrar una edición se borran sus datos de Zoom, D1 y R2.
