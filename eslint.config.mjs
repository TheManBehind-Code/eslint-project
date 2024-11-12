import js from '@eslint/js'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  js.configs.recommended,
  prettierRecommended,
  {
    files: ['src/**/*.js'],
    ignores: ['**/*.test.js', '.config/*'],
    rules: {
      semi: 'warn',
      'prefer-const': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
]
