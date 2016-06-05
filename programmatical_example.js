var Project = require("hek");
var ReduxStarter = require("./");

var yolo = new Project({
  name: 'yolo',
  folder: '/tmp/yolo',
  starters: [ReduxStarter],
  remote: 'azer/yolo',
  context: {
    github: 'azer'
  }
});

yolo.starters[0].context = {
  asyncStore: false,
  router: false
};

yolo.create(function (error) {
  if (error) throw error;
  console.log('done');
});
