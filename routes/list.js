var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');
/* GET home page. */

router.get('/', function (req, res1, next) {
    var url = 'http://123.57.143.76:8010/api/qq/Reportslist?openid=oPPfSww-UoP3AKLQ43-d07CmyrVU';

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            list = null;
            var date=JSON.parse(body);
            console.log("list-body: \n"+body);
            list = date.results;
            res1.render('list', {title: '我的报告', list: list});
        }
    });
});
module.exports = router;
