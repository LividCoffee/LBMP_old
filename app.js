var app = require('express')();
var fs = require('fs');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/phpcallback', function(req, res) {
    var content = req.body;
    console.log(content.msg);
    res.end('ok');

    var http = require('http');
    var fs = require('fs');

    var file = fs.createWriteStream("downloaded/" + content.msg);
    var request = http.get('http://localhost/' + content.msg, function(response) {
        response.pipe(file);
    });
});

http.listen(8080, function(){
  var addr = http.address();
  console.log('app listening on ' + addr.address + ':' + addr.port);
});