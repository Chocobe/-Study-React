import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

const dirname = __dirname ?? import.meta.url;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(dirname, "src"),
      "@api": path.resolve(dirname, "src", "api"),
      "@store": path.resolve(dirname, "src", "store"),
      "@router": path.resolve(dirname, "src", "router"),
      "@layouts": path.resolve(dirname, "src", "layouts"),
      "@pages": path.resolve(dirname, "src", "pages"),
      "@containers": path.resolve(dirname, "src", "containers"),
      "@components": path.resolve(dirname, "src", "components"),
    },
  },
});
