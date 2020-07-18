module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          src: './src',
          components: './src/components',
          ui: './src/components/ui',
          services: './src/services',
          store: './src/store',
          types: './src/types',
        },
      },
    ],
  ],
};
