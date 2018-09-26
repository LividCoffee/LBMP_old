var http = require('http');
var fs = require('fs');

for (n = 1; n <= count; n++)
{
//console.log(n);
//console.log(l_check[n]);
var file = fs.createWriteStream("./downloads/" + filename + "/" + filename + "_" + n + ".MD5");
var request = http.get(l_check[n] , function(response)
{
response.pipe(file, { end: false });
var a = false;
file.end(a = true);
});


while (a != true)
{
  setTimeout(function () {
    console.log(n);
  }, 500);
}

};
