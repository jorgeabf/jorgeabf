import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// 'AAAA-MM', entre comillas en el frontmatter
const mes = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Formato AAAA-MM')
const https = z.url({ protocol: /^https$/ })

const proyectos = defineCollection({
  // Un .md por proyecto; los que empiezan por _ no se cargan
  loader: glob({ pattern: ['*.md', '!_*.md'], base: './src/content/proyectos' }),
  schema: ({ image }) =>
    z.object({
      nombre: z.string(),
      tipo: z.enum(['aplicacion', 'sitio']),
      url: https,
      resumen: z.string().max(160),
      destacados: z.array(z.string()).max(5).default([]),
      stack: z.array(z.string()).min(1),
      inicio: mes,
      fin: mes.optional(),
      acceso: z.enum(['publico', 'con-zona-privada', 'privado']),
      // Sólo si el repositorio es público
      repo: https.optional(),
      licencia: z.string().optional(),
      // La portada de la web a 1280×720, con la caché vacía y sin desplazar:
      // lo transferido y lo que es JavaScript, en KB, y el número de peticiones
      peso: z
        .object({
          kb: z.number().int().positive(),
          peticiones: z.number().int().positive(),
          js: z.number().int().nonnegative(),
          medido: mes
        })
        .optional(),
      imagen: image(),
      alt: z.string(),
      orden: z.number().int().positive(),
      publicar: z.boolean().default(true)
    })
})

export const collections = { proyectos }
