import eguidazuImg from './images/eguidazuImg.png'
import autoescuelaImg from './images/autoescuelaImg.png'
import mmeImg from './images/mmeImg.png'
import mmeAppImg from './images/mmeAppImg.png'
import gespaImg from './images/gespaImg.png'

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
    href: 'https://www.masteremergencias.com',
    imagen: mmeImg,
    alt: 'Landing Page Master en Medicina de Emergencia',
    proyecto: 'Landing Master Emergencias',
    fecha: 'Marzo 2022'
  },
  {
    href: 'https://www.masteremergencias.com.es',
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
