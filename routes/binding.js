/**
 * Created by Administrator on 2016/11/11.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var openid=req.query.openid;
    res.render('binding',{title: '绑定手机',openid:openid});
});
module.exports = router;
