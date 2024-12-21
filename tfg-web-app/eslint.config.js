import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Aplicar reglas a todos los archivos relevantes
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  // Configuración base de JavaScript
  pluginJs.configs.recommended,
  // Configuración para TypeScript
  {
    ...tseslint.configs.recommended,
    rules: {
      // Aquí puedes personalizar las reglas para TypeScript
    },
  },
  // Configuración para React
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off", // Desactiva la regla que exige React en el scope
      "react/prop-types": "off", // Opcional, si no utilizas PropTypes
    },
    settings: {
      react: {
        version: "detect", // Detecta automáticamente la versión de React instalada
      },
    },
  },
];
