import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: "./key.pem",
      cert: "./cert.pem",
    },
    port: 443,
    host: "192.168.0.20",
  },
});
