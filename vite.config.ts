import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

function copyStaticAssets() {
  return {
    name: "copy-static-assets",
    closeBundle() {
      const distDir = resolve("dist");
      const assets = [
        "img",
        "portfolio",
        "favicon.png",
        "favicon.ico",
        "Kishan-Dharajiya-Mobile-Developer-Resume.pdf",
      ];

      for (const asset of assets) {
        const source = resolve(asset);
        if (!existsSync(source)) continue;
        cpSync(source, resolve(distDir, asset), { recursive: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyStaticAssets()],
  base: process.env.GITHUB_PAGES ? "/" : "./",
});
