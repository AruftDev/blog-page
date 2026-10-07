import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
  base: "/blog-page/",
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
    cssMinify: "lightningcss",
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "src/index.html"),
        posts: resolve(import.meta.dirname, "src/pages/post-page/index.html"),
      },
    },
  }
})
