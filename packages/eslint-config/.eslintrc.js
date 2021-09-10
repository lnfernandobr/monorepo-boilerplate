module.exports = {
  parser: 'babel-eslint',
  extends: ['react-app', 'eslint:recommended'],
  rules: {
    indent: ['warn', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'import/no-anonymous-default-export': 'off',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
  },
};
