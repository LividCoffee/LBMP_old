var http = require('http');
var fs = require('fs');
var async = require('async');

for (n = 1; n <= count; n++)
{
//console.log(n);
//console.log(l_check[n]);
async.eachLimit(l_check[n], n, function(file, callback) {
  var file = fs.createWriteStream("./downloads/" + filename + "/" + filename + "_" + n + ".MD5");
  var request = http.get(l_check[n] , function(response)
  {
    response.pipe(file);
  });
}, function(err){
});
};
