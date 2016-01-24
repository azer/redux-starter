## redux-starter

Redux starter module for Kik. It comes with;

* React
* Redux
* Browserify (Babelify)
* UglifyJS

## Install

Create your project with [kik](http://github.com/starters/kik) and choose `redux-starter` as one of your starters.

## Usage

It'll setup you a simple but ready-to-go boilerplate, with following commands;

* `npm run watch`: Build for development enviroment, watch for changes.
* `npm run build`: Build for production.
* `npm run serve`: Start serving the assets (under public/) on `localhost:8565`

Commands for writing code:

* `kik :action`: Add a new action.
* `kik :reducer`: Add a new reducer.
* `kik :component`: Add a new component.
* `kik :container`: Add a new container.
* `kik :route`: Add a new route.
* `kik :async-store`: Make the store async.

*P.S: `kik :action` is shortcut to `kik redux:action`. If kik recognizes your current working directory, you don't have to type the name of the starter before colon.*
