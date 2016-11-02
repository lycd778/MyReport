var express = require('express');
var router = express.Router();
var http = require('http');
var querystring = require('querystring');
/* GET users listing. */
/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET
router.get('/:userid', function (req, res1, next) {
    var url='/intecup/getmwater.php?id='+req.params.userid;
    var optionsget = {
        host: '103.236.253.92',
        port: 80,
        path: url,
        method: 'GET'
    };

    console.info('Options prepared:');
    console.info(optionsget);
    console.info('Do the GET call');

// do the GET request
    var reqGet = http.request(optionsget, function (res) {
        console.log("statusCode: ", res.statusCode);
        // uncomment it for header details
//	console.log("headers: ", res.headers);

        res.on('data', function (d) {
            console.info('GET result:\n');
            process.stdout.write(d);
            var date = JSON.parse(d);
            res1.send(date);
            console.info('\n\nCall completed');
        });

    });
    reqGet.end();
    reqGet.on('error', function (e) {
        console.error(e);
    });

});
//router.get('/', function (req, res, next) {
//    res.render(date);
//});
module.exports = router;
