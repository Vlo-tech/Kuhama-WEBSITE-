import { defineConfig } from 'vite'

export default defineConfig({
  root: 'public', // Ensure this path points to the directory containing index.html
  build: {
    outDir: '../dist', // Output directory for the build
    rollupOptions: {
      input: 'public/index.html', // Ensure the path to index.html is correct
    },
  },
})
