var struct = require("new-struct");
var path = require("path");
var Starter = require("kik-starter");
var fs = require("fs");
var mix = require("mix-objects");
var filesToRender = require('./to-render.json');

var folder = path.join(__dirname, 'files');
var form = [];

var ReduxStarter = struct(Starter, {
  start: start
});

module.exports = NewReduxStarter;

function NewReduxStarter (project) {
  return ReduxStarter({
    name: 'redux',
    project: project,
    folder: folder,
    form: form
  });
}

function start (starter, callback) {
  starter.serially()
    .run(starter.copy, [folder])
    .then(starter.render, [filesToRender])
    .then(starter.rename, [{ 'components/main.js': 'components/{kik:slug}.js' }])
    .done(callback);
}
