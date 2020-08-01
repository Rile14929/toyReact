const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  mode: 'development',
  optimization: {
    minimize: false
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-react-jsx', { pragma: 'ToyReact.createElement' }]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};