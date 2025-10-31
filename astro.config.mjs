// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    starlight({
      title: 'GestionDocs',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      sidebar: [
        {
          label: 'Gestion',
          items: [
            {
              label: 'Guía para generación de documentos en MDX',
              slug: 'gestion',
            },
            {
              label: 'Matriz de Decisión Rápida - Alta de Cliente',
              slug: 'gestion/matriz-decision-rapida-alta-de-cliente',
            },
          ],
        },
      ],
    }),
  ],
});
