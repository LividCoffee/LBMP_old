var http = require('http');
var fs = require('fs');
var async = require('async');

async.eachLimit(l_url[n], n, function(file, callback) {

  if (n<10)
  var file = fs.createWriteStream("./downloads/" + filename + "/" + filename + ".zip.00"+ n);
  else if (n<100)
  var file = fs.createWriteStream("./downloads/" + filename + "/" + filename + ".zip.0"+ n);
  else if (n<1000)
  var file = fs.createWriteStream("./downloads/" + filename + "/" + filename + ".zip."+ n);
  else
  console.log("error - n = " + n)

  var request = http.get(l_url[n] , function(response)
  {
    response.pipe(file);
  });
},
function(err){});

//console.log(file);

/*
reciver
links
download
check
download
install
remover
*/
