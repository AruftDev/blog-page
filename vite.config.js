import { defineConfig } from "vite"

export default defineConfig({
  root: "src",
  publicDir: "../public",
  plugins: [],
  css: {
    transformer: "lightningcss",
    lightningcss: {
      drafts: {
        customMedia: true,
      },
    },
  },
  server: {
    port: 1234
  },
  build: {
    outDir: "../dist",
  }
})
