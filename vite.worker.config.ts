import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist/server",
    emptyOutDir: false,
    lib: {
      entry: "worker/index.ts",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
      },
    },
  },
});
