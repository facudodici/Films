const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Ajusta esto según la ubicación de tu archivo de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Salida en la carpeta public
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: 'public' }, // Copia los archivos de public a public
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

