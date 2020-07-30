const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const configProject = {
  entryJs: {
    main: './src/js/main.js',
    main_dynamic: './src/js/main-dynamic.js'
  },
  publicPath: 'dist',
  portServer: 3003,
  htmlTemplate: {
    main: './main.html',
    main_dynamic: './main-dynamic.html'
  }
};

module.exports = {
  mode: 'development',
  entry: {
    main: configProject.entryJs.main,
    main_dynamic: configProject.entryJs.main_dynamic
  },
  output: {
    path: path.resolve(__dirname, configProject.publicPath),
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, configProject.publicPath),
    port: configProject.portServer,
    compress: true,
    hot: true,
    stats: 'errors-only'
    //open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      title: 'main',
      template: 'main.html',
      filename: 'main.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'main-dynamic.html',
      filename: 'main-dynamic.html',
      title: 'main dynamic'
    }),
  ],
  optimization: {
    minimize: false
  }
};