var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');


router.get('/', function (req, res1, next) {
    var recordid=req.query.ReportId;
    var type=req.query.type;
    var userid=req.query.userid;
    var url='http://123.57.143.76:8010/api/qq/api/qq/Reportsdetial?recordid='+recordid+'&&type='+type+'&&userid='+userid;
    //var url='http://123.57.143.76:8010/api/qq/Reportsdetial?recordid=1cc97ed8-48ad-4e16-89d5-044523d72135&&type=0&&userid=f7076924-a2ae-4727-a098-331b64ef877e';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            detial = null;
            var date=JSON.parse(body);
            detial = date.results;
            console.log(detial);
            res1.render('lab',{title: '我的列表', detial: detial});
        }
    });

});
router.get('/lab', function (req, res1, next) {
    var recordid=req.query.ReportId;
    var type=req.query.type;
    var userid=req.query.userid;
    var url='http://123.57.143.76:8010/api/qq/api/qq/Reportsdetial?recordid='+recordid+'&&type='+type+'&&userid='+userid;
    //var url='http://123.57.143.76:8010/api/qq/Reportsdetial?recordid=1cc97ed8-48ad-4e16-89d5-044523d72135&&type=0&&userid=f7076924-a2ae-4727-a098-331b64ef877e';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            detial = null;
            var date=JSON.parse(body);
            detial = date.results;
            console.log(detial);
            res1.render('lab',{title: '我的列表', detial: detial});
        }
    });

});
//router.get('/', function (req, res, next) {
//    res.render(date);
//});
module.exports = router;
