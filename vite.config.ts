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
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: true,
        pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : [],
      },
    },
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Core vendor chunk
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          // UI library chunk
          'vendor-ui': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip',
          ],
          // Utilities chunk
          'vendor-utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
        },
      },
    },
    // Target modern browsers
    target: 'esnext',
    // Enable source maps for production debugging
    sourcemap: mode === 'development',
    // CSS code splitting
    cssCodeSplit: true,
    // Asset size warning threshold
    chunkSizeWarningLimit: 500,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@tanstack/react-query'],
  },
}));
