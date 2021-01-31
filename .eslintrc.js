module.exports = {
  root: true,
  env: {
    'react-native/react-native': true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'global-require': 0,
    'import/no-unresolved': [2, {caseSensitive: false}],
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'react-hooks/exhaustive-deps': 0,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
    '@react-native-community',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.ios.js', '.android.js', '.json'],
        alias: {
          '#assets': './src/assets',
          '#components': './src/components',
          '#core': './src/core',
          '#features': './src/features',
          '#navigations': './src/navigations',
          '#services': './src/services',
          '#utils': './src/utils',
          '#globals': './src/globals',
          '#translations': './translations',
        },
      },
    },
  },
};
