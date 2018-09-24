var request = require('request');
request.get('http://rabotyag.ga/games/RimWorld/RimWorld.txt', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var csv = body;
        // Continue with your processing here.
    }
});
