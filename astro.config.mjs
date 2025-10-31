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
              label: 'Matriz de Decisión Rápida - Alta de Cliente',
              slug: 'gestion/matriz-decision-rapida-alta-de-cliente',
            },
            { label: 'Conectarse a VPN', slug: 'gestion/vpn-connection' },
            { label: 'Cambiar Contraseña', slug: 'gestion/change-password' },
            { label: 'FAQ', slug: 'gestion/faq' },
            { label: 'Tutoriales', slug: 'gestion/tutorials' },
          ],
        },
      ],
    }),
  ],
});
