import { getCollection, type CollectionEntry } from 'astro:content'

export type Proyecto = CollectionEntry<'proyectos'>

export async function getProyectos(): Promise<Proyecto[]> {
  const proyectos = await getCollection('proyectos', ({ data }) => data.publicar)
  return proyectos.sort((a, b) => a.data.orden - b.data.orden)
}

// Un proyecto tiene ficha si su .md lleva cuerpo
export const tieneFicha = (proyecto: Proyecto) => Boolean(proyecto.body?.trim())

export const enlace = (proyecto: Proyecto) =>
  tieneFicha(proyecto) ? `/portfolio/${proyecto.id}/` : proyecto.data.url

const meses = new Intl.DateTimeFormat('es', { month: 'long', year: 'numeric', timeZone: 'UTC' })

// '2026-10' → 'octubre de 2026'
export const mesLargo = (mes: string) => meses.format(new Date(`${mes}-01T00:00:00Z`))

export const textoTipo = ({ tipo, acceso }: Proyecto['data']) => {
  const nombre = tipo === 'aplicacion' ? 'Aplicación' : 'Sitio'
  if (acceso === 'privado') return `${nombre} ${tipo === 'aplicacion' ? 'privada' : 'privado'}`
  if (acceso === 'con-zona-privada') return `${nombre} con zona privada`
  return nombre
}

export const textoAcceso = {
  publico: 'Público',
  'con-zona-privada': 'Con zona privada',
  privado: 'Privado'
} as const

export const listaStack = (stack: string[]) =>
  new Intl.ListFormat('es', { style: 'long', type: 'conjunction' }).format(stack)
