var fs = require('fs');
Host = "http://31.40.108.21"

var reciver = require('./reciver.js');
var links = require('./links.js');

setTimeout(function () {

  if (!fs.existsSync("./downloads/" + filename)){
      fs.mkdirSync("./downloads/" + filename);
  };
  n = 0;
  var checkerload = require('./checkerload.js');

  check = 0;
  var checker = require('./checker.js');


  for (n = 1; n <= count; n++)
  {
   check = 0;
   if (checker.done == 0)
   var download = require('./download.js');
  }


//var install = require('./install.js');
}, 500);
