var request = require('request');
request.get('http://31.40.108.21/RimWorld/RimWorld.txt', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var txt = body;
        var str = txt.split('_');
        //console.log(str[0], str[1]);
         filename = str[0];
         count = str[1];
    }
});
