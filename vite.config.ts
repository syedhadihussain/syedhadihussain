import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { execSync } from "child_process";

// Sitemap generator plugin - runs before build
function sitemapGeneratorPlugin(): Plugin {
  return {
    name: 'sitemap-generator',
    buildStart() {
      console.log('📍 Generating sitemaps...');
      try {
        execSync('npx tsx scripts/generate-sitemap.ts', { 
          stdio: 'inherit',
          cwd: process.cwd()
        });
        console.log('✅ Sitemaps generated successfully');
      } catch (error) {
        console.warn('⚠️ Sitemap generation failed:', error);
        // Don't fail the build if sitemap generation fails
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    sitemapGeneratorPlugin(),
    react(), 
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
