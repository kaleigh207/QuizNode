(function() {
  'use strict';

  var http = require('http');
  var url  = require('url');
  var nStatic = require('node-static');

  var api = require('./server/index.js');

  api.ready(function(serverApp) {
    var clientApp = new nStatic.Server('./client');

    http.createServer(function(req, res) {
      var parsedUrl = url.parse(req.protocol + '://' + req.headers.host);
      var isServerRequest = parsedUrl.hostname.match(/^api/);

      if(isServerRequest) serverApp.serve.apply(serverApp, arguments);
      else clientApp.serve.apply(clientApp, arguments);

    }).listen(8080);

  });
})();

