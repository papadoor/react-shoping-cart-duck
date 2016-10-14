import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
        path.join(__dirname, 'client'),
        path.join(__dirname, 'server/shared')
        ],
        loaders: ['babel-loader']
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(otf|eot|png|jpg|mp4|webm|gif|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=100000" },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded&' + 'includePaths[]=' +
                  (path.resolve(__dirname, './node_modules'))
      }
    ]
  },
  resolve: {
    extentions: ['', '.js']
  },
   devServer: {
      historyApiFallback: true
  }
}