'use strict';

var express = require('express');
var app = express();
var logger = require('./lib/logger');

var server = app.listen('3000', function(){
    var host = server.address().address;
    var port = server.address().port;
    logger.info('Server start at http://%s:%s', '0.0.0.0', 3000);
});