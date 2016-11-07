var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');
/* GET users listing. */
/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET
router.get('/query', function (req, res1, next) {

    var recorded=req.query.recorded;
    var type=req.query.type;
    var userid=req.query.userid;
    var url='http://123.57.143.76:8010/api/qq/api/qq/Reportsdetial?recorded='+recorded&&type=&&userid=';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var date = JSON.parse(body);
            res1.render('lab',{title: '我的列表', date: date});
        }
    });

});
//router.get('/', function (req, res, next) {
//    res.render(date);
//});
module.exports = router;
