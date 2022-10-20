import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

// https://astro.build/config
export default defineConfig({
    site: 'https://gmohughes.github.io',
    base: '/arcological-website'
});


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {

  // all the usual config goes here...

  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // path to your scss variables
          additionalData: `@import "@/src/assets/scss/global.scss";`
        }
      }
    }
  }
};
