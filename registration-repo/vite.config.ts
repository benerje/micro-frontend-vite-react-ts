import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { dependencies } from "./package.json";

export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 3003,
      fs: {
        allow: [".", "../shared"],
      },
    },
    build: {
      target: "chrome89",
    },
    plugins: [
      federation({
        filename: "remoteEntry.js",
        name: "remote",
        exposes: {
          "./remote-app": "./src/App.tsx",
        },
        remotes: {
          reduxStore: {
            type: "module",
            name: "reduxStore",
            entry: "http://localhost:3000/remoteEntry.js",
            entryGlobalName: "reduxStore",
            shareScope: "default",
          },
        },
        shared: {
          react: {
            requiredVersion: dependencies.react,
            singleton: true,
          },
        },
      }),
      react(),
    ],
  };
});
