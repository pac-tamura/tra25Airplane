import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // TypeScript関連の警告を無視
        if (warning.code === 'TYPESCRIPT_ERRORS') return
        warn(warning)
      }
    }
  },
  esbuild: {
    // TypeScriptエラーを無視してビルド続行
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})