(function() {
  'use strict';

  var Reparst = require('reparst'),
      MongoClient= require('mongodb').MongoClient,
      mongoUser = 'quiznode',
      mongoPass = 'qu13n0d3r',
      host      = 'ds033037.mongolab.com:33037',
      dbName    = 'quiznode',
      dbUrl = 
        'mongodb://' + mongoUser + ':' + mongoPass + '@' + host + '/' + dbName;

  var router = new Reparst(__dirname + '/schema');

  var serverApp = {
    'serve': router.route
  };

  module.exports = {
    'ready': function(cb) {
      MongoClient.connect(dbUrl, cb);
    }
  };

})();


