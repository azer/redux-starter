"use strict"

var path = require("path");
var Starter = require("hek-starter");
var fs = require("fs");
var optionalDependencies = require("./optional-dependencies.json");

var folder = path.join(__dirname, 'files');
var form = [
  { key: 'router', title: 'Need routing? (Yes/No?)', yesno: true },
  { key: 'asyncStore', title: 'Store is sync by default. Prefer async? (Yes/No?)', yesno: true }
];

var render = [
  "README.md",
  "package.json",
  "index.js",
  "containers/app.js",
  "public/index.html"
];

class ReduxStarter extends Starter {
  constructor(project) {
    super(project);

    this.name = 'redux';
    this.project = project;
    this.folder = folder;
    this.form = form;
    this.commands = [
      'action',
      'reducer',
      'component',
      'container',
      'route',
      'async-store'
    ];
  }

  start(callback) {
    var rename = { 'containers/app.js': 'containers/{hek:slug}.js' };
    var remove = [];
    var dependencies = [];

    var async = this.context.asyncStore;
    var router = this.context.router;

    if (async && router) {
      rename['store/_async_router.js'] = 'store/index.js';
      remove.push('store/_simple.js', 'store/_simple_router.js', 'store/_async.js');
      dependencies.push('redux-simple-router', 'react-router', 'redux-thunk');
    } else if (async) {
      rename['store/_async.js'] = 'store/index.js';
      remove.push('store/_simple.js', 'store/_simple_router.js', 'store/_async_router.js');
      dependencies.push('redux-thunk');
    } else if (router) {
      rename['store/_simple_router.js'] = 'store/index.js';
      remove.push('store/_simple.js', 'store/_async_router.js', 'store/_async.js');
      dependencies.push('redux-simple-router', 'react-router');
    } else {
      rename['store/_simple.js'] = 'store/index.js';
      remove.push('store/_simple_router.js', 'store/_async_router.js', 'store/_async.js');
    }

    this.context.optionalDependencies = renderOptionalDependencies(dependencies);

    this.serial()
      .run(this.copy)
      .then(this.render, [render])
      .then(this.rename, [rename])
      .then(this.remove, [remove])
      .done(callback);
  }
}

module.exports = ReduxStarter;

function renderOptionalDependencies (deps) {
  if (deps.length == 0) return '';

  return deps.map(function (d) {
    return ',\n    "' + d + '": "' + optionalDependencies[d] + '"';
  }).join('');
}
