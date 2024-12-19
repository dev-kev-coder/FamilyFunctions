const path = require('path');

module.exports = {
  entry: './src/index.jsx', // Entry point of your application
  output: {
    path: path.resolve(__dirname, '../Server/wwwroot/js/reactapps'),
    filename: 'main.js', // Output bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // If you plan to use CSS
        use: ['style-loader', 'css-loader'],
      },
      // Add other loaders (e.g., for images) if needed
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
};
