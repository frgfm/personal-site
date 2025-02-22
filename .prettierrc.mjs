export default {
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  overrides: [
    {
      files: '*.{ts,tsx}',
      parser: 'typescript',
    },
  ],
};
