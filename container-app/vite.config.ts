import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { dependencies } from "./package.json";

export default defineConfig(() => ({
  server: {
    port: 3001,
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
          entry: "http://localhost:3002/remoteEntry.js",
          entryGlobalName: "login",
          shareScope: "default",
        },
        registration: {
          type: "module",
          name: "registration",
          entry: "http://localhost:3003/remoteEntry.js",
          entryGlobalName: "registration",
          shareScope: "default",
        },
        reduxStore: {
          type: "module",
          name: "reduxStore",
          entry: "http://localhost:3000/remoteEntry.js",
          entryGlobalName: "reduxStore",
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
