module.exports = {
  parserOptions: {
    ecmaVersion: 2021, // Use the desired ECMAScript version
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  rules: {
    // Additional rules and overrides can be added here
  },
};
