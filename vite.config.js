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
          mui: ['@mui/material'],
          router: ['react-router-dom'],
          animation: ['framer-motion', 'gsap', 'aos'],
        },
      },
      external: (id) => {
        // Don't externalize Babel runtime helpers
        if (id.includes('@babel/runtime')) {
          return false;
        }
        return false;
      },
    },
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    minify: 'esbuild',
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      '@mui/material'
    ],
    force: true
  },
  esbuild: {
    target: 'esnext',
  },
  define: {
    'process.env.VITE_ROLLUP_NATIVE': JSON.stringify('false'),
  },
  resolve: {
    alias: {
      '@babel/runtime/helpers/createSuper': '@babel/runtime/helpers/createSuper',
      '@babel/runtime/helpers/inherits': '@babel/runtime/helpers/inherits',
      '@babel/runtime/helpers/possibleConstructorReturn': '@babel/runtime/helpers/possibleConstructorReturn',
      '@babel/runtime/helpers/getPrototypeOf': '@babel/runtime/helpers/getPrototypeOf',
    },
  },
})
