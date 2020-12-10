var express = require('express');

var logger = require('morgan');
var nunjucks = require('nunjucks');
var routes = require('./routes/applicationController');

var app = express();


app.use(express.urlencoded({
  extended: true
}))
//Nunjucks setup
nunjucks.configure('views', {
	autoescape: true,
	express: app
});
app.set('view engine', 'nunjucks');

// Routes setup
app.use('/', routes);


app.use(logger('dev'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
