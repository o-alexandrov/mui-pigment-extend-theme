import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import { pigment } from "@pigment-css/vite-plugin";
import { theme } from "./src/theme";

export default defineConfig(() => ({
  plugins: [
    pigment({
      theme,
      transformLibraries: [
        // "@pigment-css/react",
        "@mui/material",
      ],
    }),
    react(),
  ],
  optimizeDeps: {
    include: [
      "prop-types",
      "react-is",
      "hoist-non-react-statics",
      "react",
      "react-dom",
      "@emotion/react",
      "@emotion/styled",
    ],
    exclude: ["@mui/material"],
  },
}));
