module.exports = {
  env: {
    commonjs: true,
    node: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'import/no-unresolved': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-plusplus': 0,
    'max-len': 0,
    'comma-dangle': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['^@', './']],
      },
    },
  },
};
