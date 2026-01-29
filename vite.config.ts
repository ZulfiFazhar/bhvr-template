import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), cloudflare(), tailwindcss()],
  resolve: {
    alias: {
      "@client": path.resolve(__dirname, "./src/client"),
      "@server": path.resolve(__dirname, "./src/server"),
    },
  },
});
