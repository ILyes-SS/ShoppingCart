import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, //dont have to import expect
    environment: "jsdom", //can use html react
    setupFiles: "./tests/setup.js",
  },
});
