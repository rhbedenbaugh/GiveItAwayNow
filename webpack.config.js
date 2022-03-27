const path =require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // production
  entry: {
    main: path.resolve(__dirname, 'frontend/src/Components/App.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.bundle.js',
    assetModuleFilename: '[name][ext]',
    cache: false,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 5001,  //default 8080
    open: true, //open default browser
    hot: true, //hot reloading
  },
  //loaders
  module: {
    rules: [
      //css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      //images
      {
        test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
        type:'asset/resource'
      },
      //js for babel
      {test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
    }
    ],
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'Stuff',
        filename: 'index.html',
        template: path.resolve(__dirname, 'frontend/src/temp.html')
      }
    ),
  ],
}