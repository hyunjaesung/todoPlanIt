const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, options) => {
  const config = {
    entry: {
      //컴파일 시작점
      main: './src/entry',
    },
    output: {
      // 컴파일 생산물
      filename: '[name].bundle.js',
      path: path.join(__dirname, '/dist'),
      publicPath: '/', // 빌드완료후 스태틱파일 위치
    },
    plugins: [
      new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        // 컴파일 이후 결과물 html 파일을 생성
        title: 'webpack-react-start-kit',
        template: './public/index.html', // 참고할 html 파일
        filename: './index.html',
        favicon: './public/favicon.ico',
      }),
      new MiniCssExtractPlugin({
        // css 분리
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/, // ts나 tsx는 다 걷어라
          loader: 'awesome-typescript-loader',
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: true,
                reloadAll: true,
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|svg|gif)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: '/',
              },
            },
          ],
        },
      ],
    },
    optimization: {},
    resolve: {
      modules: ['node_modules'],
      extensions: ['.jsx', '.js', '.tsx', '.ts', '.css'],
      alias: { 'react-dom': '@hot-loader/react-dom' },
    },
    devtool: 'eval',
    devServer: {
      contentBase: path.join(__dirname, '/public'),
      noInfo: true,
      open: true,
      port: 9000,
      after: function(app, server) {
        app.listen(3000, function() {
          console.log('Webpack dev server is listening on port 9000');
        });
      },
    },
  };

  if (options.mode === 'development') {
    // development 모드일 경우
  } else {
    // production 모드일 경우
  }

  return config;
};
