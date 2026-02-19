import { defineConfig } from 'tsup'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  entry: ['src/index.ts', 'src/server.ts'],
  format: ['cjs', 'esm'],
  dts: false, // Generate with tsc instead due to tsup DTS issues
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', '@phosphor-icons/react'],
  injectStyle: false,
  treeshake: true,
  esbuildOptions(options) {
    options.logOverride = { 'this-is-undefined-in-esm': 'silent' }
  },
  // Add 'use client' directive to the main bundle only (not server)
  // This is required for Next.js App Router / RSC to properly handle the package
  async onSuccess() {
    const distDir = join(process.cwd(), 'dist')
    // Only add "use client" to the main index bundle, NOT the server bundle
    const files = ['index.js', 'index.mjs']

    for (const file of files) {
      const filePath = join(distDir, file)
      try {
        const content = readFileSync(filePath, 'utf-8')
        // Only add if not already present
        if (!content.startsWith('"use client"')) {
          writeFileSync(filePath, `"use client";\n${content}`)
          console.log(`Added "use client" directive to ${file}`)
        }
      } catch (e) {
        console.error(`Failed to process ${file}:`, e)
      }
    }
  },
})
