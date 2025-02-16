import eguidazuImg from '../assets/eguidazuImg.webp'
import autoescuelaImg from '../assets/autoescuelaImg.webp'
import mmeImg from '../assets/mmeImg.webp'
import mmeAppImg from '../assets/mmeAppImg.webp'
import gespaImg from '../assets/gespaImg.webp'

interface Proyecto {
  href: string
  imagen: ImageMetadata
  alt: string
  proyecto: string
  fecha: string
}

export const proyectos: Proyecto[] = [
  {
    href: 'https://www.ajedrezeguidazu.com',
    imagen: eguidazuImg,
    alt: 'Sitio Web del Club Ajedrez Egidazu',
    proyecto: 'Web Club de Ajedrez',
    fecha: 'Diciembre 2021'
  },
  {
    href: 'https://www.autoescuelasanprudencio.com',
    imagen: autoescuelaImg,
    alt: 'Sitio Web Autoescuela San Prudencio',
    proyecto: 'Web Autoescuela',
    fecha: 'Octubre 2022'
  },
  {
    href: 'https://masteremergencias.com',
    imagen: mmeImg,
    alt: 'Landing Page Master en Medicina de Emergencia',
    proyecto: 'Landing Master Emergencias',
    fecha: 'Marzo 2022'
  },
  {
    href: 'https://app.masteremergencias.com',
    imagen: mmeAppImg,
    alt: 'Sitio Web Master en Medicina de Emergencia',
    proyecto: 'APP Master Emergencias',
    fecha: 'Marzo 2022'
  },
  {
    href: 'https://mastergespa.com',
    imagen: gespaImg,
    alt: 'Sitio Web Master en Gestión de Pacientes',
    proyecto: 'Web Master Gespa',
    fecha: 'Octubre 2023'
  }
]
