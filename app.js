var express = require('express');
var http = require('http');
var fs = require('fs');


var App = function() {};

App.prototype.start = function(options) {
    this.options = options;
    this.initManagers();
};

App.prototype.initExpressServer = function() {
    this.app = express();
    this.server = http.createServer(this.app);


    // Bootstrap models
    console.log('Init Express...OK');
};


App.prototype.initAPI = function() {
    this.app.use('/', require('./routers/router'));
    console.log('Init Router... OK');
};

App.prototype.initManagers = function() {

    this.initExpressServer();
    this.initAPI();
    this.run();

};

App.prototype.run = function() {
    var port = this.options.port;
    this.server.listen(port);
    console.log('Server is running');
};

module.exports = App;