"use strict"

var path = require("path");
var Starter = require("kik-starter");
var fs = require("fs");
var filesToRender = require('./to-render.json');

var folder = path.join(__dirname, 'files');
var form = [];

class ReduxStarter extends Starter {
  constructor(project) {
    super('redux', project, folder, form);
  }

  start(callback) {
    this.serial()
      .run(this.copy)
      .then(this.render, [filesToRender])
      .then(this.rename, [{ 'components/main.js': 'components/{kik:slug}.js' }])
      .done(callback);
  }
}

module.exports = ReduxStarter;
