import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@_asset', replacement: resolve(__dirname, 'src/assets') },
      {
        find: '@_component',
        replacement: resolve(__dirname, 'src/components'),
      },
      { find: '@_constant', replacement: resolve(__dirname, 'src/constants') },
      { find: '@_context', replacement: resolve(__dirname, 'src/contexts') },
      { find: '@_hook', replacement: resolve(__dirname, 'src/hooks') },
      { find: '@_lib', replacement: resolve(__dirname, 'src/lib') },
      { find: '@_style', replacement: resolve(__dirname, 'src/styles') },
      { find: '@_util', replacement: resolve(__dirname, 'src/utils') },
      { find: '@_type', replacement: resolve(__dirname, 'src/types') },
    ],
  },
});
