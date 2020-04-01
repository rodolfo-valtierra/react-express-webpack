const path = require('path');
var nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const serverConfig = {
    mode: process.env.NODE_ENV || 'development',
    entry: ['babel-polyfill','./src/server/server.js'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js'
    },
    target: 'node',
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false,   // if you don't put this is, __dirname
      __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    module: {
      rules: [
        {
          // Transpiles ES6-8 into ES5
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    }
};

const clientConfig = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/client/index.js',
    output: {
        path:  path.resolve(__dirname, 'public/js'),
        filename: 'app.js'
    },
    devServer: {
      historyApiFallback: true
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(css|sass|scss)$/,
          use: [
              'style-loader',
              'css-loader',
              'sass-loader',
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        }
      ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
};

module.exports = [serverConfig, clientConfig];
