# layout-practice

[This repository](https://github.com/lykoffant/layout-practice) contains the layout of the website. This project is not finished yet and is under development.

## Target of the project

The target of the project is to demonstrate the completion of the second practice task from the [list](https://rizzoma.com/topic/d5c429337bcaa70548fb5aeedee6d92b/0_b_8ndo_78h6s/).

## Demonstration of layout

UI kit:

- [development mode](/dist/development/ui-kit.html);
- [production mode](/dist/production/ui-kit.html).

## Technical task

The technical task is described in the second task from the [list](https://rizzoma.com/topic/d5c429337bcaa70548fb5aeedee6d92b/0_b_8ndo_78h6s/) created by [MetaLamp](https://www.metalamp.io/).

## Features

- [Webpack](https://webpack.js.org)
  - [Plugins](#Plugins)
  - [Loaders](#Loaders)
- [Webpack CLI](https://github.com/webpack/webpack-cli)
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- [Devtool](https://webpack.js.org/configuration/devtool/)
- [Template strings (output filename)](https://webpack.js.org/configuration/output/#template-strings)
- [Browserslist](https://github.com/browserslist/browserslist)
- [npm-run-all](https://github.com/mysticatea/npm-run-all)
- [cross-env](https://github.com/kentcdodds/cross-env)

### Plugins

- [Clean Webpack Plugin](https://github.com/johnagan/clean-webpack-plugin)
  - [Html Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)
    - [Script Ext Html Webpack Plugin](https://github.com/numical/script-ext-html-webpack-plugin)
    - [Favicons Webpack Plugin](https://github.com/jantimon/favicons-webpack-plugin)
      - [Favicons](https://github.com/itgalaxy/favicons)
  - [Mini Css Extract Plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
  - [Css Minimizer Webpack Plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin)
  - [Stylelint Webpack Plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin)
    - [Stylelint](https://stylelint.io)
    - [stylelint-no-unsupported-browser-features](https://github.com/ismay/stylelint-no-unsupported-browser-features)
    - [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines)
    - [stylelint-order](https://github.com/hudochenkov/stylelint-order)
    - [stylelint-config-hudochenkov/order](https://github.com/hudochenkov/stylelint-config-hudochenkov/blob/master/order.js)
  - [ESLint Webpack Plugin](https://github.com/webpack-contrib/eslint-webpack-plugin)
    - [ESLint](https://eslint.org)
    - [@babel/eslint-parser](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser)
    - [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)
  - [Prettier Webpack Plugin](https://github.com/hawkins/prettier-webpack-plugin)
    - [Prettier](https://prettier.io)
    - [@prettier/plugin-pug](https://github.com/prettier/plugin-pug)
  - [Terser Webpack Plugin](https://github.com/webpack-contrib/terser-webpack-plugin)
  - [Obsolete Webpack Plugin](https://github.com/ElemeFE/obsolete-webpack-plugin)
  - [Image Minimizer Webpack Plugin](https://github.com/webpack-contrib/image-minimizer-webpack-plugin)
    - [Imagemin](https://github.com/imagemin/imagemin)
    - [imagemin-mozjpeg](https://github.com/imagemin/imagemin-mozjpeg#readme)
    - [imagemin-pngquant](https://github.com/imagemin/imagemin-pngquant#readme)
    - [imagemin-svgo](https://github.com/imagemin/imagemin-svgo#readme)

### Loaders

- [file-loader](https://webpack.js.org/loaders/)
  - [pug-loader](https://github.com/pugjs/pug-loader)
    - [Pug](https://pugjs.org/api/getting-started.html)
  - [css-loader](https://github.com/webpack-contrib/css-loader)
  - [postcss-loader](https://github.com/webpack-contrib/postcss-loader)
    - [PostCSS](https://github.com/postcss/postcss)
    - [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
  - [resolve-url-loader](https://github.com/bholloway/resolve-url-loader/blob/master/packages/resolve-url-loader/README.md)
  - [sass-loader](https://github.com/webpack-contrib/sass-loader)
    - [Sass](https://sass-lang.com)
  - [babel-loader](https://github.com/babel/babel-loader)
    - [Babel](https://babeljs.io)
    - [@babel/core](https://github.com/babel/babel/tree/main/packages/babel-core)
    - [@babel/preset-env](https://github.com/babel/babel/tree/main/packages/babel-preset-env)
    - [@babel/eslint-parser](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser)
