var md5 = require("nodejs-md5");
var fs = require('fs');

function done(check) {
  if (n<10)
  var path = ("./downloads/" + filename + "/" + filename + ".zip.00"+ n).toString;
  else if (n<100)
var path = ("./downloads/" + filename + "/" + filename + ".zip.0"+ n).toString;
  else if (n<1000)
var path = ("./downloads/" + filename + "/" + filename + ".zip."+ n).toString;
  else
  console.log("error - n = " + n)

  var md5_s = fs.readFileSync("./downloads/" + filename + "/" + filename + "_" + n + ".MD5", "utf8");
	return md5_s;

  md5.file(path , function(err, md5) {
      if (err) {
          console.log(err);
      }
      else {
          var md5_f = md5;
          console.log(md5_f);
      }
      	return md5_f;
  });

if (md5_s == md5_f)
  check = 1;
  //console.log(md5_s);
  //console.log(md5_f);
  //console.log(check);
  //return check;
}
