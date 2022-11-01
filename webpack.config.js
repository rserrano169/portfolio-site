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
        directory: path.join(__dirname, 'src'),
      },
    },
    entry: './src/app.js',
    // mode: 'development',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(sc|sa|c)ss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.(png|jpe?g|gif|pdf)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    output: {
      clean: true,
      filename: 'app.bundle.js',
      path: path.resolve(__dirname, 'dist/build'),
    },
  };
};