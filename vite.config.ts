import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "/key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "/cert.pem")),
    },
    port: 443,
    host: "192.168.0.20",
  },
});
