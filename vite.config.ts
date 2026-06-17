import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "vite-plugin-prerender";

const Renderer = prerender.PuppeteerRenderer;

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      prerender({
        staticDir: path.join(__dirname, "dist"),
        routes: ["/", "/a-propos", "/conferences", "/neuromarketing-rennes", "/ateliers-du-futur"],
        renderer: new Renderer({
          headless: true,
          renderAfterTime: 2000,
        }),
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
