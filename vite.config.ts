import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [mkcert()],
  server: {
    open: true,
    port: 3000,
    https: true,
  },
});
