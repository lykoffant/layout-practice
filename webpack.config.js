const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const PrettierWebpackPlugin = require('prettier-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerWebpackPlugin = require('image-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ObsoleteWebpackPlugin = require('obsolete-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const mode = process.env.NODE_ENV;
const isDevServ = mode === 'development-serve' ? true : false;
const isDev = mode === 'development' || isDevServ ? true : false;
console.log('Webpack mode:', mode);

function getOutputDir(isDevServ, isDev) {
  if (isDevServ) {
    return 'dist/serve/';
  }

  return isDev ? 'dist/development/' : 'dist/production/';
}

module.exports = {
  target: isDevServ ? 'web' : 'browserslist',
  mode: isDev ? 'development' : 'production',
  entry: {
    'ui-kit': path.resolve(__dirname, 'src/ui-kit.js'),
  },
  output: {
    path: path.resolve(__dirname, getOutputDir(isDevServ, isDev)),
    filename: 'scripts/[name].[contenthash].js',
    publicPath: '',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'ui-kit.html',
      template: path.resolve(__dirname, 'src/ui-kit.pug'),
      chunks: ['ui-kit'],
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].[contenthash].css',
    }),
    new StylelintWebpackPlugin({
      fix: true,
    }),
    new ESLintWebpackPlugin(),
    new PrettierWebpackPlugin(),
    new ObsoleteWebpackPlugin({
      name: 'obsolete',
      promptOnNonTargetBrowser: true,
    }),
    new ScriptExtHtmlWebpackPlugin({
      async: 'obsolete',
    }),
    new FaviconsWebpackPlugin({
      logo: './src/theme/favicon.jpg',
      prefix: 'favicons/',
      favicons: {
        logging: true,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          firefox: false,
          windows: false,
          yandex: false,
        },
      },
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new ImageMinimizerWebpackPlugin({
        minimizerOptions: {
          plugins: [
            ['mozjpeg', { quality: 80 }],
            ['pngquant', { quality: [0.5, 0.8] }],
            [
              'svgo',
              {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                ],
              },
            ],
          ],
        },
      }),
      new TerserWebpackPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|svg|ttf|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: (url, resourcePath) => {
                if (
                  /(Regular|Bold)\.svg/.test(resourcePath) ||
                  /\.(ttf|woff)/.test(resourcePath)
                ) {
                  return `fonts/${url}`;
                }

                return `images/${url}`;
              },
            },
          },
        ],
      },
    ],
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    contentBase: path.resolve(__dirname, getOutputDir(isDevServ, isDev)),
  },
};
