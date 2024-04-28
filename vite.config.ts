import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'node:child_process';

import { univerPlugin } from '@univerjs/vite-plugin'
// Get git commit hash and ref name
const gitCommitHash = execSync('git rev-parse --short HEAD').toString().trim();
const gitRefName = execSync('git symbolic-ref -q --short HEAD || git describe --tags --exact-match').toString().trim();

export default defineConfig({
    base: './',
    plugins: [react(),univerPlugin()],
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
            generateScopedName: 'univer-[local]',
          },
    },
    build: {
        rollupOptions: {
          input: {
            index: resolve(__dirname, 'index.html'),
            docs: resolve(__dirname, 'docs/index.html'),
            'docs-multi': resolve(__dirname, 'docs-multi/index.html'),
            'docs-uniscript': resolve(__dirname, 'docs-uniscript/index.html'),
            'docs-big-data': resolve(__dirname, 'docs-big-data/index.html'),
            'sheets': resolve(__dirname, 'sheets/index.html'),
            'sheets-multi': resolve(__dirname, 'sheets-multi/index.html'),
            'sheets-uniscript': resolve(__dirname, 'sheets-uniscript/index.html'),
            'sheets-big-data': resolve(__dirname, 'sheets-big-data/index.html'),
            'slides': resolve(__dirname, 'slides/index.html'),
          },
        },
      },
      define:{
        'process.env.GIT_COMMIT_HASH': `"${gitCommitHash}"`,
        'process.env.GIT_REF_NAME': `"${gitRefName}"`,
        'process.env.BUILD_TIME': `"${new Date().toISOString()}"`,
      }
  })