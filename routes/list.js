var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');
/* GET list page. */

router.get('/', function (req, res1, next) {
    var openid=req.query.openid;
    var url = 'http://123.57.143.76:8010/api/qq/Reportslist?openid='+openid;
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            list = null;
            var date=JSON.parse(body);
            list = date.results;
            res1.render('list', {title: '我的报告', list: list});
        }else if(!error && response.statusCode == 500){
            res1.render('error', {
                message: '需要先绑定手机才能查看"我的报告"',
                error: {}
            });
        }
    });
});
module.exports = router;
