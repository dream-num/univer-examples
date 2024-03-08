import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: './',
    plugins: [react()],
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
            generateScopedName: 'univer-[local]',
          },
    },
    build: {
        rollupOptions: {
          input: {
            docs: resolve(__dirname, 'docs/index.html'),
            'docs-multi': resolve(__dirname, 'docs-multi/index.html'),
            'docs-uniscript': resolve(__dirname, 'docs-uniscript/index.html'),
            'sheets': resolve(__dirname, 'sheets/index.html'),
            'sheets-multi': resolve(__dirname, 'sheets-multi/index.html'),
            'sheets-uniscript': resolve(__dirname, 'sheets-uniscript/index.html'),
          },
        },
      },
  })