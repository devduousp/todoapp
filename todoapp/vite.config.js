import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // <-- This makes it bind to 0.0.0.0 instead of localhost
    port: 5173, // optional: you can fix the port if needed
  },
});
