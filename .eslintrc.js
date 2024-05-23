module.exports = {
    env: {
      browser: false,
      es2021: true,
      node: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    rules: {
      // Add custom rules here
      //"@typescript-eslint/no-unused-vars": "off"
    },
    ignorePatterns: ['dist/', 'node_modules/', 'coverage/'],
  };
  