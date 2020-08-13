module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    indent: [
      'warn',
      2,
    ],
    'no-plusplus': 'off',
    'import/no-unresolved': 'off',
    'linebreak-style': 'off',
  },
  overrides: [
    {
      files: [
        'src/**/*.vue',
      ],
    },
  ],
};
