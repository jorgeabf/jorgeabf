import { defineConfig, fontProviders } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://jorgearce.dev',
  integrations: [sitemap()],
  // Todo el CSS en línea: por defecto, una hoja de más de 4 KB sale aparte y bloquea el pintado
  build: {
    inlineStylesheets: 'always'
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Encode Sans Expanded',
      cssVariable: '--fuente-titulos',
      weights: [700],
      styles: ['normal'],
      subsets: ['latin'],
      options: {
        // Sólo lo que sale en el nombre y los títulos: el castellano y sus signos.
        // Un carácter que no esté aquí se pinta con la fuente de reserva.
        experimental: {
          glyphs: [
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'abcdefghijklmnopqrstuvwxyz',
            '0123456789',
            'ÁÉÍÓÚÜÑáéíóúüñ',
            ' ¿¡?!.,:;()-–«»\'"/&+'
          ]
        }
      }
    }
  ]
})
