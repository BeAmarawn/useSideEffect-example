module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.js', 'tsconfig.json'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: ["./tsconfig.json"]
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true }],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-named-as-default': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
      { usePrettierrc: true },
    ],
    'class-methods-use-this': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js', '.tsx'] }],
    'react/no-array-index-key': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-param-reassign': 'off',
    'no-underscore-dangle': ['off'],
    'no-unused-vars': ['warn'],
    'no-console': 'off',
    'no-restricted-globals': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'react/forbid-prop-types': ['off'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      'babel-plugin-root-import': {
        rootPathPrefix: '@',
        rootPathSuffix: 'src',
      },
    },
  },
};
