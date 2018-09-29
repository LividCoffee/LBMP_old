var md5 = require("nodejs-md5");
var fs = require('fs');

function done(check) {
  fs.readFile("./downloads/" + filename + "/" + filename + "_" + n + ".MD5", (err, data) => {
  if (err) throw err;
    console.log(data);
  });
  check = 1;
  var checkfile = data;
  console.log(checkfile);
  console.log(check);
}

done(check);
