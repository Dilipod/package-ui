import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false, // Generate with tsc instead due to tsup DTS issues
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  injectStyle: false,
  treeshake: true,
  esbuildOptions(options) {
    options.logOverride = { 'this-is-undefined-in-esm': 'silent' }
  },
})
