
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Agora Knowledge Base',

      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        'pt-br': {
          label: 'Português (Brasil)',
          lang: 'pt-BR',
        },
      },
      logo: {
        light: './src/assets/agora-dark-logo-no-background.png',
        dark: './src/assets/agora-light-logo-no-background.png',
        alt: 'Agora',
      },
      customCss: ['./src/styles/custom.css'],
      description:
        'An educational and reference resource focused on Cardano governance and its institutional environment.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Agora-Cardano/knowledge-base',
        },
      ],
      sidebar: [],
    }),
  ],
});
