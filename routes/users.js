var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');


router.get('/', function (req, res1, next) {
    var recordid=req.query.ReportId;
    var type=req.query.type;
    var userid=req.query.userid;
    var url='http://123.57.143.76:8010/api/qq/Reportsdetial?recordid='+recordid+'&&type='+type+'&&userid='+userid;
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var date=JSON.parse(body);
            detial = null;
            detial = date.results;
            console.log("detial: \n"+body);
            res1.render('lab',{title: '我的列表', detial: detial});
        }
    });

});
module.exports = router;
