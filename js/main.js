$(function() {
    var express = require('express');
    var app = express();
    var server = require('http').createServer(app);
    var io = require('../..')(server);
    var port = process.env.PORT || 3000
})
