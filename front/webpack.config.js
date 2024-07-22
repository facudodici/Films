const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './scripts/index.js', // Ajusta la entrada según tu estructura
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: 'public' }, // Copia archivos estáticos
      ],
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
