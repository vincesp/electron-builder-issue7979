import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  main: {
    entry: 'src/main/index.js',
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    input: 'src/preload/index.js',
    build: {
      rollupOptions: {
        output: { format: 'cjs' },
      },
    },
  },
  renderer: {
    plugins: [vue()],
  },
})
