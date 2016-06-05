## redux-starter

Redux starter module for [hek](http://github.com/hek/hek). It comes with;

* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org)
* [Browserify](http://github.com/substack/node-browserify) with [Babelify](https://github.com/babel/babelify)
* [UglifyJS](https://github.com/mishoo/UglifyJS)
* [Standard](https://github.com/feross/standard)

## Install

Create your project with [hek](http://github.com/hek/hek) and choose `redux-starter` as one of your starters.

## Usage

It'll setup you a simple but ready-to-go boilerplate, with following commands;

* `npm run watch`: Build for development enviroment, watch for changes.
* `npm run build`: Build for production.
* `npm run serve`: Start serving the assets (under public/) on `localhost:8565`

Commands for writing code: (this is not done yet)

* `hek :action`: Add a new action.
* `hek :reducer`: Add a new reducer.
* `hek :component`: Add a new component.
* `hek :container`: Add a new container.
* `hek :route`: Add a new route.
* `hek :async-store`: Make the store async.

*P.S: `hek :action` is shortcut to `hek redux:action`. If hek recognizes your current working directory, you don't have to type the name of the starter before colon.*
