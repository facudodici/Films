const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Ajusta si es necesario
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Ajusta si es necesario
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: 'public' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

