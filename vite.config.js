import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Desactiva sourcemaps
    chunkSizeWarningLimit: 1000, // Aumenta el límite de chunk
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
      treeshake: {
        moduleSideEffects: false, // Asegura que no se incluyan módulos sin efectos colaterales
        propertyReadSideEffects: false, // Optimiza aún más el treeshaking
      },
    },
  },
})
