import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js"],
    ignores: ["**/*.test.js", ".config/*"],
    rules: {
        semi: "warn",
        "prefer-const": "warn",
        "no-unused-vars": "warn",
        "no-undef": "warn"
    }
  }
];