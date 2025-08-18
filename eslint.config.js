// eslint.config.js

// Import all necessary plugins and their configurations
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginJest from "eslint-plugin-jest";
import pluginTestingLibrary from "eslint-plugin-testing-library";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    // Apply recommended rules for JS, React, and a11y to all JS/JSX files
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: pluginReact,
      "jsx-a11y": pluginJsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginJsxA11y.configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
  {
    // Apply rules for test files only
    files: ["**/*.test.{js,jsx}"],
    plugins: {
      jest: pluginJest,
      "testing-library": pluginTestingLibrary,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
      ...pluginTestingLibrary.configs.react.rules,
    },
  },
]);