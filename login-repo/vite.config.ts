import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { dependencies } from "./package.json";

export default defineConfig(() => {
  return {
    server: {
      port: 3001,
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
        remotes: {},
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
