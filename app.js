var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var list = require('./routes/list');
var detial = require('./routes/detial');
var binding = require('./routes/binding');
var updatephone=require('./routes/updatephone')
var app = express();



var log4js = require('log4js');
log4js.configure("./log4js.json");
var logInfo = log4js.getLogger('logInfo');

console.log("log_start start!");
logInfo.info("测试日志信息");
logInfo.trace('This is a Log4js-Test');
logInfo.debug('We Write Logs with log4js');
logInfo.info('You can find logs-files in the log-dir');
logInfo.warn('log-dir is a configuration-item in the log4js.json');
logInfo.error('In This Test log-dir is : \'./logs/log_test/\'');

console.log("log_start end!");


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', list);
app.use('/detial', detial);
app.use('/binding', binding);
app.use('/updatephone', updatephone);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
