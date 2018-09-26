var http = require('http');
var fs = require('fs');




var file = fs.createWriteStream("./downloads/" + filename + "/RimWorld.txt");
var request = http.get(Host + filename + "/" + filename + ".txt", function(response)
{
  response.pipe(file);
});

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
