import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Force Vite to use JavaScript Rollup instead of native binaries
process.env.VITE_ROLLUP_NATIVE = 'false'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          router: ['react-router-dom'],
          animation: ['framer-motion', 'gsap', 'aos'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    minify: 'esbuild',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@mui/material', '@mui/icons-material'],
  },
  esbuild: {
    target: 'esnext',
  },
  define: {
    'process.env.VITE_ROLLUP_NATIVE': JSON.stringify('false'),
  },
})
