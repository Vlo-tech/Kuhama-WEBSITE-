import { defineConfig } from 'vite'

export default defineConfig({
  root: 'my-app/public', // Ensure this path points to the directory containing index.html
  build: {
    outDir: '../../dist', // Output directory for the build
    rollupOptions: {
      input: 'my-app/public/index.html', // Ensure the path to index.html is correct
    },
  },
})
