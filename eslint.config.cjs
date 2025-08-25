module.exports = {
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'script',
  },
  rules: {
    // minimal rules to allow the project to lint without strict enforcements
    'no-unused-vars': 'warn',
    'no-undef': 'error',
  },
};
