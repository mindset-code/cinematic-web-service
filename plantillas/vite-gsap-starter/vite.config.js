import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base relativa para que funcione tanto en Firebase Hosting como en subcarpetas.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
