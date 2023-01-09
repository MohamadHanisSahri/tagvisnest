'use strict';
const debug = require('debug')('my express app');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const config = require("./server_config.js");

/*const routes = require('./routes/index');
const users = require('./routes/users');*/

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, PUT"
    );
    next();
});
app.use(logger('dev'));

/*app.use('/', routes);
app.use('/users', users);*/

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
/*if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}*/

// production error handler
// no stacktraces leaked to user
/*app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});*/

//app.set('port', process.env.PORT || 3000);

app.listen(config.port, () =>
    console.log("Server is listening on http://localhost:" + config.port)
);

/*const server = app.listen(app.get(config.port), () => {
    debug('Express server listening on port ' + server.address().config.port);
    console.log('Express server listening on port ' + server.address().config.port);
});*/
