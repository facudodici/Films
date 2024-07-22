const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'index.html', to: '' },
        { from: 'pages/*.html', to: '' },
        { from: 'styles/*.css', to: '' },
      ],
    }),
  ],
  mode: 'production',
};
