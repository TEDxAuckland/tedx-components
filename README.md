# ted-x-components

## Installation

clone to the same level as the `tedx-auckland-site` repo eg:
```
folder
  |+ tedx-auckland-site
  |+ tedx-components
```

This project has a number of npm commands to make development easier that rely on that folder structure.

## Project setup
### Install NPM Packages
```
yarn install
```
### Import JSON Files and CSS
```
yarn run import:assets
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production as a library
```
yarn run build:lib
```
### Compile and export libray to tedx-auckland-site
```
yarn run build-and-export
```

### Lints and fixes files
```
yarn run lint
```

## Usage

Clone this repo into the correct location then run `yarn run import:assets`.

`src/App.vue` is used to preview the components but is not exported. So you can import supporting libraries / data like the `people.json` for component development.

Entries are listed in `src/sections/index.js`. These components will be exported along with anything imported into them.

Create top level components in `src/sections` and their supporting components in `src/components`.

When ready to export run `yarn run build-and-export` and it will put the built libraries in the correct location in the jekyll project.

For an example of how to mount the components look at the main jekyll repo `tedx-auckland-site` in the speakers include.
