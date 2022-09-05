import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

const dirname = __dirname || import.meta.url;

console.log("dirname: ", dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(dirname, "src"),
    },
  },
});