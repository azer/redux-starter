var Project = require('hek');
var redux = require("./");

var myproject = new Project({
  name: 'yolo',
  folder: '/tmp/yolo',
  starters:[require('./')],
  remote: 'azer/yolo',
  context: {
    github: 'azer'
  }
});

myproject.create(function (error) {
  if (error) throw error;
  console.log('done');
});
