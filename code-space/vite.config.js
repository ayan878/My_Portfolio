import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  optimizeDeps: {
    include: [
      "react-responsive",
      "@tsparticles/react",
      "tsparticles",
      "lucide-react",
      "react-scroll",
    ],
  },
  build: {
    rollupOptions: {
      input: "./index.html",
    },
  },
  server: {
    port: 3000,
  },
});
