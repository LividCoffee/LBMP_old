var http = require('http');
var fs = require('fs');

for (n = 1; n <= count; n++)
{
  console.log(n);
var file = fs.createWriteStream("./downloads/" + filename + "/" + filename + "_" + n + ".MD5");
var request = http.get(l_check[n] , function(response)
{
  response.pipe(file);
});
};
