# layout-practice

[This repository](https://github.com/lykoffant/layout-practice) contains the layout of the website. This project is not finished yet and is under development.

## Table of contents

- [Target of the project](#target-of-the-project)
- [Demonstration of layout](#demonstration-of-layout)
- [Technical task](#technical-task)
- [Features](#features)
  - [Dependencies](#dependencies)
  - [File structure](#file-structure)
- [How to work](#how-to-work)
  - [Install dependencies](#install-dependencies)
  - [Start development server](#start-development-server)
  - [Build a project for production](#build-a-project-for-production)
  - [Commit all changes](#commit-all-changes)
  - [Format source code](#format-source-code)
  - [Check source code](#check-source-code)

## Target of the project

The target of the project is to demonstrate the completion of the second practice task from the [list](https://rizzoma.com/topic/d5c429337bcaa70548fb5aeedee6d92b/0_b_8ndo_78h6s/).

## Demonstration of layout

Demonstration of the [UI kit](https://lykoffant.github.io/layout-practice/dist/ui-kit.html).

## Technical task

The technical task is described in the second task from the [list](https://rizzoma.com/topic/d5c429337bcaa70548fb5aeedee6d92b/0_b_8ndo_78h6s/) created by [MetaLamp](https://www.metalamp.io/).

### File structure

Folder list:

- [root](#root)
  - [src](#src)
    - [components](#components)
    - [theme](#theme)
    - [pages](#pages)
  - [dist](#dist)
    - [development](#development)
    - [production](#production)

#### `root`

```
root
├── dist
├── src
├── .browserslistrc
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── .stylelintrc.json
├── README.md
├── babel.config.json
├── package-lock.json
├── package.json
└── webpack.config.js
```

##### `src`

```
root/src/
├── components
├── pages
└── theme
```

###### `components`

```
root/src/components/
└── library.blocks
    ├── demo-section
    │   ├── demo-section.js
    │   ├── demo-section.pug
    │   ├── demo-section.scss
    │   └── logo.svg
    └── heading-level-1
        ├── _hidden
        │   ├── heading-level-1_hidden.js
        │   └── heading-level-1_hidden.scss
        ├── heading-level-1.js
        ├── heading-level-1.pug
        └── heading-level-1.scss
```

###### `theme`

```
root/src/theme/
├── fonts
│   ├── Montserrat
│   │   ├── Montserrat-Bold.svg
│   │   ├── Montserrat-Bold.ttf
│   │   ├── Montserrat-Bold.woff
│   │   ├── Montserrat-Regular.svg
│   │   ├── Montserrat-Regular.ttf
│   │   ├── Montserrat-Regular.woff
│   │   └── OFL.txt
│   └── fonts.scss
├── favicon.jpg
├── global.scss
└── variables.scss
```

###### `pages`

```
root/src/pages/
└── ui-kit
    ├── ui-kit.js
    └── ui-kit.pug
```

##### `dist`

```
root/dist/
├── development
└── production
```

###### `development`

> Note
>
> Demonstrated, the hash of the files may differ from the actual value.

```
root/dist/development/
├── favicons
│   └── favicon.jpg
├── fonts
│   ├── Montserrat-Bold.079ca05d3ded9bc107ab8a8da013be22.ttf
│   ├── Montserrat-Bold.20cbced113d2ce2b39538419e59883e7.svg
│   ├── Montserrat-Bold.4daf156dd0749a7c2469abc813f3950f.woff
│   ├── Montserrat-Regular.3cd786652b8a2e9d41f210cb1a527ff6.ttf
│   ├── Montserrat-Regular.4972a63efd7113b767a58fdbb7b2ce6d.woff
│   └── Montserrat-Regular.faf1674c5ade844bbbe6f84e0a997fdc.svg
├── images
│   └── logo.c2a93d6ae04f381031de3bb8cecdf4b0.svg
├── scripts
│   ├── obsolete.e835565041ff02636a94eef11b91c302.js
│   ├── obsolete.e835565041ff02636a94eef11b91c302.js.map
│   ├── ui-kit.25b7be27ab999afc3e00.js
│   ├── ui-kit.25b7be27ab999afc3e00.js.map
│   ├── vendors.8ca585592b0fe1c8a269.js
│   └── vendors.8ca585592b0fe1c8a269.js.map
├── style
│   ├── ui-kit.a92fd7b447d27fbd7c21.css
│   ├── ui-kit.a92fd7b447d27fbd7c21.css.map
│   ├── vendors.5c88d9a379095d470304.css
│   └── vendors.5c88d9a379095d470304.css.map
└── ui-kit.html
```

###### `production`

> Note
>
> Demonstrated, the hash of the files may differ from the actual value.

```
root/dist/production/
├── favicons
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon-48x48.png
│   └── favicon.ico
├── fonts
│   ├── Montserrat-Bold.079ca05d3ded9bc107ab8a8da013be22.ttf
│   ├── Montserrat-Bold.21abe37ea60f2ed98f502d03eb5b3f2e.svg
│   ├── Montserrat-Bold.4daf156dd0749a7c2469abc813f3950f.woff
│   ├── Montserrat-Regular.3cd786652b8a2e9d41f210cb1a527ff6.ttf
│   ├── Montserrat-Regular.4972a63efd7113b767a58fdbb7b2ce6d.woff
│   └── Montserrat-Regular.89c64238f78cf22052f4391d87ec4a74.svg
├── images
│   └── logo.4aed963919244bf33f7b9fb4e92a7f0b.svg
├── scripts
│   ├── obsolete.e835565041ff02636a94eef11b91c302.js
│   ├── ui-kit.e23f2e70f40e5e1e2739.js
│   └── vendors.d1b4664c9e32c1634922.js
├── style
│   ├── ui-kit.00bc9be88aa9d6642a9f.css
│   └── vendors.78216e31086858679b54.css
└── ui-kit.html
```

## How to work

### Install dependencies

```commandline
npm install
```

### Start development server

```commandline
npm run serv
```

To see all the possible project pages, visit:

- [http://localhost:8080/ui-kit.html](http://localhost:8080/ui-kit.html)


### Build a project for production

```commandline
npm run build
```

### Commit all changes

Build a project for development and production, and then commit all changes.

```commandline
npm run commit-all
```

### Format source code

```commandline
npm run format
```

### Check source code

```commandline
npm run check
```

#### Check source code formatting

```commandline
npm run check:prettier
```

#### Check source code of the styles

```commandline
npm run check:stylelint
```

##### Check source code of the styles and fix it

```commandline
npm run check:stylelint -- --fix
```

##### Check source code of the styles and fix it with formatting

```commandline
npm run check:stylelint -- --fix && npm run format
```

#### Check source code of the scripts

```commandline
npm run check:eslint
```
