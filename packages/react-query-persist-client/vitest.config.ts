import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'react-query-persist-client',
    watch: false,
    setupFiles: ['test-setup.ts'],
    environment: 'jsdom',
    globals: true,
  },
})
