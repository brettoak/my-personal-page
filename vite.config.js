import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),viteSingleFile()],
  build: {
    cssCodeSplit: false,
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false, // remove comments
      },
      compress: true,    // compress code
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
      }
    }
  }
})
