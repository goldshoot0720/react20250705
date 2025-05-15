import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 或填入你電腦的區網 IP 如 '192.168.0.100'
    port: 5173,
  },
});
