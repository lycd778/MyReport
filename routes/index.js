var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function (req, res, next) {
    var personStr = '[\
        {\
            "checkdatime" : "2016-10-26",\
            "typename" :"心肺评估",\
            "typecode" : "1",\
            "userid":"9"\
        },\
        {\
            "checkdatime" : "2016-11-01",\
            "typename" : "心脏彩超",\
            "typecode" : "1",\
            "userid":"9"\
        },\
        {\
            "checkdatime" : "2016-11-02",\
            "typename" : "尿常规",\
            "typecode" : "0",\
            "userid":"9"\
        },\
       {\
            "checkdatime" : "2016-11-03",\
            "typename" : "血脂",\
            "typecode" : "0",\
            "userid":"9"\
        },\
        {\
            "checkdatime" : "2016-09-11",\
            "typename" : "血常规",\
            "typecode" : "0",\
            "userid":"9"\
        }\
    ]';
    var persons = JSON.parse(personStr);
    res.render('index', {title: '我的报告', person: persons});
});
module.exports = router;
