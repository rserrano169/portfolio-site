const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  return {
    devServer: {
      compress: true,
      hot: true,
      open: true,
      port: env.port || '3000',
      static: {
        directory: path.join(__dirname, 'src/html'),
      },
    },
    entry: './src/js/app.js',
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(sc|sa|c)ss$/,
          use: [
            'css-loader',
            'sass-loader'
          ],
        },
      ],
    },
    output: {
      clean: true,
      filename: 'app.bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
};