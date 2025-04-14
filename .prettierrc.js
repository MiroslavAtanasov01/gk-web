module.exports = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: false,
  semi: true,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  overrides: [
    {
      files: "*.{js,jsx,tsx,ts,scss,json,html,vue}",
      options: {
        tabWidth: 2,
      },
    },
  ],
};
