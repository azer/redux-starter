var kik = require('kik');
var redux = require("./");

var myproject = kik({
  name: 'yolo',
  folder: '/tmp/yolo',
  //starters: [{ module: require('./'), subfolder: 'ui' }],
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
