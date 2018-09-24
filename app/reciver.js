var request = require('request');
request.get('http://rabotyag.ga/games/RimWorld/RimWorld.txt', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var txt = body;
        var str = txt.split("/n");
        console.log(str[1], str[2]);
        // Continue with your processing here.
    }
});
