import js from "@eslint/js";
import globals from 'globals';

export default [
  js.configs.recommended,

  {
    files: ["src/**/*.js"],
    ignores: ["**/*.test.js", ".config/*"],
    languageOptions: {
      globals: {
        ...globals.node,
      }
    },
    rules: {
      semi: "warn",
      "prefer-const": "warn",
      "no-unused-vars": "warn",
        "no-undef": "error",
      "eqeqeq": "error",
      "no-var": "error",
      "no-console": "warn",
      "no-duplicate-imports": "error",
      "no-template-curly-in-string": "error",
      "camelcase": "warn",
      "max-len": ["warn", { "code": 100 }]
    }
  }
];
