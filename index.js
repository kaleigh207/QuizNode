var http = require('http');
var url  = require('url');
var static = require('node-static');

var api = require('./server/index.js');

api.ready(function(serverApp) {
  var clientApp = new static.Server('./client');

  http.createServer(function(req, res) {
    var hostname = url.parse('http://' + req.headers.host).hostname;
    var isServerRequest = hostname.match(/^api/);

    if(isServerRequest) serverApp.serve.apply(serverApp, arguments);
    else clientApp.serve.apply(clientApp, arguments);

  }).listen(8080);

});

