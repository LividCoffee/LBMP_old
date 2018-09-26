var http = require('http');
var fs = require('fs');
var async = require('async');

async.eachLimit(l_url[n], n, function(file, callback) {
  var file = fs.createWriteStream("./downloads/" + filename + "/" + filename + ".zip.00"+ n);
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
