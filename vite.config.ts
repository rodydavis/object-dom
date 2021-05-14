import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    lib: {
      entry: 'src/object-dom.ts',
      name: 'object-dom'
    }
  }
});
