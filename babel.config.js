module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.jsx', '.js', '.json'],
        alias: {
          '#appRoot': './',
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
    ],
  ],
};
