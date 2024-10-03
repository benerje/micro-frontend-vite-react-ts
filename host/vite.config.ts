import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { dependencies } from "./package.json";

export default defineConfig(() => ({
  server: {
    port: 3000,
    fs: { allow: [".", "../shared"] },
  },
  build: {
    target: "chrome89",
  },
  plugins: [
    federation({
      name: "host",
      remotes: {
        login: {
          type: "module",
          name: "login",
          entry: "http://localhost:3001/remoteEntry.js",
          entryGlobalName: "login",
          shareScope: "default",
        },
        registration: {
          type: "module",
          name: "registration",
          entry: "http://localhost:3002/remoteEntry.js",
          entryGlobalName: "registration",
          shareScope: "default",
        },
      },
      exposes: {},
      filename: "remoteEntry.js",
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
      },
    }),
    react(),
  ],
}));
