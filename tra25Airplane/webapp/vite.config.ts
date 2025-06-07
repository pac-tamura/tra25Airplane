import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // TypeScript�֘A�̌x���𖳎�
        if (warning.code === 'TYPESCRIPT_ERRORS') return
        warn(warning)
      }
    }
  },
  esbuild: {
    // TypeScript�G���[�𖳎����ăr���h���s
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})