module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    context: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
      typescript: {},
    },
  },
  rules: {
    // Defaults
    'import/extensions': ['off'],
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    semi: ['error', 'always'],
    // Custom rules
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }], // for test code
    'import/order': [
      'error',
      {
        groups: ['external', 'internal'],
        'newlines-between': 'always',
      },
    ],
    // 필요 없어 보이는 jsx 관련 룰
    'react/jsx-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    // TODO apply rules
    'no-unused-vars': 'off',
    'no-proto': 'off',
    indent: ['error', 2],
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-useless-escape': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
  },
};
